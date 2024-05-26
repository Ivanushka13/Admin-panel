import "./UsersDatatable.scss"
import {DataGrid} from '@mui/x-data-grid';
import React, {useState} from "react";
import {Link} from "react-router-dom";
import ConfirmModal from "../Modal/ConfirmModal/ConfirmModal";
import ApiFetcher from "../APIFetcher/APIFetcher";

const columns = [
    {field: 'id', headerName: 'Id', width: 100},
    {field: 'firstName', headerName: 'First name', width: 150},
    {field: 'lastName', headerName: 'Last name', width: 150},
    {field: 'email', headerName: "Client's email", width: 200},
    {field: 'phoneNumber', headerName: 'Phone number', width: 150},
    {field: 'role', headerName: "Role", width: 100},
    {field: 'shoppingCart', headerName: "Shopping cart", width: 150},
];

export function UsersDatatable() {

    const [url, setUrl] = useState("https://localhost:7153/Users");

    const [users, setUsers] = useState([]);

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
                        <Link to={"/users/view/" + params.row.id} style={{textDecoration: "none"}}>
                            <div className="viewButton">View</div>
                        </Link>
                        <Link to={"/users/edit/" + params.row.id} style={{textDecoration: "none"}}>
                            <div className="editButton">Edit</div>
                        </Link>
                        <div className="deleteButton" onClick={() => {
                            setShowModal(true);
                            setUrl("https://localhost:7153/Users?id=" + params.row.id)
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
                url="https://localhost:7153/Users"
                onDataLoad={(data) => {
                    setUsers(data);
                    setLoaded(true);
                }}
                loaded={loaded}
            />
            <div className="datatable">
                <DataGrid
                    rows={users}
                    columns={columns.concat(actionColumn)}
                    pageSize={10}
                    rowsPerPageOptions={[10]}
                />
            </div>
            <ConfirmModal
                open={showModal}
                onClose={() => setShowModal(false)}
                text="Are you sure to delete user?"
                url={url}
                loaded={() => setLoaded(false)}
            />
        </div>
    )
}