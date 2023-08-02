import React, {forwardRef, useImperativeHandle, useState} from 'react';
import styles from './modal.module.css'

const ModalWindow = forwardRef((props, ref) => {
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => {
        setIsOpen(true)
    }

    const closeModal = () => {
        setIsOpen(false)
    }

    useImperativeHandle(ref, () => ({
        open: openModal,
        close: closeModal,
    }))

    const wrapperClass = isOpen ? styles.openWindow : styles.closeWindow

    return (
        <div className={`${styles.windowWrapper} ${wrapperClass}`}>
            <div className={styles.window}>
                <p>Модальное окно</p>
                <button onClick={closeModal}>Закрыть</button>
            </div>
        </div>
    );
});

export default ModalWindow;