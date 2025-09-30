import React from 'react';
class CounterClass extends React.Component {
    constructor() {
        super();
        this.state = {
            counter: 1,
            status: "none"
        }
    }


    render() {

        const handleIncrease = () => {
            this.setState({ counter: this.state.counter + 1, status:"Increased"});
        }

        const handleDecreasee = () => {
            this.setState({ counter: this.state.counter - 1 , status:"Decreased"});
        }

        return <>
            <p>Counter {this.state.counter}</p>
            <p>Status {this.state.status}</p>
            <button onClick={handleIncrease}>Increase</button>
            <button onClick={handleDecreasee}>Decrease</button>
        </>
    }


}

export default CounterClass;