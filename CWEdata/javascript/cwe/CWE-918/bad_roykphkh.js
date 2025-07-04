{
  "openapi": "3.1.0",
  "info": {
    "title": "nocodb",
    "version": "1.0"
  },
  "servers": [
    {
      "url": "http://localhost:8080"
    }
  ],
  "paths": {
    "/api/v1/auth/user/signup": {
      "post": {
        "summary": "Signup",
        "operationId": "auth-signup",
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "token": {
                      "type": "string"
                    }
                  }
                },
                "examples": {
                  "Successful registration response": {
                    "value": {
                      "token": "string"
                    }
                  }
                }
              }
            }
          },
          "400": {
            "description": "Bad Request",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "msg": {
                      "type": "string"
                    }
                  }
                },
                "examples": {
                  "Invalid email": {
                    "value": {
                      "msg": "Invalid email"
                    }
                  },
                  "Invalid invite url": {
                    "value": {
                      "msg": "Invalid invite url"
                    }
                  },
                  "Expired invite url": {
                    "value": {
                      "msg": "Expired invite url, Please contact super admin to get a new invite url"
                    }
                  },
                  "User already exist": {
                    "value": {
                      "msg": "User already exist"
                    }
                  },
                  "Invite only signup": {
                    "value": {
                      "msg": "Not allowed to signup, contact super admin"
                    }
                  }
                }
              }
            }
          },
          "401": {
            "description": "Unauthorized"
          },
          "403": {
            "description": "Forbidden"
          }
        },
        "tags": [
          "Auth"
        ],
        "requestBody": {
          "$ref": "#/components/requestBodies/Signup"
        },
        "description": "Create a new user with provided email and password and first user is marked as super admin. "
      }
    },
    "/api/v1/auth/user/signin": {
      "post": {
        "summary": "Signin",
        "operationId": "auth-signin",
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "token": {
                      "type": "string"
                    }
                  }
                }
              }
            }
          },
          "400": {
            "description": "Bad Request",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "msg": {
                      "type": "string"
                    }
                  }
                }
              }
            }
          }
        },
        "tags": [
          "Auth"
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "properties": {
                  "email": {
                    "type": "string"
                  },
                  "password": {
                    "type": "string"
                  }
                },
                "required": [
                  "email",
                  "password"
                ]
              },
              "examples": {
                "example-1": {
                  "value": {
                    "email": "user@nocodb.com",
                    "password": "Password"
                  }
                }
              }
            }
          }
        },
        "description": "Authenticate existing user with their email and password. Successful login will return a JWT access-token. "
      },
      "parameters": []
    },
    "/api/v1/auth/user/me": {
      "parameters": [],
      "get": {
        "summary": "User info",
        "operationId": "auth-me",
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/UserInfo"
                },
                "examples": {
                  "example-1": {
                    "value": {
                      "id": "string",
                      "email": "string",
                      "email_verified": "string",
                      "firstname": "string",
                      "lastname": "string",
                      "roles": {
                        "editor": true
                      }
                    }
                  }
                }
              }
            }
          }
        },
        "tags": [
          "Auth"
        ],
        "description": "Returns authenticated user info",
        "parameters": [
          {
            "schema": {
              "type": "string"
            },
            "in": "query",
            "name": "project_id",
            "description": "Pass project id to get project specific roles along with user info"
          }
        ]
      }
    },
    "/api/v1/auth/password/forgot": {
      "post": {
        "summary": "Password forgot",
        "operationId": "auth-password-forgot",
        "responses": {
          "200": {
            "description": "OK"
          },
          "401": {
            "description": "Unauthorized"
          }
        },
        "description": "Emails user with a reset url.",
        "tags": [
          "Auth"
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "properties": {
                  "email": {
                    "type": "string"
                  }
                }
              }
            }
          },
          "description": "Pass registered user email id in request body"
        }
      },
      "parameters": []
    },
    "/api/v1/auth/password/change": {
      "post": {
        "summary": "Password change",
        "operationId": "auth-password-change",
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "msg": {
                      "type": "string"
                    }
                  }
                },
                "examples": {
                  "Success response": {
                    "value": {
                      "msg": "Password updated successfully"
                    }
                  }
                }
              }
            }
          },
          "400": {
            "description": "Bad request",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "msg": {
                      "type": "string"
                    }
                  }
                },
                "examples": {
                  "Missing params": {
                    "value": {
                      "msg": "Missing new/old password"
                    }
                  },
                  "Wrong password": {
                    "value": {
                      "msg": "Current password is wrong"
                    }
                  }
                }
              }
            }
          }
        },
        "description": "Change password of authenticated user with a new one.",
        "tags": [
          "Auth"
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "properties": {
                  "currentPassword": {
                    "type": "string"
                  },
                  "newPassword": {
                    "type": "string"
                  }
                }
              },
              "examples": {
                "example-1": {
                  "value": {
                    "currentPassword": "string",
                    "newPassword": "string"
                  }
                }
              }
            }
          },
          "description": "Old password need to be passed along with new password for changing password."
        }
      },
      "parameters": []
    },
    "/api/v1/auth/token/validate/{token}": {
      "post": {
        "summary": "Reset token verify",
        "operationId": "auth-password-reset-token-validate",
        "responses": {
          "200": {
            "description": "OK"
          }
        },
        "description": "Validtae password reset url token.",
        "tags": [
          "Auth"
        ]
      },
      "parameters": [
        {
          "schema": {
            "type": "string"
          },
          "name": "token",
          "in": "path",
          "required": true
        }
      ]
    },
    "/api/v1/auth/email/validate/{token}": {
      "post": {
        "summary": "Verify email",
        "operationId": "auth-email-validate",
        "responses": {
          "200": {
            "description": "OK"
          }
        },
        "description": "Api for verifying email where token need to be passed which is shared to user email.",
        "tags": [
          "Auth"
        ]
      },
      "parameters": [
        {
          "schema": {
            "type": "string"
          },
          "name": "token",
          "in": "path",
          "required": true
        }
      ]
    },
    "/api/v1/auth/password/reset/{token}": {
      "post": {
        "summary": "Password reset",
        "operationId": "auth-password-reset",
        "responses": {
          "200": {
            "description": "OK"
          }
        },
        "description": "Update user password to new by using reset token.",
        "tags": [
          "Auth"
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "properties": {
                  "new_password": {
                    "type": "string"
                  }
                }
              }
            }
          }
        }
      },
      "parameters": [
        {
          "schema": {
            "type": "string"
          },
          "name": "token",
          "in": "path",
          "required": true
        }
      ]
    },
    "/api/v1/auth/token/refresh": {
      "post": {
        "summary": "Refresh token",
        "operationId": "auth-token-refresh",
        "responses": {
          "200": {
            "description": "OK"
          }
        },
        "description": "",
        "tags": [
          "Auth"
        ]
      },
      "parameters": []
    },
    "/api/v1/db/meta/projects/{projectId}/users": {
      "get": {
        "summary": "Project users",
        "operationId": "auth-project-user-list",
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "users": {
                      "type": "object",
                      "properties": {
                        "list": {
                          "type": "array",
                          "uniqueItems": true,
                          "minItems": 1,
                          "items": {
                            "$ref": "#/components/schemas/User"
                          }
                        },
                        "pageInfo": {
                          "$ref": "#/components/schemas/Paginated"
                        }
                      },
                      "required": [
                        "list",
                        "pageInfo"
                      ]
                    }
                  }
                }
              }
            }
          }
        },
        "description": "",
        "tags": [
          "Auth"
        ]
      },
      "parameters": [
        {
          "schema": {
            "type": "string"
          },
          "name": "projectId",
          "in": "path",
          "required": true
        }
      ],
      "post": {
        "summary": "Project User Add",
        "operationId": "auth-project-user-add",
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "application/json": {
                "schema": {}
              }
            }
          }
        },
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {}
            }
          }
        },
        "tags": [
          "Auth"
        ]
      }
    },
    "/api/v1/db/meta/projects/{projectId}/info": {
      "parameters": [
        {
          "schema": {
            "type": "string"
          },
          "name": "projectId",
          "in": "path",
          "required": true
        }
      ],
      "get": {
        "summary": "Project info",
        "operationId": "project-meta-get",
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "Node": {
                      "type": "string"
                    },
                    "Arch": {
                      "type": "string"
                    },
                    "Platform": {
                      "type": "string"
                    },
                    "Docker": {
                      "type": "boolean"
                    },
                    "Database": {
                      "type": "string"
                    },
                    "ProjectOnRootDB": {
                      "type": "string"
                    },
                    "RootDB": {
                      "type": "string"
                    },
                    "PackageVersion": {
                      "type": "string"
                    }
                  }
                }
              }
            }
          }
        },
        "tags": [
          "Project"
        ],
        "parameters": [
          {
            "schema": {
              "type": "number",
              "minimum": 1,
              "multipleOf": 1
            },
            "in": "query"
          }
        ]
      }
    },
    "/api/v1/db/meta/projects/{projectId}/users/{userId}": {
      "parameters": [
        {
          "schema": {
            "type": "string"
          },
          "name": "projectId",
          "in": "path",
          "required": true
        },
        {
          "schema": {
            "type": "string"
          },
          "name": "userId",
          "in": "path",
          "required": true
        }
      ],
      "patch": {
        "summary": "Project user update",
        "operationId": "auth-project-user-update",
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "application/json": {
                "schema": {}
              }
            }
          }
        },
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {}
            }
          }
        },
        "tags": [
          "Auth"
        ]
      },
      "delete": {
        "summary": "Project user remove",
        "operationId": "auth-project-user-remove",
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "application/json": {
                "schema": {}
              }
            }
          }
        },
        "tags": [
          "Auth"
        ]
      }
    },
    "/api/v1/db/meta/projects/{projectId}/visibility-rules": {
      "get": {
        "summary": "UI ACL",
        "operationId": "project-model-visibility-list",
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "application/json": {
                "schema": {
                  "type": "array",
                  "items": {}
                }
              }
            }
          }
        },
        "description": "",
        "tags": [
          "Project"
        ],
        "parameters": [
          {
            "schema": {
              "type": "boolean"
            },
            "in": "query",
            "name": "includeM2M"
          }
        ]
      },
      "parameters": [
        {
          "schema": {
            "type": "string"
          },
          "name": "projectId",
          "in": "path",
          "required": true
        }
      ],
      "post": {
        "summary": "",
        "operationId": "project-model-visibility-set",
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "application/json": {
                "schema": {}
              }
            }
          }
        },
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {}
            }
          }
        },
        "tags": [
          "Project"
        ]
      }
    },
    "/api/v1/db/meta/projects/": {
      "parameters": [],
      "get": {
        "summary": "Project list",
        "operationId": "project-list",
        "responses": {
          "201": {
            "$ref": "#/components/responses/ProjectList"
          }
        },
        "description": "Read project details",
        "parameters": [
          {
            "schema": {
              "type": "number"
            },
            "in": "query",
            "name": "page"
          },
          {
            "schema": {
              "type": "number"
            },
            "in": "query",
            "name": "pageSize"
          },
          {
            "schema": {
              "type": "string"
            },
            "in": "query",
            "name": "sort"
          },
          {
            "schema": {
              "type": "string"
            },
            "in": "header",
            "name": "xc-auth",
            "description": "Auth token"
          }
        ],
        "tags": [
          "Project"
        ]
      },
      "post": {
        "summary": "Project create",
        "operationId": "project-create",
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Project"
                }
              }
            }
          }
        },
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "allOf": [
                  {
                    "$ref": "#/components/schemas/Project"
                  },
                  {
                    "type": "object",
                    "properties": {
                      "external": {
                        "type": "boolean",
                        "default": false
                      }
                    }
                  }
                ]
              }
            }
          }
        },
        "tags": [
          "Project"
        ]
      }
    },
    "/api/v1/db/meta/projects/{projectId}": {
      "parameters": [
        {
          "schema": {
            "type": "string"
          },
          "name": "projectId",
          "in": "path",
          "required": true
        }
      ],
      "get": {
        "summary": "Project read",
        "operationId": "project-read",
        "description": "Read project details",
        "parameters": [
          {
            "schema": {
              "type": "string"
            },
            "in": "header",
            "name": "xc-auth",
            "description": "Auth token"
          }
        ],
        "tags": [
          "Project"
        ],
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": {}
                }
              }
            }
          }
        }
      },
      "delete": {
        "summary": "Project delete",
        "operationId": "project-delete",
        "responses": {
          "200": {
            "description": "OK"
          }
        },
        "tags": [
          "Project"
        ]
      }
    },
    "/api/v1/db/meta/projects/{projectId}/shared": {
      "parameters": [
        {
          "schema": {
            "type": "string"
          },
          "name": "projectId",
          "in": "path",
          "required": true
        }
      ],
      "get": {
        "summary": "",
        "operationId": "project-shared-base-get",
        "description": "Read project details",
        "parameters": [
          {
            "schema": {
              "type": "string"
            },
            "in": "header",
            "name": "xc-auth",
            "description": "Auth token"
          }
        ],
        "tags": [
          "Project"
        ],
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "uuid": {
                      "type": "string"
                    },
                    "url": {
                      "type": "string"
                    }
                  }
                }
              }
            }
          }
        }
      },
      "delete": {
        "summary": "",
        "operationId": "project-shared-base-disable",
        "responses": {
          "200": {
            "description": "OK"
          }
        },
        "tags": [
          "Project"
        ]
      },
      "post": {
        "summary": "",
        "operationId": "project-shared-base-create",
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "url": {
                      "type": "string"
                    },
                    "uuid": {
                      "type": "string"
                    }
                  }
                }
              }
            }
          }
        },
        "tags": [
          "Project"
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "properties": {
                  "roles": {
                    "type": "string"
                  },
                  "password": {
                    "type": "string"
                  }
                }
              }
            }
          }
        }
      },
      "patch": {
        "summary": "",
        "operationId": "project-shared-base-update",
        "responses": {
          "200": {
            "description": "OK"
          }
        },
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "properties": {
                  "roles": {
                    "type": "string"
                  },
                  "password": {
                    "type": "string"
                  }
                }
              }
            }
          }
        },
        "tags": [
          "Project"
        ],
        "description": ""
      }
    },
    "/api/v1/db/meta/projects/{projectId}/cost": {
      "parameters": [
        {
          "schema": {
            "type": "string"
          },
          "name": "projectId",
          "in": "path",
          "required": true
        }
      ],
      "get": {
        "summary": "Project compare cost",
        "operationId": "project-cost",
        "description": "Project compare cost",
        "parameters": [
          {
            "schema": {
              "type": "string"
            },
            "in": "header",
            "name": "xc-auth",
            "description": "Auth token"
          }
        ],
        "tags": [
          "Project"
        ],
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": {}
                }
              }
            }
          }
        }
      }
    },
    "/api/v1/db/meta/projects/{projectId}/tables": {
      "parameters": [
        {
          "schema": {
            "type": "string"
          },
          "name": "projectId",
          "in": "path",
          "required": true
        }
      ],
      "post": {
        "summary": "",
        "operationId": "db-table-create",
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Table"
                }
              }
            }
          }
        },
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/TableReq"
              }
            }
          }
        },
        "tags": [
          "DB table"
        ]
      },
      "get": {
        "summary": "",
        "operationId": "db-table-list",
        "responses": {
          "200": {
            "$ref": "#/components/responses/TableList"
          }
        },
        "parameters": [
          {
            "schema": {
              "type": "string"
            },
            "in": "header",
            "name": "xc-auth"
          },
          {
            "schema": {
              "type": "number"
            },
            "in": "query",
            "name": "page"
          },
          {
            "schema": {
              "type": "number"
            },
            "in": "query",
            "name": "pageSize"
          },
          {
            "schema": {
              "type": "string"
            },
            "in": "query",
            "name": "sort"
          },
          {
            "schema": {
              "type": "boolean"
            },
            "in": "query",
            "name": "includeM2M"
          }
        ],
        "tags": [
          "DB table"
        ]
      }
    },
    "/api/v1/db/meta/tables/{tableId}": {
      "parameters": [
        {
          "schema": {
            "type": "string"
          },
          "name": "tableId",
          "in": "path",
          "required": true
        }
      ],
      "get": {
        "summary": "",
        "operationId": "db-table-read",
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/TableInfo"
                },
                "examples": {
                  "example-1": {
                    "value": {
                      "id": "string",
                      "fk_project_id": "string",
                      "fk_base_id": "string",
                      "title": "string",
                      "alias": "string",
                      "type": "string",
                      "enabled": "string",
                      "parent_id": "string",
                      "show_as": "string",
                      "tags": "string",
                      "pinned": true,
                      "deleted": true,
                      "order": 0,
                      "column": [
                        {
                          "id": "string",
                          "base_id": "string",
                          "fk_model_id": "string",
                          "title": "string",
                          "alias": "string",
                          "ui_data_type": "string",
                          "data_type": "string",
                          "numeric_precision": "string",
                          "numeric_scale": "string",
                          "character_maximum_length": "string",
                          "column_ordinal_position": "string",
                          "primary_key": "string",
                          "primary_value": "string",
                          "rqd": "string",
                          "un": "string",
                          "column_type": "string",
                          "auto_increment": "string",
                          "unique": "string",
                          "column_default": "string",
                          "column_comment": "string",
                          "character_set_name": "string",
                          "data_type_x": "string",
                          "data_type_x_precision": "string",
                          "data_type_x_scale": "string",
                          "auto_update_timestamp": true,
                          "deleted": true,
                          "visible": true,
                          "order": 0,
                          "colOptions": {
                            "id": "string",
                            "type": "string",
                            "virtual": true,
                            "fk_column_id": "string",
                            "fk_child_column_id": "string",
                            "fk_parent_column_id": "string",
                            "fk_mm_model_id": "string",
                            "fk_mm_child_column_id": "string",
                            "fk_mm_parent_column_id": "string",
                            "ur": "string",
                            "dr": "string",
                            "fk_index_name": "string",
                            "deleted": "string",
                            "order": "string"
                          }
                        }
                      ],
                      "filters": [
                        {
                          "id": "string",
                          "fk_model_id": "string",
                          "fk_column_id": "string",
                          "logical_op": "string",
                          "comparison_op": "string",
                          "value": "string",
                          "is_group": true,
                          "children": [
                            {}
                          ]
                        }
                      ],
                      "sort": [
                        {
                          "id": "string",
                          "fk_model_id": "string",
                          "fk_column_id": "string",
                          "direction": "string",
                          "order": 0
                        }
                      ]
                    }
                  }
                }
              }
            }
          }
        },
        "tags": [
          "DB table"
        ]
      },
      "patch": {
        "summary": "",
        "operationId": "db-table-update",
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "application/json": {
                "schema": {}
              }
            }
          }
        },
        "tags": [
          "DB table"
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "properties": {
                  "title": {
                    "type": "string"
                  }
                }
              }
            }
          }
        }
      },
      "delete": {
        "summary": "",
        "operationId": "db-table-delete",
        "responses": {
          "200": {
            "description": "OK"
          }
        },
        "tags": [
          "DB table"
        ],
        "description": ""
      }
    },
    "/api/v1/db/meta/tables/{tableId}/reorder": {
      "parameters": [
        {
          "schema": {
            "type": "string"
          },
          "name": "tableId",
          "in": "path",
          "required": true
        }
      ],
      "post": {
        "summary": "",
        "operationId": "db-table-reorder",
        "responses": {
          "200": {
            "description": "OK"
          }
        },
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "properties": {
                  "order": {
                    "type": "string"
                  }
                }
              }
            }
          }
        },
        "tags": [
          "DB table"
        ]
      }
    },
    "/api/v1/db/meta/tables/{tableId}/columns": {
      "parameters": [
        {
          "schema": {
            "type": "string"
          },
          "name": "tableId",
          "in": "path",
          "required": true
        }
      ],
      "post": {
        "summary": "Column create",
        "operationId": "db-table-column-create",
        "responses": {
          "200": {
            "description": "OK"
          }
        },
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/ColumnReq"
              }
            }
          }
        },
        "tags": [
          "DB table column"
        ]
      }
    },
    "/api/v1/db/meta/columns/{columnId}": {
      "parameters": [
        {
          "schema": {
            "type": "string"
          },
          "name": "columnId",
          "in": "path",
          "required": true
        }
      ],
      "patch": {
        "summary": "Column Update",
        "operationId": "db-table-column-update",
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Column"
                }
              }
            }
          }
        },
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/ColumnReq"
              }
            }
          }
        },
        "tags": [
          "DB table column"
        ]
      },
      "delete": {
        "summary": "",
        "operationId": "db-table-column-delete",
        "responses": {
          "200": {
            "description": "OK"
          }
        },
        "tags": [
          "DB table column"
        ]
      }
    },
    "/api/v1/db/meta/columns/{columnId}/primary": {
      "parameters": [
        {
          "schema": {
            "type": "string"
          },
          "name": "columnId",
          "in": "path",
          "required": true
        }
      ],
      "post": {
        "summary": "",
        "operationId": "db-table-column-primary-column-set",
        "responses": {
          "200": {
            "description": "OK"
          }
        },
        "tags": [
          "DB table column"
        ]
      }
    },
    "/api/v1/db/meta/tables/{tableId}/views": {
      "parameters": [
        {
          "schema": {
            "type": "string"
          },
          "name": "tableId",
          "in": "path",
          "required": true
        }
      ],
      "get": {
        "summary": "",
        "operationId": "db-view-list",
        "responses": {
          "200": {
            "$ref": "#/components/responses/ViewList"
          }
        },
        "tags": [
          "DB view"
        ],
        "description": ""
      }
    },
    "/api/v1/db/meta/views/{viewId}": {
      "parameters": [
        {
          "schema": {
            "type": "string"
          },
          "name": "viewId",
          "in": "path",
          "required": true
        }
      ],
      "patch": {
        "summary": "",
        "operationId": "db-view-update",
        "responses": {
          "200": {
            "description": "OK"
          }
        },
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "properties": {
                  "order": {
                    "type": "string"
                  },
                  "title": {
                    "type": "string"
                  },
                  "show_system_fields": {
                    "type": "boolean"
                  },
                  "lock_type": {
                    "type": "string",
                    "enum": [
                      "collaborative",
                      "locked",
                      "personal"
                    ]
                  }
                }
              }
            }
          }
        },
        "tags": [
          "DB view"
        ]
      },
      "delete": {
        "summary": "",
        "operationId": "db-view-delete",
        "responses": {
          "200": {
            "description": "OK"
          }
        },
        "tags": [
          "DB view"
        ]
      }
    },
    "/api/v1/db/meta/views/{viewId}/show-all": {
      "parameters": [
        {
          "schema": {
            "type": "string"
          },
          "name": "viewId",
          "in": "path",
          "required": true
        }
      ],
      "post": {
        "summary": "",
        "operationId": "db-view-show-all-column",
        "responses": {
          "200": {
            "description": "OK"
          }
        },
        "tags": [
          "DB view"
        ],
        "description": "",
        "parameters": [
          {
            "schema": {
              "type": "array"
            },
            "in": "query",
            "name": "ignoreIds"
          }
        ]
      }
    },
    "/api/v1/db/meta/views/{viewId}/hide-all": {
      "parameters": [
        {
          "schema": {
            "type": "string"
          },
          "name": "viewId",
          "in": "path",
          "required": true
        }
      ],
      "post": {
        "summary": "",
        "operationId": "db-view-hide-all-column",
        "responses": {
          "200": {
            "description": "OK"
          }
        },
        "tags": [
          "DB view"
        ],
        "parameters": [
          {
            "schema": {
              "type": "array"
            },
            "in": "query",
            "name": "ignoreIds"
          }
        ],
        "description": ""
      }
    },
    "/api/v1/db/meta/tables/{tableId}/share": {
      "parameters": [
        {
          "schema": {
            "type": "string"
          },
          "name": "tableId",
          "in": "path",
          "required": true
        }
      ],
      "get": {
        "summary": "Shared view list",
        "operationId": "db-view-share-list",
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "application/json": {
                "schema": {
                  "type": "array",
                  "items": {}
                }
              }
            }
          }
        },
        "description": "",
        "tags": [
          "DB view share"
        ]
      }
    },
    "/api/v1/db/meta/views/{viewId}/share": {
      "parameters": [
        {
          "schema": {
            "type": "string"
          },
          "name": "viewId",
          "in": "path",
          "required": true
        }
      ],
      "post": {
        "summary": "",
        "operationId": "db-view-share-create",
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "uuid": {
                      "type": "string"
                    }
                  }
                }
              }
            }
          }
        },
        "tags": [
          "DB view share"
        ]
      },
      "patch": {
        "summary": "",
        "operationId": "db-view-share-update",
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/SharedView"
                }
              }
            }
          }
        },
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "properties": {
                  "password": {
                    "type": "string"
                  }
                }
              }
            }
          },
          "description": ""
        },
        "tags": [
          "DB view share"
        ]
      },
      "delete": {
        "summary": "",
        "operationId": "db-view-share-delete",
        "responses": {
          "200": {
            "description": "OK"
          }
        },
        "description": "",
        "tags": [
          "DB view share"
        ]
      }
    },
    "/api/v1/db/meta/views/{viewId}/columns": {
      "parameters": [
        {
          "schema": {
            "type": "string"
          },
          "name": "viewId",
          "in": "path",
          "required": true
        }
      ],
      "get": {
        "summary": "",
        "operationId": "db-view-column-list",
        "responses": {},
        "tags": [
          "DB view column"
        ]
      },
      "post": {
        "summary": "",
        "operationId": "db-view-column-create",
        "responses": {
          "200": {
            "description": "OK"
          }
        },
        "tags": [
          "DB view column"
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {}
            }
          }
        }
      }
    },
    "/api/v1/db/meta/views/{viewId}/columns/{columnId}": {
      "parameters": [
        {
          "schema": {
            "type": "string"
          },
          "name": "viewId",
          "in": "path",
          "required": true
        },
        {
          "schema": {
            "type": "string"
          },
          "name": "columnId",
          "in": "path",
          "required": true
        }
      ],
      "patch": {
        "summary": "",
        "operationId": "db-view-column-update",
        "responses": {
          "200": {
            "description": "OK"
          }
        },
        "tags": [
          "DB view column"
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {}
            }
          }
        }
      }
    },
    "/api/v1/db/meta/views/{viewId}/sorts": {
      "parameters": [
        {
          "schema": {
            "type": "string"
          },
          "name": "viewId",
          "in": "path",
          "required": true
        }
      ],
      "get": {
        "summary": "",
        "operationId": "db-table-sort-list",
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "uuid": {
                      "type": "string"
                    },
                    "url": {
                      "type": "string"
                    }
                  }
                }
              }
            }
          }
        },
        "tags": [
          "DB table sort"
        ]
      },
      "post": {
        "summary": "",
        "operationId": "db-table-sort-create",
        "responses": {
          "200": {
            "description": "OK"
          }
        },
        "tags": [
          "DB table sort"
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/Sort"
              }
            }
          }
        }
      }
    },
    "/api/v1/db/meta/sorts/{sortId}": {
      "parameters": [
        {
          "schema": {
            "type": "string"
          },
          "name": "sortId",
          "in": "path",
          "required": true
        }
      ],
      "get": {
        "summary": "",
        "operationId": "db-table-sort-get",
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Sort"
                }
              }
            }
          }
        },
        "tags": [
          "DB table sort"
        ]
      },
      "patch": {
        "summary": "",
        "operationId": "db-table-sort-update",
        "responses": {
          "200": {
            "description": "OK"
          }
        },
        "tags": [
          "DB table sort"
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/Sort"
              }
            }
          }
        }
      },
      "delete": {
        "summary": "",
        "operationId": "db-table-sort-delete",
        "responses": {
          "200": {
            "description": "OK"
          }
        },
        "tags": [
          "DB table sort"
        ]
      }
    },
    "/api/v1/db/meta/views/{viewId}/filters": {
      "parameters": [
        {
          "schema": {
            "type": "string"
          },
          "name": "viewId",
          "in": "path",
          "required": true
        }
      ],
      "get": {
        "summary": "",
        "operationId": "db-table-filter-read",
        "responses": {
          "200": {
            "$ref": "#/components/responses/FilterList"
          }
        },
        "tags": [
          "DB table filter"
        ]
      },
      "post": {
        "summary": "",
        "operationId": "db-table-filter-create",
        "responses": {
          "200": {
            "description": "OK"
          }
        },
        "tags": [
          "DB table filter"
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/Filter"
              }
            }
          }
        }
      }
    },
    "/api/v1/db/meta/hooks/{hookId}/filters": {
      "parameters": [
        {
          "schema": {
            "type": "string"
          },
          "name": "hookId",
          "in": "path",
          "required": true
        }
      ],
      "get": {
        "summary": "",
        "operationId": "db-table-webhook-filter-read",
        "responses": {
          "200": {
            "$ref": "#/components/responses/FilterList"
          }
        },
        "tags": [
          "DB table webhook filter"
        ]
      },
      "post": {
        "summary": "",
        "operationId": "db-table-webhook-filter-create",
        "responses": {
          "200": {
            "description": "OK"
          }
        },
        "tags": [
          "DB table webhook filter"
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/Filter"
              }
            }
          }
        }
      }
    },
    "/api/v1/db/meta/filters/{filterId}": {
      "parameters": [
        {
          "schema": {
            "type": "string"
          },
          "name": "filterId",
          "in": "path",
          "required": true
        }
      ],
      "get": {
        "summary": "",
        "operationId": "db-table-filter-get",
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Filter"
                }
              }
            }
          }
        },
        "tags": [
          "DB table filter"
        ]
      },
      "patch": {
        "summary": "",
        "operationId": "db-table-filter-update",
        "responses": {
          "200": {
            "description": "OK"
          }
        },
        "tags": [
          "DB table filter"
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/Filter"
              }
            }
          }
        }
      },
      "delete": {
        "summary": "",
        "operationId": "db-table-filter-delete",
        "responses": {
          "200": {
            "description": "OK"
          }
        },
        "tags": [
          "DB table filter"
        ]
      }
    },
    "/api/v1/db/meta/filters/{filterGroupId}/children": {
      "parameters": [
        {
          "schema": {
            "type": "string"
          },
          "name": "filterGroupId",
          "in": "path",
          "required": true
        }
      ],
      "get": {
        "summary": "",
        "operationId": "db-table-filter-children-read",
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Filter"
                }
              }
            }
          }
        },
        "tags": [
          "DB table filter"
        ]
      }
    },
    "/api/v1/db/meta/tables/{tableId}/grids": {
      "parameters": [
        {
          "schema": {
            "type": "string"
          },
          "name": "tableId",
          "in": "path",
          "required": true
        }
      ],
      "post": {
        "summary": "",
        "operationId": "db-view-grid-create",
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Grid"
                }
              }
            }
          }
        },
        "tags": [
          "DB view"
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/Grid"
              }
            }
          }
        }
      }
    },
    "/api/v1/db/meta/tables/{tableId}/forms": {
      "parameters": [
        {
          "schema": {
            "type": "string"
          },
          "name": "tableId",
          "in": "path",
          "required": true
        }
      ],
      "post": {
        "summary": "",
        "operationId": "db-view-form-create",
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Form"
                }
              }
            }
          }
        },
        "description": "",
        "tags": [
          "DB view"
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/Form"
              }
            }
          }
        }
      }
    },
    "/api/v1/db/meta/forms/{formId}": {
      "parameters": [
        {
          "schema": {
            "type": "string"
          },
          "name": "formId",
          "in": "path",
          "required": true
        }
      ],
      "patch": {
        "summary": "",
        "operationId": "db-view-form-update",
        "responses": {
          "200": {
            "description": "OK"
          }
        },
        "tags": [
          "DB view"
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/Form"
              }
            }
          }
        }
      },
      "get": {
        "summary": "",
        "operationId": "db-view-form-read",
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Form"
                }
              }
            }
          }
        },
        "tags": [
          "DB view"
        ]
      }
    },
    "/api/v1/db/meta/form-columns/{formViewColumnId}": {
      "parameters": [
        {
          "schema": {
            "type": "string"
          },
          "name": "formViewColumnId",
          "in": "path",
          "required": true
        }
      ],
      "patch": {
        "summary": "",
        "operationId": "db-view-form-column-update",
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": ""
                }
              }
            }
          }
        },
        "tags": [
          "DB view"
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/FormColumn"
              }
            }
          }
        }
      }
    },
    "/api/v1/db/meta/grids/{gridId}/grid-columns": {
      "parameters": [
        {
          "schema": {
            "type": "string"
          },
          "name": "gridId",
          "in": "path",
          "required": true
        }
      ],
      "get": {
        "summary": "",
        "operationId": "db-view-grid-columns-list",
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "application/json": {
                "schema": {
                  "type": "array",
                  "items": {
                    "$ref": "#/components/schemas/GridColumn"
                  }
                }
              }
            }
          }
        },
        "tags": [
          "DB view"
        ]
      }
    },
    "/api/v1/db/meta/grid-columns/{columnId}": {
      "parameters": [
        {
          "schema": {
            "type": "string"
          },
          "name": "columnId",
          "in": "path",
          "required": true
        }
      ],
      "patch": {
        "summary": "",
        "operationId": "db-view-grid-column-update",
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "application/json": {
                "schema": {}
              }
            }
          }
        },
        "tags": [
          "DB view"
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/GridColumn"
              }
            }
          }
        }
      }
    },
    "/api/v1/db/meta/tables/{tableId}/galleries": {
      "parameters": [
        {
          "schema": {
            "type": "string"
          },
          "name": "tableId",
          "in": "path",
          "required": true
        }
      ],
      "post": {
        "summary": "",
        "operationId": "db-view-gallery-create",
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": {}
                }
              }
            }
          }
        },
        "tags": [
          "DB view"
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/Gallery"
              }
            }
          }
        }
      }
    },
    "/api/v1/db/meta/galleries/{galleryId}": {
      "parameters": [
        {
          "schema": {
            "type": "string"
          },
          "name": "galleryId",
          "in": "path",
          "required": true
        }
      ],
      "patch": {
        "summary": "",
        "operationId": "db-view-gallery-update",
        "responses": {
          "200": {
            "description": "OK"
          }
        },
        "tags": [
          "DB view"
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/Gallery"
              }
            }
          }
        }
      },
      "get": {
        "summary": "",
        "operationId": "db-view-gallery-read",
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Gallery"
                }
              }
            }
          }
        },
        "tags": [
          "DB view"
        ]
      }
    },
    "/api/v1/db/meta/projects/{projectId}/meta-diff": {
      "parameters": [
        {
          "schema": {
            "type": "string"
          },
          "name": "projectId",
          "in": "path",
          "required": true
        }
      ],
      "post": {
        "summary": "",
        "operationId": "project-meta-diff-sync",
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "application/json": {
                "schema": {}
              }
            }
          }
        },
        "tags": [
          "Project"
        ]
      },
      "get": {
        "summary": "",
        "operationId": "project-meta-diff-get",
        "parameters": [],
        "tags": [
          "Project"
        ],
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "application/json": {
                "schema": {}
              }
            }
          }
        }
      }
    },
    "/api/v1/db/data/{orgs}/{projectName}/{tableName}": {
      "parameters": [
        {
          "schema": {
            "type": "string"
          },
          "name": "orgs",
          "in": "path",
          "required": true
        },
        {
          "schema": {
            "type": "string"
          },
          "name": "projectName",
          "in": "path",
          "required": true
        },
        {
          "schema": {
            "type": "string"
          },
          "name": "tableName",
          "in": "path",
          "required": true
        }
      ],
      "get": {
        "summary": "Table row list",
        "operationId": "db-table-row-list",
        "description": "",
        "tags": [
          "DB table row"
        ],
        "parameters": [
          {
            "schema": {
              "type": "array"
            },
            "in": "query",
            "name": "fields"
          },
          {
            "schema": {
              "type": "array"
            },
            "in": "query",
            "name": "sort"
          },
          {
            "schema": {
              "type": "string"
            },
            "in": "query",
            "name": "where"
          }
        ],
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "application/json": {
                "schema": {}
              }
            }
          }
        }
      },
      "post": {
        "summary": "Table row create",
        "operationId": "db-table-row-create",
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "application/json": {
                "schema": {}
              }
            }
          }
        },
        "tags": [
          "DB table row"
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {}
            }
          }
        }
      }
    },
    "/api/v1/db/data/{orgs}/{projectName}/{tableName}/find-one": {
      "parameters": [
        {
          "schema": {
            "type": "string"
          },
          "name": "orgs",
          "in": "path",
          "required": true
        },
        {
          "schema": {
            "type": "string"
          },
          "name": "projectName",
          "in": "path",
          "required": true
        },
        {
          "schema": {
            "type": "string"
          },
          "name": "tableName",
          "in": "path",
          "required": true
        }
      ],
      "get": {
        "summary": "Table row FindOne",
        "operationId": "db-table-row-find-one",
        "description": "",
        "tags": [
          "DB table row"
        ],
        "parameters": [
          {
            "schema": {
              "type": "array"
            },
            "in": "query",
            "name": "fields"
          },
          {
            "schema": {
              "type": "array"
            },
            "in": "query",
            "name": "sort"
          },
          {
            "schema": {
              "type": "string"
            },
            "in": "query",
            "name": "where"
          }
        ],
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "application/json": {
                "schema": {}
              }
            }
          }
        }
      }
    },
    "/api/v1/db/data/{orgs}/{projectName}/{tableName}/groupby": {
      "parameters": [
        {
          "schema": {
            "type": "string"
          },
          "name": "orgs",
          "in": "path",
          "required": true
        },
        {
          "schema": {
            "type": "string"
          },
          "name": "projectName",
          "in": "path",
          "required": true
        },
        {
          "schema": {
            "type": "string"
          },
          "name": "tableName",
          "in": "path",
          "required": true
        },
        {
          "schema": {
            "type": "string"
          },
          "in": "query",
          "name": "column_name",
          "description": "Column name of the column you want to group by, eg. `column_name=column1`"
        }
      ],
      "get": {
        "summary": "Table row Group by",
        "operationId": "db-table-row-group-by",
        "description": "",
        "tags": [
          "DB table row"
        ],
        "parameters": [
          {
            "schema": {
              "type": "array"
            },
            "in": "query",
            "name": "sort"
          },
          {
            "schema": {
              "type": "string"
            },
            "in": "query",
            "name": "where"
          },
          {
            "schema": {
              "type": "number"
            },
            "in": "query",
            "name": "limit"
          },
          {
            "schema": {
              "type": "number"
            },
            "in": "query",
            "name": "offset"
          }
        ],
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "application/json": {
                "schema": {}
              }
            }
          }
        }
      }
    },
    "/api/v1/db/data/{orgs}/{projectName}/{tableName}/views/{viewName}": {
      "parameters": [
        {
          "schema": {
            "type": "string"
          },
          "name": "orgs",
          "in": "path",
          "required": true
        },
        {
          "schema": {
            "type": "string"
          },
          "name": "projectName",
          "in": "path",
          "required": true
        },
        {
          "schema": {
            "type": "string"
          },
          "name": "tableName",
          "in": "path",
          "required": true
        },
        {
          "schema": {
            "type": "string"
          },
          "name": "viewName",
          "in": "path",
          "required": true
        }
      ],
      "get": {
        "summary": "Table view row list",
        "operationId": "db-view-row-list",
        "description": "",
        "tags": [
          "DB view row"
        ],
        "parameters": [
          {
            "schema": {
              "type": "array"
            },
            "in": "query",
            "name": "fields"
          },
          {
            "schema": {
              "type": "array"
            },
            "in": "query",
            "name": "sort"
          },
          {
            "schema": {
              "type": "string"
            },
            "in": "query",
            "name": "where"
          },
          {
            "schema": {},
            "in": "query",
            "name": "nested",
            "description": "Query params for nested data"
          }
        ],
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "application/json": {
                "schema": {}
              }
            }
          }
        }
      },
      "post": {
        "summary": "Table view row create",
        "operationId": "db-view-row-create",
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "application/json": {
                "schema": {}
              }
            }
          }
        },
        "tags": [
          "DB view row"
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {}
            }
          }
        }
      }
    },
    "/api/v1/db/data/{orgs}/{projectName}/{tableName}/views/{viewName}/find-one": {
      "parameters": [
        {
          "schema": {
            "type": "string"
          },
          "name": "orgs",
          "in": "path",
          "required": true
        },
        {
          "schema": {
            "type": "string"
          },
          "name": "projectName",
          "in": "path",
          "required": true
        },
        {
          "schema": {
            "type": "string"
          },
          "name": "tableName",
          "in": "path",
          "required": true
        },
        {
          "schema": {
            "type": "string"
          },
          "name": "viewName",
          "in": "path",
          "required": true
        }
      ],
      "get": {
        "summary": "Table view row FindOne",
        "operationId": "db-view-row-find-one",
        "description": "",
        "tags": [
          "DB view row"
        ],
        "parameters": [
          {
            "schema": {
              "type": "array"
            },
            "in": "query",
            "name": "fields"
          },
          {
            "schema": {
              "type": "array"
            },
            "in": "query",
            "name": "sort"
          },
          {
            "schema": {
              "type": "string"
            },
            "in": "query",
            "name": "where"
          },
          {
            "schema": {},
            "in": "query",
            "name": "nested",
            "description": "Query params for nested data"
          }
        ],
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "application/json": {
                "schema": {}
              }
            }
          }
        }
      }
    },
    "/api/v1/db/data/{orgs}/{projectName}/{tableName}/views/{viewName}/groupby": {
      "parameters": [
        {
          "schema": {
            "type": "string"
          },
          "name": "orgs",
          "in": "path",
          "required": true
        },
        {
          "schema": {
            "type": "string"
          },
          "name": "projectName",
          "in": "path",
          "required": true
        },
        {
          "schema": {
            "type": "string"
          },
          "name": "tableName",
          "in": "path",
          "required": true
        },
        {
          "schema": {
            "type": "string"
          },
          "name": "viewName",
          "in": "path",
          "required": true
        },
        {
          "schema": {
            "type": "string"
          },
          "in": "query",
          "name": "column_name",
          "description": "Column name of the column you want to group by, eg. `column_name=column1`"
        }
      ],
      "get": {
        "summary": "Table view row Group by",
        "operationId": "db-view-row-group-by",
        "description": "",
        "tags": [
          "DB view row"
        ],
        "parameters": [
          {
            "schema": {
              "type": "array"
            },
            "in": "query",
            "name": "sort"
          },
          {
            "schema": {
              "type": "string"
            },
            "in": "query",
            "name": "where"
          },
          {
            "schema": {
              "type": "number"
            },
            "in": "query",
            "name": "limit"
          },
          {
            "schema": {
              "type": "number"
            },
            "in": "query",
            "name": "offset"
          }
        ],
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "application/json": {
                "schema": {}
              }
            }
          }
        }
      }
    },
    "/api/v1/db/data/{orgs}/{projectName}/{tableName}/views/{viewName}/count": {
      "parameters": [
        {
          "schema": {
            "type": "string"
          },
          "name": "orgs",
          "in": "path",
          "required": true
        },
        {
          "schema": {
            "type": "string"
          },
          "name": "projectName",
          "in": "path",
          "required": true
        },
        {
          "schema": {
            "type": "string"
          },
          "name": "tableName",
          "in": "path",
          "required": true
        },
        {
          "schema": {
            "type": "string"
          },
          "name": "viewName",
          "in": "path",
          "required": true
        }
      ],
      "get": {
        "summary": "Table view rows count",
        "operationId": "db-view-row-count",
        "description": "",
        "tags": [
          "DB view row"
        ],
        "parameters": [
          {
            "schema": {
              "type": "string"
            },
            "in": "query",
            "name": "where"
          },
          {
            "schema": {},
            "in": "query",
            "name": "nested",
            "description": "Query params for nested data"
          }
        ],
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "application/json": {
                "schema": {}
              }
            }
          }
        }
      }
    },
    "/api/v1/db/data/{orgs}/{projectName}/{tableName}/views/{viewName}/{rowId}": {
      "parameters": [
        {
          "schema": {
            "type": "string"
          },
          "name": "orgs",
          "in": "path",
          "required": true
        },
        {
          "schema": {
            "type": "string"
          },
          "name": "projectName",
          "in": "path",
          "required": true
        },
        {
          "schema": {
            "type": "string"
          },
          "name": "tableName",
          "in": "path",
          "required": true
        },
        {
          "schema": {
            "type": "string"
          },
          "name": "viewName",
          "in": "path",
          "required": true
        },
        {
          "schema": {
            "type": "string"
          },
          "name": "rowId",
          "in": "path",
          "required": true
        }
      ],
      "get": {
        "summary": "Table view row read",
        "operationId": "db-view-row-read",
        "responses": {
          "201": {
            "description": "Created",
            "content": {
              "application/json": {
                "schema": {}
              }
            }
          }
        },
        "description": "",
        "tags": [
          "DB view row"
        ]
      },
      "patch": {
        "summary": "Table view row update",
        "operationId": "db-view-row-update",
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "application/json": {
                "schema": {}
              }
            }
          }
        },
        "tags": [
          "DB view row"
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {}
            }
          }
        }
      },
      "delete": {
        "summary": "Table view row delete",
        "operationId": "db-view-row-delete",
        "responses": {
          "200": {
            "description": "OK"
          }
        },
        "tags": [
          "DB view row"
        ],
        "description": ""
      }
    },
    "/api/v1/db/data/{orgs}/{projectName}/{tableName}/views/{viewName}/{rowId}/exist": {
      "parameters": [
        {
          "schema": {
            "type": "string"
          },
          "name": "orgs",
          "in": "path",
          "required": true
        },
        {
          "schema": {
            "type": "string"
          },
          "name": "projectName",
          "in": "path",
          "required": true
        },
        {
          "schema": {
            "type": "string"
          },
          "name": "tableName",
          "in": "path",
          "required": true
        },
        {
          "schema": {
            "type": "string"
          },
          "name": "viewName",
          "in": "path",
          "required": true
        },
        {
          "schema": {
            "type": "string"
          },
          "name": "rowId",
          "in": "path",
          "required": true
        }
      ],
      "get": {
        "summary": "Table view row exist",
        "operationId": "db-view-row-exist",
        "responses": {
          "201": {
            "description": "Created",
            "content": {
              "application/json": {
                "schema": {}
              }
            }
          }
        },
        "description": "check row with provided primary key exists or not",
        "tags": [
          "DB view row"
        ]
      }
    },
    "/api/v1/db/data/{orgs}/{projectName}/{tableName}/{rowId}": {
      "parameters": [
        {
          "schema": {
            "type": "string"
          },
          "name": "orgs",
          "in": "path",
          "required": true
        },
        {
          "schema": {
            "type": "string"
          },
          "name": "projectName",
          "in": "path",
          "required": true
        },
        {
          "schema": {
            "type": "string"
          },
          "name": "tableName",
          "in": "path",
          "required": true
        },
        {
          "schema": {
            "type": "string"
          },
          "name": "rowId",
          "in": "path",
          "required": true
        }
      ],
      "get": {
        "summary": "Table row read",
        "operationId": "db-table-row-read",
        "responses": {
          "201": {
            "description": "Created",
            "content": {
              "application/json": {
                "schema": {}
              }
            }
          }
        },
        "description": "",
        "tags": [
          "DB table row"
        ]
      },
      "patch": {
        "summary": "Table row update",
        "operationId": "db-table-row-update",
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "application/json": {
                "schema": {}
              }
            }
          }
        },
        "tags": [
          "DB table row"
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {}
            }
          }
        }
      },
      "delete": {
        "summary": "Table row delete",
        "operationId": "db-table-row-delete",
        "responses": {
          "200": {
            "description": "OK"
          }
        },
        "tags": [
          "DB table row"
        ],
        "description": ""
      }
    },
    "/api/v1/db/data/{orgs}/{projectName}/{tableName}/{rowId}/exist": {
      "parameters": [
        {
          "schema": {
            "type": "string"
          },
          "name": "orgs",
          "in": "path",
          "required": true
        },
        {
          "schema": {
            "type": "string"
          },
          "name": "projectName",
          "in": "path",
          "required": true
        },
        {
          "schema": {
            "type": "string"
          },
          "name": "tableName",
          "in": "path",
          "required": true
        },
        {
          "schema": {
            "type": "string"
          },
          "name": "rowId",
          "in": "path",
          "required": true
        }
      ],
      "get": {
        "summary": "Table row exist",
        "operationId": "db-table-row-exist",
        "responses": {
          "201": {
            "description": "Created",
            "content": {
              "application/json": {
                "schema": {}
              }
            }
          }
        },
        "description": "check row with provided primary key exists or not",
        "tags": [
          "DB table row"
        ]
      }
    },
    "/api/v1/db/data/bulk/{orgs}/{projectName}/{tableName}": {
      "parameters": [
        {
          "schema": {
            "type": "string"
          },
          "name": "orgs",
          "in": "path",
          "required": true
        },
        {
          "schema": {
            "type": "string"
          },
          "name": "projectName",
          "in": "path",
          "required": true
        },
        {
          "schema": {
            "type": "string"
          },
          "name": "tableName",
          "in": "path",
          "required": true
        }
      ],
      "post": {
        "summary": "Bulk insert table rows",
        "operationId": "db-table-row-bulk-create",
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "application/json": {
                "schema": {}
              }
            }
          }
        },
        "tags": [
          "DB table row"
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {}
            }
          }
        }
      },
      "patch": {
        "summary": "Bulk update all table rows by IDs",
        "operationId": "db-table-row-bulk-update",
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "application/json": {
                "schema": {}
              }
            }
          }
        },
        "tags": [
          "DB table row"
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {}
            }
          }
        }
      },
      "delete": {
        "summary": "Bulk delete all table rows by IDs",
        "operationId": "db-table-row-bulk-delete",
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "application/json": {
                "schema": {}
              }
            }
          }
        },
        "tags": [
          "DB table row"
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {}
            }
          }
        }
      }
    },
    "/api/v1/db/data/bulk/{orgs}/{projectName}/{tableName}/all": {
      "parameters": [
        {
          "schema": {
            "type": "string"
          },
          "name": "orgs",
          "in": "path",
          "required": true
        },
        {
          "schema": {
            "type": "string"
          },
          "name": "projectName",
          "in": "path",
          "required": true
        },
        {
          "schema": {
            "type": "string"
          },
          "name": "tableName",
          "in": "path",
          "required": true
        }
      ],
      "patch": {
        "summary": "Bulk update all table rows with conditions",
        "operationId": "db-table-row-bulk-update-all",
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "application/json": {
                "schema": {}
              }
            }
          }
        },
        "tags": [
          "DB table row"
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {}
            }
          }
        }
      },
      "delete": {
        "summary": "Bulk delete all table rows with conditions",
        "operationId": "db-table-row-bulk-delete-all",
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "application/json": {
                "schema": {}
              }
            }
          }
        },
        "tags": [
          "DB table row"
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {}
            }
          }
        }
      }
    },
    "/api/v1/db/data/{orgs}/{projectName}/{tableName}/views/{viewName}/export/{type}": {
      "parameters": [
        {
          "schema": {
            "type": "string"
          },
          "name": "orgs",
          "in": "path",
          "required": true
        },
        {
          "schema": {
            "type": "string"
          },
          "name": "projectName",
          "in": "path",
          "required": true
        },
        {
          "schema": {
            "type": "string"
          },
          "name": "tableName",
          "in": "path",
          "required": true
        },
        {
          "schema": {
            "type": "string"
          },
          "name": "viewName",
          "in": "path",
          "required": true
        },
        {
          "schema": {
            "type": "string",
            "enum": [
              "csv",
              "excel"
            ]
          },
          "name": "type",
          "in": "path",
          "required": true
        }
      ],
      "get": {
        "summary": "Table view rows export",
        "operationId": "db-view-row-export",
        "description": "CSV or Excel export",
        "tags": [
          "DB view row"
        ],
        "wrapped": true,
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "application/octet-stream": {
                "schema": {}
              }
            },
            "headers": {
              "nc-export-offset": {
                "schema": {
                  "type": "integer"
                }
              }
            }
          }
        },
        "parameters": []
      }
    },
    "/api/v1/db/data/{orgs}/{projectName}/{tableName}/export/{type}": {
      "parameters": [
        {
          "schema": {
            "type": "string"
          },
          "name": "orgs",
          "in": "path",
          "required": true
        },
        {
          "schema": {
            "type": "string"
          },
          "name": "projectName",
          "in": "path",
          "required": true
        },
        {
          "schema": {
            "type": "string"
          },
          "name": "tableName",
          "in": "path",
          "required": true
        },
        {
          "schema": {
            "type": "string",
            "enum": [
              "csv",
              "excel"
            ]
          },
          "name": "type",
          "in": "path",
          "required": true
        }
      ],
      "get": {
        "summary": "Tablerows export",
        "operationId": "db-table-row-csv-export",
        "description": "CSV or Excel export",
        "tags": [
          "DB table row"
        ],
        "wrapped": true,
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "application/octet-stream": {
                "schema": {}
              }
            },
            "headers": {
              "nc-export-offset": {
                "schema": {
                  "type": "integer"
                }
              }
            }
          }
        },
        "parameters": []
      }
    },
    "/api/v1/db/data/{orgs}/{projectName}/{tableName}/{rowId}/{relationType}/{columnName}": {
      "parameters": [
        {
          "schema": {
            "type": "string"
          },
          "name": "orgs",
          "in": "path",
          "required": true
        },
        {
          "schema": {
            "type": "string"
          },
          "name": "projectName",
          "in": "path",
          "required": true
        },
        {
          "schema": {
            "type": "string"
          },
          "name": "tableName",
          "in": "path",
          "required": true
        },
        {
          "schema": {
            "type": "string"
          },
          "name": "rowId",
          "in": "path",
          "required": true
        },
        {
          "schema": {
            "type": "string",
            "enum": [
              "mm",
              "hm"
            ]
          },
          "name": "relationType",
          "in": "path",
          "required": true
        },
        {
          "schema": {
            "type": "string"
          },
          "name": "columnName",
          "in": "path",
          "required": true
        }
      ],
      "get": {
        "summary": "Nested relations row list",
        "operationId": "db-table-row-nested-list",
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "application/json": {
                "schema": {}
              }
            }
          }
        },
        "tags": [
          "DB table row"
        ],
        "parameters": [
          {
            "schema": {
              "type": "string"
            },
            "in": "query",
            "name": "limit"
          },
          {
            "schema": {
              "type": "string"
            },
            "in": "query",
            "name": "offset"
          }
        ]
      }
    },
    "/api/v1/db/data/{orgs}/{projectName}/{tableName}/{rowId}/{relationType}/{columnName}/{refRowId}": {
      "parameters": [
        {
          "schema": {
            "type": "string"
          },
          "name": "orgs",
          "in": "path",
          "required": true
        },
        {
          "schema": {
            "type": "string"
          },
          "name": "projectName",
          "in": "path",
          "required": true
        },
        {
          "schema": {
            "type": "string"
          },
          "name": "tableName",
          "in": "path",
          "required": true
        },
        {
          "schema": {
            "type": "string"
          },
          "name": "rowId",
          "in": "path",
          "required": true
        },
        {
          "schema": {
            "type": "string",
            "enum": [
              "mm",
              "hm"
            ]
          },
          "name": "relationType",
          "in": "path",
          "required": true
        },
        {
          "schema": {
            "type": "string"
          },
          "name": "columnName",
          "in": "path",
          "required": true
        },
        {
          "schema": {
            "type": "string"
          },
          "name": "refRowId",
          "in": "path",
          "required": true
        }
      ],
      "post": {
        "summary": "Nested relations row add",
        "operationId": "db-table-row-nested-add",
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "application/json": {
                "schema": {}
              }
            }
          }
        },
        "tags": [
          "DB table row"
        ],
        "parameters": [
          {
            "schema": {
              "type": "string"
            },
            "in": "query",
            "name": "limit"
          },
          {
            "schema": {
              "type": "string"
            },
            "in": "query",
            "name": "offset"
          }
        ],
        "description": ""
      },
      "delete": {
        "summary": "Nested relations row remove",
        "operationId": "db-table-row-nested-remove",
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "application/json": {
                "schema": {}
              }
            }
          }
        },
        "tags": [
          "DB table row"
        ]
      }
    },
    "/api/v1/db/data/{orgs}/{projectName}/{tableName}/{rowId}/{relationType}/{columnName}/exclude": {
      "parameters": [
        {
          "schema": {
            "type": "string"
          },
          "name": "orgs",
          "in": "path",
          "required": true
        },
        {
          "schema": {
            "type": "string"
          },
          "name": "projectName",
          "in": "path",
          "required": true
        },
        {
          "schema": {
            "type": "string"
          },
          "name": "tableName",
          "in": "path",
          "required": true
        },
        {
          "schema": {
            "type": "string"
          },
          "name": "rowId",
          "in": "path",
          "required": true
        },
        {
          "schema": {
            "type": "string",
            "enum": [
              "mm",
              "hm"
            ]
          },
          "name": "relationType",
          "in": "path",
          "required": true
        },
        {
          "schema": {
            "type": "string"
          },
          "name": "columnName",
          "in": "path",
          "required": true
        }
      ],
      "get": {
        "summary": "Referenced tables rows excluding current records children/parent",
        "operationId": "db-table-row-nested-children-excluded-list",
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "application/json": {
                "schema": {}
              }
            }
          }
        },
        "tags": [
          "DB table row"
        ],
        "parameters": [
          {
            "schema": {
              "type": "string"
            },
            "in": "query",
            "name": "limit"
          },
          {
            "schema": {
              "type": "string"
            },
            "in": "query",
            "name": "offset"
          }
        ]
      }
    },
    "/api/v1/db/public/shared-view/{sharedViewUuid}/rows": {
      "parameters": [
        {
          "schema": {
            "type": "string"
          },
          "name": "sharedViewUuid",
          "in": "path",
          "required": true
        },
        {
          "schema": {
            "type": "string"
          },
          "in": "header",
          "name": "xc-password",
          "description": "Shared view password"
        }
      ],
      "get": {
        "summary": "",
        "operationId": "public-data-list",
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "application/json": {
                "schema": {}
              }
            }
          }
        },
        "tags": [
          "Public"
        ],
        "parameters": [
          {
            "schema": {
              "type": "string"
            },
            "in": "query",
            "name": "limit"
          },
          {
            "schema": {
              "type": "string"
            },
            "in": "query",
            "name": "offset"
          }
        ]
      },
      "post": {
        "summary": "",
        "operationId": "public-data-create",
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "application/json": {
                "schema": {}
              }
            }
          }
        },
        "requestBody": {
          "content": {
            "multipart/form-data": {
              "schema": {
                "type": "object",
                "properties": {}
              }
            }
          }
        },
        "tags": [
          "Public"
        ],
        "parameters": [
          {
            "schema": {
              "type": "string"
            },
            "in": "header"
          }
        ]
      }
    },
    "/api/v1/db/public/shared-view/{sharedViewUuid}/rows/{rowId}/{relationType}/{columnName}": {
      "parameters": [
        {
          "schema": {
            "type": "string"
          },
          "name": "sharedViewUuid",
          "in": "path",
          "required": true
        },
        {
          "schema": {
            "type": "string"
          },
          "name": "rowId",
          "in": "path",
          "required": true
        },
        {
          "schema": {
            "type": "string",
            "enum": [
              "mm",
              "hm"
            ]
          },
          "name": "relationType",
          "in": "path",
          "required": true
        },
        {
          "schema": {
            "type": "string"
          },
          "name": "columnName",
          "in": "path",
          "required": true
        }
      ],
      "get": {
        "summary": "",
        "operationId": "public-data-nested-list",
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "application/json": {
                "schema": {}
              }
            }
          }
        },
        "tags": [
          "Public"
        ],
        "parameters": [
          {
            "schema": {
              "type": "string"
            },
            "in": "query",
            "name": "limit"
          },
          {
            "schema": {
              "type": "string"
            },
            "in": "query",
            "name": "offset"
          }
        ]
      }
    },
    "/api/v1/db/public/shared-view/{sharedViewUuid}/rows/export/{type}": {
      "parameters": [
        {
          "schema": {
            "type": "string"
          },
          "name": "sharedViewUuid",
          "in": "path",
          "required": true
        },
        {
          "schema": {
            "type": "string",
            "enum": [
              "csv",
              "excel"
            ]
          },
          "name": "type",
          "in": "path",
          "required": true
        }
      ],
      "get": {
        "summary": "",
        "operationId": "public-csv-export",
        "description": "",
        "wrapped": true,
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "application/octet-stream": {
                "schema": {}
              }
            },
            "headers": {
              "nc-export-offset": {
                "schema": {
                  "type": "integer"
                }
              }
            }
          }
        },
        "tags": [
          "Public"
        ]
      }
    },
    "/api/v1/db/public/shared-view/{sharedViewUuid}/nested/{columnName}": {
      "parameters": [
        {
          "schema": {
            "type": "string"
          },
          "name": "sharedViewUuid",
          "in": "path",
          "required": true
        },
        {
          "schema": {
            "type": "string"
          },
          "name": "columnName",
          "in": "path",
          "required": true
        },
        {
          "schema": {
            "type": "string"
          },
          "in": "header",
          "name": "xc-password",
          "description": "Shared view password"
        }
      ],
      "get": {
        "summary": "",
        "operationId": "public-data-relation-list",
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "application/json": {
                "schema": {}
              }
            }
          }
        },
        "parameters": [
          {
            "schema": {
              "type": "string"
            },
            "in": "query",
            "name": "limit"
          },
          {
            "schema": {
              "type": "string"
            },
            "in": "query",
            "name": "offset"
          }
        ],
        "tags": [
          "Public"
        ],
        "description": ""
      }
    },
    "/api/v1/db/public/shared-view/{sharedViewUuid}/meta": {
      "parameters": [
        {
          "schema": {
            "type": "string"
          },
          "name": "sharedViewUuid",
          "in": "path",
          "required": true
        },
        {
          "schema": {
            "type": "string"
          },
          "in": "header",
          "name": "xc-password",
          "description": "Shared view password"
        }
      ],
      "get": {
        "summary": "",
        "operationId": "public-shared-view-meta-get",
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": {}
                }
              },
              "application/xml": {
                "schema": {}
              }
            }
          }
        },
        "tags": [
          "Public"
        ],
        "description": "",
        "parameters": []
      }
    },
    "/api/v1/db/public/shared-base/{sharedBaseUuid}/meta": {
      "parameters": [
        {
          "schema": {
            "type": "string"
          },
          "name": "sharedBaseUuid",
          "in": "path",
          "required": true
        }
      ],
      "get": {
        "summary": "",
        "operationId": "public-shared-base-get",
        "description": "Read project details",
        "parameters": [],
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "project_id": {
                      "type": "string"
                    }
                  }
                }
              }
            }
          }
        },
        "tags": [
          "Public"
        ]
      }
    },
    "/api/v1/db/meta/audits/comments": {
      "parameters": [],
      "get": {
        "summary": "",
        "operationId": "utils-comment-list",
        "responses": {
          "201": {
            "description": "Created",
            "content": {
              "application/json": {
                "schema": {}
              }
            }
          }
        },
        "description": "",
        "parameters": [
          {
            "schema": {
              "type": "string"
            },
            "in": "query",
            "name": "row_id",
            "required": true
          },
          {
            "schema": {
              "type": "string"
            },
            "in": "query",
            "name": "fk_model_id",
            "required": true
          },
          {
            "schema": {
              "type": "boolean"
            },
            "in": "query",
            "name": "comments_only"
          }
        ],
        "tags": [
          "Utils"
        ]
      },
      "post": {
        "summary": "",
        "operationId": "utils-comment-row",
        "responses": {
          "200": {
            "description": "OK"
          }
        },
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "properties": {
                  "row_id": {
                    "type": "string"
                  },
                  "fk_model_id": {
                    "type": "string"
                  },
                  "comment": {
                    "type": "string"
                  }
                },
                "required": [
                  "row_id",
                  "fk_model_id",
                  "comment"
                ]
              }
            }
          }
        },
        "tags": [
          "Utils"
        ]
      }
    },
    "/api/v1/db/meta/audits/comments/count": {
      "parameters": [],
      "get": {
        "summary": "",
        "operationId": "utils-comment-count",
        "responses": {
          "201": {
            "description": "Created",
            "content": {
              "application/json": {
                "schema": {}
              }
            }
          }
        },
        "description": "",
        "parameters": [
          {
            "schema": {
              "type": "array"
            },
            "in": "query",
            "name": "ids",
            "required": true
          },
          {
            "schema": {
              "type": "string"
            },
            "in": "query",
            "name": "fk_model_id",
            "required": true
          }
        ],
        "tags": [
          "Utils"
        ]
      }
    },
    "/api/v1/db/meta/projects/{projectId}/audits": {
      "parameters": [
        {
          "schema": {
            "type": "string"
          },
          "name": "projectId",
          "in": "path",
          "required": true
        }
      ],
      "get": {
        "summary": "",
        "operationId": "project-audit-list",
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "list": {
                      "type": "array",
                      "uniqueItems": true,
                      "minItems": 1,
                      "items": {
                        "$ref": "#/components/schemas/Audit"
                      }
                    },
                    "pageInfo": {
                      "$ref": "#/components/schemas/Paginated"
                    }
                  },
                  "required": [
                    "list",
                    "pageInfo"
                  ]
                }
              }
            }
          }
        },
        "description": "",
        "parameters": [
          {
            "schema": {
              "type": "string"
            },
            "in": "query",
            "name": "offset"
          },
          {
            "schema": {
              "type": "string"
            },
            "in": "query",
            "name": "limit"
          }
        ],
        "tags": [
          "Project"
        ]
      }
    },
    "/api/v1/db/meta/audits/rows/{rowId}/update": {
      "parameters": [
        {
          "schema": {
            "type": "string"
          },
          "name": "rowId",
          "in": "path",
          "required": true
        }
      ],
      "post": {
        "summary": "",
        "operationId": "utils-audit-row-update",
        "responses": {
          "200": {
            "description": "OK"
          }
        },
        "tags": [
          "Utils"
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "properties": {
                  "fk_model_id": {
                    "type": "string"
                  },
                  "column_name": {
                    "type": "string"
                  },
                  "row_id": {
                    "type": "string"
                  },
                  "value": {
                    "type": "string"
                  },
                  "prev_value": {
                    "type": "string"
                  }
                }
              }
            }
          }
        }
      }
    },
    "/api/v1/db/meta/tables/{tableId}/hooks": {
      "parameters": [
        {
          "schema": {
            "type": "string"
          },
          "name": "tableId",
          "in": "path",
          "required": true
        }
      ],
      "get": {
        "summary": "",
        "operationId": "db-table-webhook-list",
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "list": {
                      "type": "array",
                      "uniqueItems": true,
                      "minItems": 1,
                      "items": {
                        "$ref": "#/components/schemas/Hook"
                      }
                    },
                    "pageInfo": {
                      "$ref": "#/components/schemas/Paginated"
                    }
                  },
                  "required": [
                    "list",
                    "pageInfo"
                  ]
                }
              }
            }
          }
        },
        "description": "",
        "parameters": [],
        "tags": [
          "DB table webhook"
        ]
      },
      "post": {
        "summary": "",
        "operationId": "db-table-webhook-create",
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Audit"
                }
              }
            }
          }
        },
        "description": "",
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/Audit"
              }
            }
          }
        },
        "tags": [
          "DB table webhook"
        ]
      }
    },
    "/api/v1/db/meta/tables/{tableId}/hooks/test": {
      "parameters": [
        {
          "schema": {
            "type": "string"
          },
          "name": "tableId",
          "in": "path",
          "required": true
        }
      ],
      "post": {
        "summary": "",
        "operationId": "db-table-webhook-test",
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "application/json": {
                "schema": {}
              }
            }
          }
        },
        "tags": [
          "DB table webhook"
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "properties": {
                  "payload": {
                    "type": "object",
                    "properties": {
                      "data": {},
                      "user": {}
                    }
                  },
                  "hook": {
                    "$ref": "#/components/schemas/Hook"
                  }
                }
              }
            }
          }
        }
      }
    },
    "/api/v1/db/meta/tables/{tableId}/hooks/samplePayload/{operation}": {
      "parameters": [
        {
          "schema": {
            "type": "string"
          },
          "name": "tableId",
          "in": "path",
          "required": true
        },
        {
          "schema": {
            "type": "string",
            "enum": [
              "update",
              "delete",
              "insert"
            ]
          },
          "name": "operation",
          "in": "path",
          "required": true
        }
      ],
      "get": {
        "summary": "",
        "operationId": "db-table-webhook-sample-payload-get",
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "plugins": {
                      "type": "object",
                      "properties": {
                        "list": {
                          "type": "array",
                          "uniqueItems": true,
                          "minItems": 1,
                          "items": {
                            "$ref": "#/components/schemas/Plugin"
                          }
                        },
                        "pageInfo": {
                          "$ref": "#/components/schemas/Paginated"
                        }
                      },
                      "required": [
                        "list",
                        "pageInfo"
                      ]
                    }
                  }
                }
              }
            }
          }
        },
        "description": "",
        "parameters": [],
        "tags": [
          "DB table webhook"
        ]
      }
    },
    "/api/v1/db/meta/hooks/{hookId}": {
      "parameters": [
        {
          "schema": {
            "type": "string"
          },
          "name": "hookId",
          "in": "path",
          "required": true
        }
      ],
      "patch": {
        "summary": "",
        "operationId": "db-table-webhook-update",
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Hook"
                }
              }
            }
          }
        },
        "tags": [
          "DB table webhook"
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/Hook"
              }
            }
          }
        }
      },
      "delete": {
        "summary": "",
        "operationId": "db-table-webhook-delete",
        "responses": {
          "200": {
            "description": "OK"
          }
        },
        "tags": [
          "DB table webhook"
        ]
      }
    },
    "/api/v1/db/meta/plugins": {
      "parameters": [],
      "get": {
        "summary": "",
        "operationId": "plugin-list",
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "list": {
                      "type": "array",
                      "uniqueItems": true,
                      "minItems": 1,
                      "items": {
                        "$ref": "#/components/schemas/Plugin"
                      }
                    },
                    "pageInfo": {
                      "$ref": "#/components/schemas/Paginated"
                    }
                  }
                }
              }
            }
          }
        },
        "description": "",
        "parameters": [],
        "tags": [
          "Plugin"
        ]
      }
    },
    "/api/v1/db/meta/plugins/{pluginTitle}/status": {
      "parameters": [
        {
          "schema": {
            "type": "string"
          },
          "name": "pluginTitle",
          "in": "path",
          "required": true
        }
      ],
      "get": {
        "summary": "",
        "operationId": "plugin-status",
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "application/json": {
                "schema": {
                  "type": "boolean"
                }
              }
            }
          }
        },
        "description": "Check plugin is active or not",
        "parameters": [],
        "tags": [
          "Plugin"
        ]
      }
    },
    "/api/v1/db/meta/plugins/test": {
      "parameters": [],
      "post": {
        "summary": "",
        "operationId": "plugin-test",
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "application/json": {
                "schema": {}
              }
            }
          },
          "400": {
            "description": "Bad Request"
          },
          "401": {
            "description": "Unauthorized"
          }
        },
        "description": "",
        "parameters": [],
        "tags": [
          "Plugin"
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "properties": {
                  "id": {
                    "type": "string"
                  },
                  "title": {
                    "type": "string"
                  },
                  "input": {},
                  "category": {
                    "type": "string"
                  }
                }
              }
            }
          }
        }
      }
    },
    "/api/v1/db/meta/plugins/{pluginId}": {
      "parameters": [
        {
          "schema": {
            "type": "string"
          },
          "name": "pluginId",
          "in": "path",
          "required": true
        }
      ],
      "patch": {
        "summary": "",
        "operationId": "plugin-update",
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Plugin"
                }
              }
            }
          }
        },
        "tags": [
          "Plugin"
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/Plugin"
              }
            }
          }
        }
      },
      "get": {
        "summary": "",
        "operationId": "plugin-read",
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Plugin"
                }
              }
            }
          }
        },
        "tags": [
          "Plugin"
        ]
      }
    },
    "/api/v1/db/meta/connection/test": {
      "parameters": [],
      "post": {
        "summary": "",
        "operationId": "utils-test-connection",
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "code": {
                      "type": "number"
                    },
                    "message": {
                      "type": "string"
                    }
                  }
                }
              }
            }
          }
        },
        "tags": [
          "Utils"
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {}
            }
          }
        },
        "description": ""
      }
    },
    "/api/v1/db/meta/nocodb/info": {
      "parameters": [],
      "get": {
        "summary": "",
        "operationId": "utils-app-info",
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "application/json": {
                "schema": {}
              }
            }
          }
        },
        "tags": [
          "Utils"
        ],
        "description": ""
      }
    },
    "/api/v1/db/meta/axiosRequestMake": {
      "parameters": [],
      "post": {
        "summary": "",
        "operationId": "utils-axios-request-make",
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": {}
                }
              }
            }
          }
        },
        "description": "Generic Axios Call",
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "type": "object"
              }
            }
          }
        },
        "tags": [
          "Utils"
        ]
      }
    },
    "/api/v1/version": {
      "parameters": [],
      "get": {
        "summary": "",
        "operationId": "utils-app-version",
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "application/json": {
                "schema": {}
              }
            }
          }
        },
        "tags": [
          "Utils"
        ],
        "description": ""
      }
    },
    "/api/v1/health": {
      "parameters": [],
      "get": {
        "summary": "",
        "operationId": "utils-app-health",
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "application/json": {
                "schema": {}
              }
            }
          }
        },
        "tags": [
          "Utils"
        ],
        "description": ""
      }
    },
    "/api/v1/db/meta/cache": {
      "get": {
        "summary": "Your GET endpoint",
        "tags": [
          "Utils"
        ],
        "responses": {},
        "operationId": "utils-cache-get",
        "description": "Get All K/V pairs in NocoCache"
      },
      "delete": {
        "summary": "",
        "operationId": "utils-cache-delete",
        "responses": {
          "200": {
            "description": "OK"
          }
        },
        "description": "Delete All K/V pairs in NocoCache",
        "tags": [
          "Utils"
        ]
      },
      "parameters": []
    },
    "/api/v1/db/meta/projects/{projectId}/api-tokens": {
      "get": {
        "summary": "Your GET endpoint",
        "tags": [
          "Api token"
        ],
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "application/json": {
                "schema": {
                  "type": "array",
                  "items": {
                    "$ref": "#/components/schemas/ApiToken"
                  }
                }
              }
            }
          }
        },
        "operationId": "api-token-list"
      },
      "post": {
        "summary": "",
        "operationId": "api-token-create",
        "responses": {
          "200": {
            "description": "OK"
          },
          "201": {
            "description": "Created",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ApiToken"
                }
              }
            }
          }
        },
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "properties": {
                  "description": {
                    "type": "string"
                  }
                }
              }
            }
          }
        },
        "tags": [
          "Api token"
        ]
      },
      "parameters": [
        {
          "schema": {
            "type": "string"
          },
          "name": "projectId",
          "in": "path",
          "required": true
        }
      ]
    },
    "/api/v1/db/meta/projects/{projectId}/api-tokens/{token}": {
      "delete": {
        "summary": "",
        "operationId": "api-token-delete",
        "responses": {
          "200": {
            "description": "OK"
          }
        },
        "tags": [
          "Api token"
        ]
      },
      "parameters": [
        {
          "schema": {
            "type": "string"
          },
          "name": "projectId",
          "in": "path",
          "required": true
        },
        {
          "schema": {
            "type": "string"
          },
          "name": "token",
          "in": "path",
          "required": true
        }
      ]
    },
    "/api/v1/db/storage/upload": {
      "post": {
        "summary": "Attachment",
        "operationId": "storage-upload",
        "responses": {},
        "tags": [
          "Storage"
        ],
        "requestBody": {
          "content": {
            "multipart/form-data": {
              "schema": {
                "type": "object",
                "properties": {
                  "files": {},
                  "json": {
                    "type": "string"
                  }
                }
              }
            }
          },
          "description": ""
        },
        "parameters": [
          {
            "schema": {
              "type": "string"
            },
            "name": "path",
            "in": "query",
            "required": true
          }
        ]
      }
    },
    "/api/v1/db/storage/upload-by-url": {
      "post": {
        "summary": "Attachment",
        "operationId": "storage-upload-by-url",
        "responses": {},
        "tags": [
          "Storage"
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "type": "array",
                "items": {
                  "type": "object",
                  "properties": {
                    "url": {
                      "type": "string"
                    },
                    "fileName": {
                      "type": "string"
                    },
                    "mimetype": {
                      "type": "string"
                    },
                    "size": {
                      "type": "string"
                    }
                  }
                }
              }
            }
          }
        },
        "parameters": [
          {
            "schema": {
              "type": "string"
            },
            "name": "path",
            "in": "query",
            "required": true
          }
        ]
      }
    },
    "/api/v1/db/meta/projects/{projectId}/users/{userId}/resend-invite": {
      "parameters": [
        {
          "schema": {
            "type": "string"
          },
          "name": "projectId",
          "in": "path",
          "required": true
        },
        {
          "schema": {
            "type": "string"
          },
          "name": "userId",
          "in": "path",
          "required": true
        }
      ],
      "post": {
        "summary": "",
        "operationId": "auth-project-user-resend-invite",
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "application/json": {
                "schema": {}
              }
            }
          }
        },
        "tags": [
          "Auth"
        ],
        "description": "Resend Invitation to a specific user",
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {}
            }
          }
        }
      }
    }
  },
  "components": {
    "schemas": {
      "User": {
        "title": "User",
        "type": "object",
        "description": "",
        "examples": [
          {
            "id": 142,
            "firstName": "Alice",
            "lastName": "Smith",
            "email": "alice.smith@gmail.com",
            "dateOfBirth": "1997-10-31",
            "emailVerified": true,
            "signUpDate": "2019-08-24"
          }
        ],
        "x-internal": false,
        "properties": {
          "id": {
            "type": "integer",
            "description": "Unique identifier for the given user."
          },
          "firstname": {
            "type": "string"
          },
          "lastname": {
            "type": "string"
          },
          "email": {
            "type": "string",
            "format": "email"
          },
          "date_of_birth": {
            "type": "string",
            "format": "date",
            "example": "1997-10-31"
          },
          "email_verified": {
            "type": "boolean",
            "description": "Set to true if the user's email has been verified."
          },
          "createDate": {
            "type": "string",
            "format": "date",
            "description": "The date that the user was created."
          }
        },
        "required": [
          "id",
          "firstname",
          "lastname",
          "email",
          "email_verified"
        ]
      },
      "PageReqQueryParams": {
        "title": "PageReqQueryParams",
        "type": "object",
        "description": "",
        "x-internal": false,
        "properties": {
          "offset": {
            "type": "integer"
          },
          "limit": {
            "type": "integer"
          },
          "query": {
            "type": "string"
          }
        },
        "required": [
          "id",
          "firstname",
          "lastname",
          "email",
          "email_verified"
        ]
      },
      "UserList": {
        "description": "",
        "type": "object",
        "x-examples": {
          "example-1": {
            "bases": {
              "list": [
                {
                  "id": "string",
                  "project_id": "string",
                  "alias": "string",
                  "host": "string",
                  "port": 0,
                  "username": "string",
                  "password": "string",
                  "database": "string",
                  "url": "string",
                  "params": "string",
                  "type": "string",
                  "ssl": "string"
                }
              ],
              "pageInfo": {
                "pageSize": 0,
                "totalRows": 0,
                "sort": "string",
                "isFirstPage": true,
                "isLastPage": true
              }
            }
          }
        },
        "properties": {
          "users": {
            "type": "object",
            "required": [
              "list",
              "pageInfo"
            ],
            "properties": {
              "list": {
                "$ref": "#/components/schemas/User"
              },
              "pageInfo": {
                "$ref": "#/components/schemas/Paginated"
              }
            }
          }
        },
        "required": [
          "users"
        ]
      },
      "ProjectReq": {
        "title": "Project",
        "type": "object",
        "properties": {
          "title": {
            "type": "string"
          },
          "description": {
            "type": "string"
          },
          "color": {
            "type": "string"
          },
          "bases": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/BaseReq"
            }
          }
        }
      },
      "Project": {
        "title": "Project",
        "type": "object",
        "properties": {
          "id": {
            "type": "string"
          },
          "title": {
            "type": "string"
          },
          "status": {
            "type": "string"
          },
          "description": {
            "type": "string"
          },
          "meta": {
            "type": [
              "string",
              "object"
            ]
          },
          "color": {
            "type": "string"
          },
          "deleted": {
            "type": [
              "string",
              "boolean"
            ]
          },
          "order": {
            "type": "number"
          },
          "bases": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/Base"
            }
          },
          "is_meta": {
            "type": "boolean"
          },
          "prefix": {
            "type": "string"
          },
          "created_at": {},
          "updated_at": {},
          "slug": {
            "type": "string"
          }
        }
      },
      "ProjectList": {
        "description": "",
        "type": "object",
        "x-examples": {
          "example-1": {
            "bases": {
              "list": [
                {
                  "id": "string",
                  "project_id": "string",
                  "alias": "string",
                  "host": "string",
                  "port": 0,
                  "username": "string",
                  "password": "string",
                  "database": "string",
                  "url": "string",
                  "params": "string",
                  "type": "string",
                  "ssl": "string"
                }
              ],
              "pageInfo": {
                "pageSize": 0,
                "totalRows": 0,
                "sort": "string",
                "isFirstPage": true,
                "isLastPage": true
              }
            }
          }
        },
        "properties": {
          "list": {
            "type": "array",
            "uniqueItems": true,
            "minItems": 1,
            "items": {
              "$ref": "#/components/schemas/Project"
            }
          },
          "pageInfo": {
            "$ref": "#/components/schemas/Paginated"
          }
        },
        "": {
          "type": "string"
        }
      },
      "Base": {
        "title": "Base",
        "type": "object",
        "properties": {
          "id": {
            "type": "string"
          },
          "project_id": {
            "type": "string"
          },
          "alias": {
            "type": "string"
          },
          "type": {
            "type": "string"
          },
          "is_meta": {
            "type": "boolean",
            "readOnly": true
          },
          "config": {},
          "created_at": {},
          "updated_at": {},
          "inflection_column": {
            "type": "string"
          },
          "inflection_table": {
            "type": "string"
          }
        }
      },
      "BaseReq": {
        "title": "Base",
        "type": "object",
        "properties": {
          "id": {
            "type": "string"
          },
          "project_id": {
            "type": "string"
          },
          "alias": {
            "type": "string"
          },
          "type": {
            "type": "string"
          },
          "is_meta": {
            "type": "boolean",
            "readOnly": true
          },
          "config": {},
          "inflection_column": {
            "type": "string"
          },
          "inflection_table": {
            "type": "string"
          }
        }
      },
      "BaseList": {
        "description": "",
        "type": "object",
        "x-examples": {
          "example-1": {
            "bases": {
              "list": [
                {
                  "id": "string",
                  "project_id": "string",
                  "alias": "string",
                  "host": "string",
                  "port": 0,
                  "username": "string",
                  "password": "string",
                  "database": "string",
                  "url": "string",
                  "params": "string",
                  "type": "string",
                  "ssl": "string"
                }
              ],
              "pageInfo": {
                "pageSize": 0,
                "totalRows": 0,
                "sort": "string",
                "isFirstPage": true,
                "isLastPage": true
              }
            }
          }
        },
        "properties": {
          "bases": {
            "type": "object",
            "required": [
              "list",
              "pageInfo"
            ],
            "properties": {
              "list": {
                "type": "array",
                "uniqueItems": true,
                "minItems": 1,
                "items": {
                  "$ref": "#/components/schemas/Base"
                }
              },
              "pageInfo": {
                "$ref": "#/components/schemas/Paginated"
              }
            }
          }
        },
        "required": [
          "bases"
        ]
      },
      "Table": {
        "title": "Table",
        "type": "object",
        "examples": [
          {
            "id": "string",
            "fk_project_id": "string",
            "fk_base_id": "string",
            "title": "string",
            "alias": "string",
            "type": "string",
            "enabled": true,
            "parent_id": "string",
            "show_as": "string",
            "tags": "string",
            "pinned": true,
            "deleted": true,
            "order": 0,
            "column": [
              {
                "id": "string",
                "base_id": "string",
                "fk_model_id": "string",
                "title": "string",
                "alias": "string",
                "ui_data_type": "string",
                "data_type": "string",
                "numeric_precision": "string",
                "numeric_scale": "string",
                "character_maximum_length": "string",
                "column_ordinal_position": "string",
                "primary_key": true,
                "primary_value": true,
                "rqd": "string",
                "un": "string",
                "column_type": "string",
                "auto_increment": true,
                "unique": true,
                "column_default": "string",
                "column_comment": "string",
                "character_set_name": "string",
                "data_type_x": "string",
                "data_type_x_precision": "string",
                "data_type_x_scale": "string",
                "auto_update_timestamp": true,
                "deleted": true,
                "visible": true,
                "order": 0,
                "colOptions": {
                  "id": "string",
                  "type": "string",
                  "virtual": true,
                  "fk_column_id": "string",
                  "fk_child_column_id": "string",
                  "fk_parent_column_id": "string",
                  "fk_mm_model_id": "string",
                  "fk_mm_child_column_id": "string",
                  "fk_mm_parent_column_id": "string",
                  "ur": "string",
                  "dr": "string",
                  "fk_index_name": "string",
                  "deleted": "string",
                  "order": "string"
                }
              }
            ],
            "columnByIds": {}
          }
        ],
        "properties": {
          "id": {
            "type": "string"
          },
          "fk_project_id": {
            "type": "string"
          },
          "fk_base_id": {
            "type": "string"
          },
          "table_name": {
            "type": "string"
          },
          "title": {
            "type": "string"
          },
          "type": {
            "type": "string"
          },
          "enabled": {
            "type": "boolean"
          },
          "parent_id": {
            "type": "string"
          },
          "show_as": {
            "type": "string"
          },
          "tags": {
            "type": "string"
          },
          "pinned": {
            "type": "boolean"
          },
          "deleted": {
            "type": "boolean"
          },
          "order": {
            "type": "number"
          },
          "columns": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/Column"
            }
          },
          "columnsById": {
            "type": "object"
          },
          "slug": {
            "type": "string"
          }
        },
        "required": [
          "table_name",
          "title"
        ]
      },
      "View": {
        "title": "Table",
        "type": "object",
        "examples": [
          {
            "id": "string",
            "fk_project_id": "string",
            "fk_base_id": "string",
            "title": "string",
            "alias": "string",
            "type": "string",
            "enabled": true,
            "parent_id": "string",
            "show_as": "string",
            "tags": "string",
            "pinned": true,
            "deleted": true,
            "order": 0,
            "column": [
              {
                "id": "string",
                "base_id": "string",
                "fk_model_id": "string",
                "title": "string",
                "alias": "string",
                "ui_data_type": "string",
                "data_type": "string",
                "numeric_precision": "string",
                "numeric_scale": "string",
                "character_maximum_length": "string",
                "column_ordinal_position": "string",
                "primary_key": true,
                "primary_value": true,
                "rqd": "string",
                "un": "string",
                "column_type": "string",
                "auto_increment": true,
                "unique": true,
                "column_default": "string",
                "column_comment": "string",
                "character_set_name": "string",
                "data_type_x": "string",
                "data_type_x_precision": "string",
                "data_type_x_scale": "string",
                "auto_update_timestamp": true,
                "deleted": true,
                "visible": true,
                "order": 0,
                "colOptions": {
                  "id": "string",
                  "type": "string",
                  "virtual": true,
                  "fk_column_id": "string",
                  "fk_child_column_id": "string",
                  "fk_parent_column_id": "string",
                  "fk_mm_model_id": "string",
                  "fk_mm_child_column_id": "string",
                  "fk_mm_parent_column_id": "string",
                  "ur": "string",
                  "dr": "string",
                  "fk_index_name": "string",
                  "deleted": "string",
                  "order": "string"
                }
              }
            ],
            "columnByIds": {}
          }
        ],
        "properties": {
          "id": {
            "type": "string"
          },
          "title": {
            "type": "string"
          },
          "deleted": {
            "type": "boolean"
          },
          "order": {
            "type": "number"
          },
          "fk_model_id": {
            "type": "string"
          },
          "slug": {
            "type": "string"
          }
        }
      },
      "TableInfo": {
        "title": "Table",
        "type": "object",
        "examples": [
          {
            "id": "string",
            "fk_project_id": "string",
            "fk_base_id": "string",
            "title": "string",
            "alias": "string",
            "type": "string",
            "enabled": "string",
            "parent_id": "string",
            "show_as": "string",
            "tags": "string",
            "pinned": true,
            "deleted": true,
            "order": 0,
            "column": [
              {
                "id": "string",
                "base_id": "string",
                "fk_model_id": "string",
                "title": "string",
                "alias": "string",
                "ui_data_type": "string",
                "data_type": "string",
                "numeric_precision": "string",
                "numeric_scale": "string",
                "character_maximum_length": "string",
                "column_ordinal_position": "string",
                "primary_key": "string",
                "primary_value": "string",
                "rqd": "string",
                "un": "string",
                "column_type": "string",
                "auto_increment": "string",
                "unique": "string",
                "column_default": "string",
                "column_comment": "string",
                "character_set_name": "string",
                "data_type_x": "string",
                "data_type_x_precision": "string",
                "data_type_x_scale": "string",
                "auto_update_timestamp": true,
                "deleted": true,
                "visible": true,
                "order": 0,
                "colOptions": {
                  "id": "string",
                  "type": "string",
                  "virtual": true,
                  "fk_column_id": "string",
                  "fk_child_column_id": "string",
                  "fk_parent_column_id": "string",
                  "fk_mm_model_id": "string",
                  "fk_mm_child_column_id": "string",
                  "fk_mm_parent_column_id": "string",
                  "ur": "string",
                  "dr": "string",
                  "fk_index_name": "string",
                  "deleted": "string",
                  "order": "string"
                }
              }
            ],
            "filters": [
              {
                "id": "string",
                "fk_model_id": "string",
                "fk_column_id": "string",
                "logical_op": "string",
                "comparison_op": "string",
                "value": "string",
                "is_group": true,
                "children": [
                  {}
                ]
              }
            ],
            "sort": [
              {
                "id": "string",
                "fk_model_id": "string",
                "fk_column_id": "string",
                "direction": "string",
                "order": 0
              }
            ]
          }
        ],
        "properties": {
          "id": {
            "type": "string"
          },
          "fk_project_id": {
            "type": "string"
          },
          "fk_base_id": {
            "type": "string"
          },
          "title": {
            "type": "string"
          },
          "table_name": {
            "type": "string"
          },
          "type": {
            "type": "string"
          },
          "enabled": {
            "type": "string"
          },
          "parent_id": {
            "type": "string"
          },
          "show_as": {
            "type": "string"
          },
          "tags": {
            "type": "string"
          },
          "pinned": {
            "type": "boolean"
          },
          "deleted": {
            "type": "boolean"
          },
          "order": {
            "type": "number"
          },
          "column": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/Column"
            }
          },
          "filters": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/Filter"
            }
          },
          "sort": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/Sort"
            }
          }
        },
        "required": [
          "title",
          "table_name"
        ]
      },
      "TableReq": {
        "title": "Table",
        "type": "object",
        "properties": {
          "id": {
            "type": "string"
          },
          "fk_project_id": {
            "type": "string"
          },
          "fk_base_id": {
            "type": "string"
          },
          "table_name": {
            "type": "string"
          },
          "title": {
            "type": "string"
          },
          "type": {
            "type": "string"
          },
          "enabled": {
            "type": "string"
          },
          "parent_id": {
            "type": "string"
          },
          "show_as": {
            "type": "string"
          },
          "tags": {
            "type": "string"
          },
          "pinned": {
            "type": "boolean"
          },
          "deleted": {
            "type": "boolean"
          },
          "order": {
            "type": "number"
          },
          "columns": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/Column"
            }
          }
        },
        "required": [
          "table_name",
          "title"
        ]
      },
      "TableList": {
        "description": "",
        "type": "object",
        "x-examples": {
          "example-1": {
            "bases": {
              "list": [
                {
                  "id": "string",
                  "project_id": "string",
                  "alias": "string",
                  "host": "string",
                  "port": 0,
                  "username": "string",
                  "password": "string",
                  "database": "string",
                  "url": "string",
                  "params": "string",
                  "type": "string",
                  "ssl": "string"
                }
              ],
              "pageInfo": {
                "pageSize": 0,
                "totalRows": 0,
                "sort": "string",
                "isFirstPage": true,
                "isLastPage": true
              }
            }
          }
        },
        "properties": {
          "list": {
            "type": "array",
            "uniqueItems": true,
            "minItems": 1,
            "items": {
              "$ref": "#/components/schemas/Table"
            }
          },
          "pageInfo": {
            "$ref": "#/components/schemas/Paginated"
          }
        },
        "required": [
          "tables"
        ]
      },
      "Filter": {
        "type": "object",
        "title": "Filter",
        "properties": {
          "id": {
            "type": "string"
          },
          "fk_model_id": {
            "type": "string"
          },
          "fk_column_id": {
            "type": "string"
          },
          "logical_op": {
            "type": "string"
          },
          "comparison_op": {
            "type": "string"
          },
          "value": {
            "type": [
              "string",
              "number",
              "integer",
              "boolean",
              "null"
            ]
          },
          "is_group": {
            "type": "boolean"
          },
          "children": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/Filter"
            }
          },
          "project_id": {
            "type": "string",
            "readOnly": true
          },
          "base_id": {
            "type": "string",
            "readOnly": true
          },
          "fk_parent_id": {
            "type": "string"
          },
          "fk_view_id": {
            "type": "string"
          },
          "fk_hook_id": {
            "type": "string"
          }
        },
        "readOnly": true
      },
      "FilterList": {
        "description": "",
        "type": "object",
        "x-examples": {
          "example-1": {
            "bases": {
              "list": [
                {
                  "id": "string",
                  "project_id": "string",
                  "alias": "string",
                  "host": "string",
                  "port": 0,
                  "username": "string",
                  "password": "string",
                  "database": "string",
                  "url": "string",
                  "params": "string",
                  "type": "string",
                  "ssl": "string"
                }
              ],
              "pageInfo": {
                "pageSize": 0,
                "totalRows": 0,
                "sort": "string",
                "isFirstPage": true,
                "isLastPage": true
              }
            }
          }
        },
        "properties": {
          "filters": {
            "type": "object",
            "required": [
              "list"
            ],
            "properties": {
              "list": {
                "type": "array",
                "uniqueItems": true,
                "minItems": 1,
                "items": {
                  "$ref": "#/components/schemas/Filter"
                }
              }
            }
          }
        },
        "required": [
          "filters"
        ]
      },
      "Sort": {
        "title": "Sort",
        "type": "object",
        "properties": {
          "id": {
            "type": "string"
          },
          "fk_model_id": {
            "type": "string"
          },
          "fk_column_id": {
            "type": "string"
          },
          "direction": {
            "type": "string"
          },
          "order": {
            "type": "number"
          },
          "project_id": {
            "type": "string",
            "readOnly": true
          },
          "base_id": {
            "type": "string",
            "readOnly": true
          }
        }
      },
      "SortList": {
        "description": "",
        "type": "object",
        "x-examples": {
          "example-1": {
            "bases": {
              "list": [
                {
                  "id": "string",
                  "project_id": "string",
                  "alias": "string",
                  "host": "string",
                  "port": 0,
                  "username": "string",
                  "password": "string",
                  "database": "string",
                  "url": "string",
                  "params": "string",
                  "type": "string",
                  "ssl": "string"
                }
              ],
              "pageInfo": {
                "pageSize": 0,
                "totalRows": 0,
                "sort": "string",
                "isFirstPage": true,
                "isLastPage": true
              }
            }
          }
        },
        "properties": {
          "sorts": {
            "type": "object",
            "required": [
              "list"
            ],
            "properties": {
              "list": {
                "type": "array",
                "uniqueItems": true,
                "minItems": 1,
                "items": {
                  "$ref": "#/components/schemas/SharedView"
                }
              }
            }
          }
        },
        "required": [
          "sorts"
        ]
      },
      "Column": {
        "title": "Column",
        "type": "object",
        "properties": {
          "id": {
            "type": "string"
          },
          "base_id": {
            "type": "string"
          },
          "fk_model_id": {
            "type": "string"
          },
          "title": {
            "type": "string"
          },
          "uidt": {
            "type": "string"
          },
          "dt": {
            "type": "string"
          },
          "np": {
            "type": "string"
          },
          "ns": {
            "type": "string"
          },
          "clen": {
            "type": [
              "string",
              "integer"
            ]
          },
          "cop": {
            "type": "string"
          },
          "pk": {
            "type": "boolean"
          },
          "pv": {
            "type": "boolean"
          },
          "rqd": {
            "type": "boolean"
          },
          "column_name": {
            "type": "string"
          },
          "un": {
            "type": "boolean"
          },
          "ct": {
            "type": "string"
          },
          "ai": {
            "type": "boolean"
          },
          "unique": {
            "type": "boolean"
          },
          "cdf": {
            "type": "string"
          },
          "cc": {
            "type": "string"
          },
          "csn": {
            "type": "string"
          },
          "dtx": {
            "type": "string"
          },
          "dtxp": {
            "type": "string"
          },
          "dtxs": {
            "type": "string"
          },
          "au": {
            "type": "boolean"
          },
          "deleted": {
            "type": "boolean"
          },
          "visible": {
            "type": "boolean"
          },
          "order": {
            "type": "number"
          },
          "colOptions": {
            "oneOf": [
              {
                "$ref": "#/components/schemas/LinkToAnotherRecord"
              },
              {
                "$ref": "#/components/schemas/Formula"
              },
              {
                "$ref": "#/components/schemas/Rollup"
              },
              {
                "$ref": "#/components/schemas/Lookup"
              },
              {
                "type": "array",
                "items": {
                  "$ref": "#/components/schemas/SelectOptions"
                }
              },
              {
                "type": "object"
              }
            ]
          }
        },
        "required": [
          "uidt"
        ]
      },
      "ColumnList": {
        "description": "",
        "type": "object",
        "x-examples": {
          "example-1": {
            "bases": {
              "list": [
                {
                  "id": "string",
                  "project_id": "string",
                  "alias": "string",
                  "host": "string",
                  "port": 0,
                  "username": "string",
                  "password": "string",
                  "database": "string",
                  "url": "string",
                  "params": "string",
                  "type": "string",
                  "ssl": "string"
                }
              ],
              "pageInfo": {
                "pageSize": 0,
                "totalRows": 0,
                "sort": "string",
                "isFirstPage": true,
                "isLastPage": true
              }
            }
          }
        },
        "properties": {
          "columns": {
            "type": "object",
            "required": [
              "list"
            ],
            "properties": {
              "list": {
                "type": "array",
                "uniqueItems": true,
                "minItems": 1,
                "items": {
                  "$ref": "#/components/schemas/Column"
                }
              }
            }
          }
        },
        "required": [
          "columns"
        ]
      },
      "LinkToAnotherRecord": {
        "title": "LinkToAnotherRecord",
        "type": "object",
        "properties": {
          "id": {
            "type": "string"
          },
          "type": {
            "type": "string"
          },
          "virtual": {
            "type": "boolean"
          },
          "fk_column_id": {
            "type": "string"
          },
          "fk_child_column_id": {
            "type": "string"
          },
          "fk_parent_column_id": {
            "type": "string"
          },
          "fk_mm_model_id": {
            "type": "string"
          },
          "fk_related_model_id": {
            "type": "string"
          },
          "fk_mm_child_column_id": {
            "type": "string"
          },
          "fk_mm_parent_column_id": {
            "type": "string"
          },
          "ur": {
            "type": "string"
          },
          "dr": {
            "type": "string"
          },
          "fk_index_name": {
            "type": "string"
          },
          "deleted": {
            "type": "string"
          },
          "order": {
            "type": "string"
          }
        }
      },
      "Lookup": {
        "title": "Lookup",
        "type": "object",
        "properties": {
          "id": {
            "type": "string"
          },
          "type": {
            "type": "string"
          },
          "virtual": {
            "type": "boolean"
          },
          "fk_column_id": {
            "type": "string"
          },
          "fk_relation_column_id": {
            "type": "string"
          },
          "fk_lookup_column_id": {
            "type": "string"
          },
          "deleted": {
            "type": "string"
          },
          "order": {
            "type": "string"
          }
        }
      },
      "Rollup": {
        "title": "Rollup",
        "type": "object",
        "properties": {
          "id": {
            "type": "string"
          },
          "type": {
            "type": "string"
          },
          "virtual": {
            "type": "boolean"
          },
          "fk_column_id": {
            "type": "string"
          },
          "fk_relation_column_id": {
            "type": "string"
          },
          "fk_rollup_column_id": {
            "type": "string"
          },
          "rollup_function": {
            "type": "string"
          },
          "deleted": {
            "type": "string"
          },
          "order": {
            "type": "string"
          }
        }
      },
      "Formula": {
        "title": "Lookup",
        "type": "object",
        "properties": {
          "id": {
            "type": "string"
          },
          "type": {
            "type": "string"
          },
          "virtual": {
            "type": "boolean"
          },
          "fk_column_id": {
            "type": "string"
          },
          "formula": {
            "type": "string"
          },
          "deleted": {
            "type": "string"
          },
          "order": {
            "type": "string"
          }
        }
      },
      "SelectOptions": {
        "title": "SelectOptions",
        "type": "object",
        "properties": {
          "id": {
            "type": "string"
          },
          "type": {
            "type": "string"
          },
          "virtual": {
            "type": "boolean"
          },
          "fk_column_id": {
            "type": "string"
          },
          "title": {
            "type": "string"
          },
          "color": {
            "type": "string"
          },
          "order": {
            "type": "number"
          }
        },
        "examples": [
          {
            "id": "string",
            "type": "string",
            "virtual": true,
            "fk_column_id": "string",
            "title": "string",
            "color": "string",
            "order": 0
          }
        ]
      },
      "Grid": {
        "title": "Grid",
        "type": "object",
        "properties": {
          "id": {
            "type": "string"
          },
          "title": {
            "type": "string"
          },
          "alias": {
            "type": "string"
          },
          "deleted": {
            "type": "boolean"
          },
          "order": {
            "type": "number"
          }
        },
        "description": ""
      },
      "Gallery": {
        "title": "Gallery",
        "type": "object",
        "description": "",
        "properties": {
          "fk_view_id": {
            "type": "string"
          },
          "title": {
            "type": "string"
          },
          "alias": {
            "type": "string"
          },
          "deleted": {
            "type": "boolean"
          },
          "order": {
            "type": "number"
          },
          "next_enabled": {
            "type": "boolean"
          },
          "prev_enabled": {
            "type": "boolean"
          },
          "cover_image_idx": {
            "type": "integer"
          },
          "cover_image": {
            "type": "string"
          },
          "restrict_types": {
            "type": "string"
          },
          "restrict_size": {
            "type": "string"
          },
          "restrict_number": {
            "type": "string"
          },
          "columns": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/GalleryColumn"
            }
          },
          "fk_model_id": {
            "type": "string"
          },
          "fk_cover_image_col_id": {
            "type": "string"
          }
        }
      },
      "GalleryColumn": {
        "title": "GalleryColumn",
        "type": "object",
        "description": "",
        "properties": {
          "id": {
            "type": "string"
          },
          "label": {
            "type": "string"
          },
          "help": {
            "type": "string"
          },
          "fk_col_id": {
            "type": "string"
          },
          "fk_gallery_id": {
            "type": "string"
          }
        }
      },
      "GridColumn": {
        "title": "GalleryColumn",
        "type": "object",
        "description": "",
        "properties": {
          "id": {
            "type": "string"
          },
          "label": {
            "type": "string"
          },
          "help": {
            "type": "string"
          },
          "fk_column_id": {
            "type": "string"
          },
          "fk_gallery_id": {
            "type": "string"
          },
          "width": {
            "type": "string"
          }
        }
      },
      "KanbanColumn": {
        "title": "KanbanColumn",
        "type": "object",
        "description": "",
        "properties": {
          "id": {
            "type": "string"
          },
          "label": {
            "type": "string"
          },
          "help": {
            "type": "string"
          },
          "fk_column_id": {
            "type": "string"
          },
          "fk_kanban_id": {
            "type": "string"
          }
        }
      },
      "Kanban": {
        "title": "Kanban",
        "type": "object",
        "description": "",
        "properties": {
          "id": {
            "type": "string"
          },
          "title": {
            "type": "string"
          },
          "alias": {
            "type": "string"
          },
          "public": {
            "type": "boolean"
          },
          "password": {
            "type": "string"
          },
          "columns": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/KanbanColumn"
            }
          },
          "fk_model_id": {
            "type": "string"
          }
        }
      },
      "Form": {
        "title": "Form",
        "type": "object",
        "description": "",
        "properties": {
          "id": {
            "type": "string"
          },
          "title": {
            "type": "string"
          },
          "heading": {
            "type": "string"
          },
          "subheading": {
            "type": "string"
          },
          "sucess_msg": {
            "type": "string"
          },
          "redirect_url": {
            "type": "string"
          },
          "redirect_after_secs": {
            "type": "string"
          },
          "email": {
            "type": "string"
          },
          "banner_image_url": {
            "type": "string"
          },
          "logo_url": {
            "type": "string"
          },
          "submit_another_form": {
            "type": "boolean"
          },
          "columns": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/FormColumn"
            }
          },
          "fk_model_id": {
            "type": "string"
          }
        }
      },
      "FormColumn": {
        "description": "",
        "type": "object",
        "x-examples": {
          "example-1": {
            "_cn": "first_name",
            "alias": "first_name",
            "fk_column_id": "cl_yvyhsl9u81tokc",
            "id": "fvc_8z1i7t8aswkqxx",
            "fk_view_id": "vw_s1pf4umdnikoyn",
            "uuid": null,
            "label": "dsdsds",
            "help": null,
            "required": false,
            "show": 1,
            "order": 1,
            "created_at": "2022-02-15 12:39:04",
            "updated_at": "2022-02-15 12:39:16",
            "description": "dsdsdsdsd"
          }
        },
        "properties": {
          "fk_column_id": {
            "type": "string",
            "minLength": 1
          },
          "id": {
            "type": "string",
            "minLength": 1
          },
          "fk_view_id": {
            "type": "string",
            "minLength": 1
          },
          "uuid": {},
          "label": {
            "type": "string",
            "minLength": 1
          },
          "help": {},
          "required": {
            "type": "boolean"
          },
          "show": {
            "type": "boolean"
          },
          "order": {
            "type": "number"
          },
          "created_at": {
            "type": "string",
            "minLength": 1
          },
          "updated_at": {
            "type": "string",
            "minLength": 1
          },
          "description": {
            "type": "string",
            "minLength": 1
          }
        }
      },
      "Paginated": {
        "title": "Paginated",
        "type": "object",
        "properties": {
          "pageSize": {
            "type": "integer"
          },
          "totalRows": {
            "type": "integer"
          },
          "sort": {
            "type": [
              "string",
              "array"
            ],
            "items": {
              "$ref": "#/components/schemas/Sort"
            }
          },
          "isFirstPage": {
            "type": "boolean"
          },
          "isLastPage": {
            "type": "boolean"
          },
          "page": {
            "type": "number"
          }
        }
      },
      "HookList": {
        "description": "",
        "type": "object",
        "x-examples": {
          "example-1": {
            "bases": {
              "list": [
                {
                  "id": "string",
                  "project_id": "string",
                  "alias": "string",
                  "host": "string",
                  "port": 0,
                  "username": "string",
                  "password": "string",
                  "database": "string",
                  "url": "string",
                  "params": "string",
                  "type": "string",
                  "ssl": "string"
                }
              ],
              "pageInfo": {
                "pageSize": 0,
                "totalRows": 0,
                "sort": "string",
                "isFirstPage": true,
                "isLastPage": true
              }
            }
          }
        },
        "properties": {
          "list": {
            "type": "array",
            "uniqueItems": true,
            "minItems": 1,
            "items": {
              "type": "object"
            }
          },
          "pageInfo": {
            "$ref": "#/components/schemas/Paginated"
          }
        }
      },
      "SharedView": {
        "title": "SharedView",
        "type": "object",
        "properties": {
          "id": {
            "type": "string"
          },
          "fk_view_id": {
            "type": "string"
          },
          "password": {
            "type": "string"
          },
          "deleted": {
            "type": "string"
          }
        }
      },
      "SharedViewList": {
        "description": "",
        "type": "object",
        "x-examples": {
          "example-1": {
            "bases": {
              "list": [
                {
                  "id": "string",
                  "project_id": "string",
                  "alias": "string",
                  "host": "string",
                  "port": 0,
                  "username": "string",
                  "password": "string",
                  "database": "string",
                  "url": "string",
                  "params": "string",
                  "type": "string",
                  "ssl": "string"
                }
              ],
              "pageInfo": {
                "pageSize": 0,
                "totalRows": 0,
                "sort": "string",
                "isFirstPage": true,
                "isLastPage": true
              }
            }
          }
        },
        "properties": {
          "list": {
            "type": "array",
            "uniqueItems": true,
            "minItems": 1,
            "items": {
              "$ref": "#/components/schemas/SharedView"
            }
          },
          "pageInfo": {
            "$ref": "#/components/schemas/Paginated"
          }
        }
      },
      "ViewList": {
        "description": "",
        "type": "object",
        "x-examples": {
          "example-1": {
            "bases": {
              "list": [
                {
                  "id": "string",
                  "project_id": "string",
                  "alias": "string",
                  "host": "string",
                  "port": 0,
                  "username": "string",
                  "password": "string",
                  "database": "string",
                  "url": "string",
                  "params": "string",
                  "type": "string",
                  "ssl": "string"
                }
              ],
              "pageInfo": {
                "pageSize": 0,
                "totalRows": 0,
                "sort": "string",
                "isFirstPage": true,
                "isLastPage": true
              }
            }
          }
        },
        "properties": {
          "list": {
            "oneOf": [
              {
                "$ref": "#/components/schemas/Grid"
              },
              {
                "$ref": "#/components/schemas/Form"
              },
              {
                "$ref": "#/components/schemas/Kanban"
              },
              {
                "$ref": "#/components/schemas/Gallery"
              }
            ]
          },
          "pageInfo": {
            "$ref": "#/components/schemas/Paginated"
          }
        },
        "required": [
          "views"
        ],
        "title": ""
      },
      "Attachment": {
        "title": "Attachment",
        "type": "object",
        "properties": {
          "url": {
            "type": "string"
          },
          "title": {
            "type": "string"
          },
          "mimetype": {
            "type": "string"
          },
          "size": {
            "type": "string"
          },
          "icon": {
            "type": "string"
          }
        }
      },
      "Webhook": {
        "title": "Webhook",
        "type": "object",
        "properties": {
          "id": {
            "type": "string"
          },
          "title": {
            "type": "string"
          },
          "type": {
            "type": "string"
          }
        }
      },
      "Audit": {
        "title": "AuditType",
        "type": "object",
        "properties": {
          "id": {
            "type": "string"
          },
          "user": {
            "type": "string"
          },
          "ip": {
            "type": "string"
          },
          "base_id": {
            "type": "string"
          },
          "project_id": {
            "type": "string"
          },
          "fk_model_id": {
            "type": "string"
          },
          "row_id": {
            "type": "string"
          },
          "op_type": {
            "type": "string"
          },
          "op_sub_type": {
            "type": "string"
          },
          "status": {
            "type": "string"
          },
          "description": {
            "type": "string"
          },
          "details": {
            "type": "string"
          }
        }
      },
      "Hook": {
        "title": "AuditType",
        "type": "object",
        "properties": {
          "id": {
            "type": "string"
          },
          "fk_model_id": {
            "type": "string"
          },
          "title": {
            "type": "string"
          },
          "description": {
            "type": "string"
          },
          "env": {
            "type": "string"
          },
          "type": {
            "type": "string"
          },
          "event": {
            "type": "string",
            "enum": [
              "After",
              "Before"
            ]
          },
          "operation": {
            "type": "string",
            "enum": [
              "insert",
              "delete",
              "update"
            ]
          },
          "async": {
            "type": "boolean"
          },
          "payload": {
            "type": "string"
          },
          "url": {
            "type": "string"
          },
          "headers": {
            "type": "string"
          },
          "condition": {
            "type": "boolean"
          },
          "notification": {
            "type": "string"
          },
          "retries": {
            "type": "number"
          },
          "retry_interval": {
            "type": "number"
          },
          "timeout": {
            "type": "number"
          },
          "active": {
            "type": "boolean"
          }
        }
      },
      "Plugin": {
        "title": "Plugin",
        "type": "object",
        "properties": {
          "id": {
            "type": "string"
          },
          "title": {
            "type": "string"
          },
          "description": {
            "type": "string"
          },
          "active": {
            "type": "boolean"
          },
          "rating": {
            "type": "number"
          },
          "version": {
            "type": "string"
          },
          "docs": {
            "type": "string"
          },
          "status": {
            "type": "string"
          },
          "status_details": {
            "type": "string"
          },
          "logo": {
            "type": "string"
          },
          "icon": {
            "type": "string"
          },
          "tags": {
            "type": "string"
          },
          "category": {
            "type": "string"
          },
          "input_schema": {
            "type": "string"
          },
          "input": {
            "type": "string"
          },
          "creator": {
            "type": "string"
          },
          "creator_website": {
            "type": "string"
          },
          "price": {
            "type": "string"
          }
        }
      },
      "ModelRoleVisibility": {
        "title": "ModelRoleVisibility",
        "type": "object",
        "properties": {
          "id": {
            "type": "string"
          },
          "project_id": {
            "type": "string"
          },
          "base_id": {
            "type": "string"
          },
          "fk_model_id": {
            "type": "string"
          },
          "fk_view_id": {
            "type": "string"
          },
          "role": {
            "type": "string"
          },
          "disabled": {
            "type": "boolean"
          }
        }
      },
      "ApiToken": {
        "title": "ApiToken",
        "type": "object",
        "properties": {
          "id": {
            "type": "string"
          },
          "token": {
            "type": "string"
          },
          "description": {
            "type": "string"
          }
        }
      },
      "HookLog": {
        "title": "ApiToken",
        "type": "object",
        "properties": {
          "id": {
            "type": "string"
          },
          "base_id": {
            "type": "string"
          },
          "project_id": {
            "type": "string"
          },
          "fk_hook_id": {
            "type": "string"
          },
          "type": {
            "type": "string"
          },
          "event": {
            "type": "string"
          },
          "operation": {
            "type": "string"
          },
          "test_call": {
            "type": "boolean"
          },
          "payload": {
            "type": "string"
          },
          "conditions": {
            "type": "string"
          },
          "notifications": {
            "type": "string"
          },
          "error_code": {
            "type": "string"
          },
          "error_message": {
            "type": "string"
          },
          "error": {
            "type": "string"
          },
          "execution_time": {
            "type": "string"
          },
          "response": {
            "type": "string"
          },
          "triggered_by": {
            "type": "string"
          },
          "created_at": {
            "type": "string"
          },
          "updated_at": {
            "type": "string"
          }
        }
      },
      "ColumnReq": {
        "oneOf": [
          {
            "properties": {
              "uidt": {
                "type": "string",
                "enum": [
                  "ID",
                  "SingleLineText",
                  "LongText",
                  "Attachment",
                  "Checkbox",
                  "MultiSelect",
                  "SingleSelect",
                  "Collaborator",
                  "Date",
                  "Year",
                  "Time",
                  "PhoneNumber",
                  "Email",
                  "URL",
                  "Number",
                  "Decimal",
                  "Currency",
                  "Percent",
                  "Duration",
                  "Rating",
                  "Count",
                  "DateTime",
                  "CreateTime",
                  "LastModifiedTime",
                  "AutoNumber",
                  "Geometry",
                  "JSON",
                  "SpecificDBType",
                  "Barcode",
                  "Button"
                ]
              },
              "id": {
                "type": "string"
              },
              "base_id": {
                "type": "string"
              },
              "fk_model_id": {
                "type": "string"
              },
              "title": {
                "type": "string"
              },
              "dt": {
                "type": "string"
              },
              "np": {
                "type": "string"
              },
              "ns": {
                "type": "string"
              },
              "clen": {
                "type": [
                  "string",
                  "integer"
                ]
              },
              "cop": {
                "type": "string"
              },
              "pk": {
                "type": "boolean"
              },
              "pv": {
                "type": "boolean"
              },
              "rqd": {
                "type": "boolean"
              },
              "column_name": {
                "type": "string"
              },
              "un": {
                "type": "boolean"
              },
              "ct": {
                "type": "string"
              },
              "ai": {
                "type": "boolean"
              },
              "unique": {
                "type": "boolean"
              },
              "cdf": {
                "type": "string"
              },
              "cc": {
                "type": "string"
              },
              "csn": {
                "type": "string"
              },
              "dtx": {
                "type": "string"
              },
              "dtxp": {
                "type": "string"
              },
              "dtxs": {
                "type": "string"
              },
              "au": {
                "type": "boolean"
              },
              "": {
                "type": "string"
              }
            }
          },
          {
            "properties": {
              "uidt": {
                "type": "string",
                "enum": [
                  "LinkToAnotherRecord"
                ]
              },
              "title": {
                "type": "string"
              },
              "parentId": {
                "type": "string"
              },
              "childId": {
                "type": "string"
              },
              "type": {
                "type": "string",
                "enum": [
                  "hm",
                  "bt",
                  "mm"
                ]
              }
            },
            "required": [
              "uidt",
              "title",
              "parentId",
              "childId",
              "type"
            ]
          },
          {
            "properties": {
              "uidt": {
                "type": "string",
                "enum": [
                  "Rollup"
                ]
              },
              "title": {
                "type": "string"
              },
              "fk_relation_column_id": {
                "type": "string"
              },
              "fk_rollup_column_id": {
                "type": "string"
              },
              "rollup_function": {
                "type": "string"
              }
            }
          },
          {
            "properties": {
              "uidt": {
                "type": "string",
                "enum": [
                  "Lookup"
                ]
              },
              "title": {
                "type": "string"
              },
              "fk_relation_column_id": {
                "type": "string"
              },
              "fk_lookup_column_id": {
                "type": "string"
              }
            }
          },
          {
            "properties": {
              "uidt": {
                "type": "string"
              },
              "formula_raw": {
                "type": "string"
              },
              "formula": {
                "type": "string"
              },
              "title": {
                "type": "string"
              }
            }
          }
        ],
        "description": "",
        "type": "object"
      },
      "UserInfo": {
        "title": "UserInfo",
        "type": "object",
        "properties": {
          "id": {
            "type": "string"
          },
          "email": {
            "type": "string"
          },
          "email_verified": {
            "type": "string"
          },
          "firstname": {
            "type": "string"
          },
          "lastname": {
            "type": "string"
          },
          "roles": {}
        }
      }
    },
    "requestBodies": {
      "Signup": {
        "content": {
          "application/json": {
            "schema": {
              "description": "",
              "type": "object",
              "x-examples": {
                "example-1": {
                  "email": true
                }
              },
              "properties": {
                "email": {
                  "type": "string"
                },
                "password": {
                  "type": "string"
                }
              }
            }
          },
          "application/xml": {
            "schema": {
              "type": "object",
              "properties": {}
            }
          }
        }
      },
      "ProjectCreate": {
        "content": {
          "application/json": {
            "schema": {
              "anyOf": [
                {
                  "$ref": "#/components/schemas/ProjectReq"
                },
                {
                  "type": "object",
                  "properties": {
                    "external": {
                      "type": "boolean",
                      "default": false
                    }
                  }
                }
              ]
            },
            "examples": {
              "example-1": {
                "value": {
                  "id": "string",
                  "title": "string",
                  "status": "string",
                  "description": "string",
                  "meta": "string",
                  "color": "string",
                  "deleted": "string",
                  "order": 0,
                  "bases": [
                    {
                      "id": "string",
                      "project_id": "string",
                      "alias": "string",
                      "host": "string",
                      "port": 0,
                      "username": "string",
                      "password": "string",
                      "database": "string",
                      "url": "string",
                      "params": "string",
                      "type": "string",
                      "ssl": "string"
                    }
                  ]
                }
              }
            }
          }
        }
      },
      "BaseCreate": {
        "content": {
          "application/json": {
            "schema": {
              "type": "object"
            }
          }
        }
      },
      "TableCreate": {
        "content": {
          "application/json": {
            "schema": {
              "type": "object"
            }
          }
        }
      },
      "ColumnCreate": {
        "content": {
          "application/json": {
            "schema": {
              "type": "object"
            }
          }
        }
      },
      "ViewCreate": {
        "content": {
          "application/json": {
            "schema": {
              "type": "object"
            }
          }
        }
      },
      "SortCreate": {
        "content": {
          "application/json": {
            "schema": {
              "type": "object"
            }
          }
        }
      },
      "SharedViewCreate": {
        "content": {
          "application/json": {
            "schema": {
              "type": "object"
            }
          }
        }
      },
      "HookCreate": {
        "content": {
          "application/json": {
            "schema": {
              "type": "object"
            }
          }
        }
      },
      "ProjectUpdate": {
        "content": {
          "application/json": {
            "schema": {
              "$ref": "#/components/schemas/ProjectReq"
            }
          }
        }
      },
      "BaseUpdate": {
        "content": {
          "application/json": {
            "schema": {
              "type": "object"
            }
          }
        }
      },
      "ColumnUpdate": {
        "content": {
          "application/json": {
            "schema": {
              "type": "object"
            }
          }
        }
      },
      "TableUpdate": {
        "content": {
          "application/json": {
            "schema": {
              "type": "object"
            }
          }
        }
      },
      "ViewUpdate": {
        "content": {
          "application/json": {
            "schema": {
              "type": "object"
            }
          }
        }
      },
      "ViewColumnUpdate": {
        "content": {
          "application/json": {
            "schema": {
              "type": "object"
            }
          }
        }
      },
      "SortUpdate": {
        "content": {
          "application/json": {
            "schema": {
              "type": "object"
            }
          }
        }
      },
      "FilterUpdate": {
        "content": {
          "application/json": {
            "schema": {
              "type": "object"
            }
          }
        }
      },
      "FilterCreate": {
        "content": {
          "application/json": {
            "schema": {
              "type": "object"
            }
          }
        }
      },
      "HookUpdate": {
        "content": {
          "application/json": {
            "schema": {
              "type": "object"
            }
          }
        }
      },
      "SharedViewUpdate": {
        "content": {
          "application/json": {
            "schema": {
              "type": "object"
            }
          }
        }
      }
    },
    "responses": {
      "ProjectList": {
        "description": "Example response",
        "content": {
          "application/json": {
            "schema": {
              "$ref": "#/components/schemas/ProjectList"
            },
            "examples": {
              "example-1": {
                "value": {
                  "projects": {
                    "list": [
                      {
                        "id": "string",
                        "title": "string",
                        "status": "string",
                        "description": "string",
                        "meta": "string",
                        "color": "string",
                        "deleted": "string",
                        "order": 0,
                        "bases": [
                          {
                            "id": "string",
                            "project_id": "string",
                            "alias": "string",
                            "type": "string",
                            "is_meta": true,
                            "config": null,
                            "created_at": null,
                            "updated_at": null
                          }
                        ],
                        "is_meta": true,
                        "prefix": "string",
                        "created_at": null,
                        "updated_at": null
                      }
                    ],
                    "pageInfo": {
                      "pageSize": 0,
                      "totalRows": 0,
                      "sort": "string",
                      "isFirstPage": true,
                      "isLastPage": true,
                      "page": 0
                    }
                  }
                }
              }
            }
          }
        }
      },
      "BaseList": {
        "description": "Example response",
        "content": {
          "application/json": {
            "schema": {
              "$ref": "#/components/schemas/BaseList"
            },
            "examples": {
              "example-1": {
                "value": {
                  "bases": {
                    "list": [
                      {
                        "id": "string",
                        "project_id": "string",
                        "alias": "string",
                        "host": "string",
                        "port": 0,
                        "username": "string",
                        "password": "string",
                        "database": "string",
                        "url": "string",
                        "params": "string",
                        "type": "string",
                        "ssl": "string"
                      }
                    ],
                    "pageInfo": {
                      "pageSize": 0,
                      "totalRows": 0,
                      "sort": "string",
                      "isFirstPage": true,
                      "isLastPage": true
                    }
                  }
                }
              }
            }
          }
        }
      },
      "TableList": {
        "description": "Example response",
        "content": {
          "application/json": {
            "schema": {
              "$ref": "#/components/schemas/TableList"
            }
          }
        }
      },
      "ColumnList": {
        "description": "Example response",
        "content": {
          "application/json": {
            "schema": {
              "$ref": "#/components/schemas/ColumnList"
            }
          }
        }
      },
      "FilterList": {
        "description": "Example response",
        "content": {
          "application/json": {
            "schema": {
              "$ref": "#/components/schemas/FilterList"
            }
          }
        }
      },
      "SortList": {
        "description": "Example response",
        "content": {
          "application/json": {
            "schema": {
              "$ref": "#/components/schemas/SortList"
            }
          }
        }
      },
      "ViewList": {
        "description": "Example response",
        "content": {
          "application/json": {
            "schema": {
              "$ref": "#/components/schemas/ViewList"
            },
            "examples": {
              "example-1": {
                "value": {
                  "views": {
                    "list": [
                      {
                        "id": "string",
                        "title": "string",
                        "alias": "string",
                        "deleted": true,
                        "order": 0
                      }
                    ],
                    "pageInfo": {
                      "pageSize": 0,
                      "totalRows": 0,
                      "sort": "string",
                      "isFirstPage": true,
                      "isLastPage": true
                    }
                  }
                }
              }
            }
          }
        }
      },
      "SharedViewList": {
        "description": "Example response",
        "content": {
          "application/json": {
            "schema": {
              "$ref": "#/components/schemas/SharedViewList"
            }
          }
        }
      },
      "HookList": {
        "description": "Example response",
        "content": {
          "application/json": {
            "schema": {
              "$ref": "#/components/schemas/HookList"
            }
          }
        }
      },
      "UserList": {
        "description": "Example response",
        "content": {
          "application/json": {
            "schema": {
              "$ref": "#/components/schemas/UserList"
            }
          }
        }
      }
    },
    "securitySchemes": {
      "xc-auth": {
        "name": "API Key",
        "type": "apiKey",
        "in": "header",
        "description": "JWT access token"
      },
      "xc-shared-base-id": {
        "name": "API Key",
        "type": "apiKey",
        "in": "header",
        "description": "Shared base uuid"
      }
    }
  }
}