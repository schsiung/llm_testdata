/* pb_decode.c -- decode a protobuf using minimal resources
 *
 * 2011 Petteri Aimonen <jpa@kapsi.fi>
 */

/* Use the GCC warn_unused_result attribute to check that all return values
 * are propagated correctly. On other compilers and gcc before 3.4.0 just
 * ignore the annotation.
 */
#if !defined(__GNUC__) || ( __GNUC__ < 3) || (__GNUC__ == 3 && __GNUC_MINOR__ < 4)
    #define checkreturn
#else
    #define checkreturn __attribute__((warn_unused_result))
#endif

#include "pb.h"
#include "pb_decode.h"

/**************************************
 * Declarations internal to this file *
 **************************************/

/* Iterator for pb_field_t list */
typedef struct {
    const pb_field_t *start; /* Start of the pb_field_t array */
    const pb_field_t *pos; /* Current position of the iterator */
    unsigned field_index; /* Zero-based index of the field. */
    unsigned required_field_index; /* Zero-based index that counts only the required fields */
    void *dest_struct; /* Pointer to the destination structure to decode to */
    void *pData; /* Pointer where to store current field value */
    void *pSize; /* Pointer where to store the size of current array field */
} pb_field_iterator_t;

typedef bool (*pb_decoder_t)(pb_istream_t *stream, const pb_field_t *field, void *dest) checkreturn;

static bool checkreturn buf_read(pb_istream_t *stream, uint8_t *buf, size_t count);
static bool checkreturn pb_decode_varint32(pb_istream_t *stream, uint32_t *dest);
static bool checkreturn read_raw_value(pb_istream_t *stream, pb_wire_type_t wire_type, uint8_t *buf, size_t *size);
static void pb_field_init(pb_field_iterator_t *iter, const pb_field_t *fields, void *dest_struct);
static bool pb_field_next(pb_field_iterator_t *iter);
static bool checkreturn pb_field_find(pb_field_iterator_t *iter, uint32_t tag);
static bool checkreturn decode_static_field(pb_istream_t *stream, pb_wire_type_t wire_type, pb_field_iterator_t *iter);
static bool checkreturn decode_callback_field(pb_istream_t *stream, pb_wire_type_t wire_type, pb_field_iterator_t *iter);
static bool checkreturn decode_field(pb_istream_t *stream, pb_wire_type_t wire_type, pb_field_iterator_t *iter);
static void iter_from_extension(pb_field_iterator_t *iter, pb_extension_t *extension);
static bool checkreturn default_extension_decoder(pb_istream_t *stream, pb_extension_t *extension, uint32_t tag, pb_wire_type_t wire_type);
static bool checkreturn decode_extension(pb_istream_t *stream, uint32_t tag, pb_wire_type_t wire_type, pb_field_iterator_t *iter);
static bool checkreturn find_extension_field(pb_field_iterator_t *iter);
static void pb_message_set_to_defaults(const pb_field_t fields[], void *dest_struct);
static bool checkreturn pb_dec_varint(pb_istream_t *stream, const pb_field_t *field, void *dest);
static bool checkreturn pb_dec_uvarint(pb_istream_t *stream, const pb_field_t *field, void *dest);
static bool checkreturn pb_dec_svarint(pb_istream_t *stream, const pb_field_t *field, void *dest);
static bool checkreturn pb_dec_fixed32(pb_istream_t *stream, const pb_field_t *field, void *dest);
static bool checkreturn pb_dec_fixed64(pb_istream_t *stream, const pb_field_t *field, void *dest);
static bool checkreturn pb_dec_bytes(pb_istream_t *stream, const pb_field_t *field, void *dest);
static bool checkreturn pb_dec_string(pb_istream_t *stream, const pb_field_t *field, void *dest);
static bool checkreturn pb_dec_submessage(pb_istream_t *stream, const pb_field_t *field, void *dest);
static bool checkreturn pb_skip_varint(pb_istream_t *stream);
static bool checkreturn pb_skip_string(pb_istream_t *stream);

#ifdef PB_ENABLE_MALLOC
static bool checkreturn allocate_field(pb_istream_t *stream, void *pData, size_t data_size, size_t array_size);
static void pb_release_single_field(const pb_field_iterator_t *iter);
#endif

/* --- Function pointers to field decoders ---
 * Order in the array must match pb_action_t LTYPE numbering.
 */
static const pb_decoder_t PB_DECODERS[PB_LTYPES_COUNT] = {
    &pb_dec_varint,
    &pb_dec_uvarint,
    &pb_dec_svarint,
    &pb_dec_fixed32,
    &pb_dec_fixed64,
    
    &pb_dec_bytes,
    &pb_dec_string,
    &pb_dec_submessage,
    NULL /* extensions */
};

/*******************************
 * pb_istream_t implementation *
 *******************************/

static bool checkreturn buf_read(pb_istream_t *stream, uint8_t *buf, size_t count)
{
    uint8_t *source = (uint8_t*)stream->state;
    stream->state = source + count;
    
    if (buf != NULL)
    {
        while (count--)
            *buf++ = *source++;
    }
    
    return true;
}

