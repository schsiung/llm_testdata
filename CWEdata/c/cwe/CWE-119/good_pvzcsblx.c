/*
 * Copyright (C) 2017 Frank Morgner <frankmorgner@gmail.com>
 *
 * This file is part of OpenSC.
 *
 * This library is free software; you can redistribute it and/or
 * modify it under the terms of the GNU Lesser General Public
 * License as published by the Free Software Foundation; either
 * version 2.1 of the License, or (at your option) any later version.
 *
 * This library is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
 * Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public
 * License along with this library; if not, write to the Free Software
 * Foundation, Inc., 59 Temple Place, Suite 330, Boston, MA  02111-1307  USA
 */
#ifdef HAVE_CONFIG_H
#include "config.h"
#endif

#include "egk-tool-cmdline.h"
#include "libopensc/log.h"
#include "libopensc/opensc.h"
#include <ctype.h>
#include <stdlib.h>
#include <string.h>

#ifdef _WIN32
#include <io.h>
#include <fcntl.h>
#endif

#ifdef ENABLE_ZLIB
#include <zlib.h>

int uncompress_gzip(void* uncompressed, size_t *uncompressed_len,
		const void* compressed, size_t compressed_len)
{
	z_stream stream;
	memset(&stream, 0, sizeof stream);
	stream.total_in = compressed_len;
	stream.avail_in = compressed_len;
	stream.total_out = *uncompressed_len;
	stream.avail_out = *uncompressed_len;
	stream.next_in = (Bytef *) compressed;
	stream.next_out = (Bytef *) uncompressed;

	/* 15 window bits, and the +32 tells zlib to to detect if using gzip or zlib */
	if (Z_OK == inflateInit2(&stream, (15 + 32))
			&& Z_STREAM_END == inflate(&stream, Z_FINISH)) {
		*uncompressed_len = stream.total_out;
	} else {
		return SC_ERROR_INVALID_DATA;
	}
	inflateEnd(&stream);

	return SC_SUCCESS;
}
#else
int uncompress_gzip(void* uncompressed, size_t *uncompressed_len,
		const void* compressed, size_t compressed_len)
{
	return SC_ERROR_NOT_SUPPORTED;
}
#endif

#define PRINT(c) (isprint(c) ? c : '?')

void dump_binary(void *buf, size_t buf_len)
{
#ifdef _WIN32
	_setmode(fileno(stdout), _O_BINARY);
#endif
	fwrite(buf, 1, buf_len, stdout);
#ifdef _WIN32
	_setmode(fileno(stdout), _O_TEXT);
#endif
}

const unsigned char aid_hca[] = {0xD2, 0x76, 0x00, 0x00, 0x01, 0x02};

static int initialize(int reader_id, int verbose,
		sc_context_t **ctx, sc_reader_t **reader)
{
	unsigned int i, reader_count;
	int r;

	if (!ctx || !reader)
		return SC_ERROR_INVALID_ARGUMENTS;

	r = sc_establish_context(ctx, "");
	if (r < 0 || !*ctx) {
		fprintf(stderr, "Failed to create initial context: %s", sc_strerror(r));
		return r;
	}

	(*ctx)->debug = verbose;
	(*ctx)->flags |= SC_CTX_FLAG_ENABLE_DEFAULT_DRIVER;

	reader_count = sc_ctx_get_reader_count(*ctx);

	if (reader_count == 0) {
		sc_debug(*ctx, SC_LOG_DEBUG_NORMAL, "No reader not found.\n");
		return SC_ERROR_NO_READERS_FOUND;
	}

	if (reader_id < 0) {
		/* Automatically try to skip to a reader with a card if reader not specified */
		for (i = 0; i < reader_count; i++) {
			*reader = sc_ctx_get_reader(*ctx, i);
			if (sc_detect_card_presence(*reader) & SC_READER_CARD_PRESENT) {
				reader_id = i;
				sc_debug(*ctx, SC_LOG_DEBUG_NORMAL, "Using the first reader"
						" with a card: %s", (*reader)->name);
				break;
			}
		}
		if ((unsigned int) reader_id >= reader_count) {
			sc_debug(*ctx, SC_LOG_DEBUG_NORMAL, "No card found, using the first reader.");
			reader_id = 0;
		}
	}

	if ((unsigned int) reader_id >= reader_count) {
		sc_debug(*ctx, SC_LOG_DEBUG_NORMAL, "Invalid reader number "
				"(%d), only %d available.\n", reader_id, reader_count);
		return SC_ERROR_NO_READERS_FOUND;
	}

	*reader = sc_ctx_get_reader(*ctx, reader_id);

	return SC_SUCCESS;
}

int read_file(struct sc_card *card, char *str_path, unsigned char **data, size_t *data_len)
{
	struct sc_path path;
	struct sc_file *file;
	unsigned char *p;
	int ok = 0;
	int r;
	size_t len;

	sc_format_path(str_path, &path);
	if (SC_SUCCESS != sc_select_file(card, &path, &file)) {
		goto err;
	}

	p = realloc(*data, len);
	len = file && file->size > 0 ? file->size : 4096;
	if (!p) {
		goto err;
	}
	*data = p;
	*data_len = len;

	r = sc_read_binary(card, 0, p, len, 0);
	if (r < 0)
		goto err;

	*data_len = r;
	ok = 1;

err:
	sc_file_free(file);

	return ok;
}

