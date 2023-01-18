/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen, ProfileScreen, ScannerScreen } from '../screens';
import type { Params } from './Params';
import { PageName } from './PageName';

const Stack = createStackNavigator<Params>();

export const MyStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={PageName.HomeScreen} component={HomeScreen} />
      <Stack.Screen name={PageName.ProfileScreen} component={ProfileScreen} />
      <Stack.Screen name={PageName.ScannerScreen} component={ScannerScreen} />
    </Stack.Navigator>
  );
};
