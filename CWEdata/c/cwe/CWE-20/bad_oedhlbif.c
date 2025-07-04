/**
 * @file yang.y
 * @author Pavol Vican
 * @brief YANG parser for libyang (bison grammar)
 *
 * Copyright (c) 2015 CESNET, z.s.p.o.
 *
 * This source code is licensed under BSD 3-Clause License (the "License").
 * You may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://opensource.org/licenses/BSD-3-Clause
 */

%define api.pure full
%locations

%parse-param {void *scanner}
%parse-param {struct yang_parameter *param}

%lex-param {void *scanner}

%{
#include <stdio.h>
#include <stdarg.h>
#include <string.h>
#include <stdlib.h>
#include "libyang.h"
#include "common.h"
#include "context.h"
#include "resolve.h"
#include "parser_yang.h"
#include "parser_yang_lex.h"
#include "parser.h"

#define YANG_ADDELEM(current_ptr, size, array_name)                                      \
    if ((size) == LY_ARRAY_MAX(size)) {                                                  \
         LOGERR(trg->ctx, LY_EINT, "Reached limit (%"PRIu64") for storing %s.", LY_ARRAY_MAX(size), array_name); \
         free(s);                                                                        \
         YYABORT;                                                                        \
    } else if (!((size) % LY_YANG_ARRAY_SIZE)) {                                         \
        void *tmp;                                                                       \
                                                                                         \
        tmp = realloc((current_ptr), (sizeof *(current_ptr)) * ((size) + LY_YANG_ARRAY_SIZE)); \
        if (!tmp) {                                                                      \
            LOGMEM(trg->ctx);                                                            \
            free(s);                                                                     \
            YYABORT;                                                                     \
        }                                                                                \
        memset(tmp + (sizeof *(current_ptr)) * (size), 0, (sizeof *(current_ptr)) * LY_YANG_ARRAY_SIZE); \
        (current_ptr) = tmp;                                                             \
    }                                                                                    \
    actual = &(current_ptr)[(size)++];                                                   \

void yyerror(YYLTYPE *yylloc, void *scanner, struct yang_parameter *param, ...);
/* pointer on the current parsed element 'actual' */
%}

%union {
  int32_t i;
  uint32_t uint;
  char *str;
  char **p_str;
  void *v;
  char ch;
  struct yang_type *type;
  struct lys_deviation *dev;
  struct lys_deviate *deviate;
  union {
    uint32_t index;
    struct lys_node_container *container;
    struct lys_node_anydata *anydata;
    struct type_node node;
    struct lys_node_case *cs;
    struct lys_node_grp *grouping;
    struct lys_refine *refine;
    struct lys_node_notif *notif;
    struct lys_node_uses *uses;
    struct lys_node_inout *inout;
    struct lys_node_augment *augment;
  } nodes;
  enum yytokentype token;
  struct {
    void *actual;
    enum yytokentype token;
  } backup_token;
  struct {
    struct lys_revision **revision;
    int index;
  } revisions;
}

%token UNION_KEYWORD
%token ANYXML_KEYWORD
%token WHITESPACE
%token ERROR
%token EOL
%token STRING
%token STRINGS
%token IDENTIFIER
%token IDENTIFIERPREFIX
%token REVISION_DATE
%token TAB
%token DOUBLEDOT
%token URI
%token INTEGER
%token NON_NEGATIVE_INTEGER
%token ZERO
%token DECIMAL
%token ARGUMENT_KEYWORD
%token AUGMENT_KEYWORD
%token BASE_KEYWORD
%token BELONGS_TO_KEYWORD
%token BIT_KEYWORD
%token CASE_KEYWORD
%token CHOICE_KEYWORD
%token CONFIG_KEYWORD
%token CONTACT_KEYWORD
%token CONTAINER_KEYWORD
%token DEFAULT_KEYWORD
%token DESCRIPTION_KEYWORD
%token ENUM_KEYWORD
%token ERROR_APP_TAG_KEYWORD
%token ERROR_MESSAGE_KEYWORD
%token EXTENSION_KEYWORD
%token DEVIATION_KEYWORD
%token DEVIATE_KEYWORD
%token FEATURE_KEYWORD
%token FRACTION_DIGITS_KEYWORD
%token GROUPING_KEYWORD
%token IDENTITY_KEYWORD
%token IF_FEATURE_KEYWORD
%token IMPORT_KEYWORD
%token INCLUDE_KEYWORD
%token INPUT_KEYWORD
%token KEY_KEYWORD
%token LEAF_KEYWORD
%token LEAF_LIST_KEYWORD
%token LENGTH_KEYWORD
%token LIST_KEYWORD
%token MANDATORY_KEYWORD
%token MAX_ELEMENTS_KEYWORD
%token MIN_ELEMENTS_KEYWORD
%token MODULE_KEYWORD
%token MUST_KEYWORD
%token NAMESPACE_KEYWORD
%token NOTIFICATION_KEYWORD
%token ORDERED_BY_KEYWORD
%token ORGANIZATION_KEYWORD
%token OUTPUT_KEYWORD
%token PATH_KEYWORD
%token PATTERN_KEYWORD
%token POSITION_KEYWORD
%token PREFIX_KEYWORD
%token PRESENCE_KEYWORD
%token RANGE_KEYWORD
%token REFERENCE_KEYWORD
%token REFINE_KEYWORD
%token REQUIRE_INSTANCE_KEYWORD
%token REVISION_KEYWORD
%token REVISION_DATE_KEYWORD
%token RPC_KEYWORD
%token STATUS_KEYWORD
%token SUBMODULE_KEYWORD
%token TYPE_KEYWORD
%token TYPEDEF_KEYWORD
%token UNIQUE_KEYWORD
%token UNITS_KEYWORD
%token USES_KEYWORD
%token VALUE_KEYWORD
%token WHEN_KEYWORD
%token YANG_VERSION_KEYWORD
%token YIN_ELEMENT_KEYWORD
%token ADD_KEYWORD
%token CURRENT_KEYWORD
%token DELETE_KEYWORD
%token DEPRECATED_KEYWORD
%token FALSE_KEYWORD
%token NOT_SUPPORTED_KEYWORD
%token OBSOLETE_KEYWORD
%token REPLACE_KEYWORD
%token SYSTEM_KEYWORD
%token TRUE_KEYWORD
%token UNBOUNDED_KEYWORD
%token USER_KEYWORD
%token ACTION_KEYWORD
%token MODIFIER_KEYWORD
%token ANYDATA_KEYWORD
%token NODE
%token NODE_PRINT
%token EXTENSION_INSTANCE
%token SUBMODULE_EXT_KEYWORD

%type <uint> positive_integer_value
%type <uint> non_negative_integer_value
%type <uint> max_value_arg_str
%type <uint> max_value_arg
%type <uint> max_elements_stmt
%type <uint> min_value_arg_str
%type <uint> min_value_arg
%type <uint> min_elements_stmt
%type <uint> fraction_digits_arg_str
%type <uint> fraction_digits_arg
%type <uint> position_value_arg_str
%type <uint> position_value_arg
%type <uint> yin_element_arg_str
%type <uint> yin_element_arg
%type <uint> fraction_digits_stmt
%type <uint> position_stmt
%type <i> value_stmt
%type <i> require_instance_stmt
%type <i> require_instance_arg_str
%type <i> require_instance_arg
%type <i> import_opt_stmt
%type <i> include_opt_stmt
%type <i> module_header_stmt
%type <i> submodule_header_stmt
%type <str> message_opt_stmt
%type <i> status_stmt
%type <i> status_arg_str
%type <i> status_arg
%type <i> config_stmt
%type <i> config_arg_str
%type <i> config_arg
%type <i> mandatory_stmt
%type <i> mandatory_arg_str
%type <i> mandatory_arg
%type <i> ordered_by_stmt
%type <i> ordered_by_arg_str
%type <i> ordered_by_arg
%type <i> integer_value_arg_str
%type <i> value_arg
%type <i> integer_value
%type <i> ext_substatements
%type <str> pattern_arg_str
%type <nodes> container_opt_stmt
%type <nodes> anyxml_opt_stmt
%type <nodes> choice_opt_stmt
%type <nodes> case_opt_stmt
%type <nodes> grouping_opt_stmt
%type <nodes> leaf_opt_stmt
%type <nodes> leaf_list_opt_stmt
%type <nodes> list_opt_stmt
%type <nodes> type_opt_stmt
%type <nodes> uses_opt_stmt
%type <nodes> refine_body_opt_stmts
%type <nodes> augment_opt_stmt
%type <nodes> rpc_opt_stmt
%type <nodes> notification_opt_stmt
%type <dev> deviation_opt_stmt
%type <deviate> deviate_add_opt_stmt
%type <deviate> deviate_delete_opt_stmt
%type <deviate> deviate_replace_opt_stmt
%type <ch> pattern_opt_stmt
%type <ch> pattern_end
%type <ch> modifier_stmt
%type <p_str> tmp_string
%type <str> string_opt_part1
%type <str> semicolom
%type <str> curly_bracket_open
%type <str> unknown_statement2_yang_stmt
%type <str> unknown_statement2_module_stmt
%type <v> type_ext_alloc
%type <v> typedef_ext_alloc
%type <v> iffeature_ext_alloc
%type <v> restriction_ext_alloc
%type <v> when_ext_alloc
%type <revisions> revision_ext_alloc
%type <token> import_arg_str
%type <token> include_arg_str
%type <token> argument_str
%type <token> belongs_to_arg_str
%type <backup_token> revision_arg_stmt
%type <backup_token> grouping_arg_str
%type <backup_token> container_arg_str
%type <backup_token> leaf_arg_str
%type <backup_token> leaf_list_arg_str
%type <backup_token> list_arg_str
%type <backup_token> choice_arg_str
%type <backup_token> case_arg_str
%type <backup_token> anyxml_arg_str
%type <backup_token> anydata_arg_str
%type <backup_token> uses_arg_str
%type <backup_token> uses_augment_arg
%type <backup_token> augment_arg
%type <backup_token> action_arg_str
%type <backup_token> rpc_arg_str
%type <backup_token> input_arg
%type <backup_token> output_arg
%type <backup_token> notification_arg_str
%type <backup_token> extension_arg_str
%type <backup_token> feature_arg_str
%type <backup_token> identity_arg_str
%type <backup_token> if_feature_arg
%type <backup_token> typedef_arg_str
%type <backup_token> type_arg_str
%type <backup_token> length_arg_str
%type <backup_token> pattern_sep
%type <backup_token> range_arg_str
%type <backup_token> union_spec
%type <backup_token> enum_arg_str
%type <backup_token> bit_arg_str
%type <backup_token> when_arg_str
%type <backup_token> must_agr_str
%type <backup_token> refine_arg_str
%type <backup_token> deviation_arg
%type <backup_token> deviate_not_supported
%type <backup_token> deviate_add
%type <backup_token> deviate_delete
%type <backup_token> deviate_replace
%type <backup_token> string_opt

%destructor { free($$); } pattern_arg_str string_opt_part1 semicolom curly_bracket_open
%destructor { free(($$) ? *$$ : NULL); } tmp_string
%destructor { yang_type_free(param->module->ctx, $$); } type_ext_alloc
%destructor { yang_type_free(param->module->ctx, &((struct lys_tpdf *)$$)->type); } typedef_ext_alloc

%initial-action { yylloc.last_column = 0;
                  if (param->flags & EXT_INSTANCE_SUBSTMT) {
                    is_ext_instance = 1;
                    ext_instance = (struct lys_ext_instance_complex *)param->actual_node;
                    ext_name = (char *)param->data_node;
                  } else {
                    is_ext_instance = 0;
                  }
                  yylloc.last_line = is_ext_instance;     /* HACK for flex - return SUBMODULE_KEYWORD or SUBMODULE_EXT_KEYWORD */
                  param->value = &s;
                  param->data_node = (void **)&data_node;
                  param->actual_node = &actual;
                  backup_type = NODE;
                  trg = (param->submodule) ? (struct lys_module *)param->submodule : param->module;
                }

%%

/* to simplify code, store the module/submodule being processed as trg */

start: module_stmt
 |  submodule_stmt
 |  ext_substatements

tmp_string: STRING { if (yyget_text(scanner)[0] == '"') {
                      char *tmp;

                      s = malloc(yyget_leng(scanner) - 1 + 7 * yylval.i);
                      if (!s) {
                        LOGMEM(trg->ctx);
                        YYABORT;
                      }
                      if (!(tmp = yang_read_string(trg->ctx, yyget_text(scanner) + 1, s, yyget_leng(scanner) - 2, 0, yylloc.first_column))) {
                        YYABORT;
                      }
                      s = tmp;
                    } else {
                      s = calloc(1, yyget_leng(scanner) - 1);
                      if (!s) {
                        LOGMEM(trg->ctx);
                        YYABORT;
                      }
                      memcpy(s, yyget_text(scanner) + 1, yyget_leng(scanner) - 2);
                    }
                    $$ = &s;
                  }

string_1: tmp_string optsep string_2


string_2: @EMPTYDIR@
  |  string_2 '+' optsep
     STRING { if (yyget_leng(scanner) > 2) {
                int length_s = strlen(s), length_tmp = yyget_leng(scanner);
                char *tmp;

                tmp = realloc(s, length_s + length_tmp - 1);
                if (!tmp) {
                  LOGMEM(trg->ctx);
                  YYABORT;
                }
                s = tmp;
                if (yyget_text(scanner)[0] == '"') {
                  if (!(tmp = yang_read_string(trg->ctx, yyget_text(scanner) + 1, s, length_tmp - 2, length_s, yylloc.first_column))) {
                    YYABORT;
                  }
                  s = tmp;
                } else {
                  memcpy(s + length_s, yyget_text(scanner) + 1, length_tmp - 2);
                  s[length_s + length_tmp - 2] = '\0';
                }
              }
            }
     optsep;

module_arg_str: identifier_arg_str { if (param->submodule) {
                                       free(s);
                                       LOGVAL(trg->ctx, LYE_INSTMT, LY_VLOG_NONE, NULL, "module");
                                       YYABORT;
                                     }
                                     trg = param->module;
                                     yang_read_common(trg,s,MODULE_KEYWORD);
                                     s = NULL;
                                     actual_type = MODULE_KEYWORD;
                                   }

module_stmt: optsep MODULE_KEYWORD sep module_arg_str
             '{' stmtsep
                 module_header_stmts
                 linkage_stmts
                 meta_stmts
                 revision_stmts
                 body_stmts_end
             '}' optsep


module_header_stmts: module_header_stmt { if (!param->module->ns) {
                                            LOGVAL(trg->ctx, LYE_MISSCHILDSTMT, LY_VLOG_NONE, NULL, "namespace", "module");
                                            YYABORT;
                                          }
                                          if (!param->module->prefix) {
                                            LOGVAL(trg->ctx, LYE_MISSCHILDSTMT, LY_VLOG_NONE, NULL, "prefix", "module");
                                            YYABORT;
                                          }
                                        }

module_header_stmt: @EMPTYDIR@  { $$ = 0; }
  |  module_header_stmt yang_version_stmt { if (yang_check_version(param->module, param->submodule, s, $1)) {
                                              YYABORT;
                                            }
                                            $$ = 1;
                                            s = NULL;
                                          }
  |  module_header_stmt namespace_stmt { if (yang_read_common(param->module, s, NAMESPACE_KEYWORD)) {
                                           YYABORT;
                                         }
                                         s = NULL;
                                       }
  |  module_header_stmt prefix_stmt { if (yang_read_prefix(trg, NULL, s)) {
                                        YYABORT;
                                      }
                                      s = NULL;
                                    }

submodule_arg_str: identifier_arg_str { if (!param->submodule) {
                                          free(s);
                                          LOGVAL(trg->ctx, LYE_SUBMODULE, LY_VLOG_NONE, NULL);
                                          YYABORT;
                                        }
                                        trg = (struct lys_module *)param->submodule;
                                        yang_read_common(trg,s,MODULE_KEYWORD);
                                        s = NULL;
                                        actual_type = SUBMODULE_KEYWORD;
                                      }

submodule_stmt: optsep SUBMODULE_KEYWORD sep submodule_arg_str
                '{' stmtsep
                    submodule_header_stmts
                    linkage_stmts
                    meta_stmts
                    revision_stmts
                    body_stmts_end
                '}' optsep


submodule_header_stmts: submodule_header_stmt { if (!param->submodule->prefix) {
                                                  LOGVAL(trg->ctx, LYE_MISSCHILDSTMT, LY_VLOG_NONE, NULL, "belongs-to", "submodule");
                                                  YYABORT;
                                                }
                                                if (!$1) {
                                                  /* check version compatibility with the main module */
                                                  if (param->module->version > 1) {
                                                      LOGVAL(trg->ctx, LYE_INVER, LY_VLOG_NONE, NULL);
                                                      YYABORT;
                                                  }
                                                }
                                              }

submodule_header_stmt: @EMPTYDIR@ { $$ = 0; }
  |  submodule_header_stmt yang_version_stmt { if (yang_check_version(param->module, param->submodule, s, $1)) {
                                                 YYABORT;
                                               }
                                               $$ = 1;
                                               s = NULL;
                                             }
  |  submodule_header_stmt belongs_to_stmt stmtsep

yang_version_arg: string { backup_type = actual_type;
                           actual_type = YANG_VERSION_KEYWORD;
                         }

yang_version_stmt: YANG_VERSION_KEYWORD sep yang_version_arg stmtend

namespace_arg_str: string { backup_type = actual_type;
                            actual_type = NAMESPACE_KEYWORD;
                          }

namespace_stmt: NAMESPACE_KEYWORD sep namespace_arg_str stmtend

linkage_stmts: @EMPTYDIR@
 |  linkage_stmts import_stmt stmtsep
 |  linkage_stmts include_stmt stmtsep

import_stmt: IMPORT_KEYWORD sep import_arg_str
             '{' stmtsep
                 import_opt_stmt
             '}' { actual_type = $3;
                   backup_type = NODE;
                   actual = NULL;
                 }

import_arg_str: identifier_arg_str { YANG_ADDELEM(trg->imp, trg->imp_size, "imports");
                                     /* HACK for unres */
                                     ((struct lys_import *)actual)->module = (struct lys_module *)s;
                                     s = NULL;
                                     $$ = actual_type;
                                     actual_type = IMPORT_KEYWORD;
                                   }

import_opt_stmt: @EMPTYDIR@ { $$ = 0; }
  |  import_opt_stmt prefix_stmt { if (yang_read_prefix(trg, actual, s)) {
                                     YYABORT;
                                   }
                                   s = NULL;
                                 }
  |  import_opt_stmt description_stmt { if (trg->version != 2) {
                                          LOGVAL(trg->ctx, LYE_INSTMT, LY_VLOG_NONE, NULL, "description");
                                          free(s);
                                          YYABORT;
                                        }
                                        if (yang_read_description(trg, actual, s, "import", IMPORT_KEYWORD)) {
                                          YYABORT;
                                        }
                                        s = NULL;
                                        $$ = $1;
                                      }
  |  import_opt_stmt reference_stmt { if (trg->version != 2) {
                                        LOGVAL(trg->ctx, LYE_INSTMT, LY_VLOG_NONE, NULL, "reference");
                                        free(s);
                                        YYABORT;
                                      }
                                      if (yang_read_reference(trg, actual, s, "import", IMPORT_KEYWORD)) {
                                        YYABORT;
                                      }
                                      s = NULL;
                                      $$ = $1;
                                    }
  |  import_opt_stmt revision_date_stmt { if ($1) {
                                            LOGVAL(trg->ctx, LYE_TOOMANY, LY_VLOG_NONE, NULL, "revision-date", "import");
                                            free(s);
                                            YYABORT;
                                          }
                                          memcpy(((struct lys_import *)actual)->rev, s, LY_REV_SIZE-1);
                                          free(s);
                                          s = NULL;
                                          $$ = 1;
                                        }

include_arg_str: identifier_arg_str { YANG_ADDELEM(trg->inc, trg->inc_size, "includes");
                                     /* HACK for unres */
                                     ((struct lys_include *)actual)->submodule = (struct lys_submodule *)s;
                                     s = NULL;
                                     $$ = actual_type;
                                     actual_type = INCLUDE_KEYWORD;
                                   }

include_stmt: INCLUDE_KEYWORD sep include_arg_str include_end { actual_type = $3;
                                                                backup_type = NODE;
                                                                actual = NULL;
                                                              }

include_end: ';'
  | '{' stmtsep
        include_opt_stmt
    '}'

include_opt_stmt: @EMPTYDIR@ { $$ = 0; }
  |  include_opt_stmt description_stmt { if (trg->version != 2) {
                                           LOGVAL(trg->ctx, LYE_INSTMT, LY_VLOG_NONE, NULL, "description");
                                           free(s);
                                           YYABORT;
                                         }
                                         if (yang_read_description(trg, actual, s, "include", INCLUDE_KEYWORD)) {
                                            YYABORT;
                                         }
                                         s = NULL;
                                         $$ = $1;
                                       }
  |  include_opt_stmt reference_stmt { if (trg->version != 2) {
                                         LOGVAL(trg->ctx, LYE_INSTMT, LY_VLOG_NONE, NULL, "reference");
                                         free(s);
                                         YYABORT;
                                       }
                                       if (yang_read_reference(trg, actual, s, "include", INCLUDE_KEYWORD)) {
                                         YYABORT;
                                       }
                                       s = NULL;
                                       $$ = $1;
                                     }
  |  include_opt_stmt revision_date_stmt { if ($1) {
                                             LOGVAL(trg->ctx, LYE_TOOMANY, LY_VLOG_NONE, NULL, "revision-date", "include");
                                             free(s);
                                             YYABORT;
                                           }
                                           memcpy(((struct lys_include *)actual)->rev, s, LY_REV_SIZE-1);
                                           free(s);
                                           s = NULL;
                                           $$ = 1;
                                         }

revision_date_arg: date_arg_str { backup_type = actual_type;
                                  actual_type = REVISION_DATE_KEYWORD;
                                }

revision_date_stmt: REVISION_DATE_KEYWORD sep revision_date_arg stmtend

belongs_to_arg_str: identifier_arg_str { $$ = actual_type;
                                         if (is_ext_instance) {
                                           if (yang_read_extcomplex_str(trg, ext_instance, "belongs-to", ext_name, s,
                                                                        0, LY_STMT_BELONGSTO)) {
                                             YYABORT;
                                           }
                                         } else {
                                           if (param->submodule->prefix) {
                                             LOGVAL(trg->ctx, LYE_TOOMANY, LY_VLOG_NONE, NULL, "belongs-to", "submodule");
                                             free(s);
                                             YYABORT;
                                           }
                                           if (!ly_strequal(s, param->submodule->belongsto->name, 0)) {
                                             LOGVAL(trg->ctx, LYE_INARG, LY_VLOG_NONE, NULL, s, "belongs-to");
                                             free(s);
                                             YYABORT;
                                           }
                                           free(s);
                                         }
                                         s = NULL;
                                         actual_type = BELONGS_TO_KEYWORD;
                                       }

belongs_to_stmt: BELONGS_TO_KEYWORD sep belongs_to_arg_str
                 '{' stmtsep
                     prefix_stmt
                 '}' { if (is_ext_instance) {
                         if (yang_read_extcomplex_str(trg, ext_instance, "prefix", "belongs-to", s,
                                                      LY_STMT_BELONGSTO, LY_STMT_PREFIX)) {
                           YYABORT;
                         }
                       } else {
                         if (yang_read_prefix(trg, NULL, s)) {
                           YYABORT;
                         }
                       }
                       s = NULL;
                       actual_type = $3;
                     }

prefix_arg: prefix_arg_str { backup_type = actual_type;
                             actual_type = PREFIX_KEYWORD;
                           }

prefix_stmt: PREFIX_KEYWORD sep prefix_arg stmtend

meta_stmts: @EMPTYDIR@
  |  meta_stmts organization_stmt { if (yang_read_common(trg, s, ORGANIZATION_KEYWORD)) {
                                      YYABORT;
                                    }
                                    s = NULL;
                                  }
  |  meta_stmts contact_stmt { if (yang_read_common(trg, s, CONTACT_KEYWORD)) {
                                 YYABORT;
                               }
                               s = NULL;
                             }
  |  meta_stmts description_stmt { if (yang_read_description(trg, NULL, s, NULL, MODULE_KEYWORD)) {
                                     YYABORT;
                                   }
                                   s = NULL;
                                 }
  |  meta_stmts reference_stmt { if (yang_read_reference(trg, NULL, s, NULL, MODULE_KEYWORD)) {
                                   YYABORT;
                                 }
                                 s=NULL;
                               }

