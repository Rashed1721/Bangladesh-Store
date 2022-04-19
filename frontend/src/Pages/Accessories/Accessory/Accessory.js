import React from "react";

const Accessory = ({ item }) => {
  const { name, price, images } = item;

  return (
    <div className="col">
      <div class="card">
        <img src={images.url} class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">{name}</h5>
          <p class="card-text">Price:{price}TK</p>
        </div>
      </div>
    </div>
  );
};

export default Accessory;
