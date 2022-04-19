import React from "react";
import Diamond from "../Diamond/Diamond";
const Diamonds = () => {
  return (
    <div>
      <h1>Our Diamond Products</h1>

      <div style={{ width: "90%" }} className="row mb-5 body mx-auto">
        <Diamond></Diamond>
        <Diamond></Diamond>
        <Diamond></Diamond>
        <Diamond></Diamond>
      </div>
    </div>
  );
};

export default Diamonds;
