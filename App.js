import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { LogBox } from 'react-native';
import { StatusBar } from 'react-native'
import { COLORS } from './src/constants/colors'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import MainRoutes from './src/routes'

LogBox.ignoreLogs(['Non-serializable values were found in the navigation state',]);

const App = () => {
    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <NavigationContainer>
                <StatusBar backgroundColor={COLORS.Yankees_Blue} />
                <MainRoutes />
            </NavigationContainer>
        </GestureHandlerRootView>
    )
}

export default App