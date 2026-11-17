import type { Localized } from '@/i18n/config';

/* ------------------------------------------------------------------ */
/* Types                                                               */
/* ------------------------------------------------------------------ */

/** Year-month, e.g. "2024-03". `null` end means "present". */
export type YearMonth = `${number}-${number}`;

export interface Experience {
  id: string;
  role: Localized;
  /** Employer / client line, worded as in the resume. */
  organization: Localized;
  city: Localized;
  start: YearMonth;
  end: YearMonth | null;
  summary: Localized;
  achievements?: Localized<string[]>;
  /** Products worth naming, rendered as tags. */
  products?: string[];
  /** Parallel projects carried out within this role. */
  projects?: Project[];
}

export interface Project {
  id: string;
  title: Localized;
  summary: Localized;
  highlights: Localized<string[]>;
  tags: string[];
}

export interface Education {
  id: string;
  discipline: 'code' | 'music';
  title: Localized;
  school: Localized;
  city: Localized;
  start?: YearMonth;
  end: YearMonth;
  description: Localized;
  details: { label: Localized; value: Localized }[];
}

export interface SkillGroup {
  id: string;
  title: Localized;
  items: Localized<string[]>;
}

export interface MusicActivity {
  id: string;
  title: Localized;
  period: string;
  body: Localized;
}

export interface Link {
  id: 'github' | 'linkedin' | 'email';
  label: string;
  href: string;
  handle: string;
}

/* ------------------------------------------------------------------ */
/* Content                                                             */
/* ------------------------------------------------------------------ */

export const person = {
  firstName: 'Fabrizio',
  lastName: 'Traversa',
  handle: 'ZioAnacleto',
  email: 'traversa.fabrizio@gmail.com',
  profile: {
    en: 'Android Technical Leader with solid experience in the banking and automotive domains. I specialise in software architecture, code quality and technical leadership, with a strong focus on scalability and maintainability. Alongside engineering, I play an active part in the Turin music scene as a percussionist and choir singer.',
    it: 'Android Technical Leader con solida esperienza nei settori bancario e automotive. Mi occupo di architettura software, qualità del codice e leadership tecnica, con grande attenzione a scalabilità e manutenibilità. Accanto all’ingegneria, partecipo attivamente alla scena musicale torinese come percussionista e corista.',
  },
} as const;

