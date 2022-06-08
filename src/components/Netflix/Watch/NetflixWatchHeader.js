import React from "react";

import netflixImg1 from "../../../assets/images/header-logo.png";
import profileImg1 from "../../../assets/images/profile-images2.png";

import classes from "./NetflixWatchHeader.module.css";

const NetflixWatch = (props) => {
  return (
    <div className={classes.navbar}>
      <div className={classes["header-left"]}>
        <img className={classes["header-image"]} src={netflixImg1} />
        <span>홈</span>
        <span>시리즈</span>
        <span>영화</span>
        <span>NEW! 요즘 대세 콘텐츠</span>
        <span>내가 찜한 콘텐츠</span>
      </div>

      <div className={classes["header-right"]}>
        <i class="fa-solid fa-magnifying-glass"></i>
        <span>키즈</span>
        <i class="fa-solid fa-bell"></i>
        <img className={classes["header-profile-image"]} src={profileImg1} />

        <i class="fa-solid fa-caret-down"></i>
      </div>
    </div>
  );
};

export default NetflixWatch;
