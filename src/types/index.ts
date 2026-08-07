export type PartyId =
  | 'fdi'
  | 'pd'
  | 'm5s'
  | 'lega'
  | 'fi'
  | 'avs'
  | 'azione'
  | 'iv'
  | 'piueuropa'
  | 'libdem'
  | 'vannacci'
  | 'scn'
  | 'dsp';

export type ThemeMode = 'light' | 'dark' | 'sepia';

export type StanceType = 'favorevole' | 'contrario' | 'condizionato' | 'alternativa';

export interface PartyQuote {
  text: string;
  speaker: string;
  role: string;
  date?: string;
  sourceUrl?: string;
}

export interface PartyStance {
  partyId: PartyId;
  stance: StanceType;
  summary: string;
  details: string[];
  quotes: PartyQuote[];
  keyProposal: string;
}

export interface TopicData {
  id: string;
  title: string;
  iconName: string;
  category: 'Economia & Lavoro' | 'Riforme & Istituzioni' | 'Esteri & Difesa' | 'Società & Diritti' | 'Ambiente & Energia';
  shortDesc: string;
  problemOverview: string;
  keyStatistics: {
    label: string;
    value: string;
    source: string;
    subtext?: string;
  }[];
  currentLawContext: string;
  stances: PartyStance[];
  tags: string[];
}

export interface PartyInfo {
  id: PartyId;
  name: string;
  shortName: string;
  leader: string;
  color: string; // Tailwind color or hex
  badgeBg: string;
  badgeText: string;
  borderColor: string;
  coalition: 'Centrodestra' | 'Centrosinistra' | 'Opposizione Indipendente' | 'Centro / Terzo Polo' | 'Sovranisti / Indipendenti';
  seatsInParliament?: string;
  logoText: string;
  programUrl?: string;
  description?: string;
}

export interface FactCheckItem {
  id: string;
  claim: string;
  speakerOrContext: string;
  verdict: 'FALSO' | 'PARZIALMENTE FALSO' | 'FUORVIANTE' | 'VERO';
  verdictBg: string;
  verdictText: string;
  analysis: string;
  officialData: string;
  source: string;
  topicId: string;
}

export interface QuizQuestion {
  id: number;
  topicTitle: string;
  question: string;
  context: string;
  options: {
    id: string;
    label: string;
    alignments: Record<PartyId, number>; // score from 0 to 10 for each party
  }[];
}

export interface GlossaryTerm {
  term: string;
  category: string;
  definition: string;
  simpleExample: string;
}

export interface ElectoralFaq {
  id: string;
  question: string;
  answer: string;
  icon: string;
}

export interface PollParty {
  partyId: PartyId;
  percentage: number;
  weeklyChange: number; // e.g. +0.2 or -0.1
  cameraSeatsEst: number;
  senatoSeatsEst: number;
  trend: 'up' | 'down' | 'stable';
}

export interface PollsSummary {
  lastUpdated: string;
  sourceName: string;
  methodology: string;
  govApproval: number; // e.g. 44%
  premierApproval: number; // e.g. 46%
  oppApproval: number; // e.g. 38%
  sampleSize: string;
  parties: PollParty[];
}

