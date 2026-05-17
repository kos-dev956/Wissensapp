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

// === ERWEITERUNG 2: Aufstockung auf ~200 Fragen ===

// --- Geschichte ---
QUESTIONS.push(
  { id: 'gesch-011', topic: 'geschichte', difficulty: 'leicht', question: 'Welcher Eroberer aus Mazedonien zog mit seinem Heer bis nach Indien?', options: ['Hannibal', 'Alexander der Große', 'Julius Cäsar', 'Karl der Große'], correct_index: 1, explanation: 'Alexander der Große (356–323 v. Chr.) eroberte in nur etwa 12 Jahren das Perserreich und drang bis zum Indus vor.', fun_fact: 'Alexander gründete unterwegs mehr als 20 Städte, die meisten benannte er nach sich selbst – das ägyptische Alexandria ist die berühmteste.' },
  { id: 'gesch-012', topic: 'geschichte', difficulty: 'leicht', question: 'Welche Stadt wurde der Sage nach 753 v. Chr. von Romulus gegründet?', options: ['Athen', 'Rom', 'Karthago', 'Konstantinopel'], correct_index: 1, explanation: 'Nach der römischen Legende gründete Romulus die Stadt Rom am 21. April 753 v. Chr. – nachdem er seinen Bruder Remus erschlagen hatte.', fun_fact: 'Die Geschichte von den Brüdern, die von einer Wölfin gesäugt werden, ist Mythos – archäologisch ist Rom nicht aus einem Gründungsakt entstanden, sondern aus mehreren Dörfern.' },
  { id: 'gesch-013', topic: 'geschichte', difficulty: 'leicht', question: 'Welches Volk eroberte 1066 England in der Schlacht bei Hastings?', options: ['Wikinger', 'Normannen', 'Sachsen', 'Friesen'], correct_index: 1, explanation: 'Wilhelm der Eroberer und seine Normannen schlugen am 14. Oktober 1066 König Harold II. – ein Wendepunkt der englischen Geschichte.', fun_fact: 'Seit Hastings ist Englisch von französischen Wörtern durchsetzt: cattle/beef, sheep/mutton – die Tiere blieben sächsisch, das Fleisch wurde französisch, weil die Normannen es servierten.' },
  { id: 'gesch-014', topic: 'geschichte', difficulty: 'leicht', question: 'Wer war der erste deutsche Kaiser nach der Reichsgründung 1871?', options: ['Wilhelm I.', 'Wilhelm II.', 'Friedrich III.', 'Bismarck'], correct_index: 0, explanation: 'Wilhelm I. wurde am 18. Januar 1871 im Spiegelsaal von Versailles zum Deutschen Kaiser proklamiert.', fun_fact: 'Wilhelm war eigentlich gegen den Kaisertitel – er hätte lieber den preußischen König behalten und musste von Bismarck überredet werden.' },
  { id: 'gesch-015', topic: 'geschichte', difficulty: 'mittel', question: 'Welcher römische Kaiser regierte zur Zeit der Geburt Jesu?', options: ['Nero', 'Augustus', 'Tiberius', 'Caligula'], correct_index: 1, explanation: 'Augustus (27 v. Chr. – 14 n. Chr.) war der erste römische Kaiser und regierte zur traditionellen Geburtszeit Jesu.', fun_fact: 'Im Lukasevangelium wird Augustus namentlich erwähnt: „in den Tagen des Kaisers Augustus ging ein Befehl aus, dass die ganze Welt geschätzt werde".' },
  { id: 'gesch-016', topic: 'geschichte', difficulty: 'mittel', question: 'In welchem Jahr wurde die Unabhängigkeitserklärung der USA unterzeichnet?', options: ['1763', '1776', '1789', '1812'], correct_index: 1, explanation: 'Am 4. Juli 1776 erklärten die 13 Kolonien ihre Unabhängigkeit vom Königreich Großbritannien.', fun_fact: 'Die berühmte Unterschrift von John Hancock ist so groß, dass „John Hancock" im Englischen umgangssprachlich „Unterschrift" bedeutet.' },
  { id: 'gesch-017', topic: 'geschichte', difficulty: 'mittel', question: 'Welche englische Königin regierte von 1558 bis 1603 in einer als „Goldenes Zeitalter" bekannten Phase?', options: ['Maria I.', 'Elisabeth I.', 'Anne', 'Victoria'], correct_index: 1, explanation: 'Elisabeth I. – Tochter Heinrichs VIII. und Anne Boleyns – führte England zur Seemacht und förderte Künste wie Shakespeare.', fun_fact: 'Elisabeth heiratete nie und wurde „Virgin Queen" genannt – der US-Bundesstaat Virginia ist nach ihr benannt.' },
  { id: 'gesch-018', topic: 'geschichte', difficulty: 'mittel', question: 'Welche zwei deutschen Staaten wurden 1949 gegründet?', options: ['BRD und Saarstaat', 'BRD und DDR', 'DDR und Westberlin', 'Weimarer Republik und DDR'], correct_index: 1, explanation: 'Die Bundesrepublik Deutschland wurde am 23. Mai 1949 ausgerufen, die DDR am 7. Oktober 1949 – damit war die Teilung politisch zementiert.', fun_fact: 'Beide Staaten beanspruchten zunächst Alleinvertretung für „Deutschland" – die DDR gab das in den 1970ern auf, die BRD behielt diese Position bis 1990.' },
  { id: 'gesch-019', topic: 'geschichte', difficulty: 'schwer', question: 'Welcher Vertrag teilte 1494 die „Neue Welt" zwischen Portugal und Spanien?', options: ['Vertrag von Versailles', 'Vertrag von Tordesillas', 'Vertrag von Utrecht', 'Vertrag von Aachen'], correct_index: 1, explanation: 'Der Vertrag von Tordesillas (vermittelt vom Papst) zog 1494 eine Linie durch den Atlantik – östlich davon Portugal, westlich Spanien.', fun_fact: 'Deshalb spricht ganz Lateinamerika spanisch – außer Brasilien, das östlich der Tordesillas-Linie lag und Portugal zufiel.' },
  { id: 'gesch-020', topic: 'geschichte', difficulty: 'schwer', question: 'Welche Schlacht 1683 wehrte die zweite osmanische Belagerung Wiens ab?', options: ['Schlacht am Kahlenberg', 'Schlacht von Lepanto', 'Schlacht bei Mohács', 'Schlacht von Belgrad'], correct_index: 0, explanation: 'Am 12. September 1683 schlug eine polnisch-deutsche Entsatzarmee unter Jan III. Sobieski die Osmanen vor Wien.', fun_fact: 'Eine Legende sagt, dass aus dem zurückgelassenen osmanischen Kaffee Wiens erstes Kaffeehaus entstand – und der Halbmond Inspiration für das Croissant wurde.' },
  { id: 'gesch-021', topic: 'geschichte', difficulty: 'schwer', question: 'Welcher römische Feldherr überquerte 49 v. Chr. den Rubikon und sagte „alea iacta est"?', options: ['Pompejus', 'Mark Anton', 'Julius Cäsar', 'Brutus'], correct_index: 2, explanation: 'Julius Cäsar überschritt mit seinen Legionen 49 v. Chr. den Rubikon – ein gesetzlich verbotener Akt, der den Bürgerkrieg auslöste.', fun_fact: 'Der Rubikon ist heute ein kleiner, unscheinbarer Bach in Norditalien – seine historische Bedeutung weit größer als seine Wassermenge.' },
  { id: 'gesch-022', topic: 'geschichte', difficulty: 'schwer', question: 'Wer war der spirituelle Anführer des Deutschen Bauernkriegs 1525?', options: ['Martin Luther', 'Thomas Müntzer', 'Ulrich Zwingli', 'Philipp Melanchthon'], correct_index: 1, explanation: 'Thomas Müntzer radikalisierte die Reformation sozial und politisch und führte die Bauern bis zur Schlacht bei Frankenhausen, wo er hingerichtet wurde.', fun_fact: 'Luther distanzierte sich scharf von Müntzer und forderte die Fürsten zur brutalen Niederschlagung auf – ein Bruch, der bis heute den Pietismus prägt.' }
);

// --- Geografie ---
QUESTIONS.push(
  { id: 'geo-011', topic: 'geografie', difficulty: 'leicht', question: 'Welcher Berg ist der höchste der Welt?', options: ['K2', 'Mount Everest', 'Mont Blanc', 'Aconcagua'], correct_index: 1, explanation: 'Der Mount Everest in Nepal/Tibet ist mit 8.849 m der höchste Berg der Erde.', fun_fact: 'Vom Erdmittelpunkt gemessen ist nicht der Everest der höchste Punkt der Erde, sondern der Chimborazo in Ecuador – wegen der Äquatorwölbung.' },
  { id: 'geo-012', topic: 'geografie', difficulty: 'leicht', question: 'In welchem Land liegt die Stadt Marrakesch?', options: ['Algerien', 'Marokko', 'Tunesien', 'Ägypten'], correct_index: 1, explanation: 'Marrakesch ist eine der vier Königsstädte Marokkos und liegt am Fuß des Atlas-Gebirges.', fun_fact: 'Die berühmte rote Farbe der Stadt kommt vom Ton der Stadtmauern – Marrakesch heißt deshalb auch „die rote Stadt".' },
  { id: 'geo-013', topic: 'geografie', difficulty: 'leicht', question: 'Welche Hauptstadt liegt am Tiber?', options: ['Athen', 'Rom', 'Madrid', 'Lissabon'], correct_index: 1, explanation: 'Rom wurde an den Hügeln am Tiber gegründet – der Fluss spielte für Handel und Mythos eine zentrale Rolle.', fun_fact: 'Der Tiber wird von den Römern „il biondo Tevere" („der blonde Tiber") genannt – wegen seiner gelblichen Sedimentfärbung.' },
  { id: 'geo-014', topic: 'geografie', difficulty: 'leicht', question: 'Wie heißt die Hauptstadt Schwedens?', options: ['Oslo', 'Helsinki', 'Stockholm', 'Kopenhagen'], correct_index: 2, explanation: 'Stockholm ist Hauptstadt und größte Stadt Schwedens – verteilt auf 14 Inseln im Stockholmer Schärengarten.', fun_fact: 'Wegen seiner vielen Brücken und Wasserflächen wird Stockholm auch „Venedig des Nordens" genannt.' },
  { id: 'geo-015', topic: 'geografie', difficulty: 'mittel', question: 'Welches Land der EU hat die meisten Einwohner?', options: ['Frankreich', 'Italien', 'Deutschland', 'Spanien'], correct_index: 2, explanation: 'Deutschland ist mit rund 84 Millionen Einwohnern das bevölkerungsreichste EU-Land.', fun_fact: 'Vor dem Brexit war das Vereinigte Königreich mit rund 67 Millionen das zweitgrößte – inzwischen ist Frankreich auf Platz zwei.' },
  { id: 'geo-016', topic: 'geografie', difficulty: 'mittel', question: 'Welche Bergkette trennt Spanien von Frankreich?', options: ['Alpen', 'Karpaten', 'Pyrenäen', 'Apenninen'], correct_index: 2, explanation: 'Die Pyrenäen erstrecken sich auf etwa 430 km zwischen dem Atlantik und dem Mittelmeer.', fun_fact: 'Mitten in den Pyrenäen liegt der Mini-Staat Andorra – seit 1278 ein Kondominium von Frankreich und dem spanischen Bischof von Urgell.' },
  { id: 'geo-017', topic: 'geografie', difficulty: 'mittel', question: 'Welches Meer trennt Schweden von Polen, Deutschland und dem Baltikum?', options: ['Nordsee', 'Ostsee', 'Adria', 'Schwarzes Meer'], correct_index: 1, explanation: 'Die Ostsee ist ein Nebenmeer des Atlantiks und nur durch wenige Meerengen mit der offenen See verbunden.', fun_fact: 'Wegen des geringen Salzgehalts und der schlechten Durchmischung gibt es in der Ostsee große sauerstofffreie Todeszonen am Boden.' },
  { id: 'geo-018', topic: 'geografie', difficulty: 'mittel', question: 'In welchem Land entspringt der Tigris?', options: ['Iran', 'Irak', 'Türkei', 'Syrien'], correct_index: 2, explanation: 'Der Tigris entspringt im Taurusgebirge in der Osttürkei und fließt durch Syrien und Irak.', fun_fact: 'Im Süden des Irak vereinigen sich Tigris und Euphrat zum Schatt al-Arab, bevor sie in den Persischen Golf münden – die Region des biblischen Mesopotamien.' },
  { id: 'geo-019', topic: 'geografie', difficulty: 'schwer', question: 'Welche Inselgruppe gehört zu Spanien, liegt aber vor der Westküste Afrikas?', options: ['Balearen', 'Kanaren', 'Azoren', 'Madeira'], correct_index: 1, explanation: 'Die Kanarischen Inseln liegen nur etwa 100 km vor der marokkanischen Atlantikküste und sind eine autonome Region Spaniens.', fun_fact: 'Der Name kommt nicht vom Vogel – sondern vom Lateinischen „canis" (Hund): Plinius berichtete von vielen großen Hunden auf den Inseln, danach wurde der Vogel benannt.' },
  { id: 'geo-020', topic: 'geografie', difficulty: 'schwer', question: 'Welche zwei Länder trennt die Beringstraße?', options: ['Russland und Japan', 'Russland und USA', 'Norwegen und Grönland', 'Kanada und Grönland'], correct_index: 1, explanation: 'Die Beringstraße trennt Tschukotka in Russland von Alaska in den USA – an der engsten Stelle nur 82 km.', fun_fact: 'Inmitten der Straße liegen die Diomedes-Inseln – nur 4 km voneinander entfernt, aber durch die Datumsgrenze 23 Stunden Zeitunterschied.' },
  { id: 'geo-021', topic: 'geografie', difficulty: 'schwer', question: 'Welcher Kontinent ist der flächenmäßig kleinste?', options: ['Europa', 'Antarktis', 'Australien (Ozeanien)', 'Südamerika'], correct_index: 2, explanation: 'Australien (bzw. Ozeanien) ist mit rund 8,5 Mio. km² der kleinste Kontinent.', fun_fact: 'Australien ist gleichzeitig die größte Insel der Welt – allerdings wird es üblicherweise als Kontinent klassifiziert, nicht als Insel.' },
  { id: 'geo-022', topic: 'geografie', difficulty: 'schwer', question: 'Welcher See ist der größte der Welt (nach Fläche)?', options: ['Lake Superior', 'Viktoriasee', 'Kaspisches Meer', 'Baikalsee'], correct_index: 2, explanation: 'Das Kaspische Meer ist trotz seines Namens ein See – mit rund 371.000 km² der größte der Erde.', fun_fact: 'Ob es als See oder Meer gilt, war jahrzehntelang umstritten – mit handfesten Folgen, weil sich daraus Verteilungsrechte auf Öl und Gas zwischen den Anrainerstaaten ableiten.' }
);

