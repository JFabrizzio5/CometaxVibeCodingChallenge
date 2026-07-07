import { Text, View } from '@/components/Themed';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import {
  Alert,
  StyleSheet,
  TextInput,
  TouchableOpacity
} from 'react-native';

export default function LoginScreen() {

  const router = useRouter();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {

    // Validación simple
    if (!email || !password) {
      Alert.alert(
        'Campos requeridos',
        'Debes completar todos los campos'
      );
      return;
    }

    // Navegar a tabs
    router.replace('/tabs/Dashboard');
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>

        <Text style={styles.title}>
          Bienvenido
        </Text>

        <Text style={styles.subtitle}>
          Inicia sesión para continuar
        </Text>

        <TextInput
          placeholder="Correo electrónico"
          placeholderTextColor="#999"
          style={styles.input}
          value={email}
          onChangeText={setEmail}
        />

        <TextInput
          placeholder="Contraseña"
          placeholderTextColor="#999"
          secureTextEntry
          style={styles.input}
          value={password}
          onChangeText={setPassword}
        />

        <TouchableOpacity
          style={styles.button}
          onPress={handleLogin}
        >
          <Text style={styles.buttonText}>
            Iniciar sesión
          </Text>
        </TouchableOpacity>

        <Text style={styles.link}>
          ¿Olvidaste tu contraseña?
        </Text>

        <TouchableOpacity
          onPress={() => router.push('/register')}
        >
          <Text style={styles.registerLink}>
            ¿No tienes cuenta? Regístrate
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 24,
    backgroundColor: '#0F172A',
  },
  card: {
    backgroundColor: '#1E293B',
    borderRadius: 24,
    padding: 24,
  },
  title: {
    fontSize: 32,
    fontWeight: '700',
    marginBottom: 8,
    color: '#fff',
  },
  subtitle: {
    color: '#94A3B8',
    marginBottom: 32,
  },
  input: {
    backgroundColor: '#334155',
    borderRadius: 14,
    padding: 16,
    color: '#fff',
    marginBottom: 16,
  },
  button: {
    backgroundColor: '#3B82F6',
    padding: 16,
    borderRadius: 14,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '700',
  },
  link: {
    textAlign: 'center',
    marginTop: 18,
    color: '#60A5FA',
  },
  registerLink: {
    textAlign: 'center',
    marginTop: 12,
    color: '#3B82F6',
    fontWeight: '600',
  },
});