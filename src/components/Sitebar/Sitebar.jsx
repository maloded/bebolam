import React from "react";
import Navbar from "./Navbar/Navbar";
import FriendsList from "./FriendsList/FriendsList";
import classes from "./Sitebar.module.css";
import Profile from "../Profile/Profile";
import {Route} from "react-router-dom";
import ProfilesFriends from "./ProfilesFriends/ProfilesFriends";

const Sitebar = (props) => {
    return (
        <div className={classes.bar}>
            <Navbar/>
            <FriendsList/>
        </div>
    )
};

export default Sitebar;