import "./OrdersDatatable.scss"
import {DataGrid} from '@mui/x-data-grid';
import React, {useState} from "react";
import ConfirmModal from "../Modal/ConfirmModal/ConfirmModal";
import {Link} from "react-router-dom";
import ApiFetcher from "../APIFetcher/APIFetcher";

const columns = [
    {field: 'id', headerName: 'Id', width: 100},
    {field: 'dateAndTime', headerName: 'Date and time', width: 250},
    {field: 'clientId', headerName: 'Client id', width: 100},
    {field: 'shoppingCart', headerName: 'Shopping cart', width: 200},
    {field: 'price', headerName: 'Order price', width: 150},
    {field: 'status', headerName: 'Status', width: 200},
];

export function OrdersDatatable() {
    const [url, setUrl] = useState("https://localhost:7153/Orders");

    const [orders, setOrders] = useState([]);

    const [loaded, setLoaded] = useState(false);

    const [showModal, setShowModal] = useState(false);

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
                            setShowModal(true);
                            setUrl("https://localhost:7153/Orders?id=" + params.row.id)
                        }}>Delete
                        </div>
                    </div>
                )
            }
        }
    ]
    return (
        <div className="data">
            <ApiFetcher
                url="https://localhost:7153/Orders"
                onDataLoad={(data) => {
                    setOrders(data);
                    setLoaded(true);
                }}
                loaded={loaded}
            />
            <div className="datatable">
                <DataGrid
                    rows={orders}
                    columns={columns.concat(actionColumn)}
                    pageSize={10}
                    rowsPerPageOptions={[10]}
                />
            </div>
            <ConfirmModal
                open={showModal}
                onClose={() => setShowModal(false)}
                text="Are you sure to delete order?"
                url={url}
                loaded={() => setLoaded(false)}
            />
        </div>
    )
}