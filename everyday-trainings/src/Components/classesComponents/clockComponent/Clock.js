import React from "react";

export class Clock extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
        }
    }

    componentDidMount() {
        this.timerID = setInterval(() => {
            this.tick()
        }, 1000)
    }

    componentWillUnmount() {
        clearInterval(this.timerID)
    }

    tick() {
        this.setState({
            date: new Date(),
        })
    }

    render() {
        return (
            <div>
                <h4>Привет, Мир!</h4>
                <p>Сейчас {this.state.date.toLocaleTimeString()}</p>
            </div>
        )
    }
}

