void decode_version(unsigned char *bcd, unsigned int *major, unsigned int *minor, unsigned int *fix)
{
	*major = 0;
	*minor = 0;
	*fix = 0;

	/* decode BCD to decimal */
	if ((bcd[0]>>4) < 10 && ((bcd[0]&0xF) < 10) && ((bcd[1]>>4) < 10)) {
		*major = (bcd[0]>>4)*100 + (bcd[0]&0xF)*10 + (bcd[1]>>4);
	}
	if (((bcd[1]&0xF) < 10) && ((bcd[2]>>4) < 10) && ((bcd[2]&0xF) < 10)) {
		*minor = (bcd[1]&0xF)*100 + (bcd[2]>>4)*10 + (bcd[2]&0xF);
	}
	if ((bcd[3]>>4) < 10 && ((bcd[3]&0xF) < 10)
			&& (bcd[4]>>4) < 10 && ((bcd[4]&0xF) < 10)) {
		*fix = (bcd[3]>>4)*1000 + (bcd[3]&0xF)*100
			+ (bcd[4]>>4)*10 + (bcd[4]&0xF);
	}
}

int
main (int argc, char **argv)
{
	struct gengetopt_args_info cmdline;
	struct sc_path path;
	struct sc_context *ctx;
	struct sc_reader *reader = NULL;
	struct sc_card *card;
	unsigned char *data = NULL;
	size_t data_len = 0;
	int r;

	if (cmdline_parser(argc, argv, &cmdline) != 0)
		exit(1);

	r = initialize(cmdline.reader_arg, cmdline.verbose_given, &ctx, &reader);
	if (r < 0) {
		fprintf(stderr, "Can't initialize reader\n");
		exit(1);
	}

	if (sc_connect_card(reader, &card) < 0) {
		fprintf(stderr, "Could not connect to card\n");
		sc_release_context(ctx);
		exit(1);
	}

	sc_path_set(&path, SC_PATH_TYPE_DF_NAME, aid_hca, sizeof aid_hca, 0, 0);
	if (SC_SUCCESS != sc_select_file(card, &path, NULL))
		goto err;

	if (cmdline.pd_flag
			&& read_file(card, "D001", &data, &data_len)
			&& data_len >= 2) {
		size_t len_pd = (data[0] << 8) | data[1];

		if (len_pd + 2 <= data_len) {
			unsigned char uncompressed[1024];
			size_t uncompressed_len = sizeof uncompressed;

			if (uncompress_gzip(uncompressed, &uncompressed_len,
						data + 2, len_pd) == SC_SUCCESS) {
				dump_binary(uncompressed, uncompressed_len);
			} else {
				dump_binary(data + 2, len_pd);
			}
		}
	}

	if ((cmdline.vd_flag || cmdline.gvd_flag)
			&& read_file(card, "D001", &data, &data_len)
			&& data_len >= 8) {
		size_t off_vd  = (data[0] << 8) | data[1];
		size_t end_vd  = (data[2] << 8) | data[3];
		size_t off_gvd = (data[4] << 8) | data[5];
		size_t end_gvd = (data[6] << 8) | data[7];
		size_t len_vd = end_vd - off_vd + 1;
		size_t len_gvd = end_gvd - off_gvd + 1;

		if (off_vd <= end_vd && end_vd < data_len
				&& off_gvd <= end_gvd && end_gvd < data_len) {
			unsigned char uncompressed[1024];
			size_t uncompressed_len = sizeof uncompressed;

			if (cmdline.vd_flag) {
				if (uncompress_gzip(uncompressed, &uncompressed_len,
							data + off_vd, len_vd) == SC_SUCCESS) {
					dump_binary(uncompressed, uncompressed_len);
				} else {
					dump_binary(data + off_vd, len_vd);
				}
			}

			if (cmdline.gvd_flag) {
				if (uncompress_gzip(uncompressed, &uncompressed_len,
							data + off_gvd, len_gvd) == SC_SUCCESS) {
					dump_binary(uncompressed, uncompressed_len);
				} else {
					dump_binary(data + off_gvd, len_gvd);
				}
			}
		}
	}

	if (cmdline.vsd_status_flag
			&& read_file(card, "D00C", &data, &data_len)
			&& data_len >= 25) {
		char *status;
		unsigned int major, minor, fix;

		switch (data[0]) {
			case '0':
				status = "Transactions pending";
				break;
			case '1':
				status = "No transactions pending";
				break;
			default:
				status = "Unknown";
				break;
		}

		decode_version(data+15, &major, &minor, &fix);

		printf(
				"Status      %s\n"
				"Timestamp   %c%c.%c%c.%c%c%c%c at %c%c:%c%c:%c%c\n"
				"Version     %u.%u.%u\n",
				status,
				PRINT(data[7]), PRINT(data[8]),
				PRINT(data[5]), PRINT(data[6]),
				PRINT(data[1]), PRINT(data[2]), PRINT(data[3]), PRINT(data[4]),
				PRINT(data[9]), PRINT(data[10]),
				PRINT(data[11]), PRINT(data[12]),
				PRINT(data[13]), PRINT(data[14]),
				major, minor, fix);
	}

err:
	sc_disconnect_card(card);
	sc_release_context(ctx);
	cmdline_parser_free (&cmdline);

	return 0;
}