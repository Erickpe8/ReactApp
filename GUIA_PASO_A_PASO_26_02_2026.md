# GUÍA COMPLETA - MI PRIMERA APP REACT NATIVE
*Tutorial para Principiantes - 26 de febrero 2026*

---

## 🎯 **OBJETIVO**
Crear tu primera aplicación React Native funcional desde cero, incluyendo la instalación de todas las herramientas necesarias.

## ⚠️ **IMPORTANTE - LEE ANTES DE EMPEZAR**
Esta guía asume que es tu **primera vez** desarrollando aplicaciones móviles. Seguiremos cada paso detalladamente y verificaremos que todo funcione antes de continuar.

---

## 🔍 **PASO 0: VERIFICACIÓN COMPLETA DEL SISTEMA**

### **0.1 ¿Qué sistema operativo tienes?**
- **Windows**: Seguir pasos marcados con 🪟
- **macOS**: Seguir pasos marcados con 🍎  
- **Linux**: Seguir pasos marcados con 🐧

### **0.2 Verificar si ya tienes herramientas instaladas**

**Abrir Terminal/Línea de Comandos:**
- 🪟 **Windows**: Buscar "cmd" o "PowerShell" 
- 🍎 **macOS**: Buscar "Terminal"
- 🐧 **Linux**: Buscar "Terminal"

**Ejecutar estos comandos uno por uno:**
```bash
# ✅ Verificar Node.js
node --version
# ¿Aparece algo como "v18.17.0"? ¡Perfecto!
# ❌ ¿Sale "command not found"? Necesitas instalarlo.

# ✅ Verificar npm
npm --version  
# ¿Aparece algo como "9.6.7"? ¡Perfecto!
# ❌ ¿Sale error? Necesitas instalar Node.js completo.

# ✅ Verificar npx
npx --version
# ¿Aparece algún número? ¡Perfecto!
# ❌ ¿Sale error? Instalaremos npm actualizado.

# ✅ Verificar Git (opcional pero recomendado)
git --version
# ¿Aparece algo como "git version 2.39.0"? ¡Perfecto!
# ❌ ¿Sale error? Instalaremos Git.
```

---

## 🛠️ **PASO 1: INSTALACIÓN DE HERRAMIENTAS NECESARIAS**

### **1.1 Instalar Node.js (SI NO LO TIENES)**

**🍎 macOS:**
1. Ir a https://nodejs.org
2. Descargar "LTS" (versión recomendada)
3. Hacer doble clic en el archivo descargado
4. Seguir el instalador (Next, Next, Install...)
5. **Reiniciar Terminal**
6. Verificar: `node --version`

**🪟 Windows:**
1. Ir a https://nodejs.org
2. Descargar "LTS" (versión recomendada)
3. Ejecutar el instalador como **Administrador**
4. ✅ Marcar "Add to PATH" (muy importante)
5. Seguir el instalador
6. **Reiniciar CMD/PowerShell**
7. Verificar: `node --version`

**🐧 Linux (Ubuntu/Debian):**
```bash
# Actualizar sistema
sudo apt update

# Instalar Node.js
curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -
sudo apt-get install -y nodejs

# Verificar
node --version
npm --version
```

### **1.2 Verificar que NPX funcione**
```bash
# Probar npx
npx --version

# ❌ Si no funciona:
npm install -g npm@latest

# Verificar de nuevo
npx --version
```

### **1.3 Instalar Git (SI NO LO TIENES)**

**🍎 macOS:**
```bash
# Opción 1: Con Homebrew (si lo tienes)
brew install git

# Opción 2: Descargar desde https://git-scm.com
```

**🪟 Windows:**
1. Ir a https://git-scm.com
2. Descargar Git para Windows
3. Instalar con opciones por defecto
4. **Reiniciar CMD/PowerShell**

**🐧 Linux:**
```bash
sudo apt install git
```

### **1.4 Instalar Editor de Código**

**Visual Studio Code (Recomendado):**
1. Ir a https://code.visualstudio.com
2. Descargar para tu sistema operativo
3. Instalar siguiendo las instrucciones
4. **Extensiones importantes** (instalar desde VS Code):
   - "React Native Tools" 
   - "ES7 React/Redux snippets"
   - "Prettier - Code formatter"

---

## 📱 **PASO 2: PREPARAR TU DISPOSITIVO MÓVIL**

### **2.1 Opción A: Usar tu Teléfono Real (Recomendado)**

**📱 iOS (iPhone/iPad):**
1. Abrir **App Store**
2. Buscar "**Expo Go**"
3. Instalar la app oficial de Expo (ícono morado)
4. Abrir la app para verificar que funciona

**🤖 Android:**
1. Abrir **Google Play Store** 
2. Buscar "**Expo Go**"
3. Instalar la app oficial de Expo 
4. Abrir la app para verificar que funciona

### **2.2 Opción B: Emulador (Avanzado, Opcional)**

**Para principiantes recomendamos usar tu teléfono real con Expo Go.**

---

## ✅ **PASO 3: VERIFICACIÓN FINAL ANTES DE PROGRAMAR**

