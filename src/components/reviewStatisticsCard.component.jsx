import React from "react";

const ReviewStatisticsCard = ({ reviewsStatistics }) => {
  return (
    <div className="flex flex-col gap-10 text-center text-app-white2">
      {reviewsStatistics.map(({ title, count }) => (
        <div key={title}>
          <p>
            <span className="text-6xl font-bold text-app-golden block">
              {count}
            </span>
            <span>{title}</span>
          </p>
        </div>
      ))}
    </div>
  );
};

export default ReviewStatisticsCard;
