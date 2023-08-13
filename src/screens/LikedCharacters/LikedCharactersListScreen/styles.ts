import {COLORS} from 'src/styles';
import {StyleSheet} from 'react-native';
import {SCREEN_HEIGHT} from 'src/styles/helpers';

export default StyleSheet.create({
  safeAreaViewContainer: {
    flex: 1,
    backgroundColor: COLORS.BLUE,
  },
  emptyContainer: {
    height: SCREEN_HEIGHT - 120,
    justifyContent: 'center',
  },
  emptyText: {
    color: COLORS.WHITE,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  headerText: {
    color: COLORS.WHITE,
    fontSize: 20,
    fontWeight: 'bold',
  },
});
