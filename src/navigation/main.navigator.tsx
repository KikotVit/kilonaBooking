import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SelectScreen } from '../screens';

const Stack = createNativeStackNavigator();
export const MainNavigator = () => {


    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name='Select'
                    component={SelectScreen}
                    options={{ title: 'Select your route' }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};
