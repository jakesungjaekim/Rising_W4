import React from "react";
import { Fragment } from "react";

import classes from "./NetflixProfileChoice.module.css";

import { Link, useNavigate } from "react-router-dom";

const NetflixProfileChoice = (props) => {
  const navigate = useNavigate();

  return (
    <Fragment>
      <div className={classes["choice-wrap"]}>
        <div
          onClick={() => {
            navigate("/watch");
          }}
        >
          <img src={props.image} />
        </div>
        <p>{props.user}</p>
      </div>
    </Fragment>
  );
};

export default NetflixProfileChoice;
