import React from 'react';
import { Text } from 'react-native';
import { Screen } from '../../components';
import { RouteProp, useRoute } from '@react-navigation/native';
import { IRoutes } from '../../store/mock.store';

export type SeatsScreenParamList = {
    Routes: {
        item: IRoutes;
        id?: string;
    }
}

export const SeatsScreen = () => {

    const route = useRoute<RouteProp<SeatsScreenParamList, 'Routes'>>();

    return (
        <Screen>
            <Text>
                {route.params.item.routeConnection}
            </Text>
        </Screen>
    );
};
