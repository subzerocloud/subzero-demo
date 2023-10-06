// Internal permissions can be defined here.
// They are useful when the underlying database does not have that capability or when the database is not under your control to define api specific roles.
// Permission system is modeled after PostgreSql GRANT + RLS functionality.
// If the permissions array is empty, the internal permission system is disabled and assumes that the underlying database has the
// necessary permissions configured.


export default [
    {
        "table_schema": "public",
        "table_name": "Album",
        "role": "authenticated",
        "grant": [
            "select",
            "insert",
            "update",
            "delete"
        ],
        "policy_for": [
            "select",
            "insert",
            "update",
            "delete"
        ],
        "using": [
            {
                "sql": "true"
            }
        ],
        "check": [
            {
                "sql": "true"
            }
        ]
    },
    {
        "table_schema": "public",
        "table_name": "Artist",
        "role": "authenticated",
        "grant": [
            "select",
            "insert",
            "update",
            "delete"
        ],
        "policy_for": [
            "select",
            "insert",
            "update",
            "delete"
        ],
        "using": [
            {
                "sql": "true"
            }
        ],
        "check": [
            {
                "sql": "true"
            }
        ]
    },
    {
        "table_schema": "public",
        "table_name": "Customer",
        "role": "authenticated",
        "grant": [
            "select",
            "insert",
            "update",
            "delete"
        ],
        "policy_for": [
            "select",
            "insert",
            "update",
            "delete"
        ],
        "using": [
            {
                "sql": "true"
            }
        ],
        "check": [
            {
                "sql": "true"
            }
        ]
    },
    {
        "table_schema": "public",
        "table_name": "Employee",
        "role": "authenticated",
        "grant": [
            "select",
            "insert",
            "update",
            "delete"
        ],
        "policy_for": [
            "select",
            "insert",
            "update",
            "delete"
        ],
        "using": [
            {
                "sql": "true"
            }
        ],
        "check": [
            {
                "sql": "true"
            }
        ]
    },
    {
        "table_schema": "public",
        "table_name": "Genre",
        "role": "authenticated",
        "grant": [
            "select",
            "insert",
            "update",
            "delete"
        ],
        "policy_for": [
            "select",
            "insert",
            "update",
            "delete"
        ],
        "using": [
            {
                "sql": "true"
            }
        ],
        "check": [
            {
                "sql": "true"
            }
        ]
    },
    {
        "table_schema": "public",
        "table_name": "Invoice",
        "role": "authenticated",
        "grant": [
            "select",
            "insert",
            "update",
            "delete"
        ],
        "policy_for": [
            "select",
            "insert",
            "update",
            "delete"
        ],
        "using": [
            {
                "sql": "true"
            }
        ],
        "check": [
            {
                "sql": "true"
            }
        ]
    },
    {
        "table_schema": "public",
        "table_name": "InvoiceLine",
        "role": "authenticated",
        "grant": [
            "select",
            "insert",
            "update",
            "delete"
        ],
        "policy_for": [
            "select",
            "insert",
            "update",
            "delete"
        ],
        "using": [
            {
                "sql": "true"
            }
        ],
        "check": [
            {
                "sql": "true"
            }
        ]
    },
    {
        "table_schema": "public",
        "table_name": "MediaType",
        "role": "authenticated",
        "grant": [
            "select",
            "insert",
            "update",
            "delete"
        ],
        "policy_for": [
            "select",
            "insert",
            "update",
            "delete"
        ],
        "using": [
            {
                "sql": "true"
            }
        ],
        "check": [
            {
                "sql": "true"
            }
        ]
    },
    {
        "table_schema": "public",
        "table_name": "Playlist",
        "role": "authenticated",
        "grant": [
            "select",
            "insert",
            "update",
            "delete"
        ],
        "policy_for": [
            "select",
            "insert",
            "update",
            "delete"
        ],
        "using": [
            {
                "sql": "true"
            }
        ],
        "check": [
            {
                "sql": "true"
            }
        ]
    },
    {
        "table_schema": "public",
        "table_name": "PlaylistTrack",
        "role": "authenticated",
        "grant": [
            "select",
            "insert",
            "update",
            "delete"
        ],
        "policy_for": [
            "select",
            "insert",
            "update",
            "delete"
        ],
        "using": [
            {
                "sql": "true"
            }
        ],
        "check": [
            {
                "sql": "true"
            }
        ]
    },
    {
        "table_schema": "public",
        "table_name": "Track",
        "role": "authenticated",
        "grant": [
            "select",
            "insert",
            "update",
            "delete"
        ],
        "policy_for": [
            "select",
            "insert",
            "update",
            "delete"
        ],
        "using": [
            {
                "sql": "true"
            }
        ],
        "check": [
            {
                "sql": "true"
            }
        ]
    }
]


    // other examples
    // {
    //     "name": "public can see rows marked as public",
    //     "table_schema": "public", "table_name": "permissions_check",
    //     "role": "public",
    //     "grant": ["select"], "columns": ["id", "value"],
    //     "policy_for": ["select"], 
    //     "using": [{"column":"public","op":"=","val":"1"}]
    // },
    // {
    //     "name": "validation for hidden value",
    //     "table_schema": "public", "table_name": "permissions_check",
    //     "role": "public",
    //     "restrictive": true,
    //     "check": [{
    //         "tree":{
    //             "logic_op":"or",
    //             "conditions":[
    //                 {"column":"hidden","op":"=","val":"Hidden"},
    //                 {"column":"hidden","op":"=","val":"Hidden changed"}
    //             ]
    //         }
    //     }]
    // },
    // {
    //     "name": "admin allow all",
    //     "table_schema": "public", "table_name": "permissions_check",
    //     "role": "admin",
    //     "grant": ["select", "insert", "update", "delete"],
    //     "policy_for": ["select", "insert", "update", "delete"],
    //     "using": [{"sql":"true"}],
    //     "check": [{"sql":"true"}]
    // },
    // {
    //     "name": "alice allow owned",
    //     "table_schema": "public","table_name": "permissions_check",
    //     "role": "alice",
    //     "grant": ["all"],
    //     "policy_for": ["select", "insert", "update", "delete"],
    //     "using": [{"column":"role","op":"=","env":"request.jwt.claims","env_part":"role"}],
    //     "check": [{"column":"role","op":"=","env":"request.jwt.claims","env_part":"role"}]
    // },
    // {
    //     "name": "bob allow owned",
    //     "table_schema": "public","table_name": "permissions_check",
    //     "role": "bob",
    //     "grant": ["all"],
    //     "policy_for": ["all"],
    //     "using": [{"column":"role","op":"=","val":"bob"}],
    //     "check": [{"column":"role","op":"=","val":"bob"}]
    // },