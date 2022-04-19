import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Products = ({ product }) => {
  const { name, price, ratings, numOfReviews, images, _id, weight } = product;
  return (
    <div className="col">
      <div class="card">
        <img src={images.url} class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">{name}</h5>
          <p class="card-text">Price:{price}TK</p>
          <p class="card-text">Weight:{weight}gm</p>
          <p class="card-text">Ratings : {ratings}</p>
          <p class="card-text">Total Reviews : {numOfReviews}</p>

          <Link to={`/product/${_id}`}>
            <Button>Product Details</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Products;