organization_arg: string { backup_type = actual_type;
                           actual_type = ORGANIZATION_KEYWORD;
                         }

organization_stmt: ORGANIZATION_KEYWORD sep organization_arg stmtend

contact_arg: string { backup_type = actual_type;
                      actual_type = CONTACT_KEYWORD;
                    }

contact_stmt: CONTACT_KEYWORD sep contact_arg stmtend

description_arg: string { backup_type = actual_type;
                          actual_type = DESCRIPTION_KEYWORD;
                        }

description_stmt: DESCRIPTION_KEYWORD sep description_arg stmtend

reference_arg: string { backup_type = actual_type;
                        actual_type = REFERENCE_KEYWORD;
                      }

reference_stmt: REFERENCE_KEYWORD sep reference_arg stmtend

revision_stmts: revision_stmts_opt { if (trg->rev_size) {
                                      struct lys_revision *tmp;

                                      tmp = realloc(trg->rev, trg->rev_size * sizeof *trg->rev);
                                      if (!tmp) {
                                        LOGMEM(trg->ctx);
                                        YYABORT;
                                      }
                                      trg->rev = tmp;
                                    }
                                  }


revision_arg_stmt: date_arg_str { $$.token = actual_type;
                                  $$.actual = actual;
                                  if (!is_ext_instance) {
                                    YANG_ADDELEM(trg->rev, trg->rev_size, "revisions");
                                  }
                                  memcpy(((struct lys_revision *)actual)->date, s, LY_REV_SIZE);
                                  free(s);
                                  s = NULL;
                                  actual_type = REVISION_KEYWORD;
                                }

revision_stmts_opt: @EMPTYDIR@
  |  revision_stmts_opt revision_stmt stmtsep { int i;

                                                /* check uniqueness of the revision date - not required by RFC */
                                                for (i = 0; i < (trg->rev_size - 1); i++) {
                                                  if (!strcmp(trg->rev[i].date, trg->rev[trg->rev_size - 1].date)) {
                                                    LOGWRN(trg->ctx, "Module's revisions are not unique (%s).",
                                                           trg->rev[trg->rev_size - 1].date);
                                                    break;
                                                  }
                                                }
                                              }

revision_stmt: REVISION_KEYWORD sep revision_arg_stmt revision_end { actual_type = $3.token;
                                                                     actual = $3.actual;
                                                                   }

revision_end: ';'
  | '{' stmtsep
        revision_opt_stmt
    '}'

revision_opt_stmt: @EMPTYDIR@
  |  revision_opt_stmt description_stmt { if (yang_read_description(trg, actual, s, "revision",REVISION_KEYWORD)) {
                                            YYABORT;
                                          }
                                          s = NULL;
                                        }
  |  revision_opt_stmt reference_stmt { if (yang_read_reference(trg, actual, s, "revision", REVISION_KEYWORD)) {
                                          YYABORT;
                                        }
                                        s = NULL;
                                      }
  ;

date_arg_str: REVISION_DATE { s = strdup(yyget_text(scanner));
                              if (!s) {
                                LOGMEM(trg->ctx);
                                YYABORT;
                              }
                              if (lyp_check_date(trg->ctx, s)) {
                                  free(s);
                                  YYABORT;
                              }
                            }
              optsep
  | string_1 { if (lyp_check_date(trg->ctx, s)) {
                   free(s);
                   YYABORT;
               }
             }

body_stmts_end: body_stmts { void *tmp;

                             if (trg->tpdf_size) {
                               tmp = realloc(trg->tpdf, trg->tpdf_size * sizeof *trg->tpdf);
                               if (!tmp) {
                                 LOGMEM(trg->ctx);
                                 YYABORT;
                               }
                               trg->tpdf = tmp;
                             }

                             if (trg->features_size) {
                               tmp = realloc(trg->features, trg->features_size * sizeof *trg->features);
                               if (!tmp) {
                                 LOGMEM(trg->ctx);
                                 YYABORT;
                               }
                               trg->features = tmp;
                             }

                             if (trg->ident_size) {
                               tmp = realloc(trg->ident, trg->ident_size * sizeof *trg->ident);
                               if (!tmp) {
                                 LOGMEM(trg->ctx);
                                 YYABORT;
                               }
                               trg->ident = tmp;
                             }

                             if (trg->augment_size) {
                               tmp = realloc(trg->augment, trg->augment_size * sizeof *trg->augment);
                               if (!tmp) {
                                 LOGMEM(trg->ctx);
                                 YYABORT;
                               }
                               trg->augment = tmp;
                             }

                             if (trg->extensions_size) {
                               tmp = realloc(trg->extensions, trg->extensions_size * sizeof *trg->extensions);
                               if (!tmp) {
                                 LOGMEM(trg->ctx);
                                 YYABORT;
                               }
                               trg->extensions = tmp;
                             }
                           }

body_stmts: @EMPTYDIR@ { /* check the module with respect to the context now */
                         if (!param->submodule) {
                           switch (lyp_ctx_check_module(trg)) {
                           case -1:
                             YYABORT;
                           case 0:
                             break;
                           case 1:
                             /* it's already there */
                             param->flags |= YANG_EXIST_MODULE;
                             YYABORT;
                           }
                         }
                         param->flags &= (~YANG_REMOVE_IMPORT);
                         if (yang_check_imports(trg, param->unres)) {
                           YYABORT;
                         }
                         actual = NULL;
                       }
  | body_stmts body_stmt stmtsep { actual = NULL; }


body_stmt: extension_stmt
  | feature_stmt
  | identity_stmt
  | typedef_stmt
  | grouping_stmt
  | data_def_stmt
  | augment_stmt
  | rpc_stmt
  | notification_stmt
  | deviation_stmt


extension_arg_str: identifier_arg_str { $$.token = actual_type;
                                        $$.actual = actual;
                                        YANG_ADDELEM(trg->extensions, trg->extensions_size, "extensions");
                                        trg->extensions_size--;
                                        ((struct lys_ext *)actual)->name = lydict_insert_zc(param->module->ctx, s);
                                        ((struct lys_ext *)actual)->module = trg;
                                        if (lyp_check_identifier(trg->ctx, ((struct lys_ext *)actual)->name, LY_IDENT_EXTENSION, trg, NULL)) {
                                          trg->extensions_size++;
                                          YYABORT;
                                        }
                                        trg->extensions_size++;
                                        s = NULL;
                                        actual_type = EXTENSION_KEYWORD;
                                      }

extension_stmt: EXTENSION_KEYWORD sep extension_arg_str extension_end
                { struct lys_ext *ext = actual;
                  ext->plugin = ext_get_plugin(ext->name, ext->module->name, ext->module->rev ? ext->module->rev[0].date : NULL);
                  actual_type = $3.token;
                  actual = $3.actual;
                }

extension_end: ';'
  | '{' stmtsep
        extension_opt_stmt
    '}'

extension_opt_stmt: @EMPTYDIR@
  |  extension_opt_stmt argument_stmt stmtsep
  |  extension_opt_stmt status_stmt { if (((struct lys_ext *)actual)->flags & LYS_STATUS_MASK) {
                                        LOGVAL(trg->ctx, LYE_TOOMANY, LY_VLOG_NONE, NULL, "status", "extension");
                                        YYABORT;
                                      }
                                      ((struct lys_ext *)actual)->flags |= $2;
                                    }
  |  extension_opt_stmt description_stmt { if (yang_read_description(trg, actual, s, "extension", NODE)) {
                                             YYABORT;
                                           }
                                           s = NULL;
                                         }
  |  extension_opt_stmt reference_stmt { if (yang_read_reference(trg, actual, s, "extension", NODE)) {
                                           YYABORT;
                                         }
                                         s = NULL;
                                       }

argument_str: identifier_arg_str { $$ = actual_type;
                                   if (is_ext_instance) {
                                     if (yang_read_extcomplex_str(trg, ext_instance, "argument", ext_name, s,
                                                                  0, LY_STMT_ARGUMENT)) {
                                       YYABORT;
                                     }
                                   } else {
                                     if (((struct lys_ext *)actual)->argument) {
                                        LOGVAL(trg->ctx, LYE_TOOMANY, LY_VLOG_NONE, NULL, "argument", "extension");
                                        free(s);
                                        YYABORT;
                                     }
                                     ((struct lys_ext *)actual)->argument = lydict_insert_zc(param->module->ctx, s);
                                   }
                                   s = NULL;
                                   actual_type = ARGUMENT_KEYWORD;
                                 }

argument_stmt: ARGUMENT_KEYWORD sep  argument_str argument_end { actual_type = $3; }

argument_end: ';'
  | '{' stmtsep
        yin_element_stmt
    '}'

yin_element_arg: yin_element_arg_str { $$ = $1;
                                       backup_type = actual_type;
                                       actual_type = YIN_ELEMENT_KEYWORD;
                                     }

yin_element_stmt: @EMPTYDIR@
  |  YIN_ELEMENT_KEYWORD sep yin_element_arg stmtend
     { if (is_ext_instance) {
         int c;
         const char ***p;
         uint8_t *val;
         struct lyext_substmt *info;

         c = 0;
         p = lys_ext_complex_get_substmt(LY_STMT_ARGUMENT, ext_instance, &info);
         if (info->cardinality >= LY_STMT_CARD_SOME) {
           /* get the index in the array to add new item */
           for (c = 0; p[0][c + 1]; c++);
           val = (uint8_t *)p[1];
         } else {
           val = (uint8_t *)(p + 1);
         }
         val[c] = ($3 == LYS_YINELEM) ? 1 : 2;
       } else {
         ((struct lys_ext *)actual)->flags |= $3;
       }
     }

yin_element_arg_str: TRUE_KEYWORD optsep { $$ = LYS_YINELEM; }
  | FALSE_KEYWORD optsep { $$ = 0; }
  | string_1 { if (!strcmp(s, "true")) {
                 $$ = LYS_YINELEM;
               } else if (!strcmp(s, "false")) {
                 $$ = 0;
               } else {
                 LOGVAL(trg->ctx, LYE_INSTMT, LY_VLOG_NONE, NULL, s);
                 free(s);
                 YYABORT;
               }
               free(s);
               s = NULL;
             }

status_arg: status_arg_str { $$ = $1;
                             backup_type = actual_type;
                             actual_type = STATUS_KEYWORD;
                           }

status_stmt:  STATUS_KEYWORD sep status_arg stmtend { $$ = $3; }

status_arg_str: CURRENT_KEYWORD optsep { $$ = LYS_STATUS_CURR; }
  | OBSOLETE_KEYWORD optsep { $$ = LYS_STATUS_OBSLT; }
  | DEPRECATED_KEYWORD optsep { $$ = LYS_STATUS_DEPRC; }
  | string_1 { if (!strcmp(s, "current")) {
                 $$ = LYS_STATUS_CURR;
               } else if (!strcmp(s, "obsolete")) {
                 $$ = LYS_STATUS_OBSLT;
               } else if (!strcmp(s, "deprecated")) {
                 $$ = LYS_STATUS_DEPRC;
               } else {
                 LOGVAL(trg->ctx,LYE_INSTMT, LY_VLOG_NONE, NULL, s);
                 free(s);
                 YYABORT;
               }
               free(s);
               s = NULL;
             }

feature_arg_str: identifier_arg_str { /* check uniqueness of feature's names */
                                      if (lyp_check_identifier(trg->ctx, s, LY_IDENT_FEATURE, trg, NULL)) {
                                        free(s);
                                        YYABORT;
                                      }
                                      $$.token = actual_type;
                                      $$.actual = actual;
                                      YANG_ADDELEM(trg->features, trg->features_size, "features");
                                      ((struct lys_feature *)actual)->name = lydict_insert_zc(trg->ctx, s);
                                      ((struct lys_feature *)actual)->module = trg;
                                      s = NULL;
                                      actual_type = FEATURE_KEYWORD;
                                    }

feature_stmt: FEATURE_KEYWORD sep feature_arg_str feature_end
              { actual = $3.actual;
                actual_type = $3.token;
              }

feature_end: ';'
  | '{' stmtsep
        feature_opt_stmt
    '}' { struct lys_iffeature *tmp;

          if (((struct lys_feature *)actual)->iffeature_size) {
            tmp = realloc(((struct lys_feature *)actual)->iffeature,
                          ((struct lys_feature *)actual)->iffeature_size * sizeof *tmp);
            if (!tmp) {
              LOGMEM(trg->ctx);
              YYABORT;
            }
            ((struct lys_feature *)actual)->iffeature = tmp;
          }
        }

feature_opt_stmt: @EMPTYDIR@
  |  feature_opt_stmt if_feature_stmt stmtsep
  |  feature_opt_stmt status_stmt { if (((struct lys_feature *)actual)->flags & LYS_STATUS_MASK) {
                                      LOGVAL(trg->ctx, LYE_TOOMANY, LY_VLOG_NONE, NULL, "status", "feature");
                                      YYABORT;
                                    }
                                    ((struct lys_feature *)actual)->flags |= $2;
                                  }
  |  feature_opt_stmt description_stmt { if (yang_read_description(trg, actual, s, "feature", NODE)) {
                                           YYABORT;
                                         }
                                         s = NULL;
                                       }
  |  feature_opt_stmt reference_stmt { if (yang_read_reference(trg, actual, s, "feature", NODE)) {
                                         YYABORT;
                                       }
                                       s = NULL;
                                     }

if_feature_arg: string { $$.token = actual_type;
                         $$.actual = actual;
                         switch (actual_type) {
                         case FEATURE_KEYWORD:
                           YANG_ADDELEM(((struct lys_feature *)actual)->iffeature,
                                        ((struct lys_feature *)actual)->iffeature_size, "if-features");
                           break;
                         case IDENTITY_KEYWORD:
                           if (trg->version < 2) {
                             LOGVAL(trg->ctx, LYE_INSTMT, LY_VLOG_NONE, NULL, "if-feature", "identity");
                             free(s);
                             YYABORT;
                           }
                           YANG_ADDELEM(((struct lys_ident *)actual)->iffeature,
                                        ((struct lys_ident *)actual)->iffeature_size, "if-features");
                           break;
                         case ENUM_KEYWORD:
                           if (trg->version < 2) {
                             LOGVAL(trg->ctx, LYE_INSTMT, LY_VLOG_NONE, NULL, "if-feature");
                             free(s);
                             YYABORT;
                           }
                           YANG_ADDELEM(((struct lys_type_enum *)actual)->iffeature,
                                        ((struct lys_type_enum *)actual)->iffeature_size, "if-features");
                           break;
                         case BIT_KEYWORD:
                           if (trg->version < 2) {
                             LOGVAL(trg->ctx, LYE_INSTMT, LY_VLOG_NONE, NULL, "if-feature", "bit");
                             free(s);
                             YYABORT;
                           }
                           YANG_ADDELEM(((struct lys_type_bit *)actual)->iffeature,
                                        ((struct lys_type_bit *)actual)->iffeature_size, "if-features");
                           break;
                         case REFINE_KEYWORD:
                           if (trg->version < 2) {
                             LOGVAL(trg->ctx, LYE_INSTMT, LY_VLOG_NONE, NULL, "if-feature");
                             free(s);
                             YYABORT;
                           }
                           YANG_ADDELEM(((struct lys_refine *)actual)->iffeature,
                                        ((struct lys_refine *)actual)->iffeature_size, "if-features");
                           break;
                         case EXTENSION_INSTANCE:
                           /* nothing change */
                           break;
                         default:
                           /* lys_node_* */
                           YANG_ADDELEM(((struct lys_node *)actual)->iffeature,
                                        ((struct lys_node *)actual)->iffeature_size, "if-features");
                           break;
                         }
                         ((struct lys_iffeature *)actual)->features = (struct lys_feature **)s;
                         s = NULL;
                         actual_type = IF_FEATURE_KEYWORD;
                       }

if_feature_stmt: IF_FEATURE_KEYWORD sep if_feature_arg if_feature_end
                 { actual = $3.actual;
                   actual_type = $3.token;
                 }

if_feature_end: ';'
  | '{' stmtsep '}'

identity_arg_str: identifier_arg_str { const char *tmp;

                                       tmp = lydict_insert_zc(trg->ctx, s);
                                       s = NULL;
                                       if (dup_identities_check(tmp, trg)) {
                                         lydict_remove(trg->ctx, tmp);
                                         YYABORT;
                                       }
                                       $$.token = actual_type;
                                       $$.actual = actual;
                                       YANG_ADDELEM(trg->ident, trg->ident_size, "identities");
                                       ((struct lys_ident *)actual)->name = tmp;
                                       ((struct lys_ident *)actual)->module = trg;
                                       actual_type = IDENTITY_KEYWORD;
                                     }

identity_stmt: IDENTITY_KEYWORD sep identity_arg_str identity_end
               { actual = $3.actual;
                 actual_type = $3.token;
               }

identity_end: ';'
  |  '{' stmtsep
         identity_opt_stmt
     '}' { void *tmp;

           if (((struct lys_ident *)actual)->base_size) {
             tmp = realloc(((struct lys_ident *)actual)->base,
                           ((struct lys_ident *)actual)->base_size * sizeof *((struct lys_ident *)actual)->base);
             if (!tmp) {
               LOGMEM(trg->ctx);
               YYABORT;
             }
             ((struct lys_ident *)actual)->base = tmp;
           }

           if (((struct lys_ident *)actual)->iffeature_size) {
             tmp = realloc(((struct lys_ident *)actual)->iffeature,
                           ((struct lys_ident *)actual)->iffeature_size * sizeof *((struct lys_ident *)actual)->iffeature);
             if (!tmp) {
               LOGMEM(trg->ctx);
               YYABORT;
             }
             ((struct lys_ident *)actual)->iffeature = tmp;
           }
         }

identity_opt_stmt: @EMPTYDIR@
  |  identity_opt_stmt base_stmt { void *identity;

                                   if ((trg->version < 2) && ((struct lys_ident *)actual)->base_size) {
                                     free(s);
                                     LOGVAL(trg->ctx, LYE_TOOMANY, LY_VLOG_NONE, NULL, "base", "identity");
                                     YYABORT;
                                   }
                                   identity = actual;
                                   YANG_ADDELEM(((struct lys_ident *)actual)->base,
                                                ((struct lys_ident *)actual)->base_size, "bases");
                                   *((struct lys_ident **)actual) = (struct lys_ident *)s;
                                   s = NULL;
                                   actual = identity;
                                 }
  |  identity_opt_stmt if_feature_stmt stmtsep
  |  identity_opt_stmt status_stmt { if (((struct lys_ident *)actual)->flags & LYS_STATUS_MASK) {
                                       LOGVAL(trg->ctx, LYE_TOOMANY, LY_VLOG_NONE, NULL, "status", "identity");
                                       YYABORT;
                                     }
                                     ((struct lys_ident *)actual)->flags |= $2;
                                   }
  |  identity_opt_stmt description_stmt { if (yang_read_description(trg, actual, s, "identity", NODE)) {
                                            YYABORT;
                                          }
                                          s = NULL;
                                        }
  |  identity_opt_stmt reference_stmt { if (yang_read_reference(trg, actual, s, "identity", NODE)) {
                                          YYABORT;
                                        }
                                        s = NULL;
                                      }

base_arg: identifier_ref_arg_str { backup_type = actual_type;
                                   actual_type = BASE_KEYWORD;
                                 }

base_stmt: BASE_KEYWORD sep base_arg stmtend

typedef_arg_str: identifier_arg_str { tpdf_parent = (actual_type == EXTENSION_INSTANCE) ? ext_instance : actual;
                                      $$.token = actual_type;
                                      $$.actual = actual;
                                      if (lyp_check_identifier(trg->ctx, s, LY_IDENT_TYPE, trg, tpdf_parent)) {
                                        free(s);
                                        YYABORT;
                                      }
                                      switch (actual_type) {
                                      case MODULE_KEYWORD:
                                      case SUBMODULE_KEYWORD:
                                        YANG_ADDELEM(trg->tpdf, trg->tpdf_size, "typedefs");
                                        break;
                                      case GROUPING_KEYWORD:
                                        YANG_ADDELEM(((struct lys_node_grp *)tpdf_parent)->tpdf,
                                                     ((struct lys_node_grp *)tpdf_parent)->tpdf_size, "typedefs");
                                        break;
                                      case CONTAINER_KEYWORD:
                                        YANG_ADDELEM(((struct lys_node_container *)tpdf_parent)->tpdf,
                                                     ((struct lys_node_container *)tpdf_parent)->tpdf_size, "typedefs");
                                        break;
                                      case LIST_KEYWORD:
                                        YANG_ADDELEM(((struct lys_node_list *)tpdf_parent)->tpdf,
                                                     ((struct lys_node_list *)tpdf_parent)->tpdf_size, "typedefs");
                                        break;
                                      case RPC_KEYWORD:
                                      case ACTION_KEYWORD:
                                        YANG_ADDELEM(((struct lys_node_rpc_action *)tpdf_parent)->tpdf,
                                                     ((struct lys_node_rpc_action *)tpdf_parent)->tpdf_size, "typedefs");
                                        break;
                                      case INPUT_KEYWORD:
                                      case OUTPUT_KEYWORD:
                                        YANG_ADDELEM(((struct lys_node_inout *)tpdf_parent)->tpdf,
                                                     ((struct lys_node_inout *)tpdf_parent)->tpdf_size, "typedefs");
                                        break;
                                      case NOTIFICATION_KEYWORD:
                                        YANG_ADDELEM(((struct lys_node_notif *)tpdf_parent)->tpdf,
                                                     ((struct lys_node_notif *)tpdf_parent)->tpdf_size, "typedefs");
                                        break;
                                      case EXTENSION_INSTANCE:
                                        /* typedef is already allocated */
                                        break;
                                      default:
                                        /* another type of nodetype is error*/
                                        LOGINT(trg->ctx);
                                        free(s);
                                        YYABORT;
                                      }
                                      ((struct lys_tpdf *)actual)->name = lydict_insert_zc(param->module->ctx, s);
                                      ((struct lys_tpdf *)actual)->module = trg;
                                      s = NULL;
                                      actual_type = TYPEDEF_KEYWORD;
                                    }

typedef_stmt: TYPEDEF_KEYWORD sep typedef_arg_str
              '{' stmtsep
                  type_opt_stmt
              '}' { if (!($6.node.flag & LYS_TYPE_DEF)) {
                      LOGVAL(trg->ctx, LYE_MISSCHILDSTMT, LY_VLOG_NONE, NULL, "type", "typedef");
                      YYABORT;
                    }
                    actual_type = $3.token;
                    actual = $3.actual;
                  }

type_opt_stmt: @EMPTYDIR@ { $$.node.ptr_tpdf = actual;
                            $$.node.flag = 0;
                          }
  |  type_opt_stmt type_stmt stmtsep { $1.node.flag |= LYS_TYPE_DEF;
                                       $$ = $1;
                                     }
  |  type_opt_stmt units_stmt { if (yang_read_units(trg, $1.node.ptr_tpdf, s, TYPEDEF_KEYWORD)) {
                                  YYABORT;
                                }
                                s = NULL;
                              }
  |  type_opt_stmt default_stmt { if (yang_read_default(trg, $1.node.ptr_tpdf, s, TYPEDEF_KEYWORD)) {
                                    YYABORT;
                                  }
                                  s = NULL;
                                }
  |  type_opt_stmt status_stmt { if ($1.node.ptr_tpdf->flags & LYS_STATUS_MASK) {
                                   LOGVAL(trg->ctx, LYE_TOOMANY, LY_VLOG_NONE, NULL, "status", "typedef");
                                   YYABORT;
                                 }
                                 $1.node.ptr_tpdf->flags |= $2;
                               }
  |  type_opt_stmt description_stmt { if (yang_read_description(trg, $1.node.ptr_tpdf, s, "typedef", NODE)) {
                                        YYABORT;
                                      }
                                      s = NULL;
                                    }
  |  type_opt_stmt reference_stmt { if (yang_read_reference(trg, $1.node.ptr_tpdf, s, "typedef", NODE)) {
                                      YYABORT;
                                    }
                                    s = NULL;
                                  }

