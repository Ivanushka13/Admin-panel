import { useState, useEffect } from "react";
import axios from "axios";

const APIFetcher = ({ url, method, data, onSuccess, onError }) => {
    const [response, setResponse] = useState(null);
    const [error, setError] = useState(null);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                let result;
                switch (method) {
                    case 'GET':
                        result = await axios.get(url);
                        break;
                    case 'POST':
                        result = await axios.post(url, data);
                        break;
                    case 'PUT':
                        result = await axios.put(url, data);
                        break;
                    case 'DELETE':
                        result = await axios.delete(url);
                        break;
                    default:
                        throw new Error(`Unsupported method: ${method}`);
                }
                setResponse(result.data);
                onSuccess && onSuccess(result.data);
            } catch (err) {
                setError(err);
                onError && onError(err);
            } finally {
                setLoaded(true);
            }
        };

        fetchData();
    }, [url, method, data, onSuccess, onError]);

    return { response, error, loaded };
};

export default APIFetcher;
