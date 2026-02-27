// src/navigation/AppNavigator.tsx
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { useTheme } from '../context/ThemeContext';
import AboutScreen from '../screens/AboutScreen';
import HomeScreen from '../screens/HomeScreen';
import TechnologiesScreen from '../screens/TechnologiesScreen';

export type RootStackParamList = {
    Home: undefined;
    About: undefined;
    Technologies: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

export default function AppNavigator() {
    const { colors, isDark } = useTheme();

    return (
        <NavigationContainer>
            <Stack.Navigator
                id="main"
                initialRouteName="Home"
                screenOptions={{
                    headerStyle: {
                        backgroundColor: colors.primary,
                        elevation: 0,
                        shadowOpacity: 0,
                    },
                    headerTintColor: 'white',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },
                    cardStyle: { backgroundColor: colors.background }
                }}
            >
                <Stack.Screen
                    name="Home"
                    component={HomeScreen}
                    options={{ title: 'Erick Sebastian Perez Carvajal' }}
                />
                <Stack.Screen
                    name="About"
                    component={AboutScreen}
                    options={{ title: 'Acerca De' }}
                />
                <Stack.Screen
                    name="Technologies"
                    component={TechnologiesScreen}
                    options={{ title: 'Tecnologías' }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
