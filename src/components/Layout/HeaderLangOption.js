import React from "react";
import { Fragment } from "react";

import classes from "./HeaderLangOption.module.css";

const HeaderLangOption = (props) => {
  return (
    <Fragment>
      <div className={classes["header-select"]}>
        <i class="fa-solid fa-globe"></i>
        <select placeholder="lang-switcher">
          <option>한국어</option>
          <option>English</option>
        </select>
      </div>
    </Fragment>
  );
};

export default HeaderLangOption;
