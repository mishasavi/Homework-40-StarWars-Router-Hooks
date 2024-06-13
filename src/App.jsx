import React, {useState} from 'react';
import "./App.css";
import Header from "./components/Header.jsx";
import Switcher from "./components/Switcher.jsx";
import Footer from "./components/Footer.jsx";
import {UserContext} from "./utils/useContext.js";
import {friends} from "./utils/constants.js";
import mainHeroImg from './Images/main.jpg';

//npm i react-router-dom
const App = () => {

    const mainHero = {
        pic: mainHeroImg,
        name: 'Luke Skywalker',
        path: 'peoples/1'
    }

    const nineFriends = friends.map(friend => ({ ...friend }));

    const [currentHero, setCurrentHero] = useState(mainHero);
    const [currentFriends, setCurrentFriends] = useState (nineFriends);


    return (
        <div className="app">
            <UserContext.Provider value={{
                currentHero, setCurrentHero, currentFriends, setCurrentFriends
            }}>
            <Header/>
            <Switcher/>
            <Footer/>
        </UserContext.Provider>
        </div>
    );

}

export default App;