bool checkreturn pb_read(pb_istream_t *stream, uint8_t *buf, size_t count)
{
#ifndef PB_BUFFER_ONLY
	if (buf == NULL && stream->callback != buf_read)
	{
		/* Skip input bytes */
		uint8_t tmp[16];
		while (count > 16)
		{
			if (!pb_read(stream, tmp, 16))
				return false;
			
			count -= 16;
		}
		
		return pb_read(stream, tmp, count);
	}
#endif

    if (stream->bytes_left < count)
        PB_RETURN_ERROR(stream, "end-of-stream");
    
#ifndef PB_BUFFER_ONLY
    if (!stream->callback(stream, buf, count))
        PB_RETURN_ERROR(stream, "io error");
#else
    if (!buf_read(stream, buf, count))
        return false;
#endif
    
    stream->bytes_left -= count;
    return true;
}

/* Read a single byte from input stream. buf may not be NULL.
 * This is an optimization for the varint decoding. */
static bool checkreturn pb_readbyte(pb_istream_t *stream, uint8_t *buf)
{
    if (stream->bytes_left == 0)
        PB_RETURN_ERROR(stream, "end-of-stream");

#ifndef PB_BUFFER_ONLY
    if (!stream->callback(stream, buf, 1))
        PB_RETURN_ERROR(stream, "io error");
#else
    *buf = *(uint8_t*)stream->state;
    stream->state = (uint8_t*)stream->state + 1;
#endif

    stream->bytes_left--;
    
    return true;    
}

pb_istream_t pb_istream_from_buffer(uint8_t *buf, size_t bufsize)
{
    pb_istream_t stream;
#ifdef PB_BUFFER_ONLY
    stream.callback = NULL;
#else
    stream.callback = &buf_read;
#endif
    stream.state = buf;
    stream.bytes_left = bufsize;
#ifndef PB_NO_ERRMSG
    stream.errmsg = NULL;
#endif
    return stream;
}

/********************
 * Helper functions *
 ********************/

static bool checkreturn pb_decode_varint32(pb_istream_t *stream, uint32_t *dest)
{
    uint8_t byte;
    uint32_t result;
    
    if (!pb_readbyte(stream, &byte))
        return false;
    
    if ((byte & 0x80) == 0)
    {
        /* Quick case, 1 byte value */
        result = byte;
    }
    else
    {
        /* Multibyte case */
        uint8_t bitpos = 7;
        result = byte & 0x7F;
        
        do
        {
            if (bitpos >= 32)
                PB_RETURN_ERROR(stream, "varint overflow");
            
            if (!pb_readbyte(stream, &byte))
                return false;
            
            result |= (uint32_t)(byte & 0x7F) << bitpos;
            bitpos = (uint8_t)(bitpos + 7);
        } while (byte & 0x80);
   }
   
   *dest = result;
   return true;
}

bool checkreturn pb_decode_varint(pb_istream_t *stream, uint64_t *dest)
{
    uint8_t byte;
    uint8_t bitpos = 0;
    uint64_t result = 0;
    
    do
    {
        if (bitpos >= 64)
            PB_RETURN_ERROR(stream, "varint overflow");
        
        if (!pb_readbyte(stream, &byte))
            return false;

        result |= (uint64_t)(byte & 0x7F) << bitpos;
        bitpos = (uint8_t)(bitpos + 7);
    } while (byte & 0x80);
    
    *dest = result;
    return true;
}

bool checkreturn pb_skip_varint(pb_istream_t *stream)
{
    uint8_t byte;
    do
    {
        if (!pb_read(stream, &byte, 1))
            return false;
    } while (byte & 0x80);
    return true;
}

bool checkreturn pb_skip_string(pb_istream_t *stream)
{
    uint32_t length;
    if (!pb_decode_varint32(stream, &length))
        return false;
    
    return pb_read(stream, NULL, length);
}

bool checkreturn pb_decode_tag(pb_istream_t *stream, pb_wire_type_t *wire_type, uint32_t *tag, bool *eof)
{
    uint32_t temp;
    *eof = false;
    *wire_type = (pb_wire_type_t) 0;
    *tag = 0;
    
    if (!pb_decode_varint32(stream, &temp))
    {
        if (stream->bytes_left == 0)
            *eof = true;

        return false;
    }
    
    if (temp == 0)
    {
        *eof = true; /* Special feature: allow 0-terminated messages. */
        return false;
    }
    
    *tag = temp >> 3;
    *wire_type = (pb_wire_type_t)(temp & 7);
    return true;
}

bool checkreturn pb_skip_field(pb_istream_t *stream, pb_wire_type_t wire_type)
{
    switch (wire_type)
    {
        case PB_WT_VARINT: return pb_skip_varint(stream);
        case PB_WT_64BIT: return pb_read(stream, NULL, 8);
        case PB_WT_STRING: return pb_skip_string(stream);
        case PB_WT_32BIT: return pb_read(stream, NULL, 4);
        default: PB_RETURN_ERROR(stream, "invalid wire_type");
    }
}

