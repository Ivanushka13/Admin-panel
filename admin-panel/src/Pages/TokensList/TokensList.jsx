import "./TokensList.scss"
import SideBar from "../../Components/SideBar/SideBar";
import NavBar from "../../Components/NavBar/NavBar";
import {Link} from "react-router-dom";
import Datatable from "../../Components/Datatable/Datatable";

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
        <div className="list">
            <SideBar/>
            <div className="listContainer">
                <NavBar/>
                <div className="datatable">
                    <div className="listTitle">
                        <h1>Tokens</h1>
                    </div>
                    <Datatable
                        columns={columns}
                        url={url}
                        actionColumn={actionColumn}
                    />
                    <Link to="/tokens/new">
                        <button className="mainButton">Add new token</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}