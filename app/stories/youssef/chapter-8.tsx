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

interface Scene {
    image: ImageSourcePropType;
    text: string;
}

export default function Chapter8Screen() {
    const router = useRouter();
    const { lang } = useLocalSearchParams();
    const language = (lang as Language) || 'fr';
    const t = useMemo(() => translations[language], [language]);

    const chapterImages = [
        require('@/assets/images/youssef/chapter8_scene1.png'),
            require('@/assets/images/youssef/chapter8_scene2.png'),
        require('@/assets/images/youssef/chapter8_scene3.png'),
    ];

    const scenes: Scene[] = t.chapter8.storySegments.map((segment, index) => ({
        text: segment.text,
        image: chapterImages[index],
    }));

    const [currentSceneIndex, setCurrentSceneIndex] = useState(0);
    const opacity = useSharedValue(1);
    const isAnimating = useSharedValue(false);

    const currentScene = scenes[currentSceneIndex];
    const isLastScene = currentSceneIndex === scenes.length - 1;
    const isFirstScene = currentSceneIndex === 0;

    const animatedStoryStyle = useAnimatedStyle(() => ({
        opacity: opacity.value,
    }));

    const handleNext = () => {
        if (isAnimating.value || isLastScene) return;

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
        if (isAnimating.value || isFirstScene) return;

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
            console.log('Navigate to Chapter 9');
            router.push(`/stories/youssef/chapter-9?lang=${language}`);
        }
    };

    return (
        <View style={styles.container}>
            <ImageBackground
                source={currentScene.image}
                style={StyleSheet.absoluteFillObject}
                resizeMode="cover"
            />

            <View style={styles.navigationOverlay}>
                <TouchableOpacity
                    style={styles.tapArea}
                    onPress={handlePrevious}
                    disabled={isFirstScene}
                    activeOpacity={1.0}
                />
                <TouchableOpacity
                    style={styles.tapArea}
                    onPress={handleNext}
                    disabled={isLastScene}
                    activeOpacity={1.0}
                />
            </View>

            <Animated.View
                style={[styles.textContainer, animatedStoryStyle]}
                pointerEvents="none"
            >
                <ThemedText style={styles.storyText}>
                    {currentScene.text}
                </ThemedText>
            </Animated.View>

            {isLastScene && (
                <View style={styles.footer}>
                    <TouchableOpacity style={styles.button} onPress={handleFinalContinue}>
                        <ThemedText style={styles.buttonText} type="defaultSemiBold">
                            {t.chapter8.button}
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