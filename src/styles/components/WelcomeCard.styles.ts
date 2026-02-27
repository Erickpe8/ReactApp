// src/styles/components/WelcomeCard.styles.ts
import { StyleSheet } from 'react-native';
import { LightTheme } from '../colors';

export const getStyles = (colors: typeof LightTheme) => StyleSheet.create({
    container: {
        backgroundColor: colors.surface,
        padding: 20,
        margin: 15,
        borderRadius: 12,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: colors.primary,
        textAlign: 'center',
        marginBottom: 10,
    },
    subtitle: {
        fontSize: 18,
        color: colors.text,
        textAlign: 'center',
        marginBottom: 15,
    },
    description: {
        fontSize: 16,
        color: colors.textLight,
        textAlign: 'center',
        lineHeight: 22,
        marginBottom: 20,
    },
    button: {
        backgroundColor: colors.primary,
        paddingVertical: 12,
        paddingHorizontal: 30,
        borderRadius: 25,
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: '600',
    },
});
