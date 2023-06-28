import React, {useState} from 'react';
import UserContext from "./UserContext";
import UserProfile from "./UserProfile";
import UserDashboard from "./UserDashboard";

const Main = () => {
    const [user, setUser] = useState( {
        name: 'John Doe',
        role: 'admin'
    })

    return (
        <UserContext.Provider value={user}>
            <div>
                <h1>My APP</h1>
                <UserProfile/>
                <UserDashboard/>
            </div>
        </UserContext.Provider>
    );
};

export default Main;