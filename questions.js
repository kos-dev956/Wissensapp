// Kuratierte Fragenbank – wird ohne API-Key verwendet.
// Themen-IDs müssen zu TOPICS in index.html passen.
// Schwierigkeit: 'leicht' | 'mittel' | 'schwer'

const QUESTIONS = [
  // === GESCHICHTE ===
  {
    id: 'gesch-001', topic: 'geschichte', difficulty: 'leicht',
    question: 'In welchem Jahr fiel die Berliner Mauer?',
    options: ['1987', '1989', '1990', '1991'],
    correct_index: 1,
    explanation: 'Am 9. November 1989 wurde die Berliner Mauer geöffnet, nach über 28 Jahren Teilung der Stadt.',
    fun_fact: 'Die Maueröffnung war ein Versehen – Politbüromitglied Günter Schabowski las eine Notiz vor und sagte "sofort, unverzüglich", obwohl die neue Regelung erst am nächsten Tag in Kraft treten sollte.'
  },
  {
    id: 'gesch-002', topic: 'geschichte', difficulty: 'leicht',
    question: 'Welche Pyramide ist die größte in Ägypten?',
    options: ['Cheops-Pyramide', 'Chephren-Pyramide', 'Mykerinos-Pyramide', 'Pyramide von Sakkara'],
    correct_index: 0,
    explanation: 'Die Cheops-Pyramide (auch Große Pyramide von Gizeh) ist mit ursprünglich 146 Metern die größte und älteste der drei Pyramiden von Gizeh.',
    fun_fact: 'Sie war über 3800 Jahre lang das höchste Bauwerk der Welt – bis zur Vollendung des Straßburger Münsters 1439.'
  },
  {
    id: 'gesch-003', topic: 'geschichte', difficulty: 'mittel',
    question: 'Welches Ereignis löste den Ersten Weltkrieg aus?',
    options: ['Versailler Vertrag', 'Attentat auf Erzherzog Franz Ferdinand', 'Russische Revolution', 'Versenkung der Lusitania'],
    correct_index: 1,
    explanation: 'Am 28. Juni 1914 wurde der österreichische Thronfolger Franz Ferdinand in Sarajevo erschossen – darauf folgte eine Kette von Kriegserklärungen.',
    fun_fact: 'Der Fahrer Franz Ferdinands verfuhr sich nach einem ersten gescheiterten Anschlag – auf der Rückfahrtroute lief der Attentäter Gavrilo Princip dem Wagen zufällig in die Arme.'
  },
  {
    id: 'gesch-004', topic: 'geschichte', difficulty: 'mittel',
    question: 'Wer war der erste Bundeskanzler der Bundesrepublik Deutschland?',
    options: ['Willy Brandt', 'Konrad Adenauer', 'Ludwig Erhard', 'Kurt Schumacher'],
    correct_index: 1,
    explanation: 'Konrad Adenauer (CDU) war von 1949 bis 1963 erster Bundeskanzler und prägte die junge Bundesrepublik entscheidend.',
    fun_fact: 'Adenauer wurde mit 73 Jahren Kanzler und blieb es bis 87 – er war einer der ältesten Regierungschefs der Welt zu seiner Zeit.'
  },
  {
    id: 'gesch-005', topic: 'geschichte', difficulty: 'schwer',
    question: 'Welcher Vertrag beendete 1648 den Dreißigjährigen Krieg?',
    options: ['Vertrag von Versailles', 'Westfälischer Frieden', 'Augsburger Religionsfriede', 'Wiener Kongress'],
    correct_index: 1,
    explanation: 'Der Westfälische Friede wurde 1648 in Münster und Osnabrück geschlossen und beendete einen der verheerendsten Konflikte Europas.',
    fun_fact: 'Der Westfälische Friede gilt heute als Geburtsstunde des modernen Völkerrechts – er etablierte das Konzept souveräner Nationalstaaten.'
  },
  {
    id: 'gesch-006', topic: 'geschichte', difficulty: 'schwer',
    question: 'Welches Volk eroberte 1453 Konstantinopel und beendete damit das Byzantinische Reich?',
    options: ['Mongolen', 'Araber', 'Osmanen', 'Russen'],
    correct_index: 2,
    explanation: 'Sultan Mehmed II. eroberte mit osmanischen Truppen am 29. Mai 1453 Konstantinopel – die Stadt wurde zur osmanischen Hauptstadt Istanbul.',
    fun_fact: 'Konstantinopel war fast 1000 Jahre lang nahezu uneinnehmbar geblieben – die Theodosianischen Mauern galten als die stärksten Befestigungen der Welt.'
  },

  // === GEOGRAFIE ===
  {
    id: 'geo-001', topic: 'geografie', difficulty: 'leicht',
    question: 'Wie heißt die Hauptstadt von Australien?',
    options: ['Sydney', 'Melbourne', 'Canberra', 'Perth'],
    correct_index: 2,
    explanation: 'Canberra ist die Hauptstadt Australiens, obwohl Sydney und Melbourne beide deutlich größer sind.',
    fun_fact: 'Canberra wurde 1908 als Kompromiss zwischen den rivalisierenden Städten Sydney und Melbourne als Hauptstadt gegründet – beide wollten den Titel, also bekam keine ihn.'
  },
  {
    id: 'geo-002', topic: 'geografie', difficulty: 'leicht',
    question: 'Welcher Fluss ist der längste Europas?',
    options: ['Wolga', 'Donau', 'Rhein', 'Loire'],
    correct_index: 0,
    explanation: 'Die Wolga ist mit etwa 3530 km der längste Fluss Europas. Sie fließt komplett durch Russland.',
    fun_fact: 'Die Wolga mündet ins Kaspische Meer, das eigentlich der größte See der Welt ist – sie erreicht also nie das Meer im eigentlichen Sinne.'
  },
  {
    id: 'geo-003', topic: 'geografie', difficulty: 'mittel',
    question: 'Welches Gebirge bildet die natürliche Grenze zwischen Europa und Asien?',
    options: ['Kaukasus', 'Ural', 'Karpaten', 'Alpen'],
    correct_index: 1,
    explanation: 'Der Ural zieht sich rund 2400 km von Norden nach Süden und gilt traditionell als Trennung zwischen Europa und Asien.',
    fun_fact: 'Die Trennung Europa/Asien am Ural ist eine kulturelle, keine geologische Konvention – tektonisch gehören beide zur selben eurasischen Platte.'
  },
  {
    id: 'geo-004', topic: 'geografie', difficulty: 'mittel',
    question: 'Welches ist das einzige Meer ohne Küste?',
    options: ['Sargassosee', 'Karibisches Meer', 'Beringsee', 'Adria'],
    correct_index: 0,
    explanation: 'Die Sargassosee liegt mitten im Atlantik und wird nicht von Land, sondern von Meeresströmungen begrenzt.',
    fun_fact: 'Sie ist berühmt für ihre dichten Sargassum-Algen, die ganze schwimmende Inseln bilden – Christoph Kolumbus erschrak vor ihnen auf seiner ersten Atlantiküberquerung.'
  },
  {
    id: 'geo-005', topic: 'geografie', difficulty: 'schwer',
    question: 'Welcher See ist der tiefste der Welt?',
    options: ['Lake Tanganyika', 'Baikalsee', 'Großer Sklavensee', 'Kaspisches Meer'],
    correct_index: 1,
    explanation: 'Der Baikalsee in Sibirien erreicht 1642 Meter Tiefe – kein anderer See kommt diesem Wert auch nur nahe.',
    fun_fact: 'Der Baikalsee enthält etwa 20% des nicht-gefrorenen Süßwassers der Erde – mehr als alle Großen Seen Nordamerikas zusammen.'
  },
  {
    id: 'geo-006', topic: 'geografie', difficulty: 'schwer',
    question: 'Welches Land hat die längste Küstenlinie der Welt?',
    options: ['Russland', 'Indonesien', 'Kanada', 'Australien'],
    correct_index: 2,
    explanation: 'Kanada hat mit über 200.000 km mit Abstand die längste Küstenlinie – inklusive seiner zahllosen arktischen Inseln.',
    fun_fact: 'Kanadas Küstenlinie ist länger als der gesamte Erdumfang am Äquator (~40.075 km) – mehr als fünfmal so lang.'
  },

  // === NATURWISSENSCHAFT ===
  {
    id: 'nat-001', topic: 'natur', difficulty: 'leicht',
    question: 'Wie viele Knochen hat ein erwachsener Mensch (etwa)?',
    options: ['156', '206', '256', '306'],
    correct_index: 1,
    explanation: 'Ein erwachsener Mensch hat etwa 206 Knochen – die genaue Zahl variiert leicht von Person zu Person.',
    fun_fact: 'Babys werden mit etwa 270 Knochen geboren – viele wachsen während der Entwicklung zusammen, etwa die einzelnen Schädelplatten.'
  },
  {
    id: 'nat-002', topic: 'natur', difficulty: 'leicht',
    question: 'Welcher Planet ist der Sonne am nächsten?',
    options: ['Venus', 'Erde', 'Mars', 'Merkur'],
    correct_index: 3,
    explanation: 'Merkur ist der innerste und kleinste Planet unseres Sonnensystems, im Schnitt etwa 58 Millionen km von der Sonne entfernt.',
    fun_fact: 'Trotz seiner Sonnennähe ist Merkur nicht der heißeste Planet – die Venus ist heißer, weil ihre dichte CO₂-Atmosphäre die Wärme festhält.'
  },
  {
    id: 'nat-003', topic: 'natur', difficulty: 'mittel',
    question: 'Was ist das häufigste Element im Universum?',
    options: ['Sauerstoff', 'Helium', 'Wasserstoff', 'Kohlenstoff'],
    correct_index: 2,
    explanation: 'Wasserstoff macht etwa 74% der gewöhnlichen Materie im Universum aus – er ist auch der Brennstoff der Sterne.',
    fun_fact: 'Praktisch jedes Wasserstoffatom in deinem Körper entstand wenige Minuten nach dem Urknall vor 13,8 Milliarden Jahren.'
  },
  {
    id: 'nat-004', topic: 'natur', difficulty: 'mittel',
    question: 'Welches Organ produziert beim Menschen Insulin?',
    options: ['Leber', 'Bauchspeicheldrüse', 'Niere', 'Milz'],
    correct_index: 1,
    explanation: 'Insulin wird in den sogenannten Langerhans-Inseln der Bauchspeicheldrüse (Pankreas) produziert und reguliert den Blutzucker.',
    fun_fact: 'Die Entdeckung des Insulins 1921 verwandelte Diabetes Typ 1 binnen Monaten von einer tödlichen in eine behandelbare Krankheit.'
  },
  {
    id: 'nat-005', topic: 'natur', difficulty: 'schwer',
    question: 'Was ist die ungefähre Halbwertszeit von Kohlenstoff-14 (C-14), das in der Archäologie genutzt wird?',
    options: ['ca. 570 Jahre', 'ca. 5.700 Jahre', 'ca. 57.000 Jahre', 'ca. 570.000 Jahre'],
    correct_index: 1,
    explanation: 'C-14 hat eine Halbwertszeit von etwa 5.730 Jahren – darauf basiert die Radiokohlenstoffdatierung organischer Proben.',
    fun_fact: 'Deshalb funktioniert die C-14-Datierung nur bis ca. 50.000 Jahre zurück – danach ist zu wenig C-14 übrig, um es zuverlässig zu messen.'
  },
  {
    id: 'nat-006', topic: 'natur', difficulty: 'schwer',
    question: 'Welches Teilchen vermittelt die elektromagnetische Wechselwirkung?',
    options: ['Gluon', 'Photon', 'W-Boson', 'Higgs-Boson'],
    correct_index: 1,
    explanation: 'Das Photon ist das Austauschteilchen der elektromagnetischen Kraft – jeder elektromagnetische Effekt geht letztlich auf Photonenaustausch zurück.',
    fun_fact: 'Photonen haben keine Ruhemasse – deshalb können sie sich mit Lichtgeschwindigkeit bewegen, was kein Teilchen mit Masse kann.'
  },

  // === KUNST & LITERATUR ===
  {
    id: 'kunst-001', topic: 'kunst', difficulty: 'leicht',
    question: 'Wer schrieb "Faust"?',
    options: ['Friedrich Schiller', 'Johann Wolfgang von Goethe', 'Gotthold Ephraim Lessing', 'Heinrich von Kleist'],
    correct_index: 1,
    explanation: '"Faust" ist Goethes Lebenswerk – Teil I erschien 1808, Teil II erst 1832 nach seinem Tod.',
    fun_fact: 'Goethe arbeitete über 60 Jahre an "Faust" – er begann als junger Mann und stellte das Werk wenige Monate vor seinem Tod fertig.'
  },
  {
    id: 'kunst-002', topic: 'kunst', difficulty: 'leicht',
    question: 'Welcher Maler schnitt sich ein Stück seines Ohres ab?',
    options: ['Pablo Picasso', 'Claude Monet', 'Vincent van Gogh', 'Edvard Munch'],
    correct_index: 2,
    explanation: 'Vincent van Gogh verletzte sich im Dezember 1888 in Arles selbst am linken Ohr – nach einem Streit mit Paul Gauguin.',
    fun_fact: 'Lange galt als gesichert, dass Van Gogh sich nur das Ohrläppchen abschnitt – neuere Forschungen deuten darauf hin, dass er fast das ganze Ohr entfernte.'
  },
  {
    id: 'kunst-003', topic: 'kunst', difficulty: 'mittel',
    question: 'Wer schrieb "Don Quijote"?',
    options: ['Lope de Vega', 'Miguel de Cervantes', 'Calderón de la Barca', 'Federico García Lorca'],
    correct_index: 1,
    explanation: 'Cervantes veröffentlichte den ersten Teil von "Don Quijote" 1605, den zweiten Teil 1615.',
    fun_fact: 'Der Roman gilt als der erste moderne Roman und als das meistübersetzte Buch der Welt nach der Bibel.'
  },
  {
    id: 'kunst-004', topic: 'kunst', difficulty: 'mittel',
    question: 'Wer malte die "Sixtinische Madonna"?',
    options: ['Leonardo da Vinci', 'Michelangelo', 'Raffael', 'Tizian'],
    correct_index: 2,
    explanation: 'Raffael schuf das Gemälde um 1512/13 – heute hängt es in der Gemäldegalerie Alte Meister in Dresden.',
    fun_fact: 'Die zwei Putten am unteren Bildrand sind möglicherweise die meistreproduzierten Engelsfiguren der Welt – Raffael malte sie nur als nachträglichen Lückenfüller.'
  },
  {
    id: 'kunst-005', topic: 'kunst', difficulty: 'schwer',
    question: 'Welches Werk beginnt mit "Als Gregor Samsa eines Morgens aus unruhigen Träumen erwachte, fand er sich in seinem Bett zu einem ungeheueren Ungeziefer verwandelt"?',
    options: ['Der Process', 'Die Verwandlung', 'Das Schloss', 'In der Strafkolonie'],
    correct_index: 1,
    explanation: 'Der berühmte Anfangssatz stammt aus Franz Kafkas Erzählung "Die Verwandlung" (1915).',
    fun_fact: 'Kafka verbot ausdrücklich jegliche bildliche Darstellung des Ungeziefers auf dem Buchcover – er wollte, dass es der Phantasie der Leser überlassen bleibt.'
  },
  {
    id: 'kunst-006', topic: 'kunst', difficulty: 'schwer',
    question: 'Welcher Künstler begründete den abstrakten Expressionismus mit seinen "Drip Paintings"?',
    options: ['Mark Rothko', 'Jackson Pollock', 'Willem de Kooning', 'Franz Kline'],
    correct_index: 1,
    explanation: 'Jackson Pollock entwickelte ab den späten 1940ern seine Drip-Technik: Farbe wurde von oben auf am Boden liegende Leinwände getropft.',
    fun_fact: 'Das Time Magazine nannte Pollock 1956 spöttisch "Jack the Dripper" – heute zählen seine Bilder zu den teuersten Kunstwerken der Welt.'
  },

  // === POLITIK & GESELLSCHAFT ===
  {
    id: 'pol-001', topic: 'politik', difficulty: 'leicht',
    question: 'Wie viele Bundesländer hat Deutschland?',
    options: ['14', '15', '16', '17'],
    correct_index: 2,
    explanation: 'Deutschland besteht seit der Wiedervereinigung 1990 aus 16 Bundesländern.',
    fun_fact: 'Die drei Stadtstaaten Berlin, Hamburg und Bremen sind gleichzeitig Städte und Bundesländer – Bremen besteht sogar aus zwei Städten, Bremen und Bremerhaven.'
  },
  {
    id: 'pol-002', topic: 'politik', difficulty: 'leicht',
    question: 'In welcher Stadt sitzt die EU-Kommission?',
    options: ['Straßburg', 'Brüssel', 'Luxemburg', 'Frankfurt'],
    correct_index: 1,
    explanation: 'Die Europäische Kommission hat ihren Hauptsitz in Brüssel – im Berlaymont-Gebäude.',
    fun_fact: 'Die EU hat drei "Hauptstädte": Brüssel (Kommission), Straßburg (Parlament) und Luxemburg (Gerichtshof) – ein politischer Kompromiss aus den Gründerjahren.'
  },
  {
    id: 'pol-003', topic: 'politik', difficulty: 'mittel',
    question: 'Welche Organisation wurde 1945 zur Verhinderung internationaler Konflikte gegründet?',
    options: ['NATO', 'Europäische Union', 'Vereinte Nationen (UNO)', 'OECD'],
    correct_index: 2,
    explanation: 'Die UNO wurde am 24. Oktober 1945 in San Francisco gegründet, als Nachfolgerin des gescheiterten Völkerbundes.',
    fun_fact: 'Der UN-Sicherheitsrat hat fünf ständige Mitglieder mit Vetorecht: USA, Russland, China, Frankreich, Großbritannien – die Siegermächte von 1945.'
  },
  {
    id: 'pol-004', topic: 'politik', difficulty: 'mittel',
    question: 'Wie nennt man eine Staatsform, in der die Macht von einer einzigen Person ausgeübt wird?',
    options: ['Oligarchie', 'Aristokratie', 'Autokratie', 'Plutokratie'],
    correct_index: 2,
    explanation: 'In einer Autokratie liegt die gesamte politische Macht bei einer Einzelperson, oft ohne Gewaltenteilung oder echte Wahlen.',
    fun_fact: 'Aristoteles unterschied bereits sechs Staatsformen – drei "gute" (Monarchie, Aristokratie, Politie) und drei "entartete" (Tyrannis, Oligarchie, "Demokratie" im Sinne von Pöbelherrschaft).'
  },
  {
    id: 'pol-005', topic: 'politik', difficulty: 'schwer',
    question: 'Welches Dokument bildet seit 1949 die rechtliche Grundlage Deutschlands?',
    options: ['Bürgerliches Gesetzbuch', 'Grundgesetz', 'Reichsverfassung', 'Strafgesetzbuch'],
    correct_index: 1,
    explanation: 'Das Grundgesetz wurde am 23. Mai 1949 verabschiedet und gilt seither als Verfassung der Bundesrepublik.',
    fun_fact: 'Das Grundgesetz hieß ursprünglich nicht "Verfassung", weil es als Provisorium für die geteilten deutschen Staaten gedacht war – nach der Wiedervereinigung 1990 wurde es trotzdem nicht umbenannt.'
  },
  {
    id: 'pol-006', topic: 'politik', difficulty: 'schwer',
    question: 'Was war der "Marshallplan"?',
    options: ['Ein NATO-Verteidigungsplan', 'Ein US-Wiederaufbauprogramm für Europa nach 1945', 'Eine Atomwaffenstrategie der USA', 'Ein UN-Hungerhilfeprogramm'],
    correct_index: 1,
    explanation: 'Das nach US-Außenminister George C. Marshall benannte Programm stellte ab 1948 rund 13 Milliarden Dollar für den Wiederaufbau Westeuropas bereit.',
    fun_fact: 'Die UdSSR und ihre Satellitenstaaten lehnten Marshallhilfe ab – das markierte den Beginn der politischen Spaltung Europas im Kalten Krieg.'
  },

  // === TECHNIK & ERFINDUNGEN ===
  {
    id: 'tech-001', topic: 'technik', difficulty: 'leicht',
    question: 'In welchem Jahr fand die erste bemannte Mondlandung statt?',
    options: ['1965', '1967', '1969', '1972'],
    correct_index: 2,
    explanation: 'Am 20. Juli 1969 landeten Neil Armstrong und Buzz Aldrin mit Apollo 11 als erste Menschen auf dem Mond.',
    fun_fact: 'Insgesamt landeten zwischen 1969 und 1972 zwölf Menschen auf dem Mond – seither war niemand mehr dort.'
  },
  {
    id: 'tech-002', topic: 'technik', difficulty: 'leicht',
    question: 'Wem wird die Erfindung des Telefons (mit US-Patent 1876) traditionell zugeschrieben?',
    options: ['Thomas Edison', 'Alexander Graham Bell', 'Nikola Tesla', 'Guglielmo Marconi'],
    correct_index: 1,
    explanation: 'Alexander Graham Bell erhielt 1876 das erste US-Patent für das Telefon und gilt seither als sein offizieller Erfinder.',
    fun_fact: 'Der Italiener Antonio Meucci hatte schon Jahre vorher ein ähnliches Gerät gebaut – 2002 erkannte der US-Kongress Meucci als eigentlichen Erfinder an.'
  },
  {
    id: 'tech-003', topic: 'technik', difficulty: 'mittel',
    question: 'Welche Erfindung gilt als Auslöser der industriellen Revolution?',
    options: ['Druckpresse', 'Dampfmaschine', 'Glühbirne', 'Eisenbahn'],
    correct_index: 1,
    explanation: 'Die durch James Watt ab 1769 entscheidend verbesserte Dampfmaschine machte erstmals fossile Energie industriell nutzbar.',
    fun_fact: 'Watt erfand die Dampfmaschine nicht – er verbesserte ein bestehendes Modell so radikal, dass es erst dadurch wirtschaftlich einsetzbar wurde.'
  },
  {
    id: 'tech-004', topic: 'technik', difficulty: 'mittel',
    question: 'Wer erfand den Buchdruck mit beweglichen Lettern in Europa?',
    options: ['Johannes Gutenberg', 'Aldus Manutius', 'Albrecht Dürer', 'Martin Luther'],
    correct_index: 0,
    explanation: 'Johannes Gutenberg führte um 1450 in Mainz das Drucken mit beweglichen Metalllettern ein und revolutionierte die Verbreitung von Wissen.',
    fun_fact: 'In China und Korea gab es bewegliche Lettern schon Jahrhunderte früher – aber erst Gutenbergs Verbindung aus Metallguss und Pressmechanik ermöglichte den industriellen Druck.'
  },
  {
    id: 'tech-005', topic: 'technik', difficulty: 'schwer',
    question: 'In welchem Jahr wurde das World Wide Web öffentlich zugänglich gemacht?',
    options: ['1989', '1991', '1993', '1995'],
    correct_index: 1,
    explanation: 'Tim Berners-Lee stellte am CERN 1989 das Konzept vor und veröffentlichte das WWW 1991 für die Öffentlichkeit.',
    fun_fact: 'Die allererste Website ist immer noch unter info.cern.ch erreichbar – sie erklärt schlicht, was das WWW ist.'
  },
  {
    id: 'tech-006', topic: 'technik', difficulty: 'schwer',
    question: 'Was war der ENIAC, fertiggestellt 1945/46?',
    options: ['Der erste programmierbare elektronische Großrechner', 'Die erste Atombombe', 'Der erste Düsenjet', 'Der erste Transistor'],
    correct_index: 0,
    explanation: 'ENIAC (Electronic Numerical Integrator and Computer) war der erste vollelektronische, programmierbare Großrechner der Welt.',
    fun_fact: 'ENIAC wog 27 Tonnen, füllte einen Raum von 167 m² und brauchte über 17.000 Elektronenröhren – die regelmäßig durchbrannten und ausgetauscht werden mussten.'
  },

  // === PHILOSOPHIE & RELIGION ===
  {
    id: 'phil-001', topic: 'philosophie', difficulty: 'leicht',
    question: '"Cogito, ergo sum" – welcher Philosoph prägte diesen Satz?',
    options: ['Platon', 'René Descartes', 'Immanuel Kant', 'Friedrich Nietzsche'],
    correct_index: 1,
    explanation: 'René Descartes formulierte den Satz im 17. Jahrhundert als Fundament seiner Philosophie: Selbst wenn alles zweifelhaft ist, muss derjenige, der zweifelt, existieren.',
    fun_fact: 'Descartes formulierte den Satz ursprünglich auf Französisch ("Je pense, donc je suis") – die berühmte lateinische Version stammt aus einer späteren Übersetzung.'
  },
  {
    id: 'phil-002', topic: 'philosophie', difficulty: 'leicht',
    question: 'Welche Religion hat weltweit die meisten Anhänger?',
    options: ['Islam', 'Christentum', 'Hinduismus', 'Buddhismus'],
    correct_index: 1,
    explanation: 'Mit etwa 2,4 Milliarden Anhängern ist das Christentum die größte Religion der Welt, gefolgt vom Islam mit rund 1,9 Milliarden.',
    fun_fact: 'Der Islam ist die am schnellsten wachsende Religion – Prognosen sehen ihn ab Mitte des 21. Jahrhunderts vor dem Christentum.'
  },
  {
    id: 'phil-003', topic: 'philosophie', difficulty: 'mittel',
    question: 'Welcher Philosoph schrieb "Also sprach Zarathustra"?',
    options: ['Arthur Schopenhauer', 'Georg Wilhelm Friedrich Hegel', 'Friedrich Nietzsche', 'Martin Heidegger'],
    correct_index: 2,
    explanation: 'Friedrich Nietzsches "Also sprach Zarathustra" (1883–1885) enthält zentrale Konzepte wie den Übermenschen und die ewige Wiederkehr.',
    fun_fact: 'Nietzsche wählte den persischen Religionsstifter Zarathustra als Sprecher seiner Anti-Moralphilosophie – er fand es ironisch, ausgerechnet ihn die Umkehrung der Werte verkünden zu lassen.'
  },
  {
    id: 'phil-004', topic: 'philosophie', difficulty: 'mittel',
    question: 'Welcher griechische Philosoph war Schüler des Sokrates und Lehrer des Aristoteles?',
    options: ['Pythagoras', 'Heraklit', 'Platon', 'Epikur'],
    correct_index: 2,
    explanation: 'Platon lernte bei Sokrates und unterrichtete später unter anderem Aristoteles in seiner Akademie in Athen.',
    fun_fact: 'Sokrates, Platon und Aristoteles bilden eine philosophische Linie über drei Generationen – ihre Lehrer-Schüler-Beziehungen haben das gesamte westliche Denken geprägt.'
  },
  {
    id: 'phil-005', topic: 'philosophie', difficulty: 'schwer',
    question: 'Was bedeutet der Begriff "Nirwana" im Buddhismus wörtlich?',
    options: ['Der buddhistische Himmel', 'Erlöschen (von Begehren und Leid)', 'Eine spezielle Meditationstechnik', 'Die heilige Schrift'],
    correct_index: 1,
    explanation: '"Nirwana" bezeichnet im Buddhismus das Erlöschen aller Anhaftungen und damit das Ende des Leidens und des Kreislaufs der Wiedergeburten.',
    fun_fact: 'Wörtlich heißt "Nirwana" "Auspusten" oder "Erlöschen" – wie das Auslöschen einer Kerzenflamme, nicht ein paradiesischer Ort.'
  },
  {
    id: 'phil-006', topic: 'philosophie', difficulty: 'schwer',
    question: 'Welches der Folgenden gehört NICHT zu den "Fünf Säulen" des Islam?',
    options: ['Glaubensbekenntnis', 'Pilgerfahrt nach Mekka', 'Almosengeben', 'Zölibat'],
    correct_index: 3,
    explanation: 'Die Fünf Säulen sind: Glaubensbekenntnis (Schahāda), rituelles Gebet, Almosen (Zakāt), Fasten im Ramadan und die Pilgerfahrt (Haddsch) – Zölibat gehört nicht dazu.',
    fun_fact: 'Die Pilgerfahrt nach Mekka muss jeder gesunde, finanziell fähige Muslim mindestens einmal im Leben unternehmen – sie ist einer der größten Menschenströme der Erde.'
  },

  // === SPRACHE & ETYMOLOGIE ===
  {
    id: 'spr-001', topic: 'sprache', difficulty: 'leicht',
    question: 'Aus welcher Sprache stammt das Wort "Algebra"?',
    options: ['Griechisch', 'Latein', 'Arabisch', 'Sanskrit'],
    correct_index: 2,
    explanation: '"Algebra" kommt vom arabischen "al-dschabr" (الجبر), was etwa "das Zusammenfügen" bedeutet und auf ein mathematisches Werk des 9. Jahrhunderts zurückgeht.',
    fun_fact: 'Das Wort geht auf den persisch-arabischen Mathematiker al-Chwarizmi zurück – aus dessen latinisiertem Namen wurde übrigens auch "Algorithmus" gebildet.'
  },
  {
    id: 'spr-002', topic: 'sprache', difficulty: 'leicht',
    question: 'Welche Sprache hat weltweit die meisten Muttersprachler?',
    options: ['Englisch', 'Spanisch', 'Hindi', 'Mandarin-Chinesisch'],
    correct_index: 3,
    explanation: 'Mandarin hat mit rund 900 Millionen Muttersprachlern die meisten Erstsprecher weltweit.',
    fun_fact: 'Englisch hat zwar mit Zweitsprechern zusammen mehr Sprecher insgesamt (~1,5 Mrd.) – aber als Muttersprache liegt Mandarin klar vorn.'
  },
  {
    id: 'spr-003', topic: 'sprache', difficulty: 'mittel',
    question: 'Welche dieser Sprachen ist NICHT mit dem Deutschen näher verwandt?',
    options: ['Niederländisch', 'Schwedisch', 'Ungarisch', 'Englisch'],
    correct_index: 2,
    explanation: 'Ungarisch gehört zu den uralischen Sprachen und ist nicht indogermanisch – die anderen drei sind germanische Sprachen wie Deutsch.',
    fun_fact: 'Ungarisch und Finnisch sind enger miteinander verwandt als mit irgendeiner anderen europäischen Sprache – obwohl rund 1000 km zwischen ihnen liegen.'
  },
  {
    id: 'spr-004', topic: 'sprache', difficulty: 'mittel',
    question: 'Woher stammt das Wort "Roboter"?',
    options: ['Aus dem Russischen', 'Aus dem Tschechischen', 'Aus dem Japanischen', 'Aus dem Englischen'],
    correct_index: 1,
    explanation: 'Karel Čapek führte das Wort 1920 in seinem Theaterstück "R.U.R." ein – von tschechisch "robota" für Zwangsarbeit.',
    fun_fact: 'Das Wort "Roboter" existiert heute in fast jeder Sprache der Welt – einer der erfolgreichsten Sprachexporte aus dem Tschechischen.'
  },
  {
    id: 'spr-005', topic: 'sprache', difficulty: 'mittel',
    question: 'Welche Sprache wird im Vatikan offiziell für Gesetze und Dokumente verwendet?',
    options: ['Italienisch', 'Latein', 'Französisch', 'Deutsch'],
    correct_index: 1,
    explanation: 'Latein ist die offizielle Amtssprache des Heiligen Stuhls – Italienisch ist im Vatikan zwar Alltagssprache, aber nicht für offizielle Akte.',
    fun_fact: 'Der Vatikan ist der einzige Staat, dessen Geldautomaten zeitweise Anweisungen auf Latein anzeigten ("INSERTO SCIDULAM QUAESO UT FACIUNDAM COGNOSCAS RATIONEM").'
  },
  {
    id: 'spr-006', topic: 'sprache', difficulty: 'schwer',
    question: 'Aus welcher Sprache kommt das deutsche Wort "Tohuwabohu"?',
    options: ['Jiddisch', 'Hebräisch', 'Arabisch', 'Türkisch'],
    correct_index: 1,
    explanation: '"Tohuwabohu" stammt direkt aus dem hebräischen "tohu wa-bohu" im ersten Buch Mose und beschreibt den Urzustand der Welt als "wüst und leer".',
    fun_fact: 'Die Stelle Genesis 1,2 enthält einen der ältesten erhaltenen Hinweise auf das Wort – es bedeutete ursprünglich nicht "Chaos", sondern eher "unstrukturiert, leer".'
  },

  // === WIRTSCHAFT ===
  {
    id: 'wirt-001', topic: 'wirtschaft', difficulty: 'leicht',
    question: 'Was bedeutet das Kürzel BIP?',
    options: ['Bruttoinlandsprodukt', 'Banken-Inflations-Politik', 'Börsen-Index-Punktzahl', 'Bundes-Importplan'],
    correct_index: 0,
    explanation: 'Das Bruttoinlandsprodukt misst den Gesamtwert aller in einem Land in einem Jahr produzierten Waren und Dienstleistungen.',
    fun_fact: 'Das BIP wurde erst in den 1930ern als Konzept entwickelt – als Reaktion auf die Große Depression brauchte man eine Kennzahl, um die Wirtschaft systematisch zu messen.'
  },
  {
    id: 'wirt-002', topic: 'wirtschaft', difficulty: 'leicht',
    question: 'Wer schrieb "Der Wohlstand der Nationen" (1776) und gilt als Begründer der modernen Volkswirtschaftslehre?',
    options: ['Karl Marx', 'John Maynard Keynes', 'Adam Smith', 'David Ricardo'],
    correct_index: 2,
    explanation: 'Adam Smith veröffentlichte 1776 sein Hauptwerk und prägte mit Konzepten wie der "unsichtbaren Hand" die klassische Ökonomie.',
    fun_fact: 'Smith war eigentlich Moralphilosoph – sein Vorgängerwerk "Theorie der ethischen Gefühle" wird heute kaum noch gelesen, war zu seinen Lebzeiten aber bekannter.'
  },
  {
    id: 'wirt-003', topic: 'wirtschaft', difficulty: 'mittel',
    question: 'Welcher Ökonom propagierte staatliche Eingriffe zur Konjunkturbelebung in Krisen?',
    options: ['Friedrich Hayek', 'Milton Friedman', 'John Maynard Keynes', 'Joseph Schumpeter'],
    correct_index: 2,
    explanation: 'John Maynard Keynes argumentierte in den 1930ern, dass der Staat in Rezessionen zusätzlich ausgeben sollte, um die Nachfrage zu stützen.',
    fun_fact: 'Keynes\' Empfehlung "in der Krise ausgeben, in guten Zeiten zurückzahlen" wird in der Praxis fast nie vollständig umgesetzt – die "guten Zeiten" werden meist ebenfalls zum Ausgeben genutzt.'
  },
  {
    id: 'wirt-004', topic: 'wirtschaft', difficulty: 'mittel',
    question: 'Was bezeichnet "Inflation"?',
    options: ['Wachstum der Wirtschaftsleistung', 'Allgemeines Steigen des Preisniveaus', 'Erhöhung der Steuern', 'Wachstum der Bevölkerung'],
    correct_index: 1,
    explanation: 'Inflation ist ein anhaltender Anstieg des allgemeinen Preisniveaus – Geld verliert dadurch über die Zeit an Kaufkraft.',
    fun_fact: 'Die höchste dokumentierte Hyperinflation gab es 1946 in Ungarn – die Preise verdoppelten sich alle 15 Stunden, und es wurde der größte Geldschein der Geschichte gedruckt: 100 Trillionen Pengő.'
  },
  {
    id: 'wirt-005', topic: 'wirtschaft', difficulty: 'schwer',
    question: 'In welchem Jahr begann mit dem Börsencrash an der Wall Street die "Große Depression"?',
    options: ['1923', '1929', '1933', '1937'],
    correct_index: 1,
    explanation: 'Am "Schwarzen Donnerstag", 24. Oktober 1929, brach die New Yorker Börse zusammen – Auslöser der weltweiten Wirtschaftskrise der 1930er.',
    fun_fact: 'Der Dow Jones brauchte 25 Jahre, um wieder das Niveau von vor dem Crash zu erreichen – erst 1954 war er wieder auf dem alten Stand.'
  },
  {
    id: 'wirt-006', topic: 'wirtschaft', difficulty: 'schwer',
    question: 'Was beschreibt das Konzept des "Marktversagens"?',
    options: ['Den kompletten Zusammenbruch von Märkten', 'Ineffiziente Allokation durch Märkte (z. B. bei externen Kosten)', 'Staatliche Eingriffe in Märkte', 'Insolvenzen einzelner Unternehmen'],
    correct_index: 1,
    explanation: 'Marktversagen liegt vor, wenn der freie Markt zu einer gesamtgesellschaftlich ineffizienten Ressourcenverteilung führt – etwa bei externen Effekten oder öffentlichen Gütern.',
    fun_fact: 'Umweltverschmutzung ist das klassische Beispiel: Ohne Eingriff produziert der Markt mehr davon, als die Gesellschaft eigentlich akzeptieren würde – ein typisches Problem externer Kosten.'
  },
];

