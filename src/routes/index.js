import React from 'react';
import { View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import LiveStreamingScreen from '../Screens/LiveStreamingScreen';

const RootStack = createStackNavigator();

const Router = () => {
    return (
        <RootStack.Navigator>
            <RootStack.Screen
                name="LiveStreaming"
                component={LiveStreamingScreen}
                options={{
                    headerShown: false
                }} 
            />
        </RootStack.Navigator>
    );
}

export default Router;