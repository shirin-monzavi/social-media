import { useEffect, useRef, useState } from 'react';
import Prime from "./../prime.js";

export default function CounterFunction(props) {
    const { title, agree } = props;
    const [userName, setUserName] = useState('Ali')
    const [family, setFamily] = useState()
    const [count, setCount] = useState(0)
    const inputRef = useRef();

    // const [primeNumer, setPrimeNum] = useState(null)
    // const [maxPrimeNumer, setMaxPrimeNumner] = useState(null)
    // const [isCalculating, setIsCalaculate] = useState(true)


    const handleClick = () => {
        inputRef.current.focus();
        inputRef.current.value = "Ok!";
        setUserName('Mahdi')

    }

    useEffect(() => {
        console.log("mount");
        let counter = 0;

        var timer = setInterval(() => {
            console.log('h',counter)
        }, 10)
        return  ()=>{clearInterval(timer)};
    }, [])

    const handleFamily = () => {

        setFamily('Akbari');
        setCount(count + 1)
    }

    useEffect(() => {
        console.log('count' + count);

        return () => {
            console.log('unmount')
        }
    }, [count])



    return (
        <>
            {/* {isCalculating && (<p><strong>We are calculating please wait ...</strong></p>)}

            {maxPrimeNumer !== null && (<div>
                <p> The max number is {maxPrimeNumer}</p>
                <p> The max prime number is {primeNumer}</p>
            </div>)} */}

            <p>{title} for {props.userName}  {agree ? 'Yes' : 'NO'}</p>
            <p>{userName}</p>
            <p>{userName} {count}</p>
            <input type="text" placeholder="Please focus" ref={inputRef} />
            <button type="button" onClick={handleClick}>Press button</button>
            <button type="button" onClick={handleFamily}>Change family</button>

        </>

    )
}