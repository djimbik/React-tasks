import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import styles from './tooltip.module.css'

const Tooltip = ({text, target}) => {
    const tooltipRoot = document.getElementById('tooltip-root');
    const [visible, setVisible] = useState(true);

    const handleMouseEnter = () => {
        setVisible(true);
    };

    const handleMouseLeave = () => {
        setVisible(false);
    };

    return (
        <div   className={styles.target}>
            <div>Тут будет какой-то текст</div>
            {visible && ReactDOM.createPortal(
                <div className={styles.tooltip}>
                    {text}
                </div>,
                tooltipRoot
            )}
            <span
                // className={styles.target}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                {target}
            </span>
            <div>тут будет совсем другой текст!</div>
        </div>
    );
};

export default Tooltip;