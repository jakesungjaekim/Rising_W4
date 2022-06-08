import React, { Fragment } from "react";
import Header from "../../Layout/Header";
import Footer from "../../Layout/Footer";
import NetflixLoginMain from "./NetflixLoginMain";

const NetflixLogin = (props) => {
  return (
    <Fragment>
      <Header />
      <NetflixLoginMain />
      <Footer />
    </Fragment>
  );
};

export default NetflixLogin;
