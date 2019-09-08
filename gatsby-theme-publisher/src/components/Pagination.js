import React from "react"
import { Link } from "gatsby"
import { Flex, Box, Icon } from "@chakra-ui/core"

const Pagination = ({ pageNumber, hasNextPage, allPosts, itemsPerPage }) => (
  <Box as="nav" className="pagination" role="navigation" textAlign="left" mb={2}>
    <span className="screen-reader-text">Posts navigation</span>
    <Flex align="center" className="nav-links">
      {pageNumber > 1 && (
        <Link
          className="prev page-numbers"
          style={{
            padding: "4px 8px 5px 8px",
            backgroundColor: "rgba(0,0,0,.05)",
            borderRadius: "3px",
          }}
          to={pageNumber > 2 ? `/page/${pageNumber - 1}` : `/`}
        >
          <span className="screen-reader-text">Previous page</span>
          <Icon name="chevron-left" />
        </Link>
      )}
      <span aria-current="page" className="page-numbers current" style={{ padding: "5px 10px" }}>
        <span className="meta-nav screen-reader-text">Page </span>
        {pageNumber}
      </span>

      {hasNextPage && (
        <Link
          style={{
            padding: "4px 8px 5px 8px",
            backgroundColor: "rgba(0,0,0,.05)",
            borderRadius: "3px",
          }}
          className="next page-numbers"
          to={`page/${pageNumber + 1}`}
        >
          <span className="screen-reader-text">Next page</span>
          <Icon name="chevron-right" />
        </Link>
      )}
    </Flex>
  </Box>
)

export default Pagination
