import React from "react";
import "./ListPage.scss";
import SideBar from "../SideBar/SideBar";
import NavBar from "../NavBar/NavBar";
import Datatable from "../Datatable/Datatable";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const ListPage = ({ title, columns, url, actionColumn, addNewLink }) => {
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

ListPage.propTypes = {
    title: PropTypes.string.isRequired,
    columns: PropTypes.array.isRequired,
    url: PropTypes.string.isRequired,
    actionColumn: PropTypes.array.isRequired,
    addNewLink: PropTypes.string.isRequired,
};

export default ListPage;
