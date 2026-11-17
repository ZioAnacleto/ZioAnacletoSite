import type { Locale } from '@/i18n/config';
import type { YearMonth } from '@/data/profile';

const monthYear = (locale: Locale) =>
  new Intl.DateTimeFormat(locale === 'it' ? 'it-IT' : 'en-GB', { month: 'short', year: 'numeric' });

export function formatYearMonth(value: YearMonth, locale: Locale): string {
  const [y, m] = value.split('-').map(Number) as [number, number];
  return monthYear(locale).format(new Date(Date.UTC(y, m - 1, 1)));
}

export function yearOf(value: YearMonth): string {
  return value.slice(0, 4);
}

/** Whole years and months between two dates, end inclusive of the start month. */
export function durationLabel(start: YearMonth, end: YearMonth | null, locale: Locale): string {
  const [sy, sm] = start.split('-').map(Number) as [number, number];
  const now = new Date();
  const [ey, em] = end
    ? (end.split('-').map(Number) as [number, number])
    : [now.getFullYear(), now.getMonth() + 1];
  const total = (ey - sy) * 12 + (em - sm) + 1;
  const years = Math.floor(total / 12);
  const months = total % 12;
  const plural = new Intl.PluralRules(locale);
  const words =
    locale === 'it'
      ? { year: { one: 'anno', other: 'anni' }, month: { one: 'mese', other: 'mesi' } }
      : { year: { one: 'yr', other: 'yrs' }, month: { one: 'mo', other: 'mos' } };
  const part = (n: number, w: { one: string; other: string }) =>
    `${n} ${plural.select(n) === 'one' ? w.one : w.other}`;
  return [years && part(years, words.year), months && part(months, words.month)]
    .filter(Boolean)
    .join(' ');
}
