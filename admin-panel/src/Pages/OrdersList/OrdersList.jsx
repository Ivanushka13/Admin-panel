import "./OrdersList.scss"
import "../../Components/SideBar/SideBar.scss"
import {Link} from "react-router-dom";
import List from "../../Components/List/List";

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
        <List
            title="Orders"
            columns={columns}
            url={url}
            actionColumn={actionColumn}
            addNewLink="/orders/new"
        />
    )
}