import React from "react";

const OrderCard = ({ product }) => {
  return (
    <div className="card lg:w-[600px] w-[350px] card-side bg-base-100 hover:shadow-violet-500 shadow-md cursor-pointer lg:p-3 p-2">
      <figure>
        <img
          src={product?.images[0]}
          className="lg:w-56 w-24 lg:h-48 h-20"
          alt="Movie"
        />
      </figure>
      <div className="card-body">
        <h2 className="font-bold lg:text-2xl texl-lg text-violet-400">
          {product?.title}
        </h2>
        <p className="font-bold lg:text-xl text-md ">Stock: {product?.stock}</p>
        <p className="lg:text-xl text-md font-semibold">
          Price: Tk.{product?.price}
        </p>
        <div className="card-actions justify-end">
          <button className="btn btn-error">Delete</button>
        </div>
      </div>
    </div>
  );
};

export default OrderCard;
