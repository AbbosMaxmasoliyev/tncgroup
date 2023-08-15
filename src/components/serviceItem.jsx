import React from "react";

const ServiceItem = React.memo(({ image, title, info }) => {
  return (
    <div className="card" data-aos="fade-up-left">
      <div className="top">
        <img src={image} />
        <p className="title">{title}</p>
      </div>
      <div className="info">
        <p>{info}</p>
      </div>
    </div>
  );
});

export default ServiceItem;