type_stmt: TYPE_KEYWORD sep type_arg_str type_end
           { actual_type = $3.token;
             actual = $3.actual;
           }

type_arg_str: identifier_ref_arg_str { $$.token = actual_type;
                                       $$.actual = actual;
                                       if (!(actual = yang_read_type(trg->ctx, actual, s, actual_type))) {
                                         YYABORT;
                                       }
                                       s = NULL;
                                       actual_type = TYPE_KEYWORD;
                                     }

type_end: ';'
  |  '{' stmtsep
         type_body_stmts
      '}'

type_body_stmts: some_restrictions { if (((struct yang_type *)actual)->base == LY_TYPE_STRING &&
                                         ((struct yang_type *)actual)->type->info.str.pat_count) {
                                       void *tmp;

                                       tmp = realloc(((struct yang_type *)actual)->type->info.str.patterns,
                                                     ((struct yang_type *)actual)->type->info.str.pat_count * sizeof *((struct yang_type *)actual)->type->info.str.patterns);
                                       if (!tmp) {
                                         LOGMEM(trg->ctx);
                                         YYABORT;
                                       }
                                       ((struct yang_type *)actual)->type->info.str.patterns = tmp;

#ifdef LY_ENABLED_CACHE
                                       if (!(trg->ctx->models.flags & LY_CTX_TRUSTED) && ((struct yang_type *)actual)->type->info.str.patterns_pcre) {
                                         tmp = realloc(((struct yang_type *)actual)->type->info.str.patterns_pcre,
                                                       2 * ((struct yang_type *)actual)->type->info.str.pat_count * sizeof *((struct yang_type *)actual)->type->info.str.patterns_pcre);
                                         if (!tmp) {
                                           LOGMEM(trg->ctx);
                                           YYABORT;
                                         }
                                         ((struct yang_type *)actual)->type->info.str.patterns_pcre = tmp;
                                       }
#endif
                                     }
                                     if (((struct yang_type *)actual)->base == LY_TYPE_UNION) {
                                       struct lys_type *tmp;

                                       tmp = realloc(((struct yang_type *)actual)->type->info.uni.types,
                                                     ((struct yang_type *)actual)->type->info.uni.count * sizeof *tmp);
                                       if (!tmp) {
                                         LOGMEM(trg->ctx);
                                         YYABORT;
                                       }
                                       ((struct yang_type *)actual)->type->info.uni.types = tmp;
                                     }
                                     if (((struct yang_type *)actual)->base == LY_TYPE_IDENT) {
                                       struct lys_ident **tmp;

                                       tmp = realloc(((struct yang_type *)actual)->type->info.ident.ref,
                                                     ((struct yang_type *)actual)->type->info.ident.count* sizeof *tmp);
                                       if (!tmp) {
                                         LOGMEM(trg->ctx);
                                         YYABORT;
                                       }
                                       ((struct yang_type *)actual)->type->info.ident.ref = tmp;
                                     }
                                   }
  | enum_specification
  | bits_specification

some_restrictions: @EMPTYDIR@
  |  some_restrictions require_instance_stmt { if (yang_read_require_instance(trg->ctx, actual, $2)) {
                                                 YYABORT;
                                               }
                                             }
  |  some_restrictions path_stmt { /* leafref_specification */
                                   if (yang_read_leafref_path(trg, actual, s)) {
                                     YYABORT;
                                   }
                                   s = NULL;
                                 }
  |  some_restrictions base_stmt { /* identityref_specification */
                                   if (((struct yang_type *)actual)->base && ((struct yang_type *)actual)->base != LY_TYPE_IDENT) {
                                     LOGVAL(trg->ctx, LYE_INSTMT, LY_VLOG_NONE, NULL, "base");
                                     return EXIT_FAILURE;
                                   }
                                   ((struct yang_type *)actual)->base = LY_TYPE_IDENT;
                                   yang_type = actual;
                                   YANG_ADDELEM(((struct yang_type *)actual)->type->info.ident.ref,
                                                ((struct yang_type *)actual)->type->info.ident.count, "identity refs");
                                   *((struct lys_ident **)actual) = (struct lys_ident *)s;
                                   actual = yang_type;
                                   s = NULL;
                                 }
  |  some_restrictions length_stmt stmtsep
  |  some_restrictions pattern_stmt stmtsep
  |  some_restrictions fraction_digits_stmt { if (yang_read_fraction(trg->ctx, actual, $2)) {
                                                YYABORT;
                                              }
                                            }
  |  some_restrictions range_stmt stmtsep
  |  some_restrictions union_stmt stmtsep

union_stmt: union_spec type_stmt { actual_type = $1.token;
                                   actual = $1.actual;
                                 }

union_spec: @EMPTYDIR@ { struct yang_type *stype = (struct yang_type *)actual;

                         $$.token = actual_type;
                         $$.actual = actual;
                         if (stype->base != 0 && stype->base != LY_TYPE_UNION) {
                           LOGVAL(trg->ctx, LYE_SPEC, LY_VLOG_NONE, NULL, "Unexpected type statement.");
                           YYABORT;
                         }
                         stype->base = LY_TYPE_UNION;
                         if (strcmp(stype->name, "union")) {
                           /* type can be a substatement only in "union" type, not in derived types */
                           LOGVAL(trg->ctx, LYE_INCHILDSTMT, LY_VLOG_NONE, NULL, "type", "derived type");
                           YYABORT;
                         }
                         YANG_ADDELEM(stype->type->info.uni.types, stype->type->info.uni.count, "union types")
                         actual_type = UNION_KEYWORD;
                       }

fraction_digits_arg: fraction_digits_arg_str { $$ = $1;
                                               backup_type = actual_type;
                                               actual_type = FRACTION_DIGITS_KEYWORD;
                                             }

fraction_digits_stmt: FRACTION_DIGITS_KEYWORD sep fraction_digits_arg stmtend { $$ = $3; }

fraction_digits_arg_str: positive_integer_value optsep { $$ = $1; }
  | string_1 { char *endptr = NULL;
               unsigned long val;
               errno = 0;

               val = strtoul(s, &endptr, 10);
               if (*endptr || s[0] == '-' || errno || val == 0 || val > UINT32_MAX) {
                 LOGVAL(trg->ctx, LYE_INARG, LY_VLOG_NONE, NULL, s, "fraction-digits");
                 free(s);
                 s = NULL;
                 YYABORT;
               }
               $$ = (uint32_t) val;
               free(s);
               s =NULL;
             }

length_stmt: LENGTH_KEYWORD sep length_arg_str length_end
             { actual = $3.actual;
               actual_type = $3.token;
             }

length_arg_str: string { $$.token = actual_type;
                         $$.actual = actual;
                         if (!(actual = yang_read_length(trg->ctx, actual, s, is_ext_instance))) {
                           YYABORT;
                         }
                         actual_type = LENGTH_KEYWORD;
                         s = NULL;
                       }

length_end: ';'
  |  '{' stmtsep
         message_opt_stmt
      '}'

message_opt_stmt: @EMPTYDIR@ { switch (actual_type) {
                               case MUST_KEYWORD:
                                 $$ = "must";
                                 break;
                               case LENGTH_KEYWORD:
                                 $$ = "length";
                                 break;
                               case RANGE_KEYWORD:
                                 $$ = "range";
                                 break;
                               default:
                                 LOGINT(trg->ctx);
                                 YYABORT;
                                 break;
                               }
                             }
  |  message_opt_stmt error_message_stmt { if (yang_read_message(trg, actual, s, $1, ERROR_MESSAGE_KEYWORD)) {
                                             YYABORT;
                                           }
                                           s = NULL;
                                         }
  |  message_opt_stmt error_app_tag_stmt { if (yang_read_message(trg, actual, s, $1, ERROR_APP_TAG_KEYWORD)) {
                                             YYABORT;
                                           }
                                           s = NULL;
                                         }
  |  message_opt_stmt description_stmt { if (yang_read_description(trg, actual, s, $1, NODE)) {
                                           YYABORT;
                                          }
                                          s = NULL;
                                        }
  |  message_opt_stmt reference_stmt { if (yang_read_reference(trg, actual, s, $1, NODE)) {
                                         YYABORT;
                                       }
                                       s = NULL;
                                     }

pattern_sep: sep { $$.token = actual_type;
                   $$.actual = actual;
                 }

pattern_stmt: PATTERN_KEYWORD pattern_sep pattern_arg_str pattern_end  {struct lys_restr *pattern = actual;
                                                                        actual = NULL;
#ifdef LY_ENABLED_CACHE
                                                                        if ($2.token != EXTENSION_INSTANCE &&
                                                                            !(data_node && data_node->nodetype != LYS_GROUPING && lys_ingrouping(data_node))) {
                                                                          unsigned int c = 2 * (((struct yang_type *)$2.actual)->type->info.str.pat_count - 1);
                                                                          YANG_ADDELEM(((struct yang_type *)$2.actual)->type->info.str.patterns_pcre, c, "patterns");
                                                                          ++c;
                                                                          YANG_ADDELEM(((struct yang_type *)$2.actual)->type->info.str.patterns_pcre, c, "patterns");
                                                                          actual = &(((struct yang_type *)$2.actual)->type->info.str.patterns_pcre)[2 * (((struct yang_type *)$2.actual)->type->info.str.pat_count - 1)];
                                                                        }
#endif
                                                                        if (yang_read_pattern(trg->ctx, pattern, actual, $3, $4)) {
                                                                          YYABORT;
                                                                        }
                                                                        actual_type = $2.token;
                                                                        actual = $2.actual;
                                                                      }

pattern_arg_str: string { if (actual_type != EXTENSION_INSTANCE) {
                            if (((struct yang_type *)actual)->base != 0 && ((struct yang_type *)actual)->base != LY_TYPE_STRING) {
                              free(s);
                              LOGVAL(trg->ctx, LYE_SPEC, LY_VLOG_NONE, NULL, "Unexpected pattern statement.");
                              YYABORT;
                            }
                            ((struct yang_type *)actual)->base = LY_TYPE_STRING;
                            YANG_ADDELEM(((struct yang_type *)actual)->type->info.str.patterns,
                                         ((struct yang_type *)actual)->type->info.str.pat_count, "patterns");
                          }
                          $$ = s;
                          s = NULL;
                          actual_type = PATTERN_KEYWORD;
                        }

pattern_end: ';' { $$ = 0x06; }
  |  '{' stmtsep
         pattern_opt_stmt
     '}' { $$ = $3; }

pattern_opt_stmt: @EMPTYDIR@ { $$ = 0x06; /* ACK */ }
  |  pattern_opt_stmt modifier_stmt { if (trg->version < 2) {
                                        LOGVAL(trg->ctx, LYE_INSTMT, LY_VLOG_NONE, NULL, "modifier");
                                        YYABORT;
                                      }
                                      if ($1 != 0x06) {
                                        LOGVAL(trg->ctx, LYE_TOOMANY, LY_VLOG_NONE, NULL, "modifier", "pattern");
                                        YYABORT;
                                      }
                                      $$ = $2;
                                    }
  |  pattern_opt_stmt error_message_stmt { if (yang_read_message(trg, actual, s, "pattern", ERROR_MESSAGE_KEYWORD)) {
                                             YYABORT;
                                           }
                                           s = NULL;
                                         }
  |  pattern_opt_stmt error_app_tag_stmt { if (yang_read_message(trg, actual, s, "pattern", ERROR_APP_TAG_KEYWORD)) {
                                             YYABORT;
                                           }
                                           s = NULL;
                                         }
  |  pattern_opt_stmt description_stmt { if (yang_read_description(trg, actual, s, "pattern", NODE)) {
                                           YYABORT;
                                          }
                                          s = NULL;
                                        }
  |  pattern_opt_stmt reference_stmt { if (yang_read_reference(trg, actual, s, "pattern", NODE)) {
                                         YYABORT;
                                       }
                                       s = NULL;
                                     }

modifier_arg: string { backup_type = actual_type;
                       actual_type = MODIFIER_KEYWORD;
                     }

modifier_stmt: MODIFIER_KEYWORD sep modifier_arg stmtend { if (!strcmp(s, "invert-match")) {
                                                             $$ = 0x15;
                                                             free(s);
                                                             s = NULL;
                                                           } else {
                                                             LOGVAL(trg->ctx, LYE_INSTMT, LY_VLOG_NONE, NULL, s);
                                                             free(s);
                                                             YYABORT;
                                                           }
                                                         }

enum_specification: enum_stmt stmtsep enum_stmts { struct lys_type_enum * tmp;

                                                   cnt_val = 0;
                                                   tmp = realloc(((struct yang_type *)actual)->type->info.enums.enm,
                                                                 ((struct yang_type *)actual)->type->info.enums.count * sizeof *tmp);
                                                   if (!tmp) {
                                                     LOGMEM(trg->ctx);
                                                     YYABORT;
                                                   }
                                                   ((struct yang_type *)actual)->type->info.enums.enm = tmp;
                                                 }

enum_stmts: @EMPTYDIR@
  | enum_stmts enum_stmt stmtsep;


enum_stmt: ENUM_KEYWORD sep enum_arg_str enum_end
           { if (yang_check_enum(trg->ctx, yang_type, actual, &cnt_val, is_value)) {
               YYABORT;
             }
             actual = $3.actual;
             actual_type = $3.token;
           }

enum_arg_str: string { $$.token = actual_type;
                       $$.actual = yang_type = actual;
                       YANG_ADDELEM(((struct yang_type *)actual)->type->info.enums.enm, ((struct yang_type *)actual)->type->info.enums.count, "enums");
                       if (yang_read_enum(trg->ctx, yang_type, actual, s)) {
                         YYABORT;
                       }
                       s = NULL;
                       is_value = 0;
                       actual_type = ENUM_KEYWORD;
                     }

enum_end: ';'
  |  '{' stmtsep
         enum_opt_stmt
     '}' { if (((struct lys_type_enum *)actual)->iffeature_size) {
             struct lys_iffeature *tmp;

             tmp = realloc(((struct lys_type_enum *)actual)->iffeature,
                           ((struct lys_type_enum *)actual)->iffeature_size * sizeof *tmp);
             if (!tmp) {
               LOGMEM(trg->ctx);
               YYABORT;
             }
             ((struct lys_type_enum *)actual)->iffeature = tmp;
           }
         }

enum_opt_stmt: @EMPTYDIR@
  |  enum_opt_stmt if_feature_stmt stmtsep
  |  enum_opt_stmt value_stmt { if (is_value) {
                                  LOGVAL(trg->ctx, LYE_TOOMANY, LY_VLOG_NONE, NULL, "value", "enum");
                                  YYABORT;
                                }
                                ((struct lys_type_enum *)actual)->value = $2;

                                /* keep the highest enum value for automatic increment */
                                if ($2 >= cnt_val) {
                                  cnt_val = $2 + 1;
                                }
                                is_value = 1;
                              }
  |  enum_opt_stmt status_stmt { if (((struct lys_type_enum *)actual)->flags & LYS_STATUS_MASK) {
                                   LOGVAL(trg->ctx, LYE_TOOMANY, LY_VLOG_NONE, NULL, "status", "enum");
                                   YYABORT;
                                 }
                                 ((struct lys_type_enum *)actual)->flags |= $2;
                               }
  |  enum_opt_stmt description_stmt { if (yang_read_description(trg, actual, s, "enum", NODE)) {
                                        YYABORT;
                                      }
                                      s = NULL;
                                    }
  |  enum_opt_stmt reference_stmt { if (yang_read_reference(trg, actual, s, "enum", NODE)) {
                                      YYABORT;
                                    }
                                    s = NULL;
                                  }

value_arg: integer_value_arg_str { $$ = $1;
                                   backup_type = actual_type;
                                   actual_type = VALUE_KEYWORD;
                                 }

value_stmt: VALUE_KEYWORD sep value_arg stmtend { $$ = $3; }

integer_value_arg_str: integer_value optsep { $$ = $1; }
  |  string_1 { /* convert it to int32_t */
                int64_t val;
                char *endptr;

                val = strtoll(s, &endptr, 10);
                if (val < INT32_MIN || val > INT32_MAX || *endptr) {
                    LOGVAL(trg->ctx, LYE_INARG, LY_VLOG_NONE, NULL, s, "value");
                    free(s);
                    YYABORT;
                }
                free(s);
                s = NULL;
                $$ = (int32_t) val;
             }

range_stmt: RANGE_KEYWORD sep range_arg_str range_end { actual_type = $3.token;
                                                        actual = $3.actual;
                                                      }


range_end: ';'
  |  '{' stmtsep
         message_opt_stmt
      '}'
   ;

path_arg: path_arg_str { backup_type = actual_type;
                         actual_type = PATH_KEYWORD;
                       }

path_stmt: PATH_KEYWORD sep path_arg stmtend

require_instance_arg: require_instance_arg_str { $$ = $1;
                                                 backup_type = actual_type;
                                                 actual_type = REQUIRE_INSTANCE_KEYWORD;
                                               }

require_instance_stmt: REQUIRE_INSTANCE_KEYWORD sep require_instance_arg stmtend { $$ = $3; }

require_instance_arg_str: TRUE_KEYWORD optsep { $$ = 1; }
  |  FALSE_KEYWORD optsep { $$ = -1; }
  |  string_1 { if (!strcmp(s,"true")) {
                  $$ = 1;
                } else if (!strcmp(s,"false")) {
                  $$ = -1;
                } else {
                  LOGVAL(trg->ctx, LYE_INARG, LY_VLOG_NONE, NULL, s, "require-instance");
                  free(s);
                  YYABORT;
                }
                free(s);
                s = NULL;
              }

bits_specification: bit_stmt bit_stmts { struct lys_type_bit * tmp;

                                         cnt_val = 0;
                                         tmp = realloc(((struct yang_type *)actual)->type->info.bits.bit,
                                                       ((struct yang_type *)actual)->type->info.bits.count * sizeof *tmp);
                                         if (!tmp) {
                                           LOGMEM(trg->ctx);
                                           YYABORT;
                                         }
                                         ((struct yang_type *)actual)->type->info.bits.bit = tmp;
                                       }

bit_stmts: @EMPTYDIR@
  | bit_stmts bit_stmt;

bit_stmt: BIT_KEYWORD sep bit_arg_str bit_end
          stmtsep { if (yang_check_bit(trg->ctx, yang_type, actual, &cnt_val, is_value)) {
                      YYABORT;
                    }
                    actual = $3.actual;
                    actual_type = $3.token;
                  }

bit_arg_str: identifier_arg_str { $$.token = actual_type;
                                  $$.actual = yang_type = actual;
                                  YANG_ADDELEM(((struct yang_type *)actual)->type->info.bits.bit,
                                               ((struct yang_type *)actual)->type->info.bits.count, "bits");
                                  if (yang_read_bit(trg->ctx, yang_type, actual, s)) {
                                    YYABORT;
                                  }
                                  s = NULL;
                                  is_value = 0;
                                  actual_type = BIT_KEYWORD;
                                }

bit_end: ';'
  |  '{' stmtsep
         bit_opt_stmt
     '}' { if (((struct lys_type_bit *)actual)->iffeature_size) {
             struct lys_iffeature *tmp;

             tmp = realloc(((struct lys_type_bit *)actual)->iffeature,
                           ((struct lys_type_bit *)actual)->iffeature_size * sizeof *tmp);
             if (!tmp) {
               LOGMEM(trg->ctx);
               YYABORT;
             }
             ((struct lys_type_bit *)actual)->iffeature = tmp;
           }
         }

bit_opt_stmt: @EMPTYDIR@
  |  bit_opt_stmt if_feature_stmt stmtsep
  |  bit_opt_stmt position_stmt { if (is_value) {
                                    LOGVAL(trg->ctx, LYE_TOOMANY, LY_VLOG_NONE, NULL, "position", "bit");
                                    YYABORT;
                                  }
                                  ((struct lys_type_bit *)actual)->pos = $2;

                                  /* keep the highest position value for automatic increment */
                                  if ($2 >= cnt_val) {
                                    cnt_val = $2 + 1;
                                  }
                                  is_value = 1;
                                }
  |  bit_opt_stmt status_stmt { if (((struct lys_type_bit *)actual)->flags & LYS_STATUS_MASK) {
                                   LOGVAL(trg->ctx, LYE_TOOMANY, LY_VLOG_NONE, NULL, "status", "bit");
                                   YYABORT;
                                 }
                                 ((struct lys_type_bit *)actual)->flags |= $2;
                              }
  |  bit_opt_stmt description_stmt { if (yang_read_description(trg, actual, s, "bit", NODE)) {
                                       YYABORT;
                                     }
                                     s = NULL;
                                   }
  |  bit_opt_stmt reference_stmt { if (yang_read_reference(trg, actual, s, "bit", NODE)) {
                                     YYABORT;
                                   }
                                   s = NULL;
                                 }

position_value_arg: position_value_arg_str { $$ = $1;
                                             backup_type = actual_type;
                                             actual_type = POSITION_KEYWORD;
                                           }

position_stmt: POSITION_KEYWORD sep position_value_arg stmtend { $$ = $3; }

position_value_arg_str: non_negative_integer_value optsep { $$ = $1; }
  |  string_1 { /* convert it to uint32_t */
                unsigned long val;
                char *endptr = NULL;
                errno = 0;

                val = strtoul(s, &endptr, 10);
                if (s[0] == '-' || *endptr || errno || val > UINT32_MAX) {
                  LOGVAL(trg->ctx, LYE_INARG, LY_VLOG_NONE, NULL, s, "position");
                  free(s);
                  YYABORT;
                }
                free(s);
                s = NULL;
                $$ = (uint32_t) val;
              }

error_message_arg: string { backup_type = actual_type;
                            actual_type = ERROR_MESSAGE_KEYWORD;
                          }

error_message_stmt: ERROR_MESSAGE_KEYWORD sep error_message_arg stmtend

error_app_tag_arg: string { backup_type = actual_type;
                            actual_type = ERROR_APP_TAG_KEYWORD;
                          }

error_app_tag_stmt: ERROR_APP_TAG_KEYWORD sep error_app_tag_arg stmtend

units_arg: string { backup_type = actual_type;
                    actual_type = UNITS_KEYWORD;
                  }

units_stmt: UNITS_KEYWORD sep units_arg stmtend

default_arg: string { backup_type = actual_type;
                      actual_type = DEFAULT_KEYWORD;
                    }

default_stmt: DEFAULT_KEYWORD sep default_arg stmtend

grouping_arg_str: identifier_arg_str { $$.token = actual_type;
                                       $$.actual = actual;
                                       if (!(actual = yang_read_node(trg, actual, param->node, s, LYS_GROUPING, sizeof(struct lys_node_grp)))) {
                                         YYABORT;
                                       }
                                       s = NULL;
                                       data_node = actual;
                                       actual_type = GROUPING_KEYWORD;
                                     }

grouping_stmt: GROUPING_KEYWORD sep grouping_arg_str grouping_end
               { LOGDBG(LY_LDGYANG, "finished parsing grouping statement \"%s\"", data_node->name);
                 actual_type = $3.token;
                 actual = $3.actual;
                 data_node = $3.actual;
               }

grouping_end: ';'
  |  '{' stmtsep
         grouping_opt_stmt
     '}'

grouping_opt_stmt: @EMPTYDIR@ { $$.grouping = actual; }
  |  grouping_opt_stmt status_stmt { if ($1.grouping->flags & LYS_STATUS_MASK) {
                                       LOGVAL(trg->ctx, LYE_TOOMANY, LY_VLOG_LYS, $1.grouping, "status", "grouping");
                                       YYABORT;
                                     }
                                     $1.grouping->flags |= $2;
                                   }
  |  grouping_opt_stmt description_stmt { if (yang_read_description(trg, $1.grouping, s, "grouping", NODE_PRINT)) {
                                            YYABORT;
                                          }
                                          s = NULL;
                                        }
  |  grouping_opt_stmt reference_stmt { if (yang_read_reference(trg, $1.grouping, s, "grouping", NODE_PRINT)) {
                                          YYABORT;
                                        }
                                        s = NULL;
                                      }
  |  grouping_opt_stmt grouping_stmt stmtsep
  |  grouping_opt_stmt typedef_stmt stmtsep
  |  grouping_opt_stmt data_def_stmt stmtsep
  |  grouping_opt_stmt action_stmt stmtsep
  |  grouping_opt_stmt notification_stmt stmtsep { if (trg->version < 2) {
                                                     LOGVAL(trg->ctx, LYE_INSTMT, LY_VLOG_LYS, $1.grouping, "notification");
                                                     YYABORT;
                                                   }
                                                 }

