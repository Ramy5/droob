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

    // Helper function to render individual page buttons
    const renderButton = (pageNumber) => (
      <button
        key={Number(pageNumber)}
        aria-current={pageNumber === currentPage ? "page" : undefined}
        className={`relative h-10 w-10 font-bold justify-center text-lg inline-flex items-center rounded-md p-0 ${
          pageNumber === currentPage
            ? "bg-[#0055D2] text-white"
            : "text-[#0055D2] bg-transparent"
        } focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600`}
        onClick={() => setPage(pageNumber)}
      >
        {pageNumber}
      </button>
    );

    // Calculate page range to display
    let startPage = Math.max(1, currentPage - 2);
    let endPage = Math.min(totalPages, startPage + maxDisplayPages - 1);

    // Adjust start page if we're near the end
    if (endPage - startPage < maxDisplayPages - 1) {
      startPage = Math.max(1, endPage - maxDisplayPages + 1);
    }

    // Add first page and ellipsis if necessary
    if (startPage > 1) {
      pageNumbers.push(renderButton(1));
      if (startPage > 2) {
        pageNumbers.push(
          <span
            key="ellipsis1"
            className="relative h-7 w-5 justify-center inline-flex items-center rounded-md p-0 text-md font-bold text-[#404B52]"
          >
            ...
          </span>
        );
      }
    }

    // Add page numbers
    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(renderButton(i));
    }

    // Add last page and ellipsis if necessary
    if (endPage < totalPages) {
      if (endPage < totalPages - 1) {
        pageNumbers.push(
          <span
            key="ellipsis2"
            className="relative h-7 w-5 justify-center inline-flex items-center rounded-md p-0 text-md font-bold text-[#404B52]"
          >
            ...
          </span>
        );
      }
      pageNumbers.push(renderButton(totalPages));
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
