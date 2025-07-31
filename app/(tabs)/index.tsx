// app/(tabs)/index.tsx

import { useState } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { useRouter } from 'expo-router';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { LanguageDropdown } from '@/components/LanguageDropdown';
import { translations } from '@/constants/i18n';

// Définir le type des langues disponibles pour l'état
type Language = 'fr' | 'ar';

export default function HomeScreen() {
  const [language, setLanguage] = useState<Language>('fr');
  const t = translations[language];
  const router = useRouter();

  const handleStartGame = () => {
    // Naviguer vers le premier chapitre en passant la langue en paramètre
    router.push(`/stories/youssef/chapter-1?lang=${language}`);
  };

  return (
    <ThemedView style={styles.container}>
      <LanguageDropdown language={language} setLanguage={setLanguage} />

      <ThemedText style={styles.title} type="title">
        {t.home.title}
      </ThemedText>
      <ThemedText style={styles.subtitle} type="subtitle">
        {t.home.subtitle}
      </ThemedText>
      <ThemedText style={styles.text}>
        {t.home.intro}
      </ThemedText>

      <TouchableOpacity style={styles.button} onPress={handleStartGame}>
        <ThemedText style={styles.buttonText} type="defaultSemiBold">
          {t.home.button}
        </ThemedText>
      </TouchableOpacity>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 40,
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
  },
  text: {
    textAlign: 'center',
    marginBottom: 40,
    fontSize: 18,
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