/* Read a raw value to buffer, for the purpose of passing it to callback as
 * a substream. Size is maximum size on call, and actual size on return.
 */
static bool checkreturn read_raw_value(pb_istream_t *stream, pb_wire_type_t wire_type, uint8_t *buf, size_t *size)
{
    size_t max_size = *size;
    switch (wire_type)
    {
        case PB_WT_VARINT:
            *size = 0;
            do
            {
                (*size)++;
                if (*size > max_size) return false;
                if (!pb_read(stream, buf, 1)) return false;
            } while (*buf++ & 0x80);
            return true;
            
        case PB_WT_64BIT:
            *size = 8;
            return pb_read(stream, buf, 8);
        
        case PB_WT_32BIT:
            *size = 4;
            return pb_read(stream, buf, 4);
        
        default: PB_RETURN_ERROR(stream, "invalid wire_type");
    }
}

/* Decode string length from stream and return a substream with limited length.
 * Remember to close the substream using pb_close_string_substream().
 */
bool checkreturn pb_make_string_substream(pb_istream_t *stream, pb_istream_t *substream)
{
    uint32_t size;
    if (!pb_decode_varint32(stream, &size))
        return false;
    
    *substream = *stream;
    if (substream->bytes_left < size)
        PB_RETURN_ERROR(stream, "parent stream too short");
    
    substream->bytes_left = size;
    stream->bytes_left -= size;
    return true;
}

void pb_close_string_substream(pb_istream_t *stream, pb_istream_t *substream)
{
    stream->state = substream->state;

#ifndef PB_NO_ERRMSG
    stream->errmsg = substream->errmsg;
#endif
}

static void pb_field_init(pb_field_iterator_t *iter, const pb_field_t *fields, void *dest_struct)
{
    iter->start = iter->pos = fields;
    iter->field_index = 0;
    iter->required_field_index = 0;
    iter->pData = (char*)dest_struct + iter->pos->data_offset;
    iter->pSize = (char*)iter->pData + iter->pos->size_offset;
    iter->dest_struct = dest_struct;
}

static bool pb_field_next(pb_field_iterator_t *iter)
{
    bool notwrapped = true;
    size_t prev_size = iter->pos->data_size;
    
    if (PB_ATYPE(iter->pos->type) == PB_ATYPE_STATIC &&
        PB_HTYPE(iter->pos->type) == PB_HTYPE_REPEATED)
    {
        prev_size *= iter->pos->array_size;
    }
    else if (PB_ATYPE(iter->pos->type) == PB_ATYPE_POINTER)
    {
        prev_size = sizeof(void*);
    }
    
    if (iter->pos->tag == 0)
        return false; /* Only happens with empty message types */
    
    if (PB_HTYPE(iter->pos->type) == PB_HTYPE_REQUIRED)
        iter->required_field_index++;
    
    iter->pos++;
    iter->field_index++;
    if (iter->pos->tag == 0)
    {
        iter->pos = iter->start;
        iter->field_index = 0;
        iter->required_field_index = 0;
        iter->pData = iter->dest_struct;
        prev_size = 0;
        notwrapped = false;
    }
    
    iter->pData = (char*)iter->pData + prev_size + iter->pos->data_offset;
    iter->pSize = (char*)iter->pData + iter->pos->size_offset;
    return notwrapped;
}

static bool checkreturn pb_field_find(pb_field_iterator_t *iter, uint32_t tag)
{
    unsigned start = iter->field_index;
    
    do {
        if (iter->pos->tag == tag &&
            PB_LTYPE(iter->pos->type) != PB_LTYPE_EXTENSION)
        {
            return true;
        }
        (void)pb_field_next(iter);
    } while (iter->field_index != start);
    
    return false;
}

/*************************
 * Decode a single field *
 *************************/

static bool checkreturn decode_static_field(pb_istream_t *stream, pb_wire_type_t wire_type, pb_field_iterator_t *iter)
{
    pb_type_t type;
    pb_decoder_t func;
    
    type = iter->pos->type;
    func = PB_DECODERS[PB_LTYPE(type)];

    switch (PB_HTYPE(type))
    {
        case PB_HTYPE_REQUIRED:
            return func(stream, iter->pos, iter->pData);
            
        case PB_HTYPE_OPTIONAL:
            *(bool*)iter->pSize = true;
            return func(stream, iter->pos, iter->pData);
    
        case PB_HTYPE_REPEATED:
            if (wire_type == PB_WT_STRING
                && PB_LTYPE(type) <= PB_LTYPE_LAST_PACKABLE)
            {
                /* Packed array */
                bool status = true;
                size_t *size = (size_t*)iter->pSize;
                pb_istream_t substream;
                if (!pb_make_string_substream(stream, &substream))
                    return false;
                
                while (substream.bytes_left > 0 && *size < iter->pos->array_size)
                {
                    void *pItem = (uint8_t*)iter->pData + iter->pos->data_size * (*size);
                    if (!func(&substream, iter->pos, pItem))
                    {
                        status = false;
                        break;
                    }
                    (*size)++;
                }
                pb_close_string_substream(stream, &substream);
                
                if (substream.bytes_left != 0)
                    PB_RETURN_ERROR(stream, "array overflow");
                
                return status;
            }
            else
            {
                /* Repeated field */
                size_t *size = (size_t*)iter->pSize;
                void *pItem = (uint8_t*)iter->pData + iter->pos->data_size * (*size);
                if (*size >= iter->pos->array_size)
                    PB_RETURN_ERROR(stream, "array overflow");
                
                (*size)++;
                return func(stream, iter->pos, pItem);
            }

        default:
            PB_RETURN_ERROR(stream, "invalid field type");
    }
}