export const experiences: Experience[] = [
  {
    id: 'orbyta',
    role: { en: 'Full-stack & Mobile Developer', it: 'Full-stack & Mobile Developer' },
    organization: { en: 'Orbyta Tech', it: 'Orbyta Tech' },
    city: { en: 'Turin', it: 'Torino' },
    start: '2026-06',
    end: null,
    summary: {
      en: 'Three projects in parallel for Orbyta Tech, across web, AI and mobile: hands-on development together with direct client and stakeholder relationships.',
      it: 'Tre progetti in parallelo per Orbyta Tech, tra web, AI e mobile: sviluppo in prima persona insieme al rapporto diretto con clienti e stakeholder.',
    },
    projects: [
      {
        id: 'booking',
        title: {
          en: 'Desk and meeting-room booking platform',
          it: 'Piattaforma di prenotazione postazioni e sale riunioni',
        },
        summary: {
          en: 'Web app for booking desks and meeting rooms, with a Next.js frontend and a .NET backend. Feature development alongside project management: direct contact with stakeholders, production rollout and post-delivery follow-up of the platform.',
          it: 'Web app per prenotare postazioni di lavoro e sale riunioni, con frontend in Next.js e backend in .NET. Sviluppo le funzionalità e seguo la gestione del progetto: contatto diretto con gli stakeholder, rilascio in produzione e follow-up della piattaforma dopo la consegna.',
        },
        highlights: {
          en: [
            'Feature development across the Next.js frontend and the .NET backend',
            'Project management with direct stakeholder contact',
            'Production delivery and post-delivery follow-up',
          ],
          it: [
            'Sviluppo di funzionalità sul frontend Next.js e sul backend .NET',
            'Project management con contatto diretto con gli stakeholder',
            'Gestione del rilascio in produzione e del follow-up post-consegna',
          ],
        },
        tags: ['Next.js', '.NET', 'Project management'],
      },
      {
        id: 'legal-ai',
        title: {
          en: 'AI legal document review · Proof of Value',
          it: 'Revisione AI di documenti legali · Proof of Value',
        },
        summary: {
          en: 'Proof of Value for an international industry leader looking to bring AI into its business processes. Built a tool in which AI agents review a legal document uploaded by the user, anonymise it and propose improvements for each issue they find.',
          it: 'Proof of Value per un’azienda internazionale leader nel proprio settore, per portare l’AI nei processi aziendali. Ho sviluppato uno strumento in cui agenti AI revisionano un documento legale caricato dall’utente, lo anonimizzano e propongono migliorie per ogni problema rilevato.',
        },
        highlights: {
          en: [
            'Agent workflow built on Anthropic cloud agents',
            'Alternative solution running local AI models on Orbyta’s own servers',
            'Pipeline optimised to make the most of the in-house NVIDIA DGX',
          ],
          it: [
            'Flusso di agenti basato sugli agenti cloud di Anthropic',
            'Soluzione alternativa con modelli AI locali sui server di Orbyta',
            'Processo ottimizzato per sfruttare al meglio la NVIDIA DGX a disposizione',
          ],
        },
        tags: ['AI agents', 'Anthropic', 'Local LLM', 'NVIDIA DGX'],
      },
      {
        id: 'lausanne',
        title: {
          en: 'Lausanne public transport app',
          it: 'App dei trasporti pubblici di Losanna',
        },
        summary: {
          en: 'New features for the public transport app of the city of Lausanne, focusing on the Android side. Direct contact with the client, with support through the testing phase and post-release follow-up.',
          it: 'Nuove funzionalità per l’app dei trasporti pubblici della città di Losanna, seguendo soprattutto lo sviluppo Android. Contatto diretto con il cliente, con supporto durante la fase di test e nel follow-up dopo il rilascio.',
        },
        highlights: {
          en: [
            'Android feature development',
            'Direct communication with the client',
            'Support during testing and after release',
          ],
          it: [
            'Sviluppo di nuove funzionalità Android',
            'Comunicazione diretta con il cliente',
            'Supporto durante i test e dopo il rilascio',
          ],
        },
        tags: ['Android'],
      },
    ],
  },
  {
    id: 'esolutions',
    role: { en: 'Android Automotive Developer', it: 'Android Automotive Developer' },
    organization: {
      en: 'e.solutions GmbH for Orbyta Tech',
      it: 'e.solutions GmbH per Orbyta Tech',
    },
    city: { en: 'Turin', it: 'Torino' },
    start: '2024-03',
    end: '2026-05',
    summary: {
      en: 'Design and development of new features for the infotainment system of a leading European car maker, under strict quality standards. Grew deep expertise in proprietary tooling and became a reference point for solving complex issues.',
      it: 'Progettazione e sviluppo di nuove funzionalità per il sistema di infotainment di un importante costruttore automobilistico europeo, con standard di qualità molto rigorosi. Ho approfondito gli strumenti proprietari e sono diventato un punto di riferimento per la risoluzione dei problemi complessi.',
    },
    achievements: {
      en: [
        'Delivered high-quality code aligned with customer expectations',
        'Expanded expertise in automotive technologies and development processes',
        'Consistently met project milestones and deadlines',
      ],
      it: [
        'Codice di alta qualità, in linea con le aspettative del cliente',
        'Competenze ampliate su tecnologie e processi di sviluppo automotive',
        'Milestone e scadenze di progetto rispettate con costanza',
      ],
    },
    products: ['Android Automotive', 'Infotainment'],
  },
  {
    id: 'reply',
    role: { en: 'Android Technical Leader', it: 'Android Technical Leader' },
    organization: {
      en: 'Iriscube Reply for RIBES Solutions',
      it: 'Iriscube Reply per RIBES Solutions',
    },
    city: { en: 'Turin', it: 'Torino' },
    start: '2019-09',
    end: '2024-02',
    summary: {
      en: 'Led the development and integration of new features for the Intesa Sanpaolo Mobile and isybank apps, across the whole feature lifecycle: technical and functional analysis, solution design and implementation, release management and post-delivery test support.',
      it: 'Ho guidato lo sviluppo e l’integrazione di nuove funzionalità per le app Intesa Sanpaolo Mobile e isybank, lungo tutto il ciclo di vita: analisi tecnica e funzionale, progettazione e implementazione, gestione dei rilasci e supporto ai test dopo il rilascio.',
    },
    achievements: {
      en: [
        'Recognised for reliable, maintainable production code',
        'From developer to Technical Leader within two years',
        'Internal Android reference and mentor for the team',
      ],
      it: [
        'Riconosciuto per codice di produzione affidabile e manutenibile',
        'Da sviluppatore a Technical Leader in due anni',
        'Riferimento Android interno e mentore per il team',
      ],
    },
    products: ['Intesa Sanpaolo Mobile', 'isybank'],
  },
  {
    id: 'suppigroup',
    role: { en: 'Android Developer', it: 'Android Developer' },
    organization: { en: 'Contractor for SuppiGroup', it: 'Consulente per SuppiGroup' },
    city: { en: 'Turin', it: 'Torino' },
    start: '2018-09',
    end: '2019-05',
    summary: {
      en: 'Built from scratch, as a contractor, an Android app for complete retail store management: product configuration, sales, payments and reporting. Took an active part in architectural decisions and system structure.',
      it: 'Da consulente, ho sviluppato da zero un’app Android per la gestione completa di un negozio: configurazione prodotti, vendite, pagamenti e reportistica. Ho partecipato attivamente alle scelte architetturali e alla struttura del sistema.',
    },
    achievements: {
      en: [
        'Solid expertise in the Android SDK and Bluetooth integration',
        'Project delivered to the client’s satisfaction',
        'Independent task management with full ownership of deliverables',
      ],
      it: [
        'Solida esperienza con l’Android SDK e l’integrazione Bluetooth',
        'Progetto consegnato con piena soddisfazione del cliente',
        'Gestione autonoma delle attività, con piena responsabilità dei rilasci',
      ],
    },
    products: ['Retail POS', 'Bluetooth'],
  },
];

