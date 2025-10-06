import { useRef } from 'react';

export default function CounterFunction(props) {
    const { title, agree } = props;
    const inputRef = useRef();
    const handleClick = () => {
        inputRef.current.focus();
        inputRef.current.value = "Ok!";

    }
    return (
        <>
            <p>{title} {agree ? 'Yes' : 'NO'}</p>
            <input type="text" placeholder="Please focus" ref={inputRef} />
            <button type="button" onClick={handleClick}>Press button</button>
        </>

    )
}