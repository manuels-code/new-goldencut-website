import React from "react";
import Container from "./containers/container.component";

const Section = ({ children, sectionBg }) => {
  const SYTLES = ["bg-app-white2","bg-app-black", "transparent"];
  const checkStyles = SYTLES.includes(sectionBg) ? sectionBg : SYTLES[0];

  return (
    <section className={`py-10 ${checkStyles}`}>
      <Container>
        <div className="flex flex-col gap-4">{children}</div>
      </Container>
    </section>
  );
};

export default Section;
