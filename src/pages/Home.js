import React from "react";

import { Fragment } from "react";

import Header from "../components/Layout/Header";
import NetflixStart from "../components/Netflix/Home/NetfilxStart";
import Footer from "../components/Layout/Footer";

const Home = (props) => {
  return (
    <Fragment>
      <Header />
      <NetflixStart />
      <Footer />
    </Fragment>
  );
};

export default Home;
