import React, { useContext, useState } from "react";

import Pagination from "../Pagination/Pagination";
import OrderCard from "./OrderCard";

const Cart = () => {
  const saveData = JSON.parse(localStorage.getItem("cart"));
  //   console.log(saveData);

  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(6);

  // Get current products
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = saveData.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  // Change page
  const paginateFront = () => setCurrentPage(currentPage + 1);
  const paginateBack = () => setCurrentPage(currentPage - 1);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <h1 className="text-center text-4xl font-bold text-violet-600 lg:my-10 my-4">
        My Orders
      </h1>
      <div className="flex justify-center">
        <div className="grid lg:grid-cols-1 grid-cols-1 gap-10  lg:p-14 p-4 ">
          {currentProducts?.map((product) => (
            <OrderCard key={product.id} product={product}></OrderCard>
          ))}
        </div>
      </div>

      <Pagination
        productsPerPage={productsPerPage}
        totalProducts={saveData.length}
        paginate={paginate}
        paginateBack={paginateBack}
        paginateFront={paginateFront}
        currentPage={currentPage}
      />
    </div>
  );
};

export default Cart;
