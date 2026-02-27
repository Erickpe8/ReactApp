// src/styles/screens/HomeScreen.styles.ts
import { StyleSheet } from 'react-native';
import { LightTheme } from '../colors';

export const getStyles = (colors: typeof LightTheme) => StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: colors.background,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 10,
        color: colors.text,
    },
    subtitle: {
        fontSize: 18,
        marginBottom: 30,
        textAlign: 'center',
        color: colors.textLight,
    },
    button: {
        flexDirection: 'row',
        paddingVertical: 15,
        paddingHorizontal: 30,
        borderRadius: 25,
        marginBottom: 15,
        minWidth: 220,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.primary,
    },
    buttonIcon: {
        marginRight: 10,
    },
    buttonText: {
        fontSize: 16,
        fontWeight: '600',
        textAlign: 'center',
    },
    buttonSecondary: {
        backgroundColor: 'transparent',
        borderWidth: 2,
        borderColor: colors.primary,
    },
    themeToggle: {
        flexDirection: 'row',
        marginTop: 40,
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 30,
        borderWidth: 1,
        alignItems: 'center',
        elevation: 2,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        backgroundColor: colors.surface,
        borderColor: colors.border,
    },
    themeText: {
        marginLeft: 10,
        fontWeight: '500',
        color: colors.text,
    }
});
