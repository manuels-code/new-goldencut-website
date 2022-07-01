import React from "react";
import Section from "./layout/section.component";
import Slider from "./slider.component";

const reviews = [
  {
    id: "1",
    author: {
      name: "Laura Smith",
      position: "Lawyer at Compari",
      profilePhoto:
        "https://preview.colorlib.com/theme/kayelux/images/xstaff-1.jpg.pagespeed.ic.OB-DxS9XvO.webp",
    },
    review: {
      title: "1 Amazing Staff",
      context:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus, eligendi provident! Similique modi praesentium dolore natus perspiciatis accusantium culpa placeat!",
    },
  },
  {
    id: "2",
    author: {
      name: "Laura Smith",
      position: "Lawyer at Compari",
      profilePhoto:
        "https://preview.colorlib.com/theme/kayelux/images/xstaff-2.jpg.pagespeed.ic.rla2d_7JTA.webp",
    },
    review: {
      title: "2 Amazing Staff",
      context:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus, eligendi provident! Similique modi praesentium dolore natus perspiciatis accusantium culpa placeat!",
    },
  },
  {
    id: "3",
    author: {
      name: "Laura Smith",
      position: "Lawyer at Compari",
      profilePhoto:
        "https://preview.colorlib.com/theme/kayelux/images/xstaff-3.jpg.pagespeed.ic.SWy-p2amQo.webp",
    },
    review: {
      title: "3 Amazing Staff",
      context:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus, eligendi provident! Similique modi praesentium dolore natus perspiciatis accusantium culpa placeat!",
    },
  },
  {
    id: "4",
    author: {
      name: "Laura Smith",
      position: "Lawyer at Compari",
      profilePhoto:
        "https://preview.colorlib.com/theme/kayelux/images/xstaff-4.jpg.pagespeed.ic.fM5FwhAe5z.webp",
    },
    review: {
      title: "4 Amazing Staff",
      context:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus, eligendi provident! Similique modi praesentium dolore natus perspiciatis accusantium culpa placeat!",
    },
  },
];

const Testimonial = () => {
  return (
    <Section>
      <h2 className="text-center">
        <span>Testimonial</span> What Our Customers Are Saying.
      </h2>

      <Slider reviews={reviews} />
    </Section>
  );
};

export default Testimonial;
