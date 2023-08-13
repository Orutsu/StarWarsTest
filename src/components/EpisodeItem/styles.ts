import {StyleSheet} from 'react-native';
import {COLORS} from 'src/styles';

export default StyleSheet.create({
  filmItemContainer: {
    backgroundColor: COLORS.BLACK,
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderRadius: 16,
  },
  filmTitle: {
    color: COLORS.WHITE,
    fontSize: 18,
    fontWeight: 'bold',
  },
  filmReleaseDate: {
    color: COLORS.WHITE,
    fontSize: 12,
    fontWeight: 'bold',
  },
  filmOpeningScroll: {
    marginTop: 8,
    color: COLORS.YELLOW,
    fontSize: 12,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
