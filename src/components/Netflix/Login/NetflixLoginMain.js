import React, { useEffect, useState } from "react";

import { Fragment } from "react";

import classes from "./NetflixLoginMain.module.css";

import NeflixLoginModal from "./NetflixLoginModal";

const NetflixLoginMain = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const storedUserLoggedInInformation = localStorage.getItem("isLoggedIn");
    if (storedUserLoggedInInformation === "1") {
      setIsLoggedIn(true);
    }
  }, []);

  const loginHandler = (email, password) => {
    setIsLoggedIn(true);
  };

  return (
    <Fragment>
      <div className={classes.login}>
        <NeflixLoginModal />
      </div>
    </Fragment>
  );
};

export default NetflixLoginMain;
