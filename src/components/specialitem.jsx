import React from "react";

const SpecialItem = React.memo(({ image, title, info }) => {
  return (
    <div className="special">
      <img src={image} />
      <p className="stitle">{title}</p>
      <p className="info">{info}</p>
    </div>
  );
});

export default SpecialItem;
