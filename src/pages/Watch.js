import NetflixWatchHeader from "../components/Netflix/Watch/NetflixWatchHeader";
import Footer from "../components/Layout/Footer";
import { Fragment } from "react";
import NetflixWatchMain from "../components/Netflix/Watch/NetflixWatchMain";

const Watch = () => {
  return (
    <Fragment>
      <NetflixWatchHeader />
      <NetflixWatchMain />
      <Footer />
    </Fragment>
  );
};

export default Watch;
