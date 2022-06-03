import React from "react";
import Container from "./layout/containers/container.component";
import Button from "./buttons/button.component";
const Hero = () => {
  return (
    <section>
      <Container>
        <div className="flex flex-col h-screen justify-center gap-5 z-10 ">
          <h1 className="text-5xl text-white">
            <span className="text-lg block">Man &#38; Women Beauty Center</span>
            Beauty &#38; Spa Wellness
          </h1>
          <p className="text-gray-300">
            A small river named Duden flows by their place and supplies it with
            the necessary regelialia.
          </p>
          <div>
            <Button>Make An Appoiment</Button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
