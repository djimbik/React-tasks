import React, {useState} from 'react';
import SecondModal from "./SecondModal";
import SixthModal from "../sixthModal/SixthModal";

const SecondContainer = () => {
    const [isOpenModal, setIsOpen] = useState(false);

    const openModalHandler = () => {
        setIsOpen(true)
    }

    const closeModalHandler = () => {
        setIsOpen(false)
    }

    return (
        <div>
            <h2>MainPage</h2>
            <p>Description of main page!</p>
            <SecondModal isOpenModal={isOpenModal} onCloseWindow={closeModalHandler}/>
            <button onClick={openModalHandler}>Тык, чтобы открыть модальное окно</button>
        </div>
    );
};

export default SecondContainer;