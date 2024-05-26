export const productsColumns = [
    {field: 'id', headerName: 'Id', width: 100},
    {field: 'name', headerName: 'Name', width: 150},
    {field: 'categoryId', headerName: 'Category id', width: 100},
    {field: 'price', headerName: 'Price', width: 120},
    {field: 'count', headerName: "Count", width: 120},
    {field: 'description', headerName: "Description", width: 250},
    {field: 'image', headerName: "Image", width: 150},
];

export const productsActionColumn = [
    {
        field: 'action',
        headerName: 'Action',
        width: 200,
        renderCell: (params) => {
            return (
                <div className="cellAction">
                    <Link to={"/products/view/" + params.row.id} style={{textDecoration: "none"}}>
                        <div className="viewButton">View</div>
                    </Link>
                    <Link to={"/products/edit/" + params.row.id} style={{textDecoration: "none"}}>
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