export const education: Education[] = [
  {
    id: 'polito',
    discipline: 'code',
    title: { en: 'B.Sc. in Computer Engineering', it: 'Laurea in Ingegneria Informatica' },
    school: { en: 'Politecnico di Torino', it: 'Politecnico di Torino' },
    city: { en: 'Turin', it: 'Torino' },
    end: '2021-12',
    description: {
      en: 'Bachelor’s degree in Computer Engineering, with a final project in computer networks.',
      it: 'Laurea triennale in Ingegneria Informatica, con progetto finale sulle reti di calcolatori.',
    },
    details: [
      {
        label: { en: 'Relevant coursework', it: 'Corsi di rilievo' },
        value: {
          en: 'Object-Oriented Programming, Computer Networks',
          it: 'Programmazione a oggetti, Reti di calcolatori',
        },
      },
    ],
  },
  {
    id: 'conservatorio',
    discipline: 'music',
    title: {
      en: 'Conservatory Diploma in Percussion',
      it: 'Diploma di Conservatorio in Strumenti a percussione',
    },
    school: { en: 'Conservatory “G. Verdi”', it: 'Conservatorio “G. Verdi”' },
    city: { en: 'Turin', it: 'Torino' },
    start: '2007-11',
    end: '2016-07',
    description: {
      en: 'Eight-year single-cycle diploma, equivalent to a Master’s degree in percussion instruments. Final recital: solo concert with accompanist, technical studies and orchestral excerpts.',
      it: 'Diploma a ciclo unico di otto anni, equiparato alla laurea magistrale in strumenti a percussione. Recital finale: concerto solistico con accompagnatore, studi tecnici e passi orchestrali.',
    },
    details: [{ label: { en: 'Grade', it: 'Voto' }, value: { en: '8.50 / 10', it: '8,50 / 10' } }],
  },
];

