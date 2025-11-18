import { useRef, useState } from "react";
import { categories, statuses } from '../../includes/variable';
import './style.scss';
import { useDispatch } from "react-redux";
import { addPost } from "../../redux/postSlice";
import * as database from "../../database";

export default function Form() {
    const dispatch = useDispatch();

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [promote, setPromote] = useState(true);
    const [status, setStatues] = useState('');
    const [errorMessages, setErrorMessage] = useState([]);
    const [showMessage, setShowMessage] = useState(false);
    const [isSaving, setIsSaving] = useState(false);
    const [picture, setPicture] = useState('');
    const inputFile = useRef();

    const handleSubmit = async (e) => {
        e.preventDefault();
        let errorMessage = [];

        if (title === '') {
            errorMessage.push("Title is required.")
        }
        if (description === '') {
            errorMessage.push("Description is required.")
        }
        if (category === '') {
            errorMessage.push("Category is required.")
        }
        if (status === '') {
            errorMessage.push("Status is required.")
        }

        setErrorMessage(errorMessage);
        setShowMessage(false)

        if (errorMessage.length === 0) {
            const data = {
                title,
                description,
                promote,
                picture,
                category,
                status,
                like: 0,
                dislike: 0,
            };
            setIsSaving(true);

            const file = inputFile.current.files[0];
            database.uploadPicture(file);

            const id = await database.save(data);

            if (id) {
                data.id = id;

                dispatch(addPost(data));
                setTitle('');
                setCategory('');
                setDescription('');
                setPromote(true);
                setPicture('');
                setStatues('');
                if (inputFile.current) {
                    inputFile.current.value = '';
                }

                setShowMessage(true);
            } else {
                setErrorMessage(['Failed']);
            }
            setIsSaving(false);
        }
    }

    const handleStatus = (e) => {
        setStatues(e.target.value)
    }

    const handleFile = (e) => {
        const fileReader = new FileReader();
        fileReader.readAsDataURL(e.target.files[0]);
        fileReader.onload = (event) => {
            setPicture(event.target.result)
        }
    }

    if (isSaving) {
        return <div>Loading...</div>
    }

    return (
        <form onSubmit={handleSubmit} className="form-component">
            {showMessage && (<div className="success-message">
                Form successfully submitted!
            </div>)}
            {errorMessages.length > 0 &&
                <div className="form-validate">
                    Invalid Data:
                    <ul>
                        {errorMessages.map((m) => <li>{m}</li>)}
                    </ul>
                </div>
            }
            <br />
            <div>
                <label htmlFor="title">
                    Title:
                    <input
                        id="title"
                        type="text"
                        value={title}
                        onChange={(e) => { setTitle(e.target.value) }}
                        placeholder="Enter the title"
                        maxLength={5}
                    />
                </label>
            </div>
            <div>
                <label>
                    Description:
                    <textarea placeholder="Enter description"
                        maxLength={20}
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </label>
            </div>

            <div>
                <label>
                    Category:
                    <select value={category} onChange={(e) => setCategory(e.target.value)}>
                        <option>- Select -</option>
                        {
                            categories.map((item) =>
                                <option value={item.id} key={item.id}>
                                    {item.title}
                                </option>
                            )}
                    </select>
                </label>
            </div>

            <div className="promote-field">
                <label>
                    <input type="checkbox" checked={promote} onChange={(e) => setPromote(e.target.checked)} />
                    Promote
                </label>
            </div>

            <div className="status-field">
                Status:
                {statuses.map((item) =>
                    <label key={item.id}>
                        <input type="radio"
                            value={item.id}
                            onChange={handleStatus}
                            checked={item.id === status}
                        />
                        {item.text}
                    </label>
                )}
            </div>

            <fieldset>
                <legend>Picture</legend>
                <label>Select an image:
                    <input type="file" onChange={handleFile} ref={inputFile} />
                </label>
                <img src={picture} width={200} alt="Preview" />
            </fieldset>

            <div> <button>Send</button></div>
        </form>
    );
}