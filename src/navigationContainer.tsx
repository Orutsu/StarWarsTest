import React, {useEffect} from 'react';

// Components
import {NavigationContainer as NavigationWrap} from '@react-navigation/native';
import {DashboardNavigator} from './navigation';

// Libs & Utils
import {isReadyNavigation, navigationRef} from './navigation/navigationService';

const NavigationContainer = () => {
  useEffect(() => {
    return () => {
      isReadyNavigation.current = false;
    };
  }, []);

  return (
    <NavigationWrap
      ref={navigationRef}
      onReady={() => {
        isReadyNavigation.current = true;
      }}>
      <DashboardNavigator />
    </NavigationWrap>
  );
};

export default NavigationContainer;
