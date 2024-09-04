import React, { forwardRef, useRef } from 'react';
import { Text, View, ViewStyle } from 'react-native';
import { RouteInfoHeader, Screen } from '../../components';
import MapView, { MapViewProps, PROVIDER_GOOGLE } from 'react-native-maps';
import { useRouteContext } from '../../context/route.context';
import { SCREEN_PADDING } from '../../theme';

export const INITIAL_REGION = {
    latitude: 48,
    longitude: 31,
    latitudeDelta: 17,
    longitudeDelta: 17,
};

const Map = ((props: MapViewProps, ref) => (
    <View
        style={{
            width: '100%',
            height: '100%',
        }}
    >
        <MapView
            ref={ref} 
            region={INITIAL_REGION}
            provider={PROVIDER_GOOGLE}
            style={MAP_VIEW}
            showsUserLocation
            showsMyLocationButton={true}
            toolbarEnabled={false} 
            {...props} />
    </View>
));

const MapComponent = React.memo(React.forwardRef(Map));

export const MapScreen = () => {
    const { route } = useRouteContext();
    const mapRef = useRef();

    return (
        <Screen
        >
            <View
                style={ROOT}
            >
                <RouteInfoHeader
                    routeName={route.routeName}
                    routeConnection={route.routeConnection}
                />
                <MapComponent
                    ref={mapRef}
                />
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

const MAP_VIEW: ViewStyle = {
    width: '100%',
    flex: 1,
};
