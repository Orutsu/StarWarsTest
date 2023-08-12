import React, {FC} from 'react';
import {iconsMap} from './iconsMap';
import {IconProps} from './types';

export const Icon: FC<IconProps> = ({
  name,
  color,
  height = 20,
  width = 20,
  style,
}) => {
  const IconComponent = iconsMap[name];
  return (
    <IconComponent
      fill={color}
      height={height}
      width={width ?? height}
      style={style}
    />
  );
};
