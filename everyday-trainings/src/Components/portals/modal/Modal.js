import React, {useState} from 'react';
import ReactDOM from "react-dom";

const Modal = ({isOpen, onCloseModal}) => {
    const modalRoot = document.getElementById('modal-root');


    return (
        <React.Fragment>
            {
                isOpen && (
                    ReactDOM.createPortal(
                        <div>
                            <p>Пусть будет какой-то текст, йо</p>
                            <button onClick={onCloseModal}>Тыкни и закрой модальное окно</button>
                        </div>,
                        modalRoot
                    )
                )
            }

        </React.Fragment>
    );
};

export default Modal;