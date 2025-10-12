import React, { createRef } from 'react';
import Prime from "./../prime.js";
class CounterClass extends React.Component {
    constructor(props) {

        super(props);
        // this.setState({ isCalculating: true });

        // setInterval(() => {
        //     const maxCount = 200000000;
        //     const primeN = Prime(maxCount);
        //     this.setState({
        //         primeNumer: primeN,
        //         maxPrimeNumer: maxCount,
        //         isCalculating: false
        //     })
        // }, 10);

        const maxCount = 200000000;
        const primeN = Prime(maxCount);


        this.state = {
            counter: 1,
            status: "none",
            primeNumer: primeN,
            maxPrimeNumer: maxCount,
            isCalculating: false
        }

        // this.setState({
        //     primeNumer: primeN,
        //     maxPrimeNumer: maxCount,
        //     isCalculating: false
        // })

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

        console.log('Class component rendered');



        return <>
            {this.state.isCalculating && (<p><strong>We are calculating please wait ...</strong></p>)}

            {this.state.maxPrimeNumer !== null && (<div>
                <p> The max number is {this.state.maxPrimeNumer}</p>
                <p> The max prime number is {this.state.primeNumer}</p>
            </div>)}

            <p>Counter for {this.props.userName} {this.state.counter}</p>
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