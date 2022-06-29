import React, { useState, useEffect } from "react";
import TestimonialsCard from "./testimonialsCard.component";

const Slider = ({ reviews }) => {
  const [position, setPosition] = useState(0);
  const [transition, setTransition] = useState("2s");
  const [intervalSpeed, setIntervalSpeed] = useState(8000);

  const style = {
    transform: `translateX(-${position}00%)`,
    transition: `${transition}`,
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (position < reviews.length) {
        setPosition(position + 1);
        setIntervalSpeed(8000)
        setTransition('2s')
      } else {
        setPosition(0);
        setIntervalSpeed(0)
        setTransition('')
      }

      clearInterval(interval);
    }, intervalSpeed);
  }, [position,intervalSpeed, reviews.length]);

  return (
    <div className="overflow-hidden w-[80%] mx-auto">
      <div style={style} className="flex">
        {reviews.map((review) => (
          <TestimonialsCard key={review.id} review={review} />
        ))}
        <TestimonialsCard review={reviews[0]} />
      </div>
    </div>
  );
};

export default Slider;