#ifdef PB_ENABLE_MALLOC
/* Allocate storage for the field and store the pointer at iter->pData.
 * array_size is the number of entries to reserve in an array.
 * Zero size is not allowed, use pb_free() for releasing.
 */
static bool checkreturn allocate_field(pb_istream_t *stream, void *pData, size_t data_size, size_t array_size)
{    
    void *ptr = *(void**)pData;
    
    if (data_size == 0 || array_size == 0)
        PB_RETURN_ERROR(stream, "invalid size");
    
#ifdef __AVR__
    /* Workaround for AVR libc bug 53284: http://savannah.nongnu.org/bugs/?53284
     * Realloc to size of 1 byte can cause corruption of the malloc structures.
     */
    if (data_size == 1 && array_size == 1)
    {
        data_size = 2;
    }
#endif

    /* Check for multiplication overflows.
     * This code avoids the costly division if the sizes are small enough.
     * Multiplication is safe as long as only half of bits are set
     * in either multiplicand.
     */
    {
        const size_t check_limit = (size_t)1 << (sizeof(size_t) * 4);
        if (data_size >= check_limit || array_size >= check_limit)
        {
            const size_t size_max = (size_t)-1;
            if (size_max / array_size < data_size)
            {
                PB_RETURN_ERROR(stream, "size too large");
            }
        }
    }
    
    /* Allocate new or expand previous allocation */
    /* Note: on failure the old pointer will remain in the structure,
     * the message must be freed by caller also on error return. */
    ptr = pb_realloc(ptr, array_size * data_size);
    if (ptr == NULL)
        PB_RETURN_ERROR(stream, "realloc failed");
    
    *(void**)pData = ptr;
    return true;
}

/* Clear a newly allocated item in case it contains a pointer, or is a submessage. */
static void initialize_pointer_field(void *pItem, pb_field_iterator_t *iter)
{
    if (PB_LTYPE(iter->pos->type) == PB_LTYPE_STRING ||
        PB_LTYPE(iter->pos->type) == PB_LTYPE_BYTES)
    {
        *(void**)pItem = NULL;
    }
    else if (PB_LTYPE(iter->pos->type) == PB_LTYPE_SUBMESSAGE)
    {
        pb_message_set_to_defaults((const pb_field_t *) iter->pos->ptr, pItem);
    }
}
#endif

static bool checkreturn decode_pointer_field(pb_istream_t *stream, pb_wire_type_t wire_type, pb_field_iterator_t *iter)
{
#ifndef PB_ENABLE_MALLOC
    UNUSED(wire_type);
    UNUSED(iter);
    PB_RETURN_ERROR(stream, "no malloc support");
#else
    pb_type_t type;
    pb_decoder_t func;
    
    type = iter->pos->type;
    func = PB_DECODERS[PB_LTYPE(type)];
    
    switch (PB_HTYPE(type))
    {
        case PB_HTYPE_REQUIRED:
        case PB_HTYPE_OPTIONAL:
            if (PB_LTYPE(type) == PB_LTYPE_SUBMESSAGE &&
                *(void**)iter->pData != NULL)
            {
                /* Duplicate field, have to release the old allocation first. */
                pb_release_single_field(iter);
            }
        
            if (PB_LTYPE(type) == PB_LTYPE_STRING ||
                PB_LTYPE(type) == PB_LTYPE_BYTES)
            {
                return func(stream, iter->pos, iter->pData);
            }
            else
            {
                if (!allocate_field(stream, iter->pData, iter->pos->data_size, 1))
                    return false;
                
                initialize_pointer_field(*(void**)iter->pData, iter);
                return func(stream, iter->pos, *(void**)iter->pData);
            }
    
        case PB_HTYPE_REPEATED:
            if (wire_type == PB_WT_STRING
                && PB_LTYPE(type) <= PB_LTYPE_LAST_PACKABLE)
            {
                /* Packed array, multiple items come in at once. */
                bool status = true;
                size_t *size = (size_t*)iter->pSize;
                size_t allocated_size = *size;
                void *pItem;
                pb_istream_t substream;
                
                if (!pb_make_string_substream(stream, &substream))
                    return false;
                
                while (substream.bytes_left)
                {
                    if (*size + 1 > allocated_size)
                    {
                        /* Allocate more storage. This tries to guess the
                         * number of remaining entries. Round the division
                         * upwards. */
                        allocated_size += (substream.bytes_left - 1) / iter->pos->data_size + 1;
                        
                        if (!allocate_field(&substream, iter->pData, iter->pos->data_size, allocated_size))
                        {
                            status = false;
                            break;
                        }
                    }

                    /* Decode the array entry */
                    pItem = *(uint8_t**)iter->pData + iter->pos->data_size * (*size);
                    initialize_pointer_field(pItem, iter);
                    if (!func(&substream, iter->pos, pItem))
                    {
                        status = false;
                        break;
                    }
                    (*size)++;
                }
                pb_close_string_substream(stream, &substream);
                
                return status;
            }
            else
            {
                /* Normal repeated field, i.e. only one item at a time. */
                size_t *size = (size_t*)iter->pSize;
                void *pItem;
                
                if (!allocate_field(stream, iter->pData, iter->pos->data_size, (size_t)(*size + 1)))
                    return false;
            
                pItem = *(uint8_t**)iter->pData + iter->pos->data_size * (*size);
                (*size)++;
                initialize_pointer_field(pItem, iter);
                return func(stream, iter->pos, pItem);
            }
            
        default:
            PB_RETURN_ERROR(stream, "invalid field type");
    }
#endif
}

