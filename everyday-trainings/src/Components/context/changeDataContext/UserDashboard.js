import React from 'react';
import {useUserContext, useUserContextUpdate} from "./Context";

const UserDashboard = () => {
    const user = useUserContext()
    const updateUser = useUserContextUpdate()

    const handleLogout  = () => {
        updateUser()
    }

    return (
        <div>
            <h2>UserDashboard</h2>
            {/*<p>name: {user.name}</p>*/}
            <p>role: {user.role} </p>
            <button onClick={handleLogout}>Click!</button>
        </div>
    );
};

export default UserDashboard;