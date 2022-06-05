import React from "react";
import Button from "./buttons/button/button.component";
import Section from "./layout/section.component";
import ServiceCard from "./serviceCard.component";

const services = [
  {
    title: "Coloring",
    desc: "Far far away, behind the word mountains, far from the countries Vokalia.",
  },
  {
    title: "Hairstyle",
    desc: "Far far away, behind the word mountains, far from the countries Vokalia.",
  },
  {
    title: "Man/Women Haircut",
    desc: "Far far away, behind the word mountains, far from the countries Vokalia.",
  },
  {
    title: "Extensions",
    desc: "Far far away, behind the word mountains, far from the countries Vokalia.",
  },
  {
    title: "Hair Keratin Treatment",
    desc: "Far far away, behind the word mountains, far from the countries Vokalia.",
  },
];

const OurServices = () => {
  return (
    <Section>
      <div className="flex flex-col gap-4">
        <h2>
          <span>Browse Our Categories</span>
          Our Services
        </h2>
        <div>
          <ServiceCard services={services} />
        </div>
        <div>
          <Button buttonStyles={"btn--secondary"}>
            Go To Our Services Page
          </Button>
        </div>
      </div>
    </Section>
  );
};

export default OurServices;
