import React from "react";
import Section from "./layout/section.component";
import ReviewStatisticsCard from "./reviewStatisticsCard.component";

const reviewsStatistics = [
  {
    title: "Years Of Experience",
    count: "10",
  },
  {
    title: "Satisfied Customers",
    count: "350",
  },
  {
    title: "Awards",
    count: "7",
  },
];
const Reviews = () => {
  return (
    <Section sectionBg={"bg-app-black"}>
      <h2 className="text-center text-app-white2">
        <span>Amazing Reviews</span> Reviews From For Our Services
      </h2>
      <ReviewStatisticsCard reviewsStatistics={reviewsStatistics} />
    </Section>
  );
};

export default Reviews;