// --- Naturwissenschaft ---
QUESTIONS.push(
  { id: 'nat-011', topic: 'natur', difficulty: 'leicht', question: 'Wie viele Zähne hat ein erwachsener Mensch maximal (inklusive Weisheitszähne)?', options: ['28', '30', '32', '36'], correct_index: 2, explanation: 'Mit allen vier Weisheitszähnen hat der Mensch 32 Zähne – ohne sie 28.', fun_fact: 'Viele Menschen entwickeln gar keine Weisheitszähne mehr – ein evolutionärer Übergang, weil moderne Kiefer schmaler werden.' },
  { id: 'nat-012', topic: 'natur', difficulty: 'leicht', question: 'Welches Gas brauchen Pflanzen für die Photosynthese?', options: ['Sauerstoff', 'Stickstoff', 'Kohlendioxid', 'Wasserstoff'], correct_index: 2, explanation: 'Pflanzen nehmen CO₂ aus der Luft auf und produzieren mit Hilfe von Sonnenlicht Zucker und Sauerstoff.', fun_fact: 'Pro Jahr binden Pflanzen weltweit rund 120 Milliarden Tonnen Kohlenstoff – nur die rasante CO₂-Emission der Menschheit überholt diesen Kreislauf.' },
  { id: 'nat-013', topic: 'natur', difficulty: 'leicht', question: 'Welches chemische Element hat das Symbol „Au"?', options: ['Silber', 'Aluminium', 'Gold', 'Argon'], correct_index: 2, explanation: 'Das Symbol „Au" leitet sich vom lateinischen Wort „aurum" (Gold) ab.', fun_fact: 'Alles Gold, das je auf der Erde gefördert wurde, würde in einen Würfel von ca. 22 m Kantenlänge passen – weltweit erstaunlich wenig.' },
  { id: 'nat-014', topic: 'natur', difficulty: 'leicht', question: 'Welches Organ ist beim Menschen das größte innere Organ?', options: ['Herz', 'Leber', 'Magen', 'Lunge'], correct_index: 1, explanation: 'Die Leber wiegt etwa 1,5 kg und übernimmt unter anderem Entgiftung, Energiehaushalt und Eiweißsynthese.', fun_fact: 'Die Leber kann sich als einziges menschliches Organ vollständig regenerieren – schon ein Viertel reicht, um zu einer kompletten Leber nachzuwachsen.' },
  { id: 'nat-015', topic: 'natur', difficulty: 'mittel', question: 'Welcher Wissenschaftler formulierte die Evolutionstheorie durch natürliche Selektion?', options: ['Gregor Mendel', 'Charles Darwin', 'Louis Pasteur', 'Carl von Linné'], correct_index: 1, explanation: 'Darwin veröffentlichte 1859 „On the Origin of Species" – die Theorie der natürlichen Auslese revolutionierte die Biologie.', fun_fact: 'Darwin zögerte über 20 Jahre mit der Veröffentlichung – erst als Alfred Russel Wallace dieselbe Idee unabhängig entwickelte, brachte Darwin das Buch heraus.' },
  { id: 'nat-016', topic: 'natur', difficulty: 'mittel', question: 'Was ist der pH-Wert von reinem Wasser bei 25 °C?', options: ['0', '5', '7', '14'], correct_index: 2, explanation: 'Reines Wasser ist neutral und hat den pH-Wert 7 – Werte darunter sind sauer, darüber basisch.', fun_fact: 'Magensäure hat einen pH-Wert um 1,5 – stark genug, um die Magenwand selbst aufzulösen, wenn sie nicht durch eine Schleimschicht geschützt wäre.' },
  { id: 'nat-017', topic: 'natur', difficulty: 'mittel', question: 'Welcher Planet hat im Sonnensystem die meisten bestätigten Monde?', options: ['Jupiter', 'Saturn', 'Uranus', 'Neptun'], correct_index: 1, explanation: 'Saturn hat mit Stand 2024 über 140 bestätigte Monde – mehr als jeder andere Planet.', fun_fact: 'Lange galt Jupiter als Mond-Rekordhalter – Saturn überholte ihn erst 2023, als Astronomen 62 zusätzliche kleine Monde nachweisen konnten.' },
  { id: 'nat-018', topic: 'natur', difficulty: 'mittel', question: 'Welche Hauptaufgabe haben die roten Blutkörperchen?', options: ['Immunabwehr', 'Sauerstofftransport', 'Blutgerinnung', 'Hormonproduktion'], correct_index: 1, explanation: 'Erythrozyten binden Sauerstoff über das Eisen des Hämoglobins und transportieren ihn von der Lunge zu allen Körperzellen.', fun_fact: 'Ein erwachsener Mensch hat etwa 25 Billionen rote Blutkörperchen – jede Sekunde werden rund 2,4 Millionen davon im Knochenmark neu gebildet.' },
  { id: 'nat-019', topic: 'natur', difficulty: 'schwer', question: 'Wer entdeckte 1895 die später nach ihm benannte Strahlung?', options: ['Marie Curie', 'Wilhelm Conrad Röntgen', 'Antoine Henri Becquerel', 'Ernest Rutherford'], correct_index: 1, explanation: 'Wilhelm Conrad Röntgen entdeckte 1895 die X-Strahlen, im Deutschen heute „Röntgenstrahlen" genannt.', fun_fact: 'Röntgen weigerte sich, die Entdeckung patentieren zu lassen – sie sollte allen Menschen frei zugänglich sein. Er erhielt 1901 den ersten Physik-Nobelpreis überhaupt.' },
  { id: 'nat-020', topic: 'natur', difficulty: 'schwer', question: 'Wer entwickelte das Periodensystem der Elemente in seiner heute gebräuchlichen Form?', options: ['Antoine Lavoisier', 'Dmitri Mendelejew', 'John Dalton', 'Linus Pauling'], correct_index: 1, explanation: 'Dmitri Mendelejew veröffentlichte 1869 das Periodensystem und ließ Lücken für noch unentdeckte Elemente – die später gefunden wurden.', fun_fact: 'Mendelejew sagte sogar die Eigenschaften noch unbekannter Elemente voraus – als Gallium und Germanium später entdeckt wurden, passten sie verblüffend genau zu seinen Vorhersagen.' },
  { id: 'nat-021', topic: 'natur', difficulty: 'schwer', question: 'Welche Größenordnung hat die Oberflächentemperatur der Sonne (Photosphäre)?', options: ['ca. 1000 °C', 'ca. 5500 °C', 'ca. 15.000 °C', 'ca. 1 Million °C'], correct_index: 1, explanation: 'Die Photosphäre der Sonne, also die sichtbare Oberfläche, hat etwa 5500 °C.', fun_fact: 'Der Sonnenkern ist mit rund 15 Millionen °C deutlich heißer – die Korona außen sogar bis zu mehrere Millionen Grad, was bis heute eines der ungelösten Rätsel der Astrophysik ist.' },
  { id: 'nat-022', topic: 'natur', difficulty: 'schwer', question: 'Welche Einheit misst die elektrische Stromstärke?', options: ['Volt', 'Ohm', 'Ampere', 'Watt'], correct_index: 2, explanation: 'Die Stromstärke wird in Ampere (A) angegeben, benannt nach André-Marie Ampère.', fun_fact: 'Ampere ist eine der sieben SI-Basiseinheiten – seit 2019 ist es nicht mehr über magnetische Kräfte definiert, sondern direkt über die Elementarladung des Elektrons.' }
);

// --- Kunst & Literatur ---
QUESTIONS.push(
  { id: 'kunst-011', topic: 'kunst', difficulty: 'leicht', question: 'Wer schrieb die „Harry Potter"-Bücher?', options: ['Stephen King', 'J. K. Rowling', 'Astrid Lindgren', 'Roald Dahl'], correct_index: 1, explanation: 'Die britische Autorin Joanne K. Rowling veröffentlichte ab 1997 sieben Harry-Potter-Bände, die weltweit über 500 Millionen Mal verkauft wurden.', fun_fact: 'Den ersten Band lehnten zwölf Verlage ab – erst der dreizehnte (Bloomsbury) sagte zu, weil die achtjährige Tochter des Verlegers von der Probekapitel begeistert war.' },
  { id: 'kunst-012', topic: 'kunst', difficulty: 'leicht', question: 'Welches Gemälde gilt als bekanntestes Werk Leonardo da Vincis?', options: ['Die Geburt der Venus', 'Mona Lisa', 'Die letzte Abendmahl', 'Der Schrei'], correct_index: 1, explanation: 'Die Mona Lisa (vermutlich Lisa del Giocondo) hängt seit über 200 Jahren im Louvre in Paris.', fun_fact: 'Die Mona Lisa wurde 1911 von einem Louvre-Mitarbeiter gestohlen und tauchte erst zwei Jahre später wieder auf – ihr heutiger Weltruhm geht zum Teil auf diesen Diebstahl zurück.' },
  { id: 'kunst-013', topic: 'kunst', difficulty: 'leicht', question: 'Wer komponierte die Oper „Die Zauberflöte"?', options: ['Johann Sebastian Bach', 'Wolfgang Amadeus Mozart', 'Ludwig van Beethoven', 'Richard Wagner'], correct_index: 1, explanation: 'Mozart komponierte „Die Zauberflöte" 1791 – wenige Monate vor seinem Tod.', fun_fact: 'Die berühmte Königin-der-Nacht-Arie verlangt ein hohes „F" – einen der höchsten Töne, die je für eine Sopranstimme komponiert wurden.' },
  { id: 'kunst-014', topic: 'kunst', difficulty: 'leicht', question: 'Wer sammelte und veröffentlichte die berühmten deutschen Volksmärchen wie „Aschenputtel" und „Hänsel und Gretel"?', options: ['Hans Christian Andersen', 'die Brüder Grimm', 'Wilhelm Hauff', 'Theodor Storm'], correct_index: 1, explanation: 'Jacob und Wilhelm Grimm sammelten ab 1812 ihre „Kinder- und Hausmärchen" – inzwischen in über 160 Sprachen übersetzt.', fun_fact: 'Die ersten Ausgaben waren keineswegs für Kinder – sie enthielten viel Gewalt und Sex, was die Brüder in späteren Auflagen entschärften.' },
  { id: 'kunst-015', topic: 'kunst', difficulty: 'mittel', question: 'Wer schrieb „Buddenbrooks" und erhielt 1929 den Nobelpreis für Literatur?', options: ['Hermann Hesse', 'Thomas Mann', 'Heinrich Böll', 'Günter Grass'], correct_index: 1, explanation: 'Thomas Mann veröffentlichte „Buddenbrooks" 1901 – die Familienchronik einer Lübecker Kaufmannsdynastie über vier Generationen.', fun_fact: 'Bei der Nobelpreis-Begründung wurde explizit „Buddenbrooks" genannt – obwohl Mann inzwischen den „Zauberberg" und vieles andere geschrieben hatte.' },
  { id: 'kunst-016', topic: 'kunst', difficulty: 'mittel', question: 'Wer malte „Die Erschaffung Adams" in der Sixtinischen Kapelle?', options: ['Raffael', 'Leonardo da Vinci', 'Michelangelo', 'Tizian'], correct_index: 2, explanation: 'Michelangelo malte das Deckenfresko in der Sixtinischen Kapelle zwischen 1508 und 1512 im Auftrag von Papst Julius II.', fun_fact: 'Die Form um Gott und die Engel auf dem Fresko erinnert verblüffend an einen menschlichen Gehirnquerschnitt – manche Kunsthistoriker vermuten, Michelangelo habe das absichtlich eingebaut.' },
  { id: 'kunst-017', topic: 'kunst', difficulty: 'mittel', question: 'Welcher russische Komponist schrieb das Ballett „Schwanensee"?', options: ['Sergei Rachmaninow', 'Pjotr Iljitsch Tschaikowski', 'Igor Strawinsky', 'Dmitri Schostakowitsch'], correct_index: 1, explanation: 'Tschaikowski komponierte „Schwanensee" 1875/76 – heute eines der berühmtesten Ballette der Welt.', fun_fact: 'Bei der Uraufführung 1877 fiel das Ballett durch – die Choreografie galt als unausgegoren. Erst eine Neufassung 1895, zwei Jahre nach Tschaikowskis Tod, machte „Schwanensee" weltberühmt.' },
  { id: 'kunst-018', topic: 'kunst', difficulty: 'mittel', question: 'Welcher Maler gilt als Begründer des Impressionismus?', options: ['Édouard Manet', 'Claude Monet', 'Paul Cézanne', 'Vincent van Gogh'], correct_index: 1, explanation: 'Monets Bild „Impression, soleil levant" (1872) gab der Stilrichtung Impressionismus ihren Namen.', fun_fact: 'Der Begriff „Impressionismus" war zunächst spöttisch gemeint – ein Kritiker schrieb 1874, das Bild sei „weniger fertig als eine Tapete in ihrem ursprünglichen Zustand".' },
  { id: 'kunst-019', topic: 'kunst', difficulty: 'schwer', question: 'Welcher Roman beginnt mit dem Satz „Call me Ishmael"?', options: ['Heart of Darkness', 'Moby Dick', 'The Old Man and the Sea', 'Treasure Island'], correct_index: 1, explanation: 'Herman Melvilles „Moby Dick" (1851) erzählt die Jagd des besessenen Kapitäns Ahab auf einen weißen Wal.', fun_fact: 'Zu Melvilles Lebzeiten war „Moby Dick" ein Flop – erst über 70 Jahre nach seinem Tod, in den 1920ern, wurde das Buch als amerikanischer Klassiker wiederentdeckt.' },
  { id: 'kunst-020', topic: 'kunst', difficulty: 'schwer', question: 'Welcher österreichische Komponist gilt als Begründer der Zwölftonmusik?', options: ['Gustav Mahler', 'Anton Bruckner', 'Arnold Schönberg', 'Alban Berg'], correct_index: 2, explanation: 'Schönberg entwickelte ab den 1920ern die Zwölftontechnik, bei der alle 12 Halbtöne der Oktave gleichberechtigt verwendet werden.', fun_fact: 'Schönbergs Schüler Alban Berg und Anton Webern bilden mit ihm die „Zweite Wiener Schule" – ein Gegenstück zur „Ersten" (Haydn, Mozart, Beethoven).' },
  { id: 'kunst-021', topic: 'kunst', difficulty: 'schwer', question: 'Welches berühmte Theaterstück Brechts zeigt die Welt der Verbrecher und Bettler Londons?', options: ['Mutter Courage und ihre Kinder', 'Die Dreigroschenoper', 'Der gute Mensch von Sezuan', 'Leben des Galilei'], correct_index: 1, explanation: 'Bertolt Brecht und Kurt Weill schufen „Die Dreigroschenoper" 1928 als Adaption der englischen „Beggar\'s Opera".', fun_fact: 'Das berühmte Lied „Mackie Messer" („Mack the Knife") wurde später weltweit von Frank Sinatra, Louis Armstrong und Ella Fitzgerald gecovert – ein Welthit aus einem sozialkritischen Stück.' },
  { id: 'kunst-022', topic: 'kunst', difficulty: 'schwer', question: 'Welcher deutsche Maler gehörte zur Gruppe „Die Brücke" und gilt als Hauptvertreter des Expressionismus?', options: ['Max Beckmann', 'Ernst Ludwig Kirchner', 'Otto Dix', 'Paul Klee'], correct_index: 1, explanation: 'Kirchner war 1905 Mitbegründer von „Die Brücke" in Dresden – Manifest des deutschen Expressionismus.', fun_fact: 'Viele Werke Kirchners wurden 1937 von den Nazis als „entartete Kunst" beschlagnahmt – Kirchner nahm sich daraufhin 1938 das Leben.' }
);

