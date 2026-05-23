import { Text, View } from '@/components/Themed';
import { ScrollView, StyleSheet } from 'react-native';

export default function DashboardScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Dashboard</Text>

      <View style={styles.statsContainer}>
        <View style={styles.card}>
          <Text style={styles.number}>1,245</Text>
          <Text style={styles.label}>Usuarios</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.number}>$12K</Text>
          <Text style={styles.label}>Ingresos</Text>
        </View>
      </View>

      <View style={styles.largeCard}>
        <Text style={styles.sectionTitle}>Actividad reciente</Text>

        <View style={styles.activity}>
          <Text style={styles.activityText}>
            Nuevo usuario registrado
          </Text>
        </View>

        <View style={styles.activity}>
          <Text style={styles.activityText}>
            Pago realizado correctamente
          </Text>
        </View>

        <View style={styles.activity}>
          <Text style={styles.activityText}>
            Nueva suscripción activa
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0F172A',
    padding: 20,
  },
  title: {
    fontSize: 34,
    fontWeight: '700',
    color: '#fff',
    marginTop: 50,
    marginBottom: 24,
  },
  statsContainer: {
    flexDirection: 'row',
    gap: 16,
  },
  card: {
    flex: 1,
    backgroundColor: '#1E293B',
    padding: 20,
    borderRadius: 20,
  },
  number: {
    color: '#fff',
    fontSize: 28,
    fontWeight: '700',
  },
  label: {
    color: '#94A3B8',
    marginTop: 8,
  },
  largeCard: {
    backgroundColor: '#1E293B',
    marginTop: 24,
    borderRadius: 20,
    padding: 20,
  },
  sectionTitle: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 20,
  },
  activity: {
    backgroundColor: '#334155',
    padding: 16,
    borderRadius: 14,
    marginBottom: 12,
  },
  activityText: {
    color: '#fff',
  },
});