import React, { useEffect, useRef } from 'react';
import { View, ViewStyle } from 'react-native';
import { RouteInfoHeader, Screen } from '../../components';
import MapView, { MapViewProps, PROVIDER_GOOGLE } from 'react-native-maps';
import { useRouteContext } from '../../context/route.context';
import { SCREEN_PADDING } from '../../theme';
import { useIsFocused } from '@react-navigation/native';
import { getCurrentPosition, requestGeolocationPermission } from '../../utils/geoposition';

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

    const isFocused = useIsFocused();

    const { route } = useRouteContext();
    const mapRef = useRef();

    const initializeMap = async () => {
        const hasPermission = await requestGeolocationPermission();
        if (hasPermission) {
            const position = await getCurrentPosition();
            animateCamera(position.coords.latitude, position.coords.longitude);
        }
    };

    useEffect(() => {
        if (isFocused) {
            initializeMap();
        }
    }, [isFocused]);
    

    const animateCamera = (latitude: number, longitude: number) => {
        if (mapRef?.current && mapRef.current.animateCamera) {
            mapRef?.current.animateCamera({
                center: { latitude, longitude },
                pitch: 1,
                heading: 1,
                zoom: 15,
            });
        }
    };

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
