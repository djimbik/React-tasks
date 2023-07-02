import React, {useRef, useState} from 'react';

const ModalWindow = () => {
    const modalRef = useRef(null);
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => {
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
    };

    const handleClickOutside = (event) => {
        if (modalRef.current && !modalRef.current.contains(event.target)) {
            closeModal()
        }
    }


    return (
        <div>
            <button onClick={openModal}>открыть модальное окно</button>
            {isOpen && (
                <div className="modal-overlay" onClick={handleClickOutside}>
                    <div className="modal" ref={modalRef}>
                        <h2>Модальное окно</h2>
                        <p>Содержимое модального окна...</p>
                        <button onClick={closeModal}>Закрыть</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ModalWindow;