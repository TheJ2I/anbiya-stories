// C:/imad/dev/anbiya-stories/app/stories/youssef/chapter-2.tsx

import React, { useMemo, useState } from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  View,
  ImageSourcePropType,
} from 'react-native';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { ThemedText } from '@/components/ThemedText';
import { translations } from '@/constants/i18n';
import Animated, {
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

type Language = 'fr' | 'ar';

// Define the structure for a single scene in our story
interface Scene {
  image: ImageSourcePropType;
  text: string;
}

export default function Chapter2Screen() {
  const router = useRouter();
  const { lang } = useLocalSearchParams();
  const language = (lang as Language) || 'fr';
  const t = useMemo(() => translations[language], [language]);

  // Create an array of scenes using the images and the text from our translation file
  const scenes: Scene[] = [
    {
      image: require('@/assets/images/youssef/chapter2_scene1.png'),
      text: t.chapter2.storySegments[0],
    },
    {
      image: require('@/assets/images/youssef/chapter2_scene2.png'),
      text: t.chapter2.storySegments[1],
    },
    {
      image: require('@/assets/images/youssef/chapter2_scene3.png'),
      text: t.chapter2.storySegments[2],
    },
  ];

  const [currentSceneIndex, setCurrentSceneIndex] = useState(0);
  const opacity = useSharedValue(1); // Shared value for fade animations
  const isAnimating = useSharedValue(false); // Add a flag to prevent double-taps

  const currentScene = scenes[currentSceneIndex];
  const isLastScene = currentSceneIndex === scenes.length - 1;
  const isFirstScene = currentSceneIndex === 0;

  const animatedStoryStyle = useAnimatedStyle(() => ({
    opacity: opacity.value,
  }));

  const handleNext = () => {
    // This check already prevents the function from running during an animation
    if (isAnimating.value || isLastScene) {
      return;
    }
    isAnimating.value = true;
    opacity.value = withTiming(0, { duration: 300 }, (isFinished) => {
      if (isFinished) {
        runOnJS(setCurrentSceneIndex)(currentSceneIndex + 1);
        opacity.value = withTiming(1, { duration: 300 }, () => {
          isAnimating.value = false;
        });
      } else {
        isAnimating.value = false;
      }
    });
  };

  const handlePrevious = () => {
    // This check also prevents the function from running during an animation
    if (isAnimating.value || isFirstScene) {
      return;
    }
    isAnimating.value = true;
    opacity.value = withTiming(0, { duration: 300 }, (isFinished) => {
      if (isFinished) {
        runOnJS(setCurrentSceneIndex)(currentSceneIndex - 1);
        opacity.value = withTiming(1, { duration: 300 }, () => {
          isAnimating.value = false;
        });
      } else {
        isAnimating.value = false;
      }
    });
  };

  const handleFinalContinue = () => {
    if (isLastScene && !isAnimating.value) {
      console.log('Navigate to Chapter 3');
      // This line is now active
      router.push(`/stories/youssef/chapter-3?lang=${language}`);
    }
  };

  return (
    <View style={styles.container}>
      {/* Layer 0: Background Image. It's just a visual, not involved in layout. */}
      <ImageBackground
        source={currentScene.image}
        style={StyleSheet.absoluteFillObject}
        resizeMode="cover"
      />

      {/* Layer 1: The navigation overlay. Rendered first, so it's at the bottom. */}
      <View style={styles.navigationOverlay}>
        <TouchableOpacity
          style={styles.tapArea}
          onPress={handlePrevious}
          // The check for isAnimating.value is removed here to fix the warning
          disabled={isFirstScene}
          activeOpacity={1.0}
        />
        <TouchableOpacity
          style={styles.tapArea}
          onPress={handleNext}
          // The check for isAnimating.value is removed here as well
          disabled={isLastScene}
          activeOpacity={1.0}
        />
      </View>

      {/* Layer 2: The text container. Renders on top of the overlay. */}
      {/* pointerEvents="none" allows taps to pass through to the overlay below. */}
      <Animated.View
        style={[styles.textContainer, animatedStoryStyle]}
        pointerEvents="none"
      >
        <ThemedText style={styles.storyText}>
          {currentScene.text}
        </ThemedText>
      </Animated.View>

      {/* Layer 3: The footer. Rendered last, so it's on the very top. */}
      {isLastScene && (
        <View style={styles.footer}>
          <TouchableOpacity style={styles.button} onPress={handleFinalContinue}>
            <ThemedText style={styles.buttonText} type="defaultSemiBold">
              {t.chapter2.button}
            </ThemedText>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  navigationOverlay: {
    flex: 1,
    flexDirection: 'row',
  },
  tapArea: {
    flex: 1,
    // backgroundColor: 'rgba(255, 0, 0, 0.2)', // Uncomment to debug tap areas
  },
  textContainer: {
    position: 'absolute',
    top: 150,
    left: 15,
    right: 15,
    backgroundColor: '#000',
    paddingHorizontal: 20,
    paddingVertical: 30,
    marginHorizontal: 15,
    borderRadius: 15,
    borderColor: 'rgba(255, 255, 255, 0.2)',
    borderWidth: 1,
  },
  storyText: {
    color: '#fff',
    fontSize: 24,
    textAlign: 'center',
    lineHeight: 34,
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    alignItems: 'center',
    padding: 20,
  },
  button: {
    backgroundColor: '#0a7ea4',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
});