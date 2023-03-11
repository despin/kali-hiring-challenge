import React, {Fragment} from 'react';
import ContentLoader, {Rect} from 'react-content-loader/native';

interface HorizontalMovieSkeletonProps {
  showRating?: boolean;
}

export default function HorizontalMovieSkeleton({
  showRating,
}: HorizontalMovieSkeletonProps) {
  return (
    <ContentLoader
      speed={2}
      width={500}
      height={showRating ? 326 : 308}
      viewBox={`0 0 500 ${showRating ? 326 : 308}`}
      backgroundColor={'#333'}
      foregroundColor={'#999'}>
      {[0, 182, 364, 546].map(x => (
        <Fragment key={x}>
          <Rect
            key={`${x}_1`}
            x={x + 16}
            y="0"
            rx="16"
            ry="16"
            width="166"
            height="250"
          />
          <Rect
            key={`${x}_2`}
            x={x + 16}
            y="254"
            rx="0"
            ry="0"
            width="166"
            height="18"
          />
          <Rect
            key={`${x}_3`}
            x={x + 16}
            y="276"
            rx="0"
            ry="0"
            width="166"
            height="14"
          />
          <Rect
            key={`${x}_4`}
            x={x + 16}
            y="294"
            rx="0"
            ry="0"
            width="40"
            height="14"
          />
          {showRating && (
            <Rect x={x + 16} y="312" rx="0" ry="0" width="80" height="14" />
          )}
        </Fragment>
      ))}
    </ContentLoader>
  );
}
