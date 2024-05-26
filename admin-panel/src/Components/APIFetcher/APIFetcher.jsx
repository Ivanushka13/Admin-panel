import React, { useState, useEffect } from "react";
import Axios from "axios";

const ApiFetcher = ({ url, onDataLoad, loaded }) => {
    useEffect(() => {
        if (loaded) return;
        Axios.get(url)
            .then(res => {
                onDataLoad(res.data);
            })
            .catch(err => {
                console.error("Error fetching data: ", err);
            });
    }, [url, onDataLoad, loaded]);

    return null;
};

export default ApiFetcher;
