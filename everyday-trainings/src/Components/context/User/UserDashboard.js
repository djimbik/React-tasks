import React, {useContext} from 'react';
import UserContext from "./UserContext";


const UserDashboard = () => {
    const user = useContext(UserContext)

    return (
        <div>
            <h2>User Dashboard</h2>
            <p>name: {user.name}</p>
            <p>role: {user.role}</p>
        </div>
    );
};

export default UserDashboard;