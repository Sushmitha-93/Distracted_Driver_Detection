import React from "react";
import _ from "lodash";

const Pagination = ({
  currentPage,
  totalRecordsCount,
  pageSize,
  onPageChange,
}) => {
  function getPageRange() {
    const pageCount = Math.ceil(totalRecordsCount / pageSize);
    return _.range(1, pageCount + 1);
  }

  const pageRange = getPageRange();
  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination justify-content-center">
        <li className="page-item">
          <a
            className="page-link"
            onClick={() =>
              onPageChange(currentPage > 1 ? currentPage - 1 : currentPage)
            }
          >
            Previous
          </a>
        </li>

        {pageRange.map((page) => (
          <li
            key={page}
            className={page === currentPage ? "page-item active" : "page-item"}
          >
            <a className="page-link" onClick={() => onPageChange(page)}>
              {page}
            </a>
          </li>
        ))}
        <li className="page-item">
          <a
            className="page-link"
            onClick={() =>
              onPageChange(
                currentPage !== pageRange.length ? currentPage + 1 : currentPage
              )
            }
          >
            Next
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