// --- Politik & Gesellschaft ---
QUESTIONS.push(
  { id: 'pol-011', topic: 'politik', difficulty: 'leicht', question: 'Wer war von 1982 bis 1998 deutscher Bundeskanzler und führte die Wiedervereinigung an?', options: ['Helmut Schmidt', 'Helmut Kohl', 'Gerhard Schröder', 'Willy Brandt'], correct_index: 1, explanation: 'Helmut Kohl (CDU) ist mit 16 Jahren Amtszeit der bisher am längsten regierende Bundeskanzler der BRD.', fun_fact: 'Kohl wurde im Westen wegen seiner körperlichen Erscheinung anfangs unterschätzt – Margaret Thatcher und François Mitterrand beneideten ihn später um seine außenpolitischen Erfolge.' },
  { id: 'pol-012', topic: 'politik', difficulty: 'leicht', question: 'Wie heißt das deutsche Parlament?', options: ['Bundesrat', 'Bundestag', 'Reichstag', 'Bundesversammlung'], correct_index: 1, explanation: 'Der Bundestag ist das gewählte Parlament der Bundesrepublik Deutschland mit Sitz in Berlin.', fun_fact: 'Der „Reichstag" ist nur das Gebäude, in dem der Bundestag tagt – der Name stammt noch aus dem Kaiserreich, der Inhalt hat sich völlig gewandelt.' },
  { id: 'pol-013', topic: 'politik', difficulty: 'leicht', question: 'In welcher Stadt befindet sich der Hauptsitz der UNO?', options: ['Genf', 'Brüssel', 'New York', 'Den Haag'], correct_index: 2, explanation: 'Das UNO-Hauptquartier liegt am East River in New York – das Gebäude wurde 1952 eröffnet.', fun_fact: 'Das Grundstück gilt offiziell als internationales Gebiet – die UNO hat dort eigene Briefmarken und ein eigenes Postamt.' },
  { id: 'pol-014', topic: 'politik', difficulty: 'leicht', question: 'Wofür steht das Kürzel „NATO"?', options: ['Northern Alliance Treaty Organization', 'North Atlantic Treaty Organization', 'New Alliance of Trade Organizations', 'Nuclear Arms Trade Organization'], correct_index: 1, explanation: 'Die NATO ist ein 1949 gegründetes Verteidigungsbündnis westlicher Staaten.', fun_fact: 'Der Bündnisfall (Artikel 5) wurde in der Geschichte der NATO nur ein einziges Mal ausgerufen – nach den Terroranschlägen vom 11. September 2001 in den USA.' },
  { id: 'pol-015', topic: 'politik', difficulty: 'mittel', question: 'Welcher US-amerikanische Bürgerrechtler hielt 1963 die Rede „I have a dream"?', options: ['Malcolm X', 'Martin Luther King Jr.', 'Rosa Parks', 'Frederick Douglass'], correct_index: 1, explanation: 'King hielt die Rede beim Marsch auf Washington am 28. August 1963 vor rund 250.000 Menschen.', fun_fact: 'Der berühmte „I have a dream"-Teil stand nicht im Manuskript – King improvisierte ihn, nachdem Sängerin Mahalia Jackson aus dem Publikum rief: „Tell them about the dream, Martin!"' },
  { id: 'pol-016', topic: 'politik', difficulty: 'mittel', question: 'Welches Land trat 2020 als erstes Land aus der Europäischen Union aus?', options: ['Schweden', 'Dänemark', 'Vereinigtes Königreich', 'Polen'], correct_index: 2, explanation: 'Großbritannien verließ die EU am 31. Januar 2020 nach einem Referendum 2016 („Brexit").', fun_fact: 'Grönland war eigentlich schon 1985 aus der Vorgängerorganisation EWG ausgetreten – allerdings als Teil Dänemarks, das selbst Mitglied blieb.' },
  { id: 'pol-017', topic: 'politik', difficulty: 'mittel', question: 'Welche Stadt war Ausgangspunkt der Französischen Revolution 1789?', options: ['Lyon', 'Paris', 'Versailles', 'Marseille'], correct_index: 1, explanation: 'In Paris stürmten die Bürger am 14. Juli 1789 die Bastille – Symbol des Anfangs der Französischen Revolution.', fun_fact: 'Der „Marseillaise" wurde nicht in Marseille geschrieben, sondern von Rouget de Lisle in Straßburg – Soldaten aus Marseille machten das Lied auf ihrem Marsch nach Paris bekannt.' },
  { id: 'pol-018', topic: 'politik', difficulty: 'mittel', question: 'Welche Partei stellt traditionell die roten Farben als Symbol des Sozialismus?', options: ['SPD und ähnliche sozialdemokratische Parteien', 'CDU und konservative Parteien', 'Liberale Parteien', 'Grüne Parteien'], correct_index: 0, explanation: 'Die Farbe Rot ist seit dem 19. Jahrhundert das traditionelle Symbol von Arbeiterbewegung, Sozialismus und sozialdemokratischen Parteien.', fun_fact: 'Rot wurde wahrscheinlich gewählt, weil rote Fahnen schon vor 1848 von Aufständischen gegen die Monarchie verwendet wurden – als Gegenfarbe zu königlichen Standarten.' },
  { id: 'pol-019', topic: 'politik', difficulty: 'schwer', question: 'Welcher US-Präsident wurde 1963 in Dallas, Texas, ermordet?', options: ['Franklin D. Roosevelt', 'John F. Kennedy', 'Lyndon B. Johnson', 'Abraham Lincoln'], correct_index: 1, explanation: 'John F. Kennedy wurde am 22. November 1963 während einer Wagenkolonne in Dallas erschossen – mutmaßlicher Täter Lee Harvey Oswald.', fun_fact: 'Oswald wurde nur zwei Tage später selbst erschossen, vor laufender Kamera – die Tat wurde live im US-Fernsehen übertragen und ist eines der ersten dokumentierten Live-Verbrechen.' },
  { id: 'pol-020', topic: 'politik', difficulty: 'schwer', question: 'Wer war von 1972 bis 1981 UNO-Generalsekretär und später österreichischer Bundespräsident?', options: ['Bruno Kreisky', 'Kurt Waldheim', 'Boutros Boutros-Ghali', 'Dag Hammarskjöld'], correct_index: 1, explanation: 'Der Österreicher Kurt Waldheim leitete die UNO zwei Amtszeiten lang, bevor er 1986–1992 österreichischer Bundespräsident wurde.', fun_fact: 'Während des Wahlkampfs 1986 wurde Waldheims verschwiegene NS-Vergangenheit als Wehrmachtsoffizier in Jugoslawien aufgedeckt – er wurde dennoch gewählt, aber von vielen Ländern boykottiert.' },
  { id: 'pol-021', topic: 'politik', difficulty: 'schwer', question: 'Welchen Namen trägt das polnische Parlament?', options: ['Duma', 'Sejm', 'Storting', 'Knesset'], correct_index: 1, explanation: 'Der Sejm ist das Unterhaus des polnischen Parlaments – das Oberhaus heißt Senat.', fun_fact: 'Bis 1791 wurden Beschlüsse im Sejm einstimmig gefasst – ein einziger Abgeordneter konnte mit „liberum veto" alles blockieren, was zur politischen Lähmung Polens beitrug.' },
  { id: 'pol-022', topic: 'politik', difficulty: 'schwer', question: 'In welchem Jahr trat Deutschland (BRD und DDR) der UNO bei?', options: ['1955', '1973', '1990', '1949'], correct_index: 1, explanation: 'Beide deutschen Staaten wurden am 18. September 1973 gleichzeitig in die UNO aufgenommen.', fun_fact: 'Bis dahin verhinderte die „Hallstein-Doktrin" der BRD eine Mitgliedschaft – sie wollte die DDR nicht anerkennen. Erst die Ostpolitik Willy Brandts machte den Beitritt möglich.' }
);

// --- Technik & Erfindungen ---
QUESTIONS.push(
  { id: 'tech-011', topic: 'technik', difficulty: 'leicht', question: 'Wer war 1961 der erste Mensch im Weltraum?', options: ['John Glenn', 'Juri Gagarin', 'Neil Armstrong', 'Alexei Leonow'], correct_index: 1, explanation: 'Der sowjetische Kosmonaut Juri Gagarin umrundete am 12. April 1961 in 108 Minuten die Erde – die erste bemannte Raumfahrt überhaupt.', fun_fact: 'Gagarins Raumkapsel kehrte ohne Bremsraketen zur Erde zurück – er musste rund 7 km über dem Boden mit dem Schleudersitz aussteigen und am Fallschirm landen.' },
  { id: 'tech-012', topic: 'technik', difficulty: 'leicht', question: 'Nach welcher Insel ist die Programmiersprache „Java" benannt?', options: ['Bali', 'Sumatra', 'Java (Indonesien)', 'Hawaii'], correct_index: 2, explanation: 'Die Sprache wurde von Sun-Microsystems-Entwicklern nach der indonesischen Insel Java benannt – konkret nach dem Kaffee von dort, den die Entwickler liebten.', fun_fact: 'Das Logo von Java – eine dampfende Kaffeetasse – kommt direkt von dieser Anekdote.' },
  { id: 'tech-013', topic: 'technik', difficulty: 'leicht', question: 'Was war Sputnik 1, gestartet am 4. Oktober 1957?', options: ['Die erste Atombombe', 'Der erste künstliche Erdsatellit', 'Die erste Mondsonde', 'Der erste Düsenjet'], correct_index: 1, explanation: 'Sputnik 1 war eine sowjetische Metallkugel mit 58 cm Durchmesser und vier Antennen – der erste vom Menschen geschaffene Satellit der Erde.', fun_fact: 'Sputniks Piepen war drei Wochen lang weltweit mit normalen Radios empfangbar – im Westen löste das einen „Sputnik-Schock" aus und befeuerte das US-Weltraumprogramm.' },
  { id: 'tech-014', topic: 'technik', difficulty: 'leicht', question: 'Welches Wort enthielt die erste SMS, die 1992 weltweit verschickt wurde?', options: ['Hello World', 'Merry Christmas', 'OK', 'Vodafone'], correct_index: 1, explanation: 'Am 3. Dezember 1992 schickte der britische Ingenieur Neil Papworth „Merry Christmas" an einen Vodafone-Kollegen.', fun_fact: 'Die Nachricht wurde vom Computer aus geschickt, weil Handys damals noch keine Tastatur zum Tippen hatten – Empfang ja, Senden ging noch nicht.' },
  { id: 'tech-015', topic: 'technik', difficulty: 'mittel', question: 'Welcher Physiker formulierte das nach ihm benannte Wirkungsquantum „h" und begründete damit die Quantenphysik?', options: ['Albert Einstein', 'Max Planck', 'Werner Heisenberg', 'Niels Bohr'], correct_index: 1, explanation: 'Max Planck führte 1900 die Quantenhypothese ein – Energie wird in „Paketen" der Größe h × Frequenz abgegeben.', fun_fact: 'Planck selbst hielt seine Hypothese zunächst nur für einen mathematischen Trick – er glaubte lange nicht an die physikalische Realität von Quanten.' },
  { id: 'tech-016', topic: 'technik', difficulty: 'mittel', question: 'In welchem Jahr ging das ARPANET – der Vorläufer des Internets – online?', options: ['1962', '1969', '1975', '1981'], correct_index: 1, explanation: 'Am 29. Oktober 1969 wurde die erste Nachricht über das ARPANET zwischen UCLA und Stanford verschickt.', fun_fact: 'Die erste Nachricht sollte „LOGIN" sein – nach „LO" stürzte das System ab. Damit ist „LO" die erste je übertragene Nachricht im Internet.' },
  { id: 'tech-017', topic: 'technik', difficulty: 'mittel', question: 'Wer baute den ersten praktisch einsetzbaren Hubschrauber?', options: ['Otto Lilienthal', 'Wilbur Wright', 'Igor Sikorsky', 'Hugo Junkers'], correct_index: 2, explanation: 'Igor Sikorsky baute 1939 den VS-300 – das Konzeptmodell, das alle modernen Hubschrauber prägte (ein Hauptrotor + Heckrotor).', fun_fact: 'Sikorsky baute schon 1909 seinen ersten Hubschrauber – der hob aber nicht ab. 30 Jahre später, im US-Exil, hatte er endlich Erfolg.' },
  { id: 'tech-018', topic: 'technik', difficulty: 'mittel', question: 'Welcher Stoff bildet die Grundlage der meisten modernen Halbleiter-Chips?', options: ['Silizium', 'Germanium', 'Gallium', 'Kupfer'], correct_index: 0, explanation: 'Silizium ist nach Sauerstoff das häufigste Element der Erdkruste – aus ihm werden fast alle Mikrochips hergestellt.', fun_fact: 'Das Silicon Valley in Kalifornien ist nach diesem Element benannt – „silicon" heißt englisch Silizium, nicht „Silikon" (das wäre „silicone").' },
  { id: 'tech-019', topic: 'technik', difficulty: 'schwer', question: 'Welcher britische Mathematiker formulierte 1936 das theoretische Modell moderner Computer?', options: ['Alan Turing', 'Charles Babbage', 'Ada Lovelace', 'John von Neumann'], correct_index: 0, explanation: 'Alan Turing entwarf 1936 die „Turing-Maschine" – ein abstraktes Modell, das die Grundlage aller heutigen Computer bildet.', fun_fact: 'Turing knackte im Zweiten Weltkrieg in Bletchley Park die deutsche Enigma – Historiker schätzen, dass dadurch der Krieg um 2–4 Jahre verkürzt wurde.' },
  { id: 'tech-020', topic: 'technik', difficulty: 'schwer', question: 'Welche mechanische Maschine entwarf Charles Babbage im 19. Jahrhundert als Vorläufer des Computers?', options: ['Difference Engine', 'Pascaline', 'Jacquard-Webstuhl', 'Antikythera-Mechanismus'], correct_index: 0, explanation: 'Babbage entwarf die „Difference Engine" und später die programmierbare „Analytical Engine" – sie wurden zu Lebzeiten nie fertiggestellt.', fun_fact: 'Ada Lovelace, Tochter Lord Byrons, schrieb für die Analytical Engine Algorithmen – sie gilt deshalb als die erste Programmiererin der Geschichte.' },
  { id: 'tech-021', topic: 'technik', difficulty: 'schwer', question: 'Wer entwickelte den ersten kommerziell erfolgreichen Wechselstromgenerator und prägte damit moderne Stromnetze?', options: ['Thomas Edison', 'Nikola Tesla', 'Werner von Siemens', 'James Watt'], correct_index: 1, explanation: 'Nikola Tesla entwickelte in den 1880ern den Wechselstrommotor und setzte sich gegen Edisons Gleichstrom durch („Stromkrieg").', fun_fact: 'Tesla verkaufte seine Patente an George Westinghouse für viel Geld – starb aber 1943 verarmt und allein in einem New Yorker Hotelzimmer.' },
  { id: 'tech-022', topic: 'technik', difficulty: 'schwer', question: 'In welchem Jahr wurde die erste Atombombe gezündet (Trinity-Test)?', options: ['1942', '1945', '1949', '1952'], correct_index: 1, explanation: 'Der Trinity-Test fand am 16. Juli 1945 in der Wüste von New Mexico statt – drei Wochen vor dem Abwurf auf Hiroshima.', fun_fact: 'Bombenchef J. Robert Oppenheimer zitierte beim Anblick der Explosion eine Stelle aus der Bhagavad Gita: „Jetzt bin ich der Tod geworden, der Zerstörer der Welten."' }
);

