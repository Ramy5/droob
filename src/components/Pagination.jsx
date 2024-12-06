import { ReactNode } from "react";
import { MdNavigateNext } from "react-icons/md";

const Pagination = ({
  showNavigation,
  table,
  currentPage,
  totalPages,
  setPage,
}) => {
  console.log("🚀 ~ currentPage:", currentPage);
  const renderPageNumbers = () => {
    const pageNumbers = [];
    const maxDisplayPages = 5;

    const renderButton = (pageNumber) => (
      <button
        key={Number(pageNumber)}
        aria-current={pageNumber == currentPage ? "page" : undefined}
        className={`relative h-10 w-10 font-bold justify-center text-lg inline-flex items-center rounded-md p-0 ${
          pageNumber == currentPage
            ? "bg-[#0055D2] text-white"
            : "text-[#0055D2] bg-transparent"
        } focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600`}
        onClick={() => setPage(pageNumber)}
      >
        {pageNumber}
      </button>
    );

    for (let i = 1; i <= Math.min(maxDisplayPages, Number(totalPages)); i++) {
      pageNumbers.push(renderButton(i));
    }

    if (Number(totalPages) > maxDisplayPages) {
      pageNumbers.push(
        <span
          key="ellipsis"
          className="relative h-7 w-5 justify-center inline-flex items-center rounded-md p-0 text-md font-bold text-[#404B52]"
        >
          ...
        </span>
      );

      pageNumbers.push(renderButton(Number(totalPages)));
    }

    return pageNumbers;
  };

  return (
    <div>
      {showNavigation ? (
        <div className="flex items-center justify-between px-4 pt-5 pb-4 bg-transparent md:pb-3 sm:px-6">
          <div className="flex sm:flex-1 sm:items-center sm:justify-between">
            <div>
              <nav
                className="inline-flex gap-2 -space-x-px isolate"
                aria-label="Pagination"
              >
                {renderPageNumbers()}
              </nav>
            </div>
          </div>
        </div>
      ) : null}
      {/* {children && children} */}
    </div>
  );
};

export default Pagination;
