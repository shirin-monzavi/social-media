import { setSelectionRange } from "@testing-library/user-event/dist/utils";
import { useState } from "react";

export default function Form() {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handle1 = (e) => {
        e.preventDefault();
        console.log({ title })
                console.log({ description })
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
            <button>Add Post</button>
        </form>
    );
}