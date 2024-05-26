import "./TokensDatatable.scss"
import {DataGrid} from '@mui/x-data-grid';
import React, {useState} from "react";
import ConfirmModal from "../Modal/ConfirmModal/ConfirmModal";
import ApiFetcher from "../APIFetcher/APIFetcher";

const columns = [
    {field: 'email', headerName: 'User email', width: 200},
    {field: 'token', headerName: 'Token', width: 300},
];

export function TokensDatatable() {
    const [url, setUrl] = useState("https://localhost:7153/Tokens");

    const [tokens, setTokens] = useState([]);

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
                        <div className="editButton">Edit</div>
                        <div className="deleteButton" onClick={() => {
                            setShowModal(true);
                            setUrl("https://localhost:7153/Tokens?email=" + params.row.email.toString().replace('@', '%40'))
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
                url="https://localhost:7153/Tokens"
                onDataLoad={(data) => {
                    setTokens(data);
                    setLoaded(true);
                }}
                loaded={loaded}
            />
            <div className="datatable">
                <DataGrid
                    getRowId={(row) => row.email}
                    rows={tokens}
                    columns={columns.concat(actionColumn)}
                    pageSize={10}
                    rowsPerPageOptions={[10]}
                />
            </div>
            <ConfirmModal
                open={showModal}
                onClose={() => setShowModal(false)}
                text="Are you sure to delete token?"
                url={url}
                loaded={() => setLoaded(false)}
            />
        </div>
    )
}