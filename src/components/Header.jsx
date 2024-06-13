import React, {Component, useContext} from 'react';
import Navigation from "./Navigation.jsx";
import {UserContext} from "../utils/useContext.js";
// TODO Class -> func
const Header = () => {

    const {currentHero, setCurrentHero} = useContext(UserContext);


        return (
            <header>
                <Navigation/>
                <h1 className="text-center py-4">{currentHero.name}</h1>
            </header>
        );

}

export default Header;