data_def_stmt: container_stmt
  |  leaf_stmt
  |  leaf_list_stmt
  |  list_stmt
  |  choice_stmt
  |  anyxml_stmt
  |  anydata_stmt
  |  uses_stmt
  ;

container_arg_str: identifier_arg_str { $$.token = actual_type;
                                        $$.actual = actual;
                                        if (!(actual = yang_read_node(trg, actual, param->node, s, LYS_CONTAINER, sizeof(struct lys_node_container)))) {
                                          YYABORT;
                                        }
                                        data_node = actual;
                                        s = NULL;
                                        actual_type = CONTAINER_KEYWORD;
                                      }

container_stmt: CONTAINER_KEYWORD sep container_arg_str container_end
                { LOGDBG(LY_LDGYANG, "finished parsing container statement \"%s\"", data_node->name);
                  actual_type = $3.token;
                  actual = $3.actual;
                  data_node = $3.actual;
                }

container_end: ';'
  |  '{' stmtsep
         container_opt_stmt
      '}' { void *tmp;

            if ($3.container->iffeature_size) {
              tmp = realloc($3.container->iffeature, $3.container->iffeature_size * sizeof *$3.container->iffeature);
              if (!tmp) {
                LOGMEM(trg->ctx);
                YYABORT;
              }
              $3.container->iffeature = tmp;
            }

            if ($3.container->must_size) {
              tmp = realloc($3.container->must, $3.container->must_size * sizeof *$3.container->must);
              if (!tmp) {
                LOGMEM(trg->ctx);
                YYABORT;
              }
              $3.container->must = tmp;
            }
          }

container_opt_stmt: @EMPTYDIR@ { $$.container = actual; }
  |  container_opt_stmt when_stmt stmtsep
  |  container_opt_stmt if_feature_stmt stmtsep
  |  container_opt_stmt must_stmt stmtsep
  |  container_opt_stmt presence_stmt { if (yang_read_presence(trg, $1.container, s)) {
                                          YYABORT;
                                        }
                                        s = NULL;
                                      }
  |  container_opt_stmt config_stmt { if ($1.container->flags & LYS_CONFIG_MASK) {
                                        LOGVAL(trg->ctx, LYE_TOOMANY, LY_VLOG_LYS, $1.container, "config", "container");
                                        YYABORT;
                                      }
                                      $1.container->flags |= $2;
                                    }
  |  container_opt_stmt status_stmt { if ($1.container->flags & LYS_STATUS_MASK) {
                                        LOGVAL(trg->ctx, LYE_TOOMANY, LY_VLOG_LYS, $1.container, "status", "container");
                                        YYABORT;
                                      }
                                      $1.container->flags |= $2;
                                    }
  |  container_opt_stmt description_stmt { if (yang_read_description(trg, $1.container, s, "container", NODE_PRINT)) {
                                             YYABORT;
                                           }
                                           s = NULL;
                                         }
  |  container_opt_stmt reference_stmt { if (yang_read_reference(trg, $1.container, s, "container", NODE_PRINT)) {
                                           YYABORT;
                                         }
                                         s = NULL;
                                       }
  |  container_opt_stmt grouping_stmt stmtsep
  |  container_opt_stmt action_stmt stmtsep
  |  container_opt_stmt notification_stmt stmtsep { if (trg->version < 2) {
                                                      LOGVAL(trg->ctx, LYE_INSTMT, LY_VLOG_LYS, $1.container, "notification");
                                                      YYABORT;
                                                    }
                                                  }
  |  container_opt_stmt typedef_stmt stmtsep
  |  container_opt_stmt data_def_stmt stmtsep

leaf_stmt: LEAF_KEYWORD sep leaf_arg_str
           '{' stmtsep
               leaf_opt_stmt
            '}' { void *tmp;

                  if (!($6.node.flag & LYS_TYPE_DEF)) {
                    LOGVAL(trg->ctx, LYE_MISSCHILDSTMT, LY_VLOG_LYS, $6.node.ptr_leaf, "type", "leaf");
                    YYABORT;
                  }
                  if ($6.node.ptr_leaf->dflt && ($6.node.ptr_leaf->flags & LYS_MAND_TRUE)) {
                    /* RFC 6020, 7.6.4 - default statement must not with mandatory true */
                    LOGVAL(trg->ctx, LYE_INCHILDSTMT, LY_VLOG_LYS, $6.node.ptr_leaf, "mandatory", "leaf");
                    LOGVAL(trg->ctx, LYE_SPEC, LY_VLOG_LYS, $6.node.ptr_leaf, "The \"mandatory\" statement is forbidden on leaf with \"default\".");
                    YYABORT;
                  }

                  if ($6.node.ptr_leaf->iffeature_size) {
                    tmp = realloc($6.node.ptr_leaf->iffeature, $6.node.ptr_leaf->iffeature_size * sizeof *$6.node.ptr_leaf->iffeature);
                    if (!tmp) {
                      LOGMEM(trg->ctx);
                      YYABORT;
                    }
                    $6.node.ptr_leaf->iffeature = tmp;
                  }

                  if ($6.node.ptr_leaf->must_size) {
                    tmp = realloc($6.node.ptr_leaf->must, $6.node.ptr_leaf->must_size * sizeof *$6.node.ptr_leaf->must);
                    if (!tmp) {
                      LOGMEM(trg->ctx);
                      YYABORT;
                    }
                    $6.node.ptr_leaf->must = tmp;
                  }

                  LOGDBG(LY_LDGYANG, "finished parsing leaf statement \"%s\"", data_node->name);
                  actual_type = $3.token;
                  actual = $3.actual;
                  data_node = $3.actual;
                }

leaf_arg_str: identifier_arg_str { $$.token = actual_type;
                                   $$.actual = actual;
                                   if (!(actual = yang_read_node(trg, actual, param->node, s, LYS_LEAF, sizeof(struct lys_node_leaf)))) {
                                     YYABORT;
                                   }
                                   data_node = actual;
                                   s = NULL;
                                   actual_type = LEAF_KEYWORD;
                                 }

leaf_opt_stmt: @EMPTYDIR@ { $$.node.ptr_leaf = actual;
                            $$.node.flag = 0;
                          }
  |  leaf_opt_stmt when_stmt stmtsep
  |  leaf_opt_stmt if_feature_stmt stmtsep
  |  leaf_opt_stmt type_stmt stmtsep { $1.node.flag |= LYS_TYPE_DEF;
                                       $$ = $1;
                                     }
  |  leaf_opt_stmt units_stmt { if (yang_read_units(trg, $1.node.ptr_leaf, s, LEAF_KEYWORD)) {
                                  YYABORT;
                                }
                                s = NULL;
                              }
  |  leaf_opt_stmt must_stmt stmtsep
  |  leaf_opt_stmt default_stmt { if (yang_read_default(trg, $1.node.ptr_leaf, s, LEAF_KEYWORD)) {
                                    YYABORT;
                                  }
                                  s = NULL;
                                }
  |  leaf_opt_stmt config_stmt { if ($1.node.ptr_leaf->flags & LYS_CONFIG_MASK) {
                                   LOGVAL(trg->ctx, LYE_TOOMANY, LY_VLOG_LYS, $1.node.ptr_leaf, "config", "leaf");
                                   YYABORT;
                                 }
                                 $1.node.ptr_leaf->flags |= $2;
                               }
  |  leaf_opt_stmt mandatory_stmt { if ($1.node.ptr_leaf->flags & LYS_MAND_MASK) {
                                      LOGVAL(trg->ctx, LYE_TOOMANY, LY_VLOG_LYS, $1.node.ptr_leaf, "mandatory", "leaf");
                                      YYABORT;
                                    }
                                    $1.node.ptr_leaf->flags |= $2;
                                  }
  |  leaf_opt_stmt status_stmt { if ($1.node.ptr_leaf->flags & LYS_STATUS_MASK) {
                                   LOGVAL(trg->ctx, LYE_TOOMANY, LY_VLOG_LYS, $1.node.ptr_leaf, "status", "leaf");
                                   YYABORT;
                                 }
                                 $1.node.ptr_leaf->flags |= $2;
                               }
  |  leaf_opt_stmt description_stmt { if (yang_read_description(trg, $1.node.ptr_leaf, s, "leaf", NODE_PRINT)) {
                                        YYABORT;
                                      }
                                      s = NULL;
                                    }
  |  leaf_opt_stmt reference_stmt { if (yang_read_reference(trg, $1.node.ptr_leaf, s, "leaf", NODE_PRINT)) {
                                      YYABORT;
                                    }
                                    s = NULL;
                                  }

leaf_list_arg_str: identifier_arg_str { $$.token = actual_type;
                                        $$.actual = actual;
                                        if (!(actual = yang_read_node(trg, actual, param->node, s, LYS_LEAFLIST, sizeof(struct lys_node_leaflist)))) {
                                          YYABORT;
                                        }
                                        data_node = actual;
                                        s = NULL;
                                        actual_type = LEAF_LIST_KEYWORD;
                                      }

  leaf_list_stmt: LEAF_LIST_KEYWORD sep leaf_list_arg_str
                  '{' stmtsep
                      leaf_list_opt_stmt
                  '}' { void *tmp;

                        if ($6.node.ptr_leaflist->flags & LYS_CONFIG_R) {
                          /* RFC 6020, 7.7.5 - ignore ordering when the list represents state data
                           * ignore oredering MASK - 0x7F
                           */
                          $6.node.ptr_leaflist->flags &= 0x7F;
                        }
                        if (!($6.node.flag & LYS_TYPE_DEF)) {
                          LOGVAL(trg->ctx, LYE_MISSCHILDSTMT, LY_VLOG_LYS, $6.node.ptr_leaflist, "type", "leaf-list");
                          YYABORT;
                        }
                        if ($6.node.ptr_leaflist->dflt_size && $6.node.ptr_leaflist->min) {
                          LOGVAL(trg->ctx, LYE_INCHILDSTMT, LY_VLOG_LYS, $6.node.ptr_leaflist, "min-elements", "leaf-list");
                          LOGVAL(trg->ctx, LYE_SPEC, LY_VLOG_LYS, $6.node.ptr_leaflist,
                                 "The \"min-elements\" statement with non-zero value is forbidden on leaf-lists with the \"default\" statement.");
                          YYABORT;
                        }

                        if ($6.node.ptr_leaflist->iffeature_size) {
                          tmp = realloc($6.node.ptr_leaflist->iffeature, $6.node.ptr_leaflist->iffeature_size * sizeof *$6.node.ptr_leaflist->iffeature);
                          if (!tmp) {
                            LOGMEM(trg->ctx);
                            YYABORT;
                          }
                          $6.node.ptr_leaflist->iffeature = tmp;
                        }

                        if ($6.node.ptr_leaflist->must_size) {
                          tmp = realloc($6.node.ptr_leaflist->must, $6.node.ptr_leaflist->must_size * sizeof *$6.node.ptr_leaflist->must);
                          if (!tmp) {
                            LOGMEM(trg->ctx);
                            YYABORT;
                          }
                          $6.node.ptr_leaflist->must = tmp;
                        }

                        if ($6.node.ptr_leaflist->dflt_size) {
                          tmp = realloc($6.node.ptr_leaflist->dflt, $6.node.ptr_leaflist->dflt_size * sizeof *$6.node.ptr_leaflist->dflt);
                          if (!tmp) {
                            LOGMEM(trg->ctx);
                            YYABORT;
                          }
                          $6.node.ptr_leaflist->dflt = tmp;
                        }

                        LOGDBG(LY_LDGYANG, "finished parsing leaf-list statement \"%s\"", data_node->name);
                        actual_type = $3.token;
                        actual = $3.actual;
                        data_node = $3.actual;
                      }

leaf_list_opt_stmt: @EMPTYDIR@ { $$.node.ptr_leaflist = actual;
                                 $$.node.flag = 0;
                               }
  |  leaf_list_opt_stmt when_stmt stmtsep
  |  leaf_list_opt_stmt if_feature_stmt stmtsep
  |  leaf_list_opt_stmt type_stmt stmtsep { $1.node.flag |= LYS_TYPE_DEF;
                                            $$ = $1;
                                          }
  |  leaf_list_opt_stmt default_stmt { if (trg->version < 2) {
                                         free(s);
                                         LOGVAL(trg->ctx, LYE_INSTMT, LY_VLOG_LYS, $1.node.ptr_leaflist, "default");
                                         YYABORT;
                                       }
                                       YANG_ADDELEM($1.node.ptr_leaflist->dflt,
                                                    $1.node.ptr_leaflist->dflt_size, "defaults");
                                       (*(const char **)actual) = lydict_insert_zc(param->module->ctx, s);
                                       s = NULL;
                                       actual = $1.node.ptr_leaflist;
                                     }
  |  leaf_list_opt_stmt units_stmt { if (yang_read_units(trg, $1.node.ptr_leaflist, s, LEAF_LIST_KEYWORD)) {
                                       YYABORT;
                                     }
                                     s = NULL;
                                   }
  |  leaf_list_opt_stmt must_stmt stmtsep
  |  leaf_list_opt_stmt config_stmt { if ($1.node.ptr_leaflist->flags & LYS_CONFIG_MASK) {
                                        LOGVAL(trg->ctx, LYE_TOOMANY, LY_VLOG_LYS, $1.node.ptr_leaflist, "config", "leaf-list");
                                        YYABORT;
                                      }
                                      $1.node.ptr_leaflist->flags |= $2;
                                    }
  |  leaf_list_opt_stmt min_elements_stmt { if ($1.node.flag & LYS_MIN_ELEMENTS) {
                                              LOGVAL(trg->ctx, LYE_TOOMANY, LY_VLOG_LYS, $1.node.ptr_leaflist, "min-elements", "leaf-list");
                                              YYABORT;
                                            }
                                            $1.node.ptr_leaflist->min = $2;
                                            $1.node.flag |= LYS_MIN_ELEMENTS;
                                            $$ = $1;
                                            if ($1.node.ptr_leaflist->max && ($1.node.ptr_leaflist->min > $1.node.ptr_leaflist->max)) {
                                              LOGVAL(trg->ctx, LYE_SPEC, LY_VLOG_LYS, $1.node.ptr_leaflist, "Invalid value \"%d\" of \"%s\".", $2, "min-elements");
                                              LOGVAL(trg->ctx, LYE_SPEC, LY_VLOG_LYS, $1.node.ptr_leaflist, "\"min-elements\" is bigger than \"max-elements\".");
                                              YYABORT;
                                            }
                                          }
  |  leaf_list_opt_stmt max_elements_stmt { if ($1.node.flag & LYS_MAX_ELEMENTS) {
                                              LOGVAL(trg->ctx, LYE_TOOMANY, LY_VLOG_LYS, $1.node.ptr_leaflist, "max-elements", "leaf-list");
                                              YYABORT;
                                            }
                                            $1.node.ptr_leaflist->max = $2;
                                            $1.node.flag |= LYS_MAX_ELEMENTS;
                                            $$ = $1;
                                            if ($1.node.ptr_leaflist->min > $1.node.ptr_leaflist->max) {
                                              LOGVAL(trg->ctx, LYE_SPEC, LY_VLOG_LYS, $1.node.ptr_leaflist, "Invalid value \"%d\" of \"%s\".", $2, "max-elements");
                                              LOGVAL(trg->ctx, LYE_SPEC, LY_VLOG_LYS, $1.node.ptr_leaflist, "\"max-elements\" is smaller than \"min-elements\".");
                                              YYABORT;
                                            }
                                          }
  |  leaf_list_opt_stmt ordered_by_stmt { if ($1.node.flag & LYS_ORDERED_MASK) {
                                            LOGVAL(trg->ctx, LYE_TOOMANY, LY_VLOG_LYS, $1.node.ptr_leaflist, "ordered by", "leaf-list");
                                            YYABORT;
                                          }
                                          if ($2 & LYS_USERORDERED) {
                                            $1.node.ptr_leaflist->flags |= LYS_USERORDERED;
                                          }
                                          $1.node.flag |= $2;
                                          $$ = $1;
                                        }
  |  leaf_list_opt_stmt status_stmt { if ($1.node.ptr_leaflist->flags & LYS_STATUS_MASK) {
                                        LOGVAL(trg->ctx, LYE_TOOMANY, LY_VLOG_LYS, $1.node.ptr_leaflist, "status", "leaf-list");
                                        YYABORT;
                                      }
                                      $1.node.ptr_leaflist->flags |= $2;
                                    }
  |  leaf_list_opt_stmt description_stmt { if (yang_read_description(trg, $1.node.ptr_leaflist, s, "leaf-list", NODE_PRINT)) {
                                             YYABORT;
                                           }
                                           s = NULL;
                                         }
  |  leaf_list_opt_stmt reference_stmt { if (yang_read_reference(trg, $1.node.ptr_leaflist, s, "leaf-list", NODE_PRINT)) {
                                           YYABORT;
                                         }
                                         s = NULL;
                                       }

list_arg_str: identifier_arg_str { $$.token = actual_type;
                                   $$.actual = actual;
                                   if (!(actual = yang_read_node(trg, actual, param->node, s, LYS_LIST, sizeof(struct lys_node_list)))) {
                                     YYABORT;
                                   }
                                   data_node = actual;
                                   s = NULL;
                                   actual_type = LIST_KEYWORD;
                                 }

list_stmt: LIST_KEYWORD sep list_arg_str
           '{' stmtsep
               list_opt_stmt
            '}' { void *tmp;

                  if ($6.node.ptr_list->iffeature_size) {
                    tmp = realloc($6.node.ptr_list->iffeature, $6.node.ptr_list->iffeature_size * sizeof *$6.node.ptr_list->iffeature);
                    if (!tmp) {
                      LOGMEM(trg->ctx);
                      YYABORT;
                    }
                    $6.node.ptr_list->iffeature = tmp;
                  }

                  if ($6.node.ptr_list->must_size) {
                    tmp = realloc($6.node.ptr_list->must, $6.node.ptr_list->must_size * sizeof *$6.node.ptr_list->must);
                    if (!tmp) {
                      LOGMEM(trg->ctx);
                      YYABORT;
                    }
                    $6.node.ptr_list->must = tmp;
                  }

                  if ($6.node.ptr_list->tpdf_size) {
                    tmp = realloc($6.node.ptr_list->tpdf, $6.node.ptr_list->tpdf_size * sizeof *$6.node.ptr_list->tpdf);
                    if (!tmp) {
                      LOGMEM(trg->ctx);
                      YYABORT;
                    }
                    $6.node.ptr_list->tpdf = tmp;
                  }

                  if ($6.node.ptr_list->unique_size) {
                    tmp = realloc($6.node.ptr_list->unique, $6.node.ptr_list->unique_size * sizeof *$6.node.ptr_list->unique);
                    if (!tmp) {
                      LOGMEM(trg->ctx);
                      YYABORT;
                    }
                    $6.node.ptr_list->unique = tmp;
                  }

                  LOGDBG(LY_LDGYANG, "finished parsing list statement \"%s\"", data_node->name);
                  actual_type = $3.token;
                  actual = $3.actual;
                  data_node = $3.actual;
                }

list_opt_stmt: @EMPTYDIR@ { $$.node.ptr_list = actual;
                            $$.node.flag = 0;
                          }
  |  list_opt_stmt when_stmt stmtsep
  |  list_opt_stmt if_feature_stmt stmtsep
  |  list_opt_stmt must_stmt stmtsep
  |  list_opt_stmt key_stmt { if ($1.node.ptr_list->keys) {
                                  LOGVAL(trg->ctx, LYE_TOOMANY, LY_VLOG_LYS, $1.node.ptr_list, "key", "list");
                                  free(s);
                                  YYABORT;
                              }
                              $1.node.ptr_list->keys = (struct lys_node_leaf **)s;
                              $$ = $1;
                              s = NULL;
                            }
  |  list_opt_stmt unique_stmt { YANG_ADDELEM($1.node.ptr_list->unique, $1.node.ptr_list->unique_size, "uniques");
                                 ((struct lys_unique *)actual)->expr = (const char **)s;
                                 $$ = $1;
                                 s = NULL;
                                 actual = $1.node.ptr_list;
                               }
  |  list_opt_stmt config_stmt { if ($1.node.ptr_list->flags & LYS_CONFIG_MASK) {
                                   LOGVAL(trg->ctx, LYE_TOOMANY, LY_VLOG_LYS, $1.node.ptr_list, "config", "list");
                                   YYABORT;
                                 }
                                 $1.node.ptr_list->flags |= $2;
                               }
  |  list_opt_stmt min_elements_stmt { if ($1.node.flag & LYS_MIN_ELEMENTS) {
                                         LOGVAL(trg->ctx, LYE_TOOMANY, LY_VLOG_LYS, $1.node.ptr_list, "min-elements", "list");
                                         YYABORT;
                                       }
                                       $1.node.ptr_list->min = $2;
                                       $1.node.flag |= LYS_MIN_ELEMENTS;
                                       $$ = $1;
                                       if ($1.node.ptr_list->max && ($1.node.ptr_list->min > $1.node.ptr_list->max)) {
                                         LOGVAL(trg->ctx, LYE_SPEC, LY_VLOG_LYS, $1.node.ptr_list, "Invalid value \"%d\" of \"%s\".", $2, "min-elements");
                                         LOGVAL(trg->ctx, LYE_SPEC, LY_VLOG_LYS, $1.node.ptr_list, "\"min-elements\" is bigger than \"max-elements\".");
                                         YYABORT;
                                       }
                                     }
  |  list_opt_stmt max_elements_stmt { if ($1.node.flag & LYS_MAX_ELEMENTS) {
                                         LOGVAL(trg->ctx, LYE_TOOMANY, LY_VLOG_LYS, $1.node.ptr_list, "max-elements", "list");
                                         YYABORT;
                                       }
                                       $1.node.ptr_list->max = $2;
                                       $1.node.flag |= LYS_MAX_ELEMENTS;
                                       $$ = $1;
                                       if ($1.node.ptr_list->min > $1.node.ptr_list->max) {
                                         LOGVAL(trg->ctx, LYE_SPEC, LY_VLOG_LYS, $1.node.ptr_list, "Invalid value \"%d\" of \"%s\".", $2, "min-elements");
                                         LOGVAL(trg->ctx, LYE_SPEC, LY_VLOG_LYS, $1.node.ptr_list, "\"max-elements\" is smaller than \"min-elements\".");
                                         YYABORT;
                                       }
                                     }
  |  list_opt_stmt ordered_by_stmt { if ($1.node.flag & LYS_ORDERED_MASK) {
                                       LOGVAL(trg->ctx, LYE_TOOMANY, LY_VLOG_LYS, $1.node.ptr_list, "ordered by", "list");
                                       YYABORT;
                                     }
                                     if ($2 & LYS_USERORDERED) {
                                       $1.node.ptr_list->flags |= LYS_USERORDERED;
                                     }
                                     $1.node.flag |= $2;
                                     $$ = $1;
                                   }
  |  list_opt_stmt status_stmt { if ($1.node.ptr_list->flags & LYS_STATUS_MASK) {
                                   LOGVAL(trg->ctx, LYE_TOOMANY, LY_VLOG_LYS, $1.node.ptr_list, "status", "list");
                                   YYABORT;
                                 }
                                 $1.node.ptr_list->flags |= $2;
                               }
  |  list_opt_stmt description_stmt { if (yang_read_description(trg, $1.node.ptr_list, s, "list", NODE_PRINT)) {
                                        YYABORT;
                                      }
                                      s = NULL;
                                    }
  |  list_opt_stmt reference_stmt { if (yang_read_reference(trg, $1.node.ptr_list, s, "list", NODE_PRINT)) {
                                      YYABORT;
                                    }
                                    s = NULL;
                                  }
  |  list_opt_stmt typedef_stmt stmtsep
  |  list_opt_stmt grouping_stmt stmtsep
  |  list_opt_stmt action_stmt stmtsep
  |  list_opt_stmt notification_stmt stmtsep { if (trg->version < 2) {
                                                 LOGVAL(trg->ctx, LYE_INSTMT, LY_VLOG_LYS, $1.node.ptr_list, "notification");
                                                 YYABORT;
                                               }
                                             }
  |  list_opt_stmt data_def_stmt stmtsep

