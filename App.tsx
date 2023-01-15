import * as React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { MyStack } from './src/navigation/StackNavigator';
import { ProductProvider } from './src/context/ProductContext';

const AppState = ({ children }: any) => {
  return <ProductProvider>{children}</ProductProvider>;
};

export default function App() {
  return (
    <NavigationContainer>
      <AppState>
        <MyStack />
      </AppState>
    </NavigationContainer>
  );
}
