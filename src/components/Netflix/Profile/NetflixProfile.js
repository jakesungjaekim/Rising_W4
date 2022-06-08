import React from "react";
import { Fragment } from "react";

import classes from "./NetflixProfile.module.css";
import netflixImg from "../../../assets/images/header-logo.png";

import profileImg1 from "../../../assets/images/profile-images1.png";
import profileImg2 from "../../../assets/images/profile-images2.png";
import profileImg3 from "../../../assets/images/profile-images3.png";
import profileImg4 from "../../../assets/images/profile-images4.png";
import profileImg5 from "../../../assets/images/profile-images5.png";

import NetflixProfileChoice from "./NetflixProfileChoice";

import { Link } from "react-router-dom";

const DUMMY_PROFILES = [
  { id: "1", user: "USER1", image: profileImg1 },
  { id: "2", user: "USER2", image: profileImg2 },
  { id: "3", user: "USER3", image: profileImg3 },
  { id: "4", user: "USER4", image: profileImg4 },
  { id: "5", user: "USER5", image: profileImg5 },
];

const NetflixProfile = (props) => {
  const profileList = DUMMY_PROFILES.map((profile) => {
    return (
      <NetflixProfileChoice
        id={profile.id}
        user={profile.user}
        image={profile.image}
      />
    );
  });

  return (
    <Fragment className={classes["profile-wrap"]}>
      <div className={classes["profile-logo"]}>
        <Link to="/">
          <img src={netflixImg} />
        </Link>
      </div>
      <div className={classes["profile-main"]}>
        <h2>넷플릭스를 시청할 프로필을 선택하세요.</h2>

        <div className={classes["profile-list"]}>{profileList}</div>
        <div className={classes["profile-button-wrap"]}>
          <button>프로필 관리</button>
        </div>
      </div>
    </Fragment>
  );
};

export default NetflixProfile;
