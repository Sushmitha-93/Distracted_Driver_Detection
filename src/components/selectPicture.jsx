import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import _ from "lodash";

import Pagination from "./pagination";

const SelectPicture = () => {
  const [imageLinks, setimageLinks] = useState([]);
  const [pageSize, setpageSize] = useState(12);
  const [currentPage, setcurrentPage] = useState(1);

  useEffect(() => {
    let imageLinks = require("../imageLinks.json");
    setimageLinks(imageLinks);
  }, []);

  // Paginate function 1
  const handlePageChange = (page) => {
    setcurrentPage(page);
  };

  // Paginate function 2
  const getPageData = () => {
    // PAGINATE
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;

    // Return images for page
    return _.slice(imageLinks, startIndex, endIndex);
  };

  const pageImages = getPageData();
  return (
    <div className="row justify-content-center">
      <h2 className="text-center">Select a Picture for model to predict</h2>
      <div className="col-md-11">
        <hr class="mt-2 mb-5"></hr>
        <div class="row text-center text-lg-start">
          {pageImages.length > 0 &&
            pageImages.map((imgLink) => (
              <div class="col-lg-3 col-md-4 col-6">
                <Link to="/prediction" state={imgLink}>
                  <a
                    class="d-block mb-4 h-100"
                    href="#"
                    //   onClick={() => onImageClick(imgLink)}
                  >
                    <img class="img-fluid img-thumbnail" src={imgLink} alt="" />
                  </a>
                </Link>
              </div>
            ))}
        </div>
      </div>
      <Pagination
        currentPage={currentPage}
        totalRecordsCount={imageLinks.length}
        pageSize={pageSize}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default SelectPicture;
