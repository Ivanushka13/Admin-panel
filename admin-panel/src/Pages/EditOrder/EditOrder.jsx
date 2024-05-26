import "./EditOrder.scss"
import SideBar from "../../Components/SideBar/SideBar";
import NavBar from "../../Components/NavBar/NavBar";
import {Link, useParams} from 'react-router-dom';
import {useEffect, useState} from "react";
import InfoModal from "../../Components/Modal/InfoModal/InfoModal";
import APIFetcher from "../../Components/APIFetcher/APIFetcher";


const EditOrder = () => {
    const params = useParams();

    const [infoModal, setInfoModal] = useState(false);

    const [order, setOrder] = useState({
        id: params.orderId,
        dateAndTime: "",
        clientId: -1,
        price: 0,
        status: "",
    });

    const {id, dateAndTime, clientId, price, status} = order;

    const [message, setMessage] = useState('')

    const onInputChange = (e) => {
        setOrder({...order, [e.target.name]: e.target.value});
    }

    const handleSuccess = (data) => {
        setOrder(data);
    };

    const handleError = (error) => {
        console.error(error);
        setMessage("Something went wrong, please check if data is correct.");
        setInfoModal(true);
    };

    const onSubmit = async () => {
        APIFetcher({
            url: `https://localhost:7153/Orders?id=${params.orderId}`,
            method: 'PUT',
            data: order,
            onSuccess: () => {
                setMessage("Order updated successfully.");
                setInfoModal(true);
            },
            onError: handleError
        });
    }

    useEffect(() => {
        APIFetcher({
            url: `https://localhost:7153/Orders/byId?id=${params.orderId}`,
            method: 'GET',
            onSuccess: handleSuccess,
            onError: handleError
        });
    }, [params.orderId]);

    return (
        <div className="data">
            <div className="new">
                <SideBar/>
                <div className="newContainer">
                    <NavBar/>
                    <div className="top">
                        <h1>Edit Order</h1>
                    </div>
                    <div className="bottom">
                        <div className="left">
                            <form>
                                <div className="formInput">
                                    <label>Id</label>
                                    <input value={id} onChange={(e) => onInputChange(e)} type="text"
                                           name="id"/>
                                </div>
                                <div className="formInput">
                                    <label>Price</label>
                                    <input value={price} onChange={(e) => onInputChange(e)} type="email"
                                           name="price"/>
                                </div>
                                <div className="formInput">
                                    <label>Client ID</label>
                                    <input value={clientId} onChange={(e) => onInputChange(e)} type="text"
                                           name="clientId"/>
                                </div>
                            </form>
                        </div>
                        <div className="right">
                            <form>
                                <div className="formInput">
                                    <label>Status</label>
                                    <input value={status} onChange={(e) => onInputChange(e)} type="text"
                                           name="status"/>
                                </div>
                                <div className="formInput">
                                    <label>Date and Time</label>
                                    <input value={dateAndTime} onChange={(e) => onInputChange(e)} type="text"
                                           name="dateAndTime"/>
                                </div>
                            </form>
                        </div>
                    </div>
                    <Link to="/orders">
                        <button>Cancel</button>
                    </Link>
                    <button onClick={onSubmit}>Save changes</button>
                </div>
            </div>
            <InfoModal
                open={infoModal}
                onClose={() => setInfoModal(false)}
                text={message}
            />
        </div>
    )
}

export default EditOrder