static bool checkreturn decode_callback_field(pb_istream_t *stream, pb_wire_type_t wire_type, pb_field_iterator_t *iter)
{
    pb_callback_t *pCallback = (pb_callback_t*)iter->pData;
    
#ifdef PB_OLD_CALLBACK_STYLE
    void *arg = pCallback->arg;
#else
    void **arg = &(pCallback->arg);
#endif
    
    if (pCallback->funcs.decode == NULL)
        return pb_skip_field(stream, wire_type);
    
    if (wire_type == PB_WT_STRING)
    {
        pb_istream_t substream;
        
        if (!pb_make_string_substream(stream, &substream))
            return false;
        
        do
        {
            if (!pCallback->funcs.decode(&substream, iter->pos, arg))
                PB_RETURN_ERROR(stream, "callback failed");
        } while (substream.bytes_left);
        
        pb_close_string_substream(stream, &substream);
        return true;
    }
    else
    {
        /* Copy the single scalar value to stack.
         * This is required so that we can limit the stream length,
         * which in turn allows to use same callback for packed and
         * not-packed fields. */
        pb_istream_t substream;
        uint8_t buffer[10];
        size_t size = sizeof(buffer);
        
        if (!read_raw_value(stream, wire_type, buffer, &size))
            return false;
        substream = pb_istream_from_buffer(buffer, size);
        
        return pCallback->funcs.decode(&substream, iter->pos, arg);
    }
}

static bool checkreturn decode_field(pb_istream_t *stream, pb_wire_type_t wire_type, pb_field_iterator_t *iter)
{
    switch (PB_ATYPE(iter->pos->type))
    {
        case PB_ATYPE_STATIC:
            return decode_static_field(stream, wire_type, iter);
        
        case PB_ATYPE_POINTER:
            return decode_pointer_field(stream, wire_type, iter);
        
        case PB_ATYPE_CALLBACK:
            return decode_callback_field(stream, wire_type, iter);
        
        default:
            PB_RETURN_ERROR(stream, "invalid field type");
    }
}

static void iter_from_extension(pb_field_iterator_t *iter, pb_extension_t *extension)
{
    const pb_field_t *field = (const pb_field_t*)extension->type->arg;
    
    iter->start = field;
    iter->pos = field;
    iter->field_index = 0;
    iter->required_field_index = 0;
    iter->dest_struct = extension->dest;
    iter->pData = extension->dest;
    iter->pSize = &extension->found;
}

/* Default handler for extension fields. Expects a pb_field_t structure
 * in extension->type->arg. */
static bool checkreturn default_extension_decoder(pb_istream_t *stream,
    pb_extension_t *extension, uint32_t tag, pb_wire_type_t wire_type)
{
    const pb_field_t *field = (const pb_field_t*)extension->type->arg;
    pb_field_iterator_t iter;
    
    if (field->tag != tag)
        return true;
    
    iter_from_extension(&iter, extension);
    return decode_field(stream, wire_type, &iter);
}

/* Try to decode an unknown field as an extension field. Tries each extension
 * decoder in turn, until one of them handles the field or loop ends. */
static bool checkreturn decode_extension(pb_istream_t *stream,
    uint32_t tag, pb_wire_type_t wire_type, pb_field_iterator_t *iter)
{
    pb_extension_t *extension = *(pb_extension_t* const *)iter->pData;
    size_t pos = stream->bytes_left;
    
    while (extension != NULL && pos == stream->bytes_left)
    {
        bool status;
        if (extension->type->decode)
            status = extension->type->decode(stream, extension, tag, wire_type);
        else
            status = default_extension_decoder(stream, extension, tag, wire_type);

        if (!status)
            return false;
        
        extension = extension->next;
    }
    
    return true;
}

/* Step through the iterator until an extension field is found or until all
 * entries have been checked. There can be only one extension field per
 * message. Returns false if no extension field is found. */
static bool checkreturn find_extension_field(pb_field_iterator_t *iter)
{
    unsigned start = iter->field_index;
    
    do {
        if (PB_LTYPE(iter->pos->type) == PB_LTYPE_EXTENSION)
            return true;
        (void)pb_field_next(iter);
    } while (iter->field_index != start);
    
    return false;
}