export const skillGroups: SkillGroup[] = [
  {
    id: 'android',
    title: { en: 'Android & architecture', it: 'Android e architettura' },
    items: {
      en: ['Kotlin', 'Jetpack Compose', 'MVVM', 'Clean Architecture', 'Dependency Injection'],
      it: ['Kotlin', 'Jetpack Compose', 'MVVM', 'Clean Architecture', 'Dependency Injection'],
    },
  },
  {
    id: 'tooling',
    title: { en: 'Tooling & CI/CD', it: 'Strumenti e CI/CD' },
    items: {
      en: [
        'Android Studio',
        'Google Play Console',
        'Git',
        'Jenkins',
        'GitHub Actions',
        'Code review',
      ],
      it: [
        'Android Studio',
        'Google Play Console',
        'Git',
        'Jenkins',
        'GitHub Actions',
        'Code review',
      ],
    },
  },
  {
    id: 'cross',
    title: { en: 'Cross-platform', it: 'Cross-platform' },
    items: {
      en: ['Kotlin Multiplatform', 'iOS integration'],
      it: ['Kotlin Multiplatform', 'Integrazione iOS'],
    },
  },
  {
    id: 'web',
    title: { en: 'Web & backend', it: 'Web e backend' },
    items: {
      en: ['Next.js', '.NET'],
      it: ['Next.js', '.NET'],
    },
  },
  {
    id: 'ai',
    title: { en: 'AI', it: 'AI' },
    items: {
      en: ['AI agents', 'Anthropic', 'Local LLMs', 'NVIDIA DGX'],
      it: ['Agenti AI', 'Anthropic', 'LLM locali', 'NVIDIA DGX'],
    },
  },
  {
    id: 'leadership',
    title: { en: 'Leadership', it: 'Leadership' },
    items: {
      en: ['Team leadership', 'Mentoring', 'Collaboration', 'Problem solving'],
      it: ['Guida del team', 'Mentoring', 'Collaborazione', 'Problem solving'],
    },
  },
  {
    id: 'languages',
    title: { en: 'Languages', it: 'Lingue' },
    items: {
      en: ['English · C1, fluent written and spoken'],
      it: ['Inglese · C1, fluente scritto e parlato'],
    },
  },
];

export const music: MusicActivity[] = [
  {
    id: 'percussionist',
    title: { en: 'Percussionist', it: 'Percussionista' },
    period: '2017 –',
    body: {
      en: 'Additional percussionist with major orchestras, including national and regional symphonic institutions, across many productions.',
      it: 'Percussionista aggiunto con importanti orchestre, tra cui istituzioni sinfoniche nazionali e regionali, in numerose produzioni.',
    },
  },
  {
    id: 'teacher',
    title: { en: 'Music teacher', it: 'Insegnante di musica' },
    period: '2015 – 2019',
    body: {
      en: 'Taught percussion at the OfficinaMusiké association and led an ensemble workshop, organising and conducting its annual final concert.',
      it: 'Ho insegnato percussioni all’associazione OfficinaMusiké e guidato un laboratorio di musica d’insieme, organizzando e dirigendo il concerto finale di ogni anno.',
    },
  },
  {
    id: 'choir',
    title: { en: 'Choir singer', it: 'Corista' },
    period: '',
    body: {
      en: 'I sing in a choir, where I have also served as President.',
      it: 'Canto in un coro, di cui sono stato anche Presidente.',
    },
  },
];

export const interests: Localized = {
  en: 'I like exploring new technologies and keeping up with the mobile ecosystem: Android, iOS and cross-platform. Music stays at the centre of my life, on stage with percussion and in the choir.',
  it: 'Mi piace esplorare nuove tecnologie e restare aggiornato sull’ecosistema mobile: Android, iOS e cross-platform. La musica resta al centro della mia vita, sul palco con le percussioni e nel coro.',
};

export const links: Link[] = [
  {
    id: 'github',
    label: 'GitHub',
    href: 'https://github.com/ZioAnacleto',
    handle: 'ZioAnacleto',
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/fabriziotraversa',
    handle: 'fabriziotraversa',
  },
  {
    id: 'email',
    label: 'Email',
    href: `mailto:${person.email}`,
    handle: person.email,
  },
];
