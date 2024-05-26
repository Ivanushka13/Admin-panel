import "./ProductsDatatable.scss"
import {DataGrid} from '@mui/x-data-grid';
import React, {useState} from "react";
import ConfirmModal from "../Modal/ConfirmModal/ConfirmModal";
import {Link} from "react-router-dom";
import ApiFetcher from "../APIFetcher/APIFetcher";

const columns = [
    {field: 'id', headerName: 'Id', width: 100},
    {field: 'name', headerName: 'Name', width: 150},
    {field: 'categoryId', headerName: 'Category id', width: 100},
    {field: 'price', headerName: 'Price', width: 120},
    {field: 'count', headerName: "Count", width: 120},
    {field: 'description', headerName: "Description", width: 250},
    {field: 'image', headerName: "Image", width: 150},
];

export function ProductsDatatable() {
    const [url, setUrl] = useState("https://localhost:7153/Products");

    const [products, setProducts] = useState([]);

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
                        <Link to={"/products/view/" + params.row.id} style={{textDecoration: "none"}}>
                            <div className="viewButton">View</div>
                        </Link>
                        <Link to={"/products/edit/" + params.row.id} style={{textDecoration: "none"}}>
                            <div className="editButton">Edit</div>
                        </Link>
                        <div className="deleteButton" onClick={() => {
                            setShowModal(true);
                            setUrl("https://localhost:7153/Items?id=" + params.row.id)
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
                url="https://localhost:7153/Products"
                onDataLoad={(data) => {
                    setProducts(data);
                    setLoaded(true);
                }}
                loaded={loaded}
            />
            <div className="datatable">
                <DataGrid
                    rows={products}
                    columns={columns.concat(actionColumn)}
                    pageSize={10}
                    rowsPerPageOptions={[10]}
                />
            </div>
            <ConfirmModal
                open={showModal}
                onClose={() => setShowModal(false)}
                text="Are you sure to delete product?"
                url={url}
                loaded={() => setLoaded(false)}
            />
        </div>
    )
}