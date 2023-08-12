import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {LIKED_CHARACTERS_ROUTES} from './routes';
import LikedCharactersListScreen from '../screens/LikedCharacters/LikedCharactersListScreen';
import CharactersDetailsScreen from '../screens/LikedCharacters/CharactersDetailsScreen';

const Stack = createStackNavigator();

const LikedCharactersNavigator = () => (
  <Stack.Navigator
    screenOptions={() => ({
      headerShown: false,
    })}
    initialRouteName={LIKED_CHARACTERS_ROUTES.LIKED_CHARACTERS_LIST}>
    <Stack.Screen
      name={LIKED_CHARACTERS_ROUTES.LIKED_CHARACTERS_LIST}
      component={LikedCharactersListScreen}
    />
    <Stack.Screen
      name={LIKED_CHARACTERS_ROUTES.CHARACTER_DETAILS}
      component={CharactersDetailsScreen}
    />
  </Stack.Navigator>
);

export default LikedCharactersNavigator;
