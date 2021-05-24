/* eslint-disable prettier/prettier */
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../screens/home';

const { Navigator, Screen } = createStackNavigator();

const StackRouter = () => {
  return (
    <Navigator
      initialRouteName="Home"
      screenOptions={{ headerShown: false }}
    >
      <Screen name="Home" component={Home} />
    </Navigator>
  );
};

export default StackRouter;
