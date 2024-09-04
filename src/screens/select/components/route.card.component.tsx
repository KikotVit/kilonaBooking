import React from 'react';
import { IRoutes } from '../../../store/mock.store';
import { Image, ImageStyle, Text, TextStyle, TouchableOpacity, View, ViewStyle } from 'react-native';
import { palette, SCREEN_PADDING } from '../../../theme';
import { useNavigation } from '@react-navigation/native';

export const RouteCard = (item: IRoutes) => {
    const { routeName, routeConnection } = item;

    const navigation = useNavigation();

    const onPress = () => {
        navigation.navigate('seats', { item });
    };

    return (
        <TouchableOpacity
            style={CARD}
            onPress={onPress}
        >
            <View
                style={CARD_HEADER}
            >
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

            <View
                style={IMAGE_CONTAINER}
            >
                <Image
                    source={require('../assets/bus.png')}
                    style={IMAGE}
                />
            </View>

        </TouchableOpacity>
    );
};

const CARD: ViewStyle = {
    borderRadius: 20,
    overflow: 'hidden',
    width: '100%',
};
const CARD_HEADER: ViewStyle = {
    height: 90,
    width: '100%',
    backgroundColor: palette.main,
    paddingVertical: SCREEN_PADDING,
    alignItems: 'center',
};
const ROUTE_NAME: TextStyle = {
    color: palette.white,
    fontSize: 24,
};
const ROUTE_CONNECTION: TextStyle = {
    color: palette.white,
    fontSize: 14,
};
const IMAGE_CONTAINER: ViewStyle = {
    height: 270,
    width: '100%',
    backgroundColor: palette.white,
    paddingTop: SCREEN_PADDING,
};
const IMAGE: ImageStyle = {
    resizeMode: 'contain',
    width: '105%',
};