// src/styles/screens/AboutScreen.styles.ts
import { StyleSheet } from 'react-native';
import { LightTheme } from '../colors';

export const getStyles = (colors: typeof LightTheme) => StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
    },
    content: {
        padding: 20,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
        color: colors.text,
    },
    infoCard: {
        padding: 20,
        marginBottom: 15,
        borderRadius: 12,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
        backgroundColor: colors.surface,
    },
    subtitle: {
        fontSize: 18,
        fontWeight: '600',
        marginBottom: 10,
        flexDirection: 'row',
        alignItems: 'center',
        color: colors.primary,
    },
    description: {
        fontSize: 16,
        lineHeight: 24,
        color: colors.text,
    },
    backButton: {
        flexDirection: 'row',
        paddingVertical: 15,
        paddingHorizontal: 30,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
        backgroundColor: colors.secondary,
    },
    backIcon: {
        marginRight: 8,
    },
    backButtonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: '600',
    },
});
