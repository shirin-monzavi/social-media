import Prime from "./prime.js";
import CounterClass from "./CounterClass/CounterClass.js";
import CounterFunction from "./CounterFunction/CounterFunction.js";
import { useState } from "react";

export default function Playground() {
    const maxCount = 200;
    const primeN = Prime(maxCount);
    const [user, setUserName] = useState('Mary');

    console.log('Playground rendered');

    const [displayClassCom, setDisplayClassCom] = useState(false);
    const handleUserName = () => {
        setUserName('Shirin')
    }

    return (
        <>
            <button onClick={handleUserName}>Change Name</button>
            <h1>Playground</h1>
            <p> The max number is {maxCount}</p>

            <p> The max prime number is {primeN}</p>
            <hr />
            <h2>Counter Class:</h2>
            <label>
                Display Counter:
                <input type="checkbox"
                    onChange={(e) => setDisplayClassCom(e.target.checked)}
                    checked={displayClassCom}
                />
            </label>
            <CounterClass userName={user} />
            <hr />
            <h2>Counter Function:</h2>
            <CounterFunction userName={user} />
            <hr />
        </>
    )
}