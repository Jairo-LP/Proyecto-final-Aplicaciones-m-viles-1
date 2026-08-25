import { useState } from 'react';
import {
  Animated,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import type { Pictogram } from '@/constants/pictograms';

type Props = {
  pictogram: Pictogram;
  onPress: (pictogram: Pictogram) => void;
};

export function PictogramCard({ pictogram, onPress }: Props) {
  const [scaleAnim] = useState(() => new Animated.Value(1));

  const handlePressIn = () => {
    Animated.spring(scaleAnim, {
      toValue: 0.9,
      useNativeDriver: true,
    }).start();
  };

  const handlePressOut = () => {
    Animated.spring(scaleAnim, {
      toValue: 1,
      friction: 3,
      useNativeDriver: true,
    }).start();
  };

  return (
    <Animated.View style={[styles.container, { transform: [{ scale: scaleAnim }] }]}>
      <Pressable
        onPress={() => onPress(pictogram)}
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
        style={({ pressed }) => [
          styles.card,
          { backgroundColor: pictogram.color },
          pressed && styles.cardPressed,
        ]}
      >
        <View style={styles.emojiContainer}>
          <Text style={styles.emoji}>{pictogram.emoji}</Text>
        </View>
        <Text style={styles.label} numberOfLines={2}>
          {pictogram.label}
        </Text>
      </Pressable>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    maxWidth: '25%',
    minWidth: 80,
  },
  card: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 16,
    padding: 12,
    margin: 4,
    minHeight: 100,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
  },
  cardPressed: {
    opacity: 0.8,
  },
  emojiContainer: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: 'rgba(255,255,255,0.6)',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 8,
  },
  emoji: {
    fontSize: 32,
  },
  label: {
    fontSize: 13,
    fontWeight: '700',
    textAlign: 'center',
    color: '#1a1a1a',
    lineHeight: 17,
  },
});
