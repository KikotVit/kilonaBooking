import React from 'react';
import { FlatList, View } from 'react-native';
import { ISeat } from '../../../store/mock.store';
import { Seat } from './seat.componen';

export const SeatList = ({ data }: {data: ISeat[]}) => {
    return (
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
                data={data}
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
    );
};
