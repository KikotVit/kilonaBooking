import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, RouteProp } from '@react-navigation/native';
import { InfoScreen, MapScreen, SeatsScreen, SelectScreen } from '../screens';
import { Icon } from '../components';
import { IconTypes } from '../icons/icons';
import { palette } from '../theme/palette';

export type TabNavParamList = {
    select: undefined;
    seats: undefined;
    map: undefined;
    info: undefined;
};

const Tab = createBottomTabNavigator<TabNavParamList>();

const TabBarIcon = ({ focused, route, navigation }: { focused: boolean, route: RouteProp<TabNavParamList, keyof TabNavParamList>, navigation }) => {

    const icons: Record<string, IconTypes> = {
        select: 'select_icon',
        info: 'info_icon',
        map: 'map_icon',
    };

    const icon = icons[route.name];
    
    return (
        <Icon
            containerStyle={{
                borderRadius: 30,
                padding: 3,
                backgroundColor: focused ? palette.mainTransparent : '',
            }} icon={icon} />
    );
};

export const BottomTabNavigator = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({ route, navigation }) => ({
                    tabBarIcon: ({ focused }) => <TabBarIcon navigation={navigation} route={route} focused={focused} />,
                    tabBarStyle: {
                        display: route.name === 'select' ? 'none': 'flex',
                    },
                    headerShown: false,
                })}
            >
                <Tab.Screen
                    name='select'
                    component={SelectScreen} />
                <Tab.Screen
                    name='seats'
                    options={{
                        tabBarButton: () => null,
                    }}
                    component={SeatsScreen} />
                <Tab.Screen
                    name='map'
                    component={MapScreen} />
                <Tab.Screen
                    name='info'
                    component={InfoScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    );
};
