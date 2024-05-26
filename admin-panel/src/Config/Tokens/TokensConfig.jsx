export const tokensColumns = [
    {field: 'email', headerName: 'User email', width: 200},
    {field: 'token', headerName: 'Token', width: 300},
];

export const tokensActionColumn = [
    {
        field: 'action',
        headerName: 'Action',
        width: 200,
        renderCell: (params) => {
            return (
                <div className="cellAction">
                    <div className="editButton">Edit</div>
                    <div className="deleteButton" onClick={() => {
                    }}>Delete
                    </div>
                </div>
            )
        }
    }
]