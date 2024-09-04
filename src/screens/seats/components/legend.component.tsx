import React from 'react';
import { Text, View } from 'react-native';
import { palette } from '../../../theme';

export const LegendComponent = () => {
    return (
        <View
            style={{
                rowGap: 4,
            }}
        >
            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'flex-end',
                    alignItems: 'center',
                    columnGap: 12,
                }}
            >
                <Text>
                                Reserved 
                </Text>
                <View 
                    style={{
                        borderRadius: 6,
                        width: 24,
                        height: 24,
                        backgroundColor: palette.reserved,
                    }}
                />
                            
            </View>
            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'flex-end',
                    alignItems: 'center',
                    columnGap: 12,
                }}
            >
                <Text>
                                Available 
                </Text>
                <View 
                    style={{
                        borderRadius: 6,
                        width: 24,
                        height: 24,
                        backgroundColor: palette.white,
                    }}
                />
            </View>
        </View>
    );
};