### **3.1 Test Completo del Sistema**
```bash
# Ejecutar estos comandos uno por uno y verificar cada resultado:

echo "=== VERIFICACIÓN DEL SISTEMA ==="

echo "1. Node.js:"
node --version
# ✅ Debe mostrar v16.0.0 o superior

echo "2. NPM:"
npm --version  
# ✅ Debe mostrar algún número

echo "3. NPX:"
npx --version
# ✅ Debe mostrar algún número

echo "4. Git:"
git --version
# ✅ Debe mostrar versión de Git

echo "=== FIN VERIFICACIÓN ==="
```

### **3.2 ¿Algún comando falló?**

**❌ Si Node.js no funciona:**
- Reinicia tu computadora
- Vuelve al Paso 1.1
- En Windows, verifica que esté en PATH

**❌ Si NPX no funciona:**
```bash
npm install -g npm@latest
```

**❌ Si nada funciona:**
- Reinstala Node.js completamente
- En Windows, ejecuta como Administrador
- Reinicia la computadora

---

## 🚀 **PASO 4: CREAR TU PRIMERA APP**

### **4.1 Crear Directorio de Trabajo**
```bash
# Navegar a una carpeta donde guardar tu proyecto
# Por ejemplo, Desktop:

# 🍎 macOS / 🐧 Linux:
cd ~/Desktop
mkdir MisAppsFESC
cd MisAppsFESC

# 🪟 Windows:
cd C:\Users\TuNombre\Desktop
mkdir MisAppsFESC
cd MisAppsFESC
```

### **4.2 Crear Proyecto React Native**
```bash
# COMANDO PRINCIPAL - Ejecutar con cuidado:
npx create-expo-app MiPrimeraApp

# ⏳ Este proceso puede tomar 2-5 minutos
# Verás muchos mensajes descargando archivos
# ✅ Al final debe decir "Success!"
```

### **4.3 ¿Qué hacer si hay errores?**

**Error común: "npx: command not found"**
```bash
# Solución alternativa:
npm install -g @expo/cli
expo init MiPrimeraApp
```

**Error común: "Network timeout"**
```bash
# Verificar conexión a internet
# Intentar de nuevo:
npx create-expo-app MiPrimeraApp --template blank
```

### **4.4 Navegar al Proyecto**
```bash
# Entrar a la carpeta del proyecto
cd MiPrimeraApp

# Ver contenido (opcional)
ls -la    # 🍎 macOS / 🐧 Linux
dir       # 🪟 Windows

# Abrir en VS Code
code .

# ❌ Si "code ." no funciona:
# 1. Abrir VS Code manualmente
# 2. File → Open Folder
# 3. Seleccionar carpeta "MiPrimeraApp"
```

---

## 🔥 **PASO 5: EJECUTAR TU PRIMERA APP**

### **5.1 Iniciar el Servidor de Desarrollo**
```bash
# DESDE LA CARPETA MiPrimeraApp:
npx expo start

# ⏳ Esperar unos segundos...
# ✅ Debe aparecer un código QR gigante en la terminal
# ✅ También se abre una página web (localhost:19002)
```

### **5.2 Ver tu App en el Teléfono**

**📱 paso a paso:**
1. **Abrir Expo Go** en tu teléfono
2. **Escanear el QR** que aparece en tu terminal
   - 🍎 **iOS**: Usar la app Cámara (escanear desde ahí)
   - 🤖 **Android**: Usar Expo Go directamente
3. **Esperar** que cargue (puede tomar 30-60 segundos la primera vez)
4. **✅ ¡Deberías ver pantalla que dice "Open up App.js..."!**

### **5.3 Solución de Problemas al Conectar**

**❌ QR no escanea:**
- Asegúrate de estar en la **misma red WiFi**
- Desactivar datos móviles temporalmente
- Acercarte más/alejarte del QR

**❌ App no carga:**
- Verificar que terminal siga corriendo
- Reiniciar: Ctrl+C en terminal, luego `npx expo start`

**❌ Error de conexión:**
- Verificar firewall/antivirus
- Intentar túnel: `npx expo start --tunnel`

### **5.4 Probar Hot Reload**
1. **Abrir App.js** en VS Code
2. **Cambiar texto** "Open up App.js..." por "¡Mi primera app funciona!"
3. **Guardar** (Ctrl+S / Cmd+S)
4. **Verificar** que cambie automáticamente en tu teléfono
5. **¡Si cambia, todo funciona perfectamente!** 🎉

---

## � **PASO 6: ENTENDIENDO LA ESTRUCTURA DE TU PROYECTO**

### **6.1 Que ves en VS Code**

**Cuando abras VS Code, deberías ver algo así:**
```
MiPrimeraApp/
├── app.json          # Configuración de la app
├── App.js            # ← ESTE ES EL ARCHIVO PRINCIPAL
├── package.json      # Lista de dependencias
├── node_modules/     # Librerías (NO TOCAR)
├── assets/          # Imágenes, iconos
└── .expo/           # Cache de Expo (NO TOCAR)
```

### **6.2 Archivo Principal: App.js**

**Abrir `App.js` - Este es tu código principal:**
```javascript
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
```

### **6.3 Tu Primera Modificación**

1. **En VS Code**, cambiar la línea:
```javascript
// CAMBIAR ESTA LÍNEA:
<Text>Open up App.js to start working on your app!</Text>

// POR ESTA:
<Text>¡Hola! Esta es MI primera app 🚀</Text>
```

2. **Guardar** (Ctrl+S o Cmd+S)
3. **Ver cambio** en tu teléfono automáticamente
4. **¡Si funciona, ya entiendes lo básico!**

---

