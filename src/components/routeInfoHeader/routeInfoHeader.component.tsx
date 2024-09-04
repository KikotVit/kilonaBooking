import React from 'react';
import { Text, TextStyle, View, ViewStyle } from 'react-native';
import { palette, SCREEN_PADDING } from '../../theme';

export const RouteInfoHeader = ({ routeName, routeConnection }: {routeName: string, routeConnection: string}) => {
    return (
        <View
            style={ROOT}
        >
            <View>
                <Text
                    style={ROUTE_NAME}
                >
                    {routeName}
                </Text>
                <Text
                    style={ROUTE_CONNECTION}
                >
                    {routeConnection}
                </Text>
            </View>
        </View>
    );
};

const ROOT: ViewStyle = {
    width: 230,
    height: 52,
    borderTopRightRadius: 16,
    borderBottomRightRadius: 16,
    backgroundColor: palette.main,
    paddingLeft: SCREEN_PADDING,
    justifyContent: 'center',
};
const ROUTE_NAME: TextStyle = {
    color: palette.white,
    fontSize: 18,
};
const ROUTE_CONNECTION: TextStyle = {
    color: palette.white,
    fontSize: 10,
};
