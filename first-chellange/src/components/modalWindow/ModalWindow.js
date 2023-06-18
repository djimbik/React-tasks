import React from 'react';
import styles from './ModalWindow.module.css'

const ModalWindow = (props) => {

    const closeModalWindowHandler = () => {
        props.setIsModalView(false)
    }

    return (
        <div className={`${styles['modal-overlay']} ${styles['modal-overlay_hidden']}`}>
            <div className={styles["delete-modal"]}>
                <h3 className={styles["delete-modal__question"]}>
                    Некорректный ввод
                </h3>
                <p className={styles["delete-modal__desc"]}>
                    Эти поля не могут быть пустыми!
                </p>
                <div className={styles["delete-modal__buttons"]}>
                    <button className={`${styles['delete-modal__button']} ${styles['delete-modal__cancel-button']}`}
                    onClick={closeModalWindowHandler}>
                        Зарыть окно, я понял
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ModalWindow;