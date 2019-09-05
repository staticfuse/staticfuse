/** @jsx jsx */
import { jsx } from 'theme-ui'
import PostEntryTitle from './PostEntryTitle';
import PostEntryMeta from './PostEntryMeta';
import PostEntryMedia from './PostEntryMedia';
import useSiteMetadata from "../hooks/use-site-metadata"
import ListItem from '../elements/ListItem';

const PostEntry = ({ post, classes = '' }) => {

  const { wordPressUrl } = useSiteMetadata()

  const excerpt = post.excerpt
    ? post.excerpt.replace(wordPressUrl, '')
    : `${post.content &&
        post.content
          .split(' ')
          .slice(0, 30)
          .join(' ')} ...`;

  return (
    <ListItem className={ classes }>
      <div className="post-wrapper xl:flex">
        <div className="post-inner xl:w-3/4 xl:flex-row xl:order-last xl:pl-6">
          <header className="entry-header">
            <PostEntryTitle
              post={post}
              location="blog"
              titleClass="entry-title h1"
            />
          </header>

          {post.featuredImage && <PostEntryMedia post={post} location="blog" />}

          <div
            className="entry-content"
            dangerouslySetInnerHTML={{
              __html: excerpt,
            }}
          />
        </div>
        <PostEntryMeta className="xl:w-1/4 xl:order-first xl:pr-4 xl:text-center" post={post} location="blog" />
      </div>
      </ListItem>
  );
};

export default PostEntry;
