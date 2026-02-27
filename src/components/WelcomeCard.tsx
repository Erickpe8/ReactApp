// src/components/WelcomeCard.tsx
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { useTheme } from '../context/ThemeContext';
import { getStyles } from '../styles/components/WelcomeCard.styles';

interface WelcomeCardProps {
    userName: string;
    onGetStarted: () => void;
}

export const WelcomeCard: React.FC<WelcomeCardProps> = ({
    userName,
    onGetStarted,
}) => {
    const { colors } = useTheme();
    const styles = getStyles(colors);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>¡Bienvenid@!</Text>
            <Text style={styles.subtitle}>Hola {userName}</Text>
            <Text style={styles.description}>
                Esta es tu primera aplicación React Native.
                ¡Prepárate para una experiencia increíble!
            </Text>

            <TouchableOpacity style={styles.button} onPress={onGetStarted}>
                <Text style={styles.buttonText}>Comenzar</Text>
            </TouchableOpacity>
        </View>
    );
};
