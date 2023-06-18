import React from 'react';
import styles from './UserList.module.css'

const UsersList = (props) => {

    const deleteUserHandler = (user) => {
        props.deleteUser(user.id)
    }

    return (
        <ul className={styles['user-list']}>
            {props.users.map(user => {
                return (
                    <li key={user.id}
                        className={styles['user-list-item']}>
                        <p className={styles['user-info']}>{user.name} - {user.age}</p>
                        <button className={styles['user-delete-button']}
                                onClick={() => deleteUserHandler(user)}>X
                        </button>
                    </li>)
            })}
        </ul>
    );
};

export default UsersList;