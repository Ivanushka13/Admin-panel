import "./UsersList.scss"
import SideBar from "../../Components/SideBar/SideBar";
import "../../Components/SideBar/SideBar.scss"
import NavBar from "../../Components/NavBar/NavBar";
import {Link} from 'react-router-dom';
import Datatable from "../../Components/Datatable/Datatable";

const columns = [
    {field: 'id', headerName: 'Id', width: 100},
    {field: 'firstName', headerName: 'First name', width: 150},
    {field: 'lastName', headerName: 'Last name', width: 150},
    {field: 'email', headerName: "Client's email", width: 200},
    {field: 'phoneNumber', headerName: 'Phone number', width: 150},
    {field: 'role', headerName: "Role", width: 100},
    {field: 'shoppingCart', headerName: "Shopping cart", width: 150},
];

const url = "https://localhost:7153/Users"

const actionColumn = [
    {
        field: 'action',
        headerName: 'Action',
        width: 200,
        renderCell: (params) => {
            return (
                <div className="cellAction">
                    <Link to={"/users/view/" + params.row.id} style={{textDecoration: "none"}}>
                        <div className="viewButton">View</div>
                    </Link>
                    <Link to={"/users/edit/" + params.row.id} style={{textDecoration: "none"}}>
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

export const UsersList = () => {
    return (
        <div className="list">
            <SideBar/>
            <div className="listContainer">
                <NavBar/>
                <div className="datatable">
                    <div className="listTitle">
                        <h1>Users</h1>
                    </div>
                    <Datatable
                        columns={columns}
                        url={url}
                        actionColumn={actionColumn}
                    />
                    <Link to="/users/new">
                        <button className="mainButton">Add new user</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}