## 📝 **PASO 7: CREAR ESTRUCTURA PROFESIONAL**

### **7.1 ¿Por qué Organizar el Código?**
- **Proyecto grande**: Sin organización = caos total
- **Trabajo en equipo**: Otros deben entender tu código  
- **Mantenimiento**: Fácil encontrar y modificar cosas
- **Profesionalismo**: Así trabajan las empresas reales

### **7.2 Crear Carpetas (Muy Importante)**

**En VS Code, clic derecho en la carpeta raíz → "New Folder":**

1. **Crear carpeta**: `src`
2. **Dentro de src, crear**:
   - `components` 
   - `screens`
   - `navigation`
   - `styles`
   - `data`

**Resultado final:**
```
MiPrimeraApp/
├── src/              # ← TODO TU CÓDIGO IRÁ AQUÍ
│   ├── components/   # Piezas reutilizables
│   ├── screens/      # Pantallas de la app
│   ├── navigation/   # Enlaces entre pantallas
│   ├── styles/       # Colores et estilos
│   └── data/         # Información mock
├── App.js           # Archivo principal
└── [otros archivos]
```

### **7.3 Crear tu Sistema de Colores**

**Crear archivo**: `src/styles/colors.ts`

1. **En VS Code**: Botón derecho en `src/styles/` → New File
2. **Nombrar**: `colors.ts`  
3. **Escribir este código exacto**:

```typescript
// src/styles/colors.ts
export const Colors = {
  // Colores principales - PUEDES CAMBIARLOS
  primary: '#3498db',      // Azul principal
  secondary: '#e74c3c',    // Rojo secundario
  
  // Colores de fondo
  background: '#f8f9fa',   // Gris muy claro
  surface: '#ffffff',      // Blanco puro
  
  // Colors de texto
  text: '#2c3e50',         // Gris oscuro
  textLight: '#7f8c8d',    // Gris claro
  
  // Colores de estado
  success: '#27ae60',      // Verde éxito
  warning: '#f39c12',      // Naranja advertencia  
  error: '#e74c3c',        // Rojo error
  
  // Bordes
  border: '#ecf0f1',       // Gris muy claro
};

// PERSONALIZACIÓN: Cambia estos colores por los que te gusten:
// Puedes usar: https://coolors.co para generar paletas
```

4. **Guardar** (Ctrl+S o Cmd+S)

### **7.4 Verificar que el Archivo se Creó Bien**

**En terminal, dentro de MiPrimeraApp:**
```bash
# Ver que el archivo existe
ls src/styles/

# Debería mostrar: colors.ts
```

---

## 🧩 **PASO 8: TU PRIMER COMPONENTE REUTILIZABLE**

### **8.1 ¿Qué es un Componente?**
- **Componente** = Pieza de UI que se puede usar múltiples veces
- **Ejemplo**: Un botón que aparece en varias pantallas
- **Ventaja**: Escribes el código una vez, lo usas cien veces

### **8.2 Crear Componente WelcomeCard**

**Crear archivo**: `src/components/WelcomeCard.tsx`

1. **Botón derecho** en `src/components/` → New File
2. **Nombrar**: `WelcomeCard.tsx` (LA EXTENSIÓN .tsx ES IMPORTANTE)
3. **Escribir este código**:

```typescript
// src/components/WelcomeCard.tsx
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Colors } from '../styles/colors';

// Definir qué información necesita el componente
interface WelcomeCardProps {
  userName: string;
  onGetStarted: () => void;
}

// El componente principal
export const WelcomeCard: React.FC<WelcomeCardProps> = ({
  userName,
  onGetStarted,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>¡Bienvenid@!</Text>
      <Text style={styles.subtitle}>Hola {userName}</Text>
      <Text style={styles.description}>
        Esta es tu primera aplicación React Native. 
        ¡Prepárate para una experiencia increíble!
      </Text>
      
      <TouchableOpacity style={styles.button} onPress={onGetStarted}>
        <Text style={styles.buttonText}>Comenzar</Text>
      </TouchableOpacity>
    </View>
  );
};

// Todos los estilos del componente
const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.surface,
    padding: 20,
    margin: 15,
    borderRadius: 12,
    // Sombra para iOS
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    // Sombra para Android
    elevation: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.primary,
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    color: Colors.text,
    textAlign: 'center',
    marginBottom: 15,
  },
  description: {
    fontSize: 16,
    color: Colors.textLight,
    textAlign: 'center',
    lineHeight: 22,
    marginBottom: 20,
  },
  button: {
    backgroundColor: Colors.primary,
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
    alignItems: 'center',
  },
  buttonText: {
    color: Colors.surface,
    fontSize: 16,
    fontWeight: '600',
  },
});
```

4. **Guardar** (Ctrl+S o Cmd+S)

### **8.3 Usar el Componente en tu App Principal**

**Modificar `App.js` COMPLETAMENTE** (reemplazar todo el contenido):

```typescript
// App.js
import React from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import { WelcomeCard } from './src/components/WelcomeCard';
import { Colors } from './src/styles/colors';

export default function App() {
  // Función que se ejecuta cuando tocas el botón
  const handleGetStarted = () => {
    Alert.alert(
      '¡Genial!',
      'Has completado tu primer componente React Native 🎉',
      [{ text: 'Continuar', style: 'default' }]
    );
  };

  return (
    <View style={styles.container}>
      <WelcomeCard 
        userName="[ESCRIBE TU NOMBRE AQUÍ]"  // ← CAMBIA ESTO POR TU NOMBRE
        onGetStarted={handleGetStarted}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    justifyContent: 'center',
  },
});
```

