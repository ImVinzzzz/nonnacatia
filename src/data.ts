import type { Category, Recipe } from './types'

export const categories: Category[] = [
  {
    id: 'rp_0_primi', label: 'Primi', icon: 'fa-solid fa-bowl-food', image: '/img_home/primi.jpg', active: true, count: 1,
    description: 'Piatti della domenica, ragù lenti e profumi che riempiono la cucina.',
    recipes: [
      { id: 'rp_1_tagliatelle', title: 'Tagliatelle al Ragù', subtitle: 'Il Piatto della Domenica', description: 'Un ragù lento e profumato, cotto per ore a fuoco basso con carne mista, odori di campagna e vino rosso.' },
      { title: 'Pasta e Fagioli', subtitle: 'Il Piatto Povero più Rico del Mondo', description: 'Cremosa, densa, con pasta spezzata e fagioli borlotti cotti con rosmarino e aglio.' },
      { title: 'Risotto allo Zafferano', subtitle: 'Alla Milanese, come si deve', description: 'Oro nel piatto, mantecato con burro e parmigiano, morbido e lucente.' },
      { title: 'Lasagne al Forno della Nonna', subtitle: 'Alta, Stratificata, Indimenticabile', description: 'Sfoglia fresca, ragù abbondante, besciamella vellutata e tanto parmigiano.' },
      { title: "Spaghetti all'Amatriciana", subtitle: 'La Ricetta Tradizionale', description: 'Guanciale croccante, pomodoro San Marzano, peperoncino e pecorino romano.' },
      { title: 'Minestrone di Verdure', subtitle: 'Quattro Stagioni nel Piatto', description: 'Verdure di stagione, legumi, patate e un filo d’olio extravergine a crudo.' },
    ],
  },
  {
    id: 'rd_0_dolci', label: 'Dolci', icon: 'fa-solid fa-stroopwafel', image: '/img_home/dolci.jpg', active: true, count: 6,
    description: 'Dolci di casa, lievitati e creme da preparare con calma e condividere.',
    recipes: [
      { id: 'rd_1_tiramisu', title: 'Tiramisù Classico alla Vincenzo', subtitle: 'Il Dolce al Cucchiaio per Eccellenza', description: 'Savoiardi imbevuti nel caffè espresso, crema vellutata di mascarpone e una nuvola di cacao amaro.' },
      { id: 'rd_2_ferratelle-irma', title: 'Ferratelle di Irma', subtitle: 'Il Dolce delle Feste in Abruzzo', description: 'Croccanti, profumate, con quel tocco inconfondibile di sambuca che le rende uniche.' },
      { id: 'rd_3_torta-margherita', title: 'Torta Margherita (Stefania)', subtitle: 'Soffice come una Nuvola', description: 'Metà farina, metà fecola e albumi montati a neve per una torta che si scioglie in bocca.' },
      { id: 'rd_4_crema-latte', title: 'Crema al Latte', subtitle: 'La Farcitura Soffice per i Dolci di Casa', description: 'Tre ingredienti, dieci minuti e una crema vellutata, dolce al punto giusto grazie al miele.' },
      { id: 'rd_5_maritozzi', title: 'Maritozzi', subtitle: 'Soffici, Dorati e Irresistibili', description: 'Un impasto versatile, perfetto da gustare da solo o da farcire con panna, crema o marmellata.' },
      { id: 'rd_6_rotolo-nutella', title: 'Rotolo alla Nutella', subtitle: 'Soffice, Goloso, Impossibile Resistere', description: 'Un biscuit sottile e soffice, farcito con Nutella e spolverato di zucchero a velo.' },
    ],
  },
  {
    id: 'ro_0_occasioni', label: 'Occasioni Speciali', icon: 'fa-solid fa-star', image: '/img_home/occasioni.jpg', active: true, count: 1,
    description: 'Le ricette delle feste, dei pranzi in famiglia e dei giorni da ricordare.',
    recipes: [
      { id: 'ro_1_pizza-pasqua', title: 'Pizza di Pasqua', subtitle: 'Il Profumo della Settimana Santa', description: 'Un pane dolce lievitato, soffice dentro e dorato fuori, profumato di agrumi, cannella, maraschino e rum.' },
      { title: 'Lasagne al Forno della Nonna', subtitle: 'Alta, Stratificata, Indimenticabile', description: 'Un’architettura di sapori che richiede tempo ma ripaga ogni minuto.' },
      { title: "Spaghetti all'Amatriciana", subtitle: 'La Ricetta Tradizionale', description: 'La versione di festa del grande classico laziale.' },
      { title: 'Minestrone di Verdure', subtitle: 'Quattro Stagioni nel Piatto', description: 'Il minestrone di nonna cambia con le stagioni ma non perde il sapore di casa.' },
    ],
  },
  { id: 'antipasti', label: 'Antipasti', icon: 'fa-solid fa-cheese', active: false, count: 0, description: 'In arrivo dalla cucina di famiglia.', recipes: [] },
  { id: 'secondi', label: 'Secondi', icon: 'fa-solid fa-drumstick-bite', active: false, count: 0, description: 'In arrivo dalla cucina di famiglia.', recipes: [] },
  { id: 'conserve', label: 'Conserve e Marmellate', icon: 'fa-solid fa-jar', active: false, count: 0, description: 'In arrivo dalla cucina di famiglia.', recipes: [] },
  { id: 'pizza-focacce', label: 'Pizza e Focacce', icon: 'fa-solid fa-pizza-slice', active: false, count: 0, description: 'In arrivo dalla cucina di famiglia.', recipes: [] },
]

