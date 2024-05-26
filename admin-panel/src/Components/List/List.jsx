import "./List.scss";
import SideBar from "../../Components/SideBar/SideBar";
import NavBar from "../../Components/NavBar/NavBar";
import Datatable from "../../Components/Datatable/Datatable";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const List = ({ title, columns, url, actionColumn, addNewLink }) => {
    return (
        <div className="list">
            <SideBar />
            <div className="listContainer">
                <NavBar />
                <div className="datatable">
                    <div className="listTitle">
                        <h1>{title}</h1>
                    </div>
                    <Datatable
                        columns={columns}
                        url={url}
                        actionColumn={actionColumn}
                    />
                    <Link to={addNewLink}>
                        <button className="mainButton">Add new {title.toLowerCase()}</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

List.propTypes = {
    title: PropTypes.string.isRequired,
    columns: PropTypes.array.isRequired,
    url: PropTypes.string.isRequired,
    actionColumn: PropTypes.array.isRequired,
    addNewLink: PropTypes.string.isRequired,
};

export default List;
