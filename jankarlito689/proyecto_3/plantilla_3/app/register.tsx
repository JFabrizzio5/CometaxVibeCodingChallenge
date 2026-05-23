import { Text, View } from '@/components/Themed';
import { useRouter } from 'expo-router';
import { ScrollView, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

export default function RegisterScreen() {
    const router = useRouter();

    return (
        <ScrollView style={styles.container}>
            <View style={styles.card}>
                <Text style={styles.title}>Crear cuenta</Text>

                <TextInput
                placeholder="Nombre completo"
                placeholderTextColor="#999"
                style={styles.input}
                />

                <TextInput
                placeholder="Correo"
                placeholderTextColor="#999"
                style={styles.input}
                />

                <TextInput
                placeholder="Teléfono"
                placeholderTextColor="#999"
                style={styles.input}
                />

                <TextInput
                placeholder="Contraseña"
                placeholderTextColor="#999"
                secureTextEntry
                style={styles.input}
                />

                <TouchableOpacity style={styles.button} onPress={() => router.push('/tabs/Dashboard')}>
                    <Text style={styles.buttonText}>Registrarme</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => router.back()}>
                    <Text style={styles.loginLink}>
                        ¿Ya tienes cuenta? Inicia sesión
                    </Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0F172A',
        padding: 24,
    },
    card: {
        marginTop: 80,
        backgroundColor: '#1E293B',
        borderRadius: 24,
        padding: 24,
    },
    title: {
        fontSize: 30,
        fontWeight: '700',
        color: '#fff',
        marginBottom: 28,
    },
    input: {
        backgroundColor: '#334155',
        borderRadius: 14,
        padding: 16,
        color: '#fff',
        marginBottom: 16,
    },
    button: {
        backgroundColor: '#2563EB',
        padding: 16,
        borderRadius: 14,
        alignItems: 'center',
        marginTop: 10,
    },
    buttonText: {
        color: '#fff',
        fontWeight: '700',
    },
    loginLink: {
        textAlign: 'center',
        marginTop: 16,
        color: '#60A5FA',
        fontWeight: '600',
    },
});