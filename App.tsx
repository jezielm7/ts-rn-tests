import React from 'react';
import { StatusBar } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';

import StackRouter from './src/routes/stack.routes';

const App = () => {
  return (
    <NavigationContainer>
      <StackRouter />
      <StatusBar backgroundColor="#1C2833" />
    </NavigationContainer>
  );
};

export default App;
