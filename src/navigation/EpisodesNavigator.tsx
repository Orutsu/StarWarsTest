import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {EPISODES_ROUTES} from './routes';
import EpisodesListScreen from '../screens/Episodes/EpisodesListScreen';
import MovieDetailsScreen from '../screens/Episodes/MovieDetailsScreen';

const Stack = createStackNavigator();

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
