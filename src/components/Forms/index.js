import { useState } from "react";

export default function Form() {

    const [title, setTitle] = useState('');

    const handle1 = (e) => {
        e.preventDefault();
        console.log({ title })
    }
    return (<>
        <form onSubmit={handle1}>
            <input type="text"
                value={title}
                onChange={(e) => { setTitle(e.target.value) }}
                placeholder="Enter the title"
                maxLength={5}
            />
            <div>
                {title}
            </div>
            <button>Add Post</button>
        </form>

    </>);
}