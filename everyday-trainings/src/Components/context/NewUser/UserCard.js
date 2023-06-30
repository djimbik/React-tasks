import React, {useContext} from 'react';
import {UserContext} from "./UserProfile";

const UserCard = () => {
    const userData = useContext(UserContext)

    return (
        <div>
            {userData.name}
            {userData.age}
        </div>
    );
};

export default UserCard;