import React from 'react';

const ShareIcons = ({ post }) => (
  <div>
  <p className="mb-1 text-sm text-gray-600">
      Share
    </p>
  <div className="flex items-center justify-start">
    
    <a
      className="share-icon mr-4 text-xl"
      href={`http://twitter.com/share?text=${post.title} —&amp;url=${
        post.link
      }`}
      target="_blank"
      rel="noopener noreferrer"
    >
      Twitter
    </a>

    <a
      className="share-icon text-xl"
      href={`https://www.facebook.com/sharer/sharer.php?u=${
        post.link
      }&amp;title=${post.title}&amp;picture=%20${post.featuredImage &&
        post.featuredImage.sourceUrl}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      Facebook
    </a>
  </div>
  </div>
);

export default ShareIcons;
