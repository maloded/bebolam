import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import classes from "./Profile.module.css";
import MyPostsContainer from "./MyPosts/MyPostsContainer";



const Profile = (props) => {
    // let infoElement = props.myInfo.map (p => <ProfileInfo srcId={p.srcId} name={p.name} dateOfBirth={p.dateOfBirth} city={p.city} education={p.education}/>)

    return (
    <div className={classes.profile}>
        <ProfileInfo {...props}/>
        <MyPostsContainer {...props}/>
    </div>
  );
};

export default Profile;
