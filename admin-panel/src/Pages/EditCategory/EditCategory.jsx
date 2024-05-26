import "./EditCategory.scss"
import SideBar from "../../Components/SideBar/SideBar";
import NavBar from "../../Components/NavBar/NavBar";
import {Link, useParams} from 'react-router-dom';
import {useEffect, useState} from "react";
import InfoModal from "../../Components/Modal/InfoModal/InfoModal";
import APIFetcher from "../../Components/APIFetcher/APIFetcher";


const EditCategory = () => {
    const params = useParams();

    const [infoModal, setInfoModal] = useState(false);

    const [category, setCategory] = useState({
        id: params.userId,
        name: "",
        image: "",
    });

    const {id, name, image} = category;

    const [message, setMessage] = useState('')

    const onInputChange = (e) => {
        setCategory({...category, [e.target.name]: e.target.value});
    }

    const handleSuccess = (data) => {
        setCategory(data);
    };

    const handleError = (error) => {
        console.error(error);
        setMessage("Something went wrong, please check if data is correct.");
        setInfoModal(true);
    };

    const onSubmit = async () => {
        APIFetcher({
            url: `https://localhost:7153/Categories?id=${params.categoryId}`,
            method: 'PUT',
            data: category,
            onSuccess: () => {
                setMessage("Category updated successfully.");
                setInfoModal(true);
            },
            onError: handleError
        });
    }

    useEffect(() => {
        APIFetcher({
            url: `https://localhost:7153/Categories/byId?id=${params.categoryId}`,
            method: 'GET',
            onSuccess: handleSuccess,
            onError: handleError
        });
    }, [params.categoryId]);

    return (
        <div className="data">
            <div className="new">
                <SideBar/>
                <div className="newContainer">
                    <NavBar/>
                    <div className="top">
                        <h1>Edit Category</h1>
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
                            </form>
                        </div>
                        <div className="right">
                            <form>
                                <div className="formInput">
                                    <label>Image</label>
                                    <input value={image} onChange={(e) => onInputChange(e)} type="text"
                                           name="image"/>
                                </div>
                            </form>
                        </div>
                    </div>
                    <Link to="/categories">
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

export default EditCategory