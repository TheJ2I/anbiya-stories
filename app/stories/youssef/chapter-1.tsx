import React, { useMemo, useState } from 'react';
import { StyleSheet, TouchableOpacity, ImageBackground, View, Image, Dimensions } from 'react-native';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import { ThemedText } from '@/components/ThemedText';
import { DraggableObject } from '@/components/DraggableObject';
import { DropZone } from '@/components/DropZone';
import { translations } from '@/constants/i18n';

// Définir le type des langues disponibles
type Language = 'fr' | 'ar';

const { width, height } = Dimensions.get('window');
const gameElements = [
  { type: 'sun', image: require('@/assets/images/sun.png'), position: { x: width * 0.1, y: height * 0.2 } },
  { type: 'moon', image: require('@/assets/images/moon.png'), position: { x: width * 0.7, y: height * 0.3 } },
  ...Array.from({ length: 11 }).map((_, i) => ({
    type: 'planet',
    image: require('@/assets/images/planet.png'),
    position: {
      x: (i % 4) * 60 + 20,
      y: Math.floor(i / 4) * 60 + 500,
    },
  })),
];

export default function Chapter1Screen() {
  const router = useRouter();
  const { lang } = useLocalSearchParams();
  const language = (lang as Language) || 'fr';
  const t = useMemo(() => translations[language], [language]);

  const [isPuzzleComplete, setIsPuzzleComplete] = useState(false);

  const handleNext = () => {
    if (isPuzzleComplete) {
      console.log("Passer au chapitre 2");
      // router.push(`/stories/youssef/chapter-2?lang=${language}`);
    } else {
      console.log("Le puzzle n'est pas terminé !");
    }
  };

  const handlePuzzleCompletion = () => {
    setIsPuzzleComplete(true);
  };

  return (
    <GestureHandlerRootView style={styles.flexContainer}>
      <ImageBackground
        source={require('@/assets/images/stars.png')}
        style={styles.fullScreenBackground}
        resizeMode="cover"
      >
        {/* En-tête pour le texte */}
        <View style={styles.header}>
          <ThemedText style={styles.storyTitle} type="title">
            {t.chapter1.title}
          </ThemedText>
          <ThemedText style={styles.storyText}>
            {t.chapter1.text}
          </ThemedText>
        </View>

        {/* Espace vide pour les éléments glissables */}
        <View style={styles.gameArea}>
          {/* Zone de dépôt au milieu */}
          <DropZone>
            <ThemedText style={styles.dropZoneText}>
              {t.chapter1.dropZonePrompt}
            </ThemedText>
          </DropZone>
        </View>

        {/* Éléments à glisser, positionnés au-dessus du fond */}
        {gameElements.map((item, index) => (
          <DraggableObject key={index} initialPosition={item.position}>
            <Image source={item.image} style={styles.gameElement} />
          </DraggableObject>
        ))}

        {/* Pied de page pour le bouton */}
        <View style={styles.footer}>
          <TouchableOpacity
            style={[styles.button, !isPuzzleComplete && styles.buttonDisabled]}
            onPress={handleNext}
            disabled={!isPuzzleComplete}
          >
            <ThemedText style={styles.buttonText} type="defaultSemiBold">
              {t.chapter1.button}
            </ThemedText>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  flexContainer: {
    flex: 1,
  },
  fullScreenBackground: {
    flex: 1,
    paddingTop: 50,
    paddingBottom: 50,
  },
  header: {
    paddingHorizontal: 20,
    marginBottom: 40,
    alignItems: 'center',
  },
  storyTitle: {
    fontSize: 30,
    marginBottom: 20,
    textAlign: 'center',
    color: '#fff',
  },
  storyText: {
    fontSize: 22,
    textAlign: 'center',
    color: '#fff',
    lineHeight: 32,
  },
  gameArea: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  gameElement: {
    width: 60,
    height: 60,
  },
  dropZoneText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
  footer: {
    padding: 20,
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#0a7ea4',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
  },
  buttonDisabled: {
    backgroundColor: '#ccc',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
});