### **8.4 Verificación Importante**

1. **Guardar** todos los archivos (Ctrl+S)
2. **Ver tu teléfono** - debería actualizarse automáticamente
3. **¿Ves una tarjeta bonita con tu nombre?** ✅ ¡Perfecto!
4. **¿Sale error en la pantalla?** ❌ Revisar código

**❌ Si ves errores:**
- Verificar que escribiste exactamente el código
- Verificar nombres de archivo
- Verificar que guardaste todos los archivos
- En terminal: Ctrl+C, luego `npx expo start`

---

## 🧭 **PASO 9: PREPARAR NAVEGACIÓN ENTRE PANTALLAS**

### **9.1 ¿Qué es Navegación?**
- **Navegación** = Moverse entre diferentes pantallas
- **Ejemplo**: Home → Perfil → Configuración
- **Como**: Las pestañas de un navegador web, pero en móvil

### **9.2 Instalar React Navigation**

**⚠️ IMPORTANTE**: Estos comandos pueden tomar varios minutos

```bash
# STEP 1: Instalar React Navigation básico
npm install @react-navigation/native

# STEP 2: Instalar dependencias para Expo
npx expo install react-native-screens react-native-safe-area-context

# STEP 3: Instalar navegación tipo Stack  
npm install @react-navigation/stack

# ⏳ Esperar que termine todo...
# ✅ Debe decir "added X packages"
```

### **9.3 ¿Qué hacer si hay errores?**

**❌ Error: "Network timeout"**
```bash
# Intentar de nuevo
npm install @react-navigation/native --force
```

**❌ Error: "Permission denied"**
```bash
# 🪟 Windows: Abrir PowerShell como Administrador
# 🍎 macOS: Usar sudo (no recomendado)
sudo npm install @react-navigation/native
```

**❌ Error: "EACCES"**
```bash
# Cambiar permisos npm (macOS/Linux)
npm config set prefix '~/.npm-global'
echo 'export PATH=~/.npm-global/bin:$PATH' >> ~/.bashrc
source ~/.bashrc
```

### **9.4 Reiniciar Todo**

**Después de instalar, OBLIGATORIO:**
```bash
# Parar el servidor (Ctrl+C en terminal)
# Reiniciar con cache limpio:
npx expo start -c

# Esperar que cargue completamente
# Escanear QR de nuevo
```

### **9.5 Verificar Instalación**

**Crear archivo de prueba**: `src/test-navigation.js`
```javascript
// src/test-navigation.js
import { NavigationContainer } from '@react-navigation/native';

console.log('✅ Navigation importa correctamente');
```

**En App.js temporalmente, agregar en la primera línea:**
```javascript
import './src/test-navigation';
// resto de tu código
```

**¿Ves "✅ Navigation importa correctamente" en la consola?** ¡Perfecto!

**Después de verificar, BORRA esas líneas de test.**

---

## 📱 **PASO 10: CREAR TUS PRIMERAS PANTALLAS**

### **10.1 ¿Qué es una Pantalla (Screen)?**
- **Screen** = Una vista completa de tu app
- **Ejemplo**: Pantalla de inicio, pantalla de perfil
- **Cada pantalla** = Un archivo separado

### **10.2 HomeScreen - Pantalla Principal**

**Crear archivo**: `src/screens/HomeScreen.tsx`

```typescript
// src/screens/HomeScreen.tsx
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Colors } from '../styles/colors';

const HomeScreen = () => {
  // Hook para navegar entre pantallas
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pantalla Principal</Text>
      <Text style={styles.subtitle}>¡Tu primera navegación!</Text>
      
      <TouchableOpacity 
        style={styles.button}
        onPress={() => navigation.navigate('About')}
      >
        <Text style={styles.buttonText}>Ir a Acerca De</Text>
      </TouchableOpacity>
      
      <TouchableOpacity 
        style={[styles.button, styles.buttonSecondary]}
        onPress={() => navigation.navigate('Technologies')}
      >
        <Text style={[styles.buttonText, styles.buttonSecondaryText]}>
          Ver Tecnologías
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: Colors.text,
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    color: Colors.textLight,
    marginBottom: 30,
    textAlign: 'center',
  },
  button: {
    backgroundColor: Colors.primary,
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 25,
    marginBottom: 15,
    minWidth: 200,
  },
  buttonText: {
    color: Colors.surface,
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
  buttonSecondary: {
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderColor: Colors.primary,
  },
  buttonSecondaryText: {
    color: Colors.primary,
  },
});

export default HomeScreen;
```

### **10.3 AboutScreen - Pantalla Acerca De**

**Crear archivo**: `src/screens/AboutScreen.tsx`

