// src/screens/AboutScreen.tsx
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { useTheme } from '../context/ThemeContext';
import { getStyles } from '../styles/screens/AboutScreen.styles';

const AboutScreen = () => {
    const navigation = useNavigation<any>();
    const { colors } = useTheme();
    const styles = getStyles(colors);

    return (
        <ScrollView style={styles.container}>
            <View style={styles.content}>
                <Text style={[styles.title, { color: colors.primary, fontSize: 32 }]}>Sobre mí</Text>

                <View style={[styles.infoCard, { borderLeftWidth: 4, borderLeftColor: colors.primary }]}>
                    <Text style={styles.description}>
                        Soy un desarrollador <Text style={{ fontWeight: 'bold' }}>fullstack en formación</Text>, con especial interés en la construcción de sistemas sólidos, escalables y alineados con buenas prácticas de ingeniería. {'\n\n'}
                        Cuento con una <Text style={{ fontWeight: 'bold' }}>especialización técnica en desarrollo de software</Text>, he cursado <Text style={{ fontWeight: 'bold' }}>seis semestres de Ingeniería de Software</Text>, cuento con experiencia en una fábrica de desarrollo y actualmente curso un diplomado en Arquitecturas de Software. {'\n\n'}
                        Disfruto todo el ciclo de vida del software: análisis, requerimientos, documentación, desarrollo y trabajo en equipos ágiles. Me motiva crear soluciones que tengan sentido dentro de una arquitectura bien pensada.
                    </Text>
                </View>

                <View style={styles.infoCard}>
                    <Text style={[styles.subtitle, { marginBottom: 15 }]}>
                        <MaterialCommunityIcons name="bullseye-arrow" size={24} color={colors.primary} /> Mi Misión
                    </Text>
                    <Text style={styles.description}>
                        Transformar ideas en soluciones tecnológicas eficientes, priorizando la arquitectura limpia y la mantenibilidad del código.
                    </Text>
                </View>

                <TouchableOpacity
                    style={styles.backButton}
                    onPress={() => navigation.goBack()}
                >
                    <MaterialCommunityIcons name="arrow-left" size={20} color="white" style={styles.backIcon} />
                    <Text style={styles.backButtonText}>Volver al Inicio</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

export default AboutScreen;
