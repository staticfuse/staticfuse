import React from "react"
import useSiteMetadata from "../hooks/use-site-metadata"

const Footer = () => {
  const { author } = useSiteMetadata()
  return (
    <footer className="site-footer bg-gray-900 p-8 w-full">
      <div className="max-w-6xl m-auto clearfix">
        <p className="text-sm text-gray-600 float-left">
          © 2019 {author} | Built with Gatsby
        </p>
        <p className="float-right text-sm">
          <a className="text-gray-600" href="https://twitter.com/scottbolinger">
            Twitter
          </a>{" "}
          <a
            className="text-gray-600"
            href="https://theproductbusiness.com/podcast"
          >
            Podcast
          </a>
        </p>
      </div>
    </footer>
  )
}

export default Footer
