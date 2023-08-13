import 'react-native-gesture-handler';
import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  HttpLink,
} from '@apollo/client';
import NavigationContainer from './navigationContainer';

const client = new ApolloClient({
  link: new HttpLink({
    uri: 'https://swapi-graphql.netlify.app/.netlify/functions/index',
  }),
  cache: new InMemoryCache(),
});

const App = () => {
  return (
    <SafeAreaProvider>
      <ApolloProvider client={client}>
        <NavigationContainer />
      </ApolloProvider>
    </SafeAreaProvider>
  );
};

export default App;
