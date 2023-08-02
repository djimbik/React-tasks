import React, {useRef} from 'react';
import ModalWindow from "./ModalWindow";

const FirstModalWindow = () => {
    const modalRef = useRef();

    const handleOpenModal = () => {
        modalRef.current.open()
    }

    const handleCloseModal = () => {
        modalRef.current.close()
    }

    return (
        <div>
            <button onClick={handleOpenModal}>Открыть модальное окно</button>
            <button onClick={handleCloseModal}>Закрыть модальное окно</button>
            <ModalWindow ref={modalRef} />
        </div>
    );
};

export default FirstModalWindow;