import friend1 from "../Images/friend1.jpg";
import friend2 from "../Images/friend2.jpg";
import friend3 from "../Images/friend3.jpg";
import friend4 from "../Images/friend4.jpg";
import friend5 from "../Images/friend5.jpg";
import friend6 from "../Images/friend6.jpg";
import friend7 from "../Images/friend7.jpg";
import friend8 from "../Images/friend8.jpg";
import friend9 from "../Images/friend9.jpg";

export const friends = [
    {pic: friend9, name: 'Yoda', path: 'peoples/0'},
    {pic: friend8, name: 'Obi Wan Kenobi', path: 'peoples/10'},
    {pic: friend7, name: 'Millennium Falcon', path: 'transports/10'},
    {pic: friend6, name: 'Princess Leia', path: 'peoples/5'},
    {pic: friend5, name: 'Han Solo', path: 'peoples/14'},
    {pic: friend4, name: 'Wookie', path: 'peoples/13'},
    {pic: friend3, name: 'Wicket W. Warrick', path: 'peoples/30'},
    {pic: friend2, name: 'C-3PO', path: 'peoples/2'},
    {pic: friend1, name: 'R2-D2', path: 'peoples/3'}
    ]


export const BASE_URL = "https://sw-info-api.herokuapp.com";

export const period_month = 30 * 24 * 60 * 60 * 1000;

export const navItems = [
    {
        name: "Home",
        route: "home"
    },
    {
        name: "About Me",
        route: "aboutMe"
    },
    {
        name: "Star Wars",
        route: "starWars"
    },
    {
        name: "Contact",
        route: "contact"
    }
    ];
