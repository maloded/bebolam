import React from "react";
import classes from "./FriendsList.module.css"
import {NavLink} from "react-router-dom";

const FriendsList = (props) => {
    return (
        <div className={classes.list}>
            <h2>Friends</h2>
            <nav className={classes.nav}>
                <div className={classes.item}>
                    <NavLink to="/sveta" activeClassName={classes.activeLink}>Sveta</NavLink>
                </div>
                <div className={classes.item}>
                    <NavLink to="/andrey" activeClassName={classes.activeLink}>Andrey</NavLink>
                </div>
                <div className={classes.item}>
                    <NavLink to="/dimych" activeClassName={classes.activeLink}>Dimych</NavLink>
                </div>
            </nav>
        </div>
    )
}

export default FriendsList;