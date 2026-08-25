import * as Speech from 'expo-speech';
import { useState, useCallback } from 'react';
import {
  FlatList,
  ScrollView,
  StyleSheet,
  View,
  Text,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { CategoryTab } from '@/components/category-tab';
import { PictogramCard } from '@/components/pictogram-card';
import { SentenceBar } from '@/components/sentence-bar';
import { categories, type Pictogram } from '@/constants/pictograms';

export default function AACBoard() {
  const [activeCategory, setActiveCategory] = useState(categories[0].id);
  const [sentence, setSentence] = useState('');

  const currentCategory = categories.find((c) => c.id === activeCategory)!;

  const handlePictogramPress = useCallback((pictogram: Pictogram) => {
    Speech.speak(pictogram.phrase, {
      language: 'es-ES',
      rate: 0.85,
      pitch: 1.0,
    });
    setSentence((prev) => {
      if (prev) {
        return prev + ' ' + pictogram.phrase;
      }
      return pictogram.phrase;
    });
  }, []);

  const handleClear = useCallback(() => {
    setSentence('');
  }, []);

  const handleBackspace = useCallback(() => {
    setSentence((prev) => {
      const words = prev.split(' ');
      words.pop();
      return words.join(' ');
    });
  }, []);

  return (
    <SafeAreaView style={styles.safeArea} edges={['top']}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Tablero de Comunicación</Text>
          <Text style={styles.subtitle}>SAAC - Pictogramas</Text>
        </View>

        <SentenceBar
          sentence={sentence}
          onClear={handleClear}
          onBackspace={handleBackspace}
        />

        <View style={styles.categoryContainer}>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.categoryScroll}
          >
            {categories.map((cat) => (
              <CategoryTab
                key={cat.id}
                category={cat}
                isActive={cat.id === activeCategory}
                onPress={setActiveCategory}
              />
            ))}
          </ScrollView>
        </View>

        <View style={styles.categoryHeader}>
          <Text style={styles.categoryTitle}>
            {currentCategory.icon} {currentCategory.name}
          </Text>
        </View>

        <FlatList
          data={currentCategory.pictograms}
          keyExtractor={(item) => item.id}
          numColumns={4}
          contentContainerStyle={styles.grid}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <PictogramCard
              pictogram={item}
              onPress={handlePictogramPress}
            />
          )}
        />
      </View>
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
  header: {
    paddingHorizontal: 16,
    paddingTop: 8,
    paddingBottom: 12,
    backgroundColor: '#208AEF',
  },
  title: {
    fontSize: 22,
    fontWeight: '800',
    color: '#fff',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 13,
    fontWeight: '500',
    color: 'rgba(255,255,255,0.8)',
    textAlign: 'center',
    marginTop: 2,
  },
  categoryContainer: {
    paddingTop: 10,
    paddingBottom: 6,
  },
  categoryScroll: {
    paddingHorizontal: 12,
  },
  categoryHeader: {
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  categoryTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#333',
  },
  grid: {
    paddingHorizontal: 8,
    paddingBottom: 20,
  },
});
