import "./CategoriesList.scss"
import "../../Components/SideBar/SideBar.scss"
import {Link} from "react-router-dom";
import List from "../../Components/List/List";

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
        <List
            title="Categories"
            columns={columns}
            url={url}
            actionColumn={actionColumn}
            addNewLink="/categories/new"
        />
    );
}