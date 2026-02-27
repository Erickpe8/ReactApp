// src/context/ThemeContext.tsx
import React, { createContext, useContext, useState } from 'react';
import { useColorScheme } from 'react-native';
import { DarkTheme, LightTheme } from '../styles/colors';

type ThemeType = typeof LightTheme;

interface ThemeContextType {
    colors: ThemeType;
    isDark: boolean;
    toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const systemColorScheme = useColorScheme();
    const [isDark, setIsDark] = useState(systemColorScheme === 'dark');

    const toggleTheme = () => setIsDark(!isDark);

    const colors = isDark ? DarkTheme : LightTheme;

    return (
        <ThemeContext.Provider value={{ colors, isDark, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
};