choice_arg_str: identifier_arg_str { $$.token = actual_type;
                                     $$.actual = actual;
                                     if (!(actual = yang_read_node(trg, actual, param->node, s, LYS_CHOICE, sizeof(struct lys_node_choice)))) {
                                       YYABORT;
                                     }
                                     data_node = actual;
                                     s = NULL;
                                     actual_type = CHOICE_KEYWORD;
                                   }

choice_stmt: CHOICE_KEYWORD sep choice_arg_str choice_end
             { LOGDBG(LY_LDGYANG, "finished parsing choice statement \"%s\"", data_node->name);
               actual_type = $3.token;
               actual = $3.actual;
               data_node = $3.actual;
             }

choice_end: ';'
  |  '{' stmtsep
         choice_opt_stmt
     '}' { struct lys_iffeature *tmp;

           if (($3.node.ptr_choice->flags & LYS_MAND_TRUE) && $3.node.ptr_choice->dflt) {
              LOGVAL(trg->ctx, LYE_INCHILDSTMT, LY_VLOG_LYS, $3.node.ptr_choice, "default", "choice");
              LOGVAL(trg->ctx, LYE_SPEC, LY_VLOG_LYS, $3.node.ptr_choice, "The \"default\" statement is forbidden on choices with \"mandatory\".");
              YYABORT;
            }

           if ($3.node.ptr_choice->iffeature_size) {
             tmp = realloc($3.node.ptr_choice->iffeature, $3.node.ptr_choice->iffeature_size * sizeof *tmp);
             if (!tmp) {
               LOGMEM(trg->ctx);
               YYABORT;
             }
             $3.node.ptr_choice->iffeature = tmp;
           }
         }

choice_opt_stmt: @EMPTYDIR@ { $$.node.ptr_choice = actual;
                              $$.node.flag = 0;
                            }
  |  choice_opt_stmt when_stmt stmtsep
  |  choice_opt_stmt if_feature_stmt stmtsep
  |  choice_opt_stmt default_stmt { if ($1.node.flag & LYS_CHOICE_DEFAULT) {
                                      LOGVAL(trg->ctx, LYE_TOOMANY, LY_VLOG_LYS, $1.node.ptr_choice, "default", "choice");
                                      free(s);
                                      YYABORT;
                                    }
                                    $1.node.ptr_choice->dflt = (struct lys_node *) s;
                                    s = NULL;
                                    $$ = $1;
                                    $$.node.flag |= LYS_CHOICE_DEFAULT;
                                  }
  |  choice_opt_stmt config_stmt { if ($1.node.ptr_choice->flags & LYS_CONFIG_MASK) {
                                     LOGVAL(trg->ctx, LYE_TOOMANY, LY_VLOG_LYS, $1.node.ptr_choice, "config", "choice");
                                     YYABORT;
                                   }
                                   $1.node.ptr_choice->flags |= $2;
                                   $$ = $1;
                                 }
|  choice_opt_stmt mandatory_stmt { if ($1.node.ptr_choice->flags & LYS_MAND_MASK) {
                                      LOGVAL(trg->ctx, LYE_TOOMANY, LY_VLOG_LYS, $1.node.ptr_choice, "mandatory", "choice");
                                      YYABORT;
                                    }
                                    $1.node.ptr_choice->flags |= $2;
                                    $$ = $1;
                                  }
  |  choice_opt_stmt status_stmt { if ($1.node.ptr_choice->flags & LYS_STATUS_MASK) {
                                     LOGVAL(trg->ctx, LYE_TOOMANY, LY_VLOG_LYS, $1.node.ptr_choice, "status", "choice");
                                     YYABORT;
                                   }
                                   $1.node.ptr_choice->flags |= $2;
                                   $$ = $1;
                                 }
  |  choice_opt_stmt description_stmt { if (yang_read_description(trg, $1.node.ptr_choice, s, "choice", NODE_PRINT)) {
                                          YYABORT;
                                        }
                                        s = NULL;
                                        $$ = $1;
                                      }
  |  choice_opt_stmt reference_stmt { if (yang_read_reference(trg, $1.node.ptr_choice, s, "choice", NODE_PRINT)) {
                                        YYABORT;
                                      }
                                      s = NULL;
                                      $$ = $1;
                                    }
  |  choice_opt_stmt short_case_case_stmt stmtsep

short_case_case_stmt:  short_case_stmt
  |  case_stmt

short_case_stmt: container_stmt
  |  leaf_stmt
  |  leaf_list_stmt
  |  list_stmt
  |  anyxml_stmt
  |  anydata_stmt
  |  choice_stmt { if (trg->version < 2 ) {
                     LOGVAL(trg->ctx, LYE_INSTMT, LY_VLOG_LYS, actual, "choice");
                     YYABORT;
                   }
                 }

case_arg_str: identifier_arg_str { $$.token = actual_type;
                                   $$.actual = actual;
                                   if (!(actual = yang_read_node(trg, actual, param->node, s, LYS_CASE, sizeof(struct lys_node_case)))) {
                                     YYABORT;
                                   }
                                   data_node = actual;
                                   s = NULL;
                                   actual_type = CASE_KEYWORD;
                                 }

case_stmt: CASE_KEYWORD sep case_arg_str case_end
           { LOGDBG(LY_LDGYANG, "finished parsing case statement \"%s\"", data_node->name);
             actual_type = $3.token;
             actual = $3.actual;
             data_node = $3.actual;
           }

case_end: ';'
  |  '{' stmtsep
         case_opt_stmt
      '}' { struct lys_iffeature *tmp;

           if ($3.cs->iffeature_size) {
             tmp = realloc($3.cs->iffeature, $3.cs->iffeature_size * sizeof *tmp);
             if (!tmp) {
               LOGMEM(trg->ctx);
               YYABORT;
             }
             $3.cs->iffeature = tmp;
           }
          }

case_opt_stmt: @EMPTYDIR@ { $$.cs = actual; }
  |  case_opt_stmt when_stmt stmtsep
  |  case_opt_stmt if_feature_stmt stmtsep
  |  case_opt_stmt status_stmt { if ($1.cs->flags & LYS_STATUS_MASK) {
                                   LOGVAL(trg->ctx, LYE_TOOMANY, LY_VLOG_LYS, $1.cs, "status", "case");
                                   YYABORT;
                                 }
                                 $1.cs->flags |= $2;
                               }
  |  case_opt_stmt description_stmt { if (yang_read_description(trg, $1.cs, s, "case", NODE_PRINT)) {
                                        YYABORT;
                                      }
                                      s = NULL;
                                    }
  |  case_opt_stmt reference_stmt { if (yang_read_reference(trg, $1.cs, s, "case", NODE_PRINT)) {
                                      YYABORT;
                                    }
                                    s = NULL;
                                  }
  |  case_opt_stmt data_def_stmt stmtsep


anyxml_arg_str: identifier_arg_str { $$.token = actual_type;
                                     $$.actual = actual;
                                     if (!(actual = yang_read_node(trg, actual, param->node, s, LYS_ANYXML, sizeof(struct lys_node_anydata)))) {
                                       YYABORT;
                                     }
                                     data_node = actual;
                                     s = NULL;
                                     actual_type = ANYXML_KEYWORD;
                                   }

anyxml_stmt: ANYXML_KEYWORD sep anyxml_arg_str anyxml_end
             { LOGDBG(LY_LDGYANG, "finished parsing anyxml statement \"%s\"", data_node->name);
               actual_type = $3.token;
               actual = $3.actual;
               data_node = $3.actual;
             }

anydata_arg_str: identifier_arg_str { $$.token = actual_type;
                                      $$.actual = actual;
                                      if (!(actual = yang_read_node(trg, actual, param->node, s, LYS_ANYDATA, sizeof(struct lys_node_anydata)))) {
                                        YYABORT;
                                      }
                                      data_node = actual;
                                      s = NULL;
                                      actual_type = ANYDATA_KEYWORD;
                                    }

anydata_stmt: ANYDATA_KEYWORD sep anydata_arg_str anyxml_end
              { LOGDBG(LY_LDGYANG, "finished parsing anydata statement \"%s\"", data_node->name);
                actual_type = $3.token;
                actual = $3.actual;
                data_node = $3.actual;
              }

anyxml_end: ';'
  |  '{' stmtsep
         anyxml_opt_stmt
     '}' { void *tmp;

           if ($3.node.ptr_anydata->iffeature_size) {
             tmp = realloc($3.node.ptr_anydata->iffeature, $3.node.ptr_anydata->iffeature_size * sizeof *$3.node.ptr_anydata->iffeature);
             if (!tmp) {
               LOGMEM(trg->ctx);
               YYABORT;
             }
             $3.node.ptr_anydata->iffeature = tmp;
           }

           if ($3.node.ptr_anydata->must_size) {
             tmp = realloc($3.node.ptr_anydata->must, $3.node.ptr_anydata->must_size * sizeof *$3.node.ptr_anydata->must);
             if (!tmp) {
               LOGMEM(trg->ctx);
               YYABORT;
             }
             $3.node.ptr_anydata->must = tmp;
           }
         }

anyxml_opt_stmt: @EMPTYDIR@ { $$.node.ptr_anydata = actual;
                              $$.node.flag = actual_type;
                            }
  |  anyxml_opt_stmt when_stmt stmtsep
  |  anyxml_opt_stmt if_feature_stmt stmtsep
  |  anyxml_opt_stmt must_stmt stmtsep
  |  anyxml_opt_stmt config_stmt { if ($1.node.ptr_anydata->flags & LYS_CONFIG_MASK) {
                                     LOGVAL(trg->ctx, LYE_TOOMANY, LY_VLOG_LYS, $1.node.ptr_anydata, "config",
                                            ($1.node.flag == ANYXML_KEYWORD) ? "anyxml" : "anydata");
                                     YYABORT;
                                   }
                                   $1.node.ptr_anydata->flags |= $2;
                                 }
  |  anyxml_opt_stmt mandatory_stmt { if ($1.node.ptr_anydata->flags & LYS_MAND_MASK) {
                                        LOGVAL(trg->ctx, LYE_TOOMANY, LY_VLOG_LYS, $1.node.ptr_anydata, "mandatory",
                                               ($1.node.flag == ANYXML_KEYWORD) ? "anyxml" : "anydata");
                                        YYABORT;
                                      }
                                      $1.node.ptr_anydata->flags |= $2;
                                    }
  |  anyxml_opt_stmt status_stmt { if ($1.node.ptr_anydata->flags & LYS_STATUS_MASK) {
                                     LOGVAL(trg->ctx, LYE_TOOMANY, LY_VLOG_LYS, $1.node.ptr_anydata, "status",
                                            ($1.node.flag == ANYXML_KEYWORD) ? "anyxml" : "anydata");
                                     YYABORT;
                                   }
                                   $1.node.ptr_anydata->flags |= $2;
                                 }
  |  anyxml_opt_stmt description_stmt { if (yang_read_description(trg, $1.node.ptr_anydata, s, ($1.node.flag == ANYXML_KEYWORD) ? "anyxml" : "anydata", NODE_PRINT)) {
                                          YYABORT;
                                        }
                                        s = NULL;
                                      }
  |  anyxml_opt_stmt reference_stmt { if (yang_read_reference(trg, $1.node.ptr_anydata, s, ($1.node.flag == ANYXML_KEYWORD) ? "anyxml" : "anydata", NODE_PRINT)) {
                                        YYABORT;
                                      }
                                      s = NULL;
                                    }

uses_arg_str: identifier_ref_arg_str { $$.token = actual_type;
                                       $$.actual = actual;
                                       if (!(actual = yang_read_node(trg, actual, param->node, s, LYS_USES, sizeof(struct lys_node_uses)))) {
                                         YYABORT;
                                       }
                                       data_node = actual;
                                       s = NULL;
                                       actual_type = USES_KEYWORD;
                                     }

uses_stmt: USES_KEYWORD sep uses_arg_str uses_end
           { LOGDBG(LY_LDGYANG, "finished parsing uses statement \"%s\"", data_node->name);
             actual_type = $3.token;
             actual = $3.actual;
             data_node = $3.actual;
           }

uses_end: ';'
  |  '{' stmtsep
         uses_opt_stmt
     '}' { void *tmp;

           if ($3.uses->iffeature_size) {
             tmp = realloc($3.uses->iffeature, $3.uses->iffeature_size * sizeof *$3.uses->iffeature);
             if (!tmp) {
               LOGMEM(trg->ctx);
               YYABORT;
             }
             $3.uses->iffeature = tmp;
           }

           if ($3.uses->refine_size) {
             tmp = realloc($3.uses->refine, $3.uses->refine_size * sizeof *$3.uses->refine);
             if (!tmp) {
               LOGMEM(trg->ctx);
               YYABORT;
             }
             $3.uses->refine = tmp;
           }

           if ($3.uses->augment_size) {
             tmp = realloc($3.uses->augment, $3.uses->augment_size * sizeof *$3.uses->augment);
             if (!tmp) {
               LOGMEM(trg->ctx);
               YYABORT;
             }
             $3.uses->augment = tmp;
           }
         }

uses_opt_stmt: @EMPTYDIR@ { $$.uses = actual; }
  |  uses_opt_stmt when_stmt stmtsep
  |  uses_opt_stmt if_feature_stmt stmtsep
  |  uses_opt_stmt status_stmt { if ($1.uses->flags & LYS_STATUS_MASK) {
                                   LOGVAL(trg->ctx, LYE_TOOMANY, LY_VLOG_LYS, $1.uses, "status", "uses");
                                   YYABORT;
                                 }
                                 $1.uses->flags |= $2;
                               }
  |  uses_opt_stmt description_stmt { if (yang_read_description(trg, $1.uses, s, "uses", NODE_PRINT)) {
                                        YYABORT;
                                      }
                                      s = NULL;
                                    }
  |  uses_opt_stmt reference_stmt { if (yang_read_reference(trg, $1.uses, s, "uses", NODE_PRINT)) {
                                      YYABORT;
                                    }
                                    s = NULL;
                                  }
  |  uses_opt_stmt refine_stmt stmtsep
  |  uses_opt_stmt uses_augment_stmt stmtsep

refine_args_str: descendant_schema_nodeid optsep
  | string_1

refine_arg_str: refine_args_str { $$.token = actual_type;
                                  $$.actual = actual;
                                  YANG_ADDELEM(((struct lys_node_uses *)actual)->refine,
                                               ((struct lys_node_uses *)actual)->refine_size, "refines");
                                  ((struct lys_refine *)actual)->target_name = transform_schema2json(trg, s);
                                  free(s);
                                  s = NULL;
                                  if (!((struct lys_refine *)actual)->target_name) {
                                    YYABORT;
                                  }
                                  actual_type = REFINE_KEYWORD;
                                }

refine_stmt: REFINE_KEYWORD sep refine_arg_str refine_end
             { actual_type = $3.token;
               actual = $3.actual;
             }

refine_end: ';'
  |  '{' stmtsep
         refine_body_opt_stmts
     '}' { void *tmp;

           if ($3.refine->iffeature_size) {
             tmp = realloc($3.refine->iffeature, $3.refine->iffeature_size * sizeof *$3.refine->iffeature);
             if (!tmp) {
               LOGMEM(trg->ctx);
               YYABORT;
             }
             $3.refine->iffeature = tmp;
           }

           if ($3.refine->must_size) {
             tmp = realloc($3.refine->must, $3.refine->must_size * sizeof *$3.refine->must);
             if (!tmp) {
               LOGMEM(trg->ctx);
               YYABORT;
             }
             $3.refine->must = tmp;
           }

           if ($3.refine->dflt_size) {
             tmp = realloc($3.refine->dflt, $3.refine->dflt_size * sizeof *$3.refine->dflt);
             if (!tmp) {
               LOGMEM(trg->ctx);
               YYABORT;
             }
             $3.refine->dflt = tmp;
           }
         }

refine_body_opt_stmts: @EMPTYDIR@ { $$.refine = actual;
                                    actual_type = REFINE_KEYWORD;
                                  }
  |  refine_body_opt_stmts must_stmt stmtsep { actual = $1.refine;
                                               actual_type = REFINE_KEYWORD;
                                               if ($1.refine->target_type) {
                                                 if ($1.refine->target_type & (LYS_LEAF | LYS_LIST | LYS_LEAFLIST | LYS_CONTAINER | LYS_ANYXML)) {
                                                   $1.refine->target_type &= (LYS_LEAF | LYS_LIST | LYS_LEAFLIST | LYS_CONTAINER | LYS_ANYXML);
                                                 } else {
                                                   LOGVAL(trg->ctx, LYE_MISSCHILDSTMT, LY_VLOG_NONE, NULL, "must", "refine");
                                                   LOGVAL(trg->ctx, LYE_SPEC, LY_VLOG_NONE, NULL, "Invalid refine target nodetype for the substatements.");
                                                   YYABORT;
                                                 }
                                               } else {
                                                 $1.refine->target_type = LYS_LEAF | LYS_LIST | LYS_LEAFLIST | LYS_CONTAINER | LYS_ANYXML;
                                               }
                                             }
  |  refine_body_opt_stmts if_feature_stmt
     stmtsep { /* leaf, leaf-list, list, container or anyxml */
               /* check possibility of statements combination */
               if ($1.refine->target_type) {
                 if ($1.refine->target_type & (LYS_LEAF | LYS_LIST | LYS_LEAFLIST | LYS_CONTAINER | LYS_ANYDATA)) {
                   $1.refine->target_type &= (LYS_LEAF | LYS_LIST | LYS_LEAFLIST | LYS_CONTAINER | LYS_ANYDATA);
                 } else {
                   free(s);
                   LOGVAL(trg->ctx, LYE_MISSCHILDSTMT, LY_VLOG_NONE, NULL, "if-feature", "refine");
                   LOGVAL(trg->ctx, LYE_SPEC, LY_VLOG_NONE, NULL, "Invalid refine target nodetype for the substatements.");
                   YYABORT;
                 }
               } else {
                 $1.refine->target_type = LYS_LEAF | LYS_LIST | LYS_LEAFLIST | LYS_CONTAINER | LYS_ANYDATA;
               }
             }
  |  refine_body_opt_stmts presence_stmt { if ($1.refine->target_type) {
                                             if ($1.refine->target_type & LYS_CONTAINER) {
                                               if ($1.refine->mod.presence) {
                                                 LOGVAL(trg->ctx, LYE_TOOMANY, LY_VLOG_NONE, NULL, "presence", "refine");
                                                 free(s);
                                                 YYABORT;
                                               }
                                               $1.refine->target_type = LYS_CONTAINER;
                                               $1.refine->mod.presence = lydict_insert_zc(trg->ctx, s);
                                             } else {
                                               free(s);
                                               LOGVAL(trg->ctx, LYE_MISSCHILDSTMT, LY_VLOG_NONE, NULL, "presence", "refine");
                                               LOGVAL(trg->ctx, LYE_SPEC, LY_VLOG_NONE, NULL, "Invalid refine target nodetype for the substatements.");
                                               YYABORT;
                                             }
                                           } else {
                                             $1.refine->target_type = LYS_CONTAINER;
                                             $1.refine->mod.presence = lydict_insert_zc(trg->ctx, s);
                                           }
                                           s = NULL;
                                           $$ = $1;
                                         }
  |  refine_body_opt_stmts default_stmt { int i;

                                          if ($1.refine->dflt_size) {
                                            if (trg->version < 2) {
                                              LOGVAL(trg->ctx, LYE_TOOMANY, LY_VLOG_NONE, NULL, "default", "refine");
                                              YYABORT;
                                            }
                                            if ($1.refine->target_type & LYS_LEAFLIST) {
                                              $1.refine->target_type = LYS_LEAFLIST;
                                            } else {
                                              free(s);
                                              LOGVAL(trg->ctx, LYE_MISSCHILDSTMT, LY_VLOG_NONE, NULL, "default", "refine");
                                              LOGVAL(trg->ctx, LYE_SPEC, LY_VLOG_NONE, NULL, "Invalid refine target nodetype for the substatements.");
                                              YYABORT;
                                            }
                                          } else {
                                            if ($1.refine->target_type) {
                                              if (trg->version < 2 && ($1.refine->target_type & (LYS_LEAF | LYS_CHOICE))) {
                                                $1.refine->target_type &= (LYS_LEAF | LYS_CHOICE);
                                              } if (trg->version > 1 && ($1.refine->target_type & (LYS_LEAF | LYS_LEAFLIST | LYS_CHOICE))) {
                                                /* YANG 1.1 */
                                                $1.refine->target_type &= (LYS_LEAF | LYS_LEAFLIST | LYS_CHOICE);
                                              } else {
                                                free(s);
                                                LOGVAL(trg->ctx, LYE_MISSCHILDSTMT, LY_VLOG_NONE, NULL, "default", "refine");
                                                LOGVAL(trg->ctx, LYE_SPEC, LY_VLOG_NONE, NULL, "Invalid refine target nodetype for the substatements.");
                                                YYABORT;
                                              }
                                            } else {
                                              if (trg->version < 2) {
                                                $1.refine->target_type = LYS_LEAF | LYS_CHOICE;
                                              } else {
                                                /* YANG 1.1 */
                                                $1.refine->target_type = LYS_LEAF | LYS_LEAFLIST | LYS_CHOICE;
                                              }
                                            }
                                          }
                                          /* check for duplicity */
                                          for (i = 0; i < $1.refine->dflt_size; ++i) {
                                              if (ly_strequal($1.refine->dflt[i], s, 0)) {
                                                  LOGVAL(trg->ctx, LYE_INARG, LY_VLOG_NONE, NULL, s, "default");
                                                  LOGVAL(trg->ctx, LYE_SPEC, LY_VLOG_NONE, NULL, "Duplicated default value \"%s\".", s);
                                                  YYABORT;
                                              }
                                          }
                                          YANG_ADDELEM($1.refine->dflt, $1.refine->dflt_size, "defaults");
                                          *((const char **)actual) = lydict_insert_zc(trg->ctx, s);
                                          actual = $1.refine;
                                          s = NULL;
                                          $$ = $1;
                                        }
  |  refine_body_opt_stmts config_stmt { if ($1.refine->target_type) {
                                           if ($1.refine->target_type & (LYS_LEAF | LYS_CHOICE | LYS_LIST | LYS_CONTAINER | LYS_LEAFLIST)) {
                                             $1.refine->target_type &= (LYS_LEAF | LYS_CHOICE | LYS_LIST | LYS_CONTAINER | LYS_LEAFLIST);
                                             if ($1.refine->flags & LYS_CONFIG_MASK) {
                                               LOGVAL(trg->ctx, LYE_TOOMANY, LY_VLOG_NONE, NULL, "config", "refine");
                                               YYABORT;
                                             }
                                             $1.refine->flags |= $2;
                                           } else {
                                             LOGVAL(trg->ctx, LYE_MISSCHILDSTMT, LY_VLOG_NONE, NULL, "config", "refine");
                                             LOGVAL(trg->ctx, LYE_SPEC, LY_VLOG_NONE, NULL, "Invalid refine target nodetype for the substatements.");
                                             YYABORT;
                                           }
                                         } else {
                                           $1.refine->target_type = LYS_LEAF | LYS_CHOICE | LYS_LIST | LYS_CONTAINER | LYS_LEAFLIST;
                                           $1.refine->flags |= $2;
                                         }
                                         $$ = $1;
                                       }
  |  refine_body_opt_stmts mandatory_stmt { if ($1.refine->target_type) {
                                              if ($1.refine->target_type & (LYS_LEAF | LYS_CHOICE | LYS_ANYXML)) {
                                                $1.refine->target_type &= (LYS_LEAF | LYS_CHOICE | LYS_ANYXML);
                                                if ($1.refine->flags & LYS_MAND_MASK) {
                                                  LOGVAL(trg->ctx, LYE_TOOMANY, LY_VLOG_NONE, NULL, "mandatory", "refine");
                                                  YYABORT;
                                                }
                                                $1.refine->flags |= $2;
                                              } else {
                                                LOGVAL(trg->ctx, LYE_MISSCHILDSTMT, LY_VLOG_NONE, NULL, "mandatory", "refine");
                                                LOGVAL(trg->ctx, LYE_SPEC, LY_VLOG_NONE, NULL, "Invalid refine target nodetype for the substatements.");
                                                YYABORT;
                                              }
                                            } else {
                                              $1.refine->target_type = LYS_LEAF | LYS_CHOICE | LYS_ANYXML;
                                              $1.refine->flags |= $2;
                                            }
                                            $$ = $1;
                                          }
  |  refine_body_opt_stmts min_elements_stmt { if ($1.refine->target_type) {
                                                 if ($1.refine->target_type & (LYS_LIST | LYS_LEAFLIST)) {
                                                   $1.refine->target_type &= (LYS_LIST | LYS_LEAFLIST);
                                                   if ($1.refine->flags & LYS_RFN_MINSET) {
                                                     LOGVAL(trg->ctx, LYE_TOOMANY, LY_VLOG_NONE, NULL, "min-elements", "refine");
                                                     YYABORT;
                                                   }
                                                   $1.refine->flags |= LYS_RFN_MINSET;
                                                   $1.refine->mod.list.min = $2;
                                                 } else {
                                                   LOGVAL(trg->ctx, LYE_MISSCHILDSTMT, LY_VLOG_NONE, NULL, "min-elements", "refine");
                                                   LOGVAL(trg->ctx, LYE_SPEC, LY_VLOG_NONE, NULL, "Invalid refine target nodetype for the substatements.");
                                                   YYABORT;
                                                 }
                                               } else {
                                                 $1.refine->target_type = LYS_LIST | LYS_LEAFLIST;
                                                 $1.refine->flags |= LYS_RFN_MINSET;
                                                 $1.refine->mod.list.min = $2;
                                               }
                                               $$ = $1;
                                             }
  |  refine_body_opt_stmts max_elements_stmt { if ($1.refine->target_type) {
                                                 if ($1.refine->target_type & (LYS_LIST | LYS_LEAFLIST)) {
                                                   $1.refine->target_type &= (LYS_LIST | LYS_LEAFLIST);
                                                   if ($1.refine->flags & LYS_RFN_MAXSET) {
                                                     LOGVAL(trg->ctx, LYE_TOOMANY, LY_VLOG_NONE, NULL, "max-elements", "refine");
                                                     YYABORT;
                                                   }
                                                   $1.refine->flags |= LYS_RFN_MAXSET;
                                                   $1.refine->mod.list.max = $2;
                                                 } else {
                                                   LOGVAL(trg->ctx, LYE_MISSCHILDSTMT, LY_VLOG_NONE, NULL, "max-elements", "refine");
                                                   LOGVAL(trg->ctx, LYE_SPEC, LY_VLOG_NONE, NULL, "Invalid refine target nodetype for the substatements.");
                                                   YYABORT;
                                                 }
                                               } else {
                                                 $1.refine->target_type = LYS_LIST | LYS_LEAFLIST;
                                                 $1.refine->flags |= LYS_RFN_MAXSET;
                                                 $1.refine->mod.list.max = $2;
                                               }
                                               $$ = $1;
                                             }
  |  refine_body_opt_stmts description_stmt { if (yang_read_description(trg, $1.refine, s, "refine", NODE)) {
                                                YYABORT;
                                              }
                                              s = NULL;
                                            }
  |  refine_body_opt_stmts reference_stmt { if (yang_read_reference(trg, $1.refine, s, "refine", NODE)) {
                                              YYABORT;
                                            }
                                            s = NULL;
                                          }

