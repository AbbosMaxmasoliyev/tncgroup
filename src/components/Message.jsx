import React, { useEffect, useRef, useState } from "react";
import "./calculate.scss";
const Message = ({ data = [], change }) => {
  const inputRef = useRef(null);

  const [value, setValue] = useState(0);


  useEffect(()=>{
    change(data[value])
  },[value])
  const maxValue = data.length;
  return (
    <div className="chrome" style={{ width: "95%" }}>
      <input
        ref={inputRef}
        onChange={(e) => {
          setValue(e.target.value);
        
          const slider = e.target;
          const min = slider.min;
          const max = slider.max;
          const value = slider.value;
          inputRef.current.style.background = `linear-gradient(to right, #41EAD4, #41EAD4 ${
            ((value - min) / (max - min)) * 100
          }%, #DEE2E6 ${((value - min) / (max - min)) * 100}%, #DEE2E6 100%)`;
        }}
        id="myinput"
        type="range"
        value={value}
        max={maxValue-1}
      />

      <div className="dots">
        {(() => {
          let html = [];
          for (let index = 0; index < maxValue; index++) {
            html.push(
              <div className={value <= index ? "active" : "noactive"} key={index}>
                <p className="information">{data[index]}</p>
              </div>
            );
          }

          return html;
        })()}
      </div>
    </div>
  );
};

export default Message;
