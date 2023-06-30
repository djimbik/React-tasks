import React, {useState} from 'react';

export const UserContext = React.createContext({
    name: '',
    age: 29,
})


const UserProfile1 = ({children}) => {
    const [userData, setUserData] = useState({
        name: 'Marta',
        age: 27
    })

    return (
        <UserContext.Provider value={userData}>
            {children}
        </UserContext.Provider>
    );
};

export default UserProfile1;