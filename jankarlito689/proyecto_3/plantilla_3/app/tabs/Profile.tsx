import { Text, View } from '@/components/Themed';
import { useRouter } from 'expo-router';
import { Image, StyleSheet, TouchableOpacity } from 'react-native';

export default function ProfileScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Image
          source={{
            uri: 'https://i.pravatar.cc/300',
          }}
          style={styles.avatar}
        />

        <Text style={styles.name}>
          Jankarlo Dev
        </Text>

        <Text style={styles.email}>
          jankarlo@email.com
        </Text>

        <TouchableOpacity style={styles.button} onPress={() => router.push('/')}>
          <Text style={styles.buttonText}>
            Cerrar sesión
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0F172A',
    justifyContent: 'center',
    padding: 24,
  },
  card: {
    backgroundColor: '#1E293B',
    borderRadius: 24,
    padding: 30,
    alignItems: 'center',
  },
  avatar: {
    width: 110,
    height: 110,
    borderRadius: 100,
    marginBottom: 20,
  },
  name: {
    color: '#fff',
    fontSize: 28,
    fontWeight: '700',
  },
  email: {
    color: '#94A3B8',
    marginTop: 8,
    marginBottom: 30,
  },
  button: {
    backgroundColor: '#EF4444',
    paddingVertical: 14,
    paddingHorizontal: 40,
    borderRadius: 14,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '700',
  },
});