// === GESCHICHTE (Erweiterung) ===
QUESTIONS.push(
  {
    id: 'gesch-007', topic: 'geschichte', difficulty: 'leicht',
    question: 'Welcher Feldherr überquerte mit Kriegselefanten die Alpen, um Rom anzugreifen?',
    options: ['Cäsar', 'Alexander der Große', 'Hannibal', 'Spartakus'],
    correct_index: 2,
    explanation: 'Der karthagische Feldherr Hannibal überquerte 218 v. Chr. im Zweiten Punischen Krieg mit Heer und Kriegselefanten die Alpen und überraschte damit die Römer.',
    fun_fact: 'Von den rund 37 Kriegselefanten, mit denen Hannibal startete, überlebte fast keiner den Alpenwinter – die psychologische Wirkung war dennoch enorm.'
  },
  {
    id: 'gesch-008', topic: 'geschichte', difficulty: 'mittel',
    question: 'In welchem Jahr begann die Französische Revolution?',
    options: ['1776', '1789', '1815', '1848'],
    correct_index: 1,
    explanation: 'Mit dem Sturm auf die Bastille am 14. Juli 1789 begann die Französische Revolution, die das Ancien Régime stürzte.',
    fun_fact: 'In der Bastille saßen am Tag des Sturms gerade einmal sieben Häftlinge – darunter ein Wahnsinniger und mehrere Urkundenfälscher. Symbolwert über Substanz.'
  },
  {
    id: 'gesch-009', topic: 'geschichte', difficulty: 'mittel',
    question: 'Welcher Reformator schlug 1517 seine Thesen an die Wittenberger Schlosskirche?',
    options: ['Johannes Calvin', 'Martin Luther', 'Ulrich Zwingli', 'Thomas Müntzer'],
    correct_index: 1,
    explanation: 'Martin Luthers 95 Thesen gegen den Ablasshandel gelten als Auslöser der Reformation in Deutschland.',
    fun_fact: 'Ob Luther die Thesen tatsächlich an die Tür genagelt hat, ist historisch umstritten – sicher ist nur, dass er sie am 31. Oktober 1517 an seinen Erzbischof schickte.'
  },
  {
    id: 'gesch-010', topic: 'geschichte', difficulty: 'schwer',
    question: 'Welche Schlacht beendete 1815 Napoleons Herrschaft endgültig?',
    options: ['Austerlitz', 'Leipzig', 'Waterloo', 'Borodino'],
    correct_index: 2,
    explanation: 'In der Schlacht bei Waterloo am 18. Juni 1815 unterlag Napoleon den Truppen Wellingtons und Blüchers – er wurde anschließend nach St. Helena verbannt.',
    fun_fact: 'Den Ausschlag gab das verspätete Eintreffen der preußischen Truppen unter Blücher – Wellington selbst nannte den Sieg "die knappste Sache, die man je gesehen hat".'
  }
);

