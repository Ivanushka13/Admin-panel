import "./NewCategory.scss"
import SideBar from "../../Components/SideBar/SideBar";
import NavBar from "../../Components/NavBar/NavBar";
import {Link} from 'react-router-dom';
import {useState} from "react";
import InfoModal from "../../Components/Modal/InfoModal/InfoModal";
import APIFetcher from "../../Components/APIFetcher/APIFetcher";

const NewCategory = () => {
    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [image, setImage] = useState('');

    const [showFailModal, setFailModal] = useState(false);
    const [message, setMessage] = useState('');

    const create = () => {

        let data = {
            "id": id,
            "name": name,
            "image": image,
        };
        APIFetcher({
            url: "https://localhost:7153/Categories",
            method: 'POST',
            data,
            onSuccess: () => {
                setMessage("Category created successfully.");
                setShowModal(true);
            },
            onError: (error) => {
                console.error(error);
                setMessage("Can't create category, please, check if data is correct.");
                setShowModal(true);
            }
        });
    }

    return (
        <div className="new">
            <SideBar/>
            <div className="newContainer">
                <NavBar/>
                <div className="top">
                    <h1>New Category</h1>
                </div>
                <div className="bottom">
                    <div className="left">
                        <form>
                            <div className="formInput">
                                <label>Id</label>
                                <input value={id} onChange={(e) => setId(e.target.value)} type="text"
                                       placeholder="100"/>
                            </div>
                            <div className="formInput">
                                <label>Name</label>
                                <input value={name} onChange={(e) => setName(e.target.value)} type="text"
                                       placeholder="White rose"/>
                            </div>
                        </form>
                    </div>
                    <div className="right">
                        <form>
                            <div className="formInput">
                                <label>Image</label>
                                <input value={image} onChange={(e) => setImage(e.target.value)} type="text"
                                       placeholder="link"/>
                            </div>
                        </form>
                    </div>
                </div>
                <Link to="/categories">
                    <button>Cancel</button>
                </Link>
                <button onClick={create}>Create a new category</button>
                <InfoModal
                    open={showFailModal}
                    onClose={() => setFailModal(false)}
                    text={message}
                />
            </div>
        </div>
    )
}

export default NewCategory