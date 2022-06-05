import React from "react";

const ServiceCard = ({services}) => {
  return (
    <div>
      {services.map(({ title, desc }) => (
        <div className="pb-4" key={title}>
          <h3>{title}</h3>
          <p>{desc}</p>
        </div>
      ))}
    </div>
  );
};

export default ServiceCard;
