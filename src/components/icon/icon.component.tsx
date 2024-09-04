import * as React from 'react';
import { View, Image, ImageStyle, ViewStyle } from 'react-native';
import { icons, IconTypes } from '../../icons/icons';

export interface IIconProps {
    style?: ImageStyle;
    containerStyle?: ViewStyle;
    icon: IconTypes;
}

export function Icon(props: IIconProps): React.ReactElement {
    const { style: styleOverride, icon, containerStyle } = props;
    const style: ImageStyle = { ...ROOT, ...styleOverride };

    return (
        <View style={containerStyle}>
            <Image style={style} source={icons[icon]} />
        </View>
    );
}
const ROOT: ImageStyle = {
    resizeMode: 'contain',
    width: 30,
    height: 30,
};