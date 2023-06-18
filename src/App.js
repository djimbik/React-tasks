import './App.css';
import UsersForm from "./components/form/UsersForm";
import {useState} from "react";
import UsersList from "./components/ShowList UI/UsersList";
import ModalWindow from "./components/modalWindow/ModalWindow";

function App() {
    const [users, setUsers] = useState([
        {id: 1, name: 'John Walker', age: 29},
        {id: 2, name: 'Ad Addison', age: 30},
        {id: 3, name: 'Ars Kimchinskiy', age: 31},
    ]);
    const [isModalView, setIsModalView] = useState(false);

    const addUser = (name, age) => {
        setUsers(prevState => {
            const newUser = {id: Date.now(), name, age}
            return [...prevState, newUser]
        })
    }

    const deleteUser = (id) => {
        const userToDeleteIndex = users.findIndex(item => item.id === id)
        setUsers(prevState => {
            const newUsers = users.splice(userToDeleteIndex, 1)
            return [...users]
        })
    }

    return (
        <div className="App">
            <UsersForm addUser={addUser} setIsModalView={setIsModalView}/>
            <UsersList deleteUser={deleteUser}
                       users={users}/>
            {isModalView && <ModalWindow setIsModalView={setIsModalView}/>}
        </div>
    );
}

export default App;
