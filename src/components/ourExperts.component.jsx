import React from "react";
import ExpertCard from "./expertCard.component";
import Section from "./layout/section.component";

const experts = [
  {
    name: "Maria Williams",
    position: "CEO - Hair Color Specialist",
    imgPath:
      "https://preview.colorlib.com/theme/kayelux/images/xstaff-1.jpg.pagespeed.ic.OB-DxS9XvO.webp",
  },
  {
    name: "Kaye Bruce",
    position: "Stylist",
    imgPath:
      "https://preview.colorlib.com/theme/kayelux/images/xstaff-2.jpg.pagespeed.ic.rla2d_7JTA.webp",
  },
  {
    name: "Sonya Lopez",
    position: "Studio Coordinator",
    imgPath:
      "https://preview.colorlib.com/theme/kayelux/images/xstaff-3.jpg.pagespeed.ic.SWy-p2amQo.webp",
  },
  {
    name: "Laura Smith",
    position: "Assutant Stylist",
    imgPath:
      "https://preview.colorlib.com/theme/kayelux/images/xstaff-4.jpg.pagespeed.ic.fM5FwhAe5z.webp",
  },
];

const OurExpert = () => {
  return (
    <Section>
      <h2 className="text-center">
        <span>Meet Our Artists</span> Our Experts
      </h2>
      <ExpertCard experts={experts} />
    </Section>
  );
};

export default OurExpert;