// --- Philosophie & Religion ---
QUESTIONS.push(
  { id: 'phil-011', topic: 'philosophie', difficulty: 'leicht', question: 'Wer gilt als Gründer des Buddhismus?', options: ['Konfuzius', 'Siddhartha Gautama', 'Lao-Tse', 'Mahavira'], correct_index: 1, explanation: 'Siddhartha Gautama lebte im 6./5. Jahrhundert v. Chr. in Nordindien und wurde durch seine Erleuchtung zum „Buddha" (Erwachten).', fun_fact: 'Gautama soll als Königssohn in Reichtum aufgewachsen sein und Palast und Familie verlassen haben, als er erstmals Alter, Krankheit und Tod sah.' },
  { id: 'phil-012', topic: 'philosophie', difficulty: 'leicht', question: 'In welcher Stadt soll Jesus laut Neuem Testament geboren worden sein?', options: ['Nazareth', 'Bethlehem', 'Jerusalem', 'Kapernaum'], correct_index: 1, explanation: 'Nach den Evangelien wurde Jesus in Bethlehem (heute im Westjordanland) geboren, wuchs aber in Nazareth in Galiläa auf.', fun_fact: 'Bethlehem heißt auf Hebräisch „Haus des Brotes" – und ist auch der Geburtsort König Davids, eine wichtige theologische Verbindung im Neuen Testament.' },
  { id: 'phil-013', topic: 'philosophie', difficulty: 'leicht', question: 'Wie heißt der wichtigste Teil der heiligen Schriften des Judentums?', options: ['Talmud', 'Tora', 'Mischna', 'Sohar'], correct_index: 1, explanation: 'Die Tora sind die fünf Bücher Moses – im christlichen AT „Pentateuch" genannt – und Grundlage des jüdischen Glaubens.', fun_fact: 'Eine Tora-Rolle wird traditionell mit der Hand auf Pergament geschrieben – ein einziger Fehler macht die ganze Rolle religiös unbrauchbar.' },
  { id: 'phil-014', topic: 'philosophie', difficulty: 'leicht', question: 'Welche der „Fünf Säulen des Islam" bezeichnet das Fasten im Ramadan?', options: ['Schahāda', 'Salāt', 'Sawm', 'Hadsch'], correct_index: 2, explanation: 'Sawm ist das Fasten im Monat Ramadan – von Sonnenaufgang bis Sonnenuntergang keine Nahrung und kein Wasser.', fun_fact: 'Weil der islamische Kalender ein Mondkalender ist, verschiebt sich Ramadan jedes Jahr um etwa 11 Tage – mal fällt er in den Winter, mal in den Hochsommer.' },
  { id: 'phil-015', topic: 'philosophie', difficulty: 'mittel', question: 'Welcher Philosoph schrieb das Werk „Politeia" (Der Staat)?', options: ['Sokrates', 'Platon', 'Aristoteles', 'Plotin'], correct_index: 1, explanation: 'Platons „Politeia" (um 380 v. Chr.) entwirft den idealen Staat und enthält das berühmte Höhlengleichnis.', fun_fact: 'In Platons idealem Staat sollten Philosophen herrschen – ein Konzept, das in der politischen Realität nie verwirklicht wurde.' },
  { id: 'phil-016', topic: 'philosophie', difficulty: 'mittel', question: 'Welcher Reformator führte zum Protestantismus?', options: ['Johannes Calvin', 'Martin Luther', 'Ulrich Zwingli', 'John Wesley'], correct_index: 1, explanation: 'Martin Luther war 1517 mit seinen 95 Thesen Auslöser der Reformation – aus seiner Bewegung entstanden die evangelischen (protestantischen) Kirchen.', fun_fact: 'Luther übersetzte die Bibel ins Deutsche – seine Sprache prägte die deutsche Schriftsprache so stark, dass viele Redewendungen direkt aus seiner Übersetzung kommen („Perlen vor die Säue", „Hochmut kommt vor dem Fall").' },
  { id: 'phil-017', topic: 'philosophie', difficulty: 'mittel', question: 'Welche philosophische Strömung des 20. Jahrhunderts wurde durch Heidegger und Sartre geprägt?', options: ['Positivismus', 'Existenzialismus', 'Pragmatismus', 'Phänomenologie'], correct_index: 1, explanation: 'Der Existenzialismus fragt nach der konkreten menschlichen Existenz – Sartres berühmte Formel: „Existenz geht der Essenz voraus".', fun_fact: 'Sartre lehnte 1964 den Literatur-Nobelpreis ab – als einziger Mensch in der Geschichte, der den Preis bewusst zurückwies.' },
  { id: 'phil-018', topic: 'philosophie', difficulty: 'mittel', question: 'Wer formulierte das berühmte „kategorische Imperativ" als Moralprinzip?', options: ['Hegel', 'Schopenhauer', 'Kant', 'Fichte'], correct_index: 2, explanation: 'Immanuel Kant: „Handle nur nach derjenigen Maxime, durch die du zugleich wollen kannst, dass sie ein allgemeines Gesetz werde."', fun_fact: 'Kants Grab in Kaliningrad (früher Königsberg) trägt die Inschrift seiner berühmtesten Aussage – über das moralische Gesetz „in mir" und den gestirnten Himmel „über mir".' },
  { id: 'phil-019', topic: 'philosophie', difficulty: 'schwer', question: 'Welcher mittelalterliche Theologe verfasste die „Summa Theologica"?', options: ['Anselm von Canterbury', 'Albertus Magnus', 'Thomas von Aquin', 'Wilhelm von Ockham'], correct_index: 2, explanation: 'Thomas von Aquin (1225–1274) verfasste mit der „Summa" das systematischste Werk der mittelalterlichen Theologie und versuchte, christlichen Glauben mit Aristoteles zu verbinden.', fun_fact: 'Thomas selbst nannte sein Werk gegen Lebensende „Stroh" – kurz vor seinem Tod hatte er eine mystische Erfahrung und schrieb nie wieder eine Zeile.' },
  { id: 'phil-020', topic: 'philosophie', difficulty: 'schwer', question: 'Was bezeichnet im Hinduismus der Begriff „Dharma"?', options: ['Wiedergeburt', 'Pflicht / kosmisches Gesetz', 'Erlösung', 'Meditation'], correct_index: 1, explanation: '„Dharma" steht im Hinduismus für die kosmische Ordnung und die persönliche Pflicht, die sich aus Stellung, Lebensphase und Kaste ergibt.', fun_fact: 'Das Sanskrit-Wort hat keine genaue deutsche Übersetzung – es vereint Religion, Recht, Pflicht und Naturordnung in einem Begriff.' },
  { id: 'phil-021', topic: 'philosophie', difficulty: 'schwer', question: 'Welche philosophische Strömung lehnt sicheres Wissen grundsätzlich ab?', options: ['Stoizismus', 'Skeptizismus', 'Idealismus', 'Materialismus'], correct_index: 1, explanation: 'Der Skeptizismus zweifelt an der Möglichkeit gesicherter Erkenntnis – schon in der Antike vertreten von Pyrrhon und der Akademie nach Platon.', fun_fact: 'Der antike Skeptiker Pyrrhon soll so konsequent gezweifelt haben, dass seine Freunde ihn ständig vor Abgründen und Wagen retten mussten – die Anekdote ist wohl übertrieben, aber illustrativ.' },
  { id: 'phil-022', topic: 'philosophie', difficulty: 'schwer', question: 'Welcher Philosoph erklärte „Gott ist tot" und kritisierte christliche Moral als Sklavenmoral?', options: ['Kierkegaard', 'Nietzsche', 'Schopenhauer', 'Marx'], correct_index: 1, explanation: 'Friedrich Nietzsche prägte den Satz „Gott ist tot" in „Die fröhliche Wissenschaft" (1882) und in „Also sprach Zarathustra".', fun_fact: 'Nietzsche meinte nicht buchstäblich, dass Gott gestorben sei – er beschrieb den kulturellen Bedeutungsverlust religiöser Werte in der Moderne und warnte vor dem entstehenden Nihilismus.' }
);

// --- Wirtschaft ---
QUESTIONS.push(
  { id: 'wirt-011', topic: 'wirtschaft', difficulty: 'leicht', question: 'Welche Währung wird im Vereinigten Königreich verwendet?', options: ['Euro', 'Britisches Pfund', 'Schweizer Franken', 'US-Dollar'], correct_index: 1, explanation: 'Das Pfund Sterling (GBP) ist die offizielle Währung des Vereinigten Königreichs – auch nach EU-Beitritt nie ersetzt.', fun_fact: 'Das Pfund Sterling ist die älteste noch genutzte Währung der Welt – seit über 1.200 Jahren in Umlauf.' },
  { id: 'wirt-012', topic: 'wirtschaft', difficulty: 'leicht', question: 'Wofür steht das Kürzel „AG" bei einer deutschen Firma?', options: ['Allgemeine Gesellschaft', 'Aktiengesellschaft', 'Arbeitsgemeinschaft', 'Auslandsgesellschaft'], correct_index: 1, explanation: 'Eine AG ist eine Aktiengesellschaft – ihr Kapital ist in Aktien aufgeteilt, die Anteilsscheine am Unternehmen darstellen.', fun_fact: 'Die kleinste mögliche AG braucht ein Grundkapital von mindestens 50.000 Euro – deshalb wählen kleinere Firmen meist die GmbH oder UG.' },
  { id: 'wirt-013', topic: 'wirtschaft', difficulty: 'leicht', question: 'In welcher Stadt befindet sich die Wall Street?', options: ['Washington D.C.', 'Chicago', 'New York', 'Boston'], correct_index: 2, explanation: 'Die Wall Street liegt im Süden Manhattans in New York – sie ist Sitz der New Yorker Börse (NYSE).', fun_fact: 'Der Name kommt von einer echten Mauer („wall"): Die Niederländer errichteten dort im 17. Jahrhundert eine Holzbarriere zum Schutz vor Indianern und Briten.' },
  { id: 'wirt-014', topic: 'wirtschaft', difficulty: 'leicht', question: 'Welcher US-Hersteller produzierte ab 1913 das erste am Fließband gefertigte Auto, das Model T?', options: ['General Motors', 'Ford', 'Chrysler', 'Cadillac'], correct_index: 1, explanation: 'Henry Ford führte 1913 das Fließband ein und konnte den Preis des Model T dramatisch senken – das Auto wurde massentauglich.', fun_fact: 'Ford zahlte seinen Arbeitern 1914 das damals revolutionäre Tageslohn von 5 Dollar – mit der Begründung, dass seine Arbeiter sich seine Autos leisten können sollten.' },
  { id: 'wirt-015', topic: 'wirtschaft', difficulty: 'mittel', question: 'Welche US-Behörde legt den Leitzins der USA fest?', options: ['Treasury Department', 'Securities and Exchange Commission', 'Federal Reserve („Fed")', 'World Bank'], correct_index: 2, explanation: 'Die Federal Reserve (Fed) ist die Zentralbank der USA und legt mit dem „Federal Funds Rate" den Leitzins fest.', fun_fact: 'Die Fed ist keine reine Staatsbehörde, sondern eine ungewöhnliche Mischform aus öffentlich und privat – das ist auch in den USA seit über 100 Jahren umstritten.' },
  { id: 'wirt-016', topic: 'wirtschaft', difficulty: 'mittel', question: 'Wer prägte den Begriff der „kreativen Zerstörung" als Antrieb wirtschaftlichen Fortschritts?', options: ['Karl Marx', 'Joseph Schumpeter', 'Friedrich Hayek', 'Alfred Marshall'], correct_index: 1, explanation: 'Joseph Schumpeter beschrieb 1942 wie Innovationen alte Geschäftsmodelle zerstören und durch neue ersetzen – Voraussetzung für Wachstum.', fun_fact: 'Schumpeter sagte mal, er habe sich drei Lebensziele gesetzt: bester Wirtschaftswissenschaftler, bester Reiter und bester Liebhaber Wiens zu werden – und am dritten habe er leider scheitern müssen.' },
  { id: 'wirt-017', topic: 'wirtschaft', difficulty: 'mittel', question: 'Welche Steuerart wird auf den Verkauf fast aller Waren und Dienstleistungen erhoben?', options: ['Einkommensteuer', 'Körperschaftsteuer', 'Umsatzsteuer (Mehrwertsteuer)', 'Erbschaftsteuer'], correct_index: 2, explanation: 'Die Umsatzsteuer (umgangssprachlich Mehrwertsteuer) liegt in Deutschland bei 19 % (ermäßigt 7 %) und ist die wichtigste Verbrauchsteuer.', fun_fact: 'Frankreich führte 1954 als erstes Land die moderne Mehrwertsteuer ein – inzwischen haben über 160 Staaten ähnliche Systeme.' },
  { id: 'wirt-018', topic: 'wirtschaft', difficulty: 'mittel', question: 'Was beschreibt die „unsichtbare Hand" bei Adam Smith?', options: ['Staatliche Kontrolle der Wirtschaft', 'Marktregulierung durch Eigeninteresse einzelner Akteure', 'Geheime Absprachen unter Konzernen', 'Schwarzmarkt und Schmuggel'], correct_index: 1, explanation: 'Smith beschrieb 1776, wie das Verfolgen individueller Eigeninteressen über den Markt zu allgemeinem Wohlstand führen kann – „wie von einer unsichtbaren Hand geführt".', fun_fact: 'Der Begriff fällt in „Der Wohlstand der Nationen" nur ein einziges Mal – wurde aber in der späteren Rezeption zum zentralen Symbol für Smiths Theorie.' },
  { id: 'wirt-019', topic: 'wirtschaft', difficulty: 'schwer', question: 'Welche Wirtschaftskrise begann 1973 mit der drastischen Erhöhung der Rohölpreise durch die OPEC?', options: ['Asienkrise', 'Erste Ölkrise (Ölpreisschock)', 'Dotcom-Blase', 'Subprime-Krise'], correct_index: 1, explanation: 'Als Reaktion auf den Jom-Kippur-Krieg vervierfachten arabische OPEC-Staaten 1973 den Ölpreis – das stürzte die Industrieländer in eine Rezession.', fun_fact: 'In Deutschland gab es daraufhin autofreie Sonntage – die Bundesregierung verhängte vier Wochenenden, an denen das Autofahren komplett verboten war.' },
  { id: 'wirt-020', topic: 'wirtschaft', difficulty: 'schwer', question: 'Wer war 1969 der erste Träger des Wirtschaftsnobelpreises (zusammen mit Jan Tinbergen)?', options: ['Milton Friedman', 'Ragnar Frisch', 'Friedrich Hayek', 'Paul Samuelson'], correct_index: 1, explanation: 'Der Norweger Ragnar Frisch und der Niederländer Jan Tinbergen erhielten 1969 die erste Verleihung – für die Entwicklung der Ökonometrie.', fun_fact: 'Der „Wirtschaftsnobelpreis" ist kein klassischer Nobelpreis – er wurde erst 1968 von der schwedischen Reichsbank gestiftet, heißt offiziell „Alfred-Nobel-Gedächtnispreis".' },
  { id: 'wirt-021', topic: 'wirtschaft', difficulty: 'schwer', question: 'Was bezeichnet der Begriff „Stagflation"?', options: ['Wirtschaftswachstum mit Inflation', 'Stillstand der Wirtschaft mit gleichzeitig hoher Inflation', 'Deflation und Massenarbeitslosigkeit', 'Hohe Sparquote bei niedrigen Zinsen'], correct_index: 1, explanation: 'Stagflation kombiniert Stagnation und Inflation – ein lange für unmöglich gehaltenes Phänomen, das in den 1970ern erstmals breit auftrat.', fun_fact: 'Die Stagflation der 1970er widerlegte den damals herrschenden Glauben an die „Phillips-Kurve", wonach hohe Inflation und hohe Arbeitslosigkeit nicht gleichzeitig auftreten könnten – und veränderte die ganze Geldpolitik.' },
  { id: 'wirt-022', topic: 'wirtschaft', difficulty: 'schwer', question: 'Welche Theorie besagt, dass Marktpreise immer alle verfügbaren Informationen widerspiegeln?', options: ['Spieltheorie', 'Effizienzmarkthypothese', 'Quantitätstheorie des Geldes', 'Modern Monetary Theory'], correct_index: 1, explanation: 'Die Effizienzmarkthypothese (EMH) von Eugene Fama besagt, dass es daher unmöglich sei, dauerhaft durch Stock Picking den Markt zu schlagen.', fun_fact: 'Fama erhielt 2013 den Wirtschaftsnobelpreis – gemeinsam mit Robert Shiller, der mit seiner Forschung zu Spekulationsblasen genau das Gegenteil belegt hatte. Beide Theorien teilen sich das Podium.' }
);

// === MUST-HAVE-Runde: kanonisches Pflichtwissen ===

