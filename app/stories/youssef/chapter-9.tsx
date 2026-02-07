
import React, { useMemo } from 'react';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { translations } from '@/constants/i18n';
import { StoryChapter } from '@/components/StoryChapter';

type Language = 'fr' | 'ar' | 'en';

export default function Chapter9Screen() {
    const router = useRouter();
    const { lang } = useLocalSearchParams();
    const language = (lang as Language) || 'fr';
    const t = useMemo(() => translations[language], [language]);

    const chapterImages = [
        require('@/assets/images/youssef/chapter9_scene1.png'),
        require('@/assets/images/youssef/chapter9_scene2.png'),
        require('@/assets/images/youssef/chapter9_scene3.png'),
    ];

    const handleFinish = () => {
        router.dismissAll();
        router.replace('/');
    };

    return (
        <StoryChapter
            images={chapterImages}
            storySegments={t.chapter9.storySegments}
            onFinish={handleFinish}
            buttonText={t.chapter9.button}
        />
    );
}