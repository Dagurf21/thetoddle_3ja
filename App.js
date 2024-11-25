import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './navigation/AppNavigator';
import { DataProvider } from './context/DataContext';

export default function App() {
  return (
      <DataProvider>
        <NavigationContainer>
          <AppNavigator />
        </NavigationContainer>
      </DataProvider>
  );
}
