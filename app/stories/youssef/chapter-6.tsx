
import React, { useMemo } from 'react';
import { useLocalSearchParams } from 'expo-router';
import { translations } from '@/constants/i18n';
import { StoryChapter } from '@/components/StoryChapter';

type Language = 'fr' | 'ar' | 'en';

export default function Chapter6Screen() {
  const { lang } = useLocalSearchParams();
  const language = (lang as Language) || 'fr';
  const t = useMemo(() => translations[language], [language]);

  const chapterImages = [
    require('@/assets/images/youssef/chapter6_scene1.png'),
    require('@/assets/images/youssef/chapter6_scene2.png'),
    require('@/assets/images/youssef/chapter6_scene3.png'),
    require('@/assets/images/youssef/chapter6_scene4.png'),
  ];

  return (
    <StoryChapter
      images={chapterImages}
      storySegments={t.chapter6.storySegments}
      nextChapterPath="/stories/youssef/chapter-7"
      buttonText={t.chapter6.button}
    />
  );
}