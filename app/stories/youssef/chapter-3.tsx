
import React, { useMemo } from 'react';
import { useLocalSearchParams } from 'expo-router';
import { translations } from '@/constants/i18n';
import { StoryChapter } from '@/components/StoryChapter';

type Language = 'fr' | 'ar' | 'en';

export default function Chapter3Screen() {
  const { lang } = useLocalSearchParams();
  const language = (lang as Language) || 'fr';
  const t = useMemo(() => translations[language], [language]);

  const chapterImages = [
    require('@/assets/images/youssef/chapter3_scene1.png'),
    require('@/assets/images/youssef/chapter3_scene2.png'),
    require('@/assets/images/youssef/chapter3_scene3.png'),
  ];

  return (
    <StoryChapter
      images={chapterImages}
      storySegments={t.chapter3.storySegments}
      nextChapterPath="/stories/youssef/chapter-4"
      buttonText={t.chapter3.button}
    />
  );
}