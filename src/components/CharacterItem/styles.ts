import {StyleSheet} from 'react-native';
import {COLORS} from 'src/styles';

export default StyleSheet.create({
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
