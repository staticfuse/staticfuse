import React from 'react';
import Layout from '../../components/Layout';
import PostEntry from '../../components/PostEntry';
import HeaderArchive from '../../components/HeaderArchive';
import SEO from '../../components/SEO';

const SingleCategory = props => {
  const {
    pageContext: { name, posts },
  } = props;

  return (
    <Layout>
      <SEO
        title={`Category - ${name}`}
        description={`A collection of posts from the ${name} category.`}
      />
      <div className="archive-page max-w-2xl xl:max-w-5xl m-auto">
      <HeaderArchive name={name} />
      
      {posts.nodes &&
        posts.nodes.map(post => {
          return <PostEntry classes="mb-12" key={post.id} post={post} />;
        })}
      </div>
    </Layout>
  );
};

export default SingleCategory;
