
import React, { useMemo } from 'react';
import { useLocalSearchParams } from 'expo-router';
import { translations } from '@/constants/i18n';
import { StoryChapter } from '@/components/StoryChapter';

type Language = 'fr' | 'ar' | 'en';

export default function Chapter4Screen() {
  const { lang } = useLocalSearchParams();
  const language = (lang as Language) || 'fr';
  const t = useMemo(() => translations[language], [language]);

  const chapterImages = [
    require('@/assets/images/youssef/chapter4_scene1.png'),
    require('@/assets/images/youssef/chapter4_scene2.png'),
    require('@/assets/images/youssef/chapter4_scene3.png'),
    require('@/assets/images/youssef/chapter4_scene4.png'),
  ];

  return (
    <StoryChapter
      images={chapterImages}
      storySegments={t.chapter4.storySegments}
      nextChapterPath="/stories/youssef/chapter-5"
      buttonText={t.chapter4.button}
    />
  );
}