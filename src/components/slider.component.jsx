import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import TestimonialsCard from "./testimonialsCard.component";

const Slider = ({ reviews }) => {
  const [position, setPosition] = useState(0);
  const [transition, setTransition] = useState("transition");
  const [timing, setTiming] = useState(5000);

  const next = () => {
    setPosition(position + 1);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (position < reviews.length) {
        next();
        setTransition("transition");
        setTiming(5000);
      } else {
        setPosition(0);
        setTransition("transition-none");
        setTiming(0);
      }
      clearInterval(interval);
    }, timing);
  }, [position]);

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
