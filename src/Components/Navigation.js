import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';

import Login from './Login'
import Tab from './Tab';

const Stack = createStackNavigator();

export default function Navigation(){
    return(
        <NavigationContainer>
            <Stack.Navigator>
            <Stack.Screen name="Tab" 
                component={Tab} 
                options={{
                    headerShown: false
                }}
                 />
            <Stack.Screen
                name="Login"
                component={Login}
                options={{
                    headerShown: false
                }}
                mode="modal"
                />
            
                
                
            </Stack.Navigator>
        </NavigationContainer>
    )
}