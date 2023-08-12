import React from 'react';
import {RootRoutes} from './routes';
import {
  NavigationContainerRef,
  CommonActions,
  NavigationState,
  PartialState,
  StackActions,
} from '@react-navigation/native';

export const isReadyNavigation = {
  current: false,
};

export const navigationRef = React.createRef<NavigationContainerRef<any>>();

type NavigationParams = {
  screen?: string;
  params?: object;
};

type ResetParams = {
  index: number;
  routes: {name: RootRoutes}[];
};

const navigate = (name: RootRoutes, params?: NavigationParams) => {
  if (isReadyNavigation.current && navigationRef.current) {
    navigationRef.current.navigate(name, params);
  } else {
    console.log('Navigator', 'Navigation not init');
  }
};

const push = (name: RootRoutes, params?: NavigationParams) => {
  if (isReadyNavigation.current && navigationRef.current) {
    navigationRef.current.dispatch(StackActions.push(name, params));
  } else {
    console.log('Navigator', 'Navigation not init');
  }
};

const getActiveRouteName = (): string => {
  const state = navigationRef.current?.getRootState();
  let routeName = '';
  if (state?.routes) {
    routeName = getActiveRouteNameFromState(state);
  }
  return routeName;
};

const getActiveRouteNameWithDefaultRoute = (defaultRoute: string): string => {
  const state = navigationRef.current?.getRootState();
  let routeName = defaultRoute;
  if (state?.routes) {
    routeName = getActiveRouteNameFromState(state);
  }
  return routeName;
};

const getActiveRouteNameFromState = (
  state: NavigationState | PartialState<NavigationState>,
): string => {
  if (!state.routes) {
    return '';
  }

  const route = state.routes[state.index!];

  if (route.state) {
    return getActiveRouteNameFromState(route.state);
  }

  return route.name;
};

const reset = (params: ResetParams) =>
  navigationRef.current?.dispatch(CommonActions.reset(params));

const resetRoot = () => {
  navigationRef.current?.resetRoot();
};

const setParams = (params: object) => {
  navigationRef.current?.dispatch(CommonActions.setParams(params));
};

const goBack = () => navigationRef.current?.dispatch(CommonActions.goBack());

export default {
  getActiveRouteName,
  getActiveRouteNameWithDefaultRoute,
  navigate,
  reset,
  goBack,
  resetRoot,
  setParams,
  push,
};
