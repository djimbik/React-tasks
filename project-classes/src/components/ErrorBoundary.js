import {Component} from "react";


export class ErrorBoundary extends Component {
    constructor() {
        super();
        this.state = {
            hasError: false
        }
    }
    componentDidCatch(error, errorInfo) {
        this.setState({
            hasError: true
        })
    }

    render() {
        if (this.state.hasError) {
            return <p>Что-то пошло не так</p>
        }
        return this.props.children
    }
}