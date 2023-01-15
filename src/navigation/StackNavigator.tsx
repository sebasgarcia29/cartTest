/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen, ProfileScreen } from '../screens';
import type { Params } from './Params';
import { PageName } from './PageName';

const Stack = createStackNavigator<Params>();

export const MyStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={PageName.HomeScreen} component={HomeScreen} />
      <Stack.Screen name={PageName.ProfileScreen} component={ProfileScreen} />
    </Stack.Navigator>
  );
};