import "./EditProduct.scss"
import SideBar from "../../Components/SideBar/SideBar";
import NavBar from "../../Components/NavBar/NavBar";
import {Link, useParams} from 'react-router-dom';
import {useEffect, useState} from "react";
import InfoModal from "../../Components/Modal/InfoModal/InfoModal";
import APIFetcher from "../../Components/APIFetcher/APIFetcher";


const EditProduct = () => {
    const params = useParams();

    const [infoModal, setInfoModal] = useState(false);

    const [product, setProduct] = useState({
        id: params.userId,
        name: "",
        categoryId: "",
        price: "",
        count: "",
        description: "",
        image: "",
    });

    const {id, name, categoryId, price, count, description, image} = product;

    const [message, setMessage] = useState('')

    const onInputChange = (e) => {
        setProduct({...product, [e.target.name]: e.target.value});
    }

    const handleSuccess = (data) => {
        setProduct(data);
    };

    const handleError = (error) => {
        console.error(error);
        setMessage("Something went wrong, please check if data is correct.");
        setInfoModal(true);
    };

    const onSubmit = async () => {
        APIFetcher({
            url: `https://localhost:7153/Products?id=${params.productId}`,
            method: 'PUT',
            data: product,
            onSuccess: () => {
                setMessage("Product updated successfully.");
                setInfoModal(true);
            },
            onError: handleError
        });
    }

    useEffect(() => {
        APIFetcher({
            url: `https://localhost:7153/Products/byId?id=${params.productId}`,
            method: 'GET',
            onSuccess: handleSuccess,
            onError: handleError
        });
    }, [params.productId]);

    return (
        <div className="data">
            <div className="new">
                <SideBar/>
                <div className="newContainer">
                    <NavBar/>
                    <div className="top">
                        <h1>Edit Product</h1>
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
                                    <label>Name</label>
                                    <input value={name} onChange={(e) => onInputChange(e)} type="email"
                                           name="name"/>
                                </div>
                                <div className="formInput">
                                    <label>Category Id</label>
                                    <input value={categoryId} onChange={(e) => onInputChange(e)} type="text"
                                           name="categoryId"/>
                                </div>
                                <div className="formInput">
                                    <label>Price</label>
                                    <input value={price} onChange={(e) => onInputChange(e)} type="text"
                                           name="price"/>
                                </div>
                            </form>
                        </div>
                        <div className="right">
                            <form>
                                <div className="formInput">
                                    <label>Count</label>
                                    <input value={count} onChange={(e) => onInputChange(e)} type="text"
                                           name="count"/>
                                </div>
                                <div className="formInput">
                                    <label>Description</label>
                                    <input value={description} onChange={(e) => onInputChange(e)} type="text"
                                           name="description"/>
                                </div>
                                <div className="formInput">
                                    <label>Image</label>
                                    <input value={image} onChange={(e) => onInputChange(e)} type="text"
                                           name="image"/>
                                </div>
                            </form>
                        </div>
                    </div>
                    <Link to="/products">
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

export default EditProduct