import React from "react";

const ReviewStatisticsCard = ({ reviewsStatistics }) => {
  return (
    <>
      {reviewsStatistics.map(({ title, count }) => (
        <div key={title}>
          <p>
            <span className="text-6xl font-bold text-app-golden block">{count}</span>
            <span>{title}</span>
          </p>
        </div>
      ))}
    </>
  );
};

export default ReviewStatisticsCard;
