import React, {useRef} from 'react';

const Tooltip = () => {
    const tooltipRef = useRef(null)

    const handleMouseEnter  = () => {
        tooltipRef.current.style.display = 'block'
    }

    const handleMouseLeave = () => {
        tooltipRef.current.style.display = 'none'
    }

    return (
        <div>
            <button onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>Ну же тыкни сюда</button>
            <div ref={tooltipRef} style={{ display: 'none'}}>This is a tooltip</div>
            
        </div>
    );
};

export default Tooltip;