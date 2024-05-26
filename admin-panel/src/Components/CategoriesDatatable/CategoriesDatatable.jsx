import "./CategoriesDatatable.scss";
import { DataGrid } from '@mui/x-data-grid';
import React, { useState } from "react";
import ConfirmModal from "../Modal/ConfirmModal/ConfirmModal";
import { Link } from "react-router-dom";
import ApiFetcher from "../APIFetcher/APIFetcher"; // Импортируем новый компонент

const columns = [
    { field: 'id', headerName: 'Id', width: 100 },
    { field: 'name', headerName: 'Name', width: 200 },
    { field: 'image', headerName: 'Image', width: 250 },
];

export function CategoriesDatatable() {
    const [url, setUrl] = useState("https://localhost:7153/Categories");

    const [categories, setCategories] = useState([]);
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
                        <Link to={"/categories/edit/" + params.row.id} style={{ textDecoration: "none" }}>
                            <div className="editButton">Edit</div>
                        </Link>
                        <div className="deleteButton" onClick={() => {
                            setShowModal(true);
                            setUrl("https://localhost:7153/Categories?id=" + params.row.id);
                        }}>Delete</div>
                    </div>
                );
            }
        }
    ];

    return (
        <div className="data">
            <ApiFetcher
                url="https://localhost:7153/Categories"
                onDataLoad={(data) => {
                    setCategories(data);
                    setLoaded(true);
                }}
                loaded={loaded}
            />
            <div className="datatable">
                <DataGrid
                    rows={categories}
                    columns={columns.concat(actionColumn)}
                    pageSize={10}
                    rowsPerPageOptions={[10]}
                />
            </div>
            <div className="window">
                <ConfirmModal
                    open={showModal}
                    onClose={() => setShowModal(false)}
                    text="Are you sure to delete category?"
                    url={url}
                    loaded={() => setLoaded(false)}
                />
            </div>
        </div>
    );
}