/* Initialize message fields to default values, recursively */
static void pb_message_set_to_defaults(const pb_field_t fields[], void *dest_struct)
{
    pb_field_iterator_t iter;
    pb_field_init(&iter, fields, dest_struct);
    
    do
    {
        pb_type_t type;
        type = iter.pos->type;
    
        /* Avoid crash on empty message types (zero fields) */
        if (iter.pos->tag == 0)
            continue;
        
        if (PB_ATYPE(type) == PB_ATYPE_STATIC)
        {
            if (PB_HTYPE(type) == PB_HTYPE_OPTIONAL)
            {
                /* Set has_field to false. Still initialize the optional field
                 * itself also. */
                *(bool*)iter.pSize = false;
            }
            else if (PB_HTYPE(type) == PB_HTYPE_REPEATED)
            {
                /* Set array count to 0, no need to initialize contents. */
                *(size_t*)iter.pSize = 0;
                continue;
            }
            
            if (PB_LTYPE(iter.pos->type) == PB_LTYPE_SUBMESSAGE)
            {
                /* Initialize submessage to defaults */
                pb_message_set_to_defaults((const pb_field_t *) iter.pos->ptr, iter.pData);
            }
            else if (iter.pos->ptr != NULL)
            {
                /* Initialize to default value */
                memcpy(iter.pData, iter.pos->ptr, iter.pos->data_size);
            }
            else
            {
                /* Initialize to zeros */
                memset(iter.pData, 0, iter.pos->data_size);
            }
        }
        else if (PB_ATYPE(type) == PB_ATYPE_POINTER)
        {
            /* Initialize the pointer to NULL. */
            *(void**)iter.pData = NULL;
            
            /* Initialize array count to 0. */
            if (PB_HTYPE(type) == PB_HTYPE_REPEATED)
            {
                *(size_t*)iter.pSize = 0;
            }
        }
        else if (PB_ATYPE(type) == PB_ATYPE_CALLBACK)
        {
            /* Don't overwrite callback */
        }
    } while (pb_field_next(&iter));
}

/*********************
 * Decode all fields *
 *********************/

bool checkreturn pb_decode_noinit(pb_istream_t *stream, const pb_field_t fields[], void *dest_struct)
{
    uint8_t fields_seen[(PB_MAX_REQUIRED_FIELDS + 7) / 8] = {0, 0, 0, 0, 0, 0, 0, 0};
    uint32_t extension_range_start = 0;
    pb_field_iterator_t iter;
    
    pb_field_init(&iter, fields, dest_struct);
    
    while (stream->bytes_left)
    {
        uint32_t tag;
        pb_wire_type_t wire_type;
        bool eof;
        
        if (!pb_decode_tag(stream, &wire_type, &tag, &eof))
        {
            if (eof)
                break;
            else
                return false;
        }
        
        if (!pb_field_find(&iter, tag))
        {
            /* No match found, check if it matches an extension. */
            if (tag >= extension_range_start)
            {
                if (!find_extension_field(&iter))
                    extension_range_start = (uint32_t)-1;
                else
                    extension_range_start = iter.pos->tag;
                
                if (tag >= extension_range_start)
                {
                    size_t pos = stream->bytes_left;
                
                    if (!decode_extension(stream, tag, wire_type, &iter))
                        return false;
                    
                    if (pos != stream->bytes_left)
                    {
                        /* The field was handled */
                        continue;                    
                    }
                }
            }
        
            /* No match found, skip data */
            if (!pb_skip_field(stream, wire_type))
                return false;
            continue;
        }
        
        if (PB_HTYPE(iter.pos->type) == PB_HTYPE_REQUIRED
            && iter.required_field_index < PB_MAX_REQUIRED_FIELDS)
        {
            fields_seen[iter.required_field_index >> 3] |= (uint8_t)(1 << (iter.required_field_index & 7));
        }
            
        if (!decode_field(stream, wire_type, &iter))
            return false;
    }
    
    /* Check that all required fields were present. */
    {
        /* First figure out the number of required fields by
         * seeking to the end of the field array. Usually we
         * are already close to end after decoding.
         */
        unsigned req_field_count;
        pb_type_t last_type;
        unsigned i;
        do {
            req_field_count = iter.required_field_index;
            last_type = iter.pos->type;
        } while (pb_field_next(&iter));
        
        /* Fixup if last field was also required. */
        if (PB_HTYPE(last_type) == PB_HTYPE_REQUIRED && iter.pos->tag != 0)
            req_field_count++;
        
        /* Check the whole bytes */
        for (i = 0; i < (req_field_count >> 3); i++)
        {
            if (fields_seen[i] != 0xFF)
                PB_RETURN_ERROR(stream, "missing required field");
        }
        
        /* Check the remaining bits */
        if (fields_seen[req_field_count >> 3] != (0xFF >> (8 - (req_field_count & 7))))
            PB_RETURN_ERROR(stream, "missing required field");
    }
    
    return true;
}

