export const locales = ['en', 'it'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'en';

/** A value provided in every supported language. */
export type Localized<T = string> = Record<Locale, T>;

export const localeMeta: Record<Locale, { htmlLang: string; ogLocale: string; label: string }> = {
  en: { htmlLang: 'en', ogLocale: 'en_GB', label: 'English' },
  it: { htmlLang: 'it', ogLocale: 'it_IT', label: 'Italiano' },
};

/** Root path of the home page for a locale ("/" for the default one). */
export function homePath(locale: Locale): string {
  return locale === defaultLocale ? '/' : `/${locale}/`;
}

export function isLocale(value: string | undefined): value is Locale {
  return locales.includes(value as Locale);
}

/** Pick the string for the given locale. */
export function l<T>(value: Localized<T>, locale: Locale): T {
  return value[locale];
}