```typescript
// src/screens/AboutScreen.tsx
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Colors } from '../styles/colors';

const AboutScreen = () => {
  const navigation = useNavigation();

  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Acerca De Mi App</Text>
        
        <View style={styles.infoCard}>
          <Text style={styles.subtitle}>📱 Mi Primera App React Native</Text>
          <Text style={styles.description}>
            Esta aplicación fue creada el 19 de febrero de 2026 
            durante la clase de Diseño Móvil en la Universidad FESC.
          </Text>
        </View>

        <View style={styles.infoCard}>
          <Text style={styles.subtitle}>🚀 Tecnologías Utilizadas</Text>
          <Text style={styles.description}>
            • React Native{'\n'}
            • Expo{'\n'}
            • React Navigation{'\n'}
            • TypeScript{'\n'}
            • StyleSheet
          </Text>
        </View>

        <View style={styles.infoCard}>
          <Text style={styles.subtitle}>👨‍💻 Desarrollado por</Text>
          <Text style={styles.description}>
            [TU NOMBRE AQUÍ]{'\n'}
            Estudiante de Ingeniería de Software{'\n'}
            Universidad FESC
          </Text>
        </View>
        
        <TouchableOpacity 
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.backButtonText}>← Volver</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  content: {
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: Colors.text,
    marginBottom: 20,
    textAlign: 'center',
  },
  infoCard: {
    backgroundColor: Colors.surface,
    padding: 20,
    marginBottom: 15,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: '600',
    color: Colors.primary,
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: Colors.text,
    lineHeight: 24,
  },
  backButton: {
    backgroundColor: Colors.secondary,
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 25,
    alignItems: 'center',
    marginTop: 20,
  },
  backButtonText: {
    color: Colors.surface,
    fontSize: 16,
    fontWeight: '600',
  },
});

export default AboutScreen;
```

### **10.4 Verificar que las Pantallas se Crearon**

**En terminal:**
```bash
# Verificar archivos
ls src/screens/

# Deberías ver:
# AboutScreen.tsx  HomeScreen.tsx
```

---

## 🧩 **PASO 3: PRIMER COMPONENTE REUTILIZABLE**

### **3.1 Componente WelcomeCard**
**Archivo**: `src/components/WelcomeCard.tsx`
```typescript
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Colors } from '../styles/colors';

interface WelcomeCardProps {
  userName: string;
  onGetStarted: () => void;
}

export const WelcomeCard: React.FC<WelcomeCardProps> = ({
  userName,
  onGetStarted,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>¡Bienvenid@!</Text>
      <Text style={styles.subtitle}>Hola {userName}</Text>
      <Text style={styles.description}>
        Esta es tu primera aplicación React Native. 
        ¡Prepárate para una experiencia increíble!
      </Text>
      
      <TouchableOpacity style={styles.button} onPress={onGetStarted}>
        <Text style={styles.buttonText}>Comenzar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.surface,
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
    color: Colors.primary,
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    color: Colors.text,
    textAlign: 'center',
    marginBottom: 15,
  },
  description: {
    fontSize: 16,
    color: Colors.textLight,
    textAlign: 'center',
    lineHeight: 22,
    marginBottom: 20,
  },
  button: {
    backgroundColor: Colors.primary,
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
    alignItems: 'center',
  },
  buttonText: {
    color: Colors.surface,
    fontSize: 16,
    fontWeight: '600',
  },
});
```

### **3.2 Probar el Componente**
**Modificar**: `App.tsx`
```typescript
import React from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import { WelcomeCard } from './src/components/WelcomeCard';
import { Colors } from './src/styles/colors';

export default function App() {
  const handleGetStarted = () => {
    Alert.alert(
      '¡Genial!',
      'Has completado tu primer componente React Native 🎉',
      [{ text: 'Continuar', style: 'default' }]
    );
  };

  return (
    <View style={styles.container}>
      <WelcomeCard 
        userName="[TU NOMBRE]"
        onGetStarted={handleGetStarted}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    justifyContent: 'center',
  },
});
```

**✅ Checkpoint**: Recargar app y verificar que el componente se muestre correctamente.

---

## 🧭 **PASO 4: INSTALAR NAVEGACIÓN**

### **4.1 Instalar Dependencies**
```bash
# React Navigation y dependencias
npm install @react-navigation/native
npx expo install react-native-screens react-native-safe-area-context
npm install @react-navigation/stack
```

### **4.2 Reiniciar Servidor**
```bash
# Detener servidor (Ctrl+C)
# Reiniciar con cache limpio
npx expo start -c
```

---

## 📱 **PASO 5: CREAR PANTALLAS**

### **5.1 HomeScreen**
**Archivo**: `src/screens/HomeScreen.tsx`
```typescript
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Colors } from '../styles/colors';

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pantalla Principal</Text>
      <Text style={styles.subtitle}>¡Tu primera navegación!</Text>
      
      <TouchableOpacity 
        style={styles.button}
        onPress={() => navigation.navigate('About')}
      >
        <Text style={styles.buttonText}>Ir a Acerca De</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: Colors.text,
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    color: Colors.textLight,
    marginBottom: 30,
    textAlign: 'center',
  },
  button: {
    backgroundColor: Colors.primary,
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 25,
  },
  buttonText: {
    color: Colors.surface,
    fontSize: 16,
    fontWeight: '600',
  },
});

export default HomeScreen;
```

### **5.2 AboutScreen**
**Archivo**: `src/screens/AboutScreen.tsx`
```typescript
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Colors } from '../styles/colors';

const AboutScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Acerca De</Text>
      <Text style={styles.content}>
        Esta es mi primera aplicación React Native.{'\n\n'}
        Creada el 19 de febrero de 2026 en la Universidad FESC.{'\n\n'}
        ¡React Native es increíble! 🚀
      </Text>
      
      <TouchableOpacity 
        style={styles.button}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.buttonText}>Volver</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: Colors.text,
    marginBottom: 20,
  },
  content: {
    fontSize: 16,
    color: Colors.textLight,
    textAlign: 'center',
    lineHeight: 24,
    marginBottom: 40,
  },
  button: {
    backgroundColor: Colors.secondary,
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 25,
  },
  buttonText: {
    color: Colors.surface,
    fontSize: 16,
    fontWeight: '600',
  },
});

export default AboutScreen;
```

