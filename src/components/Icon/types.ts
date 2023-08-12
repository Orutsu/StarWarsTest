import {StyleProp, ViewStyle} from 'react-native';

import {iconsMap} from './iconsMap';

export type IconProps = {
  name: IconName;
  color?: string;
  style?: StyleProp<ViewStyle>;
  width?: number;
  height?: number;
};

export type IconName = keyof typeof iconsMap;
