import React, {Component, useContext, useState} from 'react';
import {UserContext} from "../utils/useContext.js";

const Hero = () => {

    const {currentHero, setCurrentHero} = useContext(UserContext);



    return (
        <section className="float-start me-3 w-25">
            <img className="w-100" src={currentHero.pic} alt="hero"/>
        </section>
    );
}

export default Hero;