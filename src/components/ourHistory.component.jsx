import React from "react";
import Container from "./layout/containers/container.component";
import Button from "./buttons/button/button.component";
import Img from "../assets/images/pexels-cottonbro-3992875.jpg";

const OurHistory = () => {
  return (
    <section className="min-h-screen bg-[#f8f3f1] flex flex-col justify-center">
      <Container>
        <div className="max-w-[556px] h-full">
          <div className="flex flex-col gap-4">
            <h2>
              <span className="text-lg block">Goldencut Hair Studio</span>
              Our History
            </h2>

            <p>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts. Separated
              they live in Bookmarksgrove right at the coast of the Semantics, a
              large language ocean.
            </p>

            <p>
              A small river named Duden flows by their place and supplies it
              with the necessary regelialia. It is a paradisematic country, in
              which roasted parts of sentences fly into your mouth.
            </p>

            <div>
              <Button buttonStyles={'btn--secondary'} buttonSize={'sm'}>Read More About Our History</Button>
            </div>

            <img className="w-full" src={Img} alt="" />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default OurHistory;
// Photo by cottonbro: https://www.pexels.com/photo/woman-getting-a-haircut-3992875/
