import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  const handleProduct = (CartProduct) => {
    let shoppingCart = [];
    console.log(CartProduct);

    const saveData = JSON.parse(localStorage.getItem("cart"));
    console.log(saveData);

    if (saveData) {
      shoppingCart = [...saveData, CartProduct];
    } else {
      shoppingCart.push(CartProduct);
    }

    localStorage.setItem("cart", JSON.stringify(shoppingCart));
  };
  return (
    <div className="card card-compact bg-base-100 hover:shadow-violet-500 shadow-lg cursor-pointer p-3">
      <figure>
        <img src={product?.images[0]} alt="Shoes" className="h-64 w-full" />
      </figure>
      <div className="card-body">
        <h2 className="font-bold text-lg">{product?.title}</h2>
        <p>{product.description.slice(0, 100)}...</p>
        <div className="flex p-0 m-0">
          <p className="text-lg font-semibold p-0 m-0">
            Price: Tk.{product?.price}
          </p>
          <p className="text-lg font-semibold p-0 m-0">
            Brand: {product?.brand}
          </p>
        </div>

        <div className="card-actions justify-end">
          <Link>
            <button
              onClick={() => handleProduct(product)}
              className="btn btn-primary mt-2"
            >
              Add To Cart
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
