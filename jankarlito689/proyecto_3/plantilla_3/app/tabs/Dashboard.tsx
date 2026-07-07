import { Text, View } from '@/components/Themed';
import {
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

export default function DashboardScreen() {
  return (
    <ScrollView
      style={styles.container}
      showsVerticalScrollIndicator={false}
    >
      {/* HEADER */}
      <View style={styles.header}>
        <View style={{ backgroundColor: 'transparent' }}>
          <Text style={styles.greeting}>
            Bienvenido de nuevo 👋
          </Text>

          <Text style={styles.title}>
            Dashboard SaaS
          </Text>
        </View>

        <TouchableOpacity style={styles.profileButton}>
          <Text style={styles.profileText}>JL</Text>
        </TouchableOpacity>
      </View>

      {/* BANNER */}
      <View style={styles.banner}>
        <View style={{ backgroundColor: 'transparent', flex: 1 }}>
          <Text style={styles.bannerTitle}>
            Incrementa tus ventas 🚀
          </Text>

          <Text style={styles.bannerDescription}>
            Tu plataforma creció un 24% este mes.
          </Text>

          <TouchableOpacity style={styles.bannerButton}>
            <Text style={styles.bannerButtonText}>
              Ver reporte
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* STATS */}
      <View style={styles.statsContainer}>
        <View style={styles.card}>
          <Text style={styles.cardIcon}>👥</Text>

          <Text style={styles.number}>
            1,245
          </Text>

          <Text style={styles.label}>
            Usuarios activos
          </Text>

          <Text style={styles.growthPositive}>
            +12.5%
          </Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardIcon}>💰</Text>

          <Text style={styles.number}>
            $12K
          </Text>

          <Text style={styles.label}>
            Ingresos
          </Text>

          <Text style={styles.growthPositive}>
            +8.1%
          </Text>
        </View>
      </View>

      {/* ANALYTICS CARD */}
      <View style={styles.analyticsCard}>
        <View style={styles.analyticsHeader}>
          <Text style={styles.sectionTitle}>
            Analytics
          </Text>

          <TouchableOpacity>
            <Text style={styles.analyticsLink}>
              Ver más
            </Text>
          </TouchableOpacity>
        </View>

        {/* fake chart */}
        <View style={styles.chartContainer}>
          <View style={[styles.bar, { height: 60 }]} />
          <View style={[styles.bar, { height: 120 }]} />
          <View style={[styles.bar, { height: 90 }]} />
          <View style={[styles.bar, { height: 160 }]} />
          <View style={[styles.bar, { height: 110 }]} />
          <View style={[styles.bar, { height: 190 }]} />
        </View>
      </View>

      {/* ACTIVITY */}
      <View style={styles.largeCard}>
        <View style={styles.analyticsHeader}>
          <Text style={styles.sectionTitle}>
            Actividad reciente
          </Text>

          <TouchableOpacity>
            <Text style={styles.analyticsLink}>
              Todo
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.activity}>
          <View style={styles.activityDotGreen} />

          <View style={{ backgroundColor: 'transparent' }}>
            <Text style={styles.activityTitle}>
              Nuevo usuario registrado
            </Text>

            <Text style={styles.activitySubtitle}>
              Hace 2 minutos
            </Text>
          </View>
        </View>

        <View style={styles.activity}>
          <View style={styles.activityDotBlue} />

          <View style={{ backgroundColor: 'transparent' }}>
            <Text style={styles.activityTitle}>
              Pago realizado correctamente
            </Text>

            <Text style={styles.activitySubtitle}>
              Hace 12 minutos
            </Text>
          </View>
        </View>

        <View style={styles.activity}>
          <View style={styles.activityDotPurple} />

          <View style={{ backgroundColor: 'transparent' }}>
            <Text style={styles.activityTitle}>
              Nueva suscripción activa
            </Text>

            <Text style={styles.activitySubtitle}>
              Hace 1 hora
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#020617',
    paddingHorizontal: 20,
  },

  header: {
    marginTop: 60,
    marginBottom: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },

  greeting: {
    color: '#94A3B8',
    fontSize: 15,
  },

  title: {
    fontSize: 34,
    fontWeight: '800',
    color: '#fff',
    marginTop: 4,
  },

  profileButton: {
    width: 52,
    height: 52,
    borderRadius: 18,
    backgroundColor: '#2563EB',
    justifyContent: 'center',
    alignItems: 'center',
  },

  profileText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 18,
  },

  banner: {
    backgroundColor: '#2563EB',
    borderRadius: 28,
    padding: 24,
    marginBottom: 24,
  },

  bannerTitle: {
    color: '#fff',
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 10,
  },

  bannerDescription: {
    color: '#DBEAFE',
    fontSize: 15,
    marginBottom: 20,
  },

  bannerButton: {
    backgroundColor: '#fff',
    alignSelf: 'flex-start',
    paddingHorizontal: 18,
    paddingVertical: 12,
    borderRadius: 14,
  },

  bannerButtonText: {
    color: '#2563EB',
    fontWeight: '700',
  },

  statsContainer: {
    flexDirection: 'row',
    gap: 16,
    marginBottom: 24,
    backgroundColor: 'transparent',
  },

  card: {
    flex: 1,
    backgroundColor: '#0F172A',
    borderRadius: 24,
    padding: 20,
    borderWidth: 1,
    borderColor: '#1E293B',
  },

  cardIcon: {
    fontSize: 24,
    marginBottom: 20,
  },

  number: {
    color: '#fff',
    fontSize: 30,
    fontWeight: '800',
  },

  label: {
    color: '#94A3B8',
    marginTop: 8,
    fontSize: 14,
  },

  growthPositive: {
    color: '#22C55E',
    marginTop: 16,
    fontWeight: '700',
  },

  analyticsCard: {
    backgroundColor: '#0F172A',
    borderRadius: 28,
    padding: 22,
    marginBottom: 24,
    borderWidth: 1,
    borderColor: '#1E293B',
  },

  analyticsHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    backgroundColor: 'transparent',
  },

  sectionTitle: {
    color: '#fff',
    fontSize: 22,
    fontWeight: '700',
  },

  analyticsLink: {
    color: '#3B82F6',
    fontWeight: '600',
  },

  chartContainer: {
    height: 220,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    backgroundColor: 'transparent',
  },

  bar: {
    width: 32,
    backgroundColor: '#3B82F6',
    borderRadius: 12,
  },

  largeCard: {
    backgroundColor: '#0F172A',
    borderRadius: 28,
    padding: 22,
    marginBottom: 40,
    borderWidth: 1,
    borderColor: '#1E293B',
  },

  activity: {
    backgroundColor: '#111827',
    padding: 18,
    borderRadius: 18,
    marginBottom: 14,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14,
  },

  activityTitle: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 15,
  },

  activitySubtitle: {
    color: '#64748B',
    marginTop: 6,
    fontSize: 13,
  },

  activityDotGreen: {
    width: 14,
    height: 14,
    borderRadius: 10,
    backgroundColor: '#22C55E',
  },

  activityDotBlue: {
    width: 14,
    height: 14,
    borderRadius: 10,
    backgroundColor: '#3B82F6',
  },

  activityDotPurple: {
    width: 14,
    height: 14,
    borderRadius: 10,
    backgroundColor: '#A855F7',
  },
});