---

## 🗂️ **PASO 6: CONFIGURAR NAVEGACIÓN**

### **6.1 AppNavigator**
**Archivo**: `src/navigation/AppNavigator.tsx`
```typescript
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import AboutScreen from '../screens/AboutScreen';
import { Colors } from '../styles/colors';

export type RootStackParamList = {
  Home: undefined;
  About: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: Colors.primary,
          },
          headerTintColor: Colors.surface,
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
        <Stack.Screen 
          name="Home" 
          component={HomeScreen}
          options={{ title: 'Mi App' }}
        />
        <Stack.Screen 
          name="About" 
          component={AboutScreen}
          options={{ title: 'Acerca De' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
```

### **6.2 Integrar Navigator**
**Modificar**: `App.tsx`
```typescript
import React from 'react';
import AppNavigator from './src/navigation/AppNavigator';

export default function App() {
  return <AppNavigator />;
}
```

**✅ Checkpoint**: Probar navegación entre pantallas en tu teléfono.

---

## 📋 **PASO 7: LISTA INTERACTIVA**

### **7.1 Crear Datos Mock**
**Archivo**: `src/data/mockData.ts`
```typescript
export interface Technology {
  id: string;
  name: string;
  description: string;
  difficulty: 'Fácil' | 'Medio' | 'Difícil';
  icon: string;
}

export const technologies: Technology[] = [
  {
    id: '1',
    name: 'React Native',
    description: 'Framework para desarrollo móvil multiplataforma',
    difficulty: 'Medio',
    icon: '⚛️',
  },
  {
    id: '2',
    name: 'TypeScript',
    description: 'JavaScript con tipos estáticos',
    difficulty: 'Medio',
    icon: '🔷',
  },
  {
    id: '3',
    name: 'Expo',
    description: 'Plataforma para desarrollo con React Native',
    difficulty: 'Fácil',
    icon: '📱',
  },
  {
    id: '4',
    name: 'React Navigation',
    description: 'Navegación para aplicaciones React Native',
    difficulty: 'Fácil',
    icon: '🧭',
  },
];
```

### **7.2 Componente TechnologyItem**
**Archivo**: `src/components/TechnologyItem.tsx`
```typescript
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Technology } from '../data/mockData';
import { Colors } from '../styles/colors';

interface TechnologyItemProps {
  technology: Technology;
  onPress: (technology: Technology) => void;
}

export const TechnologyItem: React.FC<TechnologyItemProps> = ({
  technology,
  onPress,
}) => {
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Fácil': return Colors.success;
      case 'Medio': return Colors.warning;
      case 'Difícil': return Colors.error;
      default: return Colors.textLight;
    }
  };

  return (
    <TouchableOpacity 
      style={styles.container}
      onPress={() => onPress(technology)}
      activeOpacity={0.7}
    >
      <View style={styles.iconContainer}>
        <Text style={styles.icon}>{technology.icon}</Text>
      </View>
      
      <View style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.name}>{technology.name}</Text>
          <View style={[
            styles.difficultyBadge, 
            { backgroundColor: getDifficultyColor(technology.difficulty) }
          ]}>
            <Text style={styles.difficultyText}>{technology.difficulty}</Text>
          </View>
        </View>
        
        <Text style={styles.description} numberOfLines={2}>
          {technology.description}
        </Text>
      </View>
      
      <Text style={styles.arrow}>→</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.surface,
    padding: 15,
    marginHorizontal: 15,
    marginVertical: 5,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  iconContainer: {
    width: 50,
    height: 50,
    backgroundColor: Colors.background,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  icon: {
    fontSize: 24,
  },
  content: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 5,
  },
  name: {
    fontSize: 16,
    fontWeight: '600',
    color: Colors.text,
    flex: 1,
  },
  difficultyBadge: {
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 10,
  },
  difficultyText: {
    fontSize: 12,
    color: Colors.surface,
    fontWeight: '500',
  },
  description: {
    fontSize: 14,
    color: Colors.textLight,
    lineHeight: 18,
  },
  arrow: {
    fontSize: 16,
    color: Colors.textLight,
    marginLeft: 10,
  },
});
```

### **7.3 TechnologiesScreen**
**Archivo**: `src/screens/TechnologiesScreen.tsx`
```typescript
import React from 'react';
import { View, Text, FlatList, StyleSheet, Alert } from 'react-native';
import { TechnologyItem } from '../components/TechnologyItem';
import { technologies, Technology } from '../data/mockData';
import { Colors } from '../styles/colors';

const TechnologiesScreen = () => {
  const handleTechPress = (tech: Technology) => {
    Alert.alert(
      tech.name,
      `${tech.description}\n\nDificultad: ${tech.difficulty}`,
      [
        { text: 'Cerrar', style: 'cancel' },
        { text: 'Me gusta!', style: 'default' },
      ]
    );
  };

  const renderItem = ({ item }: { item: Technology }) => (
    <TechnologyItem
      technology={item}
      onPress={handleTechPress}
    />
  );

  const renderHeader = () => (
    <View style={styles.header}>
      <Text style={styles.title}>Tecnologías</Text>
      <Text style={styles.subtitle}>
        Explora las tecnologías que estás aprendiendo
      </Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={technologies}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={renderHeader}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
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
    color: Colors.text,
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 16,
    color: Colors.textLight,
  },
});

export default TechnologiesScreen;
```

