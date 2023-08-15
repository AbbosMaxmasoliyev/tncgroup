import React from "react";

const PortfolioItem = React.memo(({ title, image,info }) => {
  return (
    <div className="portItem">
      <div className="mockup">
        <img src={image} />
      </div>

      <div className="infoItem">
        <p className="title">{title}</p>
        <p className="info">{info}</p>
      </div>
    </div>
  );
});

export default PortfolioItem;
