import React, {useEffect, useState} from "react";

import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import MainHeader from "./components/MainHeader/MainHeader";
import Countdown from "./Countdown";
import DataLoader from "./DataLoader";
import EventSubscriber from "./EventSubscriber";
import Form from "./Form";
import {ThemeChanger} from "./ThemeChanger";
import Counter from "./Counter";

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const storedLoginInfo = localStorage.getItem('isLoggedIn');

        if (storedLoginInfo === '1') {
            setIsLoggedIn(true);
        }
    }, []); // если нет зависимостей -> код запускается 1 раз


    const loginHandler = (email, password) => {
        localStorage.setItem('isLoggedIn', '1')
        setIsLoggedIn(true);
    };
    const logoutHandler = () => {
        localStorage.removeItem('isLoggedIn')
        setIsLoggedIn(false);
    };

    return (
        <React.Fragment>
            <MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler}/>
            <main>
                {!isLoggedIn && <Login onLogin={loginHandler}/>}
                {isLoggedIn && <Home onLogout={logoutHandler}/>}
            </main>
            <div>
                {/*<Countdown/>*/}
                <DataLoader/>
                <EventSubscriber/>
                <Form/>
                <ThemeChanger/>
                <Counter/>
            </div>
        </React.Fragment>
    );
}

export default App;
