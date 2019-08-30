import React from "react"
import { Link } from "gatsby"
import { FaChevronRight } from "react-icons/fa"
import { FaChevronLeft } from "react-icons/fa"

const Pagination = ({ pageNumber, hasNextPage, allPosts, itemsPerPage }) => (
  <nav className="pagination text-left" role="navigation">
    <h2 className="screen-reader-text">Posts navigation</h2>
    <div className="nav-links flex text-xl items-center">
      {pageNumber > 1 && (
        <Link
          className="prev page-numbers p-3 bg-gray-100 rounded hover:bg-gray-200"
          to={pageNumber > 2 ? `/page/${pageNumber - 1}` : `/`}
        >
          <span className="screen-reader-text">Previous page</span>
          <FaChevronLeft />
        </Link>
      )}
      <span aria-current="page" className="page-numbers current p-3">
        <span className="meta-nav screen-reader-text">Page </span>
        {pageNumber}
      </span>

      {hasNextPage && (
        <Link className="next page-numbers p-3  bg-gray-100 rounded hover:bg-gray-200" to={`page/${pageNumber + 1}`}>
          <span className="screen-reader-text">Next page</span>
          <FaChevronRight />
        </Link>
      )}
    </div>
  </nav>
)

export default Pagination
