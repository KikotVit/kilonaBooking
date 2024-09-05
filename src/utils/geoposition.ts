import Geolocation, { GeolocationResponse } from '@react-native-community/geolocation';
import { Platform } from 'react-native';
import { check, PERMISSIONS, request, RESULTS } from 'react-native-permissions';

export const requestGeolocationPermission = async (): Promise<boolean> => {
    let permission;
    
    if (Platform.OS === 'ios') {
        permission = PERMISSIONS.IOS.LOCATION_WHEN_IN_USE;
    } else {
        permission = PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION;
    }

    const result = await check(permission);

    if (result === RESULTS.GRANTED) {
        return true;
    }

    const requestResult = await request(permission);

    return requestResult === RESULTS.GRANTED;
};

export const getCurrentPosition = async (): Promise<GeolocationResponse> => {
    return new Promise ((resolve) => {
        Geolocation.getCurrentPosition(info => resolve(info));
    });
};