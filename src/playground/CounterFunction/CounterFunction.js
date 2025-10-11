import { useRef } from 'react';

export default function CounterFunction(props) {
    const { title, agree } = props;
    const inputRef = useRef();
    const handleClick = () => {
        inputRef.current.focus();
        inputRef.current.value = "Ok!";

    }
    console.log('Function component rendered');

    return (
        <>
            <p>{title} for {props.userName}  {agree ? 'Yes' : 'NO'}</p>
            <input type="text" placeholder="Please focus" ref={inputRef} />
            <button type="button" onClick={handleClick}>Press button</button>
        </>

    )
}