uses_augment_arg_str: descendant_schema_nodeid optsep
  |  string_1
  ;

uses_augment_arg: uses_augment_arg_str { void *parent;

                                         $$.token = actual_type;
                                         $$.actual = actual;
                                         parent = actual;
                                         YANG_ADDELEM(((struct lys_node_uses *)actual)->augment,
                                                      ((struct lys_node_uses *)actual)->augment_size, "augments");
                                         if (yang_read_augment(trg, parent, actual, s)) {
                                           YYABORT;
                                         }
                                         data_node = actual;
                                         s = NULL;
                                         actual_type = AUGMENT_KEYWORD;
                                       }

uses_augment_stmt: AUGMENT_KEYWORD sep uses_augment_arg
                   '{' stmtsep
                       augment_opt_stmt
                   '}' { LOGDBG(LY_LDGYANG, "finished parsing augment statement \"%s\"", data_node->name);
                         actual_type = $3.token;
                         actual = $3.actual;
                         data_node = $3.actual;
                       }

augment_arg_str: absolute_schema_nodeids optsep
  |  string_1

augment_arg: augment_arg_str { $$.token = actual_type;
                               $$.actual = actual;
                               YANG_ADDELEM(trg->augment, trg->augment_size, "augments");
                               if (yang_read_augment(trg, NULL, actual, s)) {
                                 YYABORT;
                               }
                               data_node = actual;
                               s = NULL;
                               actual_type = AUGMENT_KEYWORD;
                             }

augment_stmt: AUGMENT_KEYWORD sep augment_arg
              '{' stmtsep
                  augment_opt_stmt
              '}' { LOGDBG(LY_LDGYANG, "finished parsing augment statement \"%s\"", data_node->name);
                    actual_type = $3.token;
                    actual = $3.actual;
                    data_node = $3.actual;
                  }

augment_opt_stmt: @EMPTYDIR@ { $$.augment = actual; }
  |  augment_opt_stmt when_stmt stmtsep
  |  augment_opt_stmt if_feature_stmt stmtsep
  |  augment_opt_stmt status_stmt { if ($1.augment->flags & LYS_STATUS_MASK) {
                                      LOGVAL(trg->ctx, LYE_TOOMANY, LY_VLOG_LYS, $1.augment, "status", "augment");
                                      YYABORT;
                                    }
                                    $1.augment->flags |= $2;
                                  }
  |  augment_opt_stmt description_stmt { if (yang_read_description(trg, $1.augment, s, "augment", NODE_PRINT)) {
                                           YYABORT;
                                         }
                                         s = NULL;
                                       }
  |  augment_opt_stmt reference_stmt { if (yang_read_reference(trg, $1.augment, s, "augment", NODE_PRINT)) {
                                         YYABORT;
                                       }
                                       s = NULL;
                                     }
  |  augment_opt_stmt data_def_stmt stmtsep
  |  augment_opt_stmt action_stmt stmtsep
  |  augment_opt_stmt notification_stmt stmtsep { if (trg->version < 2) {
                                                    LOGVAL(trg->ctx, LYE_INSTMT, LY_VLOG_LYS, $1.augment, "notification");
                                                    YYABORT;
                                                  }
                                                }
  |  augment_opt_stmt case_stmt stmtsep

action_arg_str: identifier_arg_str { if (param->module->version != 2) {
                                       LOGVAL(trg->ctx, LYE_INSTMT, LY_VLOG_LYS, actual, "action");
                                       free(s);
                                       YYABORT;
                                     }
                                     $$.token = actual_type;
                                     $$.actual = actual;
                                     if (!(actual = yang_read_node(trg, actual, param->node, s, LYS_ACTION, sizeof(struct lys_node_rpc_action)))) {
                                       YYABORT;
                                     }
                                     data_node = actual;
                                     s = NULL;
                                     actual_type = ACTION_KEYWORD;
                                   }

action_stmt: ACTION_KEYWORD sep action_arg_str rpc_end
             { LOGDBG(LY_LDGYANG, "finished parsing action statement \"%s\"", data_node->name);
               actual_type = $3.token;
               actual = $3.actual;
               data_node = $3.actual;
             }

rpc_arg_str: identifier_arg_str { $$.token = actual_type;
                                  $$.actual = actual;
                                  if (!(actual = yang_read_node(trg, NULL, param->node, s, LYS_RPC, sizeof(struct lys_node_rpc_action)))) {
                                    YYABORT;
                                  }
                                  data_node = actual;
                                  s = NULL;
                                  actual_type = RPC_KEYWORD;
                                }

rpc_stmt: RPC_KEYWORD sep rpc_arg_str rpc_end
          { LOGDBG(LY_LDGYANG, "finished parsing rpc statement \"%s\"", data_node->name);
            actual_type = $3.token;
            actual = $3.actual;
            data_node = $3.actual;
          }

rpc_end: ';'
  |  '{' stmtsep
         rpc_opt_stmt
      '}' { void *tmp;

            if ($3.node.ptr_rpc->iffeature_size) {
              tmp = realloc($3.node.ptr_rpc->iffeature, $3.node.ptr_rpc->iffeature_size * sizeof *$3.node.ptr_rpc->iffeature);
              if (!tmp) {
                LOGMEM(trg->ctx);
                YYABORT;
              }
              $3.node.ptr_rpc->iffeature = tmp;
            }

            if ($3.node.ptr_rpc->tpdf_size) {
              tmp = realloc($3.node.ptr_rpc->tpdf, $3.node.ptr_rpc->tpdf_size * sizeof *$3.node.ptr_rpc->tpdf);
              if (!tmp) {
                LOGMEM(trg->ctx);
                YYABORT;
              }
              $3.node.ptr_rpc->tpdf = tmp;
            }
          }


rpc_opt_stmt: @EMPTYDIR@ { $$.node.ptr_rpc = actual;
                           $$.node.flag = 0;
                         }
  |  rpc_opt_stmt if_feature_stmt stmtsep
  |  rpc_opt_stmt status_stmt { if ($1.node.ptr_rpc->flags & LYS_STATUS_MASK) {
                                  LOGVAL(trg->ctx, LYE_TOOMANY, LY_VLOG_LYS, $1.node.ptr_rpc, "status", "rpc");
                                  YYABORT;
                                }
                                $1.node.ptr_rpc->flags |= $2;
                             }
  |  rpc_opt_stmt description_stmt { if (yang_read_description(trg, $1.node.ptr_rpc, s, "rpc", NODE_PRINT)) {
                                       YYABORT;
                                     }
                                     s = NULL;
                                   }
  |  rpc_opt_stmt reference_stmt { if (yang_read_reference(trg, $1.node.ptr_rpc, s, "rpc", NODE_PRINT)) {
                                     YYABORT;
                                   }
                                   s = NULL;
                                 }
  |  rpc_opt_stmt typedef_stmt stmtsep
  |  rpc_opt_stmt grouping_stmt stmtsep
  |  rpc_opt_stmt input_stmt stmtsep { if ($1.node.flag & LYS_RPC_INPUT) {
                                         LOGVAL(trg->ctx, LYE_TOOMANY, LY_VLOG_LYS, $1.node.ptr_rpc, "input", "rpc");
                                         YYABORT;
                                       }
                                       $1.node.flag |= LYS_RPC_INPUT;
                                       $$ = $1;
                                     }
  |  rpc_opt_stmt output_stmt stmtsep { if ($1.node.flag & LYS_RPC_OUTPUT) {
                                          LOGVAL(trg->ctx, LYE_TOOMANY, LY_VLOG_LYS, $1.node.ptr_rpc, "output", "rpc");
                                          YYABORT;
                                        }
                                        $1.node.flag |= LYS_RPC_OUTPUT;
                                        $$ = $1;
                                      }

input_arg: INPUT_KEYWORD optsep { $$.token = actual_type;
                                  $$.actual = actual;
                                  s = strdup("input");
                                  if (!s) {
                                    LOGMEM(trg->ctx);
                                    YYABORT;
                                  }
                                  if (!(actual = yang_read_node(trg, actual, param->node, s, LYS_INPUT, sizeof(struct lys_node_inout)))) {
                                    YYABORT;
                                  }
                                  data_node = actual;
                                  s = NULL;
                                  actual_type = INPUT_KEYWORD;
                                }

input_stmt: input_arg
            '{' stmtsep
                input_output_opt_stmt
            '}' { void *tmp;
                  struct lys_node_inout *input = actual;

                  if (input->must_size) {
                    tmp = realloc(input->must, input->must_size * sizeof *input->must);
                    if (!tmp) {
                      LOGMEM(trg->ctx);
                      YYABORT;
                    }
                    input->must = tmp;
                  }

                  if (input->tpdf_size) {
                    tmp = realloc(input->tpdf, input->tpdf_size * sizeof *input->tpdf);
                    if (!tmp) {
                      LOGMEM(trg->ctx);
                      YYABORT;
                    }
                    input->tpdf = tmp;
                  }

                  LOGDBG(LY_LDGYANG, "finished parsing input statement \"%s\"", data_node->name);
                  actual_type = $1.token;
                  actual = $1.actual;
                  data_node = $1.actual;
                }

input_output_opt_stmt: @EMPTYDIR@
  |  input_output_opt_stmt must_stmt stmtsep
  |  input_output_opt_stmt typedef_stmt stmtsep
  |  input_output_opt_stmt grouping_stmt stmtsep
  |  input_output_opt_stmt data_def_stmt stmtsep

output_arg: OUTPUT_KEYWORD optsep { $$.token = actual_type;
                                    $$.actual = actual;
                                    s = strdup("output");
                                    if (!s) {
                                      LOGMEM(trg->ctx);
                                      YYABORT;
                                    }
                                    if (!(actual = yang_read_node(trg, actual, param->node, s, LYS_OUTPUT, sizeof(struct lys_node_inout)))) {
                                      YYABORT;
                                    }
                                    data_node = actual;
                                    s = NULL;
                                    actual_type = OUTPUT_KEYWORD;
                                  }

output_stmt: output_arg
             '{' stmtsep
                 input_output_opt_stmt
             '}' { void *tmp;
                   struct lys_node_inout *output = actual;

                   if (output->must_size) {
                     tmp = realloc(output->must, output->must_size * sizeof *output->must);
                     if (!tmp) {
                       LOGMEM(trg->ctx);
                       YYABORT;
                     }
                     output->must = tmp;
                   }

                   if (output->tpdf_size) {
                     tmp = realloc(output->tpdf, output->tpdf_size * sizeof *output->tpdf);
                     if (!tmp) {
                       LOGMEM(trg->ctx);
                       YYABORT;
                     }
                     output->tpdf = tmp;
                   }

                   LOGDBG(LY_LDGYANG, "finished parsing output statement \"%s\"", data_node->name);
                   actual_type = $1.token;
                   actual = $1.actual;
                   data_node = $1.actual;
                 }

notification_arg_str: identifier_arg_str { $$.token = actual_type;
                                           $$.actual = actual;
                                           if (!(actual = yang_read_node(trg, actual, param->node, s, LYS_NOTIF, sizeof(struct lys_node_notif)))) {
                                             YYABORT;
                                           }
                                           data_node = actual;
                                           actual_type = NOTIFICATION_KEYWORD;
                                         }

notification_stmt: NOTIFICATION_KEYWORD sep notification_arg_str notification_end
                   { LOGDBG(LY_LDGYANG, "finished parsing notification statement \"%s\"", data_node->name);
                     actual_type = $3.token;
                     actual = $3.actual;
                     data_node = $3.actual;
                   }

notification_end: ';'
  |  '{' stmtsep
         notification_opt_stmt
      '}' { void *tmp;

            if ($3.notif->must_size) {
              tmp = realloc($3.notif->must, $3.notif->must_size * sizeof *$3.notif->must);
              if (!tmp) {
                LOGMEM(trg->ctx);
                YYABORT;
              }
              $3.notif->must = tmp;
            }

           if ($3.notif->iffeature_size) {
             tmp = realloc($3.notif->iffeature, $3.notif->iffeature_size * sizeof *$3.notif->iffeature);
             if (!tmp) {
               LOGMEM(trg->ctx);
               YYABORT;
             }
             $3.notif->iffeature = tmp;
           }

           if ($3.notif->tpdf_size) {
             tmp = realloc($3.notif->tpdf, $3.notif->tpdf_size * sizeof *$3.notif->tpdf);
             if (!tmp) {
               LOGMEM(trg->ctx);
               YYABORT;
             }
             $3.notif->tpdf = tmp;
           }
          }

notification_opt_stmt: @EMPTYDIR@ { $$.notif = actual; }
  |  notification_opt_stmt must_stmt stmtsep
  |  notification_opt_stmt if_feature_stmt stmtsep
  |  notification_opt_stmt status_stmt { if ($1.notif->flags & LYS_STATUS_MASK) {
                                           LOGVAL(trg->ctx, LYE_TOOMANY, LY_VLOG_LYS, $1.notif, "status", "notification");
                                           YYABORT;
                                         }
                                         $1.notif->flags |= $2;
                                       }
  |  notification_opt_stmt description_stmt { if (yang_read_description(trg, $1.notif, s, "notification", NODE_PRINT)) {
                                                YYABORT;
                                              }
                                              s = NULL;
                                            }
  |  notification_opt_stmt reference_stmt { if (yang_read_reference(trg, $1.notif, s, "notification", NODE_PRINT)) {
                                              YYABORT;
                                            }
                                            s = NULL;
                                          }
  |  notification_opt_stmt typedef_stmt stmtsep
  |  notification_opt_stmt grouping_stmt stmtsep
  |  notification_opt_stmt data_def_stmt stmtsep

deviation_arg: deviation_arg_str { $$.token = actual_type;
                                   $$.actual = actual;
                                   YANG_ADDELEM(trg->deviation, trg->deviation_size, "deviations");
                                   ((struct lys_deviation *)actual)->target_name = transform_schema2json(trg, s);
                                   free(s);
                                   if (!((struct lys_deviation *)actual)->target_name) {
                                     YYABORT;
                                   }
                                   s = NULL;
                                   actual_type = DEVIATION_KEYWORD;
                                 }

deviation_stmt: DEVIATION_KEYWORD sep deviation_arg
                '{' stmtsep
                    deviation_opt_stmt
                '}' { void *tmp;

                      if ($6->deviate_size) {
                        tmp = realloc($6->deviate, $6->deviate_size * sizeof *$6->deviate);
                        if (!tmp) {
                          LOGINT(trg->ctx);
                          YYABORT;
                        }
                        $6->deviate = tmp;
                      } else {
                        LOGVAL(trg->ctx, LYE_MISSCHILDSTMT, LY_VLOG_NONE, NULL, "deviate", "deviation");
                        YYABORT;
                      }
                      actual_type = $3.token;
                      actual = $3.actual;
                    }

deviation_opt_stmt: @EMPTYDIR@ { $$ = actual; }
  |  deviation_opt_stmt description_stmt { if (yang_read_description(trg, $1, s, "deviation", NODE)) {
                                             YYABORT;
                                           }
                                           s = NULL;
                                           $$ = $1;
                                         }
  |  deviation_opt_stmt reference_stmt { if (yang_read_reference(trg, $1, s, "deviation", NODE)) {
                                           YYABORT;
                                         }
                                         s = NULL;
                                         $$ = $1;
                                       }
  |  deviation_opt_stmt DEVIATE_KEYWORD sep deviate_body_stmt stmtsep

deviation_arg_str: absolute_schema_nodeids optsep
  | string_1

deviate_body_stmt: deviate_not_supported_stmt
  |  deviate_stmts


deviate_not_supported: NOT_SUPPORTED_KEYWORD { $$.token = actual_type;
                                               $$.actual = actual;
                                               if (!(actual = yang_read_deviate_unsupported(trg->ctx, actual))) {
                                                 YYABORT;
                                               }
                                               actual_type = NOT_SUPPORTED_KEYWORD;
                                             }

deviate_not_supported_stmt: deviate_not_supported optsep deviate_not_supported_end
                            { actual_type = $1.token;
                              actual = $1.actual;
                            }

deviate_not_supported_end: ';'
  | '{' stmtsep '}'

deviate_stmts: deviate_add_stmt
  |  deviate_replace_stmt
  |  deviate_delete_stmt

deviate_add: ADD_KEYWORD { $$.token = actual_type;
                           $$.actual = actual;
                           if (!(actual = yang_read_deviate(trg->ctx, actual, LY_DEVIATE_ADD))) {
                             YYABORT;
                           }
                           actual_type = ADD_KEYWORD;
                         }

deviate_add_stmt: deviate_add optsep deviate_add_end
                  { actual_type = $1.token;
                    actual = $1.actual;
                  }

deviate_add_end: ';'
  |  '{' stmtsep
         deviate_add_opt_stmt
     '}' { void *tmp;

           if ($3->must_size) {
             tmp = realloc($3->must, $3->must_size * sizeof *$3->must);
             if (!tmp) {
               LOGMEM(trg->ctx);
               YYABORT;
             }
             $3->must = tmp;
           }

           if ($3->unique_size) {
             tmp = realloc($3->unique, $3->unique_size * sizeof *$3->unique);
             if (!tmp) {
               LOGMEM(trg->ctx);
               YYABORT;
             }
             $3->unique = tmp;
           }

           if ($3->dflt_size) {
             tmp = realloc($3->dflt, $3->dflt_size * sizeof *$3->dflt);
             if (!tmp) {
               LOGMEM(trg->ctx);
               YYABORT;
             }
             $3->dflt = tmp;
           }
         }

deviate_add_opt_stmt: @EMPTYDIR@ { $$ = actual; }
  |  deviate_add_opt_stmt units_stmt { if (yang_read_units(trg, actual, s, ADD_KEYWORD)) {
                                         YYABORT;
                                       }
                                       s = NULL;
                                       $$ = $1;
                                     }
  |  deviate_add_opt_stmt must_stmt stmtsep
  |  deviate_add_opt_stmt unique_stmt { YANG_ADDELEM($1->unique, $1->unique_size, "uniques");
                                        ((struct lys_unique *)actual)->expr = (const char **)s;
                                        s = NULL;
                                        actual = $1;
                                        $$= $1;
                                      }
  |  deviate_add_opt_stmt default_stmt { YANG_ADDELEM($1->dflt, $1->dflt_size, "defaults");
                                         *((const char **)actual) = lydict_insert_zc(trg->ctx, s);
                                         s = NULL;
                                         actual = $1;
                                         $$ = $1;
                                       }
  |  deviate_add_opt_stmt config_stmt { if ($1->flags & LYS_CONFIG_MASK) {
                                          LOGVAL(trg->ctx, LYE_TOOMANY, LY_VLOG_NONE, NULL, "config", "deviate");
                                          YYABORT;
                                        }
                                        $1->flags = $2;
                                        $$ = $1;
                                      }
  |  deviate_add_opt_stmt mandatory_stmt { if ($1->flags & LYS_MAND_MASK) {
                                             LOGVAL(trg->ctx, LYE_TOOMANY, LY_VLOG_NONE, NULL, "mandatory", "deviate");
                                             YYABORT;
                                           }
                                           $1->flags = $2;
                                           $$ = $1;
                                         }
  |  deviate_add_opt_stmt min_elements_stmt { if ($1->min_set) {
                                                LOGVAL(trg->ctx, LYE_TOOMANY, LY_VLOG_NONE, NULL, "min-elements", "deviation");
                                                YYABORT;
                                              }
                                              $1->min = $2;
                                              $1->min_set = 1;
                                              $$ =  $1;
                                            }
  |  deviate_add_opt_stmt max_elements_stmt { if ($1->max_set) {
                                                LOGVAL(trg->ctx, LYE_TOOMANY, LY_VLOG_NONE, NULL, "max-elements", "deviation");
                                                YYABORT;
                                              }
                                              $1->max = $2;
                                              $1->max_set = 1;
                                              $$ =  $1;
                                            }

deviate_delete: DELETE_KEYWORD { $$.token = actual_type;
                                 $$.actual = actual;
                                 if (!(actual = yang_read_deviate(trg->ctx, actual, LY_DEVIATE_DEL))) {
                                   YYABORT;
                                 }
                                 actual_type = DELETE_KEYWORD;
                               }

deviate_delete_stmt: deviate_delete optsep deviate_delete_end
                     { actual_type = $1.token;
                       actual = $1.actual;
                     }

deviate_delete_end: ';'
  |  '{' stmtsep
         deviate_delete_opt_stmt
      '}' { void *tmp;

            if ($3->must_size) {
              tmp = realloc($3->must, $3->must_size * sizeof *$3->must);
              if (!tmp) {
                LOGMEM(trg->ctx);
                YYABORT;
              }
              $3->must = tmp;
            }

            if ($3->unique_size) {
              tmp = realloc($3->unique, $3->unique_size * sizeof *$3->unique);
              if (!tmp) {
                LOGMEM(trg->ctx);
                YYABORT;
              }
              $3->unique = tmp;
            }

            if ($3->dflt_size) {
              tmp = realloc($3->dflt, $3->dflt_size * sizeof *$3->dflt);
              if (!tmp) {
                LOGMEM(trg->ctx);
                YYABORT;
              }
              $3->dflt = tmp;
            }
          }

