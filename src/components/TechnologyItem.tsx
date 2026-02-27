// src/components/TechnologyItem.tsx
import { MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { useTheme } from '../context/ThemeContext';
import { Technology } from '../data/mockData';
import { getStyles } from '../styles/components/TechnologyItem.styles';

interface TechnologyItemProps {
    technology: Technology;
    onPress: (technology: Technology) => void;
}

export const TechnologyItem: React.FC<TechnologyItemProps> = ({
    technology,
    onPress,
}) => {
    const { colors } = useTheme();
    const styles = getStyles(colors);

    return (
        <TouchableOpacity
            style={styles.container}
            onPress={() => onPress(technology)}
            activeOpacity={0.7}
        >
            <View style={styles.iconContainer}>
                <MaterialCommunityIcons
                    name={technology.icon as any}
                    size={30}
                    color={colors.primary}
                />
            </View>

            <View style={styles.content}>
                <Text style={styles.name}>{technology.name}</Text>
                <Text style={styles.description} numberOfLines={2}>
                    {technology.description}
                </Text>
            </View>

            <View style={styles.arrowContainer}>
                <MaterialCommunityIcons name="chevron-right" size={24} color={colors.textLight} />
            </View>
        </TouchableOpacity>
    );
};