// === GEOGRAFIE (Erweiterung) ===
QUESTIONS.push(
  {
    id: 'geo-007', topic: 'geografie', difficulty: 'leicht',
    question: 'Welches ist das flächenmäßig größte Land der Erde?',
    options: ['China', 'Kanada', 'USA', 'Russland'],
    correct_index: 3,
    explanation: 'Russland ist mit über 17 Millionen km² mit Abstand das größte Land der Erde – fast doppelt so groß wie Kanada.',
    fun_fact: 'Russland erstreckt sich über elf Zeitzonen – wenn in Kaliningrad gerade die Sonne aufgeht, ist es in Kamtschatka schon tief in der Nacht.'
  },
  {
    id: 'geo-008', topic: 'geografie', difficulty: 'mittel',
    question: 'Welcher Berg ist der höchste Afrikas?',
    options: ['Kenia-Berg', 'Mount Stanley', 'Kilimandscharo', 'Ras Daschen'],
    correct_index: 2,
    explanation: 'Der Kilimandscharo in Tansania ist mit 5.895 Metern der höchste Berg Afrikas – und einer der höchsten freistehenden Berge der Welt.',
    fun_fact: 'Trotz seiner Lage knapp südlich des Äquators trägt der Kilimandscharo Gletscher – die allerdings durch den Klimawandel rapide schmelzen.'
  },
  {
    id: 'geo-009', topic: 'geografie', difficulty: 'mittel',
    question: 'Welche ist die größte heiße Wüste der Welt?',
    options: ['Gobi', 'Sahara', 'Kalahari', 'Atacama'],
    correct_index: 1,
    explanation: 'Die Sahara erstreckt sich über mehr als 9 Millionen km² in Nordafrika und ist die größte heiße Wüste der Erde.',
    fun_fact: 'Streng genommen ist die größte Wüste der Welt die Antarktis – Wüste ist definiert als sehr niederschlagsarm, nicht als heiß und sandig.'
  },
  {
    id: 'geo-010', topic: 'geografie', difficulty: 'schwer',
    question: 'Welcher ist der höchste Wasserfall der Welt?',
    options: ['Niagarafälle', 'Iguazú-Fälle', 'Salto Ángel', 'Viktoriafälle'],
    correct_index: 2,
    explanation: 'Der Salto Ángel in Venezuela stürzt 979 Meter in die Tiefe – fast 20-mal höher als die Niagarafälle.',
    fun_fact: 'Der Wasserfall ist nach dem US-Piloten Jimmy Angel benannt, der 1933 fast zufällig darüber flog – und 1937 mit seinem Flugzeug auf dem Plateau notlanden musste.'
  }
);

