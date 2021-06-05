import React from 'react';
import Svg, {Path} from 'react-native-svg';

export default function SvgComponent(props) {
  const {size = 28, color = 'white'} = props;
  return (
    <Svg
      height={size}
      width={size}
      fill="none"
      stroke={color}
      viewBox="0 0 24 24"
      {...props}>
      <Path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={3}
        d="M4 4h12M4 12h18M4 20h12"
      />
    </Svg>
  );
}
