import React, { useContext, useEffect, useState } from "react";
import { PRODUCT_CONTEXT } from "../../Context/ProductProvider";
import Pagination from "../Pagination/Pagination";
import ProductCard from "./ProductCard";

const Home = () => {
  const { products } = useContext(PRODUCT_CONTEXT);
  console.log(products);

  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(6);

  // Get current products
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  // Change page
  const paginateFront = () =>
    currentPage < 5 ? setCurrentPage(currentPage + 1) : "disabled";
  const paginateBack = () =>
    currentPage > 1 ? setCurrentPage(currentPage - 1) : "disabled";

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <h1 className="text-center text-4xl font-bold text-violet-600 lg:my-10 my-4">
        Products To You
      </h1>
      <div className="grid lg:grid-cols-3 grid-cols-1 gap-10 lg:p-14 p-4">
        {currentProducts?.map((product) => (
          <ProductCard key={product.id} product={product}></ProductCard>
        ))}
      </div>
      <Pagination
        productsPerPage={productsPerPage}
        totalProducts={products.length}
        paginate={paginate}
        paginateBack={paginateBack}
        paginateFront={paginateFront}
        currentPage={currentPage}
      />
    </div>
  );
};

export default Home;
