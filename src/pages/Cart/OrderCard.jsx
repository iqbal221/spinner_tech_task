import React from "react";

const OrderCard = ({ product }) => {
  const saveData = JSON.parse(localStorage.getItem("cart"));
  const handleRemove = (id) => {
    const RemainProduct = saveData.filter((pdt) => pdt.id !== id);

    localStorage.setItem("cart", JSON.stringify(RemainProduct));
    // console.log(saveDataString);
    // localStorage.removeItem(saveDataString);
  };
  return (
    <div className="card w-[600px] card-side bg-base-100 hover:shadow-violet-500 shadow-md cursor-pointer p-3">
      <figure>
        <img src={product?.images[0]} className="w-56 h-48" alt="Movie" />
      </figure>
      <div className="card-body">
        <h2 className="font-bold text-2xl text-violet-400">{product?.title}</h2>
        <p className="font-bold text-xl ">Stock: {product?.stock}</p>
        <p className="text-xl font-semibold">Price: Tk.{product?.price}</p>
        <div className="card-actions justify-end">
          <button
            onClick={() => handleRemove(product.id)}
            className="btn btn-error"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderCard;
