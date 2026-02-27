// src/screens/HomeScreen.tsx
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { useTheme } from '../context/ThemeContext';
import { getStyles } from '../styles/screens/HomeScreen.styles';

const HomeScreen = () => {
    const navigation = useNavigation<any>();
    const { colors, isDark, toggleTheme } = useTheme();
    const styles = getStyles(colors);

    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1, paddingVertical: 40 }} style={{ backgroundColor: colors.background }}>
            <View style={{ alignItems: 'center', paddingHorizontal: 20 }}>
                {/* Mockup for profile image space */}
                <View style={{ width: 100, height: 100, borderRadius: 50, backgroundColor: colors.surface, marginBottom: 20, elevation: 5, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.2, shadowRadius: 4, justifyContent: 'center', alignItems: 'center' }}>
                    <MaterialCommunityIcons name="account" size={60} color={colors.primary} />
                </View>

                <Text style={[styles.title, { textAlign: 'center' }]}>👋 Hola, soy <Text style={{ color: colors.primary }}>Erick Pérez</Text></Text>

                <Text style={{ fontSize: 18, color: colors.textLight, marginBottom: 10, fontWeight: '500' }}>Fullstack Developer en formación</Text>

                <Text style={{ fontSize: 16, color: colors.text, textAlign: 'center', lineHeight: 22, marginBottom: 30 }}>
                    Me apasiona la gestión de proyectos de software, la toma de requerimientos, la documentación técnica y el trabajo con equipos ágiles.
                </Text>

                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.navigate('About')}
                >
                    <MaterialCommunityIcons name="information-outline" size={20} color="white" style={styles.buttonIcon} />
                    <Text style={[styles.buttonText, { color: 'white' }]}>Sobre mí</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={[styles.button, styles.buttonSecondary]}
                    onPress={() => navigation.navigate('Technologies')}
                >
                    <MaterialCommunityIcons name="code-tags" size={20} color={colors.primary} style={styles.buttonIcon} />
                    <Text style={[styles.buttonText, { color: colors.primary }]}>
                        Habilidades y Herramientas
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={{ marginTop: 20, flexDirection: 'row', alignItems: 'center', padding: 10 }}
                    onPress={toggleTheme}
                >
                    <MaterialCommunityIcons
                        name={isDark ? "weather-sunny" : "weather-night"}
                        size={24}
                        color={colors.primary}
                    />
                    <Text style={{ marginLeft: 8, color: colors.text, fontWeight: '600' }}>
                        {isDark ? "Modo Claro" : "Modo Oscuro"}
                    </Text>
                </TouchableOpacity>

                <Text style={{ marginTop: 20, color: colors.textLight, fontSize: 12 }}>Mi primera app en React Native</Text>
            </View>
        </ScrollView>
    );
};

export default HomeScreen;
