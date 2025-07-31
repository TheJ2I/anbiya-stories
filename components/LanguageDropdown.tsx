// components/LanguageDropdown.tsx

import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';

// Définir le type des langues disponibles
type Language = 'fr' | 'ar';

type LanguageDropdownProps = {
  language: Language;
  setLanguage: (lang: Language) => void;
};

export function LanguageDropdown({ language, setLanguage }: LanguageDropdownProps) {
  return (
    <View style={styles.container}>
      <Picker
        selectedValue={language}
        style={styles.picker}
        onValueChange={(itemValue: Language) => setLanguage(itemValue)}
        mode="dropdown"
        itemStyle={{ color: 'red' }}
      >
        <Picker.Item label="Français" value="fr" />
        <Picker.Item label="العربية" value="ar" />
      </Picker>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 150,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    overflow: 'hidden',
    marginBottom: 20,
  },
  picker: {
    height: 50,
    color: 'red',
  },
});