// src/styles/screens/TechnologiesScreen.styles.ts
import { StyleSheet } from 'react-native';
import { LightTheme } from '../colors';

export const getStyles = (colors: typeof LightTheme) => StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
    },
    listContainer: {
        paddingBottom: 20,
    },
    header: {
        padding: 20,
        paddingBottom: 10,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 5,
        color: colors.text,
    },
    subtitle: {
        fontSize: 16,
        marginBottom: 15,
        color: colors.textLight,
    },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 12,
        borderRadius: 12,
        borderWidth: 1,
        backgroundColor: colors.surface,
        borderColor: colors.border,
    },
    searchIcon: {
        marginRight: 8,
    },
    searchInput: {
        flex: 1,
        height: 45,
        fontSize: 16,
        color: colors.text,
    },
    backButton: {
        flexDirection: 'row',
        paddingVertical: 15,
        paddingHorizontal: 30,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 20,
        marginVertical: 20,
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
