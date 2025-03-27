import React from 'react'
import { Pressable, Text } from 'react-native'
import { colors, styles } from '../../../config/theme/app-theme'

interface Props {
    label: string,
    color?: string,
    doubleSize?: boolean,
    onPress: () => void;
}

export const CalculatorButton = ({label,color=colors.darkGray,doubleSize=false,onPress}:Props) => {
    return (
        <Pressable style={{
            ...styles.button,
            backgroundColor: color,
            width: (doubleSize) ? 180 : 80
            }}
            onPress={onPress}>
            <Text style={styles.textButton}>{label}</Text>
        </Pressable>
    )
}
