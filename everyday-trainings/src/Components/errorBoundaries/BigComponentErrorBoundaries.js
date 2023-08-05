import React from 'react';
import FourthCounter from "./fourthCounter/FourthCounter";
import {ErrorBoundary4} from "./fourthCounter/ErrorBoundary4";

class BigComponentErrorBoundaries extends React.Component {
    render() {
        return (
            <div>
                <ErrorBoundary4>
                    <FourthCounter/>
                </ErrorBoundary4>
            </div>
        );
    }


};

export default BigComponentErrorBoundaries;