import React from "react";
import classes from "./Post.module.css";

const Post = (props) => {
return (
    <div className={classes.item}>
      <img src='https://avatarko.ru/img/avatar/4/film_robot_Terminator_3014.jpg' />
      { props.message }
      <div>
      <span>
      like
      </span>
      { props.likesCount }
      </div>
    </div>
  );
};

export default Post;
