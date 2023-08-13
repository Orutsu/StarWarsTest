import React from 'react';
// Components
import {ViewStyle, Text, TouchableOpacity} from 'react-native';

// Styles
import styles from './styles';
import {Film, Maybe} from 'src/__generated__/graphql';

interface Props {
  style?: ViewStyle | ViewStyle[];
  onPress?: () => void;
  film?: Maybe<Film>;
}

const EpisodeItem: React.FC<Props> = ({style, onPress, film}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.filmItemContainer, style]}>
      <Text style={styles.filmTitle}>{film?.title}</Text>
      <Text style={styles.filmReleaseDate}>{film?.releaseDate}</Text>
      <Text style={styles.filmOpeningScroll}>
        {`${film?.openingCrawl?.substring(0, 50)}...`}
      </Text>
    </TouchableOpacity>
  );
};

export default EpisodeItem;
