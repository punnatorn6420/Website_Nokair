export const dictionaries = {
  en: () => import('../dictionaries/en.json').then(m => m.default),
  th: () => import('../dictionaries/th.json').then(m => m.default),
};

export type Locale = keyof typeof dictionaries;

export async function getDictionary(locale: Locale) {
  return dictionaries[locale]();
}