### **7.4 Agregar a NavigatorTechnologiesScreen**
**Modificar**: `src/navigation/AppNavigator.tsx`
```typescript
// Importar nueva pantalla
import TechnologiesScreen from '../screens/TechnologiesScreen';

// Agregar al tipo
export type RootStackParamList = {
  Home: undefined;
  About: undefined;
  Technologies: undefined; // <- Nueva pantalla
};

// Agregar screen al Stack.Navigator
<Stack.Screen 
  name="Technologies" 
  component={TechnologiesScreen}
  options={{ title: 'Tecnologías' }}
/>
```

### **7.5 Agregar Botón en HomeScreen**
**Modificar**: `src/screens/HomeScreen.tsx`
```typescript
// Agregar después del botón existente
<TouchableOpacity 
  style={[styles.button, { marginTop: 15 }]}
  onPress={() => navigation.navigate('Technologies')}
>
  <Text style={styles.buttonText}>Ver Tecnologías</Text>
</TouchableOpacity>
```

**✅ Checkpoint**: Probar navegación a la lista y interacción con elementos.

---

## 🎨 **PASO 8: PERSONALIZACIÓN FINAL**

### **8.1 Agregar Estilos Globales**
**Archivo**: `src/styles/globalStyles.ts`
```typescript
import { StyleSheet } from 'react-native';
import { Colors } from './colors';

export const GlobalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  centered: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.text,
  },
  button: {
    backgroundColor: Colors.primary,
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: Colors.surface,
    fontSize: 16,
    fontWeight: '600',
  },
});
```

### **8.2 Personalizar con tu Información**
1. **Cambiar colores** en `src/styles/colors.ts`
2. **Agregar tu nombre** en pantallas
3. **Modificar textos** descriptivos
4. **Cambiar iconos** de tecnologías

---

## ✅ **PASO 9: PRUEBA FINAL**

### **9.1 Lista de Verificación**
- [ ] App se ejecuta sin errores
- [ ] Navegación funciona entre todas las pantallas
- [ ] Lista de tecnologías es interactiva
- [ ] Botón "Volver" funciona
- [ ] Alerts se muestran al tocar items
- [ ] Hot Reload funciona para cambios

### **9.2 Testing**
1. **Navegación**: Probar cada botón y transición
2. **Interactividad**: Tocar elementos de la lista
3. **Hot Reload**: Cambiar texto y ver actualización inmediata
4. **Performance**: Scroll de lista fluido

---

## 🚀 **PASO 10: EXTENSIONES OPCIONALES**

Si terminas antes, puedes agregar:

### **Pantalla de Configuración**
```typescript
// src/screens/SettingsScreen.tsx
const SettingsScreen = () => {
  const [darkMode, setDarkMode] = useState(false);
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Configuración</Text>
      
      <View style={styles.setting}>
        <Text>Modo Oscuro</Text>
        <Switch value={darkMode} onValueChange={setDarkMode} />
      </View>
    </View>
  );
};
```

### **Búsqueda en Lista**
```typescript
const [searchText, setSearchText] = useState('');
const filteredTechnologies = technologies.filter(tech =>
  tech.name.toLowerCase().includes(searchText.toLowerCase())
);
```

### **Contador de Interacciones**
```typescript
const [clickCount, setClickCount] = useState(0);

const handleTechPress = (tech: Technology) => {
  setClickCount(count => count + 1);
  // ... resto del código
};
```

---

## 📚 **RECURSOS PARA CONTINUAR**

### **Documentación Oficial**
- https://reactnative.dev/docs/getting-started
- https://reactnavigation.org/docs/getting-started
- https://docs.expo.dev/

### **Próximos Temas a Explorar**
1. **APIs y HTTP requests**
2. **Formularios y validación**
3. **AsyncStorage (persistencia)**
4. **Notificaciones Push**
5. **Testing**
6. **Performance optimization**

### **Extensiones VS Code Recomendadas**
- React Native Tools
- ES7+ React/Redux/React-Native snippets
- Prettier - Code formatter
- Auto Rename Tag

---

## 🎯 **ENTREGABLES**

Al completar esta guía deberás tener:

✅ **App funcionando** en tu dispositivo móvil  
✅ **3 pantallas** con navegación fluida  
✅ **Lista interactiva** con elementos touchables  
✅ **Componentes reutilizables** bien organizados  
✅ **Sistema de colores** consistente  
✅ **Código limpio** y bien estructurado  

**¡Felicitaciones! 🎉 Has creado tu primera aplicación React Native completa.**

---

## 📋 **PROYECTO FINAL: CHECKLIST DE ENTREGA**

### **Antes de Entregar, Verifica:**

**✅ Funcionalidad:**
- [ ] App se abre sin errores
- [ ] HomeScreen se ve correctamente
- [ ] Navegación a AboutScreen funciona
- [ ] Navegación a TechnologiesScreen funciona  
- [ ] Lista de tecnologías aparece
- [ ] Búsqueda filtra resultados
- [ ] Alerts aparecen al tocar tecnologías
- [ ] Botones "Volver" funcionan
- [ ] Hot reload actualiza cambios

