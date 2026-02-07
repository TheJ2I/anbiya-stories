// C:/imad/dev/anbiya-stories/app/stories/youssef/chapter-2.tsx

import React, { useMemo } from 'react';
import { useLocalSearchParams } from 'expo-router';
import { translations } from '@/constants/i18n';
import { StoryChapter } from '@/components/StoryChapter';

type Language = 'fr' | 'ar' | 'en';

export default function Chapter2Screen() {
  const { lang } = useLocalSearchParams();
  const language = (lang as Language) || 'fr';
  const t = useMemo(() => translations[language], [language]);

  const chapter2Images = [
    require('@/assets/images/youssef/chapter2_scene1.png'),
    require('@/assets/images/youssef/chapter2_scene2.png'),
    require('@/assets/images/youssef/chapter2_scene3.png'),
  ];

  // Chapter 2 in i18n is an array of strings, so we map it to objects
  const storySegments = t.chapter2.storySegments.map((text) => ({ text }));

  return (
    <StoryChapter
      images={chapter2Images}
      storySegments={storySegments}
      nextChapterPath="/stories/youssef/chapter-3"
      buttonText={t.chapter2.button}
    />
  );
}