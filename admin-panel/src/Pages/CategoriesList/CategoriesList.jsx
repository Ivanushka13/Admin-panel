import "./CategoriesList.scss"
import SideBar from "../../Components/SideBar/SideBar";
import "../../Components/SideBar/SideBar.scss"
import {CategoriesDatatable} from "../../Components/CategoriesDatatable/CategoriesDatatable";
import NavBar from "../../Components/NavBar/NavBar";
import {Link} from "react-router-dom";

export const CategoriesList = () => {
    return (
        <div className="list">
            <SideBar/>
            <div className="listContainer">
                <NavBar/>
                <div className="datatable">
                    <div className="listTitle">
                        <h1>Categories</h1>
                    </div>
                    <CategoriesDatatable/>
                    <Link to="/categories/new">
                        <button className="mainButton">Add new category</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}