// --- Geschichte: 20. Jahrhundert / Weltkriege / Kalter Krieg ---
QUESTIONS.push(
  { id: 'gesch-023', topic: 'geschichte', difficulty: 'leicht', question: 'Wann begann der Zweite Weltkrieg mit dem deutschen Angriff auf Polen?', options: ['1. September 1939', '1. September 1938', '1. September 1940', '3. September 1939'], correct_index: 0, explanation: 'Am 1. September 1939 überfiel die deutsche Wehrmacht Polen – damit begann der Zweite Weltkrieg in Europa.', fun_fact: 'Großbritannien und Frankreich erklärten Deutschland zwei Tage später, am 3. September 1939, den Krieg – militärisch geschah aber zunächst monatelang fast nichts („Sitzkrieg").' },
  { id: 'gesch-024', topic: 'geschichte', difficulty: 'leicht', question: 'Wann endete der Zweite Weltkrieg in Europa mit der Kapitulation Deutschlands („Tag der Befreiung")?', options: ['8. Mai 1944', '8. Mai 1945', '2. September 1945', '11. November 1918'], correct_index: 1, explanation: 'Am 8. Mai 1945 unterzeichnete die Wehrmacht die bedingungslose Kapitulation – das beendete den Krieg in Europa. Der Krieg im Pazifik endete erst mit der Kapitulation Japans am 2. September 1945.', fun_fact: 'Wegen der Zeitverschiebung wurde in der Sowjetunion erst der 9. Mai gefeiert – „Tag des Sieges" ist deshalb in Russland bis heute am 9. Mai, im Westen am 8. Mai.' },
  { id: 'gesch-024b', topic: 'geschichte', difficulty: 'mittel', question: 'Wann endete der Zweite Weltkrieg endgültig mit der formellen Kapitulation Japans?', options: ['8. Mai 1945', '6. August 1945', '2. September 1945', '15. August 1946'], correct_index: 2, explanation: 'Japan kapitulierte formell am 2. September 1945 an Bord des US-Schlachtschiffs USS Missouri in der Bucht von Tokio – das war das offizielle Ende des Zweiten Weltkriegs.', fun_fact: 'Japans Kaiser Hirohito kündigte die Kapitulation schon am 15. August 1945 per Radio an – es war die erste Rede, die das japanische Volk je von ihrem Kaiser gehört hatte.' },
  { id: 'gesch-025', topic: 'geschichte', difficulty: 'mittel', question: 'Auf welche japanische Stadt wurde am 6. August 1945 die erste Atombombe abgeworfen?', options: ['Tokio', 'Nagasaki', 'Hiroshima', 'Kyoto'], correct_index: 2, explanation: 'Die USA warfen am 6. August 1945 die Atombombe „Little Boy" über Hiroshima ab – rund 140.000 Menschen starben sofort oder in den Folgemonaten.', fun_fact: 'Drei Tage später, am 9. August, folgte „Fat Man" auf Nagasaki – Japan kapitulierte daraufhin am 15. August 1945. Die Stadt Kyoto stand auf der Zielliste, wurde aber von US-Außenminister Stimson aus Sympathie zur Kultur gestrichen.' },
  { id: 'gesch-026', topic: 'geschichte', difficulty: 'mittel', question: 'Was passierte am 6. Juni 1944 („D-Day")?', options: ['Kapitulation Italiens', 'Landung der Alliierten in der Normandie', 'Beginn der Schlacht von Stalingrad', 'Attentat auf Hitler'], correct_index: 1, explanation: 'Am D-Day landeten rund 156.000 alliierte Soldaten an den Stränden der Normandie – die größte amphibische Operation der Geschichte.', fun_fact: 'Der „D" in „D-Day" steht nicht für ein bestimmtes Wort – es ist eine militärische Konvention für „Tag X" eines Angriffs, ähnlich wie „H-Hour" für die Stunde.' },
  { id: 'gesch-027', topic: 'geschichte', difficulty: 'leicht', question: 'In welchem Konzentrationslager wurden im Zweiten Weltkrieg etwa 1,1 Millionen Menschen ermordet, vor allem Juden?', options: ['Dachau', 'Buchenwald', 'Auschwitz-Birkenau', 'Sachsenhausen'], correct_index: 2, explanation: 'Auschwitz-Birkenau im besetzten Polen war das größte Vernichtungslager der Nationalsozialisten und ist heute Symbol für den Holocaust.', fun_fact: 'Der 27. Januar – der Tag der Befreiung von Auschwitz 1945 durch die Rote Armee – ist seit 2005 internationaler Holocaust-Gedenktag der UNO.' },
  { id: 'gesch-028', topic: 'geschichte', difficulty: 'mittel', question: 'Welche Schlacht 1942/43 gilt als Wendepunkt des Zweiten Weltkriegs an der Ostfront?', options: ['Schlacht um Moskau', 'Schlacht von Stalingrad', 'Schlacht von Kursk', 'Schlacht um Leningrad'], correct_index: 1, explanation: 'In Stalingrad (heute Wolgograd) wurde die deutsche 6. Armee eingekesselt – im Februar 1943 kapitulierten die Reste. Die Wehrmacht hat sich davon nie erholt.', fun_fact: 'Über 90.000 deutsche Soldaten gingen in sowjetische Kriegsgefangenschaft – nur etwa 5.000 kehrten Jahre später zurück.' },
  { id: 'gesch-029', topic: 'geschichte', difficulty: 'leicht', question: 'Wann wurde die Berliner Mauer gebaut?', options: ['13. August 1961', '17. Juni 1953', '9. November 1989', '1. Mai 1955'], correct_index: 0, explanation: 'In der Nacht vom 12. auf den 13. August 1961 begann die DDR mit dem Bau der Mauer, um die Massenflucht in den Westen zu stoppen.', fun_fact: 'In den drei Monaten vor dem Mauerbau flohen rund 50.000 DDR-Bürger in den Westen – der Druck auf das System wurde so groß, dass die Mauer als „letztes Mittel" galt.' },
  { id: 'gesch-030', topic: 'geschichte', difficulty: 'leicht', question: 'Wann fand die deutsche Wiedervereinigung statt?', options: ['9. November 1989', '3. Oktober 1990', '17. Juni 1990', '1. Juli 1990'], correct_index: 1, explanation: 'Am 3. Oktober 1990 trat die DDR der Bundesrepublik bei – der Tag ist seither Tag der Deutschen Einheit und Nationalfeiertag.', fun_fact: 'Der 3. Oktober wurde dem 17. Juni vorgezogen, der zuvor in Westdeutschland Nationalfeiertag war – einige bedauerten den Wegfall des 17. Juni als Erinnerung an den DDR-Volksaufstand 1953.' },
  { id: 'gesch-031', topic: 'geschichte', difficulty: 'mittel', question: 'Wann begann die russische Oktoberrevolution unter Lenin?', options: ['1905', '1914', '1917', '1922'], correct_index: 2, explanation: '1917 stürzten die Bolschewiki unter Lenin die provisorische Regierung – im Oktober nach julianischem, im November nach gregorianischem Kalender.', fun_fact: 'Der Sowjetstaat hielt 1918 sogar an einer Verschiebung der Zeitrechnung fest – Russland hatte bis 1918 noch den julianischen Kalender, der 13 Tage hinter dem westlichen lag.' },
  { id: 'gesch-032', topic: 'geschichte', difficulty: 'mittel', question: 'Welche Krise brachte 1962 die Welt an den Rand eines Atomkriegs zwischen USA und UdSSR?', options: ['Berlin-Krise', 'Kubakrise', 'Suez-Krise', 'Korea-Krise'], correct_index: 1, explanation: '13 Tage lang stand die Welt am Abgrund, nachdem die USA sowjetische Atomraketen auf Kuba entdeckten – Präsident Kennedy verhängte eine Seeblockade.', fun_fact: 'Ein einziger sowjetischer U-Boot-Offizier namens Wassili Archipow verhinderte den Atomkrieg, indem er sich weigerte, einen nuklearen Torpedo abzufeuern – obwohl Captain und politischer Offizier dafür stimmten.' },
  { id: 'gesch-033', topic: 'geschichte', difficulty: 'mittel', question: 'In welchem Land führten die USA von 1965 bis 1975 einen verheerenden Krieg?', options: ['Korea', 'Kambodscha', 'Vietnam', 'Laos'], correct_index: 2, explanation: 'Der Vietnamkrieg endete mit dem Fall Saigons am 30. April 1975 – die USA hatten zuvor in Etappen den Rückzug eingeleitet.', fun_fact: 'Trotz massiver militärischer Überlegenheit verloren die USA ihren ersten großen Krieg seit der Unabhängigkeit – der Krieg traumatisierte eine ganze Generation und beeinflusst US-Außenpolitik bis heute.' },
  { id: 'gesch-034', topic: 'geschichte', difficulty: 'leicht', question: 'Wann fanden die Terroranschläge auf das World Trade Center in New York statt („9/11")?', options: ['11. September 1999', '11. September 2001', '11. September 2003', '4. Juli 2001'], correct_index: 1, explanation: 'Am 11. September 2001 entführten al-Qaida-Terroristen vier Flugzeuge und steuerten sie ins World Trade Center, ins Pentagon und (gescheitert) in Pennsylvania.', fun_fact: 'Es war das erste Mal in der NATO-Geschichte, dass der Bündnisfall (Artikel 5) ausgerufen wurde – die NATO erklärte die Anschläge als Angriff auf alle Mitgliedstaaten.' },
  { id: 'gesch-035', topic: 'geschichte', difficulty: 'mittel', question: 'Welche zwei Diktatoren schlossen 1939 einen Nichtangriffspakt, der den Zweiten Weltkrieg ermöglichte?', options: ['Hitler und Mussolini', 'Hitler und Stalin', 'Stalin und Tito', 'Hitler und Franco'], correct_index: 1, explanation: 'Der Hitler-Stalin-Pakt (auch Molotow-Ribbentrop-Pakt) vom 23. August 1939 enthielt geheime Zusatzprotokolle zur Aufteilung Polens und Osteuropas.', fun_fact: 'Stalin verleugnete die Geheimprotokolle bis zu seinem Tod – erst 1989 gab die Sowjetunion ihre Existenz offiziell zu, was die Unabhängigkeitsbestrebungen des Baltikums beflügelte.' },
  { id: 'gesch-036', topic: 'geschichte', difficulty: 'schwer', question: 'Welcher Vertrag von 1919 beendete den Ersten Weltkrieg und erlegte Deutschland harte Bedingungen auf?', options: ['Vertrag von Versailles', 'Vertrag von Saint-Germain', 'Vertrag von Locarno', 'Vertrag von Trianon'], correct_index: 0, explanation: 'Der Versailler Vertrag wurde am 28. Juni 1919 unterzeichnet – genau fünf Jahre nach dem Attentat von Sarajevo. Deutschland musste Gebiete abtreten, Reparationen zahlen und das Militär drastisch reduzieren.', fun_fact: 'Viele Historiker sehen die harten Bedingungen als Nährboden für den Aufstieg Hitlers – die wirtschaftliche und nationale Demütigung machte radikale Bewegungen anschlussfähig.' }
);

// --- Geografie: Hauptstädte und Eindeutiges ---
QUESTIONS.push(
  { id: 'geo-023', topic: 'geografie', difficulty: 'leicht', question: 'Wie heißt die Hauptstadt Spaniens?', options: ['Barcelona', 'Madrid', 'Sevilla', 'Valencia'], correct_index: 1, explanation: 'Madrid ist Hauptstadt und größte Stadt Spaniens, gelegen im geografischen Zentrum der Iberischen Halbinsel.', fun_fact: 'Madrid liegt auf rund 650 m Höhe – damit ist es nach Andorra die zweithöchste Hauptstadt Europas.' },
  { id: 'geo-024', topic: 'geografie', difficulty: 'leicht', question: 'Wie heißt die Hauptstadt Portugals?', options: ['Porto', 'Lissabon', 'Coimbra', 'Faro'], correct_index: 1, explanation: 'Lissabon liegt an der Mündung des Tejo in den Atlantik – eine der westlichsten Hauptstädte des europäischen Festlands.', fun_fact: 'Lissabon wurde 1755 durch ein verheerendes Erdbeben fast völlig zerstört – das Beben wurde zu einem prägenden Ereignis für die europäische Aufklärung und Theodizee-Debatte.' },
  { id: 'geo-025', topic: 'geografie', difficulty: 'leicht', question: 'Wie heißt die Hauptstadt Griechenlands?', options: ['Sparta', 'Thessaloniki', 'Athen', 'Patras'], correct_index: 2, explanation: 'Athen ist mit rund 3.000 Jahren durchgehender Siedlungsgeschichte eine der ältesten Hauptstädte Europas und Geburtsort der Demokratie.', fun_fact: 'Athen wurde nach der Göttin Athene benannt – sie gewann der Sage nach einen Wettstreit gegen Poseidon, indem sie den Bürgern den Olivenbaum schenkte.' },
  { id: 'geo-026', topic: 'geografie', difficulty: 'leicht', question: 'Wie heißt die Hauptstadt Österreichs?', options: ['Salzburg', 'Innsbruck', 'Graz', 'Wien'], correct_index: 3, explanation: 'Wien war jahrhundertelang Sitz der Habsburger und Hauptstadt des Heiligen Römischen Reichs Deutscher Nation.', fun_fact: 'Wien wird seit über zehn Jahren regelmäßig zur lebenswertesten Stadt der Welt gekürt – Kaffeehauskultur, Mietsystem und Öffentlicher Nahverkehr werden besonders gelobt.' },
  { id: 'geo-027', topic: 'geografie', difficulty: 'leicht', question: 'Wie heißt die Hauptstadt der Schweiz?', options: ['Zürich', 'Genf', 'Basel', 'Bern'], correct_index: 3, explanation: 'Bern ist der Regierungssitz und gilt damit als Hauptstadt – auch wenn die Schweiz offiziell keine Hauptstadt im klassischen Sinn benennt.', fun_fact: 'Bern wird offiziell „Bundesstadt" genannt, nicht „Hauptstadt" – ein bewusst zurückhaltender Begriff, der zur föderalistischen Selbstverständnis der Schweiz passt.' },
  { id: 'geo-028', topic: 'geografie', difficulty: 'leicht', question: 'Wie heißt die Hauptstadt Polens?', options: ['Krakau', 'Warschau', 'Danzig', 'Posen'], correct_index: 1, explanation: 'Warschau ist seit dem 16. Jahrhundert Hauptstadt Polens – davor war es Krakau.', fun_fact: 'Warschau wurde im Zweiten Weltkrieg zu rund 85 % zerstört – die Altstadt wurde nach 1945 originalgetreu wieder aufgebaut und gehört seither zum UNESCO-Welterbe.' },
  { id: 'geo-029', topic: 'geografie', difficulty: 'leicht', question: 'Wie heißt die Hauptstadt der USA?', options: ['New York', 'Los Angeles', 'Washington D.C.', 'Boston'], correct_index: 2, explanation: 'Washington D.C. (District of Columbia) ist seit 1800 die Hauptstadt der USA und liegt am Potomac River.', fun_fact: 'Washington D.C. gehört zu keinem Bundesstaat – ein Sonderstatus, der bewusst gewählt wurde, damit kein einzelner Staat über die Bundesregierung „herrschen" kann.' },
  { id: 'geo-030', topic: 'geografie', difficulty: 'leicht', question: 'Wie heißt die Hauptstadt Japans?', options: ['Kyoto', 'Osaka', 'Tokio', 'Yokohama'], correct_index: 2, explanation: 'Tokio (japanisch „Östliche Hauptstadt") ist seit 1868 die Hauptstadt – davor war Kyoto („Hauptstadt") über 1.000 Jahre lang Sitz des Kaisers.', fun_fact: 'Der Großraum Tokio ist mit über 37 Millionen Einwohnern die bevölkerungsreichste Metropolregion der Welt.' },
  { id: 'geo-031', topic: 'geografie', difficulty: 'leicht', question: 'Wie viele Kontinente gibt es nach dem in Deutschland üblichen 7-Kontinente-Modell?', options: ['5', '6', '7', '8'], correct_index: 2, explanation: 'Deutsches Schulwissen unterscheidet sieben Kontinente: Afrika, Antarktika, Asien, Australien/Ozeanien, Europa, Nordamerika, Südamerika.', fun_fact: 'Andere Länder zählen anders: In den USA wird oft das 6-Kontinente-Modell gelehrt (Nord- und Südamerika als „Amerika"), in lateinamerikanischen Ländern ebenfalls.' },
  { id: 'geo-032', topic: 'geografie', difficulty: 'mittel', question: 'Wie viele Ozeane werden heute offiziell unterschieden?', options: ['3', '4', '5', '7'], correct_index: 2, explanation: 'Seit 2000 anerkennt die Internationale Hydrografische Organisation fünf Ozeane: Pazifik, Atlantik, Indischer, Arktischer und Südlicher Ozean.', fun_fact: 'Der Südliche (Antarktische) Ozean ist erst 2000 als eigener Ozean anerkannt worden – davor wurde er als südlicher Teil der drei großen Ozeane betrachtet.' },
  { id: 'geo-033', topic: 'geografie', difficulty: 'mittel', question: 'Welcher ist der flächenmäßig größte Ozean der Erde?', options: ['Atlantik', 'Indischer Ozean', 'Pazifik', 'Arktischer Ozean'], correct_index: 2, explanation: 'Der Pazifik bedeckt etwa ein Drittel der gesamten Erdoberfläche – größer als alle Landmassen zusammen.', fun_fact: 'Der Pazifik ist auch die Heimat des tiefsten Punktes der Erde – des Marianengrabens mit fast 11.000 m Tiefe, tiefer als der Mount Everest hoch ist.' },
  { id: 'geo-034', topic: 'geografie', difficulty: 'mittel', question: 'Welcher ist der kleinste unabhängige Staat der Welt?', options: ['Monaco', 'San Marino', 'Vatikanstadt', 'Liechtenstein'], correct_index: 2, explanation: 'Die Vatikanstadt umfasst nur etwa 0,44 km² und liegt mitten in Rom – Sitz des Papstes und der römisch-katholischen Kirche.', fun_fact: 'Bürger der Vatikanstadt sind es nicht durch Geburt, sondern durch Amt – wer dort etwa Schweizer Gardist oder Kardinal ist, hat den Pass; danach verliert man die Staatsangehörigkeit wieder.' }
);

