import React, {Component, useContext} from 'react';
import Friend from "./Friend.jsx";
import {UserContext} from "../utils/useContext.js";



const DreamTeam = () => {

const {currentFriends, setCurrentFriends} = useContext(UserContext);

    return (
        <section className="float-end w-50 row border mx-1">
            <h2 className="col-12 text-center">Dream Team</h2>
            {currentFriends.map((f, i) => <Friend key={i} friendName={f.name} friendPhoto={f.pic} pos={i + 1}/>)}
        </section>
    );
}

export default DreamTeam;