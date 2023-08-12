import {StyleSheet} from 'react-native';
import {COLORS} from '../../styles';

export default StyleSheet.create({
  safeAreaContainer: {
    backgroundColor: COLORS.BLUE,
  },
  tabBar: {
    backgroundColor: COLORS.BLACK,
    height: 60,
    paddingHorizontal: 40,
    paddingTop: 10,
    paddingBottom: 10,
  },
  notActiveOption: {
    opacity: 0.3,
  },
  optionsText: {
    fontSize: 12,
    lineHeight: 14,
  },
  optionContainer: {
    height: 40,
    width: 100,
    alignItems: 'center',
  },
  icon: {
    width: 25,
    height: 25,
  },
});
