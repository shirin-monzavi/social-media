
import CounterClass from "./CounterClass/CounterClass.js";
import CounterFunction from "./CounterFunction/CounterFunction.js";
import { useState } from "react";

export default function Playground() {

    const [user, setUserName] = useState('Mary');
    const [displayClassCom, setDisplayClassCom] = useState(false);
    const [displayFunctionCom, setDisplayFunctionCom] = useState(false);

    const handleUserName = () => {
        setUserName('Shirin')
    }

    console.log('Playground rendered');

    return (
        <>
            <button onClick={handleUserName}>Change Name</button>
            <h1>Playground</h1>

            <hr />
            <h2>Counter Class:</h2>
            <label>
                Display Counter:
                <input type="checkbox"
                    onChange={(e) => setDisplayClassCom(e.target.checked)}
                    checked={displayClassCom}
                />
            </label>
            {displayClassCom && (<CounterClass userName={user} />)}

            <hr />
            <h2>Counter Function:</h2>
            <label>
                Display Function Counter:
                <input type="checkbox"
                    onChange={(e) => setDisplayFunctionCom(e.target.checked)}
                    checked={displayFunctionCom} />
            </label>
            {displayFunctionCom && <CounterFunction userName={user} />}

            <hr />
        </>
    )
}