const info = (items: [string, string, string][]) => items.map(([label, value, icon]) => ({ label, value, icon }))
const ingredients = (groups: [string, [string, string, string][]][]) => groups.map(([label, items]) => ({ label, items: items.map(([id, quantity, name]) => ({ id, quantity, name })) }))

export const recipes: Recipe[] = [
  {
    id: 'rd_1_tiramisu', slug: 'rd_1_tiramisu', title: 'Tiramisù Classico alla Vincenzo', subtitle: 'Il Dolce al Cucchiaio per Eccellenza', categoryId: 'rd_0_dolci', categoryLabel: 'Dolci', categoryIcon: 'fa-solid fa-stroopwafel', image: '/img_ricette/rd_1_tiramisu.jpg',
    description: 'Savoiardi imbevuti nel caffè espresso, una crema vellutata di mascarpone e uova montate, una nuvola di cacao amaro in superficie. Il segreto è nel riposo: più aspetti, più i sapori si fondono.',
    badges: [{ label: 'Dolci', tone: 'category' }, { label: '6–8 persone', tone: 'time' }, { label: 'Facile', tone: 'difficulty' }],
    info: info([['Preparazione', '30 min', 'fa-regular fa-clock'], ['Cottura', 'Nessuna', 'fa-solid fa-fire-burner'], ['Riposo', 'min. 2 ore', 'fa-solid fa-snowflake'], ['Porzioni', '6–8 pers.', 'fa-solid fa-users'], ['Difficoltà', 'Facile', 'fa-solid fa-gauge-simple-high'], ['Occasione', 'Sempre!', 'fa-solid fa-heart']]),
    ingredients: ingredients([['Per la crema', [['t1', '6', 'Uova fresche (tuorli e albumi separati)'], ['t2', '150 g', 'Zucchero semolato'], ['t3', '500 g', 'Mascarpone freddo']]], ['Per la base', [['t4', '300 g', 'Savoiardi'], ['t5', '300 ml', 'Caffè espresso (zuccherato a piacere)']]], ['Per finire', [['t6', 'q.b.', 'Cacao amaro in polvere']]]]),
    notes: ['Per una versione più sicura si possono usare tuorli e albumi pastorizzati. In alternativa, sostituisci gli albumi con 200 ml di panna fresca montata.', 'Il mascarpone deve essere freddo e le uova a temperatura ambiente. Non inzuppare troppo i savoiardi: un secondo per lato basta.'],
    sections: [
      { title: 'Il Caffè e la Crema ai Tuorli', steps: ['Prepara il caffè espresso, aggiungi lo zucchero e lascialo raffreddare completamente. Separa tuorli e albumi, poi monta i tuorli con lo zucchero fino a ottenere un composto chiaro e spumoso.', 'Aggiungi il mascarpone freddo a cucchiaiate e lavora delicatamente fino a ottenere una crema densa, liscia e compatta.'] },
      { title: 'Gli Albumi a Neve e la Crema Finale', steps: ['Monta gli albumi con ciotola e fruste pulite fino a ottenere una meringa ferma e lucida. Incorpora gli albumi alla crema in tre riprese, con movimenti dal basso verso l’alto.'] },
      { title: 'Composizione a Strati', steps: ['Immergi rapidamente i savoiardi nel caffè freddo e disponili in un unico strato. Versa metà crema, aggiungi un secondo strato di savoiardi e completa con la crema rimasta.'] },
      { title: 'Riposo e Servizio', steps: ['Copri e lascia riposare in frigorifero almeno 2 ore, meglio ancora tutta la notte. Spolvera il cacao solo al momento di servire.'] },
    ],
  },
  {
    id: 'rd_2_ferratelle-irma', slug: 'rd_2_ferratelle-irma', title: 'Ferratelle di Irma', subtitle: 'Il Dolce delle Feste in Abruzzo', categoryId: 'rd_0_dolci', categoryLabel: 'Dolci', categoryIcon: 'fa-solid fa-stroopwafel',
    description: 'Le ferratelle sono il dolce identitario dell’Abruzzo: croccanti, profumate e con quel tocco inconfondibile di sambuca che le rende uniche.',
    badges: [{ label: 'Dolci', tone: 'category' }, { label: '40–50 pezzi', tone: 'time' }, { label: 'Facile', tone: 'difficulty' }],
    info: info([['Preparazione', '20 min', 'fa-regular fa-clock'], ['Cottura', '~1 h 10 min', 'fa-solid fa-fire-burner'], ['Resa', '40–50 pz.', 'fa-solid fa-cookie-bite'], ['Difficoltà', 'Facile', 'fa-solid fa-gauge-simple-high'], ['Si conservano', '7–10 giorni', 'fa-solid fa-box'], ['Occasione', 'Feste e regali', 'fa-solid fa-gift']]),
    ingredients: ingredients([['Per l’impasto', [['f1', '10', 'Uova fresche'], ['f2', '20 cucchiai', 'Zucchero semolato'], ['f3', '20 cucchiai', 'Olio di semi'], ['f4', '4 g', 'Lievito per dolci'], ['f5', 'q.b.', 'Farina 00'], ['f6', 'q.b.', 'Sambuca']]], ['Attrezzatura necessaria', [['f7', '1', 'Ferro abruzzese']]]]),
    notes: ['La farina si aggiunge a occhio: l’impasto deve essere sodo, non duro e non appiccicoso. La sambuca dà alle ferratelle il profumo caratteristico.', 'Non ungere il ferro a ogni passaggio: l’olio nell’impasto è sufficiente.'],
    sections: [
      { title: 'L’Impasto', steps: ['Sbatti brevemente le uova, poi aggiungi zucchero e olio. Unisci la sambuca e il lievito.', 'Incorpora la farina poco alla volta fino a ottenere un impasto sodo, liscio e non appiccicoso. Copri e lascia riposare 30 minuti.'] },
      { title: 'Scaldare il Ferro', steps: ['Scalda il ferro fino a temperatura piena. Se necessario, spennella le piastre solo al primo utilizzo.'] },
      { title: 'La Cottura', steps: ['Preleva una cucchiaiata d’impasto e posizionala al centro della piastra. Chiudi e cuoci 1–2 minuti per lato, finché è dorata e si stacca facilmente.'] },
      { title: 'Conservazione e Servizio', steps: ['Lascia raffreddare completamente prima di riporre le ferratelle in una scatola di latta. Servile semplici o farcite con miele, marmellata, Nutella o ricotta.'] },
    ],
  },
  {
    id: 'rd_3_torta-margherita', slug: 'rd_3_torta-margherita', title: 'Torta Margherita di Stefania', subtitle: 'Soffice come una Nuvola', categoryId: 'rd_0_dolci', categoryLabel: 'Dolci', categoryIcon: 'fa-solid fa-stroopwafel', image: '/img_ricette/rd_3_torta-margherita.jpg',
    description: 'Metà farina, metà fecola di patate e albumi montati a neve: una torta profumata di limone, perfetta da sola o farcita con crema al latte.',
    badges: [{ label: 'Dolci', tone: 'category' }, { label: '8–10 fette', tone: 'time' }, { label: 'Facile', tone: 'difficulty' }],
    info: info([['Preparazione', '30 min', 'fa-regular fa-clock'], ['Cottura', '50–70 min a 150°', 'fa-solid fa-fire-burner'], ['Porzioni', '8–10 fette', 'fa-solid fa-users'], ['Teglia', '22 cm', 'fa-solid fa-circle-dot'], ['Difficoltà', 'Facile', 'fa-solid fa-gauge-simple-high'], ['Occasione', 'Colazione e merenda', 'fa-solid fa-heart']]),
    ingredients: ingredients([['Per la torta', [['tp1', '5', 'Uova fresche, separate'], ['tp2', '180 g', 'Zucchero semolato'], ['tp3', '90 g', 'Burro morbido'], ['tp4', '150 g', 'Farina 00'], ['tp5', '150 g', 'Fecola di patate'], ['tp6', '130 ml', 'Latte intero'], ['tp7', '1 bustina', 'Lievito per dolci'], ['tp8', '1', 'Limone, scorza grattugiata'], ['tp9', '1 pizzico', 'Sale fino']]]]),
    notes: ['Uova e burro a temperatura ambiente sono fondamentali. La fecola è il segreto della sofficità.', 'Per la versione Paradiso, aspetta che torta e crema siano completamente fredde prima di tagliare e farcire.'],
    sections: [
      { title: 'Tuorli, Zucchero e Burro', steps: ['Separa tuorli e albumi. Lavora i tuorli con lo zucchero per 4–5 minuti, poi aggiungi il burro morbido a tocchetti fino a completo assorbimento.'] },
      { title: 'Le Polveri e il Latte', steps: ['Setaccia farina, fecola e lievito. Aggiungili in tre riprese alternandoli con il latte; unisci limone e sale senza lavorare troppo.'] },
      { title: 'Gli Albumi e la Cottura', steps: ['Monta gli albumi a neve ferma e incorporali dal basso verso l’alto. Versa in una teglia da 22 cm e cuoci a 150°C per 50–70 minuti.'] },
      { title: 'La Crema al Latte (variante Paradiso)', steps: ['Prepara la crema al latte a parte. A torta fredda, taglia orizzontalmente, farcisci, richiudi e completa con zucchero a velo.'] },
    ],
  },
  {
    id: 'rd_4_crema-latte', slug: 'rd_4_crema-latte', title: 'Crema al Latte', subtitle: 'La Farcitura Soffice per i Dolci di Casa', categoryId: 'rd_0_dolci', categoryLabel: 'Dolci', categoryIcon: 'fa-solid fa-stroopwafel',
    description: 'Tre ingredienti, dieci minuti e una crema soffice, vellutata e dolce al punto giusto grazie al miele.',
    badges: [{ label: 'Dolci', tone: 'category' }, { label: '~400 ml', tone: 'time' }, { label: 'Facilissima', tone: 'difficulty' }],
    info: info([['Preparazione', '10 min', 'fa-regular fa-clock'], ['Cottura', 'Nessuna', 'fa-solid fa-fire-burner'], ['Resa', '~400 ml', 'fa-solid fa-bowl-food'], ['Difficoltà', 'Facilissima', 'fa-solid fa-gauge-simple-high'], ['Si conserva', '24–48 h in frigo', 'fa-solid fa-snowflake'], ['Usata in', 'Torta Paradiso', 'fa-solid fa-cake-candles']]),
    ingredients: ingredients([['Ingredienti', [['cl1', '200 g', 'Panna da montare fresca, ben fredda'], ['cl2', '60 g', 'Latte condensato freddo'], ['cl3', '1 cucchiaio', 'Miele millefiori o acacia']]]]),
    notes: ['Il freddo è tutto: panna, latte condensato, ciotola e fruste devono essere ben freddi.', 'Puoi usare la crema per pan di spagna, crostate, cialde o servirla al cucchiaio con biscotti secchi.'],
    sections: [
      { title: 'Montare la Panna', steps: ['Versa la panna ben fredda in una ciotola e montala con le fruste fino a ottenere una neve fermissima.'] },
      { title: 'Unire gli Ingredienti', steps: ['Aggiungi latte condensato e miele a filo. Incorpora con una spatola, con movimenti lenti dal basso verso l’alto.'] },
      { title: 'Conservazione e Utilizzo', steps: ['Copri con pellicola a contatto e conserva in frigorifero per 24–48 ore. Prima di usarla, mescola brevemente con una spatola.'] },
    ],
  },
  {
    id: 'rd_5_maritozzi', slug: 'rd_5_maritozzi', title: 'Maritozzi', subtitle: 'Soffici, Dorati e Irresistibili', categoryId: 'rd_0_dolci', categoryLabel: 'Dolci', categoryIcon: 'fa-solid fa-stroopwafel',
    description: 'Soffici come cuscini, dorati in superficie e con una mollica leggera. Un impasto versatile, buono da solo o da farcire.',
    badges: [{ label: 'Dolci', tone: 'category' }, { label: '~20 pezzi', tone: 'time' }, { label: 'Media', tone: 'difficulty' }],
    info: info([['Preparazione', '20 min', 'fa-regular fa-clock'], ['Riposo in frigo', '30 min', 'fa-solid fa-snowflake'], ['Lievitazione', '1 h 30 min', 'fa-solid fa-hourglass-half'], ['Cottura', '10 min a 180°', 'fa-solid fa-fire-burner'], ['Resa', '~20 maritozzi', 'fa-solid fa-bread-slice'], ['Occasione', 'Colazione e merenda', 'fa-solid fa-heart']]),
    ingredients: ingredients([['Per l’impasto', [['m1', '1 kg', 'Farina 00'], ['m2', '500 ml', 'Latte intero tiepido'], ['m3', '2 cubetti', 'Lievito di birra fresco'], ['m4', '1 bicchiere', 'Olio di semi'], ['m5', '2', 'Tuorli d’uovo'], ['m6', '6 cucchiai', 'Zucchero semolato']]], ['Per spennellare', [['m7', '1', 'Uovo intero']]]]),
    notes: ['Il riposo in frigorifero rende l’impasto più maneggevole e sviluppa un sapore più complesso. Non saltarlo.', 'Il latte deve essere tiepido, non caldo. Farcisci i maritozzi solo quando sono completamente freddi.'],
    sections: [
      { title: 'Il Lievito e l’Impasto', steps: ['Sciogli il lievito nel latte tiepido con un cucchiaino di zucchero. Versa farina, tuorli, zucchero e olio; lavora fino a ottenere un impasto morbido ed elastico.'] },
      { title: 'Riposo in Frigorifero', steps: ['Forma una palla, avvolgila nella pellicola e lascia riposare in frigorifero per 30 minuti.'] },
      { title: 'Formatura e Seconda Lievitazione', steps: ['Dividi in porzioni da 50–60 g, forma panini ovali e lasciali lievitare coperti per 1–1,5 ore, fino al raddoppio.'] },
      { title: 'Cottura e Finitura', steps: ['Spennella con uovo sbattuto e cuoci a 180°C per circa 10 minuti. Raffredda su una griglia e farcisci con panna o crema al latte.'] },
    ],
  },
  {
    id: 'rd_6_rotolo-nutella', slug: 'rd_6_rotolo-nutella', title: 'Rotolo alla Nutella', subtitle: 'Soffice, Goloso, Impossibile Resistere', categoryId: 'rd_0_dolci', categoryLabel: 'Dolci', categoryIcon: 'fa-solid fa-stroopwafel',
    description: 'Un pan di spagna soffice e sottile, arrotolato ancora caldo, farcito con Nutella e spolverato di zucchero a velo.',
    badges: [{ label: 'Dolci', tone: 'category' }, { label: '8–10 fette', tone: 'time' }, { label: 'Facile', tone: 'difficulty' }],
    info: info([['Preparazione', '25 min', 'fa-regular fa-clock'], ['Cottura', '10 min a 170°', 'fa-solid fa-fire-burner'], ['Riposo', '10 min', 'fa-solid fa-snowflake'], ['Porzioni', '8–10 fette', 'fa-solid fa-users'], ['Difficoltà', 'Facile', 'fa-solid fa-gauge-simple-high'], ['Occasione', 'Merenda e dessert', 'fa-solid fa-heart']]),
    ingredients: ingredients([['Per il biscuit', [['rn1', '4', 'Uova, separate'], ['rn2', '80 g', 'Zucchero semolato'], ['rn3', '50 ml', 'Olio di semi'], ['rn4', '50 ml', 'Latte intero'], ['rn5', '70 g', 'Farina 00'], ['rn6', 'q.b.', 'Estratto di vaniglia']]], ['Per la farcitura', [['rn7', '200–250 g', 'Nutella a temperatura ambiente']]], ['Per decorare', [['rn8', 'q.b.', 'Zucchero a velo']]]]),
    notes: ['Arrotola il biscuit subito, ancora caldo: è il passaggio che evita che si spezzi. La Nutella si stende meglio a temperatura ambiente.', 'Lo zucchero a velo va aggiunto solo prima di servire.'],
    sections: [
      { title: 'La Base: Tuorli e Composto', steps: ['Preriscalda il forno a 170°C. Lavora i tuorli con lo zucchero, poi incorpora vaniglia, olio, latte e farina setacciata.'] },
      { title: 'Albumi a Neve e Cottura', steps: ['Monta gli albumi e incorporali dal basso verso l’alto. Stendi su una teglia 30×40 cm e cuoci per 10 minuti, senza asciugare troppo il biscuit.'] },
      { title: 'L’Arrotolamento a Caldo', steps: ['Capovolgi il biscuit caldo su un canovaccio spolverato di zucchero a velo, rimuovi la carta e arrotolalo insieme al canovaccio. Lascia raffreddare.'] },
      { title: 'Farcitura, Chiusura e Decorazione', steps: ['Srotola, spalma la Nutella lasciando un piccolo margine, richiudi il rotolo e lascialo rassodare in frigorifero. Completa con zucchero a velo.'] },
    ],
  },
  {
    id: 'ro_1_pizza-pasqua', slug: 'ro_1_pizza-pasqua', title: 'Pizza di Pasqua', subtitle: 'Il Profumo della Settimana Santa', categoryId: 'ro_0_occasioni', categoryLabel: 'Occasioni Speciali', categoryIcon: 'fa-solid fa-star',
    description: 'Un pane dolce lievitato, soffice dentro e dorato fuori, profumato di agrumi, cannella, maraschino e rum.',
    badges: [{ label: 'Occasioni', tone: 'category' }, { label: '~3 panetti', tone: 'time' }, { label: 'Difficile', tone: 'difficulty' }],
    info: info([['Preparazione', '40 min', 'fa-regular fa-clock'], ['Lievitazione', '3–4 h', 'fa-solid fa-hourglass-half'], ['Cottura', '40 min a 170°', 'fa-solid fa-fire-burner'], ['Resa', '~3 panetti', 'fa-solid fa-bread-slice'], ['Difficoltà', 'Difficile', 'fa-solid fa-gauge-simple-high'], ['Occasione', 'Pasqua', 'fa-solid fa-egg']]),
    ingredients: ingredients([['Liquidi e grassi', [['pp1', '5', 'Uova fresche'], ['pp2', '170 ml', 'Latte intero tiepido'], ['pp3', '170 ml', 'Olio di semi']]], ['Zucchero e lievito', [['pp4', '250 g', 'Zucchero semolato'], ['pp5', '½ cubetto', 'Lievito di birra fresco']]], ['Aromi e liquori', [['pp6', 'q.b.', 'Cannella'], ['pp7', '1', 'Limone, buccia grattugiata'], ['pp8', '2', 'Arance, buccia e succo'], ['pp9', 'q.b.', 'Maraschino'], ['pp10', 'q.b.', 'Rum']]], ['Farina', [['pp11', '~1,5 kg', 'Farina 00']]]]),
    notes: ['Il latte deve essere tiepido, non caldo. La farina va aggiunta gradualmente: l’impasto deve rimanere morbido ed elastico.', 'Non aprire il forno nei primi 30 minuti. La lievitazione è pronta quando l’impasto è raddoppiato.'],
    sections: [
      { title: 'Attivare il Lievito', steps: ['Sciogli il lievito nel latte tiepido con un cucchiaino di zucchero e lascia riposare 10 minuti, finché si forma una schiuma.'] },
      { title: 'Il Composto Liquido', steps: ['Sbatti uova e zucchero. Aggiungi olio, succo e scorze degli agrumi, cannella, maraschino e rum.'] },
      { title: 'L’Impasto', steps: ['Versa il latte con il lievito e incorpora la farina poco alla volta. Lavora energicamente per almeno 10 minuti, finché l’impasto è liscio ed elastico.'] },
      { title: 'La Lievitazione', steps: ['Dividi negli stampi riempiendoli a metà e lascia lievitare 3–4 ore in un luogo caldo, fino quasi al bordo.'] },
      { title: 'Cottura e Raffreddamento', steps: ['Cuoci a 170°C per 40 minuti. Lascia raffreddare prima nello stampo e poi su una griglia; non tagliare da calda.'] },
    ],
  },
  {
    id: 'rp_1_tagliatelle', slug: 'rp_1_tagliatelle', title: 'Tagliatelle al Ragù', subtitle: 'Il Piatto della Domenica', categoryId: 'rp_0_primi', categoryLabel: 'Primi', categoryIcon: 'fa-solid fa-bowl-food', image: '/img_ricette/rp_1_tagliatelle-ragu.webp',
    description: 'Un ragù lento e profumato, cotto per ore a fuoco basso con carne mista, odori di campagna e un bicchiere di vino rosso.',
    badges: [{ label: 'Primi', tone: 'category' }, { label: '4 persone', tone: 'time' }, { label: 'Media', tone: 'difficulty' }],
    info: info([['Preparazione', '40 min', 'fa-regular fa-clock'], ['Cottura', '2 h 50 min', 'fa-solid fa-fire-burner'], ['Porzioni', '4 persone', 'fa-solid fa-users'], ['Difficoltà', 'Media', 'fa-solid fa-gauge-simple-high'], ['Stagione', 'Tutto l’anno', 'fa-solid fa-leaf'], ['Occasione', 'Domenica', 'fa-solid fa-heart']]),
    ingredients: ingredients([['Per il Ragù', [['i1', '300 g', 'Carne di manzo macinata'], ['i2', '150 g', 'Carne di maiale macinata'], ['i3', '1 fetta', 'Pancetta tesa'], ['i4', '400 g', 'Pomodori pelati'], ['i5', '1 bicchiere', 'Vino rosso'], ['i6', '1 grande', 'Cipolla dorata'], ['i7', '2', 'Carote'], ['i8', '2 coste', 'Sedano'], ['i9', '2 cucchiai', 'Concentrato di pomodoro'], ['i10', 'q.b.', 'Olio EVO, sale e pepe'], ['i11', '1 foglia', 'Alloro']]], ['Per le Tagliatelle', [['i12', '400 g', 'Farina 00'], ['i13', '4', 'Uova grandi'], ['i14', '1 pizzico', 'Sale fino']]], ['Per servire', [['i15', 'abbondante', 'Parmigiano Reggiano']]]]),
    notes: ['Il brodo è tutto: se hai tempo, preparalo la sera prima. Non avere fretta: un ragù di quattro ore è sublime.', 'Le tagliatelle devono essere larghe 8 mm. Il giorno dopo il ragù è ancora più buono.'],
    sections: [
      { title: 'Il Soffritto e la Carne', steps: ['Trita cipolla, carote e sedano e falli appassire con olio EVO per almeno 15 minuti. Aggiungi la pancetta, poi la carne macinata e rosola bene.'] },
      { title: 'La Cottura Lenta del Ragù', steps: ['Sfuma con il vino, aggiungi concentrato e pomodori pelati. Sala, pepa, unisci l’alloro e cuoci a fuoco minimo per almeno 2 ore e mezza, mescolando ogni 20–30 minuti.'] },
      { title: 'Le Tagliatelle Fresche', steps: ['Forma una fontana con la farina, aggiungi uova e sale. Impasta 10 minuti, fai riposare 30 minuti, poi stendi sfoglie sottili e taglia strisce da 8 mm.'] },
      { title: 'Cottura e Impiattamento', steps: ['Cuoci la pasta fresca 2–3 minuti in acqua salata, scolala tenendo da parte un po’ d’acqua e manteca direttamente nel ragù. Servi con Parmigiano.'] },
    ],
  },
]

export const getCategory = (id?: string) => categories.find((category) => category.id === id)
export const getRecipe = (id?: string) => recipes.find((recipe) => recipe.id === id || recipe.slug === id)
