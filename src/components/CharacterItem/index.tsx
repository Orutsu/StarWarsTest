import React from 'react';
import {ViewStyle, Text, TouchableOpacity} from 'react-native';
import styles from './styles';
import {Maybe, Person} from 'src/__generated__/graphql';

interface Props {
  style?: ViewStyle | ViewStyle[];
  onPress?: () => void;
  person?: Maybe<Person>;
}

const CharacterItem: React.FC<Props> = ({style, onPress, person}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.characterItemContainer, style]}>
      <Text style={[styles.characterItemText]}>{person?.name}</Text>
    </TouchableOpacity>
  );
};

export default CharacterItem;
