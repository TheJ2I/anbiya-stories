// C:/imad/dev/anbiya-stories/app/stories/youssef/chapter-1.tsx

import React, { useMemo, useState } from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  View,
  Image,
  Dimensions,
} from 'react-native';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Constants from 'expo-constants'; // 1. Use the correct import

import { ThemedText } from '@/components/ThemedText';
import { DraggableObject } from '@/components/DraggableObject';
import { DropZone } from '@/components/DropZone';
import { translations } from '@/constants/i18n';

type Language = 'fr' | 'ar';
type DraggableItemType = 'sun' | 'moon' | 'planets';
type AbsoluteLayout = { pageX: number; pageY: number; width: number; height: number };

const { width, height } = Dimensions.get('window');

// 2. Get the status bar height from expo-constants
const statusBarHeight = Constants.statusBarHeight;

const DRAGGABLE_SIZE = 60;

const gameElements = [
  { id: 'sun', type: 'sun', image: require('@/assets/images/sun.png'), initialPosition: { x: width * 0.1, y: height * 0.55 } },
  { id: 'moon', type: 'moon', image: require('@/assets/images/moon.png'), initialPosition: { x: width * 0.7, y: height * 0.55 } },
  { id: 'planets', type: 'planets', image: require('@/assets/images/planet.png'), initialPosition: { x: width * 0.4, y: height * 0.55 } },
];

const findImageForType = (type: DraggableItemType) => {
  return gameElements.find(el => el.type === type)?.image;
};

export default function Chapter1Screen() {
  const router = useRouter();
  const { lang } = useLocalSearchParams();
  const language = (lang as Language) || 'fr';
  const t = useMemo(() => translations[language], [language]);

  const [droppedItems, setDroppedItems] = useState({ sun: false, moon: false, planets: false });
  const [dropZones, setDropZones] = useState({
    sun: { x: 0, y: 0, width: 0, height: 0 },
    moon: { x: 0, y: 0, width: 0, height: 0 },
    planets: { x: 0, y: 0, width: 0, height: 0 },
  });

  const areZonesMeasured = Object.values(dropZones).every(zone => zone.width > 0);
  const isPuzzleComplete = droppedItems.sun && droppedItems.moon && droppedItems.planets;

  // This handler will now work correctly with the valid statusBarHeight value
  const handleZoneMeasure = (type: DraggableItemType) => (layout: AbsoluteLayout) => {
    if (dropZones[type].width === 0) {
      setDropZones(prev => ({
        ...prev,
        [type]: {
          x: layout.pageX,
          y: layout.pageY - statusBarHeight, // The crucial correction
          width: layout.width,
          height: layout.height,
        },
      }));
    }
  };

  const handleNext = () => {
    if (isPuzzleComplete) {
      console.log("Passer au chapitre 2");
      // router.push(`/stories/youssef/chapter-2?lang=${language}`);
    } else {
      console.log("Le puzzle n'est pas terminé !");
    }
  };

  const onDrop = (itemType: DraggableItemType) => {
    setDroppedItems(prev => ({ ...prev, [itemType]: true }));
  };

  return (
    <GestureHandlerRootView style={styles.flexContainer}>
      <View style={styles.flexContainer}>
        <ImageBackground
          source={require('@/assets/images/stars.png')}
          style={StyleSheet.absoluteFillObject}
          resizeMode="cover"
        />

        <View style={styles.header}>
          <ThemedText style={styles.storyTitle} type="title">
            {t.chapter1.title}
          </ThemedText>
          <ThemedText style={styles.storyText}>
            {t.chapter1.text}
          </ThemedText>
        </View>

        <View style={styles.gameArea}>
          <View style={styles.dropZoneContainer}>
            <DropZone title="Soleil" onMeasure={handleZoneMeasure('sun')}>
              {droppedItems.sun ? (
                <Image source={findImageForType('sun')} style={styles.droppedElement} />
              ) : (
                <ThemedText style={styles.dropZoneText}>{t.chapter1.sun}</ThemedText>
              )}
            </DropZone>
            <DropZone title="Lune" onMeasure={handleZoneMeasure('moon')}>
              {droppedItems.moon ? (
                <Image source={findImageForType('moon')} style={styles.droppedElement} />
              ) : (
                <ThemedText style={styles.dropZoneText}>{t.chapter1.moon}</ThemedText>
              )}
            </DropZone>
            <DropZone title="Planètes" onMeasure={handleZoneMeasure('planets')}>
              {droppedItems.planets ? (
                <Image source={findImageForType('planets')} style={styles.droppedElement} />
              ) : (
                <ThemedText style={styles.dropZoneText}>{t.chapter1.planets}</ThemedText>
              )}
            </DropZone>
          </View>
        </View>

        {areZonesMeasured && gameElements
          .filter(item => !droppedItems[item.type])
          .map((item) => (
            <DraggableObject
              key={item.id}
              id={item.id}
              type={item.type}
              initialPosition={item.initialPosition}
              dropZones={dropZones}
              onDrop={onDrop}
              width={DRAGGABLE_SIZE}
              height={DRAGGABLE_SIZE}
            >
              <Image source={item.image} style={styles.gameElement} />
            </DraggableObject>
        ))}

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
      </View>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  gameElement: {
    width: DRAGGABLE_SIZE,
    height: DRAGGABLE_SIZE,
  },
  droppedElement: {
    width: DRAGGABLE_SIZE - 10,
    height: DRAGGABLE_SIZE - 10,
    resizeMode: 'contain',
  },
  flexContainer: {
    flex: 1,
  },
  header: {
    paddingHorizontal: 20,
    paddingTop: 50,
    alignItems: 'center',
    backgroundColor: 'rgba(28, 28, 44, 0.6)',
    zIndex: 1,
  },
  storyTitle: {
    fontSize: 30,
    marginBottom: 10,
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
    zIndex: 1,
  },
  dropZoneContainer: {
    alignItems: 'center',
  },
  dropZoneText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
  footer: {
    padding: 20,
    alignItems: 'center',
    zIndex: 1,
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