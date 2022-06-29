import React, { useState, useEffect } from "react";
import TestimonialsCard from "./testimonialsCard.component";

const Slider = ({ reviews }) => {
  const [position, setPosition] = useState(0);
  const [transition, setTransition] = useState("");
  const [intervalSpeed, setIntervalSpeed] = useState(10000);

  useEffect(() => {
    const interval = setInterval(() => {
      if (position < reviews.length) {
        setPosition(position + 1);
        setTransition("transition");
        setIntervalSpeed(10000);
      } else {
        setPosition(0);
        setTransition("transition-none");
        setIntervalSpeed(0);
      }
      clearInterval(interval);
    }, intervalSpeed);
  }, [position,intervalSpeed,reviews.length]);

  return (
    <div className="overflow-hidden w-[80%] mx-auto">
      <div
        className={`flex -translate-x-[${position}00%] ${transition} duration-[1000ms]`}
      >
        {reviews.map((review) => (
          <TestimonialsCard key={review.id} review={review} />
        ))}
        <TestimonialsCard review={reviews[0]} />
      </div>
    </div>
  );
};

export default Slider;
