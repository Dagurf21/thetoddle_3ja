import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import AppNavigator from './src/navigation/AppNavigator'
import { DataProvider } from './src/services/DataContext'

export default function App() {
    return (
        <DataProvider>
            <NavigationContainer>
                <AppNavigator />
            </NavigationContainer>
        </DataProvider>
    )
}
