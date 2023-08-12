import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {DASHBOARD_ROUTES} from './routes';
import EpisodesNavigator from './EpisodesNavigator';
import LikedCharactersNavigator from './LikedCharactersNavigator';
import BottomTabBar from 'src/components/BottomTabBar';

const DashboardTabs = createBottomTabNavigator();

const DashboardNavigator = () => (
  <DashboardTabs.Navigator
    screenOptions={() => ({
      headerShown: false,
    })}
    initialRouteName={DASHBOARD_ROUTES.EPISODES}
    tabBar={BottomTabBar}>
    <DashboardTabs.Screen
      name={DASHBOARD_ROUTES.EPISODES}
      component={EpisodesNavigator}
    />
    <DashboardTabs.Screen
      name={DASHBOARD_ROUTES.LIKED_CHARACTERS}
      component={LikedCharactersNavigator}
    />
  </DashboardTabs.Navigator>
);

export default DashboardNavigator;
