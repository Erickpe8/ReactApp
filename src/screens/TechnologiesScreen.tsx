// src/screens/TechnologiesScreen.tsx
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import React, { useMemo, useState } from 'react';
import { Alert, FlatList, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { TechnologyItem } from '../components/TechnologyItem';
import { useTheme } from '../context/ThemeContext';
import { technologies, Technology } from '../data/mockData';
import { getStyles } from '../styles/screens/TechnologiesScreen.styles';

const TechnologiesScreen = () => {
    const navigation = useNavigation<any>();
    const [searchText, setSearchText] = useState('');
    const { colors } = useTheme();
    const styles = getStyles(colors);

    const filteredTechnologies = useMemo(() => {
        return technologies.filter(tech =>
            tech.name.toLowerCase().includes(searchText.toLowerCase()) ||
            tech.description.toLowerCase().includes(searchText.toLowerCase())
        );
    }, [searchText]);

    const handleTechPress = (tech: Technology) => {
        Alert.alert(
            tech.name,
            tech.description,
            [
                { text: 'Cerrar', style: 'cancel' },
                { text: '¡Excelente!', style: 'default' },
            ]
        );
    };

    const listHeader = useMemo(() => (
        <View style={styles.header}>
            <Text style={styles.title}>Tecnologías</Text>
            <Text style={styles.subtitle}>
                Explora las herramientas de tu perfil profesional
            </Text>
            <View style={styles.searchContainer}>
                <MaterialCommunityIcons name="magnify" size={20} color={colors.textLight} style={styles.searchIcon} />
                <TextInput
                    style={styles.searchInput}
                    placeholder="Buscar tecnología..."
                    placeholderTextColor={colors.textLight}
                    value={searchText}
                    onChangeText={(text) => setSearchText(text)}
                    autoCorrect={false}
                />
                {searchText !== '' && (
                    <TouchableOpacity onPress={() => setSearchText('')}>
                        <MaterialCommunityIcons name="close-circle" size={18} color={colors.textLight} />
                    </TouchableOpacity>
                )}
            </View>
        </View>
    ), [searchText, colors, styles]);

    return (
        <View style={styles.container}>
            <FlatList
                data={filteredTechnologies}
                renderItem={({ item }) => (
                    <TechnologyItem
                        technology={item}
                        onPress={handleTechPress}
                    />
                )}
                keyExtractor={(item) => item.id}
                ListHeaderComponent={listHeader}
                ListFooterComponent={
                    <TouchableOpacity
                        style={styles.backButton}
                        onPress={() => navigation.goBack()}
                    >
                        <MaterialCommunityIcons name="arrow-left" size={20} color="white" style={styles.backIcon} />
                        <Text style={styles.backButtonText}>Volver</Text>
                    </TouchableOpacity>
                }
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.listContainer}
                keyboardShouldPersistTaps="handled"
            />
        </View>
    );
};

export default TechnologiesScreen;
