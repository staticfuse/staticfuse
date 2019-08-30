import React from 'react';
import ShareIcons from './ShareIcons';
import NextPost from './NextPost';

const EngagementBar = ({ post }) => {

  return (
      <div
        id="engagement-bar"
        className="container mt-8 border-t pt-4"
      >
        <div className="container max-width flex justify-between">
          <ShareIcons post={post} />
          <NextPost post={post} />
        </div>
      </div>
  );
};

export default EngagementBar;
