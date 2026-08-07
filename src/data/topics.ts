import { TopicData } from '../types';

export const TOPICS: TopicData[] = [
  {
    id: 'difesa-nato',
    title: 'Difesa, NATO e Spese Militari',
    iconName: 'Shield',
    category: 'Esteri & Difesa',
    tags: ['NATO', '2% PIL', 'Ucraina', 'Difesa Europea', 'Leva'],
    shortDesc: 'Aumento delle spese militari al 2% del PIL, supporto all\'Ucraina e costruzione di un esercito comune europeo.',
    problemOverview: `Il dibattito sulla difesa in Italia è esploso con la guerra in Ucraina e la richiesta formale della NATO di portare la spesa militare dei paesi membri ad almeno il 2% del PIL. L'Italia attualmente spende circa l'1.46% del PIL (~32 miliardi di euro all'anno). La sfida principale consiste nel conciliare i vincoli di bilancio e le esigenze di spesa sociale con gli impegni internazionali e il progetto di una Difesa comune europea.`,
    keyStatistics: [
      { label: 'Spesa Militare Attuale', value: '1,46% PIL', source: 'Rapporto NATO 2024', subtext: 'Circa 32 miliardi €/anno' },
      { label: 'Obiettivo NATO', value: '2,0% PIL', source: 'Vertice NATO di Galles', subtext: 'Mancherebbero ~10-12 mld €/anno' },
      { label: 'Supporto All\'Ucraina', value: '10 Pacchetti', source: 'Ministero della Difesa 2024', subtext: 'Forniture militari e umanitarie' },
    ],
    currentLawContext: 'L\'Italia si è impegnata in sede NATO ad incrementare progressivamente la spesa militare. L\'ultimo Documento Programmatico pluriennale della Difesa prevede un percorso di avvicinamento al 2% entro il 2028-2030.',
    stances: [
      {
        partyId: 'fdi',
        stance: 'favorevole',
        summary: 'Rispettare gli impegni NATO del 2% del PIL e sostenere l\'Ucraina senza esitazioni.',
        details: [
          'Aumento graduale del budget Difesa per raggiungere il target NATO del 2%.',
          'Sostegno militare continuativo a Kyiv e forte collocamento euroatlantico.',
          'Supporto all\'integrazione dell\'industria della difesa europea (Leonardo, Fincantieri).'
        ],
        keyProposal: 'Aumento graduale spesa al 2% e consolidamento pilastro europeo nella NATO.',
        quotes: [
          { text: "La libertà ha un costo. Se chiediamo sicurezza agli alleati, dobbiamo fare la nostra parte senza ambiguità.", speaker: "Giorgia Meloni", role: "Presidente del Consiglio (FdI)", date: "2024" }
        ]
      },
      {
        partyId: 'pd',
        stance: 'condizionato',
        summary: 'Priorità alla Difesa comune europea anziché corsa agli riarmi nazionali.',
        details: [
          'Sostegno alla difesa legittima dell\'Ucraina, ma con priorità per la diplomazia.',
          'Favorevoli ad acquisti militari congiunti UE per evitare sprechi e sovrapposizioni tra 27 eserciti.',
          'Avversione ad aumenti ciechi delle spese nazionali a scapito di sanità e scuola.'
        ],
        keyProposal: 'Sostituzione graduale della spesa militare nazionale con un vero bilancio della Difesa UE.',
        quotes: [
          { text: "Non serve che ciascun Paese aumenti le spese in ordine sparso; serve una vera Difesa comune europea che razionalizzi le risorse.", speaker: "Elly Schlein", role: "Segretaria PD", date: "2024" }
        ]
      },
      {
        partyId: 'm5s',
        stance: 'contrario',
        summary: 'Forte contrarietà all\'aumento delle spese militari e all\'invio di nuove armi.',
        details: [
          'No al vincolo del 2% del PIL da destinare alle armi: risorse da spostare su sanità e scuola.',
          'Stop all\'invio di armi letali ad oltranza in Ucraina; tavolo negoziale immediato.',
          'Revisione del ruolo dell\'Italia nel settore bellico.'
        ],
        keyProposal: 'Moratoria sulle spese militari e piano diplomatico di pace.',
        quotes: [
          { text: "Togliere soldi alle famiglie e agli ospedali per comprare carri armati e caccia bombardieri è una follia irresponsabile.", speaker: "Giuseppe Conte", role: "Presidente M5S", date: "2024" }
        ]
      },
      {
        partyId: 'lega',
        stance: 'favorevole',
        summary: 'Sostegno agli impegni NATO, ma con riserve sulle spese estere e proposta della leva volontaria.',
        details: [
          'Raggiungimento del 2% NATO ma subordinato alla tenuta dei conti pubblici.',
          'Iniziativa per il ripristino di una forma di Leva Militare / Servizio Civile Volontario di 6 mesi per i giovani.',
          'Prudenza sulle autorizzazioni all\'uso di armi italiane in territorio russo.'
        ],
        keyProposal: 'Servizio Militare/Civile volontario giovanile e potenziamento difesa dei confini.',
        quotes: [
          { text: "Nessun soldato italiano in terra ucraina. Riapriamo la leva volontaria per formare i nostri giovani alla cittadinanza e al soccorso.", speaker: "Matteo Salvini", role: "Leader Lega", date: "2024" }
        ]
      },
      {
        partyId: 'fi',
        stance: 'favorevole',
        summary: 'Euroatlantismo di ferro e spinta decisa per la Difesa Comune Europea.',
        details: [
          'Pieno rispetto degli obblighi NATO al 2%.',
          'Promozione del pilastro difensivo dell\'Unione Europea con comando unico.',
          'Supporto incondizionato all\'alleanza transatlantica.'
        ],
        keyProposal: 'Creazione immediata di un Esercito Europeo integrato con la NATO.',
        quotes: [
          { text: "Senza una Difesa europea unica l'Europa non conterà mai nulla nello scacchiere geopolitico globale.", speaker: "Antonio Tajani", role: "Ministro degli Esteri (FI)", date: "2024" }
        ]
      },
      {
        partyId: 'avs',
        stance: 'contrario',
        summary: 'Opposizione radicale al riarmo e disarmo progressivo.',
        details: [
          'Voto contrario al raggiungimento del 2% PIL.',
          'Stop alla produzione e all\'esportazione di armi.',
          'Riconversione delle spese militari in investimenti per il clima e il welfare.'
        ],
        keyProposal: 'Taglio immediato del budget militare del 20% e fondi convertiti in transizione ecologica.',
        quotes: [
          { text: "L'unica sicurezza vera è la giustizia climatica e sociale. Più armi significano solo più guerre.", speaker: "Nicola Fratoianni", role: "Co-portavoce AVS", date: "2024" }
        ]
      },
      {
        partyId: 'azione',
        stance: 'favorevole',
        summary: 'Raggiungimento rapido del target NATO e difesa comune europea strutturata.',
        details: [
          'Raggiungimento del 2% in tempi certi senza ambiguità demagogiche.',
          'Lavoro attivo per la Difesa Unica Europea e la centralizzazione degli appalti di sicurezza.',
          'Supporto militare ed economico continuo all\'Ucraina.'
        ],
        keyProposal: 'Integrazione forze armate UE e piano industriale della difesa.',
        quotes: [
          { text: "Le democrazie si difendono con la forza e la deterrenza, non con i pii desideri. Rispettiamo gli impegni NATO.", speaker: "Carlo Calenda", role: "Leader Azione", date: "2024" }
        ]
      },
      {
        partyId: 'iv',
        stance: 'favorevole',
        summary: 'Sostegno agli impegni NATO ed Esercito Europeo con Unione Politica.',
        details: [
          'Sostegno al target 2% NATO.',
          'Superamento del voto all\'unanimità in UE anche sulla politica estera e di difesa.'
        ],
        keyProposal: 'Esercito unico europeo con abolizione del diritto di veto in UE.',
        quotes: [
          { text: "L'Unione Europea deve parlare con una sola voce geopolitica. Serve un esercito comune subito.", speaker: "Matteo Renzi", role: "Leader IV", date: "2024" }
        ]
      },
      {
        partyId: 'piueuropa',
        stance: 'condizionato',
        summary: 'No all\'aumento delle spese nazionali a pioggia, sì alla Difesa unica UE con debito comune.',
        details: [
          'Subordinare gli aumenti di spesa alla costruzione di un comando unico UE.',
          'Emissione di Eurobond per la Sicurezza e la Difesa Europea.'
        ],
        keyProposal: 'Eurobond per la difesa europea e integrazione militare immediata.',
        quotes: [
          { text: "Dividere la spesa in 27 eserciti è inefficiente. Creiamo gli Stati Uniti d'Europa con una difesa comune.", speaker: "Riccardo Magi", role: "Segretario +Europa", date: "2024" }
        ]
      }
    ]
  },
  {
    id: 'energia-nucleare',
    title: 'Energia, Nucleare e Transizione Ecologica',
    iconName: 'Zap',
    category: 'Ambiente & Energia',
    tags: ['Nucleare SMR', 'Rinnovabili', 'Gas', 'Decarbonizzazione', 'Bollette'],
    shortDesc: 'Ritorno al nucleare di nuova generazione (SMR/IV gen), accelerazione su solare ed eolico e neutralità climatica.',
    problemOverview: `L'Italia ha chiuso le proprie centrali nucleari a seguito dei referendum del 1987 e del 2011. Oggi dipendiamo per oltre il 40% dal gas naturale per la produzione elettrica e importiamo circa il 15% dell'energia dai paesi vicini. Con l'impennata dei costi energetici e gli obiettivi UE al 2030 (abbattimento emissioni del 55%), si scontrano due visioni: chi propone il ritorno al nucleare sostenibile (SMR - Small Modular Reactors) e chi punta esclusivamente sul 100% di energia rinnovabile e accumuli.`,
    keyStatistics: [
      { label: 'Dipendenza da Gas', value: '42%', source: 'TERNA / GSE 2024', subtext: 'Per la generazione elettrica' },
      { label: 'Quota Rinnovabili', value: '38%', source: 'GSE 2024', subtext: 'Obiettivo 2030: >65%' },
      { label: 'Import Energia', value: '15-18%', source: 'ARERA', subtext: 'Importata da Francia e Svizzera' },
    ],
    currentLawContext: 'L\'Italia non produce energia nucleare da 35 anni. Nel 2023 la Camera ha approvato una mozione che impegna il Governo a valutare l\'inserimento del nucleare di ultima generazione nel mix energetico nazionale.',
    stances: [
      {
        partyId: 'fdi',
        stance: 'favorevole',
        summary: 'Apertura al nucleare di ultima generazione (SMR) e pragmatismo della transizione senza ideologia.',
        details: [
          'Sostegno alla ricerca ed installazione di reattori modulari SMR e quarta generazione.',
          'Sviluppo fonti rinnovabili senza penalizzare l\'agricoltura o il paesaggio.',
          'Neutralità tecnologica: uso transitorio del gas per garantire prezzi bassi in bolletta.'
        ],
        keyProposal: 'Inserimento del nucleare pulito nel Piano Nazionale Integrato Energia e Clima (PNIEC).',
        quotes: [
          { text: "La transizione verde non deve trasformarsi in un de-industrializzazione. Serve il nucleare di nuova generazione per l'indipendenza energetica.", speaker: "Giorgia Meloni", role: "Premier (FdI)", date: "2024" }
        ]
      },
      {
        partyId: 'pd',
        stance: 'contrario',
        summary: 'Priorità assoluta a solare, eolico e accumuli; scetticismo sui tempi del nucleare.',
        details: [
          'Concentrare le risorse economiche su fotovoltaico, eolico off-shore e comunità energetiche.',
          'Il nucleare da fissione richiede 15-20 anni e costi enormi: non risolve la crisi attuale.',
          'Sostegno alla ricerca sulla fusione pulita per il futuro a lungo termine.'
        ],
        keyProposal: 'Semplificazione per l\'installazione di 10 GW/anno di rinnovabili e piano accumuli.',
        quotes: [
          { text: "Non perdiamo tempo con il nucleare da fissione che costa troppo e arriva fuori tempo massimo. La risposta subitanea sono le rinnovabili.", speaker: "Elly Schlein", role: "Segretaria PD", date: "2024" }
        ]
      },
      {
        partyId: 'm5s',
        stance: 'contrario',
        summary: 'No secco al nucleare; 100% rinnovabili, efficienza energetica e Superbonus ecologico.',
        details: [
          'Rispettare l\'esito dei referendum popolari contro il nucleare.',
          'Superbonus per la riqualificazione energetica degli edifici (Casa Green).',
          'Sviluppo di accumuli idroelettrici e batterie per superare la discontinuità energetica.'
        ],
        keyProposal: 'Creazione del Ministero della Transizione Ecologica potenziato e legge sulle Comunità Energetiche.',
        quotes: [
          { text: "Il nucleare è una favola costosa del passato. Il futuro è il sole, il vento e il risparmio energetico.", speaker: "Giuseppe Conte", role: "Presidente M5S", date: "2024" }
        ]
      },
      {
        partyId: 'lega',
        stance: 'favorevole',
        summary: 'Ritorno al nucleare subito con reattori puliti per abbattere le bollette del 30%.',
        details: [
          'Costruzione di piccoli reattori SMR entro il 2032.',
          'Abolizione dei vincoli europei ritenuti penalizzanti (es. direttiva auto elettriche 2035).',
          'Sostegno ai biocarburanti ed e-fuels per la mobilità.'
        ],
        keyProposal: 'Progetto di legge per la riapertura dei siti nucleari in Italia entro 8 anni.',
        quotes: [
          { text: "L'Italia è l'unico Paese del G7 senza nucleare e pagiamo l'energia il doppio degli altri. Portiamo subito i reattori puliti di IV generazione.", speaker: "Matteo Salvini", role: "Ministro Infrastrutture (Lega)", date: "2024" }
        ]
      },
      {
        partyId: 'fi',
        stance: 'favorevole',
        summary: 'Sì convinto al nucleare pulito per la competitività delle imprese italiane.',
        details: [
          'Proposta di legge per il reinserimento del nucleare sostenibile nel mix energetico.',
          'Sostegno a partnership industriali con la Francia (EDF/Ansaldo Energia).',
          'Incentivi per le rinnovabili affiancate dal carico di base nucleare.'
        ],
        keyProposal: 'Legge quadro per l\'autorizzazione e la sicurezza delle centrali SMR.',
        quotes: [
          { text: "Senza nucleare le nostre aziende manifatturiere continueranno ad avere costi dell'energia insostenibili rispetto a quelle estere.", speaker: "Antonio Tajani", role: "Leader FI", date: "2024" }
        ]
      },
      {
        partyId: 'avs',
        stance: 'contrario',
        summary: 'Opposizione netta al nucleare; transizione ecologica 100% rinnovabile e legge Clima.',
        details: [
          'No a qualsiasi forma di fissione nucleare, scorciatoia pericolosa e con scorie irrisolte.',
          'Obiettivo 100% energia elettrica rinnovabile entro il 2035.',
          'Tassazione pesante sui profitti dei colossi fossili.'
        ],
        keyProposal: 'Legge Clima Italia con stop ai sussidi ambientalmente dannosi (SAD) da 20 mld €.',
        quotes: [
          { text: "Rinunciare alle rinnovabili per inseguire la chimera del nucleare è un crimine contro il pianeta e l'economia pulita.", speaker: "Angelo Bonelli", role: "Co-portavoce AVS", date: "2024" }
        ]
      },
      {
        partyId: 'azione',
        stance: 'favorevole',
        summary: 'Sì scientifico al nucleare nel mix energetico (40% rinnovabili, 30% nucleare, 30% altro).',
        details: [
          'Piano energetico basato sui dati del IPCC e della comunità scientifica.',
          'Costruzione di 8 centrali nucleari di nuova generazione per garantire il carico stazionario.',
          'Semplificazione burocratica drastica per i parchi eolici e solari.'
        ],
        keyProposal: 'Piano Energetico Nazionale con quota nucleare target al 2040.',
        quotes: [
          { text: "Chi dice 'solo rinnovabili' senza nucleare mente agli italiani: quando non c'è sole e vento serve il gas. Il nucleare è indispensabile.", speaker: "Carlo Calenda", role: "Leader Azione", date: "2024" }
        ]
      },
      {
        partyId: 'iv',
        stance: 'favorevole',
        summary: 'Sì al nucleare pulito e sblocco immediato delle trivelle per il gas azionale.',
        details: [
          'Sostegno all\'energia nucleare moderna.',
          'Sblocco delle estrazioni di gas in Adriatico per calmierare subito i prezzi.',
          'Riconversione ecologica guidata dall\'innovazione tecnologica.'
        ],
        keyProposal: 'Piano straordinario di indipendenza energetica (Gas + Nucleare + Rinnovabili).',
        quotes: [
          { text: "L'ideologia del 'No a tutto' ci ha resi dipendenti dal gas russo. Serve coraggio: trivelle e nucleare pulito subito.", speaker: "Matteo Renzi", role: "Leader IV", date: "2024" }
        ]
      },
      {
        partyId: 'piueuropa',
        stance: 'favorevole',
        summary: 'Sì alla neutralità tecnologica UE: rinnovabili e nucleare senza pregiudizi.',
        details: [
          'Inclusione del nucleare nella tassonomia verde europea.',
          'Superamento dei veti locali (NIMBY) sulle pale eoliche e rigassificatori.',
          'Carbon Tax alle frontiere esterne dell\'Unione Europea.'
        ],
        keyProposal: 'Mercato unico dell\'energia europeo con mix decarbonizzato.',
        quotes: [
          { text: "La scienza ci dice che per azzerare le emissioni CO2 servono sia le rinnovabili sia l'atomo sicuro.", speaker: "Riccardo Magi", role: "Segretario +Europa", date: "2024" }
        ]
      }
    ]
  },
  {
    id: 'tasse-fisco',
    title: 'Tasse, Fisco e Cuneo Fiscale',
    iconName: 'Receipt',
    category: 'Economia & Lavoro',
    tags: ['Flat Tax', 'IRPEF', 'Cuneo Fiscale', 'Evasione', 'Concordato'],
    shortDesc: 'Aliquota unica Flat Tax vs IRPEF progressiva a scaglioni, taglio delle tasse sui salari e contrasto all\'evasione.',
    problemOverview: `L'Italia registra un tasso di pressione fiscale complessivo di circa il 42.5% del PIL, con un'evasione fiscale stimata dall'Istat in oltre 80-90 miliardi di euro all'anno. I punti di forte contrapposizione riguardano l'IRPEF: il Centrodestra propone una riduzione delle aliquote verso un'aliquota unica (Flat Tax), mentre il Centrosinistra sostiene la tassazione progressiva ex art. 53 Costituzione e il taglio strutturale del cuneo fiscale a beneficio esclusivo dei lavoratori dipendenti a basso e medio reddito.`,
    keyStatistics: [
      { label: 'Pressione Fiscale', value: '42,5% PIL', source: 'ISTAT / DEF 2024', subtext: 'Tra le più alte in Europa' },
      { label: 'Evasione Fiscale', value: '~83 Mld €', source: 'Relazione MEF 2024', subtext: 'Tax Gap annuo stimato' },
      { label: 'Taglio Cuneo Fiscale', value: '6-7 punti', source: 'Legge di Bilancio', subtext: 'Per redditi fino a 35.000 €' },
    ],
    currentLawContext: 'Riforma IRPEF a 3 aliquote (23%, 35%, 43%) e taglio del cuneo fiscale fino a 35mila euro. Introduzione del Concordato Preventivo Biennale per gli autonomi e Flat Tax al 15% per le P.IVA fino a 85mila euro.',
    stances: [
      {
        partyId: 'fdi',
        stance: 'favorevole',
        summary: 'Aliquota unica Flat Tax progressiva, finta di pace fiscale e patto di fiducia con i contribuenti.',
        details: [
          'Estensione della Flat Tax per le partite IVA ed introduzione della Flat Tax incrementale per le imprese.',
          'Principio del "Chi più assume meno paga" (super deduzione sui costi del lavoro per nuove assunzioni).',
          'Concordato preventivo biennale e rottamazione delle cartelle esattoriali inesigibili.'
        ],
        keyProposal: 'Piena attuazione della Riforma Fiscale con riduzione IRPEF al ceto medio.',
        quotes: [
          { text: "Il fisco non deve essere un nemico persecutore ma un alleato di chi produce ricchezza e posti di lavoro.", speaker: "Giorgia Meloni", role: "Premier (FdI)", date: "2024" }
        ]
      },
      {
        partyId: 'pd',
        stance: 'contrario',
        summary: 'Progressività fiscale ex art. 53 Costituzione, lotta seria all’evasione e taglio IRPEF sui dipendenti.',
        details: [
          'Netta contrarietà alla Flat Tax, ritenuta iniqua e incostituzionale perché favorisce i redditi alti.',
          'Taglio strutturale e permanente del cuneo fiscale sui salari bassi interamente a carico dello Stato.',
          'Lotta incisiva all\'evasione con fatturazione elettronica, incrocio banche dati e no a condoni.'
        ],
        keyProposal: 'Riforma dell\'IRPEF a scaglioni progressivi con detrazione unica per lavoro e figli.',
        quotes: [
          { text: "La Flat Tax è una ingiustizia sociale che fa pagare le stesse tasse in percentuale al milionario e all'operaio.", speaker: "Elly Schlein", role: "Segretaria PD", date: "2024" }
        ]
      },
      {
        partyId: 'm5s',
        stance: 'alternativa',
        summary: 'Tassazione straordinaria sui sovrapprofitti di banche e colossi bellici/energetici e detassazione salari.',
        details: [
          'Prelievo sui sovrapprofitti accumulati dagli istituti bancari ed energetici da destinare a sanità e famiglie.',
          'Cuneo fiscale azzerato per chi assume giovani a tempo indeterminato.',
          'Contrarietà ai condoni e alla Flat Tax favorevole agli autonomi più benestanti.'
        ],
        keyProposal: 'Tassa sui sovrapprofitti bancari al 40% per finanziare i mutui prima casa e stipendi.',
        quotes: [
          { text: "Mentre le banche fanno extra-profitti da miliardi con i tassi alti, la gente non ce la fa a pagare le bollette. Va redistribuita ricchezza.", speaker: "Giuseppe Conte", role: "Presidente M5S", date: "2024" }
        ]
      },
      {
        partyId: 'lega',
        stance: 'favorevole',
        summary: 'Flat Tax al 15% per tutti fino a 100.000 euro e Pace Fiscale totale con la rottamazione quinquies.',
        details: [
          'Aumento del tetto della Flat Tax autonomi da 85.000 a 100.000 euro di fatturato.',
          'Estensione graduale dell\'aliquota secca del 15% anche alle famiglie e ai lavoratori dipendenti.',
          'Pace fiscale e chiusura definitiva del contenzioso con l\'Agenzia delle Entrate.'
        ],
        keyProposal: 'Rottamazione totale delle cartelle esattoriali e Flat Tax estesa ai dipendenti.',
        quotes: [
          { text: "Liberare milioni di italiani dal giogo delle cartelle esattoriali è un atto di civiltà. Flat Tax per tutti è la nostra meta.", speaker: "Matteo Salvini", role: "Leader Lega", date: "2024" }
        ]
      },
      {
        partyId: 'fi',
        stance: 'favorevole',
        summary: 'Riduzione dell\'aliquota IRPEF intermedia dal 35% al 33% ed azzeramento tasse sui giovani imprenditori.',
        details: [
          'Innalzamento della no-tax area per i pensionati e giovani.',
          'Riduzione al 33% del secondo scaglione IRPEF fino a 60.000 euro di reddito.',
          'Abolizione progressiva dell\'IRAP per tutte le categorie.'
        ],
        keyProposal: 'Taglio IRPEF ceto medio e defiscalizzazione totale del welfare aziendale.',
        quotes: [
          { text: "Diminuire le tasse al ceto medio è l'unico modo reale per riattivare i consumi e la crescita economica.", speaker: "Antonio Tajani", role: "Leader FI", date: "2024" }
        ]
      },
      {
        partyId: 'avs',
        stance: 'contrario',
        summary: 'Imposta patrimoniale sui grandi patrimoni (>5 milioni €) e forte progressività IRPEF.',
        details: [
          'Introduzione di una Tassa sui Grandi Patrimoni sopra i 5 milioni di euro per finanziare istruzione e sanità.',
          'Cancellazione immediata di tutte le norme di Flat Tax e concordati fiscali.',
          'Aumento della tassazione sulle rendite finanziarie e speculative.'
        ],
        keyProposal: 'Patrimoniale progressiva e reintroduzione della tassazione massima per i super-ricchi.',
        quotes: [
          { text: "È immorale che un lavoratore paghi in percentuale più tasse sul salario di quante ne paghi un miliardario sulle sue rendite.", speaker: "Nicola Fratoianni", role: "Co-portavoce AVS", date: "2024" }
        ]
      },
      {
        partyId: 'azione',
        stance: 'condizionato',
        summary: 'No ai condoni fiscali; azzeramento tasse per giovani under 30 e revisione spesa pubblica.',
        details: [
          'Cancellazione totale dell\'IRPEF per i lavoratori under 25 e dimezzamento per gli under 30.',
          'Guerra aperta all\'evasione fiscale senza sanatorie né paci fiscali.',
          'Semplificazione del codice tributario eliminando centinaia di micro-bonus inefficienti.'
        ],
        keyProposal: 'Azzeramento IRPEF per i giovani lavoratori e riordino della tax expenditure.',
        quotes: [
          { text: "I condoni fiscali della Destra sono un insulto a chi paga le tasse fino all'ultimo centesimo. Aiutiamo i giovani a restare in Italia con zero tasse.", speaker: "Carlo Calenda", role: "Leader Azione", date: "2024" }
        ]
      },
      {
        partyId: 'iv',
        stance: 'condizionato',
        summary: 'Zero tasse su chi investe in innovazione e taglio del cuneo fiscale permanente con "Industry 4.0".',
        details: [
          'Ripristino e potenziamento degli incentivi Industria 4.0 / Transizione 5.0 per le imprese.',
          'No a patrimoniali o nuove tasse sulla casa.',
          'Esenzione totale delle tasse sui premi di produzione.'
        ],
        keyProposal: 'Sblocco totale degli incentivi alle imprese innovatrici e rimodulazione IRPEF.',
        quotes: [
          { text: "La ricchezza non si crea con la patrimoniale, ma facendo investire le aziende. Servono incentivi shock e meno burocrazia.", speaker: "Matteo Renzi", role: "Leader IV", date: "2024" }
        ]
      },
      {
        partyId: 'piueuropa',
        stance: 'contrario',
        summary: 'Spostare la tassazione dal lavoro alle risorse ambientali e lotta intransigente all\'evasione.',
        details: [
          'Riduzione delle tasse sui redditi da lavoro e aumento progressivo delle tasse su inquinamento e consumi.',
          'Abolizione dei regimi forfettari distorti che penalizzano i dipendenti a parità di reddito.',
          'Piena tracciabilità dei pagamenti e moneta digitale.'
        ],
        keyProposal: 'Spostamento del carico fiscale dal lavoro al consumo di risorse fossili.',
        quotes: [
          { text: "La Flat Tax crea cittadini di serie A e di serie B. Dobbiamo tassare chi inquina, non chi lavora con un contratto da dipendente.", speaker: "Riccardo Magi", role: "Segretario +Europa", date: "2024" }
        ]
      }
    ]
  },
  {
    id: 'riforme-giustizia',
    title: 'Riforme Istituzionali e Giustizia',
    iconName: 'Landmark',
    category: 'Riforme & Istituzioni',
    tags: ['Premierato', 'Autonomia Differenziata', 'Separazione Carriere', 'Abuso d\'Ufficio', 'LEP'],
    shortDesc: 'Elezione diretta del Premier, Autonomia Differenziata regionale e separazione delle carriere dei magistrati.',
    problemOverview: `L'assetto istituzionale e giudiziario italiano è al centro di tre epocali riforme:
1) Premierato: l'elezione diretta del Presidente del Consiglio con premio di maggioranza per garantire stabilità ai governi.
2) Autonomia Differenziata (Legge Calderoli): il trasferimento di 23 materie legislative alle Regioni a statuto ordinario con definizione dei LEP (Livelli Essenziali delle Prestazioni).
3) Riforma della Giustizia: la separazione delle carriere tra magistrati giudicanti e requirenti e lo sdoppiamento del CSM.`,
    keyStatistics: [
      { label: 'Durata Media Governi', value: '1,1 Anni', source: 'Ministero dell\'Interno', subtext: '68 governi in 78 anni repubblicani' },
      { label: 'Tempi Processo Civile', value: '1.400 Giorni', source: 'Corte dei Conti 2024', subtext: 'Media per i 3 gradi di giudizio' },
      { label: 'Materie Autonomia', value: 'fino a 23', source: 'Legge 86/2024', subtext: 'Trasferibili alle Regioni ricche' },
    ],
    currentLawContext: 'Approvata la Legge sull\'Autonomia Differenziata (L. 86/2024) e l\'Abolizione del reato di Abuso d\'Ufficio (Disegno di legge Nordio). In corso d\'esame la riforma costituzionale del Premierato e della Separazione delle Carriere.',
    stances: [
      {
        partyId: 'fdi',
        stance: 'favorevole',
        summary: 'Approvare il Premierato ("La Madre di tutte le Riforme") per dare stabilità e sovranità al popolo.',
        details: [
          'Elezione diretta del Presidente del Consiglio per garantire governi di 5 anni scelti dai cittadini.',
          'Pieno sostegno all\'Autonomia Differenziata in parallelo alla definizione rigorosa dei LEP.',
          'Separazione delle carriere tra PM e giudici per un processo giusto e terzo.'
        ],
        keyProposal: 'Adesione al Premierato con clausola "mai più governi tecnici o ribaltoni".',
        quotes: [
          { text: "Con la riforma del Premierato restituiamo lo scettro del potere ai cittadini italiani e mettiamo fine ai giochi di palazzo.", speaker: "Giorgia Meloni", role: "Premier (FdI)", date: "2024" }
        ]
      },
      {
        partyId: 'pd',
        stance: 'contrario',
        summary: 'No al Premierato che svuota il Quirinale e no all\'Autonomia che spacca l\'Italia in due.',
        details: [
          'Il Premierato riduce i poteri di garanzia del Presidente della Repubblica e umilia il Parlamento.',
          'Opposizione drastica all\'Autonomia Differenziata che aumenta il divario Nord-Sud su sanità e scuola.',
          'Referendum abrogativo contro la Legge Calderoli ed elasticità sui LEP.'
        ],
        keyProposal: 'Referendum abrogativo dell\'Autonomia Differenziata e difesa della Repubblica parlamentare.',
        quotes: [
          { text: "L'Autonomia Calderoli spacca il Paese e crea sanità e scuola di serie A e di serie B. Non lo permetteremo.", speaker: "Elly Schlein", role: "Segretaria PD", date: "2024" }
        ]
      },
      {
        partyId: 'm5s',
        stance: 'contrario',
        summary: 'Barricata contro lo "Spacca-Italia" e contro l\'indebolimento della magistratura.',
        details: [
          'Raccolta firme per il Referendum contro l\'Autonomia Differenziata.',
          'Il Premierato crea un "uomo o donna sola al comando", smantellando la Costituzione antifascista.',
          'Contrarietà alla separazione delle carriere, interpretata come assoggettamento del PM al potere politico.'
        ],
        keyProposal: 'Bocciata totale delle Riforme della maggioranza e tutela della Costituzione vigente.',
        quotes: [
          { text: "Vogliono svendere il Sud e la coesione nazionale per un baratto politico tra Meloni e Salvini. Ci opporremo nelle piazze.", speaker: "Giuseppe Conte", role: "Presidente M5S", date: "2024" }
        ]
      },
      {
        partyId: 'lega',
        stance: 'favorevole',
        summary: 'Attuazione immediata dell\'Autonomia Differenziata per valorizzare le virtù dei territori.',
        details: [
          'Piena applicazione della Riforma Calderoli sull\'Autonomia regionale.',
          'Sostegno convinto al Premierato e alla separazione delle carriere nella Giustizia.',
          'Responsabilità civile diretta dei magistrati in caso di errori giudiziari.'
        ],
        keyProposal: 'Trasferimento rapido delle prime competenze autonome alle Regioni richiedenti.',
        quotes: [
          { text: "L'Autonomia è prevista dalla Costituzione: premia chi amministra bene e punisce gli spreconi. L'Italia sarà più moderna.", speaker: "Matteo Salvini", role: "Leader Lega", date: "2024" }
        ]
      },
      {
        partyId: 'fi',
        stance: 'favorevole',
        summary: 'Separazione delle carriere dei magistrati come priorità liberale assoluta.',
        details: [
          'Separazione netta dei ruoli tra PM e Giudice con due distinti Consigli Superiori della Magistratura (CSM).',
          'Voto favorevole al Premierato con garanzie sul ruolo del Capo dello Stato.',
          'Sostegno controllato all\'Autonomia, previa totale copertura finanziaria dei LEP per il Mezzogiorno.'
        ],
        keyProposal: 'Riforma garantista del processo penale e sdoppiamento del CSM.',
        quotes: [
          { text: "La separazione delle carriere è la realizzazione del sogno garantista di Silvio Berlusconi: un giudice davvero super partes.", speaker: "Antonio Tajani", role: "Leader FI", date: "2024" }
        ]
      },
      {
        partyId: 'avs',
        stance: 'contrario',
        summary: 'No secco alle riforme costituzionali e difesa dell\'unità repubblicana.',
        details: [
          'Mobilitazione contro l\'Autonomia Differenziata ritenuta anticostituzionale.',
          'Rifiuto del Premierato e di qualsiasi modello iper-presidenzialista.',
          'Difesa della magistratura indipendente contro gli attacchi della politica.'
        ],
        keyProposal: 'Ritiro immediato della Legge Calderoli e del Disegno di legge sul Premierato.',
        quotes: [
          { text: "Vogliono distruggere l'articolo 3 della Costituzione che garantisce uguaglianza di diritti a tutti i cittadini da Aosta a Trapani.", speaker: "Nicola Fratoianni", role: "Co-portavoce AVS", date: "2024" }
        ]
      },
      {
        partyId: 'azione',
        stance: 'alternativa',
        summary: 'Favorevoli alla separazione delle carriere; contrari all\'Autonomia scalza e al Premierato pasticciato.',
        details: [
          'Sì garantista alla separazione delle carriere dei magistrati.',
          'No deciso al Premierato (proposto in alternativa il modello Sindaco d\'Italia o Cancellierato tedesco).',
          'No all\'Autonomia Differenziata senza risorse certe per i LEP al Sud.'
        ],
        keyProposal: 'Riforma Costituzionale sul modello del Cancellierato alla tedesca con sfiducia costruttiva.',
        quotes: [
          { text: "Il Premierato proposto dalla Meloni è un pasticcio unico al mondo. Se si vuole stabilità, si adotti il Cancellierato tedesco.", speaker: "Carlo Calenda", role: "Leader Azione", date: "2024" }
        ]
      },
      {
        partyId: 'iv',
        stance: 'condizionato',
        summary: 'Sì al Premierato (proposta storica del Sindaco d\'Italia) e alla giustizia garantista; no all\'Autonomia leghista.',
        details: [
          'Storico sostegno all\'elezione diretta del Premier (modello Sindaco d\'Italia).',
          'Sì alla separazione delle carriere e alla riforma garantista della giustizia.',
          'Forte scetticismo sull\'Autonomia Differenziata se penalizza le infrastrutture del Mezzogiorno.'
        ],
        keyProposal: 'Elezione diretta del premier con ballottaggio e cancellazione burocrazia regionale.',
        quotes: [
          { text: "Siamo da sempre a favore dell'elezione diretta del Premier. Ma l'Autonomia della Lega rischia di creare un disastro burocratico.", speaker: "Matteo Renzi", role: "Leader IV", date: "2024" }
        ]
      },
      {
        partyId: 'piueuropa',
        stance: 'contrario',
        summary: 'Difesa dello Stato di Diritto e dell\'assetto parlamentare europeo.',
        details: [
          'Abolizione del vincolo di mandato e difesa della centralità del Parlamento.',
          'Rifiuto del Premierato d\'autorità e dell\'Autonomia che frammenta il mercato interno italiano.',
          'Garantismo sui diritti dei detenuti e depenalizzazione dei reati minori.'
        ],
        keyProposal: 'Superamento del sovraffollamento carcerario e difesa della Costituzione.',
        quotes: [
          { text: "Il Premierato unito all'Autonomia crea un mostro istituzionale: un premieronnipotente e venti staterelli feudali.", speaker: "Riccardo Magi", role: "Segretario +Europa", date: "2024" }
        ]
      }
    ]
  },
  {
    id: 'sanita-ssn',
    title: 'Sanità Pubblica e Servizio Sanitario Nazionale',
    iconName: 'HeartPulse',
    category: 'Società & Diritti',
    tags: ['SSN', 'Liste d\'Attesa', 'Spesa Sanitaria', 'Privato Convenzionato', 'Medici'],
    shortDesc: 'Aumento dei fondi al SSN sul PIL, abbattimento liste d\'attesa e sblocco tetto assunzioni medici e infermieri.',
    problemOverview: `Il Servizio Sanitario Nazionale (SSN) affronta una crisi strutturale senza precedenti: spesa sanitaria pubblica scesa al 6.2% del PIL (a fronte di una media UE del 6.8% e dell'8% di Germania e Francia), liste d'attesa di mesi o anni per visite ed esami diagnostici, fuga di medici dal pubblico verso il privato o l'estero, ed il fenomeno della "povertà sanitaria" con oltre 4.5 milioni di italiani che rinunciano alle cure per motivi economici.`,
    keyStatistics: [
      { label: 'Spesa SSN / PIL', value: '6,2% PIL', source: 'Corte dei Conti 2024', subtext: 'Media UE: 6,8%' },
      { label: 'Rinuncia alle Cure', value: '4,5 Mld persone', source: 'Rapporto Censis 2024', subtext: 'Per liste lunghe o costi alti' },
      { label: 'Carenza Personale', value: '-30.000 Medici', source: 'FNOMCeO / FNOPI', subtext: 'E oltre 60.000 infermieri' },
    ],
    currentLawContext: 'Approvato il Decreto Liste d\'Attesa con l\'istituzione della Piattaforma Nazionale per il monitoraggio dei tempi e l\'apertura delle visite nei weekend. Si discute il superamento del tetto di spesa sulle assunzioni in vigore dal 2004.',
    stances: [
      {
        partyId: 'fdi',
        stance: 'favorevole',
        summary: 'Incremento record del Fondo Sanitario Nazionale in termini assoluti e piano anti-liste d\'attesa.',
        details: [
          'Fondo Sanitario Nazionale portato al massimo storico in cifra assoluta (>134 miliardi €).',
          'Piano straordinario per l\'abbattimento delle liste d\'attesa estendendo gli orari di diagnosi al sabato e domenica.',
          'Integrazione virtuosa tra Sanità Pubblica e Privato Convenzionato per smaltire le prestazioni accumulate.'
        ],
        keyProposal: 'Piattaforma unica di prenotazione ed estensione orari ambulatoriali nei fine settimana.',
        quotes: [
          { text: "Abbiamo messo sulla sanità più soldi di qualsiasi governo della storia d'Italia. Il problema non sono i fondi ma come vengono spesi dalle Regioni.", speaker: "Giorgia Meloni", role: "Premier (FdI)", date: "2024" }
        ]
      },
      {
        partyId: 'pd',
        stance: 'condizionato',
        summary: 'Legge di finanziamento straordinario per portare il SSN al 7.5% del PIL ed abolire il tetto alle assunzioni.',
        details: [
          'Disegno di legge "Schlein" per vincolare la spesa sanitaria pubblica ad almeno il 7,5% del PIL.',
          'Abolizione immediata del tetto di spesa per le assunzioni di medici e infermieri risalente al 2004.',
          'Piano di adeguamento degli stipendi del personale sanitario alla media dei paesi europei.'
        ],
        keyProposal: 'Vincolo costituzionale della spesa SSN al 7,5% PIL e sblocco totale assunzioni.',
        quotes: [
          { text: "La sanità pubblica è sotto attacco. Stanno spingendo gli italiani nelle braccia della sanità privata a pagamento. Serve una svolta o il SSN muore.", speaker: "Elly Schlein", role: "Segretaria PD", date: "2024" }
        ]
      },
      {
        partyId: 'm5s',
        stance: 'condizionato',
        summary: 'Basta profitti sulla salute: stoppare i finanziamenti alla sanità privata e valorizzare il personale pubblico.',
        details: [
          'Aumento della spesa pubblica sanitaria senza deviare risorse verso cliniche private convenzionate.',
          'Abolizione del numero chiuso alla facoltà di Medicina e Chirurgia.',
          'Riforma della governance delle ASL per eliminare le nomine politiche dei direttori generali.'
        ],
        keyProposal: 'Stop nomine politiche nelle ASL ed eliminazione del ticket sanitario per i redditi bassi.',
        quotes: [
          { text: "La salute è un diritto fondamentale, non una merce da cui estrarre profitto privato. Ridiamo dignità agli ospedali pubblici.", speaker: "Giuseppe Conte", role: "Presidente M5S", date: "2024" }
        ]
      },
      {
        partyId: 'lega',
        stance: 'favorevole',
        summary: 'Autonomia della gestione sanitaria regionale, eliminazione del test d\'ingresso a Medicina.',
        details: [
          'Cancellazione del test a crocette di ingresso per Medicina con sbarramento al primo anno sostenibile.',
          'Libertà di scelta del cittadino tra strutture pubbliche e private convenzionate altamente qualificate.',
          'Incentivi economici per i medici che lavorano nei pronto soccorso e nelle aree di montagna/periferiche.'
        ],
        keyProposal: 'Abolizione dei test d\'ingresso a Medicina e premio produzione per chi lavora nei Pronto Soccorso.',
        quotes: [
          { text: "Abolire i test d'ingresso a Medicina è una battaglia di libertà. Basta con le crocette che fermano migliaia di giovani motivati.", speaker: "Matteo Salvini", role: "Leader Lega", date: "2024" }
        ]
      },
      {
        partyId: 'fi',
        stance: 'favorevole',
        summary: 'Valorizzazione delle professioni infermieristiche e collaborazione pubblico-privato.',
        details: [
          'Incentivi fiscali e aumento stipendi per gli infermieri per evitare la fuga all\'estero.',
          'Sostegno al sistema integrato pubblico-privato con tetti di qualità stringenti.',
          'Potenziamento della medicina di territorio e delle farmacie dei servizi.'
        ],
        keyProposal: 'Piano strategico per l\'attrazione e il rimpatrio di medici e infermieri italiani all\'estero.',
        quotes: [
          { text: "I nostri infermieri e medici sono un'eccellenza mondiale: dobbiamo pagarli meglio ed impedire che scappino in Svizzera o in Inghilterra.", speaker: "Antonio Tajani", role: "Leader FI", date: "2024" }
        ]
      },
      {
        partyId: 'avs',
        stance: 'condizionato',
        summary: 'Definanziamento della sanità privata speculativa e riconversione totale nel SSN pubblico.',
        details: [
          'Moratoria sui finanziamenti pubblici alle cliniche private profit.',
          'Piano di assunzioni da 50.000 infermieri e 20.000 medici nel servizio pubblico.',
          'Assistenza psicologica gratuita garantita con l\'introduzione dello Psicologo di Base in tutta Italia.'
        ],
        keyProposal: 'Istituzione dello Psicologo di Base e servizio di cure odontoiatriche gratuite nel SSN.',
        quotes: [
          { text: "In Italia chi ha i soldi si cura nel privato, chi non ne ha rinuncia alla vita. Bisogna fermare la privatizzazione strisciante della salute.", speaker: "Nicola Fratoianni", role: "Co-portavoce AVS", date: "2024" }
        ]
      },
      {
        partyId: 'azione',
        stance: 'condizionato',
        summary: 'Destinare l\'intero gettito del MES sanitario (37 mld €) agli ospedali e riorganizzazione delle liste.',
        details: [
          'Piano straordinario da 10 miliardi di euro l\'anno per la sanità finanziato con riorganizzazione spesa o risorse europee.',
          'Aumento degli stipendi dei medici del 25% legato al divieto di svolgere attività intramoenia privata.',
          'Digitilizzazione totale della gestione delle liste d\'attesa regionali.'
        ],
        keyProposal: 'Iniezione di 10 mld/anno nel SSN con aumento stipendi ed esclusività del rapporto di lavoro.',
        quotes: [
          { text: "Il collasso del SSN è la più grande emergenza nazionale. Se non mettiamo 10 miliardi all'anno sulla sanità, lo Stato sociale fallisce.", speaker: "Carlo Calenda", role: "Leader Azione", date: "2024" }
        ]
      },
      {
        partyId: 'iv',
        stance: 'condizionato',
        summary: 'Utilizzo immediato del MES Sanitario per ammodernare le strutture ed azzeramento burocrazia ASL.',
        details: [
          'Attivazione della linea di credito sanitaria europea del MES da 37 miliardi a tassi agevolati.',
          'Investimenti massicci in macchinari ad alta tecnologia (TAC, Risonanze, Robotica).'
        ],
        keyProposal: 'Sblocco del MES Sanitario per infrastrutture ospedaliere e digitalizzazione.',
        quotes: [
          { text: "L'Italia rifiuta 37 miliardi del MES per motivi ideologici mentre i nostri ospedali cadono a pezzi. È un errore madornale.", speaker: "Matteo Renzi", role: "Leader IV", date: "2024" }
        ]
      },
      {
        partyId: 'piueuropa',
        stance: 'condizionato',
        summary: 'Riconoscimento automatico dei titoli di studio sanitari esteri e digitalizzazione sanitaria.',
        details: [
          'Facilitazione dell\'ingresso di personale sanitario qualificato dai Paesi extra-UE.',
          'Piena attuazione del Fascicolo Sanitario Elettronico unico europeo.',
          'Incentivi per le startup HealthTech.'
        ],
        keyProposal: 'Semplificazione per l\'assunzione di medici stranieri ed interoperabilità dei dati sanitari.',
        quotes: [
          { text: "Superiamo il corporativismo: servono medici subito, riconosciamo i titoli di studio internazionali e modernizziamo la rete sanitaria.", speaker: "Riccardo Magi", role: "Segretario +Europa", date: "2024" }
        ]
      }
    ]
  },
  {
    id: 'lavoro-salario-minimo',
    title: 'Lavoro, Salario Minimo e Sussidi',
    iconName: 'Briefcase',
    category: 'Economia & Lavoro',
    tags: ['Salario Minimo', 'Assegno Inclusione', 'Reddito Cittadinanza', 'Contratti', 'Produttività'],
    shortDesc: 'Salario minimo legale a 9€/ora vs Contrattazione collettiva, trasformazione del Reddito di Cittadinanza e lavoro giovanile.',
    problemOverview: `L'Italia è l'unico Paese dell'OCSE in cui i salari reali medi sono diminuiti negli ultimi 30 anni (-2.9% dal 1990 al 2020). Circa 3.5 milioni di lavoratori si trovano in condizioni di "povertà lavorativa" (working poor). Il campo progressista propone l'introduzione di una soglia minima salariale per legge a 9 euro netti/lordi l'ora, mentre la maggioranza di governo preferisce valorizzare la contrattazione collettiva dei sindacati ed ha sostituito il Reddito di Cittadinanza con l'Assegno di Inclusione (ADI).`,
    keyStatistics: [
      { label: 'Variazione Salari 30 Anni', value: '-2,9%', source: 'Rapporto OCSE 2023', subtext: 'Unico Paese OCSE in negativo' },
      { label: 'Lavoratori Poveri', value: '~3,5 Mld', source: 'INPS / ISTAT 2024', subtext: 'Sotto la soglia di povertà' },
      { label: 'Soglia Salario Minimo', value: '9,00 €/ora', source: 'Proposta Opposizioni', subtext: 'Per tutti i contratti' },
    ],
    currentLawContext: 'Cancellato il Reddito di Cittadinanza, sostituito dall\'Assegno di Inclusione (ADI per occupabili/fragili) e dal Supporto Formazione Lavoro (SFL). La proposta di legge sul Salario Minimo è stata emendata dalla maggioranza delegando il Governo al potenziamento della contrattazione.',
    stances: [
      {
        partyId: 'fdi',
        stance: 'contrario',
        summary: 'No al salario minimo per legge che rischia di abbassare gli stipendi medi; rafforzare i contratti collettivi.',
        details: [
          'Il salario minimo per legge rischia di fare da volano verso il basso per i settori dove la contrattazione supera i 9 euro.',
          'Sostituzione del Reddito di Cittadinanza con l\'Assegno di Inclusione per tutelare solo i reali inabili al lavoro.',
          'Incentivi per le assunzioni a tempo indeterminato con il principio "Più assumi, meno paghi".'
        ],
        keyProposal: 'Deleghe per estendere l\'efficacia dei Contratti Collettivi Nazionali (CCNL) maggiormente comparabili.',
        quotes: [
          { text: "Il salario minimo rischia di diventare uno specchietto per le allodole che abbassa i salari medi. La vera strada è tagliare le tasse sul lavoro.", speaker: "Giorgia Meloni", role: "Premier (FdI)", date: "2024" }
        ]
      },
      {
        partyId: 'pd',
        stance: 'favorevole',
        summary: 'Salario Minimo legale a 9€ all\'ora per azzerare il lavoro povero ed abolizione dei contratti pirata.',
        details: [
          'Introduzione di una soglia minima inderogabile di 9 euro all\'ora per tutti i lavoratori.',
          'Cancellazione dei contratti collettivi "pirata" firmati da sindacati di comodo.',
          'Contrasto alla precarietà limitando l\'uso dei contratti a termine ed intermettenti.'
        ],
        keyProposal: 'Legge sul Salario Minimo Legale a 9 euro/ora con fondo di perequazione per le PMI.',
        quotes: [
          { text: "Sotto i 9 euro all'ora non è lavoro, è sfruttamento. Nessun lavoratore in Italia deve più essere povero lavorando.", speaker: "Elly Schlein", role: "Segretaria PD", date: "2024" }
        ]
      },
      {
        partyId: 'm5s',
        stance: 'favorevole',
        summary: 'Salario Minimo subito, ripristino del Reddito di Cittadinanza e settimana lavorativa di 32 ore.',
        details: [
          'Approvazione della proposta di legge unitaria sul Salario Minimo a 9 euro.',
          'Ripristino di una misura di sostegno universale contro la povertà estrema simile al Reddito di Cittadinanza.',
          'Sperimentazione della riduzione dell\'orario di lavoro a parità di salario (settimana corta di 4 giorni).'
        ],
        keyProposal: 'Salario minimo a 9€, ripristino RDC e incentivi per la riduzione dell\'orario a 32 ore settimanali.',
        quotes: [
          { text: "Hanno smantellato il Reddito di Cittadinanza per accanirsi contro i poveri e voltano le spalle a 4 milioni di lavoratori sottopagati.", speaker: "Giuseppe Conte", role: "Presidente M5S", date: "2024" }
        ]
      },
      {
        partyId: 'lega',
        stance: 'contrario',
        summary: 'No al salario minimo imposto dallo Stato; estensione della Flat Tax dipendenti e detassazione straordinari.',
        details: [
          'Puntare sulla contrattazione sindacale di secondo livello e sulle gabbie salariali territoriali in base al costo della vita.',
          'Detassazione totale dei premi di produttività, degli straordinari e dei fringe benefit.',
          'Lotta ai furbetti dei sussidi e formazione obbligatoria per i disoccupati.'
        ],
        keyProposal: 'Detassazione al 10% di straordinari e premi di produzione e contrattazione aziendale.',
        quotes: [
          { text: "Servono più soldi in busta paga tagliando le tasse alle aziende, non un decreto sovietico che fissa gli stipendi per legge.", speaker: "Matteo Salvini", role: "Leader Lega", date: "2024" }
        ]
      },
      {
        partyId: 'fi',
        stance: 'contrario',
        summary: 'Rafforzamento della contrattazione collettiva e detassazione dei contratti aziendali.',
        details: [
          'No al salario minimo fissato per via legislativa.',
          'Defiscalizzazione dei contratti di welfare aziendale e dei servizi di baby-sitting per le madri lavoratrici.',
          'Promozione del tirocinio retribuito e dell\'apprendistato.'
        ],
        keyProposal: 'Estensione della contrattazione di secondo livello e premi di produttività esentasse.',
        quotes: [
          { text: "La risposta giusta all'inflazione è la defiscalizzazione dei premi di produttività e dei contratti nazionali validi.", speaker: "Antonio Tajani", role: "Leader FI", date: "2024" }
        ]
      },
      {
        partyId: 'avs',
        stance: 'favorevole',
        summary: 'Salario minimo a 10 euro/ora, abolizione del Jobs Act e contrasto feroce al precariato.',
        details: [
          'Elevazione della soglia minima di salario a 10 euro lordi l\'ora.',
          'Abolizione di tutti i contratti precari (inclusi i tirocini gratuiti e il lavoro a chiamata).',
          'Reintroduzione dell\'Articolo 18 dello Statuto dei Lavoratori contro i licenziamenti illegittimi.'
        ],
        keyProposal: 'Salario minimo a 10€, ripristino Articolo 18 e stop ai tirocini non retribuiti.',
        quotes: [
          { text: "Dobbiamo abolire la precarietà che cancella il futuro dei giovani e fissare una soglia minima salariale dignitosa.", speaker: "Angelo Bonelli", role: "Co-portavoce AVS", date: "2024" }
        ]
      },
      {
        partyId: 'azione',
        stance: 'favorevole',
        summary: 'Sì al salario minimo a 9€ ancorato alla contrattazione e piano straordinario sull\'istruzione tecnica (ITS).',
        details: [
          'Firma della proposta di legge sul Salario Minimo a 9 euro per coprire i settori privi di CCNL forte.',
          'Riforma profonda dei Centri per l\'Impiego gestiti con l\'ausilio di agenzie private di collocamento.',
          'Incentivi massicci agli ITS Academy per superare il mismatch tra domanda e offerta di lavoro.'
        ],
        keyProposal: 'Salario minimo a 9€ e potenziamento degli ITS Academy per l\'occupazione giovanile.',
        quotes: [
          { text: "Il salario minimo è una misura di civiltà presente in quasi tutte le democrazie occidentali. È un errore ideologico rifiutarlo.", speaker: "Carlo Calenda", role: "Leader Azione", date: "2024" }
        ]
      },
      {
        partyId: 'iv',
        stance: 'alternativa',
        summary: 'Contrari al salario minimo per legge; sì alla partecipazione dei lavoratori agli utili delle imprese.',
        details: [
          'Scetticismo sul salario minimo di Stato che rischia di indebolire la contrattazione di categoria.',
          'Proposta di legge sulla Partecipazione dei Lavoratori alla gestione e agli utili delle aziende (art. 46 Cost.).',
          'Defiscalizzazione totale dei contratti di produttività e formazione continuativa.'
        ],
        keyProposal: 'Partecipazione dei dipendenti agli utili d\'impresa ed azzeramento tasse sul welfare.',
        quotes: [
          { text: "Non serve l'assistenzialismo, serve la partecipazione dei lavoratori agli utili aziendali per alzare davvero i salari.", speaker: "Matteo Renzi", role: "Leader IV", date: "2024" }
        ]
      },
      {
        partyId: 'piueuropa',
        stance: 'favorevole',
        summary: 'Salario minimo legato alle direttive europee e libertà di mobilità dei lavoratori.',
        details: [
          'Attuazione della Direttiva Europea sul Salario Minimo Adeguato.',
          'Semplificazione delle norme di ingaggio per lavoratori ad alto valore aggiunto stranieri.',
          'Abolizione dei contratti pirata ed emersione del lavoro nero.'
        ],
        keyProposal: 'Recepimento integrale della direttiva europea sul salario minimo.',
        quotes: [
          { text: "L'Europa ci chiede di tutelare i lavoratori più fragili con un salario minimo adeguato. L'Italia non può rimanere indietro.", speaker: "Riccardo Magi", role: "Segretario +Europa", date: "2024" }
        ]
      }
    ]
  },
  {
    id: 'immigrazione-sicurezza',
    title: 'Immigrazione, Sicurezza e Asilo',
    iconName: 'ShieldAlert',
    category: 'Società & Diritti',
    tags: ['Protocollo Albania', 'Decreto Cutro', 'Ius Scholae', 'Confini', 'Accoglienza'],
    shortDesc: 'Gestione flussi migratori, Protocollo Italia-Albania, riforma della cittadinanza (Ius Scholae) e sicurezza urbana.',
    problemOverview: `L'Italia è una delle principali frontiere esterne dell'Unione Europea nella rotta del Mediterraneo centrale. Il confronto politico spazia dalla gestione dell'accoglienza straordinaria e del contrasto ai trafficanti (es. Protocollo Albania, estensione dei CPR, Decreto Cutro) alle proposte di revisione delle norme sulla cittadinanza per i minori nati o cresciuti in Italia (Ius Soli, Ius Scholae, Ius Italiae) e alla sicurezza delle stazioni e delle grandi città.`,
    keyStatistics: [
      { label: 'Sbarchi Annuali', value: '~150.000', source: 'Ministero dell\'Interno', subtext: 'Media flussi rotta mediterranea' },
      { label: 'Costo Centro Albania', value: '~670 Mln €', source: 'Accordo Italia-Albania 5 anni', subtext: 'Per procedure di rimpatrio' },
      { label: 'Studente Stranieri', value: '~900.000', source: 'Ministero dell\'Istruzione', subtext: 'Candidati a Ius Scholae' },
    ],
    currentLawContext: 'In vigore il Decreto Cutro e il Protocollo Italia-Albania per la gestione extra-UE dei richiedenti asilo. In discussione proposte di legge sull\'Ius Scholae (cittadinanza dopo 5 anni di scuola completati).',
    stances: [
      {
        partyId: 'fdi',
        stance: 'favorevole',
        summary: 'Difesa dei confini esterni, blocco dei navi scafisti, Protocollo Albania e Piano Mattei per l\'Africa.',
        details: [
          'Esternalizzazione delle procedure di asilo tramite il Protocollo con l\'Albania per velocizzare i rimpatri.',
          'Piano Mattei per lo sviluppo dei Paesi africani ("Aiutiamoli a casa loro") per fermare le partenze alla radice.',
          'Stretta sui ricorsi contro le espulsioni e potenziamento della presenza delle forze dell\'ordine nelle città.'
        ],
        keyProposal: 'Piena operatività del Protocollo Albania e blocco navale in cooperazione con la Libia/Tunisia.',
        quotes: [
          { text: "L'immigrazione clandestina si combatte fermando le partenze prima che avvengano e distruggendo i cartelli degli scafisti.", speaker: "Giorgia Meloni", role: "Premier (FdI)", date: "2024" }
        ]
      },
      {
        partyId: 'pd',
        stance: 'contrario',
        summary: 'No alla deportazione in Albania; sì all\'Ius Soli / Ius Scholae e alla redistribuzione obbligatoria in UE.',
        details: [
          'Chiusura dei centri in Albania ritenuti un fallimento giuridico, economico ed umano.',
          'Approvazione immediata dello Ius Soli / Ius Scholae per concedere la cittadinanza ai ragazzi cresciuti e studiati in Italia.',
          'Riforma del Regolamento di Dublino con ricollocamenti obbligatori in tutti i 27 Paesi UE.'
        ],
        keyProposal: 'Approvazione dello Ius Scholae e superamento del Regolamento di Dublino.',
        quotes: [
          { text: "I centri in Albania sono uno spreco enorme di denaro pubblico per una propaganda crudele sulla pelle dei disperati.", speaker: "Elly Schlein", role: "Segretaria PD", date: "2024" }
        ]
      },
      {
        partyId: 'm5s',
        stance: 'contrario',
        summary: 'Stop alla propaganda sui centri esteri; ricollocamenti europei obbligatori e vie legali d\'accesso.',
        details: [
          'Bocciata la gestione in Albania, considerata una passerella mediatica inefficiente.',
          'Focus sul contrasto alla microcriminalità urbana con l\'assunzione di nuove forze di polizia.',
          'Canali d\'ingresso legali e contingentati legati alle reali esigenze del mercato del lavoro italiano.'
        ],
        keyProposal: 'Piano europeo di ricollocamento obbligatorio ed assunzione di 10.000 agenti di polizia.',
        quotes: [
          { text: "In Albania si spendono circa 800 milioni di euro per un'operazione d'immagine che non ferma uno solo sbarco.", speaker: "Giuseppe Conte", role: "Presidente M5S", date: "2024" }
        ]
      },
      {
        partyId: 'lega',
        stance: 'favorevole',
        summary: 'Decreti Sicurezza, contrasto totale all\'immigrazione clandestina e difesa della sovranità.',
        details: [
          'Ripristino integrale delle sanzioni severe contro le ONG che operano nel Mediterraneo.',
          'Nessun cedimento sullo Ius Soli o Ius Scholae: la cittadinanza è un punto d\'arrivo, non un regalo.',
          'Trattenimento nei CPR fino al limite massimo consentito per tutti i clandestini con precedenti penali.'
        ],
        keyProposal: 'Rafforzamento dei CPR ed espulsioni dirette dei clandestini pregiudicati.',
        quotes: [
          { text: "Difendere i confini della Patria non è un reato ma un dovere sacro. La cittadinanza italiana si merita dopo anni di integrazione.", speaker: "Matteo Salvini", role: "Leader Lega", date: "2024" }
        ]
      },
      {
        partyId: 'fi',
        stance: 'condizionato',
        summary: 'Apertura responsabile allo Ius Scholae (Ius Italiae) dopo 10 anni di scuola obbligatoria e rispetto delle regole.',
        details: [
          'Proposta di legge sullo "Ius Italiae": cittadinanza concessa ai minori stranieri dopo aver completato 10 anni di studi in Italia con successo.',
          'Pieno sostegno al Protocollo Albania ed al rafforzamento della cooperazione con Frontex.',
          'Rigore sulla sicurezza nelle stazioni e nei centri urbani.'
        ],
        keyProposal: 'Proposta "Ius Italiae": cittadinanza ai giovani dopo 10 anni di percorso scolastico.',
        quotes: [
          { text: "L'Italia cambia: un giovane che studia 10 anni nelle nostre scuole, parla italiano e ama la nostra cultura è italiano.", speaker: "Antonio Tajani", role: "Leader FI", date: "2024" }
        ]
      },
      {
        partyId: 'avs',
        stance: 'contrario',
        summary: 'Abolizione del Decreto Cutro, chiusura immediata dei CPR e Ius Soli incondizionato.',
        details: [
          'Chiusura di tutti i Centri di Permanenza per il Rimpatrio (CPR), luoghi di violazione sistematica dei diritti umani.',
          'Introduzione dello Ius Soli per nascite sul territorio ed Ius Scholae immediato.',
          'Permesso di soggiorno per ricerca lavoro ed accoglienza diffusa nei Comuni (rete SAI).'
        ],
        keyProposal: 'Abolizione della Bossi-Fini, chiusura dei CPR ed approvazione dello Ius Soli.',
        quotes: [
          { text: "I CPR sono dei veri e propri lager di Stato che vanno chiusi subito. Serve accoglienza diffusa e cittadinanza per i ragazzi nati qui.", speaker: "Angelo Bonelli", role: "Co-portavoce AVS", date: "2024" }
        ]
      },
      {
        partyId: 'azione',
        stance: 'condizionato',
        summary: 'Sì allo Ius Scholae; gestione pragmatica dei flussi con quote regolari per l\'economia.',
        details: [
          'Approvazione dello Ius Scholae dopo il completamento di un ciclo di studi primario o secondario.',
          'Programmazione di flussi d\'ingresso regolari e formati nei Paesi d\'origine per coprire i vuoti di manodopera.',
          'Trasparenza sui costi del Protocollo Albania, giudicato antieconomico.'
        ],
        keyProposal: 'Ius Scholae e decreti flussi triennali concordati con le associazioni d\'impresa.',
        quotes: [
          { text: "Tenere centinaia di migliaia di ragazzi che parlano italiano in un limbo giuridico è assurdo e lesivo per l'integrazione.", speaker: "Carlo Calenda", role: "Leader Azione", date: "2024" }
        ]
      },
      {
        partyId: 'iv',
        stance: 'condizionato',
        summary: 'Sì allo Ius Scholae e ripristino dell\'unità di missione per l\'accoglienza integrata.',
        details: [
          'Sostegno allo Ius Scholae.',
          'Bocciata la gestione propagandistica dell\'Albania; potenziamento dei rimpatri effettivi d\'intesa con l\'UE.',
          'Integrazione lavorativa rapida dei richiedenti asilo.'
        ],
        keyProposal: 'Ius Scholae e piano d\'integrazione lavorativa per i richiedenti asilo.',
        quotes: [
          { text: "La sicurezza si fa con l'integrazione e la legalità, non con gli spot elettorali in Albania.", speaker: "Matteo Renzi", role: "Leader IV", date: "2024" }
        ]
      },
      {
        partyId: 'piueuropa',
        stance: 'contrario',
        summary: 'Superamento della Legge Bossi-Fini, Ius Soli immediato e visti d\'ingresso per lavoro.',
        details: [
          'Referendum e proposta di legge per ridurre da 10 a 5 anni gli anni di residenza necessari per richiedere la cittadinanza.',
          'Abolizione della Legge Bossi-Fini e ripristino dello sponsor per l\'ingresso per ricerca lavoro.',
          'Chiusura dei centri detentivi in Albania ed in Italia.'
        ],
        keyProposal: 'Riduzione da 10 a 5 anni per la cittadinanza e superamento della Bossi-Fini.',
        quotes: [
          { text: "L'Italia sta invecchiando rapidamente. L'immigrazione regolare e i diritti di cittadinanza sono la nostra unica salvezza demografica.", speaker: "Riccardo Magi", role: "Segretario +Europa", date: "2024" }
        ]
      }
    ]
  },
  {
    id: 'diritti-famiglia',
    title: 'Diritti Civili, Famiglia e Denatalità',
    iconName: 'Users',
    category: 'Società & Diritti',
    tags: ['Denatalità', 'Asili Nido', 'Matrimonio Egualitario', 'GPA Reato Universale', 'Ddl Zan'],
    shortDesc: 'Contrasto all\'inverno demografico, bonus famiglia, Gestione per Altri (GPA) come reato universale e matrimonio egualitario.',
    problemOverview: `L'Italia vive un drammatico "inverno demografico": nel 2023 si è registrato il minimo storico delle nascite (379.000 nati) con un tasso di fecondità di soli 1.2 figli per donna. Al centro del dibattito vi sono gli strumenti di sostegno economico alle famiglie (Assegno Unico, asili nido gratuiti, conciliazione vita-lavoro) e le contrapposizioni etiche sui diritti civili: la legge che rende la Gestazione per Altri (GPA) "reato universale" approvata dal centrodestra contro la richiesta di matrimonio egualitario e tutele omogenitoriali avanzata dai progressisti.`,
    keyStatistics: [
      { label: 'Nascite Annuali 2023', value: '379.000', source: 'ISTAT 2024', subtext: 'Minimo storico dall\'Unità d\'Italia' },
      { label: 'Figli per Donna', value: '1,20', source: 'Eurostat / ISTAT', subtext: 'Soglia rimpiazzo: 2,1' },
      { label: 'Posti Asili Nido', value: '28%', source: 'Rapporto PNRR', subtext: 'Target UE: 33%' },
    ],
    currentLawContext: 'Approvata la legge che trasforma la Gestazione per Altri (GPA) in "reato universale" perseguibile anche se compiuta all\'estero da cittadini italiani. Potenziato l\'Assegno Unico Familiare e i bonus nido.',
    stances: [
      {
        partyId: 'fdi',
        stance: 'favorevole',
        summary: 'Piano natalità al centro dell\'azione di Governo, difesa della famiglia naturale e GPA reato universale.',
        details: [
          'Potenziamento dell\'Assegno Unico e decontribuzione per le madri lavoratrici con 2 o più figli (Bonus Mamma).',
          'Approvazione della legge sul reato universale per la Maternità surrogata (GPA).',
          'Difesa della centralità della famiglia tradizionale formata da un uomo e una donna.'
        ],
        keyProposal: 'Piena attuazione del Bonus Mamma e reato universale per la GPA.',
        quotes: [
          { text: "Nessuno mi convincerà mai che si possa vendere un utero o comprare un bambino. La maternità è unica e non ha prezzo.", speaker: "Giorgia Meloni", role: "Premier (FdI)", date: "2024" }
        ]
      },
      {
        partyId: 'pd',
        stance: 'contrario',
        summary: 'Matrimonio egualitario per tutti, trascrizione dei figli delle coppie omogenitoriali e potenziamento degli asili nido.',
        details: [
          'Legge sul Matrimonio Egualitario con parità di diritti di adozione per le coppie dello stesso sesso.',
          'Opposizione alla legge sul reato universale di GPA, ritenuta un attacco ideologico ai diritti delle famiglie.',
          'Piano straordinario per rendere gratuiti e universali gli asili nido da 0 a 3 anni in tutto il territorio.'
        ],
        keyProposal: 'Matrimonio Egualitario, adozioni alle coppie dello stesso sesso ed asili nido gratuiti per tutti.',
        quotes: [
          { text: "L'amore non si arresta per legge. I figli delle coppie omogenitoriali hanno diritto di avere entrambi i genitori riconosciuti dallo Stato.", speaker: "Elly Schlein", role: "Segretaria PD", date: "2024" }
        ]
      },
      {
        partyId: 'm5s',
        stance: 'contrario',
        summary: 'Matrimonio egualitario, congedo di paternità obbligatorio di 5 mesi e sostegno alla conciliazione.',
        details: [
          'Istituzione del Matrimonio Egualitario e piena tutela dei figli delle famiglie arcobaleno.',
          'Congedo di paternità parificato a quello di maternità (5 mesi obbligatori e retribuiti al 100%).',
          'Contrarietà all\'uso ideologico dei diritti civili come clava politica.'
        ],
        keyProposal: 'Congedo di paternità parificato di 5 mesi e garanzia di asilo nido per ogni nato.',
        quotes: [
          { text: "Invece di perseguitare i bambini delle famiglie arcobaleno, diamo il congedo di paternità di 5 mesi per aiutare davvero le mamme.", speaker: "Giuseppe Conte", role: "Presidente M5S", date: "2024" }
        ]
      },
      {
        partyId: 'lega',
        stance: 'favorevole',
        summary: 'Difesa dei valori tradizionali della famiglia, quoziente familiare fiscale e no alle teorie di genere.',
        details: [
          'Introduzione del Quoziente Familiare fiscale: più figli si hanno, meno tasse si pagano.',
          'Stop alla propaganda sulle teorie gender nelle scuole di ogni ordine e grado.',
          'Pieno sostegno alla legge sul reato universale per la maternità surrogata.'
        ],
        keyProposal: 'Quoziente Familiare fiscale e divieto di iscrizione anagrafica per figli di GPA.',
        quotes: [
          { text: "Un bimbo ha diritto ad avere una mamma e un papà. La maternità surrogata è una pratica barbara da stroncare ovunque.", speaker: "Matteo Salvini", role: "Leader Lega", date: "2024" }
        ]
      },
      {
        partyId: 'fi',
        stance: 'condizionato',
        summary: 'Sostegno economico alla famiglia e prudenza etica senza posizioni estremiste.',
        details: [
          'Sostegno al reato universale sulla GPA, considerata uno sfruttamento del corpo femminile.',
          'Disponibilità al riconoscimento di singoli diritti individuali di convivenza senza equiparazione al matrimonio.',
          'Potenziamento dei congedi parentali per i genitori lavoratori.'
        ],
        keyProposal: 'Defiscalizzazione dei servizi di cura familiare e tutele delle lavoratrici madri.',
        quotes: [
          { text: "Siamo un partito d'ispirazione cristiana: difendiamo la famiglia ma senza fanatismo o crociate d'altri tempi.", speaker: "Antonio Tajani", role: "Leader FI", date: "2024" }
        ]
      },
      {
        partyId: 'avs',
        stance: 'contrario',
        summary: 'Legge contro l\'omotransfobia (Ddl Zan), matrimonio egualitario e garanzia del diritto all\'interruzione volontaria di gravidanza (L. 194).',
        details: [
          'Approvazione immediata del Disegno di Legge Zan contro i crimini d\'odio omotransfobici ed abili.',
          'Garanzia di presenza di medici non obiettori in tutti i consultori e reparti ospedalieri per l\'applicazione della Legge 194.',
          'Matrimonio egualitario e legalizzazione della cannabis terapeutica e ricreativa.'
        ],
        keyProposal: 'Ddl Zan, Matrimonio Egualitario e garanzia dell\'applicazione della 194 con medici non obiettori.',
        quotes: [
          { text: "L'Italia deve diventare un Paese dove ogni persona possa amare ed essere riconosciuta per ciò che è senza paura di aggressioni.", speaker: "Nicola Fratoianni", role: "Co-portavoce AVS", date: "2024" }
        ]
      },
      {
        partyId: 'azione',
        stance: 'condizionato',
        summary: 'Pari diritti e doveri per le unioni civili, no alla GPA e sostegno concreto alla natalità.',
        details: [
          'Favorevoli ad equiparare le unioni civili al matrimonio sotto il profilo dei diritti patrimoniali ed assistenziali.',
          'Contrarietà alla maternità surrogata (GPA).',
          'Priorità assoluta al piano asili nido e alla conciliazione lavoro-famiglia.'
        ],
        keyProposal: 'Pari tutele per le unioni civili ed asili nido gratuiti dal primo mese di vita.',
        quotes: [
          { text: "Basta scontri ideologici: diamo subito asili nido gratuiti e tutele reali alle coppie di ogni orientamento.", speaker: "Carlo Calenda", role: "Leader Azione", date: "2024" }
        ]
      },
      {
        partyId: 'iv',
        stance: 'condizionato',
        summary: 'Difesa della legge sulle Unioni Civili (Legge Cirinnà/Renzi) e piano Family Act.',
        details: [
          'Orgoglio per la legge sulle Unioni Civili e il Family Act approvati durante i propri governi.',
          'Apertura a passi avanti sui diritti civili senza lacerazioni sociali ideologiche.'
        ],
        keyProposal: 'Piena attuazione e potenziamento del Family Act.',
        quotes: [
          { text: "Le unioni civili le abbiamo fatte noi superando mille veti. Ora completiamo il percorso del Family Act.", speaker: "Matteo Renzi", role: "Leader IV", date: "2024" }
        ]
      },
      {
        partyId: 'piueuropa',
        stance: 'contrario',
        summary: 'Matrimonio egualitario, eutanasia legale, legalizzazione della cannabis e regolamentazione della GPA solidale.',
        details: [
          'Disegno di legge sul Matrimonio Egualitario e adozione al single e alle coppie omogenitoriali.',
          'Legge sul Fine Vita ed Eutanasia Legale.',
          'Legalizzazione e tassazione della produzione e vendita della Cannabis.'
        ],
        keyProposal: 'Matrimonio egualitario, legalizzazione della cannabis e legge sull\'Eutanasia Legale.',
        quotes: [
          { text: "L'Italia è maglia nera in Europa sui diritti civili. L'autodeterminazione del corpo e dell'amore deve essere garantita.", speaker: "Riccardo Magi", role: "Segretario +Europa", date: "2024" }
        ]
      }
    ]
  },
  {
    id: 'debito-pnrr-ue',
    title: 'Debito Pubblico, PNRR e Patto di Stabilità UE',
    iconName: 'BuildingBank',
    category: 'Economia & Lavoro',
    tags: ['PNRR', 'Debito Pubblico', 'Patto di Stabilità', 'Deficit', 'MES'],
    shortDesc: 'Gestione dei 194 miliardi del PNRR, rientro dal deficit (procedura d\'infrazione) e ratifica del Fondo Salva-Stati (MES).',
    problemOverview: `L'Italia ha il secondo debito pubblico più alto d'Europa in rapporto al PIL (circa 2.950 miliardi di euro, pari al 137% del PIL). Con la riattivazione delle regole del Patto di Stabilità e Crescita e l'apertura della procedura d'infrazione per deficit eccessivo (3.8% nel 2024), l'Italia deve attuare un piano di rientro di circa 10-12 miliardi l'anno nei prossimi 7 anni. Parallelamente, la capacità di spesa dei 194.4 miliardi del PNRR rappresenta il principale motore di crescita economica. L'Italia è inoltre l'unico Paese della zona euro a non aver ratificato la riforma del MES (Meccanismo Europeo di Stabilità).`,
    keyStatistics: [
      { label: 'Debito Pubblico', value: '2.950 Mld €', source: 'Banca d\'Italia 2024', subtext: '~137% del PIL' },
      { label: 'Fondi PNRR Totali', value: '194,4 Mld €', source: 'Commissione Europea', subtext: 'L\'Italia è il primo beneficiario' },
      { label: 'Deficit / PIL 2024', value: '3,8%', source: 'DEF / ISTAT 2024', subtext: 'Target UE: sotto il 3,0%' },
    ],
    currentLawContext: 'In corso l\'attuazione del Piano Strutturale di Bilancio di Medio Termine (7 anni) concordato con Bruxelles. Risoluzione parlamentare che ha bocciato la ratifica del MES.',
    stances: [
      {
        partyId: 'fdi',
        stance: 'favorevole',
        summary: 'Rinegoziazione efficace delle rate del PNRR, prudenza di bilancio e no alla ratifica del MES alle condizioni attuali.',
        details: [
          'Revisione del PNRR concordata con la Commissione UE per adeguare le opere all\'inflazione ed ai costi delle materie prime.',
          'Integrazione del nuovo Patto di Stabilità con percorsi di rientro graduali in 7 anni.',
          'Bocciata la ratifica della riforma del MES, considerato uno strumento superato e rischioso per la sovranità fiscale.'
        ],
        keyProposal: 'Riconversione fondi PNRR in incentivi RepowerEU e no al MES.',
        quotes: [
          { text: "Sul PNRR avevamo ragione noi: la rimodulazione concordata con Bruxelles ci ha permesso di non sprecare un solo euro di fondi europei.", speaker: "Giorgia Meloni", role: "Premier (FdI)", date: "2024" }
        ]
      },
      {
        partyId: 'pd',
        stance: 'condizionato',
        summary: 'Difesa del PNRR dalle lungaggini del governo, ratifica del MES per reputazione internazionale e lotta allo spesa improduttiva.',
        details: [
          'Allarme per i ritardi nell\'esecuzione dei cantieri PNRR specialmente al Sud ed intaglio dei fondi per i Comuni.',
          'Ratifica immediata della riforma del MES per evitare di isolare l\'Italia rispetto agli altri 19 Paesi dell\'Eurozona.',
          'Opposizione ad un Patto di Stabilità di sola austerità senza la scorporazione degli investimenti verdi e digitali dal calcolo del deficit.'
        ],
        keyProposal: 'Ratifica del MES, sblocco dei cantieri PNRR e regola d\'oro per gli investimenti produttivi.',
        quotes: [
          { text: "La scelta di non ratificare il MES ha distrutto la credibilità internazionale dell'Italia senza portare un singolo beneficio agli italiani.", speaker: "Elly Schlein", role: "Segretaria PD", date: "2024" }
        ]
      },
      {
        partyId: 'm5s',
        stance: 'contrario',
        summary: 'Difesa dell\'eredità del PNRR (ottenuto dal Governo Conte 2), no all\'austerità del nuovo Patto di Stabilità e no al MES.',
        details: [
          'Orgoglio per il risultato del NextGenerationEU/PNRR (209 mld €) ottenuto nel 2020.',
          'Voto contrario al nuovo Patto di Stabilità approvato dal Governo Meloni, bollato come un "ritorno all\'austerità drammatica".',
          'Trattativa per lo scorporo permanente dal deficit degli investimenti nella transizione ecologica e nella scuola.'
        ],
        keyProposal: 'Creazione di un NextGenerationEU permanente finanziato con debito comune europeo.',
        quotes: [
          { text: "Il nuovo Patto di Stabilità firmato da Meloni e Giorgetti taglierà 12 miliardi l'anno alla sanità e ai servizi pubblici italiani.", speaker: "Giuseppe Conte", role: "Presidente M5S", date: "2024" }
        ]
      },
      {
        partyId: 'lega',
        stance: 'contrario',
        summary: 'No secco al MES ed ai vincoli europei di bilancio ritenuti penalizzanti per le imprese.',
        details: [
          'Voto contrario assoluto al MES, etichettato come strumento cappio degli strozzini di Bruxelles.',
          'Semplificazione delle procedure PNRR superando le rigidità burocratiche europee.',
          'Uso dei margini di flessibilità fiscale per sostenere la crescita PIL anziché soli tagli alla spesa.'
        ],
        keyProposal: 'Abolizione del MES e riorientamento dei vincoli di spesa del Patto di Stabilità.',
        quotes: [
          { text: "Il MES è un cappio al collo per i risparmi degli italiani. Finchè c'è la Lega al governo il MES non verrà mai ratificato.", speaker: "Matteo Salvini", role: "Leader Lega", date: "2024" }
        ]
      },
      {
        partyId: 'fi',
        stance: 'condizionato',
        summary: 'Prudenza sui conti pubblici, mantenimento dello spread basso e valutazione pragmatico-europeista sul MES.',
        details: [
          'Impegno rigoroso per la tenuta dei conti e la riduzione dello spread sui BTP sotto i 100 punti base.',
          'Apertura ad una discussione sul MES inserito all\'interno del controllo democratico del Parlamento Europeo.',
          'Attuazione celere delle riforme abilitanti del PNRR (pubblica amministrazione e giustizia).'
        ],
        keyProposal: 'Stabilizzazione dello spread ed attuazione integrale delle riforme PNRR.',
        quotes: [
          { text: "La credibilità dei nostri conti pubblici è ciò che tiene bassi i tassi sui mutui delle famiglie. Nessuna avventura sui conti.", speaker: "Antonio Tajani", role: "Leader FI", date: "2024" }
        ]
      },
      {
        partyId: 'avs',
        stance: 'contrario',
        summary: 'Bocciata totale del Patto di Stabilità; Piano per un debito ecologico comune europeo.',
        details: [
          'Rifiuto dei parametri di rientro dal deficit al 3% e dal debito al 60%.',
          'Proposta di un Green New Deal europeo finanziato con eurobond senza vincoli di rientro fiscale rigidi.',
          'Tassazione della grande finanza per abbattere il debito sovrano.'
        ],
        keyProposal: 'Eurobond permanenti per il Clima e superamento dei dogmi del deficit al 3%.',
        quotes: [
          { text: "L'austerità ha distrutto il lavoro e la sanità in Italia. Non possiamo accettare nuove gabbie contabili che impediscono di salvare il pianeta.", speaker: "Nicola Fratoianni", role: "Co-portavoce AVS", date: "2024" }
        ]
      },
      {
        partyId: 'azione',
        stance: 'favorevole',
        summary: 'Ratifica immediata del MES, spending review seria nella spesa corrente e messa a terra del PNRR.',
        details: [
          'Voto a favore della ratifica del MES per responsabilità istituzionale ed europea.',
          'Revisione della spesa pubblica (spending review) per tagliare 15 miliardi di bonus e mancette elettorali.',
          'Incentivi alle imprese legati rigorosamente alla capacità di spesa PNRR.'
        ],
        keyProposal: 'Ratifica immediata del MES e Spending Review da 15 miliardi su bonus improduttivi.',
        quotes: [
          { text: "Abbiamo il debito più alto e tagliamo la sanità, ma spendiamo decine di miliardi in bonus facciate e monopattini. Serve serietà contabile.", speaker: "Carlo Calenda", role: "Leader Azione", date: "2024" }
        ]
      },
      {
        partyId: 'iv',
        stance: 'favorevole',
        summary: 'Sì al MES, attuazione veloce del PNRR e riduzione delle tasse per attrarre capitali esteri.',
        details: [
          'Ratifica del MES senza esitazioni.',
          'Accelerazione sull\'attuazione del PNRR sbloccando i cantieri commissariati.',
          'Utilizzo dei fondi per abbattere la burocrazia ed attrarre investimenti multinazionali.'
        ],
        keyProposal: 'Sblocco totale delle opere PNRR tramite commissariamenti straordinari.',
        quotes: [
          { text: "L'unico modo per pagare il debito pubblico è far crescere il PIL a velocità doppia. Il PNRR è la nostra ultima occasione storica.", speaker: "Matteo Renzi", role: "Leader IV", date: "2024" }
        ]
      },
      {
        partyId: 'piueuropa',
        stance: 'favorevole',
        summary: 'Integrazione fiscale dell\'Eurozona con Tesoro Europeo unico e ratifica del MES.',
        details: [
          'Ratifica immediata del MES Riformato.',
          'Istituzione del Ministero delle Finanze dell\'Eurozona e capacity fiscale europea.',
          'Abolizione dei veti sui bilanci pluriennali dell\'Unione Europea.'
        ],
        keyProposal: 'Tesoro Europeo unico con potere di tassazione diretta ed emissione di Titoli di Stato UE.',
        quotes: [
          { text: "Il debito italiano si gestisce solo dentro una vera Unione Fiscale Europea con un Tesoro unico ed Eurobond.", speaker: "Riccardo Magi", role: "Segretario +Europa", date: "2024" }
        ]
      }
    ]
  },
  {
    id: 'istruzione-ricerca',
    title: 'Istruzione, Università e Fuga dei Cervelli',
    iconName: 'GraduationCap',
    category: 'Società & Diritti',
    tags: ['Scuola', 'Docenti', 'Fuga dei Cervelli', 'Università', 'ITS'],
    shortDesc: 'Aumento della spesa per la scuola al 5% del PIL, stipendi dei docenti orientati alla media UE e borse di studio.',
    problemOverview: `L'Italia spende circa il 4.1% del PIL nell'istruzione (contro la media UE del 4.7%) ed il salario dei docenti della scuola pubblica è inferiore di circa il 20% rispetto alla media europea. Parallelamente, oltre 50.000 giovani laureati lasciano ogni anno l'Italia ("fuga dei cervelli") in cerca di retribuzioni adeguate ed incentivi alla ricerca. La discussione contrappone la scuola del merito e della formazione tecnica (ITS) ai modelli di scuola inclusiva senza disuguaglianze e con ricerca pubblica finanziata.`,
    keyStatistics: [
      { label: 'Spesa Istruzione / PIL', value: '4,1% PIL', source: 'Eurostat 2024', subtext: 'Media UE: 4,7%' },
      { label: 'Fuga Laureati / Anno', value: '>50.000', source: 'ISTAT 2024', subtext: 'Giovani under 35 all\'estero' },
      { label: 'Gap Stipendi Docenti', value: '-20%', source: 'Rapporto Eurydice', subtext: 'Rispetto alla media europea' },
    ],
    currentLawContext: 'Introdotto il docente tutor ed orientatore e la riforma dell\'Istruzione Tecnico-Professionale (filiera 4+2). Attuato il piano di reclutamento PNRR dei docenti scolastici e dei ricercatori.',
    stances: [
      {
        partyId: 'fdi',
        stance: 'favorevole',
        summary: 'Scuola del Merito, valorizzazione del Liceo del Made in Italy e filiera tecnico-professionale 4+2.',
        details: [
          'Riforma del Ministero dell\'Istruzione e del Merito: premi alla condotta ed autorità del corpo docente.',
          'Istituzione della filiera formativa 4+2 (4 anni di scuola superiore + 2 anni di ITS) per un rapido ingresso nel lavoro.',
          'Istituzione del Liceo del Made in Italy per formare le eccellenze produttive italiane.'
        ],
        keyProposal: 'Sostegno al merito scolastico, tutoraggio personalizzato e Liceo del Made in Italy.',
        quotes: [
          { text: "Il merito è l'unico vero ascensore sociale che permette a un figlio di operai di diventare primario o grande imprenditore.", speaker: "Giorgia Meloni", role: "Premier (FdI)", date: "2024" }
        ]
      },
      {
        partyId: 'pd',
        stance: 'condizionato',
        summary: 'Adeguamento degli stipendi dei docenti alla media UE, gratuità dei libri di testo e contrasto alla dispersione.',
        details: [
          'Piano di aumenti retributivi per gli insegnanti per pareggiare la media dei colleghi europei.',
          'Gratuità dei libri di testo scolastici e del trasporto pubblico per gli studenti delle famiglie con ISEE basso.',
          'Messa in sicurezza di tutti gli edifici scolastici degradati con i fondi del PNRR.'
        ],
        keyProposal: 'Adeguamento stipendi docenti alla media UE e gratuità di libri e trasporti per famiglie a basso reddito.',
        quotes: [
          { text: "I nostri insegnanti sono tra i meno pagati d'Europa. Senza investire sulla scuola pubblica non c'è futuro per il Paese.", speaker: "Elly Schlein", role: "Segretaria PD", date: "2024" }
        ]
      },
      {
        partyId: 'm5s',
        stance: 'condizionato',
        summary: 'Aumento della spesa per la ricerca all\'1,5% del PIL, abolizione del numero chiuso all\'università e scuola a tempo pieno.',
        details: [
          'Estensione del tempo pieno nella scuola primaria al 100% delle classi (specialmente al Sud).',
          'Superamento del numero chiuso nelle facoltà universitarie a partire da Medicina.',
          'Investimento pubblico straordinario nella ricerca di base per fermare la fuga dei giovani ricercatori.'
        ],
        keyProposal: 'Scuola a tempo pieno diffusa al Sud ed azzeramento delle tasse universitarie per ISEE < 30mila €.',
        quotes: [
          { text: "La cultura e la ricerca non sono spese ma gli investimenti più redditizi per la sovranità tecnologica dell'Italia.", speaker: "Giuseppe Conte", role: "Presidente M5S", date: "2024" }
        ]
      },
      {
        partyId: 'lega',
        stance: 'favorevole',
        summary: 'Valutazione del comportamento scolastico, introduzione dell\'educazione Civica e valorizzazione territoriale dei docenti.',
        details: [
          'Stretta sul voto in condotta: bocciatura con il 5 e lavori socialmente utili per i bulli.',
          'Gabbie stipendiali o incentivi legati al costo della vita per i docenti fuori sede.',
          'Potenziamento dell\'offerta formativa degli Istituti Tecnici Superiori (ITS).'
        ],
        keyProposal: 'Riforma del voto in condotta ed incentivi per i docenti che insegnano nelle zone disagiate.',
        quotes: [
          { text: "Riportiamo il rispetto e la disciplina nelle aule di scuola: chi aggredisce un professore deve essere bocciato e fare lavori utili.", speaker: "Matteo Salvini", role: "Leader Lega", date: "2024" }
        ]
      },
      {
        partyId: 'fi',
        stance: 'favorevole',
        summary: 'Libertà di scelta educativa con buoni scuola e potenziamento dell\'inglese e delle materie STEM.',
        details: [
          'Incentivi ed equiparazione economica per le scuole paritarie private (Buono Scuola).',
          'Rafforzamento delle competenze informatiche, STEM ed in lingua inglese fin dalla scuola primaria.',
          'Agevolazioni fiscali per il rientro dei ricercatori italiani dall\'estero.'
        ],
        keyProposal: 'Buono scuola per la parità scolastica e potenziamento delle lauree STEM.',
        quotes: [
          { text: "La libertà di educazione è un diritto di ogni famiglia: lo Stato deve sostenere anche le scuole paritarie di qualità.", speaker: "Antonio Tajani", role: "Leader FI", date: "2024" }
        ]
      },
      {
        partyId: 'avs',
        stance: 'condizionato',
        summary: 'Scuola pubblica 100% gratuita, stop ai finanziamenti alle scuole paritarie e stabilizzazione dei precari.',
        details: [
          'Cancellazione totale dei fondi pubblici erogati alle scuole private e paritarie.',
          'Piano di stabilizzazione straordinario di 100.000 docenti e personale ATA precario.',
          'Abolizione dei PCTO (Alternanza Scuola-Lavoro) sostituiti da stage protetti ed extra-aziendali.'
        ],
        keyProposal: 'Abolizione dei PCTO (Alternanza scuola-lavoro) ed immissione in ruolo di tutti i precari.',
        quotes: [
          { text: "La scuola non è un'azienda e gli studenti non sono manodopera gratuita per le imprese. Aboliamo l'alternanza scuola-lavoro.", speaker: "Nicola Fratoianni", role: "Co-portavoce AVS", date: "2024" }
        ]
      },
      {
        partyId: 'azione',
        stance: 'condizionato',
        summary: 'Obbligo scolastico dai 3 ai 18 anni, prolungamento dell\'orario fino alle 17:30 e shock salariale ai docenti.',
        details: [
          'Estensione dell\'obbligo scolastico da 3 a 18 anni.',
          'Scuola aperta tutto il giorno fino alle 17:30 con mensa e tempo pieno universale.',
          'Aumento del 30% dello stipendio dei docenti in cambio di tempo pieno dedicato alla scuola.'
        ],
        keyProposal: 'Obbligo scolastico 3-18 anni, tempo pieno fino alle 17:30 ed incremento stipendi docenti.',
        quotes: [
          { text: "Tenere le scuole aperte fino alle 17:30 è la più potente misura contro la dispersione scolastica e per il lavoro femminile.", speaker: "Carlo Calenda", role: "Leader Azione", date: "2024" }
        ]
      },
      {
        partyId: 'iv',
        stance: 'condizionato',
        summary: 'Sblocco del piano "Scuole Sicure" per l\'edilizia e credito d\'imposta per l\'innovazione didattica.',
        details: [
          'Ripristino della cabina di regia "Italia Sicura" per la ristrutturazione sismica di tutti i plessi scolastici.',
          'Potenziamento della formazione digitale degli insegnanti.'
        ],
        keyProposal: 'Piano straordinario da 5 mld € per l\'edilizia e la sicurezza sismica delle scuole.',
        quotes: [
          { text: "Gli edifici scolastici devono essere i luoghi più belli e sicuri delle nostre città. Riapriamo l'Unità di Missione dell'edilizia scolastica.", speaker: "Matteo Renzi", role: "Leader IV", date: "2024" }
        ]
      },
      {
        partyId: 'piueuropa',
        stance: 'condizionato',
        summary: 'Erasmus universitario per tutti gli studenti e riconoscimento automatico dei titoli europei.',
        details: [
          'Copertura finanziaria del 100% delle borse di studio per gli studenti capaci e meritevoli ma privi di mezzi.',
          'Finanziamento automatico dell\'Erasmus per ogni studente universitario.',
          'Snellimento burocratico per l\'attrazione di docenti e premi Nobel stranieri.'
        ],
        keyProposal: 'Erasmus universale retribuito e borse di studio garantite per gli idonei.',
        quotes: [
          { text: "Tutti gli studenti italiani devono poter fare un anno di università in Europa finanziato dallo Stato.", speaker: "Riccardo Magi", role: "Segretario +Europa", date: "2024" }
        ]
      }
    ]
  },
  {
    id: 'infrastrutture-ponte',
    title: 'Infrastrutture, Trasporti e Ponte sullo Stretto',
    iconName: 'Train',
    category: 'Ambiente & Energia',
    tags: ['Ponte Stretto', 'Alta Velocità', 'Dissesto Idrogeologico', 'Ferrovie Sud', 'Porti'],
    shortDesc: 'Costruzione del Ponte sullo Stretto di Messina (~13,5 mld €), Alta Velocità al Sud e contrasto al dissesto idrogeologico.',
    problemOverview: `Il collegamento stabile tra la Sicilia e la Calabria attraverso il Ponte sullo Stretto di Messina è uno dei progetti infrastrutturali più dibattuti della storia d'Italia. L'opera, dal costo stimato di circa 13.5 miliardi di euro, vede la maggioranza schierata a favore come volano di sviluppo per il Mezzogiorno e simbolo dell'ingegneria italiana. Le opposizioni sollevano forti dubbi sulla sicurezza sismica, l'impatto ambientale, i costi crescenti e la priorità rispetto alle carenze delle ferrovie e delle strade siciliane e calabresi.`,
    keyStatistics: [
      { label: 'Costo Ponte Stretto', value: '13,5 Mld €', source: 'Società Stretto di Messina 2024', subtext: 'Coperti con risorse nazionali' },
      { label: 'Lunghezza Campata', value: '3.300 Metri', source: 'Progetto Definitivo', subtext: 'Record mondiale ponte sospeso' },
      { label: 'Comuni a Rischio', value: '94% Comuni', source: 'Rapporto ISPRA 2024', subtext: 'Rischio frana o alluvione' },
    ],
    currentLawContext: 'Approvato il Disegno di Legge per il riavvio della Società Stretto di Messina e l\'aggiornamento del Progetto Definitivo. In corso la procedura di Valutazione di Impatto Ambientale (VIA).',
    stances: [
      {
        partyId: 'fdi',
        stance: 'favorevole',
        summary: 'Sostegno convinto al Ponte sullo Stretto come opera strategica europea ed interconnessione del Sud.',
        details: [
          'Inserimento del Ponte nella rete di trasporto trans-europea TEN-T (Corridoio Scandinavia-Mediterraneo).',
          'Sviluppo contemporaneo dell\'Alta Velocità ferroviaria Palermo-Catania-Messina e Salerno-Reggio Calabria.',
          'Creazione di decine di migliaia di posti di lavoro diretti ed indiretti nell\'edilizia.'
        ],
        keyProposal: 'Apertura dei cantieri principali del Ponte e completamento opere connesse.',
        quotes: [
          { text: "Il Ponte sullo Stretto non serve solo a collegare Sicilia e Calabria, ma a collegare l'Italia intera al cuore dell'Europa.", speaker: "Giorgia Meloni", role: "Premier (FdI)", date: "2024" }
        ]
      },
      {
        partyId: 'pd',
        stance: 'contrario',
        summary: 'No al Ponte cattedrale nel deserto; dirottare i 13.5 miliardi su ferrovie locali, acqua e frane.',
        details: [
          'Grave carenza delle infrastrutture di base in Sicilia (treni a binario unico, emergenza idrica drammatica).',
          'Rischio sismico elevato nell\'area dello Stretto ed incertezza sui costi finali lievitati.',
          'Spostamento delle risorse finanziarie sulla prevenzione del dissesto idrogeologico e sul trasporto pendolare.'
        ],
        keyProposal: 'Sospensione del progetto del Ponte e destinazione fondi alla rete idrica ed ai treni regionali.',
        quotes: [
          { text: "È assurdo spendere 14 miliardi per un ponte quando in Sicilia i treni ci mettono 5 ore per fare 100 km e manca l'acqua dai rubinetti.", speaker: "Elly Schlein", role: "Segretaria PD", date: "2024" }
        ]
      },
      {
        partyId: 'm5s',
        stance: 'contrario',
        summary: 'No secco al Ponte: opera propagandistica ed insostenibile; priorità assoluta alla messa in sicurezza del territorio.',
        details: [
          'Voto contrario ad una cattedrale nel deserto che devia fondi dalla manutenzione straordinaria delle infrastrutture esistenti.',
          'Allarme per le infiltrazioni della microcriminalità e delle mafie negli appalti di cantiere.',
          'Piano di investimenti massicci contro l\'erosione costiera ed il dissesto idrogeologico.'
        ],
        keyProposal: 'Cancellazione della Società Stretto di Messina e Piano Messa in Sicurezza del Territorio.',
        quotes: [
          { text: "Il Ponte è solo un gigantesco bancomat elettorale per la Lega. La Sicilia si sgretola per le alluvioni e loro pensano al ponte.", speaker: "Giuseppe Conte", role: "Presidente M5S", date: "2024" }
        ]
      },
      {
        partyId: 'lega',
        stance: 'favorevole',
        summary: 'Il Ponte sullo Stretto è la priorità infrastrutturale del Paese: simbolo del riscatto del Sud.',
        details: [
          'Riavvio definitivo dell\'opera con l\'obiettivo di posare la prima pietra ed aprire al traffico entro il 2032.',
          'Creazione di un hub logistico e portuale di livello mondiale nel Mediterraneo.',
          'Sblocco simultaneo di centinaia di opere pubbliche commissariate con il nuovo Codice degli Appalti.'
        ],
        keyProposal: 'Avvio definitivo dei cantieri del Ponte e semplificazione del Codice degli Appalti.',
        quotes: [
          { text: "Il Ponte sarà l'opera ingegneristica più bella, verde ed avveniristica del mondo. Farà della Sicilia il centro d'Europa.", speaker: "Matteo Salvini", role: "Ministro Infrastrutture (Lega)", date: "2024" }
        ]
      },
      {
        partyId: 'fi',
        stance: 'favorevole',
        summary: 'Opera storica del Centrodestra concepita da Silvio Berlusconi, fondamentale per l\'export.',
        details: [
          'Rivendicazione della paternità storica dell\'opera promossa fin dal governo Berlusconi nel 2001.',
          'Rafforzamento dei collegamenti commerciali tra i porti di Gioia Tauro, Augusta e l\'Europa settentrionale.',
          'Garantismo e controlli antimafia stringenti sul cantiere.'
        ],
        keyProposal: 'Completamento dell\'opera ed intitolazione del progetto a Silvio Berlusconi.',
        quotes: [
          { text: "Realizzare il Ponte significa compiere il grande sogno visionario di Silvio Berlusconi e modernizzare il Mezzogiorno.", speaker: "Antonio Tajani", role: "Leader FI", date: "2024" }
        ]
      },
      {
        partyId: 'avs',
        stance: 'contrario',
        summary: 'Opposizione ecologista radicale: il Ponte è un disastro ambientale su un\'area a gravissimo rischio sismico.',
        details: [
          'Impatto devastante sugli ecosistemi protetti dello Stretto di Messina (zone ZPS e SIC).',
          'Rischio sismico catastrofico (area del terremoto del 1908).',
          'Espropri coatti a danno di centinaia di famiglie a Messina e Villa San Giovanni.'
        ],
        keyProposal: 'Blocco immediato per via giudiziaria ed ambientale del progetto del Ponte.',
        quotes: [
          { text: "Vogliono costruire il ponte sospeso più lungo del mondo su una delle faglie sismiche più pericolose del pianeta. È pura follia.", speaker: "Angelo Bonelli", role: "Co-portavoce AVS", date: "2024" }
        ]
      },
      {
        partyId: 'azione',
        stance: 'condizionato',
        summary: 'Forte scetticismo sull\'esecutività tecnica del Progetto Definitivo; priorità alla sistemazione delle strade vicinali.',
        details: [
          'Critica rigorosa sulla mancanza di un progetto esecutivo aggiornato validato da enti terzi internazionali.',
          'La priorità infrastrutturale della Sicilia è la linea ferroviaria Palermo-Catania ed i viadotti autostradali interni.',
          'Sì alle infrastrutture ma solo se supportate da analisi costi-benefici rigorose.'
        ],
        keyProposal: 'Sottomissione del progetto ad una commissione tecnica internazionale indipendente prima dei cantieri.',
        quotes: [
          { text: "Fare il Ponte prima di aver sistemato i treni in Sicilia è come comprare una Ferrari e lasciarla in un garage senza strada.", speaker: "Carlo Calenda", role: "Leader Azione", date: "2024" }
        ]
      },
      {
        partyId: 'iv',
        stance: 'favorevole',
        summary: 'Favorevoli al Ponte ed allo sblocco di tutte le grandi opere pubbliche con commissari straordinari.',
        details: [
          'Storico posizionamento a favore delle infrastrutture (modello "Sblocca Italia").',
          'Apertura dei cantieri per il Ponte affiancata dal completamento dell\'Alta Velocità Salerno-Reggio Calabria.',
          'Superamento delle lungaggini burocratiche ministeriali.'
        ],
        keyProposal: 'Applicazione del Modello Genova per la realizzazione del Ponte e delle infrastrutture connesse.',
        quotes: [
          { text: "L'Italia ha bisogno di infrastrutture moderne per crescere. Chi dice sempre No blocca il futuro del Mezzogiorno.", speaker: "Matteo Renzi", role: "Leader IV", date: "2024" }
        ]
      },
      {
        partyId: 'piueuropa',
        stance: 'contrario',
        summary: 'Subordinare l\'opera ad una rigorosa analisi costi-benefici conforme agli standard trasparenti dell\'UE.',
        details: [
          'Mancanza di trasparenza sulle valutazioni finanziarie e sul rischio di extra-costi a carico dei contribuenti.',
          'Priorità al trasporto marittimo green ed alle connessioni digitali a banda ultra-larga.'
        ],
        keyProposal: 'Audit indipendente UE sui costi-benefici del Ponte.',
        quotes: [
          { text: "Spendere 14 miliardi di fondi pubblici senza una trasparente e terza analisi costi-benefici è contrario ai principi di buona amministrazione.", speaker: "Riccardo Magi", role: "Segretario +Europa", date: "2024" }
        ]
      }
    ]
  },
  {
    id: 'casa-affitti',
    title: 'Casa, Affitti Brevi ed Emergenza Abitativa',
    iconName: 'Home',
    category: 'Società & Diritti',
    tags: ['Affitti Brevi', 'Social Housing', 'Casa Green', 'Cedolare Secca', 'Studenti'],
    shortDesc: 'Regolamentazione di Airbnb e affitti brevi, piano nazionale di Social Housing per giovani e studenti, e recepimento Direttiva Casa Green.',
    problemOverview: 'L’aumento vertiginoso del costo degli affitti nelle grandi città universitarie (Milano, Roma, Bologna) ed il boom delle locazioni turistiche brevi tramite piattaforme digitali ha creato un’emergenza abitativa strutturale per studenti fuori sede e giovani famiglie. Contemporaneamente, la direttiva europea EPBD "Case Green" richiede la riqualificazione energetica del patrimonio immobiliare entro il 2035, scatenando uno scontro politico tra incentivi statali e tutela della proprietà privata.',
    keyStatistics: [
      { label: 'Aumento Affitti Nelle Città', value: '+18%', source: 'Idealista / Immobiliare.it 2024', subtext: 'Incremento medio canoni 2022-2024' },
      { label: 'Studenti Fuori Sede', value: '830.000', source: 'CENSIS / MUR 2024', subtext: 'Solo il 5% ha posto in residenza universitaria' },
      { label: 'Immobili Classe F/G', value: '55%', source: 'ANCE / ENEA', subtext: 'Da riqualificare per Direttiva UE' }
    ],
    currentLawContext: 'In vigore il CIN (Codice Identificativo Nazionale) per gli affitti brevi e la revisione delle aliquote della cedolare secca al 26% dal secondo appartamento. Risorse del PNRR per 60.000 nuovi posti letto universitari.',
    stances: [
      {
        partyId: 'fdi',
        stance: 'favorevole',
        summary: 'Tutela sacrosanta della proprietà privata, piano Casa per famiglie ed opposizione a patrimoniali o vincoli "Casa Green" UE.',
        details: [
          'Introduzione del CIN obbligatorio contro l\'abusivismo negli affitti brevi senza penalizzare la piccola proprietà.',
          'Opposizione ferma ai target vincolanti ed alle sanzioni della direttiva europea EPBD "Case Green".',
          'Utilizzo del fondo garanzia mutui prima casa per i giovani under 36.'
        ],
        keyProposal: 'Piano Casa Nazionale per la prima casa e difesa della proprietà immobiliare contro i vincoli UE.',
        quotes: [
          { text: "La casa in Italia è il frutto dei sacrifici delle famiglie e non sarà mai toccata da patrimoniali o direttive punitive europee.", speaker: "Giorgia Meloni", role: "Premier (FdI)", date: "2024" }
        ]
      },
      {
        partyId: 'pd',
        stance: 'condizionato',
        summary: 'Piano straordinario da 100.000 alloggi di Social Housing e regolamentazione stringente dei sindaci su Airbnb.',
        details: [
          'Concessione ai Comuni del potere di limitare il numero di licenze per affitti brevi nei centri storici saturated.',
          'Piano Nazionale Edilizia Residenziale Pubblica (ERP) per studenti fuori sede e lavoratori a basso reddito.',
          'Incentivi statali progressivi per la riqualificazione ecologica delle abitazioni senza pesare sui ceti popolari.'
        ],
        keyProposal: 'Piano pubblico di Social Housing e legge quadro sull\'emergenza affitti e residenze universitarie.',
        quotes: [
          { text: "Non è accettabile che uno studente debba pagare 800 euro per un posto letto in una stanza doppia a Milano o Roma. Serve il Social Housing subito.", speaker: "Elly Schlein", role: "Segretaria PD", date: "2024" }
        ]
      },
      {
        partyId: 'm5s',
        stance: 'condizionato',
        summary: 'Incentivi per la riqualificazione abitativa, blocco degli sfratti incontrollati e moratoria sugli affitti speculativi.',
        details: [
          'Sostegno economico statale per l\'adeguamento energetico degli immobili dei redditi medio-bassi.',
          'Reintroduzione del Fondo Nazionale per il Sostegno all\'Affitto azzerato dal Governo.',
          'Incentivi fiscali alle P.IVA ed ai proprietari che convertono affitti turistici brevi in locazioni a lungo termine.'
        ],
        keyProposal: 'Fondo di garanzia per la morosità incolpevole e piano integrato Casa Green a costo zero per i meno abbienti.',
        quotes: [
          { text: "Azzerare il fondo affitti in piena crisi economica è stato un atto di cattiveria sociale verso le famiglie in difficoltà.", speaker: "Giuseppe Conte", role: "Presidente M5S", date: "2024" }
        ]
      },
      {
        partyId: 'lega',
        stance: 'favorevole',
        summary: 'Salva-Casa per sanare le piccole difformità interne e stop totale a qualsiasi tassa o vincolo verde europeo.',
        details: [
          'Approvazione del Piano "Salva Casa" per regolarizzare piccoli abusi interni (tramezzi, soppalchi) e liberare la compravendita.',
          'No deciso al limite di licenze per gli affitti brevi: la proprietà privata è intangibile.',
          'Riduzione delle tasse sugli immobili e cedolare secca agevolata.'
        ],
        keyProposal: 'Piena attuazione del Decreto Salva Casa e sblocco del mercato immobiliare residenziale.',
        quotes: [
          { text: "Con il decreto Salva-Casa permettiamo a milioni di italiani di sistemare i propri appartamenti senza burocrazia e riattiviamo il mercato.", speaker: "Matteo Salvini", role: "Ministro Infrastrutture (Lega)", date: "2024" }
        ]
      },
      {
        partyId: 'fi',
        stance: 'favorevole',
        summary: 'Defiscalizzazione della casa, cedolare secca al 21% e partenariato pubblico-privato per la residenzialità.',
        details: [
          'Abolizione dell\'IMU sugli immobili inagibili ed occupati abusivamente.',
          'Sostegno alle imprese ed ai fondi immobiliari per la realizzazione di campus universitari privati convenzionati.',
          'Apertura al recepimento flessibile della direttiva Casa Green con risorse e credito d\'imposta.'
        ],
        keyProposal: 'Zero IMU sulle case occupate e cedolare secca stabile al 21% per le locazioni a canone concordato.',
        quotes: [
          { text: "Chi ha subito l'occupazione abusiva di casa sua non deve pagare un euro di IMU. La casa è il pilastro del ceto medio.", speaker: "Antonio Tajani", role: "Leader FI", date: "2024" }
        ]
      },
      {
        partyId: 'avs',
        stance: 'contrario',
        summary: 'Tetto massimo ai canoni di locazione, stop alla turistificazione dei centri storici ed esproprio sociale degli immobili sfitti.',
        details: [
          'Regolamentazione severissima di Airbnb con limite massimo di 30 giorni/anno per gli affitti brevi.',
          'Riconversione di edifici pubblici in disuso in residenze universitarie e case popolari.',
          'Tassazione fortemente penalizzante per gli immobili lasciati sfitti dai grandi fondi immobiliari.'
        ],
        keyProposal: 'Legge contro la speculazione immobiliare, tetto ai canoni di affitto e potenziamento ERP.',
        quotes: [
          { text: "I centri storici delle nostre città d'arte sono diventati dei villaggi turistici senza più residenti né studenti. Serve un freno a Airbnb.", speaker: "Angelo Bonelli", role: "Co-portavoce AVS", date: "2024" }
        ]
      },
      {
        partyId: 'azione',
        stance: 'condizionato',
        summary: 'Sbloccare la burocrazia per la costruzione di studentati e gestire gli affitti brevi con poteri alle Città Metropolitane.',
        details: [
          'Semplificazione delle procedure autorizzative per la conversione di immobili in residenze per studenti.',
          'Delegare ai Sindaci la facoltà di regolare gli affitti turistici in base all\'indice di saturazione quartiere per quartiere.',
          'Incentivi fiscali per le ristrutturazioni energetiche focalizzati sui condomini delle periferie.'
        ],
        keyProposal: 'Piano straordinario studentati con partenariato pubblico-privato e poteri speciali ai Sindaci.',
        quotes: [
          { text: "L'emergenza affitti si risolve aumentando l'offerta di alloggi e studentati, non con la demagogia dei blocchi dei prezzi.", speaker: "Carlo Calenda", role: "Leader Azione", date: "2024" }
        ]
      },
      {
        partyId: 'iv',
        stance: 'condizionato',
        summary: 'Incentivi fiscali per i proprietari che affittano a lungo termine a giovani e sblocco fondi PNRR per campus.',
        details: [
          'Aliquota cedolare secca al 10% per i proprietari che affittano a studenti ed a giovani lavoratori under 35.',
          'Accelerazione sui fondi PNRR per la realizzazione dei 60.000 posti letto universitari.',
          'Garantismo per il proprietario in caso di morosità con procedure rapide di rilascio dell\'immobile.'
        ],
        keyProposal: 'Cedolare secca al 10% sui canoni concordati giovanili e corsia veloce per gli studentati.',
        quotes: [
          { text: "Se si vuole che i proprietari affittino agli studenti invece che a Airbnb, bisogna abbassare le tasse e garantire che chi non paga esca subito.", speaker: "Matteo Renzi", role: "Leader IV", date: "2024" }
        ]
      },
      {
        partyId: 'piueuropa',
        stance: 'favorevole',
        summary: 'Recepimento della Direttiva Casa Green con Mutui Verdi Europei e liberalizzazione regolata del mercato.',
        details: [
          'Pieno sostegno al recepimento della Direttiva EPBD per la decarbonizzazione del patrimonio abitativo.',
          'Emissione di Eurobond o Mutui Verdi Europei a tasso zero per finanziare le ristrutturazioni delle famiglie.',
          'Trasparenza totale nei registri telematici degli affitti brevi.'
        ],
        keyProposal: 'Mutui Verdi garantiti dalla BEI per la riqualificazione abitativa ed integrazione con la Direttiva UE.',
        quotes: [
          { text: "La direttiva Casa Green è una grande opportunità per ridurre le bollette e le emissioni. L'Europa deve aiutare le famiglie con fondi dedicati.", speaker: "Riccardo Magi", role: "Segretario +Europa", date: "2024" }
        ]
      }
    ]
  },
  {
    id: 'intelligenza-artificiale-innovazione',
    title: 'Intelligenza Artificiale, Digitalizzazione e Lavoro',
    iconName: 'Cpu',
    category: 'Economia & Lavoro',
    tags: ['AI Act', 'Sovranità Digitale', 'Privacy', 'Automazione', 'Banda Ultra-Larga'],
    shortDesc: 'Regolamentazione e strategia nazionale sull\'IA, impatto sui posti di lavoro clericali e completamento della rete a banda ultra-larga.',
    problemOverview: 'L\'avvento dell\'Intelligenza Artificiale generativa e l\'entrata in vigore dell\'EU AI Act pongono l\'Italia di fronte a sfide cruciali: bilanciare la tutela della privacy e dei diritti dei lavoratori con la necessità di non perdere competitività industriale e tecnologica. Il Piano Strategico Nazionale per l\'IA prevede investimenti per 1 miliardo di euro gestiti da Cassa Depositi e Prestiti (CDP Venture Capital), ma la frammentazione della rete internet ad alta velocità (FTTH) rallenta la digitalizzazione di PMI e Pubblica Amministrazione.',
    keyStatistics: [
      { label: 'Fondo Italiano IA', value: '1 Mld €', source: 'CDP Venture Capital / MIMIT 2024', subtext: 'Destinato a startup ed extended lab' },
      { label: 'Lavoratori a Rischio IA', value: '36%', source: 'Rapporto INPS / OECD 2024', subtext: 'Professioni ad alta intensità cognitiva' },
      { label: 'Copertura Rete FTTH', value: '59%', source: 'AGCOM 2024', subtext: 'Obiettivo PNRR 100% entro il 2026' }
    ],
    currentLawContext: 'Approvato il Disegno di Legge AI del Governo Meloni che introduce sanzioni penali per l\'uso illecito di deepfake e norma l\'uso dell\'IA in sanità e giustizia. Piena operatività del Regolamento Europeo AI Act.',
    stances: [
      {
        partyId: 'fdi',
        stance: 'favorevole',
        summary: 'IA antropocentrica guidata dalle regole, tutela del lavoro umano e fondo sovrano da 1 miliardo per le startup italiane.',
        details: [
          'Iniziativa legislativa per la punibilità penale dei reati commessi tramite IA (deepfake, manipolazione elettorale).',
          'Sostegno al Fondo Cassa Depositi e Prestiti Venture Capital per lo sviluppo di LLM ed algoritmi italiani.',
          'Garantire che l\'IA rimanga un assistente e non un sostituto dell\'uomo nei servizi pubblici e nella giustizia.'
        ],
        keyProposal: 'Legge quadro sull\'IA con sanzioni penali rafforzate ed investimento da 1 miliardo € su CDP Venture Capital.',
        quotes: [
          { text: "L'Intelligenza Artificiale è una grandissima opportunità ma deve rimanere antropocentrica: la tecnologia deve servire l'uomo, non sostituirlo.", speaker: "Giorgia Meloni", role: "Premier (FdI)", date: "2024" }
        ]
      },
      {
        partyId: 'pd',
        stance: 'condizionato',
        summary: 'Protezione dei diritti dei lavoratori dal controllo algoritmico, equo compenso per il copyright e formazione digitale.',
        details: [
          'Istituzione del "Diritto alla Riqualificazione Digitale" per i lavoratori esposti all\'automazione e all\'IA.',
          'Obbligo di trasparenza sugli algoritmi usati dalle aziende per la gestione ed il licenziamento dei dipendenti.',
          'Tutela rigorosa del diritto d\'autore e dei creativi per l\'addestramento dei modelli di IA generativa.'
        ],
        keyProposal: 'Piano straordinario di alfabetizzazione digitale e tutele sindacali contro il controllo algoritmico.',
        quotes: [
          { text: "L'IA non può diventare la scusa per precarizzare il lavoro e licenziare le persone. Servono regole europee severe ed equo compenso per gli artisti.", speaker: "Elly Schlein", role: "Segretaria PD", date: "2024" }
        ]
      },
      {
        partyId: 'm5s',
        stance: 'condizionato',
        summary: 'Reddito di cittadinanza tecnologico e riduzione dell\'orario di lavoro a parità di salario per l\'aumento di produttività IA.',
        details: [
          'Sperimentazione della settimana lavorativa di 32 ore (4 giorni) finanziata dai guadagni di produttività dell\'IA.',
          'Fondo per la transizione dei lavoratori sostituiti dai processi di automazione robotica.',
          'Accesso gratuito alle tecnologie digitali ed alla connettività per le famiglie meno abbienti.'
        ],
        keyProposal: 'Riduzione dell\'orario di lavoro a 32 ore a parità di stipendio grazie alla produttività dell\'IA.',
        quotes: [
          { text: "Se l'IA aumenta la produttività delle aziende, questo beneficio va redistribuito ai lavoratori lavorando meno ore a parità di stipendio.", speaker: "Giuseppe Conte", role: "Presidente M5S", date: "2024" }
        ]
      },
      {
        partyId: 'lega',
        stance: 'favorevole',
        summary: 'Sostegno all\'innovazione delle PMI senza burocrazia soffocante ed attuazione rapida della rete unica a banda ultra-larga.',
        details: [
          'Credito d\'imposta al 50% per le piccole e medie imprese che acquistano software e sistemi di IA.',
          'Accelerazione sui cantieri della fibra ottica e delle infrastrutture di calcolo (Supercomputer Cineca).',
          'Abolizione dei vincoli burocratici che frenano le startup tecnologiche.'
        ],
        keyProposal: 'Voucher Digitalizzazione 5.0 per le PMI e potenziamento dei poli di calcolo HPC in Italia.',
        quotes: [
          { text: "L'Italia ha il supercomputer Marconi100 a Bologna: siamo leader europei nella potenza di calcolo. Aiutiamo le nostre imprese a sfruttarlo.", speaker: "Matteo Salvini", role: "Leader Lega", date: "2024" }
        ]
      },
      {
        partyId: 'fi',
        stance: 'favorevole',
        summary: 'Digitilizzazione integrale della Pubblica Amministrazione ed incentivi fiscali per la transizione 5.0.',
        details: [
          'Integrazione dei sistemi di IA nell\'Agenzia delle Entrate e nella Giustizia Civile per ridurre i tempi dei processi.',
          'Aumento degli incentivi per la formazione 4.0 dei dirigenti d\'azienda.',
          'Sostegno alle partnership tra università italiane e colossi tech globali.'
        ],
        keyProposal: 'Applicazione dell\'IA nei procedimenti burocratici PA per l\'abbattimento dei tempi di risposta ai cittadini.',
        quotes: [
          { text: "Con l'IA possiamo sbiancare la burocrazia ed azzerare i tempi di attesa per un certificato o una sentenza civile.", speaker: "Antonio Tajani", role: "Leader FI", date: "2024" }
        ]
      },
      {
        partyId: 'avs',
        stance: 'contrario',
        summary: 'Moratoria sull\'uso dell\'IA per il riconoscimento facciale biometrico di massa e freno all\'impatto energetico dei Data Center.',
        details: [
          'Divieto assoluto di sorveglianza biometrica di massa e social scoring tramite IA.',
          'Norme sull\'impronta ecologica e sul consumo idrico/elettrico dei Data Center di addestramento dell\'IA.',
          'Difesa dell\'occupazione giovanile e contrasto al monopolio dei giganti Big Tech USA e cinesi.'
        ],
        keyProposal: 'Stop alla sorveglianza di massa biometrica e tassazione ecologica sui Data Center ad alto consumo.',
        quotes: [
          { text: "I data center dell'IA consumano quanta energia elettrica ed acqua consumano intere città. Non possiamo ignorare l'impatto ambientale.", speaker: "Angelo Bonelli", role: "Co-portavoce AVS", date: "2024" }
        ]
      },
      {
        partyId: 'azione',
        stance: 'favorevole',
        summary: 'Adesione convinta all\'AI Act UE, piano per l\'attrazione di talenti tech esteri e riforma dell\'istruzione STEM.',
        details: [
          'Allineamento completo con il regolamento europeo AI Act senza creare sovra-regolamentazioni nazionali (gold-plating).',
          'Borse di studio da 10.000 euro per studenti meritevoli in ingegneria informatica, matematica e IA.',
          'Superamento del divario digitale infrastrutturale nelle aree industriali del Paese.'
        ],
        keyProposal: 'Piano STEM per le scuole superiori e creazione dell\'Istituto Italiano per l\'Intelligenza Artificiale.',
        quotes: [
          { text: "Senza competenze scientifiche e matematiche l'Italia subirà l'IA invece di guidarla. Investiamo massicciamente sui giovani e sulle materie STEM.", speaker: "Carlo Calenda", role: "Leader Azione", date: "2024" }
        ]
      },
      {
        partyId: 'iv',
        stance: 'favorevole',
        summary: 'Sostegno totale alle startup innovative, deregolamentazione Intelligente e completamento della rete unica.',
        details: [
          'Incentivi fiscali al 50% per chi investe in startup e PMI innovative ad alta intensità tecnologica.',
          'Completamento immediato della Rete Unica di Telecomunicazioni in fibra ottica.',
          'Promozione dell\'IA applicata alla telemedicina ed alla diagnosi precoce.'
        ],
        keyProposal: 'Defiscalizzazione totale per i primi 5 anni delle startup deeptech ed IA.',
        quotes: [
          { text: "L'Europa non può essere soltanto il continente che regolamenta e sanziona. Dobbiamo creare le condizioni per far nascere i giganti tecnologici qui.", speaker: "Matteo Renzi", role: "Leader IV", date: "2024" }
        ]
      },
      {
        partyId: 'piueuropa',
        stance: 'favorevole',
        summary: 'Piena attuazione del mercato unico digitale UE, privacy garantita dal GDPR e sovranità tecnologica europea.',
        details: [
          'Attuazione omogenea dell\'EU AI Act in tutti i 27 Stati Membri.',
          'Libera circolazione dei dati non personali nell\'UE con standard etici e trasparenti.',
          'Creazione di una piattaforma cloud europea sovrana (Gaia-X).'
        ],
        keyProposal: 'Creazione del Cloud Sovrano Europeo per i dati pubblici e sanitari.',
        quotes: [
          { text: "La sovranità digitale si costruisce a livello europeo, non con veti o divieti nazionali. Sosteniamo la ricerca e la trasparenza degli algoritmi.", speaker: "Riccardo Magi", role: "Segretario +Europa", date: "2024" }
        ]
      }
    ]
  },
  {
    id: 'agricoltura-made-in-italy',
    title: 'Agricoltura, Made in Italy e Sostenibilità',
    iconName: 'Sprout',
    category: 'Ambiente & Energia',
    tags: ['Cibo Coltivato', 'PAC UE', 'Siccità', 'Caporalato', 'Nutriscore'],
    shortDesc: 'Divieto della carne coltivata in laboratorio, opposizione al Nutriscore, contrasto al caporalato e gestione della crisi idrica agricola.',
    problemOverview: 'L’agricoltura italiana vale oltre 60 miliardi di euro di valore aggiunto e rappresenta il cuore dell\'export "Made in Italy" agroalimentare (64 miliardi € nel 2023). Le proteste dei trattori in tutta Europa hanno rimetto al centro le criticità della Politica Agricola Comune (PAC) e del Green Deal europeo. Si scontrano due visioni: la tutela identitaria e sovranista delle produzioni tradizionali con divieto assoluto sui cibi sintetici/coltivati, contro approcci più aperti all\'innovazione biotecnologica e transizione ecologica accelerata.',
    keyStatistics: [
      { label: 'Export Agroalimentare', value: '64 Mld €', source: 'ISTAT / ISMEA 2023', subtext: 'Record storico di vendite esteri' },
      { label: 'Danni da Siccità', value: '1,5 Mld €/anno', source: 'Coldiretti 2024', subtext: 'Perdite raccolti per eventi estremi' },
      { label: 'Fondi PAC all\'Italia', value: '37 Mld €', source: 'Commissione Europea (2023-2027)', subtext: 'Sussidi diretti e sviluppo rurale' }
    ],
    currentLawContext: 'In vigore la Legge sul divieto di produzione e commercializzazione di cibi coltivati da colture cellulari e la tutela delle denominazioni tradizionali. Piano Straordinario Invasi contro la siccità.',
    stances: [
      {
        partyId: 'fdi',
        stance: 'favorevole',
        summary: 'Difesa del Made in Italy agroalimentare, divieto storico della carne coltivata e revisione della PAC UE.',
        details: [
          'Approvazione della legge sul divieto di produzione e vendita di cibo sintetico/coltivato per tutelare gli allevatori e la salute.',
          'Opposizione ferma al sistema di etichettatura Nutriscore che penalizza le eccellenze italiane (olio EVO, Parmigiano, prosciutto).',
          'Rinegoziazione dei vincoli burocratici ed ecologici della PAC europea dopo le proteste del settore.'
        ],
        keyProposal: 'Legge sul divieto della carne coltivata e difesa della sovranità alimentare italiana in Europa.',
        quotes: [
          { text: "L'Italia è la culla della dieta mediterranea. Non permetteremo mai che i cibi da laboratorio prodotti dalle multinazionali sostituiscano il nostro cibo di qualità.", speaker: "Giorgia Meloni", role: "Premier (FdI)", date: "2024" }
        ]
      },
      {
        partyId: 'pd',
        stance: 'condizionato',
        summary: 'Transizione ecologica giusta in agricoltura, lotta spietata al caporalato e piano straordinario contro la siccità.',
        details: [
          'Apertura alla ricerca scientifica biotecnologica (TEA - Tecnologie di Evoluzione Assistita) per piante resistenti alla siccità.',
          'Contrasto al caporalato ed allo sfruttamento dei lavoratori stagionali immigrati nei campi.',
          'Incentivi per l\'agricoltura di precisione e la gestione efficiente delle risorse idriche (bacini di accumulo).'
        ],
        keyProposal: 'Piano Invasi per la raccolta delle acque piovane e legge sulla dignità del lavoro agricolo.',
        quotes: [
          { text: "L'agricoltura italiana soffre per la crisi climatica e la siccità. Servono invasi per l'acqua e ricerca scientifica, non crociate ideologiche sui cibi da laboratorio.", speaker: "Elly Schlein", role: "Segretaria PD", date: "2024" }
        ]
      },
      {
        partyId: 'm5s',
        stance: 'condizionato',
        summary: 'Sostegno all\'agricoltura biologica e km zero, stop ai pesticidi nocivi e tutela dei piccoli agricoltori dai colossi distributivi.',
        details: [
          'Lotta contro le pratiche commerciali sleali della Grande Distribuzione Organizzata (GDO) per garantire prezzi giusti ai produttori.',
          'Sostegno alla conversione biologica del 30% dei terreni agricoli entro il 2030.',
          'Tutela della biodiversità e contrasto al consumo di suolo agricolo.'
        ],
        keyProposal: 'Legge sui prezzi minimi garantiti ai produttori agricoli e incentivi per la filiera corta biologica.',
        quotes: [
          { text: "Non è ammissibile che un agricoltore venga pagato pochi centesimi al chilo per il proprio grano e poi il pane finisca a 5 euro al chilo al supermercato.", speaker: "Giuseppe Conte", role: "Presidente M5S", date: "2024" }
        ]
      },
      {
        partyId: 'lega',
        stance: 'favorevole',
        summary: 'Barricata a difesa degli agricoltori italiani contro la burocrazia verde di Bruxelles ed opposizione al Nutriscore.',
        details: [
          'Semplificazione drastica dei controlli e dei moduli burocratici per l\'accesso ai contributi PAC.',
          'Battaglia in sede UE contro le etichette allarmistiche sul vino (modello irlandese) ed il Nutriscore.',
          'Difesa della pesca tradizionale e della caccia secondo le normative regionali.'
        ],
        keyProposal: 'Cancellazione delle norme del Green Deal che obbligano a lasciare i terreni incolti.',
        quotes: [
          { text: "Gli agricoltori sono i primi custodi dell'ambiente, non gli inquinatori. Basta con le follie ideologiche che arrivano da Bruxelles.", speaker: "Matteo Salvini", role: "Leader Lega", date: "2024" }
        ]
      },
      {
        partyId: 'fi',
        stance: 'favorevole',
        summary: 'Sostegno all\'export agroalimentare, investimenti in tecnologie d\'irrigazione goccia a goccia e credito agevolato.',
        details: [
          'Promozione del marchio Made in Italy nei mercati asiatici ed americani con la diplomazia della crescita.',
          'Finanziamento dell\'innovazione tecnologica per il risparmio idrico in campagna.',
          'Sostegno alla ricerca genomica non OGM (TEA) per rafforzare le colture tipiche.'
        ],
        keyProposal: 'Sgravi fiscali sulle assicurazioni contro le calamità naturali per le imprese agricole.',
        quotes: [
          { text: "Il nostro agroalimentare è un motore fondamentale dell'economia italiana: va difeso con la ricerca scientifica e con la presenza sui mercati esteri.", speaker: "Antonio Tajani", role: "Leader FI", date: "2024" }
        ]
      },
      {
        partyId: 'avs',
        stance: 'contrario',
        summary: 'Stop agli allevamenti intensivi inquinanti, promozione del cibo vegetale e tutela dei lavoratori agricoli stagionali.',
        details: [
          'Moratoria sull\'apertura di nuovi allevamenti intensivi per abbattere le emissioni di ammoniaca e polveri sottili.',
          'Apertura senza pregiudizi ideologici alla ricerca sulle proteine vegetali e coltivate per ridurre l\'impatto ambientale.',
          'Regolarizzazione dei braccianti stranieri e sanzioni pesanti per le aziende che utilizzano il caporalato.'
        ],
        keyProposal: 'Legge per la riconversione ecologica degli allevamenti intensivi e contrasto al caporalato.',
        quotes: [
          { text: "Il modello degli allevamenti intensivi devasta la pianura padana e gli ecosistemi. Dobbiamo sostenere la transizione verso una dieta sostenibile e vegetale.", speaker: "Angelo Bonelli", role: "Co-portavoce AVS", date: "2024" }
        ]
      },
      {
        partyId: 'azione',
        stance: 'condizionato',
        summary: 'Sì rigoroso alla ricerca scientifica (TEA e cibo coltivato), no alla demagogia anti-scientifica e gestione industriale dell\'acqua.',
        details: [
          'Apertura alla sperimentazione ed alla ricerca scientifica sulla carne e proteine coltivate senza divieti ideologici.',
          'Sostegno alle Tecnologie di Evoluzione Assistita (TEA) per rendere il Made in Italy resistente alle malattie ed al caldo.',
          'Consorzi di bonifica riorganizzati per la costruzione rapida di invasi ed idrovore di ultima generazione.'
        ],
        keyProposal: 'Sblocco della ricerca scientifica sul cibo coltivato e sulle TEA per l\'agricoltura 4.0.',
        quotes: [
          { text: "Vietare la ricerca sul cibo coltivato è un atto di oscurantismo anti-scientifico che regala la tecnologia e i brevetti a Singapore e agli USA.", speaker: "Carlo Calenda", role: "Leader Azione", date: "2024" }
        ]
      },
      {
        partyId: 'iv',
        stance: 'favorevole',
        summary: 'Agricoltura 4.0 con droni e satelliti, difesa delle eccellenze DOP/IGP e sblocco dei cantieri per i bacini idrici.',
        details: [
          'Pieno sostegno agli incentivi per trattori elettrici, droni per il monitoraggio e sensori di precisione.',
          'Sostegno alle esportazioni agroalimentari e protezione dalle contraffazioni internazionali (Italian Sounding).',
          'Nomina di un Commissario Straordinario per la Siccità con poteri d\'urgenza.'
        ],
        keyProposal: 'Piano Industria 4.0 esteso all\'agricoltura e nomina del Commissario Straordinario per la Siccità.',
        quotes: [
          { text: "L'agricoltura si salva con l'innovazione tecnologica, i droni e i satelliti, non rifiutando la modernità o chiudendosi nei confini.", speaker: "Matteo Renzi", role: "Leader IV", date: "2024" }
        ]
      },
      {
        partyId: 'piueuropa',
        stance: 'contrario',
        summary: 'No ai divieti ideologici sulla carne coltivata, sì alla libertà di ricerca scientifica e riallineamento alle direttive UE.',
        details: [
          'Impugnazione del divieto italiano sulla carne coltivata dinanzi alla Corte di Giustizia UE per violazione del mercato unico.',
          'Promozione di diete sostenibili e diversificate prive di barriere protezionistiche.',
          'Sostegno alla transizione ecologica del Green Deal europeo per preservare la biodiversità.'
        ],
        keyProposal: 'Abrogazione del divieto di produzione della carne coltivata e rispetto del mercato unico europeo.',
        quotes: [
          { text: "Il divieto della carne coltivata approvato in Italia è una norma luddata e contraria al diritto dell'Unione Europea che frena il futuro.", speaker: "Riccardo Magi", role: "Segretario +Europa", date: "2024" }
        ]
      }
    ]
  }
];