// === NATURWISSENSCHAFT (Erweiterung) ===
QUESTIONS.push(
  {
    id: 'nat-007', topic: 'natur', difficulty: 'leicht',
    question: 'Wie viele Planeten zählt unser Sonnensystem offiziell?',
    options: ['7', '8', '9', '10'],
    correct_index: 1,
    explanation: 'Seit der Neudefinition durch die Internationale Astronomische Union 2006 zählen acht Planeten – Pluto wurde zum Zwergplaneten herabgestuft.',
    fun_fact: 'Die Entscheidung 2006 war hochumstritten – heute gibt es Bewegungen, Pluto wieder den vollen Planetenstatus zu geben.'
  },
  {
    id: 'nat-008', topic: 'natur', difficulty: 'mittel',
    question: 'Wer formulierte die spezielle und allgemeine Relativitätstheorie?',
    options: ['Isaac Newton', 'Niels Bohr', 'Albert Einstein', 'Max Planck'],
    correct_index: 2,
    explanation: 'Albert Einstein veröffentlichte 1905 die spezielle und 1915 die allgemeine Relativitätstheorie und revolutionierte das physikalische Weltbild.',
    fun_fact: 'Den Nobelpreis bekam Einstein nicht für die Relativitätstheorie, sondern für seine Erklärung des photoelektrischen Effekts – die Relativitätstheorie galt vielen Komiteemitgliedern als zu spekulativ.'
  },
  {
    id: 'nat-009', topic: 'natur', difficulty: 'mittel',
    question: 'Welche Blutgruppe gilt als universeller Spender für rote Blutkörperchen?',
    options: ['A negativ', '0 negativ', 'AB positiv', 'B positiv'],
    correct_index: 1,
    explanation: '"0 negativ" hat weder A- noch B-Antigene und keinen Rhesus-Faktor – Erythrozyten dieser Blutgruppe können fast jedem Menschen transfundiert werden.',
    fun_fact: 'Beim Blutplasma ist es umgekehrt: AB ist Universalspender, weil das Plasma keine Antikörper enthält.'
  },
  {
    id: 'nat-010', topic: 'natur', difficulty: 'schwer',
    question: 'Wer entdeckte 1928 die antibiotische Wirkung des Penicillins?',
    options: ['Robert Koch', 'Alexander Fleming', 'Paul Ehrlich', 'Louis Pasteur'],
    correct_index: 1,
    explanation: 'Alexander Fleming bemerkte 1928 zufällig, dass ein Schimmelpilz (Penicillium) Bakterien auf einer Petrischale abtötete.',
    fun_fact: 'Fleming hatte vor dem Urlaub vergessen, seine Kulturen wegzuräumen – die Schimmel-Kontamination wäre normalerweise ein Laborfehler gewesen, kein Nobelpreis-Moment.'
  }
);

