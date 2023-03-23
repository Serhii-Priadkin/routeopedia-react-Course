import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Product() {
  const navigate = useNavigate();

  return (
    <div>
      Product
      <button
        onClick={() => {
          navigate("/product/create");
        }}
      >
        Add Product{" "}
      </button>
      <Link to={`/product/details/5`}>
        <button>Navigate to Product Detail - 5</button>
      </Link>
    </div>
  );
}

export default Product;
