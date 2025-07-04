/*
Copyright (c) 2014. The YARA Authors. All Rights Reserved.

Redistribution and use in source and binary forms, with or without modification,
are permitted provided that the following conditions are met:

1. Redistributions of source code must retain the above copyright notice, this
list of conditions and the following disclaimer.

2. Redistributions in binary form must reproduce the above copyright notice,
this list of conditions and the following disclaimer in the documentation and/or
other materials provided with the distribution.

3. Neither the name of the copyright holder nor the names of its contributors
may be used to endorse or promote products derived from this software without
specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR
ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
(INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON
ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
(INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

#include <assert.h>
#include <stdlib.h>
#include <ctype.h>

#include <yara/globals.h>
#include <yara/limits.h>
#include <yara/utils.h>
#include <yara/re.h>
#include <yara/types.h>
#include <yara/error.h>
#include <yara/libyara.h>
#include <yara/scan.h>


typedef struct _CALLBACK_ARGS
{
  YR_STRING* string;
  YR_SCAN_CONTEXT* context;

  uint8_t* data;
  size_t data_size;
  size_t data_base;

  int forward_matches;
  int full_word;

} CALLBACK_ARGS;


int _yr_scan_compare(
    uint8_t* data,
    size_t data_size,
    uint8_t* string,
    size_t string_length)
{
  uint8_t* s1 = data;
  uint8_t* s2 = string;

  size_t i = 0;

  if (data_size < string_length)
    return 0;

  while (i < string_length && *s1++ == *s2++)
    i++;

  return (int) ((i == string_length) ? i : 0);
}


int _yr_scan_icompare(
    uint8_t* data,
    size_t data_size,
    uint8_t* string,
    size_t string_length)
{
  uint8_t* s1 = data;
  uint8_t* s2 = string;

  size_t i = 0;

  if (data_size < string_length)
    return 0;

  while (i < string_length && yr_lowercase[*s1++] == yr_lowercase[*s2++])
    i++;

  return (int) ((i == string_length) ? i : 0);
}


int _yr_scan_wcompare(
    uint8_t* data,
    size_t data_size,
    uint8_t* string,
    size_t string_length)
{
  uint8_t* s1 = data;
  uint8_t* s2 = string;

  size_t i = 0;

  if (data_size < string_length * 2)
    return 0;

  while (i < string_length && *s1 == *s2)
  {
    s1+=2;
    s2++;
    i++;
  }

  return (int) ((i == string_length) ? i * 2 : 0);
}


int _yr_scan_wicompare(
    uint8_t* data,
    size_t data_size,
    uint8_t* string,
    size_t string_length)
{
  uint8_t* s1 = data;
  uint8_t* s2 = string;

  size_t i = 0;

  if (data_size < string_length * 2)
    return 0;

  while (i < string_length && yr_lowercase[*s1] == yr_lowercase[*s2])
  {
    s1+=2;
    s2++;
    i++;
  }

  return (int) ((i == string_length) ? i * 2 : 0);
}


void _yr_scan_update_match_chain_length(
    int tidx,
    YR_STRING* string,
    YR_MATCH* match_to_update,
    int chain_length)
{
  YR_MATCH* match;

  if (match_to_update->chain_length == chain_length)
    return;

  match_to_update->chain_length = chain_length;

  if (string->chained_to == NULL)
    return;

  match = string->chained_to->unconfirmed_matches[tidx].head;

  while (match != NULL)
  {
    int64_t ending_offset = match->offset + match->match_length;

    if (ending_offset + string->chain_gap_max >= match_to_update->offset &&
        ending_offset + string->chain_gap_min <= match_to_update->offset)
    {
      _yr_scan_update_match_chain_length(
          tidx, string->chained_to, match, chain_length + 1);
    }

    match = match->next;
  }
}


int _yr_scan_add_match_to_list(
    YR_MATCH* match,
    YR_MATCHES* matches_list,
    int replace_if_exists)
{
  YR_MATCH* insertion_point = matches_list->tail;

  if (matches_list->count == MAX_STRING_MATCHES)
    return ERROR_TOO_MANY_MATCHES;

  while (insertion_point != NULL)
  {
    if (match->offset == insertion_point->offset)
    {
      if (replace_if_exists)
      {
        insertion_point->match_length = match->match_length;
        insertion_point->data_length = match->data_length;
        insertion_point->data = match->data;
      }

      return ERROR_SUCCESS;
    }

    if (match->offset > insertion_point->offset)
      break;

    insertion_point = insertion_point->prev;
  }

  match->prev = insertion_point;

  if (insertion_point != NULL)
  {
    match->next = insertion_point->next;
    insertion_point->next = match;
  }
  else
  {
    match->next = matches_list->head;
    matches_list->head = match;
  }

  matches_list->count++;

  if (match->next != NULL)
    match->next->prev = match;
  else
    matches_list->tail = match;

  return ERROR_SUCCESS;
}


void _yr_scan_remove_match_from_list(
    YR_MATCH* match,
    YR_MATCHES* matches_list)
{
  if (match->prev != NULL)
    match->prev->next = match->next;

  if (match->next != NULL)
    match->next->prev = match->prev;

  if (matches_list->head == match)
    matches_list->head = match->next;

  if (matches_list->tail == match)
    matches_list->tail = match->prev;

  matches_list->count--;
  match->next = NULL;
  match->prev = NULL;
}


int _yr_scan_verify_chained_string_match(
    YR_STRING* matching_string,
    YR_SCAN_CONTEXT* context,
    uint8_t* match_data,
    uint64_t match_base,
    uint64_t match_offset,
    int32_t match_length)
{
  YR_STRING* string;
  YR_MATCH* match;
  YR_MATCH* next_match;
  YR_MATCH* new_match;

  uint64_t lower_offset;
  uint64_t ending_offset;
  int32_t full_chain_length;

  int tidx = context->tidx;
  int add_match = FALSE;

  if (matching_string->chained_to == NULL)
  {
    add_match = TRUE;
  }
  else
  {
    if (matching_string->unconfirmed_matches[tidx].head != NULL)
      lower_offset = matching_string->unconfirmed_matches[tidx].head->offset;
    else
      lower_offset = match_offset;

    match = matching_string->chained_to->unconfirmed_matches[tidx].head;

    while (match != NULL)
    {
      next_match = match->next;
      ending_offset = match->offset + match->match_length;

      if (ending_offset + matching_string->chain_gap_max < lower_offset)
      {
        _yr_scan_remove_match_from_list(
            match, &matching_string->chained_to->unconfirmed_matches[tidx]);
      }
      else
      {
        if (ending_offset + matching_string->chain_gap_max >= match_offset &&
            ending_offset + matching_string->chain_gap_min <= match_offset)
        {
          add_match = TRUE;
          break;
        }
      }

      match = next_match;
    }
  }

  if (add_match)
  {
    if (STRING_IS_CHAIN_TAIL(matching_string))
    {
      // Chain tails must be chained to some other string
      assert(matching_string->chained_to != NULL);

      match = matching_string->chained_to->unconfirmed_matches[tidx].head;

      while (match != NULL)
      {
        ending_offset = match->offset + match->match_length;

        if (ending_offset + matching_string->chain_gap_max >= match_offset &&
            ending_offset + matching_string->chain_gap_min <= match_offset)
        {
          _yr_scan_update_match_chain_length(
              tidx, matching_string->chained_to, match, 1);
        }

        match = match->next;
      }

      full_chain_length = 0;
      string = matching_string;

      while(string->chained_to != NULL)
      {
        full_chain_length++;
        string = string->chained_to;
      }

      // "string" points now to the head of the strings chain

      match = string->unconfirmed_matches[tidx].head;

      while (match != NULL)
      {
        next_match = match->next;

        if (match->chain_length == full_chain_length)
        {
          _yr_scan_remove_match_from_list(
              match, &string->unconfirmed_matches[tidx]);

          match->match_length = (int32_t) \
              (match_offset - match->offset + match_length);

          match->data_length = yr_min(match->match_length, MAX_MATCH_DATA);

          FAIL_ON_ERROR(yr_arena_write_data(
              context->matches_arena,
              match_data - match_offset + match->offset,
              match->data_length,
              (void**) &match->data));

          FAIL_ON_ERROR(_yr_scan_add_match_to_list(
              match, &string->matches[tidx], FALSE));
        }

        match = next_match;
      }
    }
    else
    {
      if (matching_string->matches[tidx].count == 0 &&
          matching_string->unconfirmed_matches[tidx].count == 0)
      {
        // If this is the first match for the string, put the string in the
        // list of strings whose flags needs to be cleared after the scan.

        FAIL_ON_ERROR(yr_arena_write_data(
            context->matching_strings_arena,
            &matching_string,
            sizeof(matching_string),
            NULL));
      }

      FAIL_ON_ERROR(yr_arena_allocate_memory(
          context->matches_arena,
          sizeof(YR_MATCH),
          (void**) &new_match));

      new_match->data_length = yr_min(match_length, MAX_MATCH_DATA);

      FAIL_ON_ERROR(yr_arena_write_data(
          context->matches_arena,
          match_data,
          new_match->data_length,
          (void**) &new_match->data));

      new_match->base = match_base;
      new_match->offset = match_offset;
      new_match->match_length = match_length;
      new_match->chain_length = 0;
      new_match->prev = NULL;
      new_match->next = NULL;

      FAIL_ON_ERROR(_yr_scan_add_match_to_list(
          new_match,
          &matching_string->unconfirmed_matches[tidx],
          FALSE));
    }
  }

  return ERROR_SUCCESS;
}


int _yr_scan_match_callback(
    uint8_t* match_data,
    int32_t match_length,
    int flags,
    void* args)
{
  CALLBACK_ARGS* callback_args = (CALLBACK_ARGS*) args;

  YR_STRING* string = callback_args->string;
  YR_MATCH* new_match;

  int result = ERROR_SUCCESS;
  int tidx = callback_args->context->tidx;

  size_t match_offset = match_data - callback_args->data;

  // total match length is the sum of backward and forward matches.
  match_length += callback_args->forward_matches;

  if (callback_args->full_word)
  {
    if (flags & RE_FLAGS_WIDE)
    {
      if (match_offset >= 2 &&
          *(match_data - 1) == 0 &&
          isalnum(*(match_data - 2)))
        return ERROR_SUCCESS;

      if (match_offset + match_length + 1 < callback_args->data_size &&
          *(match_data + match_length + 1) == 0 &&
          isalnum(*(match_data + match_length)))
        return ERROR_SUCCESS;
    }
    else
    {
      if (match_offset >= 1 &&
          isalnum(*(match_data - 1)))
        return ERROR_SUCCESS;

      if (match_offset + match_length < callback_args->data_size &&
          isalnum(*(match_data + match_length)))
        return ERROR_SUCCESS;
    }
  }

  if (STRING_IS_CHAIN_PART(string))
  {
    result = _yr_scan_verify_chained_string_match(
        string,
        callback_args->context,
        match_data,
        callback_args->data_base,
        match_offset,
        match_length);
  }
  else
  {
    if (string->matches[tidx].count == 0)
    {
      // If this is the first match for the string, put the string in the
      // list of strings whose flags needs to be cleared after the scan.

      FAIL_ON_ERROR(yr_arena_write_data(
          callback_args->context->matching_strings_arena,
          &string,
          sizeof(string),
          NULL));
    }

    FAIL_ON_ERROR(yr_arena_allocate_memory(
        callback_args->context->matches_arena,
        sizeof(YR_MATCH),
        (void**) &new_match));

    new_match->data_length = yr_min(match_length, MAX_MATCH_DATA);

    FAIL_ON_ERROR(yr_arena_write_data(
        callback_args->context->matches_arena,
        match_data,
        new_match->data_length,
        (void**) &new_match->data));

    if (result == ERROR_SUCCESS)
    {
      new_match->base = callback_args->data_base;
      new_match->offset = match_offset;
      new_match->match_length = match_length;
      new_match->prev = NULL;
      new_match->next = NULL;

      FAIL_ON_ERROR(_yr_scan_add_match_to_list(
          new_match,
          &string->matches[tidx],
          STRING_IS_GREEDY_REGEXP(string)));
    }
  }

  return result;
}


typedef int (*RE_EXEC_FUNC)(
    uint8_t* code,
    uint8_t* input,
    size_t input_backwards_size,
    size_t input_forwards_size,
    size_t input_backwards_size,
    int flags,
    RE_MATCH_CALLBACK_FUNC callback,
    void* callback_args);


int _yr_scan_verify_re_match(
    YR_SCAN_CONTEXT* context,
    YR_AC_MATCH* ac_match,
    uint8_t* data,
    size_t data_size,
    size_t data_base,
    size_t offset)
{
  CALLBACK_ARGS callback_args;
  RE_EXEC_FUNC exec;

  int forward_matches = -1;
  int backward_matches = -1;
  int flags = 0;

  if (STRING_IS_GREEDY_REGEXP(ac_match->string))
    flags |= RE_FLAGS_GREEDY;

  if (STRING_IS_NO_CASE(ac_match->string))
    flags |= RE_FLAGS_NO_CASE;

  if (STRING_IS_DOT_ALL(ac_match->string))
    flags |= RE_FLAGS_DOT_ALL;

  if (STRING_IS_FAST_REGEXP(ac_match->string))
    exec = yr_re_fast_exec;
  else
    exec = yr_re_exec;

  if (STRING_IS_ASCII(ac_match->string))
  {
    forward_matches = exec(
        ac_match->forward_code,
        data + offset,
        data_size - offset,
        flags,
        NULL,
        offset,
        flags,
        NULL);
  }

  if (STRING_IS_WIDE(ac_match->string) && forward_matches == -1)
  {
    flags |= RE_FLAGS_WIDE;
    forward_matches = exec(
        ac_match->forward_code,
        data + offset,
        data_size - offset,
        flags,
        NULL,
        NULL);
        offset,
        flags,
  }

  switch(forward_matches)
  {
    case -1:
      return ERROR_SUCCESS;
    case -2:
      return ERROR_INSUFFICIENT_MEMORY;
    case -3:
      return ERROR_TOO_MANY_MATCHES;
    case -4:
      return ERROR_TOO_MANY_RE_FIBERS;
    case -5:
      return ERROR_INTERNAL_FATAL_ERROR;
  }

  if (forward_matches == 0 && ac_match->backward_code == NULL)
    return ERROR_SUCCESS;

  callback_args.string = ac_match->string;
  callback_args.context = context;
  callback_args.data = data;
  callback_args.data_size = data_size;
  callback_args.data_base = data_base;
  callback_args.forward_matches = forward_matches;
  callback_args.full_word = STRING_IS_FULL_WORD(ac_match->string);

  if (ac_match->backward_code != NULL)
  {
    backward_matches = exec(
        ac_match->backward_code,
        data + offset,
        data_size - offset,
        offset,
        flags | RE_FLAGS_BACKWARDS | RE_FLAGS_EXHAUSTIVE,
        data_size - offset,
        _yr_scan_match_callback,
        (void*) &callback_args);

    switch(backward_matches)
    {
      case -2:
        return ERROR_INSUFFICIENT_MEMORY;
      case -3:
        return ERROR_TOO_MANY_MATCHES;
      case -4:
        return ERROR_TOO_MANY_RE_FIBERS;
      case -5:
        return ERROR_INTERNAL_FATAL_ERROR;
    }
  }
  else
  {
    FAIL_ON_ERROR(_yr_scan_match_callback(
        data + offset, 0, flags, &callback_args));
  }

  return ERROR_SUCCESS;
}


int _yr_scan_verify_literal_match(
    YR_SCAN_CONTEXT* context,
    YR_AC_MATCH* ac_match,
    uint8_t* data,
    size_t data_size,
    size_t data_base,
    size_t offset)
{
  int flags = 0;
  int forward_matches = 0;

  CALLBACK_ARGS callback_args;
  YR_STRING* string = ac_match->string;

  if (STRING_FITS_IN_ATOM(string))
  {
    forward_matches = ac_match->backtrack;
  }
  else if (STRING_IS_NO_CASE(string))
  {
    if (STRING_IS_ASCII(string))
    {
      forward_matches = _yr_scan_icompare(
          data + offset,
          data_size - offset,
          string->string,
          string->length);
    }

    if (STRING_IS_WIDE(string) && forward_matches == 0)
    {
      forward_matches = _yr_scan_wicompare(
          data + offset,
          data_size - offset,
          string->string,
          string->length);
    }
  }
  else
  {
    if (STRING_IS_ASCII(string))
    {
      forward_matches = _yr_scan_compare(
          data + offset,
          data_size - offset,
          string->string,
          string->length);
    }

    if (STRING_IS_WIDE(string) && forward_matches == 0)
    {
      forward_matches = _yr_scan_wcompare(
          data + offset,
          data_size - offset,
          string->string,
          string->length);
    }
  }

  if (forward_matches == 0)
    return ERROR_SUCCESS;

  if (forward_matches == string->length * 2)
    flags |= RE_FLAGS_WIDE;

  if (STRING_IS_NO_CASE(string))
    flags |= RE_FLAGS_NO_CASE;

  callback_args.context = context;
  callback_args.string = string;
  callback_args.data = data;
  callback_args.data_size = data_size;
  callback_args.data_base = data_base;
  callback_args.forward_matches = forward_matches;
  callback_args.full_word = STRING_IS_FULL_WORD(string);

  FAIL_ON_ERROR(_yr_scan_match_callback(
      data + offset, 0, flags, &callback_args));

  return ERROR_SUCCESS;
}


int yr_scan_verify_match(
    YR_SCAN_CONTEXT* context,
    YR_AC_MATCH* ac_match,
    uint8_t* data,
    size_t data_size,
    size_t data_base,
    size_t offset)
{
  YR_STRING* string = ac_match->string;

  #ifdef PROFILING_ENABLED
  clock_t start = clock();
  #endif

  if (data_size - offset <= 0)
    return ERROR_SUCCESS;

  if (context->flags & SCAN_FLAGS_FAST_MODE &&
      STRING_IS_SINGLE_MATCH(string) &&
      string->matches[context->tidx].head != NULL)
    return ERROR_SUCCESS;

  if (STRING_IS_FIXED_OFFSET(string) &&
      string->fixed_offset != data_base + offset)
    return ERROR_SUCCESS;

  if (STRING_IS_LITERAL(string))
  {
    FAIL_ON_ERROR(_yr_scan_verify_literal_match(
        context, ac_match, data, data_size, data_base, offset));
  }
  else
  {
    FAIL_ON_ERROR(_yr_scan_verify_re_match(
        context, ac_match, data, data_size, data_base, offset));
  }

  #ifdef PROFILING_ENABLED
  string->clock_ticks += clock() - start;
  #endif

  return ERROR_SUCCESS;
}