import React from 'react'
import { Home, Movie, OverReview, Pay, Profile, Ticket } from '../screens';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SCREEN_NAMES } from '../constants/screens';


const MainStack = createNativeStackNavigator();

const defaultOptions = {
    headerShown: false
};

const MainRoutes = () => {
    return (
        <MainStack.Navigator screenOptions={{ ...defaultOptions }}>
            <MainStack.Screen name={SCREEN_NAMES.HOME} component={Home} />
            <MainStack.Screen name={SCREEN_NAMES.MOVIE} component={Movie} />
            <MainStack.Screen name={SCREEN_NAMES.PROFILE} component={Profile} />
            <MainStack.Screen name={SCREEN_NAMES.OVERREVIEW} component={OverReview} />
            <MainStack.Screen name={SCREEN_NAMES.PAY} component={Pay} />
            <MainStack.Screen name={SCREEN_NAMES.TICKET} component={Ticket} />
        </MainStack.Navigator>
    )
}

export default MainRoutes