// --- Politik: Eindeutiges ---
QUESTIONS.push(
  { id: 'pol-023', topic: 'politik', difficulty: 'mittel', question: 'Welche sechs Staaten gründeten 1957 mit den Römischen Verträgen die EWG (Vorläufer der EU)?', options: ['D, F, I, NL, B, L', 'D, F, GB, I, NL, B', 'D, F, I, ES, B, NL', 'D, F, I, A, B, L'], correct_index: 0, explanation: 'Deutschland, Frankreich, Italien, Niederlande, Belgien und Luxemburg unterzeichneten am 25. März 1957 in Rom die Gründung der Europäischen Wirtschaftsgemeinschaft.', fun_fact: 'Großbritannien wollte 1957 explizit nicht mitmachen – trat 1973 bei – und verließ die EU 2020 wieder. Eine ganze britische Generation lebte ohne, dazwischen mit, dann wieder ohne EU.' },
  { id: 'pol-024', topic: 'politik', difficulty: 'leicht', question: 'Wann wurde die NATO gegründet?', options: ['1945', '1949', '1955', '1961'], correct_index: 1, explanation: 'Am 4. April 1949 unterzeichneten zwölf Staaten in Washington den Nordatlantikvertrag – damit war die NATO geboren.', fun_fact: 'Deutschland (BRD) trat erst 1955 bei – noch im selben Jahr wurde als Reaktion in Osteuropa der Warschauer Pakt unter sowjetischer Führung gegründet.' },
  { id: 'pol-025', topic: 'politik', difficulty: 'leicht', question: 'Wann wurde der Euro als Bargeld in den teilnehmenden Ländern eingeführt?', options: ['1. Januar 1999', '1. Januar 2000', '1. Januar 2002', '1. Mai 2004'], correct_index: 2, explanation: 'Am 1. Januar 2002 ersetzte der Euro in 12 EU-Ländern die nationalen Währungen als Bargeld – als Buchgeld existierte er bereits seit 1999.', fun_fact: 'Deutschland tauschte über 100 Milliarden D-Mark in Euro um – manche Scheine kursieren bis heute, und die Bundesbank tauscht sie unbegrenzt weiter, auch über 20 Jahre nach der Umstellung.' },
  { id: 'pol-026', topic: 'politik', difficulty: 'mittel', question: 'Wie viele Mitglieder hat der UN-Sicherheitsrat insgesamt?', options: ['5', '10', '15', '20'], correct_index: 2, explanation: 'Der Sicherheitsrat hat 15 Mitglieder: 5 ständige (USA, Russland, China, GB, Frankreich) mit Vetorecht und 10 nicht-ständige, gewählt für je 2 Jahre.', fun_fact: 'Deutschland war bereits sechs Mal nicht-ständiges Mitglied im Sicherheitsrat – bewirbt sich aber seit Jahren erfolglos um einen ständigen Sitz, ebenso wie Japan, Indien und Brasilien.' },
  { id: 'pol-027', topic: 'politik', difficulty: 'leicht', question: 'Welche sieben Länder bilden zusammen die G7?', options: ['USA, GB, F, D, I, J, Kanada', 'USA, GB, F, D, I, J, China', 'USA, GB, F, D, RUS, J, Kanada', 'USA, GB, F, D, AUS, J, Kanada'], correct_index: 0, explanation: 'Die G7 ist ein informelles Forum der sieben großen westlichen Industriestaaten: USA, Großbritannien, Frankreich, Deutschland, Italien, Japan, Kanada.', fun_fact: 'Russland war von 1998 bis 2014 dabei – aus der G7 wurde die G8. Nach der Krim-Annexion 2014 wurde Russland ausgeschlossen und es ging zurück zur G7.' },
  { id: 'pol-028', topic: 'politik', difficulty: 'schwer', question: 'Welche internationale Justiz-Institution hat ihren Hauptsitz in Den Haag?', options: ['Europäischer Gerichtshof', 'Internationaler Strafgerichtshof', 'UN-Wirtschaftsrat', 'WTO'], correct_index: 1, explanation: 'Der Internationale Strafgerichtshof (IStGH/ICC) verfolgt Völkermord, Verbrechen gegen die Menschlichkeit und Kriegsverbrechen – seit 2002 mit Sitz in Den Haag.', fun_fact: 'Den Haag wird wegen seiner vielen Gerichte „Stadt des internationalen Rechts" genannt – neben dem IStGH sitzen dort auch der Internationale Gerichtshof (IGH) der UNO und das Jugoslawien-Tribunal.' }
);

// --- Kunst: Klassiker ---
QUESTIONS.push(
  { id: 'kunst-023', topic: 'kunst', difficulty: 'leicht', question: 'Wer schrieb das Drama „Wilhelm Tell"?', options: ['Goethe', 'Schiller', 'Kleist', 'Lessing'], correct_index: 1, explanation: 'Friedrich Schiller schrieb „Wilhelm Tell" 1804 – die Geschichte des Schweizer Freiheitskämpfers, der den Apfel vom Kopf seines Sohnes schießen muss.', fun_fact: 'Wilhelm Tell ist als historische Person nicht belegt – die Legende stammt vermutlich aus skandinavischen Sagen und wurde im 15. Jahrhundert auf die Schweiz übertragen.' },
  { id: 'kunst-024', topic: 'kunst', difficulty: 'mittel', question: 'Welches Werk machte Goethe 1774 schlagartig in ganz Europa berühmt?', options: ['Faust I', 'Die Leiden des jungen Werthers', 'Wilhelm Meisters Lehrjahre', 'Iphigenie auf Tauris'], correct_index: 1, explanation: 'Der Briefroman „Die Leiden des jungen Werthers" löste eine wahre Werther-Manie aus – junge Männer trugen sogar „Werther-Tracht".', fun_fact: 'Nach dem Erscheinen kam es zu einer Welle von Nachahmer-Selbstmorden – der erste dokumentierte „Werther-Effekt" der Medizingeschichte ist nach diesem Roman benannt.' },
  { id: 'kunst-025', topic: 'kunst', difficulty: 'leicht', question: 'Wer ist in der griechischen Mythologie der Götterkönig auf dem Olymp?', options: ['Poseidon', 'Apollon', 'Zeus', 'Hades'], correct_index: 2, explanation: 'Zeus herrscht über Himmel und Erde, schwingt den Blitz und ist Vater zahlreicher Götter und Halbgötter.', fun_fact: 'Zeus war für seine zahlreichen Affären berüchtigt – aus seinen Liebschaften mit sterblichen Frauen entstanden Helden wie Herkules, Perseus und Helena von Troja.' },
  { id: 'kunst-026', topic: 'kunst', difficulty: 'leicht', question: 'Wie heißt die griechische Göttin der Liebe und Schönheit?', options: ['Hera', 'Demeter', 'Aphrodite', 'Artemis'], correct_index: 2, explanation: 'Aphrodite ist nach griechischer Mythologie aus dem Meeresschaum geboren – im Römischen entspricht ihr Venus.', fun_fact: 'Botticellis berühmtes Gemälde „Die Geburt der Venus" zeigt genau diese Szene – Aphrodite/Venus steigt aus einer Muschel ans Land.' },
  { id: 'kunst-027', topic: 'kunst', difficulty: 'mittel', question: 'Welcher römische Gott entspricht dem griechischen Zeus?', options: ['Mars', 'Jupiter', 'Neptun', 'Merkur'], correct_index: 1, explanation: 'Jupiter ist der oberste Gott der römischen Mythologie – sein Tempel auf dem Kapitolinischen Hügel war das wichtigste Heiligtum Roms.', fun_fact: 'Die Tage der Woche zeigen viele Götterzuordnungen: „Donnerstag" ist „Donars Tag" (germanisch Thor = Jupiter); im Französischen „jeudi" („Jovis dies", Jupiters Tag).' },
  { id: 'kunst-028', topic: 'kunst', difficulty: 'mittel', question: 'Welche List eroberte laut Homer die Stadt Troja?', options: ['Eine Belagerung von zehn Jahren', 'Das Trojanische Pferd', 'Eine Geheimwaffe von Zeus', 'Eine List mit Feuerbrunnen'], correct_index: 1, explanation: 'Die Griechen täuschten den Abzug vor und ließen ein hölzernes Pferd zurück – in dem versteckte Soldaten Troja in der Nacht eroberten. Odysseus wird als Erfinder genannt.', fun_fact: 'Lange galt Troja als reiner Mythos – bis Heinrich Schliemann ab 1870 die Ruinen der antiken Stadt im heutigen Türkei tatsächlich ausgrub.' },
  { id: 'kunst-029', topic: 'kunst', difficulty: 'mittel', question: 'In welcher Stadt wurde Ludwig van Beethoven geboren?', options: ['Wien', 'Bonn', 'Hamburg', 'Salzburg'], correct_index: 1, explanation: 'Beethoven wurde 1770 in Bonn geboren – mit 21 Jahren zog er nach Wien, wo er sein Hauptwerk schuf und 1827 starb.', fun_fact: 'Beethoven verlor ab seinem 30. Lebensjahr zunehmend das Gehör – seine späten Werke, darunter die 9. Sinfonie, komponierte er, ohne sie selbst hören zu können.' },
  { id: 'kunst-030', topic: 'kunst', difficulty: 'schwer', question: 'Welcher Komponist schrieb „Eine kleine Nachtmusik" (KV 525)?', options: ['Joseph Haydn', 'Wolfgang Amadeus Mozart', 'Johann Sebastian Bach', 'Franz Schubert'], correct_index: 1, explanation: 'Mozart komponierte das Stück 1787 – eine Serenade für Streichquintett, eines der bekanntesten Werke der klassischen Musik überhaupt.', fun_fact: 'Mozart führte das Stück nie öffentlich auf – wofür es ursprünglich komponiert wurde, ist bis heute unklar. Veröffentlicht wurde es erst 40 Jahre nach seinem Tod.' }
);

// --- Philosophie & Religion: Kanonisches ---
QUESTIONS.push(
  { id: 'phil-023', topic: 'philosophie', difficulty: 'leicht', question: 'Wie viele Gebote umfasst der christliche/jüdische Dekalog?', options: ['7', '10', '12', '40'], correct_index: 1, explanation: 'Die Zehn Gebote (Dekalog) sind in den Büchern Exodus und Deuteronomium im Alten Testament überliefert.', fun_fact: 'Katholiken und Lutheraner zählen die Gebote anders als Juden und reformierte Protestanten – das erste „Du sollst keine anderen Götter haben" wird je nach Konfession aufgespalten oder zusammengefasst.' },
  { id: 'phil-024', topic: 'philosophie', difficulty: 'leicht', question: 'Welche vier Evangelien stehen am Anfang des Neuen Testaments?', options: ['Matthäus, Markus, Lukas, Johannes', 'Markus, Lukas, Paulus, Petrus', 'Matthäus, Paulus, Johannes, Petrus', 'Markus, Lukas, Johannes, Andreas'], correct_index: 0, explanation: 'Die Bibel beginnt im Neuen Testament mit den vier Evangelien des Matthäus, Markus, Lukas und Johannes – sie erzählen das Leben Jesu.', fun_fact: 'Die ersten drei Evangelien (Matthäus, Markus, Lukas) heißen „synoptisch", weil sie sehr ähnliche Geschichten erzählen – das Johannes-Evangelium ist deutlich anders aufgebaut.' },
  { id: 'phil-025', topic: 'philosophie', difficulty: 'leicht', question: 'Wer gilt als Religionsstifter des Islam?', options: ['Mohammed', 'Abraham', 'Moses', 'Ali'], correct_index: 0, explanation: 'Mohammed (ca. 570–632) erhielt nach islamischer Lehre ab dem Jahr 610 die Offenbarungen Allahs, die im Koran festgehalten sind.', fun_fact: 'Mohammed war als junger Mann Karawanenkaufmann und reiste viel – seine ersten religiösen Erfahrungen hatte er beim Meditieren in einer Höhle nahe Mekka.' },
  { id: 'phil-026', topic: 'philosophie', difficulty: 'leicht', question: 'Welche Stadt ist die heiligste Stadt des Islam und Geburtsort Mohammeds?', options: ['Medina', 'Jerusalem', 'Mekka', 'Damaskus'], correct_index: 2, explanation: 'Mekka in Saudi-Arabien ist Mohammeds Geburtsstadt und Ziel der islamischen Pilgerfahrt (Hadsch).', fun_fact: 'Nicht-Muslime dürfen Mekka nicht betreten – das Verbot wird streng durchgesetzt, mit Kontrollpunkten an den Stadtgrenzen.' },
  { id: 'phil-027', topic: 'philosophie', difficulty: 'leicht', question: 'Wie heißt die Mutter Jesu nach dem Neuen Testament?', options: ['Magdalena', 'Maria', 'Martha', 'Elisabeth'], correct_index: 1, explanation: 'Maria gilt als Jungfrau, die laut Lukas-Evangelium auf wundersame Weise Jesus empfing – sie spielt in allen christlichen Konfessionen eine wichtige Rolle.', fun_fact: 'In der römisch-katholischen Kirche wird Maria besonders verehrt – mit Festen wie Maria Himmelfahrt (15. August) und Mariä Empfängnis (8. Dezember).' },
  { id: 'phil-028', topic: 'philosophie', difficulty: 'mittel', question: 'Welche islamische Glaubensaussage gehört zu den „Fünf Säulen" und wird beim Eintritt in den Glauben gesprochen?', options: ['Ramadan', 'Schahada', 'Zakāt', 'Hadsch'], correct_index: 1, explanation: 'Die Schahada lautet: „Es gibt keinen Gott außer Allah, und Mohammed ist sein Gesandter." Sie ist die erste der fünf Säulen.', fun_fact: 'Wer die Schahada mit voller Überzeugung vor zwei muslimischen Zeugen ausspricht, gilt damit als zum Islam konvertiert – ein erstaunlich einfacher religiöser Vorgang.' },
  { id: 'phil-029', topic: 'philosophie', difficulty: 'mittel', question: 'Welche ist die älteste der drei großen abrahamitischen Religionen?', options: ['Judentum', 'Christentum', 'Islam', 'Hinduismus'], correct_index: 0, explanation: 'Das Judentum geht auf die Zeit Abrahams (um 1800 v. Chr.) zurück und ist damit über 1.500 Jahre älter als das Christentum und 2.500 Jahre älter als der Islam.', fun_fact: 'Alle drei Religionen verstehen sich als Nachfolger Abrahams – daher der Sammelbegriff „abrahamitische Religionen". Jeweilige Theologie und Riten haben sich aber stark auseinanderentwickelt.' },
  { id: 'phil-030', topic: 'philosophie', difficulty: 'schwer', question: 'Wer war Pontius Pilatus im Neuen Testament?', options: ['Hoherpriester in Jerusalem', 'Römischer Statthalter Judäas, der Jesus zum Tod verurteilte', 'König von Judäa zur Zeit Jesu', 'Anführer der Pharisäer'], correct_index: 1, explanation: 'Pilatus war zwischen 26 und 36 n. Chr. römischer Präfekt der Provinz Judäa und sprach laut den Evangelien das Todesurteil über Jesus.', fun_fact: 'Lange galt Pilatus rein als biblische Figur – bis 1961 in Caesarea Maritima eine Steintafel entdeckt wurde, die seinen Namen und Titel nennt: erster archäologischer Beleg seiner historischen Existenz.' }
);

