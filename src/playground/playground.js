import Prime from "./prime.js";
export default function Playground() {
    const maxCount = 200000000;
    const primeN = Prime(maxCount);

    return (
        <>
            <h1>Playground</h1>
            <p> The max number is {maxCount}</p>

            <p> The max prime number is {primeN}</p>

        </>
    )
}