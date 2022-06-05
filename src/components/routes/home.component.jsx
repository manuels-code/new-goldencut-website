import React from "react";
import Hero from "../hero.component";
import OurHistory from "../ourHistory.component";
import OurServices from "../ourServices.component";
import Reviews from "../reviews.component";
const Home = () => {
  return (
    <div>
      <Hero />
      <OurHistory />
      <OurServices />
      <Reviews />
    </div>
  );
};

export default Home;
