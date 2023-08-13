import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {EPISODES_ROUTES} from './routes';
import EpisodesListScreen from '../screens/Episodes/EpisodesListScreen';
import MovieDetailsScreen from '../screens/Episodes/MovieDetailsScreen';

const Stack = createStackNavigator();

export type EpisodesParamList = {
  [EPISODES_ROUTES.EPISODES_LIST]: undefined;
  [EPISODES_ROUTES.MOVIE_DETAILS]: {
    episodeId: string;
  };
};

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
      name={EPISODES_ROUTES.MOVIE_DETAILS}
      component={MovieDetailsScreen}
    />
  </Stack.Navigator>
);

export default EpisodesNavigator;
