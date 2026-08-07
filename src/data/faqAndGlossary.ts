import { ElectoralFaq, GlossaryTerm } from '../types';

export const ELECTORAL_FAQS: ElectoralFaq[] = [
  {
    id: 'faq-1',
    question: 'Come funziona la legge elettorale italiana (Rosatellum)?',
    answer: 'Il "Rosatellum" è un sistema elettorale misto: circa il 37% dei seggi viene assegnato con sistema Maggioritario Uninominale (chi prende anche solo un voto in più nel collegio vince il seggio), mentre il restante 61% viene distribuito con sistema Proporzionale su liste bloccate con soglia di sbarramento al 3% per i singoli partiti ed al 10% per le coalizioni. Il 2% dei seggi è riservato alla Circoscrizione Estero.',
    icon: 'Vote'
  },
  {
    id: 'faq-2',
    question: 'È consentito il Voto Disgiunto nelle elezioni politiche?',
    answer: 'NO! Alle Elezioni Politiche nazionali (Camera e Senato) il Voto Disgiunto NON è consentito. Se un elettore traccia un segno sul candidato uninominale di una coalizione ed un altro segno sul simbolo di una lista non collegata a quel candidato, la scheda elettorale viene dichiarata ANNULLATA. Il voto dato alla lista si estende automaticamente al candidato uninominale collegato.',
    icon: 'AlertTriangle'
  },
  {
    id: 'faq-3',
    question: 'Come posssono votare gli studenti e i lavoratori fuori sede?',
    answer: 'Grazie alle recenti riforme sperimentali ed alle norme sul voto fuori sede, gli studenti universitari e i lavoratori fuori sede domandati in un comune diverso da quello di residenza per almeno 3 mesi possono presentare domanda al proprio comune di iscrizione elettorale entro 35 giorni dalle elezioni per votare nel comune di domicilio o nel capoluogo di regione.',
    icon: 'UserCheck'
  },
  {
    id: 'faq-4',
    question: 'Quali documenti servono per votare al seggio?',
    answer: 'Per esercitare il diritto di voto è necessario presentarsi al proprio seggio elettorale muniti di: 1) Un documento di riconoscimento valido con fotografia (Carta d\'Identità, Patente di guida, Passaporto, Tessera di riconoscimento professionale rilasciata da amministrazione statale); 2) La Tessera Elettorale personale (con spazi liberi per il timbro). In caso di smarrimento o esaurimento spazi, è possibile richiedere il duplice immediato all\'Ufficio Elettorale del proprio Comune.',
    icon: 'FileText'
  },
  {
    id: 'faq-5',
    question: 'Cos\'è la soglia di sbarramento e come funziona?',
    answer: 'La soglia di sbarramento è la percentuale minima di voti validi che un partito deve raggiungere a livello nazionale per poter accedere alla ripartizione dei seggi parlamentari. Nel Rosatellum la soglia è del 3% per i partiti singoli e del 10% per le coalizioni. I voti raccolti dalle liste sotto l\'1% vanno completamente dispersi; i voti tra l\'1% e il 3% vengono ridistribuiti proporzionalmente tra le altre liste della coalizione.',
    icon: 'Percent'
  }
];

export const GLOSSARY_TERMS: GlossaryTerm[] = [
  {
    term: 'Cuneo Fiscale',
    category: 'Fisco & Economia',
    definition: 'La differenza tra il costo totale che un\'azienda sostiene per un dipendente (stipendio lordo + contributi patronali) ed il reddito netto che il lavoratore riceve effettivamente in busta paga.',
    simpleExample: 'Se un\'azienda spende 3.000€ al mese per un lavoratore ed il lavoratore ne incassa 1.700€ netti, il cuneo fiscale è di 1.300€ (pari a circa il 43%).'
  },
  {
    term: 'Deficit Pubblico',
    category: 'Fisco & Economia',
    definition: 'Il disavanzo di bilancio dello Stato che si verifica quando in un singolo anno le uscite (spesa pubblica) superano le entrate (tasse e tributi).',
    simpleExample: 'Se uno Stato incassa 500 miliardi di euro dalle tasse ma ne spende 530 per sanità, pensioni e scuole, genera un deficit annuale di 30 miliardi.'
  },
  {
    term: 'Debito Pubblico',
    category: 'Fisco & Economia',
    definition: 'La somma totale accumulata di tutti i deficit annuali del passato che lo Stato ha finanziato emettendo Titoli di Stato (BTP, BOT) versati dai risparmiatori ed investitori.',
    simpleExample: 'Se il deficit è la multa singola dell\'anno, il debito pubblico è il totale cumulato del mutuo ipotecario residuo dello Stato.'
  },
  {
    term: 'LEP (Livelli Essenziali delle Prestazioni)',
    category: 'Riforme',
    definition: 'Gli standard minimi di servizi pubblici (sanità, scuola, assistenza sociale, trasporti) che lo Stato deve garantire in modo uniforme su tutto il territorio nazionale a prescindere dalla Regione.',
    simpleExample: 'Garantire che sia a Milano sia a Crotone ci siano lo stesso numero di posti in asilo nido ed i minimi tempi di attesa nei pronto soccorso.'
  },
  {
    term: 'Premierato',
    category: 'Riforme',
    definition: 'Riforma costituzionale che prevede l\'elezione diretta a suffragio universale del Presidente del Consiglio dei Ministri contestualmente alle elezioni parlamentari.',
    simpleExample: 'Eleggere direttamente sulla scheda il nome del Capo del Governo, come avviene oggi per i Sindaci nei Comuni italiani.'
  },
  {
    term: 'MES (Meccanismo Europeo di Stabilità)',
    category: 'UE & Esteri',
    definition: 'Fondo finanziario intergovernativo della zona euro creato per prestare liquidità ai Paesi membri che si trovano in gravi difficoltà finanziarie o a rischio default.',
    simpleExample: 'Una sorta di rete di salvataggio bancaria europea a cui accedere in caso di emergenza economica nazionale.'
  },
  {
    term: 'SMR (Small Modular Reactors)',
    category: 'Energia',
    definition: 'Reattori nucleari di nuova generazione di dimensioni ridotte e modulari (potenza fino a 300 MW), costruiti in fabbrica e trasportati sul luogo di installazione.',
    simpleExample: 'Centrali nucleari compattabili della dimensione di un grande capannone industriale invece che di un immenso complesso storico.'
  },
  {
    term: 'Flat Tax',
    category: 'Fisco & Economia',
    definition: 'Sistema fiscale ad aliquota unica fissa applicato a tutti i contribuenti a prescindere dall\'entità del loro reddito complessivo.',
    simpleExample: 'Pagare il 15% di tasse sia che si guadagnino 20.000 euro sia che se ne guadagnino 200.000.'
  }
];
