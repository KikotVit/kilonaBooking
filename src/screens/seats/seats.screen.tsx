import React from 'react';
import { Dimensions, FlatList, View, ViewStyle } from 'react-native';
import { RouteInfoHeader, Screen } from '../../components';
import { useRouteContext } from '../../context/route.context';
import { SCREEN_PADDING } from '../../theme';
import { LegendComponent } from './components/legend.component';
import { ISeat } from '../../store/mock.store';
import { Seat } from './components/seat.componen';

const { width } = Dimensions.get('screen');

export const SeatsScreen = () => {

    const { route } = useRouteContext();

    return (
        <Screen>
            <View
                style={ROOT}
            >
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        width: '100%',
                        paddingRight: SCREEN_PADDING,
                    }}
                >
                    <RouteInfoHeader 
                        routeName={route.routeName}
                        routeConnection={route.routeConnection}
                    />
                    <LegendComponent />
                </View>
                <View
                    style={{
                        flexDirection: 'row',
                        paddingHorizontal: SCREEN_PADDING,
                        justifyContent: 'space-between',
                        width: '100%',
                    }}
                >
                    {/* TODO MAKE COMPONENT */}
                    <View
                        style={{
                            width: '34%',
                        }}
                    >
                        <FlatList
                            style={{
                                paddingVertical: 40,
                                height: 540,
                            }}
                            data={route.seats.slice(0, 14)}
                            numColumns={2}
                            renderItem={({ item }: { item: ISeat }) => <Seat key={item.id} {...item}/>}
                            contentContainerStyle={{
                                height: '100%',
                                width: '100%',
                                justifyContent: 'space-between',
                            }}
                            columnWrapperStyle={{
                                justifyContent:'space-between',
                            }}
                        />
                    </View>
                    <View
                        style={{
                            width: '34%',
                        }}
                    >
                        <FlatList
                            style={{
                                paddingVertical: 40,
                                height: 540,
                            }}
                            data={route.seats.slice(14)}
                            numColumns={2}
                            renderItem={({ item }: { item: ISeat }) => <Seat key={item.id} {...item}/>}
                            contentContainerStyle={{
                                height: '100%',
                                width: '100%',
                                justifyContent: 'space-between',
                            }}
                            columnWrapperStyle={{
                                justifyContent:'space-between',
                            }}
                        />
                    </View>
                </View>
            </View>
        </Screen>
    );
};

const ROOT: ViewStyle = {
    alignSelf: 'center',
    width: '100%',
    rowGap: SCREEN_PADDING,
    alignItems: 'flex-start',
};