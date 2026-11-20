import type { Lang } from '../i18n/ui';

type L = Record<Lang, string>;
export type Item = { when: string; title: L; place: string; text?: L };

/** From the CV. Keep it in sync with public/cv/zeki-inceoglu-cv.pdf. */
export const experience: Item[] = [
  {
    when: '04/2026 — 06/2026',
    title: { en: 'Internship — internal tool developer', fr: 'Stage — développeur d’application métier', tr: 'Staj — iş uygulaması geliştirici' },
    place: 'Cabinet Phénix · Paris',
    text: {
      en: 'Designed and built alone a JavaFX desktop app that automates receivables follow-up; used by the team every day.',
      fr: 'Conception et développement seul d’une application JavaFX qui automatise le suivi des créances ; utilisée chaque jour par l’équipe.',
      tr: 'Alacak takibini otomatikleştiren bir JavaFX masaüstü uygulamasını tek başıma tasarlayıp geliştirdim; ekip her gün kullanıyor.',
    },
  },
  {
    when: '07/2022',
    title: { en: 'Internship — back-end web & data', fr: 'Stage — back-end web & données', tr: 'Staj — back-end web & veri' },
    place: 'Mesco Media · Istanbul',
  },
];

export const education: Item[] = [
  {
    when: '2024 — 2027',
    title: { en: 'BUT Informatique (Bac +3)', fr: 'BUT Informatique (Bac +3)', tr: 'BUT Informatique (lisans, 3 yıl)' },
    place: 'Université Paris 8 — IUT de Montreuil',
  },
  {
    when: '2018 — 2023',
    title: { en: 'International baccalaureate, mathematics', fr: 'Baccalauréat international, spécialité mathématiques', tr: 'Uluslararası bakalorya, matematik' },
    place: 'Lycée de Galatasaray · Istanbul',
  },
];

export const spokenLanguages: L = {
  en: 'Turkish (native) · French C1 (DALF) · English C1 (IELTS 7.5)',
  fr: 'Turc (langue maternelle) · Français C1 (DALF) · Anglais C1 (IELTS 7,5)',
  tr: 'Türkçe (ana dil) · Fransızca C1 (DALF) · İngilizce C1 (IELTS 7,5)',
};