// === KUNST & LITERATUR (Erweiterung) ===
QUESTIONS.push(
  {
    id: 'kunst-007', topic: 'kunst', difficulty: 'leicht',
    question: 'Wer schrieb "Romeo und Julia"?',
    options: ['Christopher Marlowe', 'William Shakespeare', 'Charles Dickens', 'Oscar Wilde'],
    correct_index: 1,
    explanation: 'William Shakespeare schrieb das Stück um 1594/95 – es ist bis heute eines der meistgespielten Theaterstücke der Welt.',
    fun_fact: 'Shakespeare erfand die Geschichte nicht – er adaptierte ein italienisches Versepos und kürzte die Handlung auf wenige dramatische Tage zusammen.'
  },
  {
    id: 'kunst-008', topic: 'kunst', difficulty: 'mittel',
    question: 'Welcher Maler ist besonders für seine Seerosen-Bilder bekannt?',
    options: ['Édouard Manet', 'Claude Monet', 'Pierre-Auguste Renoir', 'Edgar Degas'],
    correct_index: 1,
    explanation: 'Claude Monet schuf in seinem Garten in Giverny über 250 Gemälde von Seerosen, die zu Ikonen des Impressionismus wurden.',
    fun_fact: 'Monet legte den Seerosenteich in Giverny selbst an – nicht als Motiv, sondern zum Vergnügen. Erst Jahre später wurde er zum Hauptmotiv seines Spätwerks.'
  },
  {
    id: 'kunst-009', topic: 'kunst', difficulty: 'mittel',
    question: 'Wer komponierte die 9. Sinfonie mit der "Ode an die Freude"?',
    options: ['Wolfgang Amadeus Mozart', 'Johann Sebastian Bach', 'Ludwig van Beethoven', 'Johannes Brahms'],
    correct_index: 2,
    explanation: 'Beethoven komponierte die 9. Sinfonie zwischen 1818 und 1824 – ihr Finalsatz vertont Schillers Gedicht "An die Freude".',
    fun_fact: 'Bei der Uraufführung 1824 war Beethoven bereits völlig taub – er stand mit dem Rücken zum Publikum und musste umgedreht werden, um den frenetischen Applaus zu sehen.'
  },
  {
    id: 'kunst-010', topic: 'kunst', difficulty: 'schwer',
    question: 'Welcher Roman von James Joyce spielt fast vollständig an einem einzigen Tag in Dublin?',
    options: ['Finnegans Wake', 'Ulysses', 'Porträt des Künstlers als junger Mann', 'Dubliners'],
    correct_index: 1,
    explanation: '"Ulysses" (1922) folgt Leopold Bloom an einem einzigen Tag – dem 16. Juni 1904 – durch Dublin.',
    fun_fact: 'Der 16. Juni wird weltweit als "Bloomsday" gefeiert – Joyce-Fans verkleiden sich und laufen Blooms Route durch Dublin nach.'
  }
);