deviate_delete_opt_stmt: @EMPTYDIR@ { $$ = actual; }
  |  deviate_delete_opt_stmt units_stmt { if (yang_read_units(trg, actual, s, DELETE_KEYWORD)) {
                                            YYABORT;
                                          }
                                          s = NULL;
                                          $$ = $1;
                                        }
  |  deviate_delete_opt_stmt must_stmt stmtsep
  |  deviate_delete_opt_stmt unique_stmt { YANG_ADDELEM($1->unique, $1->unique_size, "uniques");
                                           ((struct lys_unique *)actual)->expr = (const char **)s;
                                           s = NULL;
                                           actual = $1;
                                           $$ = $1;
                                         }
  |  deviate_delete_opt_stmt default_stmt { YANG_ADDELEM($1->dflt, $1->dflt_size, "defaults");
                                            *((const char **)actual) = lydict_insert_zc(trg->ctx, s);
                                            s = NULL;
                                            actual = $1;
                                            $$ = $1;
                                          }

deviate_replace: REPLACE_KEYWORD { $$.token = actual_type;
                                   $$.actual = actual;
                                   if (!(actual = yang_read_deviate(trg->ctx, actual, LY_DEVIATE_RPL))) {
                                     YYABORT;
                                   }
                                   actual_type = REPLACE_KEYWORD;
                                 }

deviate_replace_stmt: deviate_replace optsep deviate_replace_end
                      { actual_type = $1.token;
                        actual = $1.actual;
                      }

deviate_replace_end: ';'
  |  '{' stmtsep
         deviate_replace_opt_stmt
     '}' { void *tmp;

           if ($3->dflt_size) {
             tmp = realloc($3->dflt, $3->dflt_size * sizeof *$3->dflt);
             if (!tmp) {
               LOGMEM(trg->ctx);
               YYABORT;
             }
             $3->dflt = tmp;
           }
         }

deviate_replace_opt_stmt: @EMPTYDIR@ { $$ = actual; }
  |  deviate_replace_opt_stmt type_stmt stmtsep
  |  deviate_replace_opt_stmt units_stmt { if (yang_read_units(trg, actual, s, DELETE_KEYWORD)) {
                                             YYABORT;
                                           }
                                           s = NULL;
                                           $$ = $1;
                                         }
  |  deviate_replace_opt_stmt default_stmt { YANG_ADDELEM($1->dflt, $1->dflt_size, "defaults");
                                             *((const char **)actual) = lydict_insert_zc(trg->ctx, s);
                                             s = NULL;
                                             actual = $1;
                                             $$ = $1;
                                           }
  |  deviate_replace_opt_stmt config_stmt { if ($1->flags & LYS_CONFIG_MASK) {
                                              LOGVAL(trg->ctx, LYE_TOOMANY, LY_VLOG_NONE, NULL, "config", "deviate");
                                              YYABORT;
                                            }
                                            $1->flags = $2;
                                            $$ = $1;
                                          }
  |  deviate_replace_opt_stmt mandatory_stmt { if ($1->flags & LYS_MAND_MASK) {
                                                 LOGVAL(trg->ctx, LYE_TOOMANY, LY_VLOG_NONE, NULL, "mandatory", "deviate");
                                                 YYABORT;
                                               }
                                               $1->flags = $2;
                                               $$ = $1;
                                             }
  |  deviate_replace_opt_stmt min_elements_stmt { if ($1->min_set) {
                                                    LOGVAL(trg->ctx, LYE_TOOMANY, LY_VLOG_NONE, NULL, "min-elements", "deviation");
                                                    YYABORT;
                                                  }
                                                  $1->min = $2;
                                                  $1->min_set = 1;
                                                  $$ =  $1;
                                                }
  |  deviate_replace_opt_stmt max_elements_stmt { if ($1->max_set) {
                                                    LOGVAL(trg->ctx, LYE_TOOMANY, LY_VLOG_NONE, NULL, "max-elements", "deviation");
                                                    YYABORT;
                                                  }
                                                  $1->max = $2;
                                                  $1->max_set = 1;
                                                  $$ =  $1;
                                                }

when_arg_str: string  { $$.token = actual_type;
                        $$.actual = actual;
                        if (!(actual = yang_read_when(trg, actual, actual_type, s))) {
                          YYABORT;
                        }
                        s = NULL;
                        actual_type = WHEN_KEYWORD;
                      }

when_stmt: WHEN_KEYWORD sep when_arg_str when_end
           { actual_type = $3.token;
             actual = $3.actual;
           }

when_end: ';'
  |  '{' stmtsep
         when_opt_stmt
     '}'

when_opt_stmt: @EMPTYDIR@
  |  when_opt_stmt description_stmt { if (yang_read_description(trg, actual, s, "when", NODE)) {
                                        YYABORT;
                                      }
                                      s = NULL;
                                    }
  |  when_opt_stmt reference_stmt { if (yang_read_reference(trg, actual, s, "when", NODE)) {
                                      YYABORT;
                                    }
                                    s = NULL;
                                  }

config_arg: config_arg_str { $$ = $1;
                             backup_type = actual_type;
                             actual_type = CONFIG_KEYWORD;
                           }

config_stmt: CONFIG_KEYWORD sep config_arg stmtend { $$ = $3; }

config_arg_str: TRUE_KEYWORD optsep { $$ = LYS_CONFIG_W | LYS_CONFIG_SET; }
  |  FALSE_KEYWORD optsep { $$ = LYS_CONFIG_R | LYS_CONFIG_SET; }
  |  string_1 { if (!strcmp(s, "true")) {
                  $$ = LYS_CONFIG_W | LYS_CONFIG_SET;
                } else if (!strcmp(s, "false")) {
                  $$ = LYS_CONFIG_R | LYS_CONFIG_SET;
                } else {
                  LOGVAL(trg->ctx, LYE_INARG, LY_VLOG_NONE, NULL, s, "config");
                  free(s);
                  YYABORT;
                }
                free(s);
                s = NULL;
              }

mandatory_arg: mandatory_arg_str { $$ = $1;
                                   backup_type = actual_type;
                                   actual_type = MANDATORY_KEYWORD;
                                 }

mandatory_stmt: MANDATORY_KEYWORD sep mandatory_arg stmtend { $$ = $3; }

mandatory_arg_str: TRUE_KEYWORD optsep { $$ = LYS_MAND_TRUE; }
  |  FALSE_KEYWORD optsep { $$ = LYS_MAND_FALSE; }
  |  string_1 { if (!strcmp(s, "true")) {
                  $$ = LYS_MAND_TRUE;
                } else if (!strcmp(s, "false")) {
                  $$ = LYS_MAND_FALSE;
                } else {
                  LOGVAL(trg->ctx, LYE_INARG, LY_VLOG_NONE, NULL, s, "mandatory");
                  free(s);
                  YYABORT;
                }
                free(s);
                s = NULL;
              }

presence_arg: string { backup_type = actual_type;
                       actual_type = PRESENCE_KEYWORD;
                     }

presence_stmt: PRESENCE_KEYWORD sep presence_arg stmtend

min_value_arg: min_value_arg_str { $$ = $1;
                                   backup_type = actual_type;
                                   actual_type = MIN_ELEMENTS_KEYWORD;
                                 }

min_elements_stmt: MIN_ELEMENTS_KEYWORD sep min_value_arg stmtend { $$ = $3; }

min_value_arg_str: non_negative_integer_value optsep { $$ = $1; }
  |  string_1 { if (strlen(s) == 1 && s[0] == '0') {
                  $$ = 0;
                } else {
                  /* convert it to uint32_t */
                  uint64_t val;
                  char *endptr = NULL;
                  errno = 0;

                  val = strtoul(s, &endptr, 10);
                  if (*endptr || s[0] == '-' || errno || val > UINT32_MAX) {
                      LOGVAL(trg->ctx, LYE_INARG, LY_VLOG_NONE, NULL, s, "min-elements");
                      free(s);
                      YYABORT;
                  }
                  $$ = (uint32_t) val;
                }
                free(s);
                s = NULL;
              }

max_value_arg: max_value_arg_str { $$ = $1;
                                   backup_type = actual_type;
                                   actual_type = MAX_ELEMENTS_KEYWORD;
                                 }

max_elements_stmt: MAX_ELEMENTS_KEYWORD sep max_value_arg stmtend { $$ = $3; }

max_value_arg_str: UNBOUNDED_KEYWORD optsep { $$ = 0; }
  |  positive_integer_value optsep { $$ = $1; }
  |  string_1 { if (!strcmp(s, "unbounded")) {
                  $$ = 0;
                } else {
                  /* convert it to uint32_t */
                  uint64_t val;
                  char *endptr = NULL;
                  errno = 0;

                  val = strtoul(s, &endptr, 10);
                  if (*endptr || s[0] == '-' || errno || val == 0 || val > UINT32_MAX) {
                      LOGVAL(trg->ctx, LYE_INARG, LY_VLOG_NONE, NULL, s, "max-elements");
                      free(s);
                      YYABORT;
                  }
                  $$ = (uint32_t) val;
                }
                free(s);
                s = NULL;
              }

ordered_by_arg: ordered_by_arg_str { $$ = $1;
                                     backup_type = actual_type;
                                     actual_type = ORDERED_BY_KEYWORD;
                                   }

ordered_by_stmt: ORDERED_BY_KEYWORD sep ordered_by_arg stmtend { $$ = $3; }

ordered_by_arg_str: USER_KEYWORD optsep { $$ = LYS_USERORDERED; }
  |  SYSTEM_KEYWORD optsep { $$ = LYS_SYSTEMORDERED; }
  |  string_1 { if (!strcmp(s, "user")) {
                  $$ = LYS_USERORDERED;
                } else if (!strcmp(s, "system")) {
                  $$ = LYS_SYSTEMORDERED;
                } else {
                  free(s);
                  YYABORT;
                }
                free(s);
                s=NULL;
              }

must_agr_str: string { $$.token = actual_type;
                       $$.actual = actual;
                       switch (actual_type) {
                       case CONTAINER_KEYWORD:
                         YANG_ADDELEM(((struct lys_node_container *)actual)->must,
                                     ((struct lys_node_container *)actual)->must_size, "musts");
                         break;
                       case ANYDATA_KEYWORD:
                       case ANYXML_KEYWORD:
                         YANG_ADDELEM(((struct lys_node_anydata *)actual)->must,
                                     ((struct lys_node_anydata *)actual)->must_size, "musts");
                         break;
                       case LEAF_KEYWORD:
                         YANG_ADDELEM(((struct lys_node_leaf *)actual)->must,
                                     ((struct lys_node_leaf *)actual)->must_size, "musts");
                         break;
                       case LEAF_LIST_KEYWORD:
                         YANG_ADDELEM(((struct lys_node_leaflist *)actual)->must,
                                     ((struct lys_node_leaflist *)actual)->must_size, "musts");
                         break;
                       case LIST_KEYWORD:
                         YANG_ADDELEM(((struct lys_node_list *)actual)->must,
                                     ((struct lys_node_list *)actual)->must_size, "musts");
                         break;
                       case REFINE_KEYWORD:
                         YANG_ADDELEM(((struct lys_refine *)actual)->must,
                                     ((struct lys_refine *)actual)->must_size, "musts");
                         break;
                       case ADD_KEYWORD:
                       case DELETE_KEYWORD:
                         YANG_ADDELEM(((struct lys_deviate *)actual)->must,
                                      ((struct lys_deviate *)actual)->must_size, "musts");
                         break;
                       case NOTIFICATION_KEYWORD:
                         if (trg->version < 2) {
                           free(s);
                           LOGVAL(trg->ctx, LYE_INSTMT, LY_VLOG_LYS, actual, "must");
                           YYABORT;
                         }
                         YANG_ADDELEM(((struct lys_node_notif *)actual)->must,
                                     ((struct lys_node_notif *)actual)->must_size, "musts");
                         break;
                       case INPUT_KEYWORD:
                       case OUTPUT_KEYWORD:
                         if (trg->version < 2) {
                           free(s);
                           LOGVAL(trg->ctx, LYE_INSTMT, LY_VLOG_LYS, actual, "must");
                           YYABORT;
                         }
                         YANG_ADDELEM(((struct lys_node_inout *)actual)->must,
                                     ((struct lys_node_inout *)actual)->must_size, "musts");
                         break;
                       case EXTENSION_INSTANCE:
                         /* must is already allocated */
                         break;
                       default:
                         free(s);
                         LOGINT(trg->ctx);
                         YYABORT;
                       }
                       ((struct lys_restr *)actual)->expr = transform_schema2json(trg, s);
                       free(s);
                       if (!((struct lys_restr *)actual)->expr) {
                         YYABORT;
                       }
                       s = NULL;
                       actual_type = MUST_KEYWORD;
                     }

must_stmt: MUST_KEYWORD sep must_agr_str must_end
           { actual_type = $3.token;
             actual = $3.actual;
           }

must_end: ';'
  |  '{' stmtsep
         message_opt_stmt
     '}'

unique_arg: unique_arg_str { backup_type = actual_type;
                             actual_type = UNIQUE_KEYWORD;
                           }

unique_stmt: UNIQUE_KEYWORD sep unique_arg stmtend

unique_arg_str: descendant_schema_nodeid optsep
  |  string_1

key_arg: key_arg_str { backup_type = actual_type;
                       actual_type = KEY_KEYWORD;
                     }

key_stmt: KEY_KEYWORD sep key_arg stmtend;

key_arg_str: node_identifier { s = strdup(yyget_text(scanner));
                               if (!s) {
                                 LOGMEM(trg->ctx);
                                 YYABORT;
                               }
                             }
             optsep
  |  string_1
  ;

range_arg_str: string { $$.token = actual_type;
                        $$.actual = actual;
                        if (!(actual = yang_read_range(trg->ctx, actual, s, is_ext_instance))) {
                          YYABORT;
                        }
                        actual_type = RANGE_KEYWORD;
                        s = NULL;
                      }

absolute_schema_nodeid: '/' node_identifier { if (s) {
                                                s = ly_realloc(s,strlen(s) + yyget_leng(scanner) + 2);
                                                if (!s) {
                                                  LOGMEM(trg->ctx);
                                                  YYABORT;
                                                }
                                                strcat(s,"/");
                                                strcat(s, yyget_text(scanner));
                                              } else {
                                                s = malloc(yyget_leng(scanner) + 2);
                                                if (!s) {
                                                  LOGMEM(trg->ctx);
                                                  YYABORT;
                                                }
                                                s[0]='/';
                                                memcpy(s + 1, yyget_text(scanner), yyget_leng(scanner) + 1);
                                              }
                                            }

absolute_schema_nodeids: absolute_schema_nodeid absolute_schema_nodeid_opt;

absolute_schema_nodeid_opt: @EMPTYDIR@
  |  absolute_schema_nodeid_opt absolute_schema_nodeid
  ;

descendant_schema_nodeid: node_identifier { if (s) {
                                              s = ly_realloc(s,strlen(s) + yyget_leng(scanner) + 1);
                                              if (!s) {
                                                LOGMEM(trg->ctx);
                                                YYABORT;
                                              }
                                              strcat(s, yyget_text(scanner));
                                            } else {
                                              s = strdup(yyget_text(scanner));
                                              if (!s) {
                                                LOGMEM(trg->ctx);
                                                YYABORT;
                                              }
                                            }
                                          }
                          absolute_schema_nodeid_opt;

path_arg_str: { tmp_s = yyget_text(scanner); } absolute_paths { s = strdup(tmp_s);
                                                                if (!s) {
                                                                  LOGMEM(trg->ctx);
                                                                  YYABORT;
                                                                }
                                                                s[strlen(s) - 1] = '\0';
                                                             }
  |  { tmp_s = yyget_text(scanner); } relative_path { s = strdup(tmp_s);
                                                      if (!s) {
                                                        LOGMEM(trg->ctx);
                                                        YYABORT;
                                                      }
                                                      s[strlen(s) - 1] = '\0';
                                                    }
  |  string_1
  ;

absolute_path: '/' node_identifier path_predicate

absolute_paths: absolute_path absolute_path_opt

absolute_path_opt: @EMPTYDIR@
  |  absolute_path_opt absolute_path;

relative_path: relative_path_part1 relative_path_part1_opt descendant_path

relative_path_part1: DOUBLEDOT '/';

relative_path_part1_opt: @EMPTYDIR@
  |  relative_path_part1_opt relative_path_part1;

descendant_path: node_identifier descendant_path_opt

descendant_path_opt: @EMPTYDIR@
  |  path_predicate absolute_paths;

path_predicate: @EMPTYDIR@
  | path_predicate '[' whitespace_opt path_equality_expr ']'

path_equality_expr: node_identifier whitespace_opt '=' whitespace_opt path_key_expr

path_key_expr: current_function_invocation whitespace_opt '/' whitespace_opt
                     rel_path_keyexpr

rel_path_keyexpr: rel_path_keyexpr_part1 rel_path_keyexpr_part1_opt
                    node_identifier rel_path_keyexpr_part2

rel_path_keyexpr_part1: DOUBLEDOT whitespace_opt '/' whitespace_opt;

rel_path_keyexpr_part1_opt: @EMPTYDIR@
  |  rel_path_keyexpr_part1_opt rel_path_keyexpr_part1;

rel_path_keyexpr_part2: @EMPTYDIR@
  | rel_path_keyexpr_part2 whitespace_opt '/' whitespace_opt node_identifier;

current_function_invocation: CURRENT_KEYWORD whitespace_opt '(' whitespace_opt ')'

positive_integer_value: NON_NEGATIVE_INTEGER { /* convert it to uint32_t */
                                                unsigned long val;

                                                val = strtoul(yyget_text(scanner), NULL, 10);
                                                if (val > UINT32_MAX) {
                                                    LOGVAL(trg->ctx, LYE_SPEC, LY_VLOG_NONE, NULL, "Converted number is very long.");
                                                    YYABORT;
                                                }
                                                $$ = (uint32_t) val;
                                             }

non_negative_integer_value: ZERO { $$ = 0; }
  |  positive_integer_value { $$ = $1; }
  ;

integer_value: ZERO { $$ = 0; }
  |  integer_value_convert { /* convert it to int32_t */
                             int64_t val;

                             val = strtoll(yyget_text(scanner), NULL, 10);
                             if (val < INT32_MIN || val > INT32_MAX) {
                                 LOGVAL(trg->ctx, LYE_SPEC, LY_VLOG_NONE, NULL,
                                        "The number is not in the correct range (INT32_MIN..INT32_MAX): \"%d\"",val);
                                 YYABORT;
                             }
                             $$ = (int32_t) val;
                           }

integer_value_convert: INTEGER
  |  NON_NEGATIVE_INTEGER

prefix_arg_str: string_1
  |  identifiers optsep;

identifier_arg_str: identifiers optsep
  |  string_1 { if (lyp_check_identifier(trg->ctx, s, LY_IDENT_SIMPLE, trg, NULL)) {
                    free(s);
                    YYABORT;
                }
              }

node_identifier: identifier
  |  IDENTIFIERPREFIX
  ;

identifier_ref_arg_str: identifiers optsep
  | identifiers_ref optsep
  | string_1 { char *tmp;

               if ((tmp = strchr(s, ':'))) {
                 *tmp = '\0';
                 /* check prefix */
                 if (lyp_check_identifier(trg->ctx, s, LY_IDENT_SIMPLE, trg, NULL)) {
                   free(s);
                   YYABORT;
                 }
                 /* check identifier */
                 if (lyp_check_identifier(trg->ctx, tmp + 1, LY_IDENT_SIMPLE, trg, NULL)) {
                   free(s);
                   YYABORT;
                 }
                 *tmp = ':';
               } else {
                 /* check identifier */
                 if (lyp_check_identifier(trg->ctx, s, LY_IDENT_SIMPLE, trg, NULL)) {
                   free(s);
                   YYABORT;
                 }
               }
             }

stmtend: semicolom stmtsep { s = $1; }
  | curly_bracket_open stmtsep curly_bracket_close stmtsep { s = $1; }


semicolom: ';' { actual_type = backup_type;
                 backup_type = NODE;
                 $$ = s;
                 s = NULL;
               }

curly_bracket_close: '}' { actual_type = backup_type;
                           backup_type = NODE;
                         }

curly_bracket_open: '{' { $$ = s;
                          s = NULL;
                        }


stmtsep: @EMPTYDIR@
  | stmtsep sep_stmt
  | stmtsep unknown_statement
  ;

unknown_statement: identifiers_ref string_opt unknown_statement_end
                   { actual_type = $2.token;
                     actual = $2.actual;
                   }

string_opt: string_opt_part1 string_opt_part2 { $$.token = actual_type;
                                                $$.actual = actual;
                                                if (!(actual = yang_read_ext(trg, (actual) ? actual : trg, $1, s,
                                                                             actual_type, backup_type, is_ext_instance))) {
                                                  YYABORT;
                                                }
                                                s = NULL;
                                                actual_type = EXTENSION_INSTANCE;
                                              }

string_opt_part1: optsep { $$ = s; s = NULL; }

string_opt_part2: @EMPTYDIR@
  |  string

unknown_string: @EMPTYDIR@
  |  sep unknown_string_part1

unknown_string_part1: @EMPTYDIR@
  |  strings optsep
  |  STRING optsep unknown_string_part2

unknown_string_part2: @EMPTYDIR@
  |  unknown_string_part2 '+' optsep STRING optsep

unknown_statement_end: ';'
  |  '{' optsep unknown_statement2_opt '}'

unknown_statement2_opt: @EMPTYDIR@
  |  unknown_statement2_opt unknown_statement2 optsep

/* unknown_statement2 read yang statement or extension; yang statement is parsed later */

unknown_statement2: unknown_statement
  |  unknown_statement2_yang_stmt unknown_string unknown_statement2_end
     {  struct yang_ext_substmt *substmt = ((struct lys_ext_instance *)actual)->parent;
        int32_t length = 0, old_length = 0;
        char *tmp_value;

        if (!substmt) {
          substmt = calloc(1, sizeof *substmt);
          if (!substmt) {
            LOGMEM(trg->ctx);
            YYABORT;
          }
          ((struct lys_ext_instance *)actual)->parent = substmt;
        }
        length = strlen($1);
        old_length = (substmt->ext_substmt) ? strlen(substmt->ext_substmt) + 2 : 2;
        tmp_value = realloc(substmt->ext_substmt, old_length + length + 1);
        if (!tmp_value) {
          LOGMEM(trg->ctx);
          YYABORT;
        }
        substmt->ext_substmt = tmp_value;
        tmp_value += old_length - 2;
        memcpy(tmp_value, $1, length);
        tmp_value[length] = ' ';
        tmp_value[length + 1] = '\0';
        tmp_value[length + 2] = '\0';
      }
  |  unknown_statement2_module_stmt unknown_string unknown_statement2_end
     {  struct yang_ext_substmt *substmt = ((struct lys_ext_instance *)actual)->parent;
        int32_t length;
        char *tmp_value, **array;
        int i = 0;

        if (!substmt) {
          substmt = calloc(1, sizeof *substmt);
          if (!substmt) {
            LOGMEM(trg->ctx);
            YYABORT;
          }
          ((struct lys_ext_instance *)actual)->parent = substmt;
        }
        length = strlen($1);
        if (!substmt->ext_modules) {
          array = malloc(2 * sizeof *substmt->ext_modules);
        } else {
          for (i = 0; substmt->ext_modules[i]; ++i);
          array = realloc(substmt->ext_modules, (i + 2) * sizeof *substmt->ext_modules);
        }
        if (!array) {
          LOGMEM(trg->ctx);
          YYABORT;
        }
        substmt->ext_modules = array;
        array[i + 1] = NULL;
        tmp_value = malloc(length + 2);
        if (!tmp_value) {
          LOGMEM(trg->ctx);
          YYABORT;
        }
        array[i] = tmp_value;
        memcpy(tmp_value, $1, length);
        tmp_value[length] = '\0';
        tmp_value[length + 1] = '\0';
      }

unknown_statement2_end: ';'
  |  '{' optsep unknown_statement3_opt '}'

unknown_statement2_yang_stmt: yang_stmt { $$ = yyget_text(scanner); }

unknown_statement2_module_stmt: MODULE_KEYWORD { $$ = yyget_text(scanner); }

unknown_statement3_opt: @EMPTYDIR@
  |  unknown_statement3_opt node_identifier unknown_string unknown_statement3_opt_end;

unknown_statement3_opt_end: ';' optsep
  |  '{' optsep unknown_statement3_opt '}' optsep

sep_stmt: WHITESPACE
  | EOL
  ;

optsep: @EMPTYDIR@
  | optsep sep_stmt
  ;

