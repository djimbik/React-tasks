import React, {useState} from 'react';
import Modal from "./Modal";

const MainContainer = () => {
    const [isOpen, setIsOpen] = useState(false);

    const onCloseModal = () => {
        setIsOpen(false)
    }

    const onShowModal = () => {
        setIsOpen(true)
    }
    
    return (
        <div>
            <div>тут будет мой текст</div>
            <Modal isOpen={isOpen} onCloseModal={onCloseModal}></Modal>
            <button onClick={onShowModal}>Открыть модальной окно</button>
        </div>
    );
};

export default MainContainer;