import React from "react";

const ExpertCard = ({ experts }) => {
  return (
    <div className="flex flex-col gap-4 max-w-[390px] m-auto">
      {experts.map(({ name, position, imgPath }) => (
        <div className="p-4 border rounded flex flex-col gap-4 text-center min-w-[350px]">
          <img src={imgPath} alt="" />
          <p>
            <span className="font-bold text-black">{name}</span>
            <span className="block">{position}</span>
          </p>
        </div>
      ))}
    </div>
  );
};

export default ExpertCard;