// === POLITIK & GESELLSCHAFT (Erweiterung) ===
QUESTIONS.push(
  {
    id: 'pol-007', topic: 'politik', difficulty: 'leicht',
    question: 'Wer ist das offizielle Staatsoberhaupt Deutschlands?',
    options: ['Der Bundeskanzler', 'Der Bundespräsident', 'Der Bundestagspräsident', 'Der Bundesratspräsident'],
    correct_index: 1,
    explanation: 'Der Bundespräsident ist das Staatsoberhaupt der Bundesrepublik Deutschland – das Amt ist überwiegend repräsentativ.',
    fun_fact: 'Der Bundeskanzler ist zwar der mächtigste Politiker des Landes, aber protokollarisch dem Bundespräsidenten untergeordnet – ein bewusster Bruch mit der Weimarer Republik.'
  },
  {
    id: 'pol-008', topic: 'politik', difficulty: 'mittel',
    question: 'Wie viele Sterne hat die EU-Flagge?',
    options: ['12', '15', '27', 'so viele wie Mitgliedsstaaten'],
    correct_index: 0,
    explanation: 'Die EU-Flagge zeigt immer 12 Sterne – die Zahl ist symbolisch (für Vollkommenheit) und ändert sich nicht mit der Mitgliederzahl.',
    fun_fact: 'Die Flagge wurde 1955 ursprünglich für den Europarat entworfen – die EU übernahm sie erst 1985, behielt aber die 12 Sterne bei.'
  },
  {
    id: 'pol-009', topic: 'politik', difficulty: 'mittel',
    question: 'Welches Gremium wählt in den USA formal den Präsidenten?',
    options: ['Der Senat', 'Das Repräsentantenhaus', 'Das Wahlmännerkollegium', 'Der Oberste Gerichtshof'],
    correct_index: 2,
    explanation: 'Das "Electoral College" (Wahlmännerkollegium) mit 538 Wahlleuten entscheidet formal die Präsidentschaftswahl – nicht die landesweite Stimmenmehrheit.',
    fun_fact: 'Fünfmal in der US-Geschichte wurde ein Präsident gewählt, obwohl sein Gegner mehr Wählerstimmen insgesamt hatte – zuletzt 2016.'
  },
  {
    id: 'pol-010', topic: 'politik', difficulty: 'schwer',
    question: 'In welchem Jahr trat in Deutschland das Frauenwahlrecht in Kraft?',
    options: ['1871', '1918', '1933', '1949'],
    correct_index: 1,
    explanation: 'Mit dem Aufruf des Rats der Volksbeauftragten am 12. November 1918 erhielten Frauen in Deutschland das aktive und passive Wahlrecht.',
    fun_fact: 'Deutschland war damit europaweit relativ früh dran – die Schweiz führte das Frauenwahlrecht auf Bundesebene erst 1971 ein.'
  }
);