// --- Naturwissenschaft: Klassiker & große Namen ---
QUESTIONS.push(
  { id: 'nat-023', topic: 'natur', difficulty: 'leicht', question: 'Wer formulierte das Gravitationsgesetz und die drei klassischen Bewegungsgesetze?', options: ['Galileo Galilei', 'Isaac Newton', 'Albert Einstein', 'Johannes Kepler'], correct_index: 1, explanation: 'Newton veröffentlichte 1687 seine „Principia Mathematica" – das mathematische Fundament der klassischen Physik bis ins 20. Jahrhundert.', fun_fact: 'Die Geschichte vom fallenden Apfel ist wahrscheinlich kein Mythos – Newton erzählte sie selbst im Alter mehreren Bekannten, allerdings ohne den dramatischen „Aha-Moment".' },
  { id: 'nat-024', topic: 'natur', difficulty: 'leicht', question: 'Welche berühmte Formel verbindet Einsteins Relativitätstheorie Masse und Energie?', options: ['F = m·a', 'E = m·c²', 'a² + b² = c²', 'V = I·R'], correct_index: 1, explanation: 'E = m·c² zeigt, dass Masse und Energie äquivalent sind – ein winziger Massenverlust setzt riesige Energiemengen frei (Grundlage von Atomenergie und -bomben).', fun_fact: 'Die Formel kommt in Einsteins ursprünglichem Artikel von 1905 noch gar nicht in dieser kompakten Form vor – sie wurde erst später so prägnant zusammengefasst.' },
  { id: 'nat-025', topic: 'natur', difficulty: 'mittel', question: 'Welche Forscherin entdeckte die Elemente Polonium und Radium und gewann zwei Nobelpreise?', options: ['Lise Meitner', 'Marie Curie', 'Rosalind Franklin', 'Dorothy Hodgkin'], correct_index: 1, explanation: 'Marie Curie gewann 1903 den Physik- und 1911 den Chemie-Nobelpreis – als bisher einzige Frau in zwei verschiedenen Wissenschaften.', fun_fact: 'Marie Curies Notizbücher sind bis heute so radioaktiv, dass sie in der französischen Nationalbibliothek nur mit Schutzkleidung eingesehen werden dürfen.' },
  { id: 'nat-026', topic: 'natur', difficulty: 'leicht', question: 'Wer behauptete im 16. Jahrhundert wissenschaftlich, dass die Erde die Sonne umkreist (heliozentrisches Weltbild)?', options: ['Galileo Galilei', 'Tycho Brahe', 'Nikolaus Kopernikus', 'Isaac Newton'], correct_index: 2, explanation: 'Kopernikus veröffentlichte 1543 „De revolutionibus orbium coelestium" – ein Wendepunkt der Wissenschaftsgeschichte („Kopernikanische Wende").', fun_fact: 'Das Buch erschien erst auf Kopernikus\' Sterbebett – aus Angst vor der Reaktion der Kirche hatte er es zu Lebzeiten lange nicht drucken lassen.' },
  { id: 'nat-027', topic: 'natur', difficulty: 'mittel', question: 'Welcher italienische Wissenschaftler musste vor der Inquisition seine Lehre vom heliozentrischen Weltbild widerrufen?', options: ['Giordano Bruno', 'Galileo Galilei', 'Leonardo da Vinci', 'Tycho Brahe'], correct_index: 1, explanation: 'Galileo Galilei wurde 1633 von der Inquisition gezwungen, dem heliozentrischen Weltbild abzuschwören – sein Buch „Dialog über die Weltsysteme" landete auf dem Index.', fun_fact: 'Erst 1992 rehabilitierte die katholische Kirche Galilei offiziell – fast 360 Jahre nach seinem Prozess.' },
  { id: 'nat-028', topic: 'natur', difficulty: 'mittel', question: 'Wer entdeckte mit Versuchen an Erbsen die grundlegenden Vererbungsgesetze?', options: ['Charles Darwin', 'Gregor Mendel', 'Louis Pasteur', 'Carl von Linné'], correct_index: 1, explanation: 'Der Augustinermönch Gregor Mendel veröffentlichte 1866 seine Vererbungslehre – wurde aber erst um 1900 wiederentdeckt.', fun_fact: 'Zu Mendels Lebzeiten interessierte sich praktisch niemand für seine Forschung – als seine Schriften 1900 unabhängig von drei Botanikern wiederentdeckt wurden, war Mendel schon 16 Jahre tot.' },
  { id: 'nat-029', topic: 'natur', difficulty: 'mittel', question: 'Welcher französische Wissenschaftler entwickelte den Tollwutimpfstoff und das nach ihm benannte Erhitzungsverfahren?', options: ['Antoine Lavoisier', 'Louis Pasteur', 'Marie Curie', 'Henri Becquerel'], correct_index: 1, explanation: 'Louis Pasteur (1822–1895) revolutionierte mit Impfungen und der Keimtheorie die Medizin – das Pasteurisieren von Lebensmitteln trägt seinen Namen.', fun_fact: 'Pasteurs erster erfolgreicher Tollwut-Patient war 1885 ein neunjähriger Junge namens Joseph Meister – der dem rettete Pasteur später bis zu dessen Lebensende dankbar diente.' },
  { id: 'nat-030', topic: 'natur', difficulty: 'mittel', question: 'Welche zwei Forscher entdeckten 1953 die Doppelhelixstruktur der DNA?', options: ['Watson und Crick', 'Mendel und Darwin', 'Curie und Becquerel', 'Pasteur und Koch'], correct_index: 0, explanation: 'James Watson und Francis Crick veröffentlichten 1953 in „Nature" das Modell der DNA-Doppelhelix – Grundlage der modernen Genetik.', fun_fact: 'Eine entscheidende Vorarbeit lieferte die britische Forscherin Rosalind Franklin mit ihren Röntgenbildern – sie wurde aber lange übergangen und starb 1958 vor der Nobelpreis-Verleihung 1962.' },
  { id: 'nat-031', topic: 'natur', difficulty: 'leicht', question: 'Welche drei klassischen Aggregatzustände gibt es?', options: ['fest, weich, hart', 'fest, flüssig, gasförmig', 'warm, kalt, neutral', 'sichtbar, unsichtbar, dampfend'], correct_index: 1, explanation: 'Im Schulunterricht lernen wir drei Aggregatzustände: fest, flüssig und gasförmig.', fun_fact: 'Tatsächlich gibt es einen vierten – das Plasma. Es ist sogar der häufigste Zustand sichtbarer Materie im Universum (Sterne bestehen daraus).' },
  { id: 'nat-032', topic: 'natur', difficulty: 'leicht', question: 'In welcher Reihenfolge stehen die Planeten von der Sonne aus?', options: ['Merkur, Venus, Mars, Erde, Jupiter, Saturn, Uranus, Neptun', 'Merkur, Venus, Erde, Mars, Jupiter, Saturn, Uranus, Neptun', 'Venus, Merkur, Erde, Mars, Saturn, Jupiter, Uranus, Neptun', 'Merkur, Erde, Venus, Mars, Jupiter, Saturn, Neptun, Uranus'], correct_index: 1, explanation: 'Die Reihenfolge: Merkur, Venus, Erde, Mars, Jupiter, Saturn, Uranus, Neptun.', fun_fact: 'Eine bekannte Eselsbrücke: „Mein Vater erklärt mir jeden Sonntag unseren Nachthimmel" – die Anfangsbuchstaben passen zur Planetenreihenfolge.' }
);

// === NEUE KATEGORIEN: Computer & KI ===

// --- Computer & Internet ---
QUESTIONS.push(
  { id: 'comp-001', topic: 'computer', difficulty: 'leicht', question: 'Wer ist Mitgründer von Microsoft?', options: ['Steve Jobs', 'Bill Gates', 'Mark Zuckerberg', 'Larry Page'], correct_index: 1, explanation: 'Bill Gates gründete Microsoft 1975 zusammen mit seinem Schulfreund Paul Allen.', fun_fact: 'Bill Gates brach sein Studium in Harvard ab, um Microsoft zu gründen – Jahre später wurde er der reichste Mensch der Welt und ist heute einer der größten privaten Spender für Gesundheits- und Bildungsprojekte.' },
  { id: 'comp-002', topic: 'computer', difficulty: 'leicht', question: 'Wer war Mitgründer von Apple?', options: ['Bill Gates', 'Steve Jobs', 'Jeff Bezos', 'Elon Musk'], correct_index: 1, explanation: 'Steve Jobs gründete Apple 1976 zusammen mit Steve Wozniak und Ronald Wayne in einer Garage in Los Altos.', fun_fact: 'Ronald Wayne verkaufte seinen 10%-Anteil an Apple nur zwei Wochen später für 800 US-Dollar – heute wären sie hunderte Milliarden wert.' },
  { id: 'comp-003', topic: 'computer', difficulty: 'leicht', question: 'In welchem Jahr wurde Google gegründet?', options: ['1995', '1998', '2001', '2004'], correct_index: 1, explanation: 'Larry Page und Sergey Brin gründeten Google 1998 als Doktoranden an der Stanford University.', fun_fact: 'Der Name „Google" ist eine Verballhornung von „Googol" – der mathematischen Zahl 10¹⁰⁰. Eigentlich war es ein Tippfehler, der hängenblieb.' },
  { id: 'comp-004', topic: 'computer', difficulty: 'leicht', question: 'Wofür steht die Abkürzung „WWW"?', options: ['Wide World Web', 'World Wide Web', 'World Web Wire', 'Web Wide World'], correct_index: 1, explanation: 'World Wide Web – das System verlinkter Hypertext-Dokumente, das über das Internet abrufbar ist.', fun_fact: 'Das Internet und das WWW sind nicht dasselbe: Das Internet ist die Infrastruktur (das Netz), das WWW ist ein Dienst, der darüber läuft – wie E-Mail, FTP oder Online-Gaming auch.' },
  { id: 'comp-005', topic: 'computer', difficulty: 'mittel', question: 'Welches Betriebssystem ist als kostenlose Open-Source-Alternative zu Windows und macOS bekannt?', options: ['Linux', 'Unix', 'BSD', 'Solaris'], correct_index: 0, explanation: 'Linux wurde 1991 vom finnischen Studenten Linus Torvalds entwickelt und ist heute Grundlage unzähliger Server, Smartphones (Android) und eingebetteter Systeme.', fun_fact: 'Auf den meisten Web-Servern der Welt läuft Linux – ohne es würde das heutige Internet schlicht nicht funktionieren.' },
  { id: 'comp-006', topic: 'computer', difficulty: 'mittel', question: 'Wofür steht „USB" beim USB-Stick?', options: ['Ultra Speed Bus', 'Universal Serial Bus', 'Unified System Board', 'United Storage Bridge'], correct_index: 1, explanation: 'Universal Serial Bus – ein 1996 eingeführter Standard, um Peripheriegeräte einheitlich an Computer anzuschließen.', fun_fact: 'Vor USB hatte jeder Gerätetyp seinen eigenen Anschluss – Tastatur (PS/2), Maus (PS/2 oder seriell), Drucker (parallel), Modem (seriell). USB ersetzte sie alle.' },
  { id: 'comp-007', topic: 'computer', difficulty: 'mittel', question: 'Wer erfand 1989 das World Wide Web?', options: ['Bill Gates', 'Steve Jobs', 'Tim Berners-Lee', 'Vint Cerf'], correct_index: 2, explanation: 'Der britische Physiker Tim Berners-Lee entwickelte am CERN in Genf das WWW – ursprünglich, damit Wissenschaftler einfacher Dokumente austauschen konnten.', fun_fact: 'Berners-Lee verzichtete bewusst auf ein Patent – das WWW gehört seither niemandem. Hätte er es patentiert, wäre er heute einer der reichsten Menschen der Welt.' },
  { id: 'comp-008', topic: 'computer', difficulty: 'mittel', question: 'Was bedeutet „Cloud Computing"?', options: ['Wettervorhersage per Computer', 'Daten und Programme auf entfernten Servern statt lokal speichern', 'Verschlüsselung von Internetverbindungen', 'Funkübertragung zwischen Geräten'], correct_index: 1, explanation: 'Beim Cloud Computing liegen Daten und Anwendungen nicht auf dem eigenen Gerät, sondern auf Servern eines Anbieters (z. B. Amazon AWS, Microsoft Azure, Google Cloud).', fun_fact: 'Wenn du Fotos in iCloud, Dropbox oder Google Drive speicherst, liegen sie physisch in riesigen Rechenzentren – oft an mehreren Standorten weltweit gleichzeitig.' },
  { id: 'comp-009', topic: 'computer', difficulty: 'schwer', question: 'Welche Programmiersprache wurde 1991 von Guido van Rossum entwickelt und ist heute die populärste Sprache für KI und Data Science?', options: ['JavaScript', 'Java', 'Python', 'C++'], correct_index: 2, explanation: 'Python wurde mit Fokus auf Lesbarkeit entwickelt und hat sich besonders in Wissenschaft, KI und Data Science durchgesetzt.', fun_fact: 'Der Name „Python" stammt nicht von der Schlange, sondern von der britischen Comedy-Truppe „Monty Python" – van Rossum war Fan.' },
  { id: 'comp-010', topic: 'computer', difficulty: 'schwer', question: 'Wofür steht das „TCP" in „TCP/IP"?', options: ['Total Computing Protocol', 'Transmission Control Protocol', 'Transfer Connection Protocol', 'Terminal Communication Protocol'], correct_index: 1, explanation: 'Transmission Control Protocol – sorgt zusammen mit IP (Internet Protocol) dafür, dass Datenpakete zuverlässig und in der richtigen Reihenfolge ankommen.', fun_fact: 'TCP/IP wurde in den 1970er-Jahren von Vint Cerf und Bob Kahn entwickelt – sie gelten deshalb als die „Väter des Internets".' },
  { id: 'comp-011', topic: 'computer', difficulty: 'schwer', question: 'In welchem Jahr ging Wikipedia online?', options: ['1995', '1998', '2001', '2005'], correct_index: 2, explanation: 'Wikipedia wurde am 15. Januar 2001 von Jimmy Wales und Larry Sanger gestartet – heute die größte Enzyklopädie der Geschichte.', fun_fact: 'Die englische Wikipedia hat über 6 Millionen Artikel, die deutsche über 2,8 Millionen – komplett von Freiwilligen geschrieben und gepflegt.' },
  { id: 'comp-012', topic: 'computer', difficulty: 'mittel', question: 'Welcher Konzern entwickelte und veröffentlichte das Smartphone-Betriebssystem Android?', options: ['Microsoft', 'Apple', 'Google', 'Samsung'], correct_index: 2, explanation: 'Google übernahm 2005 die kleine Firma „Android Inc." und brachte 2008 das erste Smartphone mit Android auf den Markt.', fun_fact: 'Android basiert auf dem Linux-Kernel – jedes Android-Smartphone ist im Inneren ein modifiziertes Linux-System.' }
);

