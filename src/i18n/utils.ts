import { getCollection, type CollectionEntry } from 'astro:content';
import { defaultLang, langs, ui, type Lang, type UiKey } from './ui';

export function t(lang: Lang) {
  return (key: UiKey): string => ui[lang][key] ?? ui[defaultLang][key];
}

/** "/work/x" -> "/fr/work/x" for fr/tr, unchanged for en. */
export function href(lang: Lang, path: string): string {
  const clean = path.startsWith('/') ? path : `/${path}`;
  return lang === defaultLang ? clean : `/${lang}${clean === '/' ? '/' : clean}`;
}

/** Strip the locale prefix from a pathname, for the language switch. */
export function unprefixed(pathname: string): string {
  const parts = pathname.split('/').filter(Boolean);
  if (parts.length && (langs as string[]).includes(parts[0])) parts.shift();
  return '/' + parts.join('/') + (pathname.endsWith('/') && parts.length ? '/' : '');
}

const slugOf = (id: string) => id.split('/').slice(1).join('/');
const langOf = (id: string) => id.split('/')[0] as Lang;

/** All work in a language, falling back to English per entry. */
export async function getWork(lang: Lang): Promise<CollectionEntry<'work'>[]> {
  const all = await getCollection('work', ({ data }) => import.meta.env.DEV || !data.draft);
  const bySlug = new Map<string, CollectionEntry<'work'>>();
  for (const e of all) if (langOf(e.id) === defaultLang) bySlug.set(slugOf(e.id), e);
  for (const e of all) if (langOf(e.id) === lang) bySlug.set(slugOf(e.id), e);
  return [...bySlug.values()].sort(
    (a, b) => b.data.year - a.data.year || b.data.order - a.data.order,
  );
}

export const workSlug = (e: CollectionEntry<'work'>) => slugOf(e.id);