bool checkreturn pb_decode(pb_istream_t *stream, const pb_field_t fields[], void *dest_struct)
{
    bool status;
    pb_message_set_to_defaults(fields, dest_struct);
    status = pb_decode_noinit(stream, fields, dest_struct);
    
#ifdef PB_ENABLE_MALLOC
    if (!status)
        pb_release(fields, dest_struct);
#endif
    
    return status;
}

bool pb_decode_delimited(pb_istream_t *stream, const pb_field_t fields[], void *dest_struct)
{
    pb_istream_t substream;
    bool status;
    
    if (!pb_make_string_substream(stream, &substream))
        return false;
    
    status = pb_decode(&substream, fields, dest_struct);
    pb_close_string_substream(stream, &substream);
    return status;
}

#ifdef PB_ENABLE_MALLOC
static void pb_release_single_field(const pb_field_iterator_t *iter)
{
    pb_type_t type;
    type = iter->pos->type;

    /* Release anything contained inside an extension or submsg.
     * This has to be done even if the submsg itself is statically
     * allocated. */
    if (PB_LTYPE(type) == PB_LTYPE_EXTENSION)
    {
        /* Release fields from all extensions in the linked list */
        pb_extension_t *ext = *(pb_extension_t**)iter->pData;
        while (ext != NULL)
        {
            pb_field_iterator_t ext_iter;
            iter_from_extension(&ext_iter, ext);
            pb_release_single_field(&ext_iter);
            ext = ext->next;
        }
    }
    else if (PB_LTYPE(type) == PB_LTYPE_SUBMESSAGE)
    {
        /* Release fields in submessage or submsg array */
        void *pItem = iter->pData;
        pb_size_t count = 1;
        
        if (PB_ATYPE(type) == PB_ATYPE_POINTER)
        {
            pItem = *(void**)iter->pData;
        }
        
        if (PB_HTYPE(type) == PB_HTYPE_REPEATED)
        {
            count = *(pb_size_t*)iter->pSize;

            if (PB_ATYPE(type) == PB_ATYPE_STATIC && count > iter->pos->array_size)
            {
                /* Protect against corrupted _count fields */
                count = iter->pos->array_size;
            }
        }
        
        if (pItem)
        {
            while (count--)
            {
                pb_release((const pb_field_t*)iter->pos->ptr, pItem);
                pItem = (uint8_t*)pItem + iter->pos->data_size;
            }
        }
    }
    
    if (PB_ATYPE(type) == PB_ATYPE_POINTER)
    {
        if (PB_HTYPE(type) == PB_HTYPE_REPEATED &&
            (PB_LTYPE(type) == PB_LTYPE_STRING ||
             PB_LTYPE(type) == PB_LTYPE_BYTES))
        {
            /* Release entries in repeated string or bytes array */
            void **pItem = *(void***)iter->pData;
            pb_size_t count = *(pb_size_t*)iter->pSize;
            while (count--)
            {
                pb_free(*pItem);
                *pItem++ = NULL;
            }
        }
        
        if (PB_HTYPE(type) == PB_HTYPE_REPEATED)
        {
            /* We are going to release the array, so set the size to 0 */
            *(pb_size_t*)iter->pSize = 0;
        }
        
        /* Release main item */
        pb_free(*(void**)iter->pData);
        *(void**)iter->pData = NULL;
    }
}

void pb_release(const pb_field_t fields[], void *dest_struct)
{
    pb_field_iterator_t iter;
    pb_field_init(&iter, fields, dest_struct);

    if (iter.pos->tag == 0)
        return; /* Empty message type */
    
    do
    {
        pb_release_single_field(&iter);
    } while (pb_field_next(&iter));
}
#endif

/* Field decoders */

bool pb_decode_svarint(pb_istream_t *stream, int64_t *dest)
{
    uint64_t value;
    if (!pb_decode_varint(stream, &value))
        return false;
    
    if (value & 1)
        *dest = (int64_t)(~(value >> 1));
    else
        *dest = (int64_t)(value >> 1);
    
    return true;
}

bool pb_decode_fixed32(pb_istream_t *stream, void *dest)
{
    #ifdef __BIG_ENDIAN__
    uint8_t *bytes = (uint8_t*)dest;
    uint8_t lebytes[4];
    
    if (!pb_read(stream, lebytes, 4))
        return false;
    
    bytes[0] = lebytes[3];
    bytes[1] = lebytes[2];
    bytes[2] = lebytes[1];
    bytes[3] = lebytes[0];
    return true;
    #else
    return pb_read(stream, (uint8_t*)dest, 4);
    #endif   
}

bool pb_decode_fixed64(pb_istream_t *stream, void *dest)
{
    #ifdef __BIG_ENDIAN__
    uint8_t *bytes = (uint8_t*)dest;
    uint8_t lebytes[8];
    
    if (!pb_read(stream, lebytes, 8))
        return false;
    
    bytes[0] = lebytes[7];
    bytes[1] = lebytes[6];
    bytes[2] = lebytes[5];
    bytes[3] = lebytes[4];
    bytes[4] = lebytes[3];
    bytes[5] = lebytes[2];
    bytes[6] = lebytes[1];
    bytes[7] = lebytes[0];
    return true;
    #else
    return pb_read(stream, (uint8_t*)dest, 8);
    #endif   
}

