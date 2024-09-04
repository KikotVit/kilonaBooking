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
        style={MAP_VIEW_CONTAINER}
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

    // TODO add check permission and open settings
    // animate camera to user location

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
    height: '100%',
    rowGap: SCREEN_PADDING,
    justifyContent: 'space-between',
};

const MAP_VIEW_CONTAINER: ViewStyle = {
    width: '100%',
    height: '90%',
};

const MAP_VIEW: ViewStyle = {
    width: '100%',
    height: '100%',
};