// === TECHNIK & ERFINDUNGEN (Erweiterung) ===
QUESTIONS.push(
  {
    id: 'tech-007', topic: 'technik', difficulty: 'leicht',
    question: 'Wem wird die Entwicklung der ersten serientauglichen Glühlampe zugeschrieben?',
    options: ['Nikola Tesla', 'Thomas Edison', 'Werner von Siemens', 'James Watt'],
    correct_index: 1,
    explanation: 'Thomas Edison entwickelte 1879/80 eine Kohlefaden-Glühlampe mit ausreichender Lebensdauer für den Massengebrauch.',
    fun_fact: 'Vor Edison hatten mehrere Erfinder funktionierende Glühlampen gebaut – Edisons Leistung war die Kombination aus haltbarer Lampe, Fassung, Stromnetz und Geschäftsmodell.'
  },
  {
    id: 'tech-008', topic: 'technik', difficulty: 'mittel',
    question: 'Wer baute 1886 das erste serientaugliche Automobil mit Verbrennungsmotor?',
    options: ['Henry Ford', 'Gottlieb Daimler', 'Rudolf Diesel', 'Carl Benz'],
    correct_index: 3,
    explanation: 'Carl Benz meldete 1886 den "Benz Patent-Motorwagen Nummer 1" zum Patent an – das gilt als die Geburtsstunde des Automobils.',
    fun_fact: 'Die erste Überland-Autofahrt unternahm 1888 Bertha Benz – heimlich, ohne das Wissen ihres Mannes, mit ihren beiden Söhnen über 100 km nach Pforzheim.'
  },
  {
    id: 'tech-009', topic: 'technik', difficulty: 'mittel',
    question: 'In welchem Jahr wurde das erste iPhone vorgestellt?',
    options: ['2005', '2007', '2009', '2011'],
    correct_index: 1,
    explanation: 'Steve Jobs stellte das erste iPhone am 9. Januar 2007 auf der Macworld-Konferenz in San Francisco vor.',
    fun_fact: 'Bei der berühmten Live-Demo 2007 funktionierte das iPhone nur mit einer streng geprobten Reihenfolge der Funktionen – jede andere hätte es abstürzen lassen.'
  },
  {
    id: 'tech-010', topic: 'technik', difficulty: 'schwer',
    question: 'Wer entwarf in den 1940er Jahren die erste höhere Programmiersprache "Plankalkül"?',
    options: ['Alan Turing', 'John von Neumann', 'Konrad Zuse', 'Grace Hopper'],
    correct_index: 2,
    explanation: 'Konrad Zuse entwickelte zwischen 1942 und 1946 mit dem Plankalkül die erste universelle, höhere Programmiersprache der Welt – allerdings nur als Konzept.',
    fun_fact: 'Plankalkül wurde zu Zuses Lebzeiten nie auf einem Computer implementiert – erst 2000 (54 Jahre später) lief das erste echte Plankalkül-Programm.'
  }
);

