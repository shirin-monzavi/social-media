import { useState } from "react";

export default function Form() {

    const [title, setTitle] = useState('');

    const handle1 = (e) => {
        e.preventDefault();
        console.log({title})
    }

    const handleTitle = (e) => {
        setTitle(e.target.value)
    }
    return (<>
        <form onSubmit={handle1}>
            <input type="text" value={title} onChange={handleTitle} />
            <div>
                {title}
            </div>
            <button>Add Post</button>
        </form>

    </>);
}