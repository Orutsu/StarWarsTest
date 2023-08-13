import React, {FC} from 'react';
import {SafeAreaView, Text} from 'react-native';
import styles from './styles';
import {StackNavigationProp} from '@react-navigation/stack';
import {EpisodesParamList} from 'src/navigation/EpisodesNavigator';
import {RouteProp} from '@react-navigation/native';

export type MovieDetailsScreenProps = {
  navigation: StackNavigationProp<EpisodesParamList, 'Movie_Details'>;
  route: RouteProp<EpisodesParamList, 'Movie_Details'>;
};

const MovieDetailsScreen: FC<MovieDetailsScreenProps> = props => {
  return (
    <SafeAreaView style={styles.safeAreaViewContainer}>
      <Text>{props.route.params?.episodeId}</Text>
    </SafeAreaView>
  );
};

export default MovieDetailsScreen;
