import "./CategoriesList.scss"
import SideBar from "../../Components/SideBar/SideBar";
import "../../Components/SideBar/SideBar.scss"
import NavBar from "../../Components/NavBar/NavBar";
import {Link} from "react-router-dom";
import Datatable from "../../Components/Datatable/Datatable";

const columns = [
    { field: 'id', headerName: 'Id', width: 100 },
    { field: 'name', headerName: 'Name', width: 200 },
    { field: 'image', headerName: 'Image', width: 250 },
];

const url = "https://localhost:7153/Categories"

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
                    }}>Delete</div>
                </div>
            );
        }
    }
];

export const CategoriesList = () => {
    return (
        <div className="list">
            <SideBar />
            <div className="listContainer">
                <NavBar />
                <div className="datatable">
                    <div className="listTitle">
                        <h1>Categories</h1>
                    </div>
                    <Datatable
                        columns={columns}
                        url={url}
                        actionColumn={actionColumn}
                    />
                    <Link to="/categories/new">
                        <button className="mainButton">Add new category</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}