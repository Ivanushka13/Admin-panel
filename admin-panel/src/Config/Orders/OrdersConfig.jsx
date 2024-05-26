export const ordersColumns = [
    {field: 'id', headerName: 'Id', width: 100},
    {field: 'dateAndTime', headerName: 'Date and time', width: 250},
    {field: 'clientId', headerName: 'Client id', width: 100},
    {field: 'shoppingCart', headerName: 'Shopping cart', width: 200},
    {field: 'price', headerName: 'Order price', width: 150},
    {field: 'status', headerName: 'Status', width: 200},
];


export const ordersActionColumn = [
    {
        field: 'action',
        headerName: 'Action',
        width: 200,
        renderCell: (params) => {
            return (
                <div className="cellAction">
                    <Link to={"/orders/view/" + params.row.id} style={{textDecoration: "none"}}>
                        <div className="viewButton">View</div>
                    </Link>
                    <Link to={"/orders/edit/" + params.row.id} style={{textDecoration: "none"}}>
                        <div className="editButton">Edit</div>
                    </Link>
                    <div className="deleteButton" onClick={() => {
                    }}>Delete
                    </div>
                </div>
            )
        }
    }
]