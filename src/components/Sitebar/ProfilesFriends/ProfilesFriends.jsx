import React from "react";
import classes from "./ProfilesFriends.module.css";
import ProfileInfo from "../../Profile/ProfileInfo/ProfileInfo";

const ProfilesFriends = (props) => {
    let infoElement = props.info.map (p => <ProfileInfo srcId={p.srcId} name={p.name} dateOfBirth={p.dateOfBirth} city={p.city} education={p.education}/>)
    return (
        <div className={classes.profile}>{infoElement}</div>
    )
}

export default ProfilesFriends;