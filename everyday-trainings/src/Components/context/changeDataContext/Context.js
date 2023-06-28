import React, {useContext, useState} from 'react';

const UserContext = React.createContext();
const UserContextUpdate = React.createContext();

export const useUserContext = () => useContext(UserContext);
export const useUserContextUpdate = () =>  useContext(UserContextUpdate);

const UserProvider = ({children}) => {
    const [user, setUser] = useState({
        name: 'John',
        role: 'Main Character',
    })

    const updateUser = () => {
        setUser({
            name: '',
            role: '',
        })
    }

    return (
        <UserContext.Provider value={user}>
            <UserContextUpdate.Provider value={updateUser}>
                {children}
            </UserContextUpdate.Provider>
        </UserContext.Provider>
    );
};

export default UserProvider;