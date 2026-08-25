import { useState } from 'react';
import {
  Animated,
  Pressable,
  StyleSheet,
  Text,
} from 'react-native';

import type { Category } from '@/constants/pictograms';

type Props = {
  category: Category;
  isActive: boolean;
  onPress: (categoryId: string) => void;
};

export function CategoryTab({ category, isActive, onPress }: Props) {
  const [scaleAnim] = useState(() => new Animated.Value(1));

  const handlePressIn = () => {
    Animated.spring(scaleAnim, {
      toValue: 0.92,
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
    <Animated.View style={{ transform: [{ scale: scaleAnim }] }}>
      <Pressable
        onPress={() => onPress(category.id)}
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
        style={[
          styles.tab,
          { borderColor: category.color },
          isActive && { backgroundColor: category.color },
        ]}
      >
        <Text style={styles.tabIcon}>{category.icon}</Text>
        <Text
          style={[
            styles.tabText,
            isActive && styles.tabTextActive,
          ]}
          numberOfLines={1}
        >
          {category.name}
        </Text>
      </Pressable>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  tab: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 24,
    borderWidth: 2,
    marginRight: 8,
    backgroundColor: '#fff',
    gap: 6,
  },
  tabIcon: {
    fontSize: 18,
  },
  tabText: {
    fontSize: 14,
    fontWeight: '700',
    color: '#333',
  },
  tabTextActive: {
    color: '#fff',
  },
});
