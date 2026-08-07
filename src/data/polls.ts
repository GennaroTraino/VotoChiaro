import { PollsSummary, PartyId } from '../types';

export const POLLS_DATA: PollsSummary = {
  lastUpdated: 'Agosto 2026 / Media Nazionali SWG - Youtrend/AGI',
  sourceName: 'Supermedia Youtrend, AGI, SWG, Noto Sondaggi, Demopolis',
  methodology: 'Media ponderata dei sondaggi nazionali degli ultimi 14 giorni svolti su campioni rappresentativi della popolazione italiana adulta.',
  govApproval: 43.5,
  premierApproval: 45.2,
  oppApproval: 38.0,
  sampleSize: 'Campione complessivo ~12.500 intervistati',
  parties: [
    {
      partyId: 'fdi',
      percentage: 28.8,
      weeklyChange: 0.2,
      cameraSeatsEst: 122,
      senatoSeatsEst: 66,
      trend: 'up',
    },
    {
      partyId: 'pd',
      percentage: 23.4,
      weeklyChange: 0.1,
      cameraSeatsEst: 84,
      senatoSeatsEst: 44,
      trend: 'up',
    },
    {
      partyId: 'm5s',
      percentage: 11.2,
      weeklyChange: -0.3,
      cameraSeatsEst: 42,
      senatoSeatsEst: 22,
      trend: 'down',
    },
    {
      partyId: 'fi',
      percentage: 9.3,
      weeklyChange: 0.1,
      cameraSeatsEst: 42,
      senatoSeatsEst: 21,
      trend: 'up',
    },
    {
      partyId: 'lega',
      percentage: 8.4,
      weeklyChange: -0.1,
      cameraSeatsEst: 38,
      senatoSeatsEst: 19,
      trend: 'down',
    },
    {
      partyId: 'avs',
      percentage: 6.8,
      weeklyChange: 0.2,
      cameraSeatsEst: 26,
      senatoSeatsEst: 13,
      trend: 'up',
    },
    {
      partyId: 'azione',
      percentage: 3.2,
      weeklyChange: 0.0,
      cameraSeatsEst: 12,
      senatoSeatsEst: 6,
      trend: 'stable',
    },
    {
      partyId: 'vannacci',
      percentage: 2.6,
      weeklyChange: 0.4,
      cameraSeatsEst: 0,
      senatoSeatsEst: 0,
      trend: 'up',
    },
    {
      partyId: 'iv',
      percentage: 2.3,
      weeklyChange: -0.1,
      cameraSeatsEst: 0,
      senatoSeatsEst: 0,
      trend: 'down',
    },
    {
      partyId: 'piueuropa',
      percentage: 2.1,
      weeklyChange: 0.0,
      cameraSeatsEst: 0,
      senatoSeatsEst: 0,
      trend: 'stable',
    },
    {
      partyId: 'libdem',
      percentage: 1.8,
      weeklyChange: 0.2,
      cameraSeatsEst: 0,
      senatoSeatsEst: 0,
      trend: 'up',
    },
    {
      partyId: 'scn',
      percentage: 1.2,
      weeklyChange: 0.0,
      cameraSeatsEst: 2,
      senatoSeatsEst: 1,
      trend: 'stable',
    },
    {
      partyId: 'dsp',
      percentage: 1.0,
      weeklyChange: 0.0,
      cameraSeatsEst: 0,
      senatoSeatsEst: 0,
      trend: 'stable',
    },
  ],
};