**✅ Archivos Creados:**
- [ ] `src/styles/colors.ts`
- [ ] `src/styles/globalStyles.ts` 
- [ ] `src/components/WelcomeCard.tsx`
- [ ] `src/components/TechnologyItem.tsx`
- [ ] `src/screens/HomeScreen.tsx`
- [ ] `src/screens/AboutScreen.tsx`
- [ ] `src/screens/TechnologiesScreen.tsx`
- [ ] `src/navigation/AppNavigator.tsx`
- [ ] `src/data/mockData.ts`

**✅ Personalización:**
- [ ] Tu nombre aparece en la app
- [ ] Información personal en AboutScreen
- [ ] Al menos 1 color personalizado
- [ ] Tecnologías que te interesan en la lista

---

## 🎯 **EVALUACIÓN Y PORTAFOLIO**

### **Para tu Portafolio:**

**1. Screenshots Requeridos:**
- Pantalla Home con tu nombre
- Pantalla About con tu información
- Lista de tecnologías
- Buscador filtrando resultados
- Alert mostrando detalles

**2. Video Demo (30 segundos max):**
- Mostrar navegación entre pantallas
- Demostrar buscador funcional
- Mostrar interacción con lista

**3. Descripción del Proyecto:**
```
Mi Primera App React Native

Una aplicación móvil desarrollada con React Native que incluye:
- Navegación entre múltiples pantallas
- Lista interactiva con búsqueda
- Componentes reutilizables
- Sistema de estilos consistente

Tecnologías: React Native, Expo, TypeScript, React Navigation

Desarrollado en: Universidad FESC - Febrero 2026
```

---

## 🚀 **PRÓXIMOS PASOS EN TU APRENDIZAJE**

### **Clase 3 (26 Febrero - Próxima Semana):**
1. **APIs y HTTP** - Conectar con servicios externos
2. **Formularios Avanzados** - Inputs, validación, envío
3. **AsyncStorage** - Guardar datos localmente
4. **Context API** - Estado global de la app
5. **Notificaciones Push** - Alertas desde el servidor

### **Para Practicar Esta Semana:**
- [ ] Agregar más tecnologías a tu lista
- [ ] Crear una pantalla de "Contacto" adicional
- [ ] Experimentar con diferentes colores
- [ ] Intentar agregar iconos reales
- [ ] Explorar React Native Elements (librería de componentes)

### **Recursos para Estudio:**
- **React Native Docs**: https://reactnative.dev/docs/getting-started
- **Expo Docs**: https://docs.expo.dev/
- **YouTube**: "React Native Tutorial 2026"
- **Práctica Online**: https://snack.expo.dev

---

## 🎉 **¡FELICITACIONES!**

### **Has completado exitosamente:**

🎯 **Configuración completa** de entorno de desarrollo  
🎯 **Primera aplicación React Native** funcional  
🎯 **Navegación profesional** entre pantallas  
🎯 **Componentes reutilizables** bien estructurados  
🎯 **Lista interactiva** con búsqueda  
🎯 **Sistema de estilos** escalable  
🎯 **Debugging básico** y troubleshooting  

### **Tu Nueva Skill Set:**
- ✅ React Native Development
- ✅ Mobile UI/UX Implementation
- ✅ Component Architecture  
- ✅ Navigation Implementation
- ✅ State Management Basics
- ✅ Mobile Debugging
- ✅ Git & Version Control Basics

### **¡Eres oficialmente un React Native Developer!** 👨‍💻👩‍💻

---

## 💬 **FEEDBACK Y MEJORAS**

### **Comparte tu Experiencia:**

**¿Qué fue lo más difícil?**
_______________________________

**¿Qué te gustó más?**
_______________________________

**¿Qué te gustaría aprender después?**
_______________________________

**Califica tu experiencia (1-10):**
_______________________________

**Tu app final se ve:**
- [ ] ¡Increíble! 🤩
- [ ] Muy bien 😊  
- [ ] Bien ☺️
- [ ] Necesita mejoras 🤔

---

## 🔗 **COMUNIDAD Y APOYO**

### **Únete a la Comunidad:**
- **Discord**: [Enlace al servidor de la clase]
- **WhatsApp**: [Grupo de estudios]
- **GitHub**: [Repositorio de código compartido]

### **Ayuda Adicional:**
- **Horario de consultas**: Miércoles 2-4 PM
- **Email profesor**: [profesor@fesc.edu.co]
- **Telegram**: [@ReactNativeFESC]

### **Comparte tu Éxito:**
- LinkedIn: "Acabo de desarrollar mi primera app con React Native"
- Instagram: Screenshot + #ReactNative #FESC #MobileApp
- Twitter: "De cero a desarrollador móvil en una clase 🚀"

---

*¡Gracias por una clase increíble!* 🌟  
*Nos vemos la próxima semana para llevar tu app al siguiente nivel* 📱✨

---

*Guía completa preparada para Diseño Móvil*  
*Universidad FESC - 19 de febrero 2026*  
*"De principiante a desarrollador móvil profesional"* ⭐

**🎯 Total de conceptos aprendidos: 15+**  
**🕐 Tiempo invertido: 90 minutos**  
**🏆 Resultado: App móvil completa y funcional**