// --- Künstliche Intelligenz ---
QUESTIONS.push(
  { id: 'ki-001', topic: 'ki', difficulty: 'leicht', question: 'Wie heißt die bekannte KI-Anwendung von OpenAI, die seit Ende 2022 Texte generiert?', options: ['Siri', 'Alexa', 'ChatGPT', 'Cortana'], correct_index: 2, explanation: 'ChatGPT wurde am 30. November 2022 veröffentlicht und erreichte in 5 Tagen 1 Million Nutzer – schneller als jeder Dienst zuvor.', fun_fact: 'ChatGPT basiert auf GPT-Sprachmodellen („Generative Pre-trained Transformer") – die zugrundeliegende Transformer-Architektur stammt aus einer Google-Forschungsarbeit von 2017.' },
  { id: 'ki-002', topic: 'ki', difficulty: 'leicht', question: 'Welcher Computer besiegte 1997 als erster den amtierenden Schachweltmeister Garri Kasparow?', options: ['Watson', 'Deep Blue', 'AlphaZero', 'HAL 9000'], correct_index: 1, explanation: 'IBMs „Deep Blue" gewann den entscheidenden sechsten Partienkampf gegen Kasparow – eine historische Zäsur in der KI-Geschichte.', fun_fact: 'Kasparow vermutete nach der Niederlage, IBM habe einen Menschen eingesetzt – so unerklärlich gut spielte die Maschine. IBM zerstörte Deep Blue kurz danach, statt einen Rückkampf zu spielen.' },
  { id: 'ki-003', topic: 'ki', difficulty: 'leicht', question: 'Wofür steht die Abkürzung „KI" auf Deutsch?', options: ['Komplexe Information', 'Künstliche Intelligenz', 'Kognitive Information', 'Kontrollierte Iteration'], correct_index: 1, explanation: 'KI = Künstliche Intelligenz – im Englischen AI (Artificial Intelligence).', fun_fact: 'Der Begriff „Artificial Intelligence" wurde nicht erst kürzlich erfunden – schon 1956, also vor fast 70 Jahren, prägte ihn der US-Informatiker John McCarthy.' },
  { id: 'ki-004', topic: 'ki', difficulty: 'leicht', question: 'Wie heißt der Sprachassistent von Apple, der auf iPhone, iPad und Mac eingebaut ist?', options: ['Alexa', 'Cortana', 'Siri', 'Google Assistant'], correct_index: 2, explanation: 'Siri wurde 2011 mit dem iPhone 4S vorgestellt – als einer der ersten massentauglichen Sprachassistenten.', fun_fact: 'Siri begann als eigenständige App eines US-Forschungslabors – Apple kaufte das Start-up 2010 und integrierte die Technik in iOS.' },
  { id: 'ki-005', topic: 'ki', difficulty: 'mittel', question: 'Was misst der „Turing-Test", den Alan Turing 1950 vorschlug?', options: ['Die Rechenleistung eines Computers', 'Ob ein Mensch in einem Chat-Gespräch Maschine von Mensch unterscheiden kann', 'Die Speicherkapazität einer Festplatte', 'Die Sicherheit eines Algorithmus'], correct_index: 1, explanation: 'Beim Turing-Test chattet ein Mensch blind mit einem anderen Menschen und einer Maschine – wenn er die Maschine nicht erkennt, gilt sie als „intelligent".', fun_fact: 'Moderne Chatbots wie GPT-4 können in vielen Kontexten den klassischen Turing-Test bestehen – der Test gilt deshalb in der Forschung heute als überholt.' },
  { id: 'ki-006', topic: 'ki', difficulty: 'mittel', question: 'Welches KI-System besiegte 2016 den damaligen Go-Weltmeister Lee Sedol?', options: ['Watson', 'Deep Blue', 'AlphaGo', 'GPT'], correct_index: 2, explanation: 'AlphaGo von DeepMind (Google-Tochter) gewann 4:1 gegen Lee Sedol – Go galt zuvor als zu komplex für Computer.', fun_fact: 'AlphaGo machte in der zweiten Partie den heute legendären „Zug 37", den menschliche Experten zunächst für einen Fehler hielten – er erwies sich als brillanter Strategiezug, den kein Mensch je gespielt hatte.' },
  { id: 'ki-007', topic: 'ki', difficulty: 'mittel', question: 'Wofür steht die Abkürzung „LLM" im Zusammenhang mit moderner KI?', options: ['Long Logical Memory', 'Large Language Model', 'Linear Learning Machine', 'Local Loop Module'], correct_index: 1, explanation: 'Large Language Models sind sehr große neuronale Netze, die auf riesigen Textmengen trainiert werden – Basis von ChatGPT, Claude, Gemini etc.', fun_fact: 'GPT-3 wurde 2020 mit etwa 175 Milliarden Parametern trainiert – das Training kostete vermutlich um die 5 Millionen US-Dollar an reiner Rechenzeit.' },
  { id: 'ki-008', topic: 'ki', difficulty: 'schwer', question: 'Wer prägte 1956 auf der Dartmouth-Konferenz den Begriff „Artificial Intelligence"?', options: ['Alan Turing', 'John McCarthy', 'Marvin Minsky', 'Geoffrey Hinton'], correct_index: 1, explanation: 'John McCarthy organisierte 1956 zusammen mit Marvin Minsky, Claude Shannon und Nathaniel Rochester die Dartmouth-Konferenz – die als Geburtsstunde der KI als Forschungsdisziplin gilt.', fun_fact: 'Die Teilnehmer der Konferenz dachten, das Problem der KI sei innerhalb weniger Jahrzehnte gelöst – stattdessen folgten mehrere „KI-Winter" mit jahrzehntelanger Stagnation, bevor in den 2010ern der Durchbruch kam.' },
  { id: 'ki-009', topic: 'ki', difficulty: 'schwer', question: 'Welche bahnbrechende Architektur stellte das Google-Paper „Attention Is All You Need" (2017) vor?', options: ['Convolutional Neural Network', 'Transformer', 'Recurrent Neural Network', 'Boltzmann-Maschine'], correct_index: 1, explanation: 'Die Transformer-Architektur ist Grundlage praktisch aller modernen Sprachmodelle – GPT, BERT, Claude, Gemini bauen darauf auf.', fun_fact: 'Das „T" in „GPT" steht genau dafür: Generative Pre-trained Transformer. Ohne diese Arbeit von 2017 gäbe es ChatGPT heute nicht.' },
  { id: 'ki-010', topic: 'ki', difficulty: 'schwer', question: 'Wie verhält sich „Deep Learning" zu „Machine Learning"?', options: ['Beides ist dasselbe', 'Deep Learning ist eine Unterart von Machine Learning mit mehrschichtigen neuronalen Netzen', 'Machine Learning ist eine Unterart von Deep Learning', 'Sie haben nichts miteinander zu tun'], correct_index: 1, explanation: 'Deep Learning ist eine Methode des Machine Learnings, die besonders tiefe neuronale Netze mit vielen Schichten nutzt – ML ist der Oberbegriff.', fun_fact: 'Deep Learning erlebte erst um 2012 seinen Durchbruch, als das Netzwerk „AlexNet" einen Bildklassifikations-Wettbewerb haushoch gewann – getrieben durch Grafikkarten (GPUs), die das Training erst praktikabel machten.' }
);

// === NEUE KATEGORIE: Judentum & Israel ===
QUESTIONS.push(
  { id: 'jud-001', topic: 'judentum', difficulty: 'leicht', question: 'Welche Sprache ist die wichtigste Amtssprache Israels?', options: ['Arabisch', 'Hebräisch', 'Jiddisch', 'Aramäisch'], correct_index: 1, explanation: 'Hebräisch (modern: Iwrit) ist die zentrale Landessprache Israels – Arabisch hat einen besonderen Status, ist aber seit 2018 keine gleichrangige Amtssprache mehr.', fun_fact: 'Modernes Hebräisch ist die einzige Sprache der Welt, die nach Jahrhunderten als rein liturgische („tote") Sprache wieder zur lebendigen Alltagssprache wurde – maßgeblich vorangetrieben von Eliezer Ben-Jehuda im späten 19. Jahrhundert.' },
  { id: 'jud-002', topic: 'judentum', difficulty: 'leicht', question: 'Welcher Wochentag ist im Judentum der heilige Ruhetag (Schabbat)?', options: ['Freitag', 'Samstag', 'Sonntag', 'Montag'], correct_index: 1, explanation: 'Der Schabbat dauert von Freitagabend bei Sonnenuntergang bis Samstagabend, wenn drei Sterne am Himmel zu sehen sind.', fun_fact: 'Strenggläubige Juden zünden vor Schabbat-Beginn elektrische Geräte und Lichter an, weil das aktive Entzünden während des Schabbats als „Arbeit" gilt – moderne „Schabbat-Aufzüge" halten deshalb in jedem Stock automatisch.' },
  { id: 'jud-003', topic: 'judentum', difficulty: 'leicht', question: 'Welches Symbol ziert die Flagge Israels?', options: ['Halbmond', 'Kreuz', 'Davidstern', 'Olivenzweig'], correct_index: 2, explanation: 'Der Davidstern (Magen David) – ein sechszackiger Stern – steht zwischen zwei blauen Streifen auf weißem Grund.', fun_fact: 'Der Davidstern wurde erst im 19. Jahrhundert zum allgemeinen jüdischen Hauptsymbol – davor war die siebenarmige Menora (heute Wappen Israels) das verbreitetere Erkennungszeichen.' },
  { id: 'jud-004', topic: 'judentum', difficulty: 'leicht', question: 'Wie heißt die wichtigste heilige Schrift des Judentums?', options: ['Talmud', 'Koran', 'Tora', 'Mischna'], correct_index: 2, explanation: 'Die Tora umfasst die fünf Bücher Moses und entspricht inhaltlich den ersten fünf Büchern des christlichen Alten Testaments.', fun_fact: 'Eine traditionelle Tora-Rolle wird mit der Hand auf Pergament geschrieben – ein einziger Fehler macht die Rolle religiös unbrauchbar; ein Sofer (Schreiber) braucht etwa ein Jahr für eine Rolle.' },
  { id: 'jud-005', topic: 'judentum', difficulty: 'mittel', question: 'In welchem Jahr wurde der Staat Israel gegründet?', options: ['1917', '1945', '1948', '1967'], correct_index: 2, explanation: 'David Ben-Gurion verlas am 14. Mai 1948 in Tel Aviv die Unabhängigkeitserklärung – am Tag zuvor war das britische Mandat über Palästina ausgelaufen.', fun_fact: 'Bereits am Tag der Gründung erklärten fünf arabische Nachbarstaaten Israel den Krieg – der Erste Arabisch-Israelische Krieg dauerte bis 1949 und prägt den Konflikt bis heute.' },
  { id: 'jud-006', topic: 'judentum', difficulty: 'mittel', question: 'Wer war der erste Premierminister Israels?', options: ['Theodor Herzl', 'Golda Meir', 'David Ben-Gurion', 'Menachem Begin'], correct_index: 2, explanation: 'David Ben-Gurion (1886–1973) leitete die Staatsgründung 1948 und war anschließend bis 1963 mit kurzer Unterbrechung Premierminister.', fun_fact: 'Theodor Herzl gilt als Begründer des politischen Zionismus, starb aber bereits 1904 – über 40 Jahre vor der Staatsgründung, die er nie miterlebte.' },
  { id: 'jud-007', topic: 'judentum', difficulty: 'mittel', question: 'Welches jüdische Fest erinnert an die Befreiung des Volkes Israel aus der ägyptischen Sklaverei?', options: ['Chanukka', 'Pessach', 'Jom Kippur', 'Purim'], correct_index: 1, explanation: 'Pessach (Passah) erinnert an den Auszug aus Ägypten unter Moses – mit dem rituellen Seder-Mahl und sieben Tagen ohne gesäuertes Brot.', fun_fact: 'Das christliche Osterfest leitet sich direkt von Pessach ab – die Kreuzigung Jesu fiel laut Evangelien in die Pessach-Woche, und das Wort „Pascha" steckt in vielen Sprachen drin (z. B. „Páscoa" auf Portugiesisch).' },
  { id: 'jud-008', topic: 'judentum', difficulty: 'mittel', question: 'Was bedeutet das Wort „koscher"?', options: ['Heilig im religiösen Sinne', 'Nach jüdischem Religionsgesetz erlaubt (besonders bei Speisen)', 'Eine Gebetsform', 'Rein im hygienischen Sinne'], correct_index: 1, explanation: 'Koscher kommt vom hebräischen „kascher" („geeignet, angemessen") und bezeichnet alles, was den jüdischen Speise- und Ritualgesetzen entspricht.', fun_fact: 'Zentrale Regel: Milch und Fleisch dürfen nicht gemeinsam gegessen werden. Strenggläubige haben deshalb zwei komplette Küchengarnituren – eine für „milchig", eine für „fleischig".' },
  { id: 'jud-009', topic: 'judentum', difficulty: 'mittel', question: 'Was ist die „Klagemauer" (Westmauer) in Jerusalem?', options: ['Ein römisches Bauwerk aus der Kaiserzeit', 'Die letzte erhaltene Außenmauer des Zweiten Jüdischen Tempels', 'Ein modernes Holocaust-Mahnmal', 'Eine osmanische Festung'], correct_index: 1, explanation: 'Die Westmauer ist der letzte erhaltene Teil der Stützmauer des Zweiten Tempels, der 70 n. Chr. durch die Römer zerstört wurde – heute heiligste zugängliche Stätte des Judentums.', fun_fact: 'Gläubige stecken handgeschriebene Gebetszettel in die Ritzen zwischen den Steinen. Zweimal im Jahr werden diese gesammelt und auf dem Ölberg rituell vergraben – immerhin etwa eine Million Zettel jährlich.' },
  { id: 'jud-010', topic: 'judentum', difficulty: 'schwer', question: 'Welche britische Erklärung von 1917 unterstützte erstmals offiziell einen „jüdischen Heimstaat in Palästina"?', options: ['Sykes-Picot-Abkommen', 'Balfour-Deklaration', 'Versailler Vertrag', 'McMahon-Hussein-Korrespondenz'], correct_index: 1, explanation: 'Der britische Außenminister Arthur Balfour formulierte die Deklaration als kurzen Brief an den Zionisten Lord Rothschild – sie ebnete den Weg zur späteren Staatsgründung.', fun_fact: 'Der Brief ist nur 67 Wörter lang – eine der kürzesten politischen Verlautbarungen der Geschichte mit so weitreichenden Konsequenzen.' },
  { id: 'jud-011', topic: 'judentum', difficulty: 'schwer', question: 'Was ist der „Talmud"?', options: ['Eine Sammlung jüdischer Gebete', 'Eine umfangreiche Sammlung von Auslegungen und Diskussionen zur Tora', 'Das jüdische Gesangbuch', 'Eine Sammlung von Prophezeiungen'], correct_index: 1, explanation: 'Der Talmud (entstanden ca. 200–500 n. Chr.) enthält die mündliche Lehre, ihre Diskussion und Auslegung – Grundlagentext des rabbinischen Judentums.', fun_fact: 'Wer den gesamten Talmud nach dem traditionellen „Daf Yomi"-System täglich eine Seite liest, braucht etwa siebeneinhalb Jahre dafür – weltweit synchronisiert, alle lesen am selben Tag die selbe Seite.' },
  { id: 'jud-012', topic: 'judentum', difficulty: 'schwer', question: 'Welcher höchste jüdische Feiertag wird als „Tag der Versöhnung" begangen, traditionell mit 25-stündigem Fasten?', options: ['Rosch ha-Schana', 'Jom Kippur', 'Sukkot', 'Purim'], correct_index: 1, explanation: 'An Jom Kippur bitten Gläubige Gott um Vergebung der Sünden des vergangenen Jahres – der heiligste Tag im jüdischen Kalender.', fun_fact: 'In Israel steht an Jom Kippur das gesamte öffentliche Leben still: kein Verkehr, keine Radio- oder TV-Sendungen. Selbst weltliche Israelis halten sich oft daran – die leeren Straßen werden vielerorts zu Spielwiesen für Kinder mit Fahrrädern.' }
);

// Damit auch das alte Skript-Tag-Setup funktioniert
if (typeof window !== 'undefined') window.QUESTIONS = QUESTIONS;
