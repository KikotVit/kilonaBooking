import React from 'react';
import { ISeat } from '../../../store/mock.store';
import { Text, TouchableOpacity, View } from 'react-native';
import { palette } from '../../../theme';
import { useNavigation } from '@react-navigation/native';

export const Seat = (seat: ISeat) => {
    const { number, isReserved } = seat;

    const navigation = useNavigation();
    return (
        <TouchableOpacity
            style={{
                width: 48,
                height: 48,
                borderRadius: 8,
                backgroundColor: isReserved ? palette.reserved : palette.white,
                alignItems: 'center',
                justifyContent: 'center',
            }}
            disabled={isReserved}
            onPress={() => navigation.navigate('map')}
        >
            <Text
                style={{
                    fontSize: 18,
                }}
            >
                {number}
            </Text>
        </TouchableOpacity>
    );
};
