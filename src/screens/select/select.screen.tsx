import React from 'react';
import { FlatList, Text, TextStyle, View, ViewStyle } from 'react-native';
import { Screen } from '../../components';
import { IRoutes, store } from '../../store/mock.store';
import { SCREEN_PADDING } from '../../theme/constants';
import { RouteCard } from './components/route.card.component';
import { useRouteContext } from '../../context/route.context';


export const SelectScreen = () => {
    return (
        <Screen
        >
            <View
                style={ROOT}
            >
                <Text
                    style={TITLE}
                >
                    Select your route
                </Text>
                <FlatList 
                    data={store}
                    style={FLAT_LIST}
                    renderItem={({ item }: { item: IRoutes }) => <RouteCard key={item.routeName} {...item}/>}
                    ItemSeparatorComponent={() => <View style={{ height: SCREEN_PADDING }}/>}
                />
            </View>
            
        </Screen>
    );
};

const ROOT: ViewStyle = {
    alignSelf: 'center',
    rowGap: SCREEN_PADDING,
    alignItems: 'center',
};
const TITLE: TextStyle = {
    fontSize: 26,
};

const FLAT_LIST: ViewStyle = {
    width: 270,
};
