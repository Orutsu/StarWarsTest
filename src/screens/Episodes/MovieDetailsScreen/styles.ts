import {StyleSheet} from 'react-native';
import {COLORS} from 'src/styles';

export default StyleSheet.create({
  safeAreaViewContainer: {
    flex: 1,
    backgroundColor: COLORS.BLUE,
  },
  filmItemContainer: {
    backgroundColor: COLORS.BLACK,
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderRadius: 16,
  },
  episodeText: {
    color: COLORS.WHITE,
    fontSize: 20,
    fontWeight: 'bold',
  },
  filmReleaseDate: {
    color: COLORS.DARK_YELLOW,
    fontSize: 12,
    fontWeight: 'bold',
  },
  filmOpeningScroll: {
    color: COLORS.YELLOW,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  filmTitle: {
    color: COLORS.YELLOW,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    textTransform: 'uppercase',
  },
  aLongTimeText: {
    color: COLORS.LIGHT_BLUE,
    textAlign: 'center',
    fontSize: 14,
  },
  statsText: {
    color: COLORS.WHITE,
    fontSize: 16,
    fontWeight: 'bold',
  },
  characterItemContainer: {
    backgroundColor: COLORS.BLACK,
    borderRadius: 16,
    paddingHorizontal: 8,
    paddingVertical: 8,
  },
  characterItemText: {
    color: COLORS.YELLOW,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    textTransform: 'uppercase',
  },
});
