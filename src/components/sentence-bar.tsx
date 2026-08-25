import * as Speech from 'expo-speech';
import { useState } from 'react';
import {
  Animated,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

type Props = {
  sentence: string;
  onClear: () => void;
  onBackspace: () => void;
};

export function SentenceBar({ sentence, onClear, onBackspace }: Props) {
  const [speakAnim] = useState(() => new Animated.Value(1));

  const handleSpeak = () => {
    if (!sentence) return;

    Animated.sequence([
      Animated.timing(speakAnim, {
        toValue: 1.05,
        duration: 150,
        useNativeDriver: true,
      }),
      Animated.timing(speakAnim, {
        toValue: 1,
        duration: 150,
        useNativeDriver: true,
      }),
    ]).start();

    Speech.speak(sentence, {
      language: 'es-ES',
      rate: 0.85,
      pitch: 1.0,
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.labelRow}>
        <Text style={styles.sectionLabel}>Mi frase:</Text>
      </View>
      <View style={styles.bar}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.scrollContent}
        >
          <Text style={[styles.sentenceText, !sentence && styles.placeholder]}>
            {sentence || 'Toca un pictograma para construir tu frase...'}
          </Text>
        </ScrollView>

        <View style={styles.buttons}>
          <Pressable
            onPress={onBackspace}
            style={({ pressed }) => [
              styles.actionButton,
              styles.backspaceButton,
              pressed && styles.buttonPressed,
            ]}
          >
            <Text style={styles.actionButtonText}>⌫</Text>
          </Pressable>

          <Pressable
            onPress={onClear}
            style={({ pressed }) => [
              styles.actionButton,
              styles.clearButton,
              pressed && styles.buttonPressed,
            ]}
          >
            <Text style={styles.actionButtonText}>✕</Text>
          </Pressable>

          <Animated.View style={{ transform: [{ scale: speakAnim }] }}>
            <Pressable
              onPress={handleSpeak}
              style={({ pressed }) => [
                styles.actionButton,
                styles.speakButton,
                pressed && styles.buttonPressed,
                !sentence && styles.speakButtonDisabled,
              ]}
            >
              <Text style={styles.speakButtonText}>🔊 Hablar</Text>
            </Pressable>
          </Animated.View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 12,
    paddingBottom: 8,
  },
  labelRow: {
    marginBottom: 6,
  },
  sectionLabel: {
    fontSize: 14,
    fontWeight: '700',
    color: '#555',
    marginLeft: 4,
  },
  bar: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    borderWidth: 2,
    borderColor: '#E0E0E0',
    padding: 12,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
  },
  scrollContent: {
    flexGrow: 1,
    paddingVertical: 4,
    minHeight: 36,
    alignItems: 'center',
  },
  sentenceText: {
    fontSize: 20,
    fontWeight: '600',
    color: '#1a1a1a',
  },
  placeholder: {
    fontSize: 16,
    color: '#aaa',
    fontWeight: '400',
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    gap: 8,
    marginTop: 10,
  },
  actionButton: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 12,
    elevation: 2,
  },
  backspaceButton: {
    backgroundColor: '#FF8A80',
  },
  clearButton: {
    backgroundColor: '#E0E0E0',
  },
  speakButton: {
    backgroundColor: '#4CAF50',
  },
  speakButtonDisabled: {
    backgroundColor: '#A5D6A7',
    opacity: 0.6,
  },
  buttonPressed: {
    opacity: 0.7,
  },
  actionButtonText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 16,
  },
  speakButtonText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 16,
  },
});
