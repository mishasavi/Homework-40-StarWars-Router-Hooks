import React, {useContext} from 'react';
import {UserContext} from "../utils/useContext.js";
//rsc
const Friend = ({friendPhoto,friendName,pos}) => { //friendPhoto and pos

    const {currentHero, setCurrentHero} = useContext(UserContext);
    const {currentFriends, setCurrentFriends} = useContext(UserContext);

    const handleClickFriend = () => {
        const clickedIndex = currentFriends.findIndex(friend => friend.name === friendName);
        const updatedFriends = [...currentFriends];
        updatedFriends[clickedIndex] = currentHero;

        setCurrentFriends(updatedFriends);
        setCurrentHero(currentFriends[clickedIndex]);
    }

    let styles = 'col-4 p-1';
    if(pos === 7) {
        styles+=" bottom-left"
    }
    if(pos === 9) {
        styles += " bottom-right"
    }
    return (
        <img className={styles} src={friendPhoto} alt='friend' onClick={handleClickFriend}/>
    );
};

export default Friend;