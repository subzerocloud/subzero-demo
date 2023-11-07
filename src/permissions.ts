// Internal permissions can be defined here.
// They are useful when the underlying database does not have that capability or when the database is not under your control to define api specific roles.
// Permission system is modeled after PostgreSql GRANT + RLS functionality.
// If the permissions array is empty, the internal permission system is disabled and assumes that the underlying database has the
// necessary permissions configured.


export default [
    {
        table_name: 'Album', table_schema: 'public',
        role: 'authenticated',
        grant: ['select', 'delete'],
        columns: ['AlbumId', 'Title', 'ArtistId'],
    },
    {
        table_name: 'Album', table_schema: 'public',
        role: 'authenticated',
        grant: ['insert', 'update'],
        columns: ['Title', 'ArtistId'],
    },
    {
        table_name: 'Album', table_schema: 'public',
        role: 'authenticated',
        policy_for: ['select', 'insert', 'update', 'delete'],
        using: [{ "sql": "true" }],
        check: [{ "sql": "true" }],
    },

    {
        table_name: 'Artist', table_schema: 'public',
        role: 'authenticated',
        grant: ['select', 'delete'],
        columns: ['ArtistId', 'Name'],
    },
    {
        table_name: 'Artist', table_schema: 'public',
        role: 'authenticated',
        grant: ['insert', 'update'],
        columns: ['Name'],
    },
    {
        table_name: 'Artist', table_schema: 'public',
        role: 'authenticated',
        policy_for: ['select', 'insert', 'update', 'delete'],
        using: [{ "sql": "true" }],
        check: [{ "sql": "true" }],
    },

    {
        table_name: 'Customer', table_schema: 'public',
        role: 'authenticated',
        grant: ['select', 'delete'],
        columns: ['CustomerId', 'FirstName', 'LastName', 'Company', 'Address', 'City', 'State', 'Country', 'PostalCode', 'Phone', 'Fax', 'Email', 'SupportRepId'],
    },
    {
        table_name: 'Customer', table_schema: 'public',
        role: 'authenticated',
        grant: ['insert', 'update'],
        columns: ['FirstName', 'LastName', 'Company', 'Address', 'City', 'State', 'Country', 'PostalCode', 'Phone', 'Fax', 'Email', 'SupportRepId'],
    },
    {
        table_name: 'Customer', table_schema: 'public',
        role: 'authenticated',
        policy_for: ['select', 'insert', 'update', 'delete'],
        using: [{ "sql": "true" }],
        check: [{ "sql": "true" }],
    },

    {
        table_name: 'Employee', table_schema: 'public',
        role: 'authenticated',
        grant: ['select', 'delete'],
        columns: ['EmployeeId', 'LastName', 'FirstName', 'Title', 'ReportsTo', 'BirthDate', 'HireDate', 'Address', 'City', 'State', 'Country', 'PostalCode', 'Phone', 'Fax', 'Email'],
    },
    {
        table_name: 'Employee', table_schema: 'public',
        role: 'authenticated',
        grant: ['insert', 'update'],
        columns: ['LastName', 'FirstName', 'Title', 'ReportsTo', 'BirthDate', 'HireDate', 'Address', 'City', 'State', 'Country', 'PostalCode', 'Phone', 'Fax', 'Email'],
    },
    {
        table_name: 'Employee', table_schema: 'public',
        role: 'authenticated',
        policy_for: ['select', 'insert', 'update', 'delete'],
        using: [{ "sql": "true" }],
        check: [{ "sql": "true" }],
    },

    {
        table_name: 'Genre', table_schema: 'public',
        role: 'authenticated',
        grant: ['select', 'delete'],
        columns: ['GenreId', 'Name'],
    },
    {
        table_name: 'Genre', table_schema: 'public',
        role: 'authenticated',
        grant: ['insert', 'update'],
        columns: ['Name'],
    },
    {
        table_name: 'Genre', table_schema: 'public',
        role: 'authenticated',
        policy_for: ['select', 'insert', 'update', 'delete'],
        using: [{ "sql": "true" }],
        check: [{ "sql": "true" }],
    },

    {
        table_name: 'Invoice', table_schema: 'public',
        role: 'authenticated',
        grant: ['select', 'delete'],
        columns: ['InvoiceId', 'CustomerId', 'InvoiceDate', 'BillingAddress', 'BillingCity', 'BillingState', 'BillingCountry', 'BillingPostalCode', 'Total'],
    },
    {
        table_name: 'Invoice', table_schema: 'public',
        role: 'authenticated',
        grant: ['insert', 'update'],
        columns: ['CustomerId', 'InvoiceDate', 'BillingAddress', 'BillingCity', 'BillingState', 'BillingCountry', 'BillingPostalCode', 'Total'],
    },
    {
        table_name: 'Invoice', table_schema: 'public',
        role: 'authenticated',
        policy_for: ['select', 'insert', 'update', 'delete'],
        using: [{ "sql": "true" }],
        check: [{ "sql": "true" }],
    },

    {
        table_name: 'InvoiceLine', table_schema: 'public',
        role: 'authenticated',
        grant: ['select', 'delete'],
        columns: ['InvoiceLineId', 'InvoiceId', 'TrackId', 'UnitPrice', 'Quantity'],
    },
    {
        table_name: 'InvoiceLine', table_schema: 'public',
        role: 'authenticated',
        grant: ['insert', 'update'],
        columns: ['InvoiceId', 'TrackId', 'UnitPrice', 'Quantity'],
    },
    {
        table_name: 'InvoiceLine', table_schema: 'public',
        role: 'authenticated',
        policy_for: ['select', 'insert', 'update', 'delete'],
        using: [{ "sql": "true" }],
        check: [{ "sql": "true" }],
    },

    {
        table_name: 'MediaType', table_schema: 'public',
        role: 'authenticated',
        grant: ['select', 'delete'],
        columns: ['MediaTypeId', 'Name'],
    },
    {
        table_name: 'MediaType', table_schema: 'public',
        role: 'authenticated',
        grant: ['insert', 'update'],
        columns: ['Name'],
    },
    {
        table_name: 'MediaType', table_schema: 'public',
        role: 'authenticated',
        policy_for: ['select', 'insert', 'update', 'delete'],
        using: [{ "sql": "true" }],
        check: [{ "sql": "true" }],
    },

    {
        table_name: 'Playlist', table_schema: 'public',
        role: 'authenticated',
        grant: ['select', 'delete'],
        columns: ['PlaylistId', 'Name'],
    },
    {
        table_name: 'Playlist', table_schema: 'public',
        role: 'authenticated',
        grant: ['insert', 'update'],
        columns: ['Name'],
    },
    {
        table_name: 'Playlist', table_schema: 'public',
        role: 'authenticated',
        policy_for: ['select', 'insert', 'update', 'delete'],
        using: [{ "sql": "true" }],
        check: [{ "sql": "true" }],
    },

    {
        table_name: 'Track', table_schema: 'public',
        role: 'authenticated',
        grant: ['select', 'delete'],
        columns: ['TrackId', 'Name', 'AlbumId', 'MediaTypeId', 'GenreId', 'Composer', 'Milliseconds', 'Bytes', 'UnitPrice'],
    },
    {
        table_name: 'Track', table_schema: 'public',
        role: 'authenticated',
        grant: ['insert', 'update'],
        columns: ['Name', 'AlbumId', 'MediaTypeId', 'GenreId', 'Composer', 'Milliseconds', 'Bytes', 'UnitPrice'],
    },
    {
        table_name: 'Track', table_schema: 'public',
        role: 'authenticated',
        policy_for: ['select', 'insert', 'update', 'delete'],
        using: [{ "sql": "true" }],
        check: [{ "sql": "true" }],
    },

    {
        table_name: 'PlaylistTrack', table_schema: 'public',
        role: 'authenticated',
        grant: ['all']
    },
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