import { QuizQuestion } from '../types';

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    topicTitle: 'Energia e Nucleare',
    question: 'Sei favorevole al ritorno della produzione di energia nucleare in Italia con reattori di nuova generazione (SMR)?',
    context: 'L\'Italia importa il 15% dell\'energia ed il gas copre il 42% del fabbisogno. Si valuta il nucleare di nuova generazione per abbattere le emissioni.',
    options: [
      {
        id: 'q1-a1',
        label: 'Sì, assolutamente. È indispensabile per ridurre le bollette, la dipendenza estera e decarbonizzare.',
        alignments: { fdi: 10, lega: 10, fi: 10, azione: 10, iv: 10, piueuropa: 8, libdem: 10, vannacci: 8, pd: 2, m5s: 0, avs: 0, scn: 4, dsp: 0 }
      },
      {
        id: 'q1-a2',
        label: 'No, è una tecnologia troppo costosa, lenta da realizzare e con problemi di scorie. Meglio puntare al 100% su rinnovabili.',
        alignments: { fdi: 0, lega: 0, fi: 0, azione: 0, iv: 0, piueuropa: 2, libdem: 0, vannacci: 2, pd: 9, m5s: 10, avs: 10, scn: 6, dsp: 10 }
      }
    ]
  },
  {
    id: 2,
    topicTitle: 'Lavoro e Salario Minimo',
    question: 'Qual è la soluzione migliore per contrastare i salari bassi e il lavoro povero in Italia?',
    context: 'Oltre 3,5 milioni di lavoratori in Italia guadagnano meno di 9 euro all\'ora e l\'Italia è indietro nella crescita dei salari reali.',
    options: [
      {
        id: 'q2-a1',
        label: 'Fissare per legge un Salario Minimo inderogabile di almeno 9 euro all\'ora per tutti i lavoratori.',
        alignments: { pd: 10, m5s: 10, avs: 10, azione: 9, piueuropa: 9, scn: 8, dsp: 10, libdem: 4, fdi: 1, lega: 0, fi: 1, iv: 3, vannacci: 2 }
      },
      {
        id: 'q2-a2',
        label: 'Rafforzare la contrattazione collettiva dei sindacati, detassare gli straordinari e tagliare le tasse sul lavoro per le imprese.',
        alignments: { fdi: 10, lega: 10, fi: 10, iv: 8, libdem: 10, vannacci: 8, azione: 3, pd: 2, m5s: 0, avs: 0, piueuropa: 2, scn: 2, dsp: 0 }
      }
    ]
  },
  {
    id: 3,
    topicTitle: 'Riforme e Governo',
    question: 'Cosa ne pensi della riforma del "Premierato" (elezione diretta del Presidente del Consiglio)?',
    context: 'L\'Italia ha avuto 68 governi in 78 anni repubblicani. Si propone l\'elezione diretta del Premier per garantire governi di 5 anni.',
    options: [
      {
        id: 'q3-a1',
        label: 'Favorevole: dà finalmente stabilità ai governi, evita i ribaltoni politici e fa decidere direttamente gli elettori.',
        alignments: { fdi: 10, lega: 10, fi: 10, iv: 7, vannacci: 9, azione: 2, libdem: 2, pd: 0, m5s: 0, avs: 0, piueuropa: 0, scn: 4, dsp: 0 }
      },
      {
        id: 'q3-a2',
        label: 'Contrario: indebolisce la figura super partes del Presidente della Repubblica e la centralità del Parlamento.',
        alignments: { pd: 10, m5s: 10, avs: 10, piueuropa: 10, azione: 8, libdem: 8, dsp: 10, fdi: 0, lega: 0, fi: 0, iv: 3, vannacci: 1, scn: 6 }
      }
    ]
  },
  {
    id: 4,
    topicTitle: 'Autonomia Regionale',
    question: 'Sei favorevole all\'Autonomia Differenziata (Legge Calderoli) per le Regioni a statuto ordinario?',
    context: 'La riforma consente di trasferire alle Regioni richiedenti la gestione di fino a 23 materie comprese sanità e istruzione.',
    options: [
      {
        id: 'q4-a1',
        label: 'Favorevole: premia le Regioni virtuose, aumenta l\'efficienza locale ed è prevista dall\'articolo 116 della Costituzione.',
        alignments: { lega: 10, fdi: 9, fi: 8, vannacci: 7, iv: 3, azione: 2, libdem: 2, pd: 0, m5s: 0, avs: 0, piueuropa: 0, scn: 0, dsp: 0 }
      },
      {
        id: 'q4-a2',
        label: 'Contrario: spacca il Paese in due e penalizza il Sud aumentando le disuguaglianze su sanità, trasporti e scuola.',
        alignments: { pd: 10, m5s: 10, avs: 10, piueuropa: 10, scn: 10, dsp: 10, azione: 8, libdem: 8, iv: 7, fdi: 1, lega: 0, fi: 2, vannacci: 3 }
      }
    ]
  },
  {
    id: 5,
    topicTitle: 'Tasse e Fisco',
    question: 'Quale modello di tassazione dei redditi delle persone fisiche ritieni più giusto?',
    context: 'Il dibattito oppone una flat tax al 15% ad un sistema IRPEF a scaglioni progressivi vincolato all\'art. 53 della Costituzione.',
    options: [
      {
        id: 'q5-a1',
        label: 'Flat Tax: un\'aliquota unica ed uguale per tutti per semplificare il fisco e liberare chi produce ricchezza.',
        alignments: { lega: 10, fdi: 9, fi: 8, vannacci: 9, iv: 4, azione: 1, libdem: 2, pd: 0, m5s: 0, avs: 0, piueuropa: 0, scn: 5, dsp: 0 }
      },
      {
        id: 'q5-a2',
        label: 'Progressività Fiscale: chi ha di più deve pagare in percentuale di più per finanziare la sanità e la scuola pubblica.',
        alignments: { pd: 10, m5s: 10, avs: 10, piueuropa: 9, libdem: 8, azione: 8, dsp: 10, fdi: 1, lega: 0, fi: 1, iv: 5, vannacci: 1, scn: 5 }
      }
    ]
  },
  {
    id: 6,
    topicTitle: 'Sanità Pubblica',
    question: 'Come occorre affrontare l\'emergenza delle lunghissime liste d\'attesa negli ospedali pubblici?',
    context: 'Oltre 4,5 milioni di italiani rinunciano alle cure ed i medici fuggono dagli ospedali verso il privato o l\'estero.',
    options: [
      {
        id: 'q6-a1',
        label: 'Finanziamento straordinario per portare la spesa al 7.5% del PIL, sblocco assunzioni e stop alla privatizzazione.',
        alignments: { pd: 10, m5s: 10, avs: 10, azione: 9, libdem: 9, piueuropa: 8, scn: 10, dsp: 10, iv: 7, fdi: 2, lega: 2, fi: 3, vannacci: 5 }
      },
      {
        id: 'q6-a2',
        label: 'Estensione degli orari nei weekend e maggiore integrazione con le cliniche private convenzionate per smaltire le visite.',
        alignments: { fdi: 10, lega: 9, fi: 10, iv: 5, vannacci: 5, azione: 4, libdem: 3, pd: 2, m5s: 0, avs: 0, piueuropa: 3, scn: 0, dsp: 0 }
      }
    ]
  },
  {
    id: 7,
    topicTitle: 'Spese Militari e NATO',
    question: 'Come dovrebbe comportarsi l\'Italia rispetto al vincolo NATO di portare le spese militari al 2% del PIL?',
    context: 'L\'Italia spende l\'1.46% del PIL per la difesa (~32 miliardi €) e la NATO chiede di raggiungere il 2% nei prossimi anni.',
    options: [
      {
        id: 'q7-a1',
        label: 'Rispettare gli impegni NATO portando la spesa al 2% e continuare il sostegno militare continuo all\'Ucraina.',
        alignments: { fdi: 10, lega: 8, fi: 10, azione: 10, iv: 10, libdem: 10, piueuropa: 7, pd: 5, m5s: 0, avs: 0, vannacci: 4, scn: 2, dsp: 0 }
      },
      {
        id: 'q7-a2',
        label: 'No all\'aumento delle spese militari: dirottare le risorse su sanità e scuola e fermare l\'invio di armi letali.',
        alignments: { m5s: 10, avs: 10, dsp: 10, scn: 8, vannacci: 6, pd: 5, piueuropa: 3, fdi: 0, lega: 2, fi: 0, azione: 0, iv: 0, libdem: 0 }
      }
    ]
  },
  {
    id: 8,
    topicTitle: 'Cittadinanza e Minori',
    question: 'Sei favorevole all\'introduzione dello "Ius Scholae" per concedere la cittadinanza italiana ai minori stranieri?',
    context: 'Circa 900.000 studenti stranieri studiano nelle scuole italiane. Si propone di concedere la cittadinanza a chi completa un ciclo di studi.',
    options: [
      {
        id: 'q8-a1',
        label: 'Sì: un ragazzo nato o arrivato da piccolo che studia per anni nelle nostre scuole e parla italiano è un cittadino italiano.',
        alignments: { pd: 10, m5s: 10, avs: 10, piueuropa: 10, libdem: 9, azione: 9, iv: 9, fi: 8, scn: 5, dsp: 3, fdi: 2, lega: 0, vannacci: 0 }
      },
      {
        id: 'q8-a2',
        label: 'No: la cittadinanza si ottiene a 18 anni dopo verifiche e non va svenduta o regalata automaticamente.',
        alignments: { lega: 10, vannacci: 10, fdi: 9, dsp: 7, scn: 5, fi: 2, iv: 1, azione: 1, libdem: 1, pd: 0, m5s: 0, avs: 0, piueuropa: 0 }
      }
    ]
  },
  {
    id: 9,
    topicTitle: 'Infrastrutture',
    question: 'Sei favorevole alla realizzazione del Ponte sullo Stretto di Messina dal costo di circa 13,5 miliardi di euro?',
    context: 'Il progetto prevede la costruzione del ponte sospeso più lungo del mondo per unire Sicilia e Calabria entro il 2032.',
    options: [
      {
        id: 'q9-a1',
        label: 'Favorevole: è un\'opera strategica fondamentale per lo sviluppo del Sud, del turismo e delle merci europee.',
        alignments: { fdi: 10, lega: 10, fi: 10, iv: 9, scn: 9, vannacci: 8, azione: 3, libdem: 3, pd: 0, m5s: 0, avs: 0, piueuropa: 1, dsp: 2 }
      },
      {
        id: 'q9-a2',
        label: 'Contrario: è una cattedrale nel deserto. Quei 13.5 miliardi vanno spesi per i treni regionali, l\'acqua e il rischio idrogeologico.',
        alignments: { pd: 10, m5s: 10, avs: 10, piueuropa: 9, dsp: 8, azione: 7, libdem: 7, fdi: 0, lega: 0, fi: 0, iv: 1, vannacci: 2, scn: 1 }
      }
    ]
  },
  {
    id: 10,
    topicTitle: 'Giustizia e Magistratura',
    question: 'Sei favorevole alla separazione delle carriere tra magistrati giudicanti (giudici) e requirenti (pubblici ministeri)?',
    context: 'Attualmente un magistrato può passare nel corso della carriera dal ruolo di PM (accusa) a quello di Giudice (terzo).',
    options: [
      {
        id: 'q10-a1',
        label: 'Favorevole: il giudice deve essere completamente imparziale e separato dall\'accusa per un processo davvero giusto.',
        alignments: { fi: 10, libdem: 10, fdi: 9, lega: 9, azione: 9, iv: 9, vannacci: 8, piueuropa: 7, scn: 6, pd: 2, m5s: 0, avs: 0, dsp: 2 }
      },
      {
        id: 'q10-a2',
        label: 'Contrario: rischia di sottomettere il Pubblico Ministero all\'influenza del Governo e della politica.',
        alignments: { m5s: 10, avs: 10, pd: 8, dsp: 8, scn: 4, piueuropa: 3, fdi: 1, lega: 1, fi: 0, azione: 1, iv: 1, libdem: 0, vannacci: 2 }
      }
    ]
  }
];

