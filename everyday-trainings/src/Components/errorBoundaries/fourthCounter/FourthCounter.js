import React from 'react';

class FourthCounter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0,
        };
    }

    increaseCounterHandler = () => {
        this.setState((prevState) => ({ counter: prevState.counter + 1 }));
    };

    decreaseCounterHandler = () => {
        this.setState((prevState) => ({ counter: prevState.counter - 1 }));
    };

    render() {
        if (this.state.counter === 5) {
            throw new Error('I crashed!');
        }

        return (
            <div>
                <h2>{this.state.counter}</h2>
                <button onClick={this.increaseCounterHandler}>+</button>
                <button onClick={this.decreaseCounterHandler}>-</button>
            </div>
        );
    }
}

export default FourthCounter;