// === PHILOSOPHIE & RELIGION (Erweiterung) ===
QUESTIONS.push(
  {
    id: 'phil-007', topic: 'philosophie', difficulty: 'leicht',
    question: 'Welche Stadt gilt für Judentum, Christentum und Islam gleichermaßen als heilig?',
    options: ['Rom', 'Mekka', 'Jerusalem', 'Konstantinopel'],
    correct_index: 2,
    explanation: 'Jerusalem ist für alle drei abrahamitischen Religionen eine zentrale heilige Stadt – mit der Klagemauer, der Grabeskirche und dem Tempelberg.',
    fun_fact: 'Der Tempelberg ist zugleich der heiligste Ort des Judentums und mit dem Felsendom der drittheiligste Ort des Islam – diese Überlappung ist eine der Wurzeln des bis heute schwelenden Konflikts.'
  },
  {
    id: 'phil-008', topic: 'philosophie', difficulty: 'mittel',
    question: 'Wer schrieb "Die Kritik der reinen Vernunft" (1781)?',
    options: ['Georg Wilhelm Friedrich Hegel', 'Immanuel Kant', 'Johann Gottlieb Fichte', 'Friedrich Schelling'],
    correct_index: 1,
    explanation: 'Immanuel Kants Hauptwerk gilt als eine der wichtigsten Schriften der westlichen Philosophie und begründete den deutschen Idealismus.',
    fun_fact: 'Kant verließ seine Heimatstadt Königsberg sein ganzes Leben lang praktisch nie – sein streng geregelter Tagesablauf war so präzise, dass Nachbarn angeblich ihre Uhren nach ihm stellten.'
  },
  {
    id: 'phil-009', topic: 'philosophie', difficulty: 'mittel',
    question: 'Wie heißt die heilige Schrift des Islam?',
    options: ['Tora', 'Talmud', 'Koran', 'Avesta'],
    correct_index: 2,
    explanation: 'Der Koran ist die für Muslime heilige Schrift, die nach islamischem Glauben dem Propheten Mohammed im 7. Jahrhundert offenbart wurde.',
    fun_fact: 'Der Koran wird traditionell nur auf Arabisch als verbindlich gelesen – Übersetzungen gelten religiös als bloße Hilfen, nicht als der eigentliche Text.'
  },
  {
    id: 'phil-010', topic: 'philosophie', difficulty: 'schwer',
    question: 'Welche philosophische Schule wurde von Zenon von Kition begründet?',
    options: ['Epikureismus', 'Stoa', 'Skepsis', 'Kynismus'],
    correct_index: 1,
    explanation: 'Zenon von Kition gründete die Stoa um 300 v. Chr. in Athen – sie betont innere Gelassenheit und Tugend als höchstes Gut.',
    fun_fact: 'Die "Stoa" ist nach einer Säulenhalle (griechisch stoa poikilē) am athenischen Marktplatz benannt, wo Zenon seine Vorträge hielt.'
  }
);

// === SPRACHE & ETYMOLOGIE (Erweiterung) ===
QUESTIONS.push(
  {
    id: 'spr-007', topic: 'sprache', difficulty: 'leicht',
    question: 'Welche Sprache ist die offizielle Amtssprache Brasiliens?',
    options: ['Spanisch', 'Portugiesisch', 'Brasilianisch', 'Französisch'],
    correct_index: 1,
    explanation: 'Brasilien wurde von Portugal kolonisiert und hat als einziges Land Südamerikas Portugiesisch als Amtssprache.',
    fun_fact: 'Mit über 200 Millionen Sprechern leben heute mehr Menschen mit Portugiesisch als Muttersprache in Brasilien als in Portugal selbst – etwa zwanzigmal so viele.'
  },
  {
    id: 'spr-008', topic: 'sprache', difficulty: 'mittel',
    question: 'Was bedeutet das lateinische "et cetera" (etc.)?',
    options: ['und sicher', 'und so weiter', 'und niemals', 'und alle'],
    correct_index: 1,
    explanation: '"Et cetera" heißt wörtlich "und das Übrige" – also "und so weiter".',
    fun_fact: 'Das Komma vor "etc." ist im Deutschen optional – im Englischen hingegen gilt das Auslassen oft als Stilfehler.'
  },
  {
    id: 'spr-009', topic: 'sprache', difficulty: 'mittel',
    question: 'Welche Sprache hat Jesus laut Forschung im Alltag gesprochen?',
    options: ['Hebräisch', 'Aramäisch', 'Griechisch', 'Latein'],
    correct_index: 1,
    explanation: 'Jesus und die meisten Juden in Galiläa sprachen im ersten Jahrhundert Aramäisch – Hebräisch war damals schon eher liturgische Sprache.',
    fun_fact: 'Im Neuen Testament sind einige aramäische Worte direkt überliefert, etwa "Talita kum" ("Mädchen, steh auf") oder "Eli, Eli, lama sabachthani".'
  },
  {
    id: 'spr-010', topic: 'sprache', difficulty: 'schwer',
    question: 'Was bedeutet das griechische Präfix "hyper-" wörtlich?',
    options: ['unter', 'über', 'gegen', 'zusammen'],
    correct_index: 1,
    explanation: '"Hyper-" stammt aus dem Altgriechischen und bedeutet "über" oder "über das Maß hinaus" – Beispiele: Hyperaktivität, Hypertonie.',
    fun_fact: 'Sein Gegenteil ist "hypo-" (unter): Hypothermie ist Unterkühlung, Hyperthermie Überhitzung – ein einziger Vokal entscheidet den medizinischen Ernstfall.'
  }
);

// === WIRTSCHAFT (Erweiterung) ===
QUESTIONS.push(
  {
    id: 'wirt-007', topic: 'wirtschaft', difficulty: 'leicht',
    question: 'Welches Land hatte zuerst die Idee einer staatlich emittierten Papierwährung?',
    options: ['Italien', 'England', 'China', 'Niederlande'],
    correct_index: 2,
    explanation: 'Schon im 7. Jahrhundert kursierten in China papierne Schuldscheine; staatlich emittiertes Papiergeld gab es spätestens unter der Song-Dynastie im 11. Jahrhundert.',
    fun_fact: 'In Europa wurde Papiergeld erst 1661 in Schweden eingeführt – über 600 Jahre nach China.'
  },
  {
    id: 'wirt-008', topic: 'wirtschaft', difficulty: 'mittel',
    question: 'Welche Gesellschaft gilt als erste börsennotierte Aktiengesellschaft der Welt?',
    options: ['Britische Ostindien-Kompanie', 'Niederländische Ostindien-Kompanie (VOC)', 'Medici-Bank', 'Hudson\'s Bay Company'],
    correct_index: 1,
    explanation: 'Die Niederländische Ostindien-Kompanie (VOC) wurde 1602 gegründet und gab als erstes Unternehmen frei handelbare Aktien an die Öffentlichkeit aus.',
    fun_fact: 'Inflationsbereinigt war die VOC zur Spitzenzeit (ca. 1637) das wertvollste Unternehmen aller Zeiten – schätzungsweise mehr wert als Apple, Microsoft und Amazon zusammen heute.'
  },
  {
    id: 'wirt-009', topic: 'wirtschaft', difficulty: 'mittel',
    question: 'Wie nennt man einen Aktienmarkt mit deutlich fallenden Kursen?',
    options: ['Bullenmarkt', 'Bärenmarkt', 'Hahnenmarkt', 'Wolfsmarkt'],
    correct_index: 1,
    explanation: 'Ein Bärenmarkt (engl. "bear market") bezeichnet längere Phasen fallender Kurse, üblicherweise mit Rückgang von mindestens 20%.',
    fun_fact: 'Die Begriffe stammen vermutlich aus der Art, wie die Tiere angreifen: Der Bulle stößt mit den Hörnern nach oben, der Bär schlägt mit der Tatze nach unten.'
  },
  {
    id: 'wirt-010', topic: 'wirtschaft', difficulty: 'schwer',
    question: 'Wer veröffentlichte zusammen mit Friedrich Engels 1848 das "Manifest der Kommunistischen Partei"?',
    options: ['Wladimir Lenin', 'Karl Marx', 'Rosa Luxemburg', 'Michail Bakunin'],
    correct_index: 1,
    explanation: 'Karl Marx schrieb das Manifest gemeinsam mit Friedrich Engels und legte damit die ideologische Grundlage des modernen Kommunismus.',
    fun_fact: 'Marx und Engels schrieben den Text in nur wenigen Wochen – als Auftragsarbeit für den "Bund der Kommunisten", einem kleinen Geheimbund deutscher Exilanten in London.'
  }
);

// Damit auch das alte Skript-Tag-Setup funktioniert
if (typeof window !== 'undefined') window.QUESTIONS = QUESTIONS;
