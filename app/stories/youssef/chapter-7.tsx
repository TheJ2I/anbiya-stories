
import React, { useMemo } from 'react';
import { useLocalSearchParams } from 'expo-router';
import { translations } from '@/constants/i18n';
import { StoryChapter } from '@/components/StoryChapter';

type Language = 'fr' | 'ar' | 'en';

export default function Chapter7Screen() {
    const { lang } = useLocalSearchParams();
    const language = (lang as Language) || 'fr';
    const t = useMemo(() => translations[language], [language]);

    const chapterImages = [
        require('@/assets/images/youssef/chapter7_scene1.png'),
        require('@/assets/images/youssef/chapter7_scene2.png'),
        require('@/assets/images/youssef/chapter7_scene3.png'),
    ];

    return (
        <StoryChapter
            images={chapterImages}
            storySegments={t.chapter7.storySegments}
            nextChapterPath="/stories/youssef/chapter-8"
            buttonText={t.chapter7.button}
        />
    );
}