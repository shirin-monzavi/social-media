import { useState } from "react";

export default function Form() {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [promote, setPromote] = useState(false);
    const [status, setStatues] = useState('');
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

    const handle1 = (e) => {
        e.preventDefault();
        console.log({ title })
        console.log({ description })
        console.log({ category })
        console.log({ promote })
        console.log({ status })
        console.log(picture)
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
        <form onSubmit={handle1}>
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