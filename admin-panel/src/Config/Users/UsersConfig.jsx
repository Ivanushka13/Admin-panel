export const usersColumns = [
    { field: 'id', headerName: 'Id', width: 100 },
    { field: 'firstName', headerName: 'First name', width: 150 },
    { field: 'lastName', headerName: 'Last name', width: 150 },
    { field: 'email', headerName: "Client's email", width: 200 },
    { field: 'phoneNumber', headerName: 'Phone number', width: 150 },
    { field: 'role', headerName: "Role", width: 100 },
    { field: 'shoppingCart', headerName: "Shopping cart", width: 150 },
];

export const usersActionColumn = [
    {
        field: 'action',
        headerName: 'Action',
        width: 200,
        renderCell: (params) => {
            return (
                <div className="cellAction">
                    <Link to={"/users/view/" + params.row.id} style={{ textDecoration: "none" }}>
                        <div className="viewButton">View</div>
                    </Link>
                    <Link to={"/users/edit/" + params.row.id} style={{ textDecoration: "none" }}>
                        <div className="editButton">Edit</div>
                    </Link>
                    <div className="deleteButton" onClick={() => {
                        // Handle delete action
                    }}>Delete</div>
                </div>
            );
        }
    }
];
