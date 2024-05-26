import "./ProductsList.scss"
import SideBar from "../../Components/SideBar/SideBar";
import NavBar from "../../Components/NavBar/NavBar";
import {Link} from "react-router-dom";
import Datatable from "../../Components/Datatable/Datatable";

const columns = [
    {field: 'id', headerName: 'Id', width: 100},
    {field: 'name', headerName: 'Name', width: 150},
    {field: 'categoryId', headerName: 'Category id', width: 100},
    {field: 'price', headerName: 'Price', width: 120},
    {field: 'count', headerName: "Count", width: 120},
    {field: 'description', headerName: "Description", width: 250},
    {field: 'image', headerName: "Image", width: 150},
];

const url = "https://localhost:7153/Products"


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
                    }}>Delete
                    </div>
                </div>
            )
        }
    }
]

export const ProductsList = () => {
    return (
        <div className="list">
            <SideBar/>
            <div className="listContainer">
                <NavBar/>
                <div className="datatable">
                    <div className="listTitle">
                        <h1>Products</h1>
                    </div>
                    <Datatable
                        columns={columns}
                        url={url}
                        actionColumn={actionColumn}
                    />
                    <Link to="/products/new">
                        <button className="mainButton">Add new product</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}