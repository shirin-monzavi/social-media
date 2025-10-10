import { useState } from "react";

export default function Form({ onHandleAddPost }) {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [promote, setPromote] = useState(false);
    const [status, setStatues] = useState('');
    const [errorMessages, setErrorMessage] = useState([]);

    const [picture, setPicture] = useState('');
    const categories = [
        {
            id: 'edu',
            title: 'Edication'
        },
        {
            id: 'ent',
            title: 'Entertaiment'
        },
        {
            id: 'gam',
            title: 'Game'
        },
        {
            id: 'nws',
            title: 'News'
        },
        {
            id: 'oth',
            title: 'Other'
        }
    ]

    const statuses =
        [
            { id: 'd', text: 'Draft' },
            { id: 'p', text: 'Published' },
            { id: 'a', text: 'Archived' },
        ];

    const handleSubmit = (e) => {
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
        if (errorMessage.length === 0) {
            onHandleAddPost(title,description,promote,picture,category,status);
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

    return (
        <form onSubmit={handleSubmit}>
            <hr />
            {errorMessages.length > 0 &&
                <div>
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

            <div>
                <label>
                    <input type="checkbox" checked={promote} onChange={(e) => setPromote(e.target.checked)} />
                    Promote
                </label>
            </div>

            <div>
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
                <input type="file" onChange={handleFile} />
                <img src={picture} width={200} alt="Preview" />
            </fieldset>

            <button>Add Post</button>
        </form>
    );
}