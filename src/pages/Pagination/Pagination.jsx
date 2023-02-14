import React from "react";

export default function Pagination({
  productsPerPage,
  totalProducts,
  paginateFront,
  paginateBack,
  paginate,
  currentPage,
}) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <div className="pb-10 text-center">
      <nav className="block"></nav>
      <div>
        <nav
          className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px"
          aria-label="Pagination"
        >
          <a
            onClick={() => {
              paginateBack();
            }}
            href="#"
            className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-violet-500 bg-white text-sm font-medium text-indigo-500 hover:bg-gray-50"
          >
            <span>Previous</span>
          </a>
          <nav className="block">
            <ul className="flex pl-0 rounded list-none flex-wrap">
              <li>
                {pageNumbers.map((number, i) => (
                  <a
                    onClick={() => {
                      paginate(number);
                    }}
                    href="#"
                    key={i}
                    className={
                      currentPage === number
                        ? "bg-blue border-violet-500 text-indigo-500 hover:bg-blue-200 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
                        : "bg-white border-gray-300 text-gray-500 hover:bg-blue-200 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
                    }
                  >
                    {number}
                  </a>
                ))}
              </li>
            </ul>
          </nav>
          <a
            onClick={() => {
              paginateFront();
            }}
            href="#"
            className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-violet-500 bg-white text-sm font-medium text-indigo-500 hover:bg-gray-50"
          >
            <span>Next</span>
          </a>
        </nav>
      </div>
    </div>
  );
}
