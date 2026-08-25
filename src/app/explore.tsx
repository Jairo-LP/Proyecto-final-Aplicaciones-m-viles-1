import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const tips = [
  {
    icon: '👆',
    title: 'Toca para hablar',
    description: 'Selecciona una categoría y toca un pictograma para construir tu frase.',
  },
  {
    icon: '🔊',
    title: 'Presiona Hablar',
    description: 'Cuando tengas tu frase lista, presiona el botón verde "Hablar" para que el teléfono la diga en voz alta.',
  },
  {
    icon: '⌫',
    title: 'Borrar palabra',
    description: 'Si te equivocas, usa el botón ⌫ para borrar la última palabra.',
  },
  {
    icon: '✕',
    title: 'Borrar todo',
    description: 'Presiona ✕ para empezar una frase nueva desde cero.',
  },
  {
    icon: '📂',
    title: 'Categorías',
    description: 'Hay 5 categorías: Necesidades, Emociones, Saludos, Acciones y Preguntas.',
  },
  {
    icon: '🌐',
    title: 'Idioma',
    description: 'La aplicación habla en español. El dispositivo debe tener el idioma español configurado.',
  },
];

export default function InfoScreen() {
  return (
    <SafeAreaView style={styles.safeArea} edges={['top']}>
      <ScrollView style={styles.container} contentContainerStyle={styles.content}>
        <View style={styles.header}>
          <Text style={styles.headerIcon}>💬</Text>
          <Text style={styles.title}>Tablero AAC</Text>
          <Text style={styles.subtitle}>
            Comunicación Aumentativa y Alternativa
          </Text>
          <Text style={styles.description}>
            Esta aplicación está diseñada para ayudar a personas con autismo no verbal, afasia u otras condiciones a comunicarse usando pictogramas y frases habladas.
          </Text>
        </View>

        <View style={styles.tipsContainer}>
          <Text style={styles.sectionTitle}>Cómo usar</Text>
          {tips.map((tip, index) => (
            <View key={index} style={styles.tipCard}>
              <Text style={styles.tipIcon}>{tip.icon}</Text>
              <View style={styles.tipContent}>
                <Text style={styles.tipTitle}>{tip.title}</Text>
                <Text style={styles.tipDescription}>{tip.description}</Text>
              </View>
            </View>
          ))}
        </View>

        <View style={styles.footer}>
          <Text style={styles.footerText}>SAAC - Sistema Aumentativo Alternativo de Comunicación</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  container: {
    flex: 1,
  },
  content: {
    paddingBottom: 40,
  },
  header: {
    backgroundColor: '#208AEF',
    paddingHorizontal: 24,
    paddingVertical: 32,
    alignItems: 'center',
  },
  headerIcon: {
    fontSize: 48,
    marginBottom: 8,
  },
  title: {
    fontSize: 28,
    fontWeight: '800',
    color: '#fff',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 15,
    fontWeight: '500',
    color: 'rgba(255,255,255,0.85)',
    textAlign: 'center',
    marginTop: 4,
  },
  description: {
    fontSize: 14,
    color: 'rgba(255,255,255,0.75)',
    textAlign: 'center',
    marginTop: 12,
    lineHeight: 20,
  },
  tipsContainer: {
    paddingHorizontal: 16,
    paddingTop: 24,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#333',
    marginBottom: 16,
  },
  tipCard: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 14,
    padding: 16,
    marginBottom: 10,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    gap: 14,
  },
  tipIcon: {
    fontSize: 28,
  },
  tipContent: {
    flex: 1,
  },
  tipTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#222',
    marginBottom: 2,
  },
  tipDescription: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
  },
  footer: {
    paddingHorizontal: 16,
    paddingTop: 24,
    alignItems: 'center',
  },
  footerText: {
    fontSize: 12,
    color: '#999',
    textAlign: 'center',
  },
});
