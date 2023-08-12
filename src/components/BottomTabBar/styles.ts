import {StyleSheet} from 'react-native';
import {COLORS} from '../../styles';

export default StyleSheet.create({
  safeAreaContainer: {
    backgroundColor: COLORS.BLACK,
  },
  tabbar: {
    backgroundColor: COLORS.BLACK,
    height: 58,
    marginHorizontal: 10,
    paddingHorizontal: 40,
    paddingTop: 14,
    paddingBottom: 13,
    borderRadius: 16,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  notActiveOption: {
    opacity: 0.3,
  },
  optionsText: {
    fontSize: 10,
    lineHeight: 12,
  },
  optionContainer: {
    height: 41,
    width: 50,
    alignItems: 'center',
  },
  icon: {
    width: 25,
    height: 25,
  },
});
