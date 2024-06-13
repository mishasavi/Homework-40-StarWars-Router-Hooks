import React from 'react';
import {Route, Routes} from "react-router-dom";
import {navItems} from "../utils/constants.js";
import Home from "./Home.jsx";
import AboutMe from "./AboutMe.jsx";
import StarWars from "./StarWars.jsx";
import Contacts from "./Contacts.jsx";

const Switcher = () => {

    // switch (currentPage) {
    //     case navItems[0].route:
    //         return <Home/>
    //     case navItems[1].route:
    //         return <AboutMe/>
    //     case navItems[2].route:
    //         return <StarWars/>
    //     case navItems[3].route:
    //         return <Contacts/>
    // }

    return (
        <Routes>
            <Route path={"/"} element={<Home/>}/>
            <Route path={navItems[0].route} element={<Home/>}/>
            <Route path={navItems[1].route} element={<AboutMe/>}/>
            <Route path={navItems[2].route} element={<StarWars/>}/>
            <Route path={navItems[3].route} element={<Contacts/>}/>
        </Routes>
    )

}

export default Switcher;