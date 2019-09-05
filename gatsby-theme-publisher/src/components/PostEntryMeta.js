/** @jsx jsx */
import { jsx } from "theme-ui"
import moment from "moment/moment"
import { Link } from "gatsby"

const PostEntryMeta = ({ post, location = "" }) => (
  <section
    className={
      location === "blog"
        ? "entry-meta clearfix xl:flex xl:flex-col"
        : "entry-meta clearfix"
    }
  >
    {post.categories && location === "blog"
      ? post.categories.nodes.map(category => (
          <span
            key={category.id}
            className="taxonomy"
            sx={{
              backgroundColor: "lightGray",
              borderRadius: "5px",
              fontSize: 0,
              padding: 2,
              ml: 1,
              float: "right",
              color: "muted",
            }}
          >
            {category.name}
          </span>
        ))
      : null}

    <div
      className="author-avatar"
      sx={{
        mt: 1,
        mr: 2,
        height: "50px",
        overflow: "hidden",
        float: "left",
      }}
    >
      <img
        src={post.author.avatar ? post.author.avatar.url : ""}
        sx={{
          borderRadius: "100px",
          display: "block",
          height: "50px",
        }}
        alt="Author avatar"
      />
    </div>

    <div
      className="author-meta"
      sx={{
        mb: 4,
      }}
    >
      <p
        className="author-name"
        sx={{
          fontSize: 1,
          color: "muted",
          mb: "0",
          pb: "0",
        }}
      >
        <Link
          to={`/author/${post.author.slug}`}
          sx={{ color: "muted", fontWeight: 2 }}
        >
          {`  ${post.author.name}`}
        </Link>
      </p>
      <p
        className="post-date"
        sx={{
          fontSize: 1,
          color: "muted",
          mb: "0",
          mt: "0",
        }}
      >
        <Link to={`/${post.uri}`} sx={{
          color: "muted"
        }}>
          <time className="entry-date" dateTime={post.date}>
            {moment(post.date).format(`MMMM D, YYYY`)}
          </time>
        </Link>
      </p>
    </div>
  </section>
)

export default PostEntryMeta
