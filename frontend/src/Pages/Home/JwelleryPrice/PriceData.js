import React from "react";

const PriceData = ({ item }) => {
  return (
    <h5 style={{ lineHeight: 1.8 }}>
      &nbsp; {item.name}&#58;  {item.price}&nbsp;tk/gm &nbsp;
    </h5>
  );
};

export default PriceData;
