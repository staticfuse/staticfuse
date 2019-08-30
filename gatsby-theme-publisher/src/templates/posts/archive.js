import React from "react"
import Layout from "../../components/Layout"
import PostEntry from "../../components/PostEntry"
import Pagination from "../../components/Pagination"
import HeaderArchive from '../../components/HeaderArchive';
import SEO from '../../components/SEO';

const BlogArchive = props => {
  const {
    pageContext: { nodes, pageNumber, hasNextPage, itemsPerPage, allPosts },
  } = props

  return (
    
    <Layout>

      <SEO
        title="Posts"
        description="Blog posts"
        keywords={[`wordpress`]}
      />
      
      <div className="max-w-2xl m-auto xl:max-w-5xl blog-page">

      <HeaderArchive name={'Blog'} />

        {nodes && nodes.map(post => <PostEntry classes="mb-12" key={post.postId} post={post} />)}
        <Pagination
          pageNumber={pageNumber}
          hasNextPage={hasNextPage}
          allPosts={allPosts}
          itemsPerPage={itemsPerPage}
        />

      </div>
      
    </Layout>
  )
}

export default BlogArchive