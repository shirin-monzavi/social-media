import React, { createRef } from 'react';
class CounterClass extends React.Component {
    constructor() {
        super();
        this.state = {
            counter: 1,
            status: "none"
        }
        this.inputRefIncrease = createRef();
        this.inputRefDecrease = createRef();
    }

    render() {

        const handleIncrease = () => {
            this.setState({ counter: this.state.counter + 1, status: "Increased" });
            this.inputRefIncrease.current.focus();
        }

        const handleDecreasee = () => {
            this.setState({ counter: this.state.counter - 1, status: "Decreased" });
            this.inputRefDecrease.current.focus();
        }

        return <>
            <p>Counter {this.state.counter}</p>
            <p>Last Action: {this.state.status}</p>
            <input type="text"
                placeholder='Focous on increase'
                ref={this.inputRefIncrease}
            />
            <button onClick={handleIncrease}>Increase</button>

            <input type="text"
                placeholder='Focous on decrease'
                ref={this.inputRefDecrease}
            />
            <button onClick={handleDecreasee}>Decrease</button>
        </>
    }


}

export default CounterClass;