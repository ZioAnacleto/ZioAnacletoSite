import type { Locale, Localized } from './config';

/** Interface copy. Content (experiences, skills…) lives in src/data. */
const strings = {
  'meta.title': {
    en: 'Fabrizio Traversa · Android Technical Leader',
    it: 'Fabrizio Traversa · Android Technical Leader',
  },
  'meta.description': {
    en: 'Android Technical Leader in Turin, working on banking and automotive apps. Conservatory-trained percussionist and choir singer.',
    it: 'Android Technical Leader a Torino, tra app bancarie e automotive. Percussionista diplomato al Conservatorio e corista.',
  },
  'nav.label': { en: 'Sections', it: 'Sezioni' },
  'nav.about': { en: 'About', it: 'Profilo' },
  'nav.experience': { en: 'Work', it: 'Lavoro' },
  'nav.education': { en: 'Studies', it: 'Studi' },
  'nav.skills': { en: 'Skills', it: 'Competenze' },
  'nav.music': { en: 'Music', it: 'Musica' },
  'nav.contact': { en: 'Contact', it: 'Contatti' },
  'nav.home': { en: 'Back to top', it: 'Torna su' },
  'lang.label': { en: 'Language', it: 'Lingua' },
  'theme.toDark': { en: 'Switch to dark theme', it: 'Passa al tema scuro' },
  'theme.toLight': { en: 'Switch to light theme', it: 'Passa al tema chiaro' },
  'a11y.newTab': { en: '(opens in a new tab)', it: '(si apre in una nuova scheda)' },
  skip: { en: 'Skip to content', it: 'Vai al contenuto' },

  'hero.role': { en: 'Android Technical Leader', it: 'Android Technical Leader' },
  'hero.also': { en: 'and percussionist', it: 'e percussionista' },
  'hero.location': { en: 'Turin, Italy', it: 'Torino' },
  'hero.shape.label': {
    en: 'Change shape',
    it: 'Cambia forma',
  },
  'hero.portrait.alt': { en: 'Portrait of Fabrizio Traversa', it: 'Ritratto di Fabrizio Traversa' },
  'hero.pause': { en: 'Pause the animation', it: 'Metti in pausa l’animazione' },
  'hero.tempo': { en: 'Tempo', it: 'Tempo' },
  'hero.scroll': { en: 'Read the story', it: 'Leggi la storia' },

  'about.title': {
    en: 'Two disciplines, one sense of timing',
    it: 'Due discipline, un solo senso del tempo',
  },
  'about.code': { en: 'Code', it: 'Codice' },
  'about.music': { en: 'Music', it: 'Musica' },
  'about.code.body': {
    en: 'Software architecture, code quality and technical leadership, with scalability and maintainability as the constant goal.',
    it: 'Architettura software, qualità del codice e leadership tecnica, con scalabilità e manutenibilità come obiettivo costante.',
  },
  'about.music.body': {
    en: 'Additional percussionist with national and regional symphony orchestras, and a choir singer who has also served as the choir’s President.',
    it: 'Percussionista aggiunto con orchestre sinfoniche nazionali e regionali, e corista in un coro di cui è stato anche Presidente.',
  },

  'experience.title': { en: 'Work', it: 'Lavoro' },
  'experience.achievements': { en: 'Key achievements', it: 'Risultati principali' },
  'experience.present': { en: 'Present', it: 'Oggi' },
  'experience.for': { en: 'for', it: 'per' },

  'education.title': { en: 'Studies', it: 'Studi' },
  'education.grade': { en: 'Grade', it: 'Voto' },
  'education.coursework': { en: 'Relevant coursework', it: 'Corsi di rilievo' },

  'skills.title': { en: 'Toolkit', it: 'Strumenti' },

  'music.title': { en: 'Off the keyboard', it: 'Lontano dalla tastiera' },
  'music.pads.title': { en: 'Play along', it: 'Suona anche tu' },
  'music.pads.hint': {
    en: 'Tap the pads, or use keys 1 to 4. Sound plays only when you tap.',
    it: 'Tocca i pad, o usa i tasti da 1 a 4. Il suono parte solo quando tocchi.',
  },
  'music.pad.play': { en: 'Play', it: 'Suona' },
  'music.pad.timpani': { en: 'Timpani', it: 'Timpano' },
  'music.pad.snare': { en: 'Snare drum', it: 'Rullante' },
  'music.pad.woodblock': { en: 'Wood block', it: 'Wood block' },
  'music.pad.triangle': { en: 'Triangle', it: 'Triangolo' },
  'music.interests': { en: 'Interests', it: 'Interessi' },

  'contact.title': { en: 'Find me elsewhere', it: 'Mi trovi anche qui' },
  'contact.body': {
    en: 'Code on GitHub, career on LinkedIn, and an inbox for everything else.',
    it: 'Il codice su GitHub, la carriera su LinkedIn e una casella email per tutto il resto.',
  },
  'contact.email': { en: 'Write an email', it: 'Scrivimi una email' },
  'contact.copy': { en: 'Copy address', it: 'Copia indirizzo' },
  'contact.copied': { en: 'Address copied', it: 'Indirizzo copiato' },
  'footer.made': {
    en: 'Designed and built in Turin.',
    it: 'Progettato e sviluppato a Torino.',
  },
  'notfound.title': { en: 'This page is resting', it: 'Questa pagina è in pausa' },
  'notfound.body': {
    en: 'The page you are looking for does not exist or has moved.',
    it: 'La pagina che cerchi non esiste o è stata spostata.',
  },
  'notfound.back': { en: 'Back to the home page', it: 'Torna alla home' },
} satisfies Record<string, Localized>;

export type UiKey = keyof typeof strings;

/** Returns a translator bound to a locale: `const t = useTranslations('it'); t('nav.about')`. */
export function useTranslations(locale: Locale) {
  return (key: UiKey): string => strings[key][locale];
}
