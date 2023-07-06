import React, {useState} from 'react';
import SixthModal from "./SixthModal";

const BlockForSixthModal = () => {
    const [isShownModal, setIsShowModal] = useState(false);

    const openModalHandler = () => {
        setIsShowModal(true)
    }

    const closeModalHandler = () => {
        setIsShowModal(false)
    }

    return (
        <div>
            <h2>MainPage</h2>
            <p>Description of main page!</p>
            <SixthModal isOpen={isShownModal} onCloseModal={closeModalHandler}/>
            <button onClick={openModalHandler}>Тык, чтобы открыть модальное окно</button>
        </div>
    );
};

export default BlockForSixthModal;