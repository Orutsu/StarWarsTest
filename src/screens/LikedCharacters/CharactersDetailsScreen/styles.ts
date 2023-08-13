import {StyleSheet} from 'react-native';
import {COLORS} from 'src/styles';

export default StyleSheet.create({
  safeAreaViewContainer: {
    flex: 1,
    backgroundColor: COLORS.BLUE,
  },
  characterName: {
    color: COLORS.WHITE,
    fontSize: 20,
    fontWeight: 'bold',
  },
  subTitle: {
    color: COLORS.WHITE,
    fontSize: 18,
    fontWeight: '600',
  },
  personalInformationFields: {
    color: COLORS.WHITE,
    fontSize: 16,
    fontWeight: '500',
  },
});
