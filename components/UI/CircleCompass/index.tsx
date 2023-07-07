import React from 'react';
import {
  CircleCompassCircle,
  CircleCompassFill,
  CircleCompassInsideText,
  CircleCompassMaskFull,
  CircleCompassMaskHalf,
  CircleCompassWrapper,
} from './styled';

export const CircleCompass = () => {
  return (
    <CircleCompassWrapper>
      <CircleCompassCircle>
        <CircleCompassMaskFull>
          <CircleCompassFill />
        </CircleCompassMaskFull>
        <CircleCompassMaskHalf>
          <CircleCompassFill />
        </CircleCompassMaskHalf>
        <CircleCompassInsideText>NextJs</CircleCompassInsideText>
      </CircleCompassCircle>
    </CircleCompassWrapper>
  );
};
