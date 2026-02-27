// src/styles/components/TechnologyItem.styles.ts
import { StyleSheet } from 'react-native';
import { LightTheme } from '../colors';

export const getStyles = (colors: typeof LightTheme) => StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 15,
        marginHorizontal: 15,
        marginVertical: 5,
        borderRadius: 12,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
        backgroundColor: colors.surface,
    },
    iconContainer: {
        width: 50,
        height: 50,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 15,
        backgroundColor: colors.iconBackground,
    },
    content: {
        flex: 1,
    },
    name: {
        fontSize: 16,
        fontWeight: '600',
        marginBottom: 2,
        color: colors.text,
    },
    description: {
        fontSize: 14,
        lineHeight: 18,
        color: colors.textLight,
    },
    arrowContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
    },
});
