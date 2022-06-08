import React from "react";
import classes from "./Profile.module.css";

import { Fragment } from "react";
import NetflixProfile from "../components/Netflix/Profile/NetflixProfile";

const Profile = (props) => {
  return (
    <div className={classes.profile}>
      <NetflixProfile />
    </div>
  );
};

export default Profile;
