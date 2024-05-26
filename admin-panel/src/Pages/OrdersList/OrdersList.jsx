import "./OrdersList.scss"
import SideBar from "../../Components/SideBar/SideBar";
import "../../Components/SideBar/SideBar.scss"
import NavBar from "../../Components/NavBar/NavBar";
import {Link} from "react-router-dom";
import Datatable from "../../Components/Datatable/Datatable";

const columns = [
    {field: 'id', headerName: 'Id', width: 100},
    {field: 'dateAndTime', headerName: 'Date and time', width: 250},
    {field: 'clientId', headerName: 'Client id', width: 100},
    {field: 'shoppingCart', headerName: 'Shopping cart', width: 200},
    {field: 'price', headerName: 'Order price', width: 150},
    {field: 'status', headerName: 'Status', width: 200},
];

const url = "https://localhost:7153/Orders"

const actionColumn = [
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

export const OrdersList = () => {
    return (
        <div className="list">
            <SideBar/>
            <div className="listContainer">
                <NavBar/>
                <div className="datatable">
                    <div className="listTitle">
                        <h1>Orders</h1>
                    </div>
                    <Datatable
                        columns={columns}
                        url={url}
                        actionColumn={actionColumn}
                    />
                    <Link to="/orders/new">
                        <button className="mainButton">Add new order</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}