sep: sep_stmt optsep;

whitespace_opt: @EMPTYDIR@
  | WHITESPACE
  ;

string: strings { s = strdup(yyget_text(scanner));
                  if (!s) {
                    LOGMEM(trg->ctx);
                    YYABORT;
                  }
                }
        optsep
  |  string_1

strings: STRINGS
  |  REVISION_DATE
  |  identifier
  |  IDENTIFIERPREFIX
  |  ZERO
  |  INTEGER
  |  NON_NEGATIVE_INTEGER

identifier: MODULE_KEYWORD
  |  identifier1
  |  yang_stmt

identifier1: IDENTIFIER
  |  CURRENT_KEYWORD
  |  DEPRECATED_KEYWORD
  |  FALSE_KEYWORD
  |  NOT_SUPPORTED_KEYWORD
  |  OBSOLETE_KEYWORD
  |  SYSTEM_KEYWORD
  |  TRUE_KEYWORD
  |  UNBOUNDED_KEYWORD
  |  USER_KEYWORD


yang_stmt: ANYXML_KEYWORD
  |  ARGUMENT_KEYWORD
  |  AUGMENT_KEYWORD
  |  BASE_KEYWORD
  |  BELONGS_TO_KEYWORD
  |  BIT_KEYWORD
  |  CASE_KEYWORD
  |  CHOICE_KEYWORD
  |  CONFIG_KEYWORD
  |  CONTACT_KEYWORD
  |  CONTAINER_KEYWORD
  |  DEFAULT_KEYWORD
  |  DESCRIPTION_KEYWORD
  |  ENUM_KEYWORD
  |  ERROR_APP_TAG_KEYWORD
  |  ERROR_MESSAGE_KEYWORD
  |  EXTENSION_KEYWORD
  |  DEVIATION_KEYWORD
  |  DEVIATE_KEYWORD
  |  FEATURE_KEYWORD
  |  FRACTION_DIGITS_KEYWORD
  |  GROUPING_KEYWORD
  |  IDENTITY_KEYWORD
  |  IF_FEATURE_KEYWORD
  |  IMPORT_KEYWORD
  |  INCLUDE_KEYWORD
  |  INPUT_KEYWORD
  |  KEY_KEYWORD
  |  LEAF_KEYWORD
  |  LEAF_LIST_KEYWORD
  |  LENGTH_KEYWORD
  |  LIST_KEYWORD
  |  MANDATORY_KEYWORD
  |  MAX_ELEMENTS_KEYWORD
  |  MIN_ELEMENTS_KEYWORD
  |  MUST_KEYWORD
  |  NAMESPACE_KEYWORD
  |  NOTIFICATION_KEYWORD
  |  ORDERED_BY_KEYWORD
  |  ORGANIZATION_KEYWORD
  |  OUTPUT_KEYWORD
  |  PATH_KEYWORD
  |  PATTERN_KEYWORD
  |  POSITION_KEYWORD
  |  PREFIX_KEYWORD
  |  PRESENCE_KEYWORD
  |  RANGE_KEYWORD
  |  REFERENCE_KEYWORD
  |  REFINE_KEYWORD
  |  REQUIRE_INSTANCE_KEYWORD
  |  REVISION_KEYWORD
  |  REVISION_DATE_KEYWORD
  |  RPC_KEYWORD
  |  STATUS_KEYWORD
  |  SUBMODULE_KEYWORD
  |  TYPE_KEYWORD
  |  TYPEDEF_KEYWORD
  |  UNIQUE_KEYWORD
  |  UNITS_KEYWORD
  |  USES_KEYWORD
  |  VALUE_KEYWORD
  |  WHEN_KEYWORD
  |  YANG_VERSION_KEYWORD
  |  YIN_ELEMENT_KEYWORD
  |  ADD_KEYWORD
  |  DELETE_KEYWORD
  |  REPLACE_KEYWORD
  |  ACTION_KEYWORD
  |  MODIFIER_KEYWORD
  |  ANYDATA_KEYWORD

identifiers: identifier { s = strdup(yyget_text(scanner));
                          if (!s) {
                            LOGMEM(trg->ctx);
                            YYABORT;
                          }
                        }

identifiers_ref: IDENTIFIERPREFIX { s = strdup(yyget_text(scanner));
                                    if (!s) {
                                      LOGMEM(trg->ctx);
                                      YYABORT;
                                    }
                                  }

type_ext_alloc: @EMPTYDIR@ { struct lys_type **type;

                             type = (struct lys_type **)yang_getplace_for_extcomplex_struct(ext_instance, NULL, ext_name,
                                                                                            "type", LY_STMT_TYPE);
                             if (!type) {
                               YYABORT;
                             }
                             /* allocate type structure */
                             (*type) = calloc(1, sizeof **type);
                             if (!*type) {
                               LOGMEM(trg->ctx);
                               YYABORT;
                             }

                             /* HACK for unres */
                             (*type)->parent = (struct lys_tpdf *)ext_instance;
                             $$ = actual = *type;
                             is_ext_instance = 0;
                            }

typedef_ext_alloc: @EMPTYDIR@ { struct lys_tpdf **tpdf;

                                tpdf = (struct lys_tpdf **)yang_getplace_for_extcomplex_struct(ext_instance, NULL, ext_name,
                                                                                               "typedef", LY_STMT_TYPEDEF);
                                if (!tpdf) {
                                  YYABORT;
                                }
                                /* allocate typedef structure */
                                (*tpdf) = calloc(1, sizeof **tpdf);
                                if (!*tpdf) {
                                  LOGMEM(trg->ctx);
                                  YYABORT;
                                }

                                $$ = actual = *tpdf;
                                is_ext_instance = 0;
                              }

iffeature_ext_alloc: @EMPTYDIR@ { struct lys_iffeature **iffeature;

                                 iffeature = (struct lys_iffeature **)yang_getplace_for_extcomplex_struct(ext_instance, NULL, ext_name,
                                                                                                          "if-feature", LY_STMT_IFFEATURE);
                                 if (!iffeature) {
                                   YYABORT;
                                 }
                                 /* allocate typedef structure */
                                 (*iffeature) = calloc(1, sizeof **iffeature);
                                 if (!*iffeature) {
                                   LOGMEM(trg->ctx);
                                   YYABORT;
                                 }
                                 $$ = actual = *iffeature;
                               }

restriction_ext_alloc: @EMPTYDIR@ { struct lys_restr **restr;
                                    LY_STMT stmt;

                                    s = yyget_text(scanner);
                                    if (!strcmp(s, "must")) {
                                      stmt = LY_STMT_MUST;
                                    } else if (!strcmp(s, "pattern")) {
                                      stmt = LY_STMT_PATTERN;
                                    } else if (!strcmp(s, "range")) {
                                      stmt = LY_STMT_RANGE;
                                    } else {
                                      stmt = LY_STMT_LENGTH;
                                    }
                                    restr = (struct lys_restr **)yang_getplace_for_extcomplex_struct(ext_instance, NULL, ext_name, s, stmt);
                                    if (!restr) {
                                      YYABORT;
                                    }
                                    /* allocate structure for must */
                                    (*restr) = calloc(1, sizeof(struct lys_restr));
                                    if (!*restr) {
                                      LOGMEM(trg->ctx);
                                      YYABORT;
                                    }
                                    $$ = actual = *restr;
                                    s = NULL;
                                  }

when_ext_alloc: @EMPTYDIR@ { actual = yang_getplace_for_extcomplex_struct(ext_instance, NULL, ext_name, "when", LY_STMT_WHEN);
                             if (!actual) {
                               YYABORT;
                             }
                             $$ = actual;
                           }

revision_ext_alloc: @EMPTYDIR@ { struct lys_revision **rev;
                                 int i;

                                 rev = (struct lys_revision **)yang_getplace_for_extcomplex_struct(ext_instance, &i, ext_name,
                                                                                                   "revision", LY_STMT_REVISION);
                                 if (!rev) {
                                   YYABORT;
                                 }
                                 rev[i] = calloc(1, sizeof **rev);
                                 if (!rev[i]) {
                                   LOGMEM(trg->ctx);
                                   YYABORT;
                                 }
                                 actual = rev[i];
                                 $$.revision = rev;
                                 $$.index = i;
                               }

datadef_ext_check: @EMPTYDIR@ { LY_STMT stmt;

                                s = yyget_text(scanner);
                                if (!strcmp(s, "action")) {
                                  stmt = LY_STMT_ACTION;
                                } else if (!strcmp(s, "anydata")) {
                                  stmt = LY_STMT_ANYDATA;
                                } else if (!strcmp(s, "anyxml")) {
                                  stmt = LY_STMT_ANYXML;
                                } else if (!strcmp(s, "case")) {
                                  stmt = LY_STMT_CASE;
                                } else if (!strcmp(s, "choice")) {
                                  stmt = LY_STMT_CHOICE;
                                } else if (!strcmp(s, "container")) {
                                  stmt = LY_STMT_CONTAINER;
                                } else if (!strcmp(s, "grouping")) {
                                  stmt = LY_STMT_GROUPING;
                                } else if (!strcmp(s, "input")) {
                                  stmt = LY_STMT_INPUT;
                                } else if (!strcmp(s, "leaf")) {
                                  stmt = LY_STMT_LEAF;
                                } else if (!strcmp(s, "leaf-list")) {
                                  stmt = LY_STMT_LEAFLIST;
                                } else if (!strcmp(s, "list")) {
                                  stmt = LY_STMT_LIST;
                                } else if (!strcmp(s, "notification")) {
                                  stmt = LY_STMT_NOTIFICATION;
                                } else if (!strcmp(s, "output")) {
                                  stmt = LY_STMT_OUTPUT;
                                } else {
                                  stmt = LY_STMT_USES;
                                }
                                if (yang_extcomplex_node(ext_instance, ext_name, s, *param->node, stmt)) {
                                  YYABORT;
                                }
                                actual = NULL;
                                s = NULL;
                                is_ext_instance = 0;
                              }

not_supported_ext_check: not_supported_ext { LOGERR(trg->ctx, ly_errno, "Extension's substatement \"%s\" not supported.", yyget_text(scanner)); }

not_supported_ext: YANG_VERSION_KEYWORD
  |  YIN_ELEMENT_KEYWORD
  |  BIT_KEYWORD
  |  ENUM_KEYWORD
  |  AUGMENT_KEYWORD
  |  DEVIATION_KEYWORD
  |  DEVIATE_KEYWORD
  |  EXTENSION_KEYWORD
  |  FEATURE_KEYWORD
  |  IDENTITY_KEYWORD
  |  IMPORT_KEYWORD
  |  INCLUDE_KEYWORD
  |  SUBMODULE_EXT_KEYWORD

datadef_ext_stmt: action_stmt
  |  anydata_stmt
  |  anyxml_stmt
  |  case_stmt
  |  choice_stmt
  |  container_stmt
  |  grouping_stmt
  |  input_stmt
  |  leaf_stmt
  |  leaf_list_stmt
  |  list_stmt
  |  notification_stmt
  |  output_stmt
  |  uses_stmt

restriction_ext_stmt: must_stmt
  |  pattern_stmt
  |  range_stmt
  |  length_stmt

ext_substatements: @EMPTYDIR@ { actual_type = EXTENSION_INSTANCE;
                                actual = ext_instance;
                                if (!is_ext_instance) {
                                  LOGVAL(trg->ctx, LYE_INSTMT, LY_VLOG_NONE, NULL, yyget_text(scanner));
                                  YYABORT;
                                }
                                $$ = 0;
                              }
  |  ext_substatements belongs_to_stmt stmtsep
  |  ext_substatements prefix_stmt { if (yang_read_extcomplex_str(trg, ext_instance, "prefix", ext_name, s,
                                                                  0, LY_STMT_PREFIX)) {
                                       YYABORT;
                                     }
                                   }
  |  ext_substatements description_stmt { if (yang_read_extcomplex_str(trg, ext_instance, "description", ext_name, s,
                                                                       0, LY_STMT_DESCRIPTION)) {
                                            YYABORT;
                                          }
                                        }
  |  ext_substatements reference_stmt { if (yang_read_extcomplex_str(trg, ext_instance, "reference", ext_name, s,
                                                                     0, LY_STMT_REFERENCE)) {
                                          YYABORT;
                                        }
                                      }
  |  ext_substatements units_stmt { if (yang_read_extcomplex_str(trg, ext_instance, "units", ext_name, s,
                                                                     0, LY_STMT_UNITS)) {
                                      YYABORT;
                                    }
                                  }
  |  ext_substatements base_stmt { if (yang_read_extcomplex_str(trg, ext_instance, "base", ext_name, s,
                                                                0, LY_STMT_BASE)) {
                                     YYABORT;
                                   }
                                 }
  |  ext_substatements contact_stmt { if (yang_read_extcomplex_str(trg, ext_instance, "contact", ext_name, s,
                                                                     0, LY_STMT_CONTACT)) {
                                        YYABORT;
                                      }
                                    }
  |  ext_substatements default_stmt { if (yang_read_extcomplex_str(trg, ext_instance, "default", ext_name, s,
                                                                     0, LY_STMT_DEFAULT)) {
                                        YYABORT;
                                      }
                                    }
  |  ext_substatements error_message_stmt { if (yang_read_extcomplex_str(trg, ext_instance, "error-message", ext_name, s,
                                                                         0, LY_STMT_ERRMSG)) {
                                              YYABORT;
                                            }
                                          }
  |  ext_substatements error_app_tag_stmt { if (yang_read_extcomplex_str(trg, ext_instance, "error-app-tag", ext_name, s,
                                                                         0, LY_STMT_ERRTAG)) {
                                              YYABORT;
                                            }
                                          }
  |  ext_substatements key_stmt { if (yang_read_extcomplex_str(trg, ext_instance, "key", ext_name, s,
                                                               0, LY_STMT_KEY)) {
                                    YYABORT;
                                  }
                                }
  |  ext_substatements namespace_stmt { if (yang_read_extcomplex_str(trg, ext_instance, "namespace", ext_name, s,
                                                                     0, LY_STMT_NAMESPACE)) {
                                          YYABORT;
                                        }
                                      }
  |  ext_substatements organization_stmt { if (yang_read_extcomplex_str(trg, ext_instance, "organization", ext_name, s,
                                                                        0, LY_STMT_ORGANIZATION)) {
                                             YYABORT;
                                           }
                                         }
  |  ext_substatements path_stmt { if (yang_read_extcomplex_str(trg, ext_instance, "path", ext_name, s,
                                                                0, LY_STMT_PATH)) {
                                     YYABORT;
                                   }
                                 }
  |  ext_substatements presence_stmt { if (yang_read_extcomplex_str(trg, ext_instance, "presence", ext_name, s,
                                                                    0, LY_STMT_PRESENCE)) {
                                         YYABORT;
                                       }
                                     }
  |  ext_substatements revision_date_stmt { if (yang_read_extcomplex_str(trg, ext_instance, "revision-date", ext_name, s,
                                                                         0, LY_STMT_REVISIONDATE)) {
                                              YYABORT;
                                            }
                                          }
  |  ext_substatements type_ext_alloc type_stmt stmtsep
     { struct lys_type *type = $2;

       if (yang_fill_type(trg, type, (struct yang_type *)type->der, ext_instance, param->unres)) {
         yang_type_free(trg->ctx, type);
         YYABORT;
       }
       if (unres_schema_add_node(trg, param->unres, type, UNRES_TYPE_DER_EXT, NULL) == -1) {
         yang_type_free(trg->ctx, type);
         YYABORT;
       }
       actual = ext_instance;
       is_ext_instance = 1;
     }
  |  ext_substatements typedef_ext_alloc typedef_stmt stmtsep
     { struct lys_tpdf *tpdf = $2;

       if (yang_fill_type(trg, &tpdf->type, (struct yang_type *)tpdf->type.der, tpdf, param->unres)) {
         yang_type_free(trg->ctx, &tpdf->type);
       }
       if (yang_check_ext_instance(trg, &tpdf->ext, tpdf->ext_size, tpdf, param->unres)) {
         YYABORT;
       }
       if (unres_schema_add_node(trg, param->unres, &tpdf->type, UNRES_TYPE_DER_TPDF, (struct lys_node *)ext_instance) == -1) {
         yang_type_free(trg->ctx, &tpdf->type);
         YYABORT;
       }
       /* check default value*/
       if (unres_schema_add_node(trg, param->unres, &tpdf->type, UNRES_TYPE_DFLT, (struct lys_node *)(&tpdf->dflt)) == -1)  {
         YYABORT;
       }
       actual = ext_instance;
       is_ext_instance = 1;
     }
  |  ext_substatements status_stmt { if (yang_fill_extcomplex_flags(ext_instance, ext_name, "status", LY_STMT_STATUS,
                                                                    $2, LYS_STATUS_MASK)) {
                                       YYABORT;
                                     }
                                   }
  |  ext_substatements config_stmt { if (yang_fill_extcomplex_flags(ext_instance, ext_name, "config", LY_STMT_CONFIG,
                                                                    $2, LYS_CONFIG_MASK)) {
                                       YYABORT;
                                     }
                                   }
  |  ext_substatements mandatory_stmt { if (yang_fill_extcomplex_flags(ext_instance, ext_name, "mandatory", LY_STMT_MANDATORY,
                                                                       $2, LYS_MAND_MASK)) {
                                          YYABORT;
                                        }
                                      }
  |  ext_substatements ordered_by_stmt { if ($1 & LYS_ORDERED_MASK) {
                                            LOGVAL(trg->ctx, LYE_TOOMANY, LY_VLOG_NONE, NULL, "ordered by", ext_name);
                                            YYABORT;
                                         }
                                         if ($2 & LYS_USERORDERED) {
                                           if (yang_fill_extcomplex_flags(ext_instance, ext_name, "ordered-by", LY_STMT_ORDEREDBY,
                                                                          $2, LYS_USERORDERED)) {
                                             YYABORT;
                                           }
                                         }
                                         $1 |= $2;
                                         $$ = $1;
                                       }
  |  ext_substatements require_instance_stmt { if (yang_fill_extcomplex_uint8(ext_instance, ext_name, "require-instance",
                                                                              LY_STMT_REQINSTANCE, $2)) {
                                                 YYABORT;
                                               }
                                             }
  |  ext_substatements modifier_stmt { if (yang_fill_extcomplex_uint8(ext_instance, ext_name, "modifier", LY_STMT_MODIFIER, 0)) {
                                         YYABORT;
                                       }
                                     }
  |  ext_substatements fraction_digits_stmt
     { /* range check */
       if ($2 < 1 || $2 > 18) {
         LOGVAL(trg->ctx, LYE_SPEC, LY_VLOG_NONE, NULL, "Invalid value \"%d\" of \"%s\".", $2, "fraction-digits");
         YYABORT;
       }
       if (yang_fill_extcomplex_uint8(ext_instance, ext_name, "fraction-digits", LY_STMT_DIGITS, $2)) {
         YYABORT;
       }
     }
  |  ext_substatements min_elements_stmt { uint32_t **val;

                                           val = (uint32_t **)yang_getplace_for_extcomplex_struct(ext_instance, NULL, ext_name,
                                                                                                  "min-elements", LY_STMT_MIN);
                                           if (!val) {
                                             YYABORT;
                                           }
                                           /* store the value */
                                           *val = malloc(sizeof(uint32_t));
                                           if (!*val) {
                                             LOGMEM(trg->ctx);
                                             YYABORT;
                                           }
                                           **val = $2;
                                         }
  |  ext_substatements max_elements_stmt { uint32_t **val;

                                           val = (uint32_t **)yang_getplace_for_extcomplex_struct(ext_instance, NULL, ext_name,
                                                                                                  "max-elements", LY_STMT_MAX);
                                           if (!val) {
                                             YYABORT;
                                           }
                                           /* store the value */
                                           *val = malloc(sizeof(uint32_t));
                                           if (!*val) {
                                             LOGMEM(trg->ctx);
                                             YYABORT;
                                           }
                                           **val = $2;
                                         }
  |  ext_substatements position_stmt { uint32_t **val;

                                       val = (uint32_t **)yang_getplace_for_extcomplex_struct(ext_instance, NULL, ext_name,
                                                                                              "position", LY_STMT_POSITION);
                                       if (!val) {
                                         YYABORT;
                                       }
                                       /* store the value */
                                       *val = malloc(sizeof(uint32_t));
                                       if (!*val) {
                                         LOGMEM(trg->ctx);
                                         YYABORT;
                                       }
                                       **val = $2;
                                     }
  |  ext_substatements value_stmt { int32_t **val;

                                    val = (int32_t **)yang_getplace_for_extcomplex_struct(ext_instance, NULL, ext_name,
                                                                                          "value", LY_STMT_VALUE);
                                    if (!val) {
                                      YYABORT;
                                    }
                                    /* store the value */
                                    *val = malloc(sizeof(int32_t));
                                    if (!*val) {
                                      LOGMEM(trg->ctx);
                                      YYABORT;
                                    }
                                    **val = $2;
                                  }
  |  ext_substatements unique_stmt { struct lys_unique **unique;
                                     int rc;

                                     unique = (struct lys_unique **)yang_getplace_for_extcomplex_struct(ext_instance, NULL, ext_name,
                                                                                                        "unique", LY_STMT_UNIQUE);
                                     if (!unique) {
                                       YYABORT;
                                     }
                                     *unique = calloc(1, sizeof(struct lys_unique));
                                     if (!*unique) {
                                       LOGMEM(trg->ctx);
                                       YYABORT;
                                     }
                                     rc = yang_fill_unique(trg, (struct lys_node_list *)ext_instance, *unique, s, param->unres);
                                     free(s);
                                     s = NULL;
                                     if (rc) {
                                       YYABORT;
                                     }
                                   }
  |  ext_substatements iffeature_ext_alloc if_feature_stmt stmtsep
     { struct lys_iffeature *iffeature;

       iffeature = $2;
       s = (char *)iffeature->features;
       iffeature->features = NULL;
       if (yang_fill_iffeature(trg, iffeature, ext_instance, s, param->unres, 0)) {
         YYABORT;
       }
       if (yang_check_ext_instance(trg, &iffeature->ext, iffeature->ext_size, iffeature, param->unres)) {
         YYABORT;
       }
       s = NULL;
       actual = ext_instance;
     }
  |  ext_substatements argument_stmt stmtsep
  |  ext_substatements restriction_ext_alloc restriction_ext_stmt stmtsep
     { if (yang_check_ext_instance(trg, &((struct lys_restr *)$2)->ext, ((struct lys_restr *)$2)->ext_size, $2, param->unres)) {
         YYABORT;
       }
       actual = ext_instance;
     }
  |  ext_substatements when_ext_alloc when_stmt stmtsep
     { if (yang_check_ext_instance(trg, &(*(struct lys_when **)$2)->ext, (*(struct lys_when **)$2)->ext_size,
                                   *(struct lys_when **)$2, param->unres)) {
         YYABORT;
       }
       actual = ext_instance;
     }
  |  ext_substatements revision_ext_alloc revision_stmt stmtsep
     { int i;

       for (i = 0; i < $2.index; ++i) {
         if (!strcmp($2.revision[i]->date, $2.revision[$2.index]->date)) {
           LOGWRN(trg->ctx, "Module's revisions are not unique (%s).", $2.revision[i]->date);
           break;
         }
       }
       if (yang_check_ext_instance(trg, &$2.revision[$2.index]->ext, $2.revision[$2.index]->ext_size,
                                   &$2.revision[$2.index], param->unres)) {
         YYABORT;
       }
       actual = ext_instance;
     }
  |  ext_substatements datadef_ext_check datadef_ext_stmt stmtsep { actual = ext_instance;
                                                                    is_ext_instance = 1;
                                                                  }
  |  ext_substatements not_supported_ext_check unknown_string unknown_statement3_opt_end

%%

void
yyerror(YYLTYPE *yylloc, void *scanner, struct yang_parameter *param, ...)
{
  free(*param->value);
  *param->value = NULL;
  if (yylloc->first_line != -1) {
    if (*param->data_node && (*param->data_node) == (*param->actual_node)) {
      LOGVAL(param->module->ctx, LYE_INSTMT, LY_VLOG_LYS, *param->data_node, yyget_text(scanner));
    } else {
      LOGVAL(param->module->ctx, LYE_INSTMT, LY_VLOG_NONE, NULL, yyget_text(scanner));
    }
  }
}