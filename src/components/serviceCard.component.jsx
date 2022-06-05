import React from "react";

const ServiceCard = ({services}) => {
  return (
    <div className="flex flex-col gap-4">
      {services.map(({ title, desc }) => (
        <div className="p-4 border rounded" key={title}>
          <h3>{title}</h3>
          <p>{desc}</p>
        </div>
      ))}
    </div>
  );
};

export default ServiceCard;
