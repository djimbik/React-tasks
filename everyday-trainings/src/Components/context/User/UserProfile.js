import React, {useContext} from 'react';
import UserContext from "./UserContext";

const UserProfile = () => {
    const user = useContext(UserContext)

    return (
        <div>
            <h2>User Profile</h2>
            <p>name: {user.name}</p>
            <p>Role: {user.role}</p>
        </div>
    );
};

export default UserProfile;