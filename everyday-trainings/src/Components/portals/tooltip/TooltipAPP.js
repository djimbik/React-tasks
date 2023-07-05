import React from 'react';
import Tooltip from "./Tooltip";

const TooltipApp = () => {
    return (
        <div>
            <h1>My App</h1>
            <Tooltip text="This is a tooltip" target="Hover me" />
        </div>
    );
};

export default TooltipApp;