import React from "react";
import classes from "./ProfileInfo.module.css";
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";



const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }
    return (
        <div>
            <img className={classes.profilePhotos} src={props.profile.photos.small}/>
            <h1>Name: {props.profile.fullName}</h1>
            <ProfileStatusWithHooks {...props}/>
        </div>
    )
};

export default ProfileInfo;
