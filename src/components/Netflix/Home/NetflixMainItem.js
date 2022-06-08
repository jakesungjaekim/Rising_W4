import { Fragment } from "react";

import classes from "./NetflixMainItem.module.css";
import Card from "../../UI/Card";

const NetflixMainItem = (props) => {
  return (
    <Card>
      <div className={classes.text}>
        <h2>{props.title}</h2>
        <p>{props.content}</p>
      </div>
      <img src={props.image} />
    </Card>
  );
};

export default NetflixMainItem;
