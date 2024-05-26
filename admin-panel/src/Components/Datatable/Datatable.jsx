// Datatable.js
import "./Datatable.scss";
import { DataGrid } from '@mui/x-data-grid';
import React, { useState } from "react";
import ApiFetcher from "../APIFetcher/APIFetcher"; // Импортируем наш универсальный компонент для API-запросов

const Datatable = ({ columns, url, actionColumn }) => {
    const [data, setData] = useState([]);
    const [loaded, setLoaded] = useState(false);

    return (
        <div className="data">
            <ApiFetcher
                url={url}
                onDataLoad={(data) => {
                    setData(data);
                    setLoaded(true);
                }}
                loaded={loaded}
            />
            <div className="datatable">
                <DataGrid
                    rows={data}
                    columns={columns.concat(actionColumn)}
                    pageSize={10}
                    rowsPerPageOptions={[10]}
                />
            </div>
        </div>
    );
};

export default Datatable;
