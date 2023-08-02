import React from 'react';
import ReactDOM from "react-dom";

const SecondModal = ({isOpenModal, onCloseWindow}) => {
    const modalRoot = document.getElementById('modal-root');

    const closeModalHandler = () => {
        onCloseWindow()
    }

    if (!isOpenModal) {
        return null
    }

    return (
        ReactDOM.createPortal(
            <div>
                <h3>Это заголовок модального окна</h3>
                <p>This is the text of modal window</p>
                <button onClick={closeModalHandler}>закрыть модальное окно</button>
            </div>,
            modalRoot
        )
    );
};

export default SecondModal;