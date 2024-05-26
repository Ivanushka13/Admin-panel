import "./TokensList.scss"
import List from "../../Components/List/List";

const columns = [
    {field: 'email', headerName: 'User email', width: 200},
    {field: 'token', headerName: 'Token', width: 300},
];

const url = "https://localhost:7153/Tokens"

const actionColumn = [
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

export const TokensList = () => {
    return (
        <List
            title="Tokens"
            columns={columns}
            url={url}
            actionColumn={actionColumn}
            addNewLink="/tokens/new"
        />
    )
}