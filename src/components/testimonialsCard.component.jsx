import React from "react";

const TestimonialsCard = ({ review }) => {
  return (
    <div className="border rounded-md min-w-[100%] flex flex-col p-4 gap-4 justify-between h-md">
      <div>
        <h3>{review.review.title}</h3>
        <p>{review.review.context}</p>
      </div>

      <div className="flex items-center gap-4">
        <img
          className="rounded-full w-24 h-24"
          src={review.author.profilePhoto}
          alt=""
        />
        <div>
          <h4>
            {review.author.name}
            <span className="block">{review.author.position}</span>
          </h4>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsCard;
