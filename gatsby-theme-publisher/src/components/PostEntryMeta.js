import React from 'react';
import moment from 'moment/moment';
import { Link } from 'gatsby';

const PostEntryMeta = ({ post, location = '' }) => (
  <section className={ location === 'blog' ? 'entry-meta clearfix xl:flex xl:flex-col' : 'entry-meta clearfix' }>

  {post.categories && location === 'blog' ? post.categories.nodes.map(category => <span key={category.id} className="bg-gray-200 rounded p-2 text-xs float-right xl:order-last xl:text-center">{category.name}</span>) : null }

    <div className="author-avatar mr-2 mt-1 h-8 float-left overflow-hidden">
      <img src={ post.author.avatar ? post.author.avatar.url : '' } className="rounded-full block h-8 border-gray-500 border" alt="Author avatar" />
    </div>

    <div className="author-meta mb-6">
      <p className="mb-0 text-gray-500 text-sm"><Link to={`/author/${post.author.slug}`} className="text-gray-500 font-bold">
      {`  ${post.author.name}`}
      </Link></p>
      <p className="mb-0 mt-0 text-gray-500 text-sm"><Link to={`/${post.uri}`} className="text-gray-500">
      <time className="entry-date" dateTime={post.date}>
        {moment(post.date).format(`MMMM D, YYYY`)}
      </time>
      </Link>
      </p>
    </div>

  </section>
);

export default PostEntryMeta;
