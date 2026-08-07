import { PartyId } from '../types';

export interface ProgramPillar {
  title: string;
  iconName: string;
  summary: string;
  points: string[];
}

export interface FlagshipProposal {
  title: string;
  desc: string;
  badgeText: string;
  badgeBg: string;
}

export interface PartyProgramData {
  partyId: PartyId;
  title: string;
  subtitle: string;
  statusBadge: string;
  vision: string[];
  flagshipProposals: FlagshipProposal[];
  pillars: ProgramPillar[];
  keyDifferences: string[];
  officialSourceNote: string;
}

export const PARTY_PROGRAMS: Record<PartyId, PartyProgramData> = {
  fdi: {
    partyId: 'fdi',
    title: "Fratelli d'Italia - Programma Politico & D'Governo",
    subtitle: "Linee Guida d'Agenda Conservatrice e Sovranista 2026/2027",
    statusBadge: "Programma di Governo + Linee d'Indirizzo 2026/2027",
    vision: [
      "Difesa della sovranità nazionale e rafforzamento della posizione dell'Italia in Europa e nel mondo.",
      "Riforma costituzionale del Premierato (elezione diretta del Premier) per garantire stabilità politica.",
      "Lotta all'inverno demografico con incentivi alle famiglie numerose e sostegno alla natalità.",
      "Sostegno alle imprese e al Made in Italy attraverso la regola 'chi più produce meno paga'."
    ],
    flagshipProposals: [
      {
        title: "Premierato Costituzionale",
        desc: "Elezione diretta del Presidente del Consiglio con premio di maggioranza per governi di 5 anni.",
        badgeText: "Riforma Bandiera",
        badgeBg: "bg-blue-600 text-white"
      },
      {
        title: "Piano Mattei per l'Africa",
        desc: "Accordi bilaterali di cooperazione energetica ed economica per fermare l'immigrazione clandestina alla radice.",
        badgeText: "Esteri & Sicurezza",
        badgeBg: "bg-indigo-600 text-white"
      },
      {
        title: "Quoziente Familiare Fiscale",
        desc: "Tassazione agevolata modulata sul numero di figli a carico per combattere il calo delle nascite.",
        badgeText: "Fisco & Famiglia",
        badgeBg: "bg-emerald-600 text-white"
      }
    ],
    pillars: [
      {
        title: "Economia, Fisco e Imprese",
        iconName: "TrendingUp",
        summary: "Favorire la crescita del PIL, ridurre la pressione fiscale sul lavoro e difendere l'eccellenza industriale italiana.",
        points: [
          "Estensione progressiva della Flat Tax sui redditi incrementali e per lavoratori autonomi.",
          "Conferma permanente del taglio del cuneo fiscale e contributivo sui redditi medio-bassi.",
          "Superamento delle politiche di sussidio passivo a favore di incentivi fiscali alle assunzioni a tempo indeterminato.",
          "Tutela del Made in Italy nei settori manifatturiero, agroalimentare e dell'artigianato d'eccellenza."
        ]
      },
      {
        title: "Riforme Istituzionali e Giustizia",
        iconName: "ShieldCheck",
        summary: "Stabilità governativa e separazione delle carriere della magistratura.",
        points: [
          "Approvazione definitiva del Premierato con norma 'Simul Stabunt Simul Cadent'.",
          "Separazione delle carriere giudicante e requirente per la magistratura.",
          "Attuazione coordinata dell'Autonomia Differenziata con contestuale definizione fissa dei LEP.",
          "Semplificazione burocratica per i cantieri delle opere pubbliche e delle infrastrutture."
        ]
      },
      {
        title: "Sicurezza, Immigrazione & Esteri",
        iconName: "Lock",
        summary: "Controllo rigoroso dei confini, patti bilaterali e fermo sostegno alle alleanze atlantiche.",
        points: [
          "Pieno funzionamento delle strutture in Albania per le procedure di frontiera e i rimpatri rapidi.",
          "Lotta intransigente alle mafie, al degrado urbano e all'occupazione abusiva di immobili.",
          "Lealtà all'Alleanza Atlantica (NATO) e progressivo adeguamento della spesa per la difesa verso il 2% del PIL.",
          "Difesa dell'identità culturale e giudaico-cristiana nelle istituzioni europee."
        ]
      },
      {
        title: "Sanità, Famiglia e Welfare",
        iconName: "HeartPulse",
        summary: "Centralità del nucleo familiare e riduzione delle liste d'attesa sanitarie.",
        points: [
          "Aumento dei fondi per il Fondo Sanitario Nazionale destinati all'abbattimento delle liste d'attesa.",
          "Potenziamento degli asili nido gratuiti e dei congedi parentali retribuiti.",
          "Protezione del potere d'acquisto dei pensionati con rivalutazione delle pensioni minime.",
          "Contrasto alla gestazione per altri (GPA) dichiarata reato universale."
        ]
      }
    ],
    keyDifferences: [
      "Propone il Premierato invece della repubblica presidenziale classica o del parlamentarismo puro.",
      "Punta sulla cooperazione in Africa (Piano Mattei) anziché sulla redistribuzione obbligatoria dei migranti in UE.",
      "Sostiene il modello tradizionale di famiglia con incentivi natatistici diretti."
    ],
    officialSourceNote: "Basato sul Programma di Governo depositato alle elezioni e sui documenti d'indirizzo del Congresso Nazionale FdI."
  },

  pd: {
    partyId: 'pd',
    title: "Partito Democratico - Programma Progressista & Giustizia Sociale",
    subtitle: "Piattaforma d'Alternativa per l'Italia Sociale, Verde ed Europea 2026/2027",
    statusBadge: "Bozza Programmatica Unitaria 'L'Italia che Vogliamo' 2026/2027",
    vision: [
      "Difesa intransigente della Sanità e della Scuola Pubblica universalistica e gratuita.",
      "Introduzione del Salario Minimo legale a 9 euro all'ora contro il lavoro povero.",
      "Transizione ecologica socialmente equa per la decarbonizzazione e le energie rinnovabili.",
      "Diritti civili, parità di genere e riforma della cittadinanza (Ius Scholae/Soli)."
    ],
    flagshipProposals: [
      {
        title: "Salario Minimo a 9€/ora",
        desc: "Soglia legale minima per tutelare oltre 3 milioni di lavoratori con stipendi da fame.",
        badgeText: "Lavoro & Diritti",
        badgeBg: "bg-red-600 text-white"
      },
      {
        title: "Fondo Sanità al 7.5% del PIL",
        desc: "Finanziamento blindato per legge del Servizio Sanitario Nazionale per assumere medici e infermieri.",
        badgeText: "Sanità Pubblica",
        badgeBg: "bg-emerald-600 text-white"
      },
      {
        title: "Ius Scholae & Diritti Civili",
        desc: "Cittadinanza italiana ai giovani stranieri nati o che hanno completato un ciclo scolastico.",
        badgeText: "Società & Inclusione",
        badgeBg: "bg-rose-600 text-white"
      }
    ],
    pillars: [
      {
        title: "Lavoro, Salari e Tassazione Equa",
        iconName: "Briefcase",
        summary: "Combattere la precarietà, aumentare gli stipendi reali e garantire la progressività fiscale.",
        points: [
          "Introduzione della soglia minima inderogabile di 9 euro l'ora per la contrattazione.",
          "Progressività IRPEF rafforzata per alleggerire il carico sui ceti medi e bassi.",
          "Contrasto ai contratti pirata, al tirocinio gratuito e alla finta partita IVA.",
          "Congedo di paternità paritario di 3 mesi obbligatorio e retribuito al 100%."
        ]
      },
      {
        title: "Sanità, Istruzione e Welfare",
        iconName: "GraduationCap",
        summary: "Beni pubblici fondamentali accessibili a tutti senza distinzioni di censo.",
        points: [
          "Aumento del Fondo Sanitario Nazionale fino al 7.5% del PIL per eliminare le liste d'attesa.",
          "Gratuità degli asili nido e dei libri di testo per le famiglie a basso reddito.",
          "Aumento degli stipendi degli insegnanti per adeguarli ai parametri di riferimento europei.",
          "Piano straordinario di edilizia residenziale pubblica per studenti e giovani coppie."
        ]
      },
      {
        title: "Ambiente, Clima ed Energia",
        iconName: "Leaf",
        summary: "Accelerazione verso le fonti rinnovabili senza ricorrere all'energia atomica.",
        points: [
          "Obiettivo di copertura dell'80% di energia elettrica da fonti rinnovabili entro il 2030.",
          "No al nucleare in Italia: focalizzazione su solare, eolico, idrogeno verde e comunità energetiche.",
          "Semplificazione per l'installazione di impianti fotovoltaici ed eolici sul territorio.",
          "Sostegno alle ristrutturazioni ecologiche per i ceti meno abbienti (Superbonus sociale)."
        ]
      },
      {
        title: "Istituzioni, Europa e Diritti",
        iconName: "Globe",
        summary: "Opposizione al Premierato, difesa della Repubblica parlamentare e integrazione UE.",
        points: [
          "Difesa del ruolo di garanzia del Presidente della Repubblica e della centralità del Parlamento.",
          "No all'Autonomia Differenziata spacca-Italia; garantire parità di diritti tra Nord e Sud.",
          "Riforma del Testo Unico sull'Immigrazione per favorire canali legali di ingresso per lavoro.",
          "Matrimonio egualitario e legge contro l'omotransfobia e l'odio di genere."
        ]
      }
    ],
    keyDifferences: [
      "Rigetta la Flat Tax in favore della progressività costituzionale delle aliquote IRPEF.",
      "Nessun riapertura al nucleare, spinta esclusiva sulle fonti rinnovabili pulite.",
      "Favorevole al Salario Minimo Legale per legge anziché affidarsi unicamente ai contratti collettivi."
    ],
    officialSourceNote: "Sintesi ricavata dalla Carta dei Principi PD e dai documenti programmatici approvati dalla Direzione Nazionale."
  },

  m5s: {
    partyId: 'm5s',
    title: "Movimento 5 Stelle - Programma di Trasformazione Civica",
    subtitle: "Giustizia Ambientale, Tutela Sociale e Transizione Digitale 2026/2027",
    statusBadge: "Documento Programmatico dell'Assemblea Costituente M5S 2026/2027",
    vision: [
      "Lotta alle disuguaglianze con una misura universale di sostegno al reddito e all'inserimento lavorativo.",
      "Transizione ecologica radicale e no al riarmo o all'aumento delle spese militari.",
      "Trasparenza istituzionale, lotta alla corruzione e no all'Autonomia Differenziata.",
      "Riduzione dell'orario di lavoro a parità di salario e salario minimo legale a 9 euro."
    ],
    flagshipProposals: [
      {
        title: "Misura di Sostegno al Reddito (MIA)",
        desc: "Riforma ed estensione della protezione sociale per disoccupati e poveri assoluti.",
        badgeText: "Welfare & Dignità",
        badgeBg: "bg-amber-500 text-slate-950"
      },
      {
        title: "Settimana Corta a 32 Ore",
        desc: "Riduzione dell'orario di lavoro a parità di stipendio per migliorare la produttività e la vita.",
        badgeText: "Lavoro Futuro",
        badgeBg: "bg-blue-600 text-white"
      },
      {
        title: "No al Riarmo / Stop Spese NATO 2%",
        desc: "Destinazione delle risorse militari a sanità, istruzione e prevenzione del dissesto idrogeologico.",
        badgeText: "Pace & Economia",
        badgeBg: "bg-emerald-600 text-white"
      }
    ],
    pillars: [
      {
        title: "Sociale, Reddito e Lavoro",
        iconName: "Shield",
        summary: "Combattere la povertà ed evitare la svalutazione del lavoro dipendente.",
        points: [
          "Istituzione di un Reddito di Dignità potenziato legato alla formazione e ai servizi sociali.",
          "Salario minimo legale a 9€/ora e cancellazione dei contratti precari a termine.",
          "Incentivi statali per le aziende che sperimentano la settimana lavorativa di 32 ore a parità di salario.",
          "Tutela dei lavoratori della gig economy, dei rider e dei professionisti a partita IVA."
        ]
      },
      {
        title: "Ecologia, Casa ed Energia",
        iconName: "Zap",
        summary: "Efficienza energetica della casa e stop al consumo di suolo.",
        points: [
          "Riforma strutturale degli incentivi edilizi con aliquote progressive basate sul reddito (Superbonus 2.0).",
          "Piano straordinario di comunità energetiche rinnovabili in ogni comune d'Italia.",
          "Contrasto netto all'energia nucleare e ai rigassificatori fossili.",
          "Messa in sicurezza del territorio nazionale dal dissesto idrogeologico e dalla siccità."
        ]
      },
      {
        title: "Giustizia, Legalità e Istituzioni",
        iconName: "Scale",
        summary: "Intransigenza antimafia, trasparenza della politica e no al Premierato.",
        points: [
          "Rafforzamento della Legge Spazzacorrotti e del reato di traffico di influenze illecite.",
          "Piena contrarietà all'Autonomia Differenziata per evitare di dividere il Paese.",
          "Contrarietà alla separazione delle carriere della magistratura.",
          "Riforma del conflitto di interessi e regolamentazione rigida delle lobby."
        ]
      },
      {
        title: "Esteri, Difesa e Pace",
        iconName: "Compass",
        summary: "Negoziati di pace, sovranità diplomatica e opposizione al riarmo globale.",
        points: [
          "Opposizione all'innalzamento delle spese militari al 2% del PIL imposto dalla NATO.",
          "Impegno prioritario per la soluzione diplomatica dei conflitti in Ucraina e Medio Oriente.",
          "Riconoscimento immediato dello Stato di Palestina da parte delle istituzioni italiane ed europee.",
          "Sospensione della vendita di armi a Paesi in stato di conflitto attivo."
        ]
      }
    ],
    keyDifferences: [
      "Forte opposizione all'aumento delle spese militari della difesa a favore di sanità e scuola.",
      "Prospettiva di riduzione dell'orario di lavoro (settimana di 4 giorni a parità di paga).",
      "Sostegno convinto a misure di protezione sociale universale e incentivi edilizi ecologici."
    ],
    officialSourceNote: "Estratto dal documento dell'Assemblea Costituente M5S 'Nova' e dalle risoluzioni di gruppo."
  },

  lega: {
    partyId: 'lega',
    title: "Lega - Salvini Premier - Programma Autonomista & Sicurezza",
    subtitle: "Flat Tax, Autonomia Regionale, Difesa dei Confini e Infrastrutture 2026/2027",
    statusBadge: "Piattaforma Ufficiale della Lega 2026/2027",
    vision: [
      "Attuazione immediata dell'Autonomia Differenziata per valorizzare i territori.",
      "Flat Tax al 15% estesa fino a 100.000€ per lavoratori autonomi e dipendenti.",
      "Superamento definitivo della Legge Fornero con Quota 41 per le pensioni.",
      "Realizzazione del Ponte sullo Stretto di Messina e grandi opere infrastrutturali."
    ],
    flagshipProposals: [
      {
        title: "Autonomia Differenziata (L. Calderoli)",
        desc: "Trasferimento delle 23 competenze alle Regioni per premiare l'efficienza amministrativa.",
        badgeText: "Riforma Identitaria",
        badgeBg: "bg-emerald-700 text-white"
      },
      {
        title: "Quota 41 per le Pensioni",
        desc: "Diritto alla pensione diretta dopo 41 anni di contributi versati, a prescindere dall'età anagrafica.",
        badgeText: "Previdenza & Lavoro",
        badgeBg: "bg-blue-600 text-white"
      },
      {
        title: "Ponte sullo Stretto di Messina",
        desc: "Apertura cantieri per il collegamento stabile tra Sicilia e Calabria entro il triennio.",
        badgeText: "Infrastrutture",
        badgeBg: "bg-indigo-600 text-white"
      }
    ],
    pillars: [
      {
        title: "Autonomia e Territori",
        iconName: "MapPin",
        summary: "Responsabilizzare le giunte regionali e trattenere le risorse fiscali sul territorio.",
        points: [
          "Pieno sviluppo della Legge Calderoli sull'Autonomia Differenziata per le Regioni richiedenti.",
          "Superamento del centralismo statale a favore del federalismo fiscale.",
          "Valorizzazione delle autonomie locali, dei sindaci e dei comuni di montagna.",
          "Autonomia scolastica e sanitaria orientata alle specificità territoriali."
        ]
      },
      {
        title: "Fisco, Lavoro e Pensioni",
        iconName: "Calculator",
        summary: "Shock fiscale con Flat Tax e superamento dei vincoli anagrafici per la pensione.",
        points: [
          "Innalzamento del tetto del regime forfettario al 15% a 100.000 euro per le Partite IVA.",
          "Introduzione della Quota 41 pura senza penalizzazioni di calcolo dell'assegno.",
          "Rottamazione quinquies delle cartelle esattoriali e pace fiscale sulle pendenze minori.",
          "Defiscalizzazione completa dei premi di produttività e degli straordinari."
        ]
      },
      {
        title: "Infrastrutture e Nucleare",
        iconName: "Radio",
        summary: "Sviluppo di grandi opere pubbliche e rientro dell'Italia nel nucleare pulito.",
        points: [
          "Avvio dei lavori del Ponte sullo Stretto di Messina e velocizzazione della ferrovia Salerno-Reggio Calabria.",
          "Rientro della produzione energetica nucleare in Italia con reattori di quarta generazione (SMR).",
          "Codice della Strada più severo e potenziamento dei controlli sulla guida in stato di ebbrezza.",
          "Piano casa per la riqualificazione e il riscatto degli immobili pubblici erogati ai giovani."
        ]
      },
      {
        title: "Sicurezza, Confini e Famiglia",
        iconName: "ShieldAlert",
        summary: "Contrasto all'immigrazione clandestina e tutela della sicurezza pubblica.",
        points: [
          "Ripristino integrale dei Decreti Sicurezza e blocco navale in accordo con i Paesi nordafricani.",
          "Potenziamento dell'organico delle Forze dell'Ordine con piano di assunzioni straordinario.",
          "Difesa della famiglia naturale e contrarietà a qualsiasi teoria di genere o genitore 1 e 2.",
          "Castrazione chimica su base volontaria per gli autori di reati di violenza sessuale reiterati."
        ]
      }
    ],
    keyDifferences: [
      "Promotore principale dell'Autonomia Differenziata Regionale (Legge Calderoli).",
      "Spinta decisa sulla Quota 41 per le pensioni rispetto agli alleati di coalizione.",
      "Apertura immediata ai reattori nucleari modulari SMR di nuova generazione."
    ],
    officialSourceNote: "Basato sulle risoluzioni approvate dal Consiglio Federale della Lega e sul programma delle infrastrutture."
  },

  fi: {
    partyId: 'fi',
    title: "Forza Italia - Programma Moderato, Liberal-Europeista & Garantista",
    subtitle: "Fisco Equo, Diritti Individuali, Giustizia Giusta e Crescita Economica 2026/2027",
    statusBadge: "Piattaforma Moderata della Coalizione di Centrodestra 2026/2027",
    vision: [
      "Ancora europeista, atlantista e liberal-moderata dell'area di governo.",
      "Riforma radicale della giustizia in senso garantista e separazione delle carriere.",
      "Innalzamento delle pensioni minime a 1.000 euro al mese per tutti i non autosufficienti.",
      "Sostegno alle imprese, no a nuove tasse patrimoniali e incentivi ai giovani imprenditori."
    ],
    flagshipProposals: [
      {
        title: "Pensioni Minime a 1.000€",
        desc: "Obiettivo storico di adeguamento di tutti gli assegni pensionistici minimi ad almeno 1.000 euro netti.",
        badgeText: "Welfare & Anziani",
        badgeBg: "bg-sky-700 text-white"
      },
      {
        title: "Separazione delle Carriere",
        desc: "Distinzione netta e costituzionale tra giudici e PM per garantire la terzietà del magistrato.",
        badgeText: "Riforma Giustizia",
        badgeBg: "bg-blue-800 text-white"
      },
      {
        title: "Ius Scholae Moderato",
        desc: "Cittadinanza italiana concessa ai minori stranieri dopo 10 anni di percorso scolastico con profitto.",
        badgeText: "Diritti & Integrazione",
        badgeBg: "bg-indigo-600 text-white"
      }
    ],
    pillars: [
      {
        title: "Giustizia Garantista e Libertà Individuali",
        iconName: "Shield",
        summary: "Superamento del giustizialismo, tutela della presunzione d'innocenza e del segreto istruttorio.",
        points: [
          "Separazione immediata delle carriere tra magistratura giudicante e requirente con doppio CSM.",
          "Limitazione dell'uso delle intercettazioni telefoniche ed ambientali non pertinenti al reato.",
          "Riforma della custodia cautelare in carcere per evitare abusi di carcerazione preventiva.",
          "Responsabilità civile diretta dei magistrati in caso di dolo o colpa grave accertata."
        ]
      },
      {
        title: "Economia, Fisco e Lavoro",
        iconName: "Coins",
        summary: "Meno tasse per imprese e famiglie, abbassamento dell'aliquota IRPEF intermedia.",
        points: [
          "Riduzione dell'aliquota IRPEF dal 35% al 33% per i ceti medi fino a 60.000 euro di reddito.",
          "No tassativo a qualsiasi forma di tassa patrimoniale sulla casa, sulla ricchezza o sui risparmi.",
          "Abolizione progressiva dell'IRAP per tutte le tipologie di società d'impresa.",
          "Incentivi fiscali al 100% per chi assume giovani under 35 a tempo indeterminato."
        ]
      },
      {
        title: "Politica Estera ed Europa",
        iconName: "Globe",
        summary: "Centrismo atlantico e partecipazione attiva al Partito Popolare Europeo (PPE).",
        points: [
          "Sostegno incondizionato alle istituzioni europee e alla costruzione della Difesa Comune Europea.",
          "Presenza attiva nell'Alleanza Atlantica con forte legame strategico con gli USA.",
          "Promozione della diplomazia italiana nei Balcani occidentali e nel bacino del Mediterraneo.",
          "Sostegno al commercio internazionale libero contro politiche protezionistiche."
        ]
      },
      {
        title: "Sociale, Sanità e Diritti",
        iconName: "Heart",
        summary: "Attenzione agli anziani, alle disabilità e all'integrazione equilibrata.",
        points: [
          "Innalzamento progressivo delle pensioni minime verso la soglia di 1.000€ mensili.",
          "Apertura allo Ius Scholae regolato dopo 10 anni di ciclo scolastico obbligatorio.",
          "Potenziamento delle strutture socio-assistenziali per gli anziani non autosufficienti.",
          "Riforma dell'assistenza sanitaria privata convenzionata per abbattere i tempi di attesa."
        ]
      }
    ],
    keyDifferences: [
      "Piattaforma liberale e garantista vicina alle posizioni del Partito Popolare Europeo (PPE).",
      "Apertura al dialogo sullo Ius Scholae a differenza dei partner della coalizione di governo.",
      "Accento prioritario sull'innalzamento delle pensioni minime e sulla riduzione IRPEF ceti medi."
    ],
    officialSourceNote: "Tratto dal documento programmatico approvato dal Congresso di Forza Italia e dalle linee PPE."
  },

  avs: {
    partyId: 'avs',
    title: "Alleanza Verdi e Sinistra - Programma Ecologista & Giustizia Sociale",
    subtitle: "Clima, Lavoro Giusto, Sanità Pubblica e Riconversione Ecologica 2026/2027",
    statusBadge: "Piattaforma Programmatica Ecologista e Sociale 2026/2027",
    vision: [
      "Emergenza climatica al centro di ogni scelta economica e industriale.",
      "Tassa straordinaria sulle grandi ricchezze (patrimoniale) per finanziare sanità e istruzione.",
      "Salario minimo legale a 10 euro all'ora e abolizione dei contratti precari.",
      "Stop alle opere impattanti (Ponte sullo Stretto, TAV, inceneritori) in favore del trasporto locale."
    ],
    flagshipProposals: [
      {
        title: "Tassa sulla Ricchezza (>5 Milioni €)",
        desc: "Patrimoniale progressiva sui grandissimi patrimoni per ricavare 15 miliardi da destinare ai servizi pubblici.",
        badgeText: "Giustizia Fiscale",
        badgeBg: "bg-green-700 text-white"
      },
      {
        title: "Salario Minimo a 10€/ora",
        desc: "Aumento della soglia legale minima a 10 euro l'ora indicizzata all'inflazione.",
        badgeText: "Lavoro",
        badgeBg: "bg-emerald-600 text-white"
      },
      {
        title: "Stop Ponte Stretto e Grandi Opere",
        desc: "Spostamento integrale delle risorse dal Ponte sullo Stretto alla manutenzione dei treni regionali e del territorio.",
        badgeText: "Ambiente",
        badgeBg: "bg-teal-700 text-white"
      }
    ],
    pillars: [
      {
        title: "Transizione Ecologica e Clima",
        iconName: "Leaf",
        summary: "Uscita immediata dai combustibili fossili e neutralità climatica al 2045.",
        points: [
          "Cessazione di tutti i sussidi ambientali dannosi ai fossili entro il 2027.",
          "Installazione straordinaria di 12 GW/anno di impianti fotovoltaici ed eolici offshore.",
          "No assoluto al nucleare e alla finanza fossile dei rigassificatori.",
          "Piano di riforestazione urbana e protezione del 30% del territorio terrestre e marino."
        ]
      },
      {
        title: "Giustizia Sociale e Lavoro",
        iconName: "Users",
        summary: "Combattere le disuguaglianze estreme e la povertà lavorativa.",
        points: [
          "Introduzione del Salario Minimo Legale a 10 euro l'ora.",
          "Tassazione straordinaria sui super-profitti delle società energetiche, bancarie e degli armamenti.",
          "Abolizione dei contratti di somministrazione precari e ripristino delle tutele del lavoro.",
          "Riduzione dell'orario di lavoro a 34 ore settimanali a parità di retribuzione."
        ]
      },
      {
        title: "Servizi Pubblici, Sanità e Scuola",
        iconName: "HeartPulse",
        summary: "Definanziamento delle strutture private convenzionate in favore della sanità 100% pubblica.",
        points: [
          "Aumento della spesa sanitaria al 8% del PIL limitando il ricorso ai privati convenzionati.",
          "Istruzione gratuita dal nido all'università per tutti i redditi sotto i 30.000€ ISEE.",
          "Piano straordinario di edilizia scolastica ecologica e sicura dal rischio sismico.",
          "Integrazione del trasporto pubblico locale gratuito per studenti e giovani under 26."
        ]
      },
      {
        title: "Pace, Diritti Civili e Cittadinanza",
        iconName: "Sun",
        summary: "Pacifismo radicale, Ius Soli puro e parità di diritti di genere.",
        points: [
          "Ius Soli puro: cittadinanza automatica alla nascita sul territorio italiano.",
          "Taglio immediato del 30% delle spese per gli armamenti e riconversione dell'industria bellica.",
          "Legalizzazione della cannabis per uso ricreativo e terapeutico e monopolio statale.",
          "Riconoscimento completo dei diritti delle famiglie omogenitoriali."
        ]
      }
    ],
    keyDifferences: [
      "Propone una tassa patrimoniale progressiva sui grandi patrimoni superiori a 5 milioni di euro.",
      "Nessun compromesso sui fossili o sul nucleare: 100% energie rinnovabili.",
      "Netta contrarietà all'aumento delle spese militari della NATO."
    ],
    officialSourceNote: "Sintesi approvata dall'Assemblea Nazionale AVS e dalla rete ecologista europea."
  },

  azione: {
    partyId: 'azione',
    title: "Azione - Programma Pragmatico & Riformista",
    subtitle: "Sanità, Istruzione, Nucleare Pulito, Industria 4.0 e Competenza 2026/2027",
    statusBadge: "Piano di Rilancio 'L'Italia sul Serio' 2026/2027",
    vision: [
      "Pragmatismo, competenze tecniche e rifiuto dei populismi di destra e di sinistra.",
      "Destinazione prioritaria di 10 miliardi alla Sanità e 8 miliardi alla Scuola Pubblica.",
      "Apertura convinta all'energia nucleare di nuova generazione per abbattere le bollette.",
      "Nessun sussidio a fondo perduto: incentivi condizionati a investimenti in produttività (Industria 4.0)."
    ],
    flagshipProposals: [
      {
        title: "Piano Straordinario Sanità (10 Mld €)",
        desc: "Copertura finanziaria diretta per adeguare gli stipendi di medici e infermieri agli standard UE.",
        badgeText: "Sanità & Competenze",
        badgeBg: "bg-slate-800 text-white"
      },
      {
        title: "Piano Nucleare Italiano SMR",
        desc: "Costruzione di reattori modulari di IV generazione per garantire energia a basso costo alle industrie.",
        badgeText: "Energia & Industria",
        badgeBg: "bg-blue-700 text-white"
      },
      {
        title: "Obbligo Scolastico fino a 18 Anni",
        desc: "Estensione dell'obbligo d'istruzione e tempo pieno obbligatorio al Sud per combattere la dispersione.",
        badgeText: "Istruzione",
        badgeBg: "bg-indigo-700 text-white"
      }
    ],
    pillars: [
      {
        title: "Sanità, Scuola e Capitale Umano",
        iconName: "GraduationCap",
        summary: "Investire nell'istruzione e nella salute pubblica per rilanciare la produttività del Paese.",
        points: [
          "Aumento degli stipendi dei medici e degli infermieri del 25% per fermare la fuga all'estero.",
          "Tempo pieno obbligatorio in tutte le scuole elementari e medie d'Italia.",
          "Riforma degli ITS (Istituti Tecnici Superiori) con modello duale tedesco.",
          "Eliminazione del numero chiuso a Medicina sostituito da un primo anno comune con sbarramento meritocratico."
        ]
      },
      {
        title: "Industria, Fisco ed Energia",
        iconName: "Cpu",
        summary: "Sostegno alle imprese esportatrici e piano energetico senza pregiudizi ideologici.",
        points: [
          "Ripristino del Piano Industria 4.0 con credito d'imposta per investimenti in automazione ed AI.",
          "Adozione dell'energia nucleare (SMR) come pilastro fondamentale del mix energetico azzerando le emissioni.",
          "Taglio selettivo del cuneo fiscale focalizzato sui lavoratori under 30.",
          "No a bonus edilizi indiscriminati senza vincoli di reddito o efficienza accertata."
        ]
      },
      {
        title: "Istituzioni e Burocrazia",
        iconName: "Briefcase",
        summary: "Efficienza della Pubblica Amministrazione e riforma costituzionale 'Modello Sindaco'.",
        points: [
          "Riforma della Pubblica Amministrazione basata su valutazione del merito e della digitalizzazione.",
          "Riforma del bicameralismo paritario senza stravolgere la figura del Presidente della Repubblica.",
          "Semplificazione drastica del Codice degli Appalti per velocizzare le opere PNRR.",
          "No all'Autonomia Differenziata ideologica senza la preventiva copertura totale dei LEP."
        ]
      },
      {
        title: "Esteri e Difesa Europea",
        iconName: "ShieldCheck",
        summary: "Integrazione europea profonda e difesa comune coordinata.",
        points: [
          "Superamento del voto all'unanimità nell'Unione Europea per la politica estera e di difesa.",
          "Creazione dell'Esercito Unico Europeo coordinato con la NATO.",
          "Sostegno fermo alle democrazie occidentali e contrasto ai regimi autoritari.",
          "Raggiungimento del 2% del PIL in spese per la difesa europea."
        ]
      }
    ],
    keyDifferences: [
      "Apertura convinta al nucleare di nuova generazione per sostenere il tessuto industriale.",
      "Rifiuto sia della Flat Tax che del Salario Minimo statale slegato dai contratti nazionali seri.",
      "Focus prioritario sugli investimenti in scuola, ITS e sanità piuttosto che su sussidi a pioggia."
    ],
    officialSourceNote: "Basato sulle tesi approvate al Congresso Nazionale di Azione e dai dossier del Centro Studi."
  },

  iv: {
    partyId: 'iv',
    title: "Italia Viva - Programma Riformista & Sviluppo Economico",
    subtitle: "Infrastrutture, Lavoro, Riforme Istituzionali e Burocrazia Zero 2026/2027",
    statusBadge: "Programma 'Italia Semplice e Forte' 2026/2027",
    vision: [
      "Shock burocratico con sblocco immediato dei cantieri e delle infrastrutture bloccare.",
      "Riforma istituzionale con elezione diretta del Premier (Modello Sindaco d'Italia).",
      "Taglio delle tasse sul lavoro e incentivi agli investimenti privati e all'innovazione.",
      "Posizione nettamente europeista, atlantista e favorevole alla transizione energetica con nucleare."
    ],
    flagshipProposals: [
      {
        title: "Elezione Diretta del Premier (Sindaco d'Italia)",
        desc: "Riforma della forma di governo per garantire stabilità e decisione rapida.",
        badgeText: "Riforma Istituzionale",
        badgeBg: "bg-pink-700 text-white"
      },
      {
        title: "Sblocco Cantieri 'Italia Veloce'",
        desc: "Commissariamento straordinario delle opere pubbliche ritardate da veti burocratici.",
        badgeText: "Infrastrutture",
        badgeBg: "bg-blue-600 text-white"
      },
      {
        title: "Zero Tasse per chi assume Giovani",
        desc: "Esenzione contributiva totale per 3 anni per le imprese che assumono under 35.",
        badgeText: "Lavoro",
        badgeBg: "bg-emerald-600 text-white"
      }
    ],
    pillars: [
      {
        title: "Lavoro, Fisco e Giovani",
        iconName: "TrendingUp",
        summary: "Premiare chi produce ricchezza ed eliminare i disincentivi al lavoro.",
        points: [
          "Zero tasse sui profitti reinvestiti in ricerca, sviluppo ed impianti produttivi.",
          "Defiscalizzazione completa per 3 anni sui nuovi assunti a tempo indeterminato under 35.",
          "Superamento del Reddito di Cittadinanza sostituito da politiche attive e formazione obbligatoria.",
          "Potenziamento delle borse di studio universitarie e azzeramento tasse universitarie per meritevoli."
        ]
      },
      {
        title: "Infrastrutture, Energia e Ambiente",
        iconName: "Zap",
        summary: "Modernizzazione infrastrutturale rapida e pragmatismo energetico.",
        points: [
          "Sostegno al Ponte sullo Stretto di Messina, alla TAV Torino-Lione e ai rigassificatori.",
          "Riapertura del dibattito sull'energia nucleare pulita di IV generazione.",
          "Piano straordinario di invasi e bacini idrici per contrastare l'emergenza siccità.",
          "Semplificazione paesaggistica per gli impianti di energia rinnovabile."
        ]
      },
      {
        title: "Istituzioni e Giustizia",
        iconName: "Scale",
        summary: "Garantismo penale e riforme costituzionali per l'efficienza governativa.",
        points: [
          "Riforma del Premierato con il modello dell'elezione diretta del Capo del Governo.",
          "Separazione delle carriere dei magistrati e stop al processo mediatico.",
          "Abolizione dell'abuso d'ufficio e limitazione dei reati di intralcio alla PA.",
          "Riforma della Giustizia Civile con tempi certi entro 365 giorni per sentenza."
        ]
      },
      {
        title: "Europa e Posizionamento Internazionale",
        iconName: "Globe",
        summary: "Leadership nell'Unione Europea e fermezza nelle alleanze occidentali.",
        points: [
          "Creazione degli Stati Uniti d'Europa con Presidente della Commissione eletto dai cittadini.",
          "Difesa comune europea e coordinamento degli acquisti militari in sede UE.",
          "Sostegno continuo all'Ucraina e alla stabilizzazione del Medio Oriente.",
          "Partnership privilegiata con i Paesi del Bacino del Mediterraneo per lo sviluppo commerciale."
        ]
      }
    ],
    keyDifferences: [
      "Sostegno aperto al modello costituzionale del 'Sindaco d'Italia' (elezione diretta del Premier).",
      "Approccio iper-garantista sulla giustizia e forte accelerazione sulle infrastrutture.",
      "Netto rifiuto dei sussidi passivi a favore di incentivi alle imprese e all'occupazione giovanile."
    ],
    officialSourceNote: "Sintesi ricavata dagli atti dell'Assemblea Nazionale di Italia Viva e dalle proposte di legge presentate."
  },

  piueuropa: {
    partyId: 'piueuropa',
    title: "+Europa - Programma Liberal-Europeista & Diritti Civili",
    subtitle: "Stati Uniti d'Europa, Libertà Individuali, Fisco Trasparente e Mercato Aperto 2026/2027",
    statusBadge: "Manifesto 'Per un'Italia Europea e Libera' 2026/2027",
    vision: [
      "Integrazione europea federale verso gli 'Stati Uniti d'Europa'.",
      "Difesa intransigente delle libertà civili, dei diritti e dell'autodeterminazione individuale.",
      "Liberalizzazioni, concorrenza, riduzione del debito pubblico e fisco trasparente.",
      "Cannabis legale, eutanasia legale, Ius Soli e riforma dei canali d'immigrazione regolare."
    ],
    flagshipProposals: [
      {
        title: "Stati Uniti d'Europa",
        desc: "Superamento dei veti nazionali con esercito comune, bilancio federale e politica estera unica.",
        badgeText: "Integrazione UE",
        badgeBg: "bg-indigo-700 text-white"
      },
      {
        title: "Eutanasia & Cannabis Legale",
        desc: "Riforma dei diritti di autodeterminazione e legalizzazione del mercato della cannabis.",
        badgeText: "Diritti Civili",
        badgeBg: "bg-emerald-600 text-white"
      },
      {
        title: "Ius Soli / Ius Scholae",
        desc: "Cittadinanza per chi nasce in Italia o completa il percorso scolastico primario.",
        badgeText: "Cittadinanza",
        badgeBg: "bg-blue-600 text-white"
      }
    ],
    pillars: [
      {
        title: "Europa Federale e Riforme",
        iconName: "Globe",
        summary: "Più competenze a Bruxelles per affrontare le sfide globali del clima e della sicurezza.",
        points: [
          "Abolizione del diritto di veto in Consiglio Europeo a favore della maggioranza qualificata.",
          "Creazione di un Bilancio Federale Europeo finanziato con risorse proprie (Carbon Tax e Web Tax).",
          "Esercito Unico Europeo integrato nella struttura di sicurezza atlantica.",
          "Emissione di Eurobond permanenti per gli investimenti in tecnologia, transizione verde e sanità."
        ]
      },
      {
        title: "Diritti Civili e Diritti Umani",
        iconName: "Heart",
        summary: "Autodeterminazione della persona e piena parità di diritti di cittadinanza.",
        points: [
          "Approvazione della legge sul Fine Vita ed Eutanasia Legale.",
          "Legalizzazione della coltivazione e della vendita della cannabis regolamentata dallo Stato.",
          "Matrimonio egualitario per le coppie dello stesso sesso con diritto alle adozioni.",
          "Ius Soli e riforma dell'immigrazione per favorire l'ingresso di lavoratori regolari."
        ]
      },
      {
        title: "Economia, Concorrenza e Debito",
        iconName: "TrendingUp",
        summary: "Rigore sui conti pubblici, liberalizzazioni dei mercati e responsabilità fiscale.",
        points: [
          "Piano di rientro dal debito pubblico italiano per evitare sanzioni europee e tassi d'interesse alti.",
          "Liberalizzazione delle concessioni balneari, dei trasporti urbani (taxi/NCC) e dei servizi locali.",
          "Riduzione della spesa pubblica improduttiva e dei sussidi a fondo perduto alle aziende decotte.",
          "Tassazione trasparente sui redditi da lavoro con aliquote semplici e progressive."
        ]
      },
      {
        title: "Ambiente, Scienza e Ricerca",
        iconName: "Sparkles",
        summary: "Libertà della ricerca scientifica e sostenibilità basata sui dati.",
        points: [
          "Libertà di ricerca sulle biotecnologie agrarie (TEA) e sulle cellule staminali.",
          "Transizione ecologica guidata dal principio di neutralità tecnologica senza dogmi ideologici.",
          "Aumento dei fondi alla ricerca universitaria pubblica fino all'1.5% del PIL.",
          "Incentivi per l'efficienza energetica focalizzati sulla riduzione dell'inquinamento delle città."
        ]
      }
    ],
    keyDifferences: [
      "Propugnatore prioritario degli 'Stati Uniti d'Europa' e del superamento della sovranità nazionale.",
      "Avanzamento deciso sui diritti civili (eutanasia, cannabis, matrimonio egualitario).",
      "Approccio rigoroso sui conti pubblici e contrario alle sanatorie o condoni fiscali."
    ],
    officialSourceNote: "Estratto dal Manifesto Politico e dalle mozioni approvate al Congresso di +Europa."
  },

  libdem: {
    partyId: 'libdem',
    title: "Liberaldemocratici (Orizzonti Liberali) - Programma Ecofiscale",
    subtitle: "Consolidamento Fiscale, Lavoro, Concorrenza e Riforme di Mercato 2026/2027",
    statusBadge: "Proposta di Riforma Liberaldemocratica 2026/2027",
    vision: [
      "Rigore di bilancio e riduzione sostenibile del debito pubblico per tutelare i giovani.",
      "Riforma fiscale ecofiscale: meno tasse sul lavoro e sulle imprese, più tasse sulle esternalità inquinanti.",
      "Liberalizzazioni concorrenziali nei servizi pubblici, sanità e trasporti.",
      "Sostegno al merito scolastico, universitario e all'integrazione europea profonda."
    ],
    flagshipProposals: [
      {
        title: "Riforma Ecofiscale Lavoro-Ambiente",
        desc: "Taglio drastico delle aliquote IRPEF sul lavoro compensato dalla tassazione delle emissioni inquinanti.",
        badgeText: "Fisco & Clima",
        badgeBg: "bg-cyan-800 text-white"
      },
      {
        title: "Spendenza Zero Debito Pubblico",
        desc: "Regola di bilancio stringente per azzerare il deficit primario e ridurre il rapporto Debito/PIL.",
        badgeText: "Economia",
        badgeBg: "bg-blue-900 text-white"
      },
      {
        title: "Garantismo Penale & Efficienza Civile",
        desc: "Riforma della giustizia basata sui tempi certi dei processi e sulla responsabilità dei magistrati.",
        badgeText: "Giustizia",
        badgeBg: "bg-slate-800 text-white"
      }
    ],
    pillars: [
      {
        title: "Economia, Debito e Fisco",
        iconName: "Calculator",
        summary: "Responsabilità verso le generazioni future e fisco favorevole alla crescita.",
        points: [
          "Taglio strutturale delle aliquote IRPEF sui primi tre scaglioni per rilanciare la produttività.",
          "Abolizione dei bonus edilizi ed assistenziali non selettivi a favore di incentivi alla produzione.",
          "Mantenimento permanente della disciplina del Patto di Stabilità Europeo.",
          "Semplificazione del sistema tributario con eliminazione di micro-tasse e balzelli."
        ]
      },
      {
        title: "Lavoro, Mercato e Concorrenza",
        iconName: "Briefcase",
        summary: "Lavoro basato sulla produttività, contrattazione aziendale e concorrenza vera.",
        points: [
          "Potenziamento della contrattazione aziendale e territoriale rispetto al centralismo di categoria.",
          "Apertura del mercato nei settori protetti (servizi locali, farmacie, trasporti e balneari).",
          "Abolizione dei sussidi alle aziende non di mercato e riallocazione su formazione e ricerca.",
          "Sostegno alle startup innovative con esenzione totale da imposte nei primi 3 anni."
        ]
      },
      {
        title: "Istruzione, Sanità e Merito",
        iconName: "GraduationCap",
        summary: "Meritocrazia nelle valutazioni pubbliche e valorizzazione delle eccellenze.",
        points: [
          "Valutazione autonoma degli istituti scolastici con premi ai docenti più meritevoli.",
          "Piena integrazione tra sanità pubblica e sanità privata convenzionata efficiente.",
          "Potenziamento dei prestiti d'onore per gli studenti universitari svantaggiati.",
          "Digitalizzazione integrale della burocrazia sanitaria e delle prescrizioni fisiche."
        ]
      },
      {
        title: "Europa, Difesa e Giustizia",
        iconName: "Globe",
        summary: "Presenza attiva nell'Europa liberale ed efficienza dello Stato di diritto.",
        points: [
          "Integrazione europea in senso federale con superamento del diritto di veto.",
          "Separazione delle carriere in magistratura e tempi massimi inderogabili per i processi.",
          "Sostegno agli impegni NATO per la sicurezza atlantica e la difesa comune europea.",
          "Lotta alla burocrazia attraverso l'applicazione del principio 'Once Only'."
        ]
      }
    ],
    keyDifferences: [
      "Incoraggia una riforma ecofiscale che sposta il carico dalle tasse sul lavoro alle esternalità ambientali.",
      "Forte rigore sui conti pubblici con no tassativo a condoni, sanatorie e sussidi improduttivi.",
      "Accento sulla produttività del lavoro e sulla contrattazione aziendale decentrata."
    ],
    officialSourceNote: "Elaborazione dai documenti di Orizzonti Liberali firmati da Luigi Marattin e dal Centro Studi Liberaldemocratico."
  },

  vannacci: {
    partyId: 'vannacci',
    title: "Futuro Nazionale / Mov. Vannacci - Programma Identitario & Sovranista",
    subtitle: "Sovranità Nazionale, Difesa della Famiglia Tradizionale, Sicurezza e No alla Burocrazia UE 2026/2027",
    statusBadge: "Manifesto Politico Identitario 2026/2027",
    vision: [
      "Difesa intransigente dell'identità italiana, della sovranità e delle radici patriottiche.",
      "Contrarietà alle direttive green europee (case green, auto elettriche) ritenute dannose per l'economia.",
      "Polizia e Forze dell'Ordine al centro della sicurezza con tolleranza zero contro la criminalità.",
      "Tutela della famiglia naturale e promozione dei valori tradizionali della patria."
    ],
    flagshipProposals: [
      {
        title: "Stop Direttive Green UE",
        desc: "Blocco dell'applicazione in Italia delle direttive europee su Case Green e stop ai motori termici al 2035.",
        badgeText: "Sovranità Economica",
        badgeBg: "bg-emerald-900 text-white"
      },
      {
        title: "Tolleranza Zero & Legittima Difesa",
        desc: "Espansione del diritto di legittima difesa nei propri immobili e potenziamento delle tutele per la polizia.",
        badgeText: "Sicurezza",
        badgeBg: "bg-blue-900 text-white"
      },
      {
        title: "Prima gli Italiani nelle Aseggnazioni",
        desc: "Criteri di preferenza nazionale e residenza storica per l'accesso ad case popolari e sussidi pubblici.",
        badgeText: "Sociale Identitario",
        badgeBg: "bg-slate-800 text-white"
      }
    ],
    pillars: [
      {
        title: "Sovranità Nazionale e Rapporti con l'UE",
        iconName: "ShieldAlert",
        summary: "Primato della Costituzione e delle leggi italiane sui regolamenti e direttive di Bruxelles.",
        points: [
          "Revisione dei trattati europei per restituire sovranità legislativa e monetaria al Parlamento italiano.",
          "Opposizione allo stop delle auto a benzina/diesel dal 2035 e alla direttiva 'Case Green'.",
          "Difesa dei prodotti agroalimentari e manifatturieri italiani dal cibo sintetico e dalle farine d'insetto.",
          "Protezione dei confini nazionali con impiego permanente dell'Esercito per il pattugliamento."
        ]
      },
      {
        title: "Sicurezza, Legittima Difesa e Giustizia",
        iconName: "ShieldCheck",
        summary: "Inasprimento delle pene per i reati contro la persona, le forze dell'ordine e la proprietà privata.",
        points: [
          "Legittima difesa sempre presunta all'interno delle abitazioni e delle attività commerciali.",
          "Sgombero immediato entro 24 ore di qualsiasi immobile occupato abusivamente.",
          "Certezza della pena con abolizione dei benefici penitenziari per reati gravi e reiterati.",
          "Aumento degli stipendi e delle tutele legali per il personale delle Forze dell'Ordine e Armate."
        ]
      },
      {
        title: "Famiglia, Cultura e Società",
        iconName: "Heart",
        summary: "Sostegno esclusivo alla famiglia tradizionale e promozione dell'orgoglio nazionale.",
        points: [
          "Contrasto fermo all'ideologia gender e alla propaganda LGBT nelle scuole pubbliche.",
          "Incentivi economici riservati alle famiglie italiane per incentivare la natalità.",
          "Promozione della storia, della cultura e delle tradizioni nazionali nei programmi scolastici.",
          "Contrarietà a qualsiasi forma di Ius Soli o Ius Scholae: cittadinanza solo a chi ama e difende la Patria."
        ]
      },
      {
        title: "Economia e Lavoro",
        iconName: "TrendingUp",
        summary: "Semplificazione fiscale per la produzione nazionale e no alla finanza speculativa.",
        points: [
          "Riduzione della pressione fiscale sulle piccole imprese artigiane e commerciali italiane.",
          "Protezionismo intelligente a difesa dei prodotti tipici italiani dall'invasione estera a basso costo.",
          "Semplificazione burocratica drastica per la micro-impresa familiare.",
          "Promozione dell'autonomia energetica attraverso l'uso delle risorse nazionali (gas, geotermico, idroelettrico)."
        ]
      }
    ],
    keyDifferences: [
      "Forte impronta identitaria, nazionalista e contraria alle politiche ideologiche ecologiste dell'UE.",
      "Proposta di legittima difesa senza limiti all'interno della proprietà privata.",
      "Rifiuto categorico dello Ius Soli o dello Ius Scholae e contrarietà all'ideologia di genere."
    ],
    officialSourceNote: "Sintesi ricavata dalle dichiarazioni pubbliche e dagli atti del Movimento Futuro Nazionale."
  },

  scn: {
    partyId: 'scn',
    title: "Sud chiama Nord - Programma Autonomista Meridionale",
    subtitle: "Equità Territoriale, Risorse al Sud, Infrastrutture e Autonomia Equa 2026/2027",
    statusBadge: "Carta di Rilancio del Mezzogiorno e delle Periferie 2026/2027",
    vision: [
      "Rilancio strategico del Mezzogiorno d'Italia e superamento del divario storico Nord-Sud.",
      "Contrarietà all'Autonomia Differenziata della Legge Calderoli se priva dei fondi di perequazione.",
      "Sbloccare gli investimenti in ferrovie, ospedali e porti nel Sud Italia.",
      "Lotta agli sprechi della politica, sburocratizzazione locale e supporto ai Comuni."
    ],
    flagshipProposals: [
      {
        title: "No all'Autonomia Spacca-Italia",
        desc: "Blocco della Legge Calderoli finché non vengono stanziati i 80 miliardi necessari per i LEP al Sud.",
        badgeText: "Equità Territoriale",
        badgeBg: "bg-amber-800 text-white"
      },
      {
        title: "Piano Straordinario Ferrovie del Sud",
        desc: "Adozione di un piano decennale per raddoppiare e elettrificare le linee ferroviarie in Sicilia, Calabria e Puglia.",
        badgeText: "Infrastrutture",
        badgeBg: "bg-blue-600 text-white"
      },
      {
        title: "Fiscalità di Vantaggio per i Giovani che restano",
        desc: "Aliquota IRPEF azzerata per 5 anni per i giovani laureati che decidono di lavorare al Sud.",
        badgeText: "Lavoro & Giovani",
        badgeBg: "bg-emerald-600 text-white"
      }
    ],
    pillars: [
      {
        title: "Equità Territoriale e Infrastrutture",
        iconName: "MapPin",
        summary: "Garantire parità di diritti infrastrutturali tra il Nord e il Mezzogiorno d'Italia.",
        points: [
          "Applicazione reale della clausola del 34% delle spese in conto capitale riservate al Sud.",
          "Modernizzazione immediata dei porti di Taranto, Gioia Tauro, Augusta e Palermo.",
          "Continuità territoriale aerea e marittima a tariffe calmierate per i residenti insulari.",
          "Completamento delle tratte autostradali e ferroviarie ad alta capacità nel Meridione."
        ]
      },
      {
        title: "Sanità, Servizi e Autonomia",
        iconName: "HeartPulse",
        summary: "Servizio sanitario di qualità anche nei piccoli comuni del Sud.",
        points: [
          "Superamento dei piani di rientro della sanità del Sud per riaprire gli ospedali di provincia.",
          "Fondo di perequazione obbligatorio finanziato prima di ogni intesa su autonomia differenziata.",
          "Sostegno ai Comuni in dissesto finanziario per evitare il blocco dei servizi essenziali.",
          "Potenziamento della medicina di base e dei presidi di continuità assistenziale."
        ]
      },
      {
        title: "Lavoro, Imprese e Giovani",
        iconName: "Briefcase",
        summary: "Trattenere le intelligenze e fermare lo spopolamento dei borghi del Sud.",
        points: [
          "Fiscalità di vantaggio permanente nelle ZES (Zone Economiche Speciali) del Mezzogiorno.",
          "Incentivi a fondo perduto per i giovani che avviano un'attività agricola o turistica nei comuni interni.",
          "Deburocratizzazione dei bandi regionali ed europei per l'accesso ai fondi PNRR.",
          "Incentivi per lo smart working di chi lavora per aziende del Nord vivendo al Sud."
        ]
      },
      {
        title: "Lotta agli Sprechi e Trasparenza",
        iconName: "Coins",
        summary: "Efficienza dell'amministrazione pubblica e lotta ai privilegi della casta.",
        points: [
          "Taglio delle consulenze d'oro della politica regionale ed eliminazione degli enti inutili.",
          "Trasparenza totale sugli appalti pubblici con pubblicazione in tempo reale dei costi.",
          "Riforma della burocrazia regionale con premi legati al raggiungimento dei risultati.",
          "Valorizzazione del patrimonio culturale, archeologico e naturale meridionale."
        ]
      }
    ],
    keyDifferences: [
      "Focalizzazione prioritaria sui diritti e sulle risorse del Mezzogiorno e delle isole.",
      "Opposizione all'Autonomia Differenziata sbilanciata a favore delle regioni settentrionali.",
      "Battaglia forte per la continuità territoriale e per le tariffe agevolate sui trasporti per i residenti del Sud."
    ],
    officialSourceNote: "Basato sulle mozioni approvate dall'Assemblea di Sud chiama Nord guidata da Cateno De Luca."
  },

  dsp: {
    partyId: 'dsp',
    title: "Democrazia Sovrana e Popolare - Programma Anti-UE & Anti-NATO",
    subtitle: "Sovranità Monetaria, Uscita dalla NATO, Tutela del Lavoro e Costituzione del 1948",
    statusBadge: "Manifesto per la Sovranità e la Pace 2026/2027",
    vision: [
      "Uscita dell'Italia dall'Unione Europea (Italexit) e riconquista della sovranità monetaria.",
      "Uscita immediata dalla NATO e neutralità internazionale del Paese.",
      "Attuazione integrale dei principi sociali della Costituzione del 1948.",
      "Nazionalizzazione dei settori strategici (energia, banche, autostrade, telecomunicazioni)."
    ],
    flagshipProposals: [
      {
        title: "Uscita dalla NATO e Neutralità",
        desc: "Chiusura delle basi militari straniere in Italia e stop all'invio di armi nei conflitti esteri.",
        badgeText: "Sovranità & Pace",
        badgeBg: "bg-red-900 text-white"
      },
      {
        title: "Sovranità Monetaria e Ritorno alla Lira",
        desc: "Recupero della battitura della moneta nazionale da parte della Banca d'Italia sotto controllo pubblico.",
        badgeText: "Economia Popolare",
        badgeBg: "bg-amber-800 text-white"
      },
      {
        title: "Nazionalizzazione dell'Energia",
        desc: "Monopolio statale di ENI ed Enel con azzeramento dei profitti speculativi sulle bollette dei cittadini.",
        badgeText: "Energia Pubblica",
        badgeBg: "bg-blue-900 text-white"
      }
    ],
    pillars: [
      {
        title: "Sovranità Monetaria ed Economia Pubblica",
        iconName: "Coins",
        summary: "Liberare l'Italia dai vincoli del Patto di Stabilità e dai mercati finanziari speculativi.",
        points: [
          "Recupero della sovranità monetaria con moneta nazionale emessa dallo Stato per finanziare la spesa pubblica.",
          "Nazionalizzazione della Banca d'Italia e dei principali gruppi bancari d'interesse nazionale.",
          "Nazionalizzazione di autostrade, reti energetiche, idriche e delle telecomunicazioni.",
          "Cancellazione dei vincoli di bilancio europei per garantire piena occupazione."
        ]
      },
      {
        title: "Politica Estera, Difesa e Pace",
        iconName: "Globe",
        summary: "Uscita dalle alleanze militari occidentali e politica di pace multipolare.",
        points: [
          "Recesso immediato dai trattati della NATO e smantellamento delle basi USA/NATO in Italia.",
          "Sospensione di qualsiasi sanzione economica unilaterale che danneggia l'export italiano.",
          "Adesione strategica alle nuove forme di cooperazione con i Paesi BRICS e Paesi emergenti.",
          "Divieto costituzionale permanente di partecipazione a guerre di aggressione estere."
        ]
      },
      {
        title: "Lavoro, Sanità e Diritti Sociali",
        iconName: "Briefcase",
        summary: "Diritto al lavoro garantito dallo Stato e sanità 100% pubblica e gratuita.",
        points: [
          "Piano di lavoro garantito pubblico per azzerare la disoccupazione involontaria.",
          "Abolizione di tutte le riforme precarizzanti del lavoro (Jobs Act, contratti a termine indiscriminati).",
          "Sanità totalmente statale con divieto di profitto privato sulle prestazioni sanitarie.",
          "Pensione a 60 anni o dopo 35 anni di contributi senza penalizzazioni."
        ]
      },
      {
        title: "Istituzioni e Costituzione del 1948",
        iconName: "ShieldCheck",
        summary: "Ritorno al modello della Repubblica democratica fondata sul lavoro.",
        points: [
          "Inapplicabilità di direttive o regolamenti europei contrari agli articoli 1-54 della Costituzione.",
          "No al Premierato e no all'Autonomia Differenziata ritenuti sovvertimenti costituzionali.",
          "Ripristino del controllo statale sui prezzi dei beni di prima necessità e delle tariffe.",
          "Tutela della sovranità alimentare e divieto di cibi sintetici e OGM."
        ]
      }
    ],
    keyDifferences: [
      "Propone l'uscita diretta sia dall'Unione Europea che dalla NATO.",
      "Modello economico basato sulle nazionalizzazioni di energia, banche e servizi essenziali.",
      "Rifiuto totale della finanza internazionale e delle sanzioni economiche estere."
    ],
    officialSourceNote: "Sintesi approvata dal Comitato Promotore di Democrazia Sovrana e Popolare (Marco Rizzo & Francesco Toscano)."
  }
};
