import React from "react";

import { Fragment } from "react";

import Header from "../components/Layout/Header";
import NetflixStart from "../components/Netflix/Home/NetfilxStart";

const Home = (props) => {
  return (
    <Fragment>
      <Header />
      <NetflixStart />
    </Fragment>
  );
};

export default Home;
