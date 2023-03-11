import React from 'react';
import ContentLoader, {Circle, Rect} from 'react-content-loader/native';

export default function CastListSkeleton() {
  return (
    <ContentLoader
      speed={2}
      width={476}
      height={154}
      viewBox="0 0 476 154"
      backgroundColor="#0e0b0b"
      foregroundColor="#a69b9b">
      <Circle cx="23" cy="23" r="23" />
      <Circle cx="207" cy="24" r="23" />
      <Circle cx="24" cy="77" r="23" />
      <Circle cx="207" cy="77" r="24" />
      <Circle cx="24" cy="131" r="23" />
      <Circle cx="207" cy="130" r="23" />
      <Rect x="55" y="110" rx="0" ry="0" width="87" height="12" />
      <Rect x="56" y="72" rx="0" ry="0" width="99" height="13" />
      <Rect x="56" y="56" rx="0" ry="0" width="101" height="12" />
      <Rect x="56" y="127" rx="0" ry="0" width="91" height="12" />
      <Rect x="55" y="2" rx="0" ry="0" width="69" height="12" />
      <Rect x="55" y="18" rx="0" ry="0" width="68" height="12" />
      <Rect x="237" y="18" rx="0" ry="0" width="112" height="12" />
      <Rect x="238" y="2" rx="0" ry="0" width="114" height="13" />
      <Rect x="238" y="57" rx="0" ry="0" width="58" height="12" />
      <Rect x="238" y="72" rx="0" ry="0" width="90" height="12" />
      <Rect x="238" y="110" rx="0" ry="0" width="105" height="12" />
      <Rect x="238" y="126" rx="0" ry="0" width="62" height="11" />
      <Rect x="1" y="154" rx="0" ry="0" width="64" height="51" />
    </ContentLoader>
  );
}
