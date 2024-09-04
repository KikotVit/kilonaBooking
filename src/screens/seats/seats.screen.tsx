import React from 'react';
import { View, ViewStyle } from 'react-native';
import { RouteInfoHeader, Screen } from '../../components';
import { useRouteContext } from '../../context/route.context';
import { SCREEN_PADDING } from '../../theme';
import { LegendComponent } from './components/legend.component';
import { SeatList } from './components/seatList.component';


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
                    <SeatList data={route.seats.slice(0, 14)}/>
                    <SeatList data={route.seats.slice(14)}/>
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