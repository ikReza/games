import React from "react";
import "./square.scss";

const Square = ({ value, onClick }) => {
  return (
    <button className="xo-button" onClick={onClick}>
      {value}
    </button>
  );
};

export default React.memo(Square);
