import React from "react";
import Hero from "../hero.component";
import OurExperts from "../ourExperts.component";
import OurHistory from "../ourHistory.component";
import OurServices from "../ourServices.component";
import Reviews from "../reviews.component";
import Testimonial from "../testimonial.component";
const Home = () => {
  return (
    <div>
      <Hero />
      <OurHistory />
      <OurServices />
      <Reviews />
      <OurExperts />
      <Testimonial />
    </div>
  );
};

export default Home;
