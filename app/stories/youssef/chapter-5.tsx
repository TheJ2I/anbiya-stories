
import React, { useMemo } from 'react';
import { useLocalSearchParams } from 'expo-router';
import { translations } from '@/constants/i18n';
import { StoryChapter } from '@/components/StoryChapter';

type Language = 'fr' | 'ar' | 'en';

export default function Chapter5Screen() {
  const { lang } = useLocalSearchParams();
  const language = (lang as Language) || 'fr';
  const t = useMemo(() => translations[language], [language]);

  const chapterImages = [
    require('@/assets/images/youssef/chapter5_scene1.png'),
    require('@/assets/images/youssef/chapter5_scene2.png'),
    require('@/assets/images/youssef/chapter5_scene3.png'),
    require('@/assets/images/youssef/chapter5_scene4.png'),
  ];

  return (
    <StoryChapter
      images={chapterImages}
      storySegments={t.chapter5.storySegments}
      nextChapterPath="/stories/youssef/chapter-6"
      buttonText={t.chapter5.button}
    />
  );
}