static bool checkreturn pb_dec_varint(pb_istream_t *stream, const pb_field_t *field, void *dest)
{
    uint64_t value;
    if (!pb_decode_varint(stream, &value))
        return false;
    
    switch (field->data_size)
    {
        case 1: *(int8_t*)dest = (int8_t)value; break;
        case 2: *(int16_t*)dest = (int16_t)value; break;
        case 4: *(int32_t*)dest = (int32_t)value; break;
        case 8: *(int64_t*)dest = (int64_t)value; break;
        default: PB_RETURN_ERROR(stream, "invalid data_size");
    }
    
    return true;
}

static bool checkreturn pb_dec_uvarint(pb_istream_t *stream, const pb_field_t *field, void *dest)
{
    uint64_t value;
    if (!pb_decode_varint(stream, &value))
        return false;
    
    switch (field->data_size)
    {
        case 4: *(uint32_t*)dest = (uint32_t)value; break;
        case 8: *(uint64_t*)dest = value; break;
        default: PB_RETURN_ERROR(stream, "invalid data_size");
    }
    
    return true;
}

static bool checkreturn pb_dec_svarint(pb_istream_t *stream, const pb_field_t *field, void *dest)
{
    int64_t value;
    if (!pb_decode_svarint(stream, &value))
        return false;
    
    switch (field->data_size)
    {
        case 4: *(int32_t*)dest = (int32_t)value; break;
        case 8: *(int64_t*)dest = value; break;
        default: PB_RETURN_ERROR(stream, "invalid data_size");
    }
    
    return true;
}

static bool checkreturn pb_dec_fixed32(pb_istream_t *stream, const pb_field_t *field, void *dest)
{
    UNUSED(field);
    return pb_decode_fixed32(stream, dest);
}

static bool checkreturn pb_dec_fixed64(pb_istream_t *stream, const pb_field_t *field, void *dest)
{
    UNUSED(field);
    return pb_decode_fixed64(stream, dest);
}

static bool checkreturn pb_dec_bytes(pb_istream_t *stream, const pb_field_t *field, void *dest)
{
    uint32_t size;
    size_t alloc_size;
    pb_bytes_array_t *bdest;
    
    if (!pb_decode_varint32(stream, &size))
        return false;
    
    alloc_size = PB_BYTES_ARRAY_T_ALLOCSIZE(size);
    if (size > alloc_size)
        PB_RETURN_ERROR(stream, "size too large");
    
    if (PB_ATYPE(field->type) == PB_ATYPE_POINTER)
    {
#ifndef PB_ENABLE_MALLOC
        PB_RETURN_ERROR(stream, "no malloc support");
#else
        if (!allocate_field(stream, dest, alloc_size, 1))
            return false;
        bdest = *(pb_bytes_array_t**)dest;
#endif
    }
    else
    {
        if (alloc_size > field->data_size)
            PB_RETURN_ERROR(stream, "bytes overflow");
        bdest = (pb_bytes_array_t*)dest;
    }
    
    bdest->size = size;

    return pb_read(stream, bdest->bytes, size);
}

static bool checkreturn pb_dec_string(pb_istream_t *stream, const pb_field_t *field, void *dest)
{
    uint32_t size;
    size_t alloc_size;
    bool status;
    if (!pb_decode_varint32(stream, &size))
        return false;
    
    /* Space for null terminator */
    alloc_size = size + 1;
    
    if (alloc_size < size)
        PB_RETURN_ERROR(stream, "size too large");
    
    if (PB_ATYPE(field->type) == PB_ATYPE_POINTER)
    {
#ifndef PB_ENABLE_MALLOC
        PB_RETURN_ERROR(stream, "no malloc support");
#else
        if (!allocate_field(stream, dest, alloc_size, 1))
            return false;
        dest = *(void**)dest;
#endif
    }
    else
    {
        if (alloc_size > field->data_size)
            PB_RETURN_ERROR(stream, "string overflow");
    }
    
    status = pb_read(stream, (uint8_t*)dest, size);
    *((uint8_t*)dest + size) = 0;
    return status;
}

static bool checkreturn pb_dec_submessage(pb_istream_t *stream, const pb_field_t *field, void *dest)
{
    bool status;
    pb_istream_t substream;
    const pb_field_t* submsg_fields = (const pb_field_t*)field->ptr;
    
    if (!pb_make_string_substream(stream, &substream))
        return false;
    
    if (field->ptr == NULL)
        PB_RETURN_ERROR(stream, "invalid field descriptor");
    
    /* New array entries need to be initialized, while required and optional
     * submessages have already been initialized in the top-level pb_decode. */
    if (PB_HTYPE(field->type) == PB_HTYPE_REPEATED)
        status = pb_decode(&substream, submsg_fields, dest);
    else
        status = pb_decode_noinit(&substream, submsg_fields, dest);
    
    pb_close_string_substream(stream, &substream);
    return status;
}