export const LEADER_RATINGS: { name: string; party: string; partyId: PartyId; rating: number; role: string }[] = [
  { name: 'Giorgia Meloni', party: 'FdI', partyId: 'fdi', rating: 45.2, role: 'Presidente del Consiglio' },
  { name: 'Antonio Tajani', party: 'FI', partyId: 'fi', rating: 35.1, role: 'Vicepremier & Min. Esteri' },
  { name: 'Elly Schlein', party: 'PD', partyId: 'pd', rating: 32.8, role: 'Segretaria PD' },
  { name: 'Giuseppe Conte', party: 'M5S', partyId: 'm5s', rating: 29.4, role: 'Presidente M5S' },
  { name: 'Matteo Salvini', party: 'Lega', partyId: 'lega', rating: 27.2, role: 'Vicepremier & Min. Trasporti' },
  { name: 'Carlo Calenda', party: 'Azione', partyId: 'azione', rating: 24.0, role: 'Segretario Azione' },
  { name: 'Luigi Marattin', party: 'LibDem', partyId: 'libdem', rating: 22.5, role: 'Fondatore Orizzonti Liberali' },
  { name: 'Roberto Vannacci', party: 'Futuro Naz.', partyId: 'vannacci', rating: 21.8, role: 'Europarlamentare & Leader' },
  { name: 'Matteo Renzi', party: 'IV', partyId: 'iv', rating: 18.5, role: 'Leader Italia Viva' },
];

export const COALITION_STATS = [
  {
    name: 'Centrodestra',
    parties: [
      { name: "FdI", partyId: "fdi" as PartyId },
      { name: "Forza Italia", partyId: "fi" as PartyId },
      { name: "Lega", partyId: "lega" as PartyId }
    ],
    totalPercentage: 46.5,
    cameraSeatsTotal: 220, // Su 400 totali (maggioranza assoluta è 201)
    senatoSeatsTotal: 110, // Su 200 totali (maggioranza assoluta è 101)
    color: 'bg-blue-600',
  },
  {
    name: 'Centrosinistra & Campo Largo',
    parties: [
      { name: "PD", partyId: "pd" as PartyId },
      { name: "M5S", partyId: "m5s" as PartyId },
      { name: "AVS", partyId: "avs" as PartyId }
    ],
    totalPercentage: 41.4,
    cameraSeatsTotal: 152,
    senatoSeatsTotal: 79,
    color: 'bg-red-600',
  },
  {
    name: 'Area Centro / Terzo Polo',
    parties: [
      { name: "Azione", partyId: "azione" as PartyId },
      { name: "IV", partyId: "iv" as PartyId },
      { name: "+Europa", partyId: "piueuropa" as PartyId },
      { name: "LibDem", partyId: "libdem" as PartyId }
    ],
    totalPercentage: 9.4,
    cameraSeatsTotal: 12,
    senatoSeatsTotal: 6,
    color: 'bg-slate-700',
  },
  {
    name: 'Sovranisti / Indipendenti',
    parties: [
      { name: "Futuro Naz.", partyId: "vannacci" as PartyId },
      { name: "Sud Nord", partyId: "scn" as PartyId },
      { name: "DSP", partyId: "dsp" as PartyId }
    ],
    totalPercentage: 4.8,
    cameraSeatsTotal: 2,
    senatoSeatsTotal: 1,
    color: 'bg-amber-600',
  },
];

export const ECONOMIC_INDICATORS = [
  { label: 'Crescita PIL 2026', value: '+0.9%', source: 'ISTAT / MEF', note: 'Stima programmatica BDF' },
  { label: 'Debito Pubblico / PIL', value: '136.8%', source: 'Banca d\'Italia', note: 'Stima aggiornata 2026' },
  { label: 'Tasso di Disoccupazione', value: '6.5%', source: 'ISTAT', note: 'Minimo storico' },
  { label: 'Inflazione Tendenziale', value: '+1.4%', source: 'ISTAT NIC', note: 'Dato aggiornato Agosto 2026' },
  { label: 'Fondi PNRR Spesi', value: '102.5 Mld €', source: 'Corte dei Conti', note: 'Stato avanzamento 2026' },
  { label: 'Pressione Fiscale', value: '42.1%', source: 'Osservatorio CPI', note: 'Percentuale su PIL' },
];
