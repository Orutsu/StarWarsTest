import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {EPISODES_ROUTES} from './routes';
import EpisodesListScreen from '../screens/Episodes/EpisodesListScreen';
import CharactersDetailsScreen from 'src/screens/LikedCharacters/CharactersDetailsScreen';
import EpisodeDetailsScreen from 'src/screens/Episodes/EpisodeDetailsScreen';

export type EpisodesParamList = {
  [EPISODES_ROUTES.EPISODES_LIST]: undefined;
  [EPISODES_ROUTES.EPISODE_DETAILS]: {
    episodeId: string;
  };
  [EPISODES_ROUTES.CHARACTER_DETAILS]: {
    characterId: string;
  };
};

const Stack = createStackNavigator<EpisodesParamList>();

const EpisodesNavigator = () => (
  <Stack.Navigator
    screenOptions={() => ({
      headerShown: false,
    })}
    initialRouteName={EPISODES_ROUTES.EPISODES_LIST}>
    <Stack.Screen
      name={EPISODES_ROUTES.EPISODES_LIST}
      component={EpisodesListScreen}
    />
    <Stack.Screen
      name={EPISODES_ROUTES.EPISODE_DETAILS}
      component={EpisodeDetailsScreen}
    />
    <Stack.Screen
      name={EPISODES_ROUTES.CHARACTER_DETAILS}
      component={CharactersDetailsScreen}
    />
  </Stack.Navigator>
);

export default EpisodesNavigator;
