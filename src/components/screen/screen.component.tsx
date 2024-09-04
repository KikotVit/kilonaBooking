import React from 'react';
import { View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { palette } from '../../theme/palette';

export const Screen = ({ children }: {children?: React.ReactNode}) => {
    const insets = useSafeAreaInsets();
    return (
        <View
            style={{
                flex: 1,
                paddingTop: insets.top,
                backgroundColor: palette.background,
            }}
        >
            {children}
        </View>
    );
};
