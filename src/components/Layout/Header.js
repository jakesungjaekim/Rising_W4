import React from "react";
import { Fragment } from "react";

//import img
import netflixImg from "../../assets/images/header-logo.png";
// import module.css
import classes from "./Header.module.css";
// import components css
import HeaderLangOption from "./HeaderLangOption";

import { Link } from "react-router-dom";
import Button from "../UI/Button";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <Link to="/">
          <img
            className={classes["header-image"]}
            src={netflixImg}
            alt="Netflix-logo"
          />
        </Link>
        <div className={classes["header-side"]}>
          <HeaderLangOption />
          <Button color="#e50914" fontSize="20px">
            로그인
          </Button>
        </div>
      </header>
    </Fragment>
  );
};

export default Header;
