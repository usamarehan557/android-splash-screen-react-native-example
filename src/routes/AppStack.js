import React from 'react';
import HomeScreen from '../screens/HomeScreen';
import TestScreen from '../screens/TestScreen';
import OlxpropertyScreen from '../screens/olxpropertyScreen';
import Olxpropertylocationfilterscreen from '../screens/olxpropertylocationfilterscreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();

const AppStack = () => {
    return (
        <Stack.Navigator initialRouteName='Olxproperty'>
            <Stack.Screen 
            name="Home"
            component={HomeScreen} 
            options={{
                headerShown: false
            }}/>
            <Stack.Screen
            name="Olxproperty"
            component={OlxpropertyScreen} 
            options={{
                headerShown: false
            }}/>
            <Stack.Screen
                name="Olxpropertylocationfilter"
                component={Olxpropertylocationfilterscreen} 
                options={{
                    headerShown: false
                }}/>
            <Stack.Screen
            name="Test"
            component={TestScreen} 
            options={{
                headerShown: false
            }}/>
        </Stack.Navigator>
    )
}

export default AppStack;