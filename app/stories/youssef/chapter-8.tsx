
import React, { useMemo } from 'react';
import { useLocalSearchParams } from 'expo-router';
import { translations } from '@/constants/i18n';
import { StoryChapter } from '@/components/StoryChapter';

type Language = 'fr' | 'ar' | 'en';

export default function Chapter8Screen() {
    const { lang } = useLocalSearchParams();
    const language = (lang as Language) || 'fr';
    const t = useMemo(() => translations[language], [language]);

    const chapterImages = [
        require('@/assets/images/youssef/chapter8_scene1.png'),
        require('@/assets/images/youssef/chapter8_scene2.png'),
        require('@/assets/images/youssef/chapter8_scene3.png'),
    ];

    return (
        <StoryChapter
            images={chapterImages}
            storySegments={t.chapter8.storySegments}
            nextChapterPath="/stories/youssef/chapter-9"
            buttonText={t.chapter8.button}
        />
    );
}