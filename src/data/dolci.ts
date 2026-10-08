import { ICONS } from '../constants/icons'
import { ingredients, info, toCategoryRecipe } from './helpers'
import type { Category, Recipe } from './types'

const categoryId = 'rd_0_dolci'
const categoryIcon = ICONS.dessert

export const dolciRecipes: Recipe[] = [
  {
    id: 'rd_1_tiramisu', slug: 'rd_1_tiramisu', title: 'Tiramisù Classico alla Vincenzo', subtitle: 'Il Dolce al Cucchiaio per Eccellenza', categoryId, categoryLabel: 'Dolci', categoryIcon, image: '/img_ricette/rd_1_tiramisu.jpg',
    summary: 'Savoiardi imbevuti nel caffè espresso, una crema vellutata di mascarpone e uova montate, una nuvola di cacao amaro in superficie (opzionale).',
    intro: 'Savoiardi imbevuti nel caffè espresso, una crema vellutata di mascarpone e uova montate, una nuvola di cacao amaro in superficie (opzionale). Il tiramisù è uno di quei dolci che non tramontano mai: semplice da preparare, impossibile da resistere. Il segreto è nel riposo: più aspetti, più i sapori si fondono in qualcosa di straordinario.',
    preparationIntro: 'La crema deve rimanere ariosa e i savoiardi devono assorbire il caffè senza inzupparsi troppo. Il riposo in frigorifero è il passaggio che trasforma ingredienti semplici in un dolce davvero armonioso.',
    badges: [{ label: 'Dolci', tone: 'category' }, { label: '6–8 pers.', tone: 'time' }, { label: 'Facile', tone: 'difficulty' }],
    info: info([['Preparazione', '30 min', ICONS.clock], ['Cottura', 'Nessuna', ICONS.cooking], ['Riposo', 'min. 2 ore', ICONS.snowflake], ['Porzioni', '6–8 pers.', ICONS.users], ['Difficoltà', 'Facile', ICONS.difficulty], ['Occasione', 'Sempre!', ICONS.heart]]),
    ingredients: ingredients([['Per la crema', [['t1', '6', 'Uova fresche (tuorli e albumi separati)'], ['t2', '150 g', 'Zucchero semolato'], ['t3', '500 g', 'Mascarpone freddo']]], ['Per la base', [['t4', '300 g', 'Savoiardi'], ['t5', '300 ml', 'Caffè espresso (zuccherato a piacere)']]], ['Per finire (opzionale)', [['t6', 'q.b.', 'Cacao amaro in polvere']]]]),
    notes: ['Per una versione più sicura si possono usare tuorli e albumi pastorizzati. In alternativa, sostituisci gli albumi con 200 ml di panna fresca montata a neve morbida.', 'Il mascarpone deve essere freddo di frigorifero, le uova a temperatura ambiente. Non inzuppare troppo i savoiardi: un secondo per lato, non di più. Il cacao va spolverato solo prima di servire.'],
    sections: [
      { title: 'Il Caffè e la Crema ai Tuorli', steps: ['Prepara il caffè espresso — più forte è, meglio è — e versalo in una ciotola ampia e dai bordi bassi. Aggiungi lo zucchero a piacere e lascialo raffreddare completamente: il caffè caldo rammollirebbe i biscotti.', 'Separa i tuorli dagli albumi e metti gli albumi da parte in frigorifero. Sbatti i tuorli con lo zucchero usando le fruste elettriche per 4–5 minuti, fino a ottenere un composto chiaro, gonfio e spumoso che scende a nastro.', 'Aggiungi il mascarpone freddo a cucchiaiate ai tuorli montati, incorporandolo con una spatola o con le fruste a bassa velocità, fino a ottenere una crema densa, liscia e compatta.'] },
      { title: 'Gli Albumi a Neve e la Crema Finale', steps: ['Assicurati che ciotola e fruste siano perfettamente pulite e asciutte. Monta gli albumi a velocità media fino a ottenere una meringa ferma e lucida, con picchi sodi.', 'Incorpora gli albumi alla crema di mascarpone in tre riprese: la prima con movimenti più decisi per alleggerire, le successive con la spatola dal basso verso l’alto, per mantenere tutta l’aria.'] },
      { title: 'Composizione a Strati', steps: ['Scegli una pirofila rettangolare da circa 20×30 cm oppure bicchieri individuali. Immergi i savoiardi nel caffè freddo uno alla volta, un passaggio rapido per lato, e disponili in un unico strato.', 'Versa metà della crema sui savoiardi e distribuiscila. Realizza un secondo strato di savoiardi inzuppati, seguito dall’altra metà della crema, poi livella bene la superficie.'] },
      { title: 'Riposo e Servizio', steps: ['Copri il tiramisù con pellicola e trasferiscilo in frigorifero per almeno 2 ore, meglio ancora 6 ore o tutta la notte: i savoiardi completano l’assorbimento e la crema si rassoda.', 'Solo al momento di servire, spolvera la superficie con cacao amaro passato attraverso un colino a maglie fini. Servi il tiramisù ben freddo.'] },
    ],
  },
  {
    id: 'rd_2_ferratelle-irma', slug: 'rd_2_ferratelle-irma', title: 'Ferratelle di Irma', subtitle: 'Il Dolce delle Feste in Abruzzo', categoryId, categoryLabel: 'Dolci', categoryIcon,
    summary: 'Croccanti, profumate, con quel tocco inconfondibile di sambuca che le rende uniche. Ogni famiglia ha la sua ricetta, gelosamente custodita.',
    intro: 'Le ferratelle sono il dolce identitario dell’Abruzzo: croccanti, profumate, con quel tocco inconfondibile di sambuca che le rende uniche. Ogni famiglia ha la sua ricetta, gelosamente custodita. Questa è quella di Irma — dosi generose, impasto sodo e tanta pazienza sul ferro rovente. Ne vengono tante, ma spariscono ancora più in fretta.',
    preparationIntro: 'La consistenza dell’impasto si regola a occhio: deve essere sodo, liscio e non appiccicoso. Dopo le prime ferratelle si prende il ritmo giusto per dosare l’impasto e la temperatura del ferro.',
    badges: [{ label: 'Dolci', tone: 'category' }, { label: '40–50 pz.', tone: 'time' }, { label: 'Facile', tone: 'difficulty' }],
    info: info([['Preparazione', '20 min', ICONS.clock], ['Cottura', '~1 h 10 min', ICONS.cooking], ['Resa', '40–50 pz.', ICONS.cookie], ['Difficoltà', 'Facile', ICONS.difficulty], ['Si conservano', '7–10 giorni', ICONS.box], ['Occasione', 'Feste e regali', ICONS.gift]]),
    ingredients: ingredients([['Per l’impasto', [['f1', '10', 'Uova fresche (a temperatura ambiente)'], ['f2', '20 cucchiai', 'Zucchero semolato'], ['f3', '20 cucchiai', 'Olio di semi (girasole o mais)'], ['f4', '4 g', 'Lievito per dolci'], ['f5', 'q.b.', 'Farina 00 (fino a consistenza soda)'], ['f6', 'q.b.', 'Sambuca (un goccio generoso)']]], ['Attrezzatura necessaria', [['f7', '1', 'Ferro Abruzzese (elettrico o da fuoco)']]]]),
    notes: ['La farina si aggiunge a occhio: dipende dalla grandezza delle uova e dall’umidità del giorno. La sambuca dà il profumo caratteristico; puoi sostituirla con liquore all’arancia o rum.', 'Non ungere il ferro ad ogni passaggio: l’olio nell’impasto è sufficiente.'],
    sections: [
      { title: 'L’Impasto', steps: ['Rompi le 10 uova in una ciotola capiente e sbattile brevemente: non serve montarle, basta amalgamarle.', 'Aggiungi zucchero e olio di semi, poi la sambuca e il lievito. Incorpora la farina poco alla volta fino a ottenere una consistenza soda, liscia e non appiccicosa. Copri e lascia riposare 30 minuti.'] },
      { title: 'Scaldare il Ferro', steps: ['Scalda il ferro, elettrico o da fuoco, fino a temperatura piena. Se è la prima volta che lo usi, spennella le piastre con un filo d’olio; dalle successive non sarà necessario.', 'Il ferro deve essere ben caldo: una piastra non abbastanza calda produce biscotti pallidi e gommosi invece che dorati e croccanti.'] },
      { title: 'La Cottura', steps: ['Preleva una cucchiaiata d’impasto, circa una pallina da golf, e posizionala al centro della piastra inferiore. Chiudi il ferro e schiaccia con decisione.', 'Cuoci per circa 1–2 minuti per lato se usi il ferro da fuoco, girando a metà cottura. La ferratella è pronta quando è dorata e si stacca facilmente.', 'Sollevala e posala su una griglia o un canovaccio pulito. È morbidissima appena tolta dal ferro: se vuoi arrotolarla o piegarla, fallo subito.'] },
      { title: 'Conservazione e Servizio', steps: ['Ripeti con il resto dell’impasto fino ad esaurimento. Lascia raffreddare completamente le ferratelle prima di riporle, così il vapore non le renderà molli.', 'Conservale in una scatola di latta per 7–10 giorni. Servile semplici oppure farcite al momento con miele, marmellata, Nutella o crema di ricotta.'] },
    ],
  },
  {
    id: 'rd_3_torta-margherita', slug: 'rd_3_torta-margherita', title: 'Torta Margherita di Stefania', subtitle: 'Soffice come una Nuvola', categoryId, categoryLabel: 'Dolci', categoryIcon, image: '/img_ricette/rd_3_torta-margherita.jpg',
    summary: 'Il segreto è nella leggerezza: metà farina, metà fecola e albumi montati a neve per una torta che si scioglie in bocca.',
    intro: 'Il segreto di questa torta è nella leggerezza: metà farina, metà fecola di patate, e gli albumi montati a neve incorporati con cura. Il risultato è una torta che si scioglie in bocca, profumata di limone, perfetta da sola o farcita con una crema al latte vellutata. La ricetta di Stefania, tramandata con amore.',
    preparationIntro: 'Questa torta si prepara in tre momenti distinti: il composto di tuorli e burro, le polveri alternate al latte, e infine gli albumi incorporati con delicatezza. Non è difficile, ma vuole rispetto dei passaggi.',
    badges: [{ label: 'Dolci', tone: 'category' }, { label: '8–10 fette', tone: 'time' }, { label: 'Facile', tone: 'difficulty' }],
    info: info([['Preparazione', '30 min', ICONS.clock], ['Cottura', '50–70 min a 150°', ICONS.cooking], ['Porzioni', '8–10 fette', ICONS.users], ['Teglia', '22 cm', ICONS.circle], ['Difficoltà', 'Facile', ICONS.difficulty], ['Occasione', 'Colazione e merenda', ICONS.heart]]),
    ingredients: ingredients([['Per la torta', [['tp1', '5', 'Uova fresche (a temperatura ambiente, separate)'], ['tp2', '180 g', 'Zucchero semolato'], ['tp3', '90 g', 'Burro ammorbidito'], ['tp4', '150 g', 'Farina 00'], ['tp5', '150 g', 'Fecola di patate'], ['tp6', '130 ml', 'Latte intero'], ['tp7', '1 bustina', 'Lievito per dolci (16 g)'], ['tp8', '1', 'Limone — scorza grattugiata'], ['tp9', '1 pizzico', 'Sale fino']]]]),
    notes: ['Uova e burro a temperatura ambiente sono fondamentali. La fecola di patate è il segreto della sofficità.', '150°C sembra basso, ma è la temperatura giusta per una cottura uniforme e lenta. Per la versione Paradiso, aspetta che torta e crema siano completamente fredde.'],
    sections: [
      { title: 'Tuorli, Zucchero e Burro', steps: ['Separa i tuorli dagli albumi. Lavora i tuorli con lo zucchero usando le fruste elettriche per 4–5 minuti, fino ad ottenere un composto chiaro, gonfio e spumoso.', 'Aggiungi il burro ammorbidito a tocchetti, uno alla volta, continuando a lavorare fino a completo assorbimento.'] },
      { title: 'Le Polveri e il Latte', steps: ['Setaccia insieme farina 00, fecola e lievito. Aggiungi le polveri al composto in tre riprese, alternandole con il latte versato a filo.', 'Unisci scorza di limone e sale. Lavora a bassa velocità o con una spatola, senza montare troppo il composto.'] },
      { title: 'Gli Albumi e la Cottura', steps: ['Monta gli albumi a neve ferma con un pizzico di sale. Incorporali in due o tre riprese dal basso verso l’alto, con gesti lenti e ampi.', 'Imburra e infarina una teglia da 22 cm, versa il composto e cuoci in forno statico a 150°C per 50–70 minuti. Controlla con uno stecchino dopo 50 minuti.', 'Sforna, lascia riposare 10 minuti nello stampo, poi raffredda completamente su una griglia e spolvera con zucchero a velo.'] },
      { title: 'La Crema al Latte (variante Paradiso)', steps: ['Per la crema, mescola a freddo amido, zucchero e vanillina, poi aggiungi il latte a filo. Scalda a fiamma medio-bassa mescolando fino a quando la crema vela il cucchiaio.', 'Quando torta e crema sono fredde, taglia la torta a metà, distribuisci la crema sul disco inferiore, richiudi e spolvera con zucchero a velo.'] },
    ],
  },
  {
    id: 'rd_4_crema-latte', slug: 'rd_4_crema-latte', title: 'Crema al Latte', subtitle: 'La Farcitura Soffice per i Dolci di Casa', categoryId, categoryLabel: 'Dolci', categoryIcon,
    summary: 'Tre ingredienti, dieci minuti e una crema vellutata, dolce al punto giusto grazie al miele.',
    intro: 'Tre ingredienti, dieci minuti, un risultato che conquista. Questa crema al latte è soffice, vellutata e dolce al punto giusto grazie al miele: perfetta per farcire la Torta Paradiso, ma anche per accompagnare crostate, pan di spagna e qualsiasi dolce abbia bisogno di una farcitura leggera e profumata. Il segreto è uno solo: tutto deve essere molto freddo.',
    preparationIntro: 'La riuscita dipende dalla temperatura: panna e latte condensato devono essere ben freddi e la panna deve essere montata a neve fermissima prima di incorporare gli altri ingredienti.',
    badges: [{ label: 'Dolci', tone: 'category' }, { label: '~400 ml', tone: 'time' }, { label: 'Facilissima', tone: 'difficulty' }],
    info: info([['Preparazione', '10 min', ICONS.clock], ['Cottura', 'Nessuna', ICONS.cooking], ['Resa', '~400 ml di crema', ICONS.bowl], ['Difficoltà', 'Facilissima', ICONS.difficulty], ['Si conserva', '24–48 h in frigo', ICONS.snowflake], ['Usata in', 'Torta Paradiso', ICONS.cake]]),
    ingredients: ingredients([['Ingredienti', [['cl1', '200 g', 'Panna da montare fresca (ben fredda)'], ['cl2', '60 g', 'Latte condensato (freddo)'], ['cl3', '1 cucchiaio', 'Miele millefiori o acacia (colmo)']]]]),
    notes: ['Il freddo è tutto. Se in casa fa caldo, tieni anche ciotola e fruste in freezer per 10 minuti prima di iniziare.', 'Il miele di acacia è più delicato, il millefiori più aromatico. Per una crema più dolce aumenta il latte condensato fino a 80 g.'],
    sections: [
      { title: 'Montare la Panna', steps: ['Versa la panna ben fredda in una ciotola capiente, idealmente raffreddata in frigorifero o freezer. Monta con le fruste elettriche a velocità media, aumentando gradualmente fino al massimo.', 'Continua fino a ottenere una neve fermissima: la panna deve formare picchi sodi e mantenere le righe tracciate dalla frusta.'] },
      { title: 'Unire gli Ingredienti', steps: ['Aggiungi il latte condensato freddo versandolo a filo sulla panna montata, poi unisci il cucchiaio colmo di miele. Non usare le fruste elettriche in questa fase.', 'Incorpora con una spatola, mescolando dal basso verso l’alto con movimenti lenti e avvolgenti. La crema è pronta quando colore e consistenza sono omogenei.'] },
      { title: 'Conservazione e Utilizzo', steps: ['Se non usi la crema subito, coprila con pellicola a contatto e conservala in frigorifero fino a 24–48 ore.', 'Al momento di usarla, mescola brevemente con la spatola. Usala per farcire torte, pan di spagna e crostate oppure servila al cucchiaio.'] },
    ],
  },
  {
    id: 'rd_5_maritozzi', slug: 'rd_5_maritozzi', title: 'Maritozzi', subtitle: 'Soffici, Dorati e Irresistibili', categoryId, categoryLabel: 'Dolci', categoryIcon,
    summary: 'Soffici come cuscini, dorati in superficie e con una mollica leggera: perfetti da gustare da soli o da farcire.',
    intro: 'Soffici come cuscini, dorati in superficie, con quella mollica leggera e profumata che si riconosce al primo morso. I maritozzi sono uno dei grandi lievitati della tradizione italiana: nati come pane dolce del mattino, oggi sono protagonisti di colazioni e merende. Questa ricetta dà un impasto versatile, perfetto da gustare da soli o da farcire con panna montata, crema al latte o marmellata.',
    preparationIntro: 'Il riposo in frigorifero rende l’impasto più maneggevole, mentre la seconda lievitazione regala maritozzi gonfi e leggeri. Il latte deve essere tiepido: se è caldo, compromette il lievito.',
    badges: [{ label: 'Dolci', tone: 'category' }, { label: '~20 maritozzi', tone: 'time' }, { label: 'Media', tone: 'difficulty' }],
    info: info([['Preparazione', '20 min', ICONS.clock], ['Riposo in frigo', '30 min', ICONS.snowflake], ['Lievitazione', '1 h 30 min', 'fa-solid fa-hourglass-half'], ['Cottura', '10 min a 180°', ICONS.cooking], ['Resa', '~20 maritozzi', ICONS.bread], ['Occasione', 'Colazione e merenda', ICONS.heart]]),
    ingredients: ingredients([['Per l’impasto', [['m1', '1 kg', 'Farina 00'], ['m2', '500 ml', 'Latte intero (tiepido)'], ['m3', '2 cubetti', 'Lievito di birra fresco (50 g totali)'], ['m4', '1 bicchiere', 'Olio di semi (circa 100 ml)'], ['m5', '2', 'Tuorli d’uovo'], ['m6', '6 cucchiai', 'Zucchero semolato']]], ['Per spennellare', [['m7', '1', 'Uovo intero']]]]),
    notes: ['Il riposo in frigorifero è il passaggio che distingue questa ricetta: non saltarlo. Il latte deve essere tiepido, non caldo, circa 35–38°C.', 'Dieci minuti a 180° bastano. Appena dorati sono pronti; lasciandoli troppo diventano secchi. Farcisci sempre al momento di servire.'],
    sections: [
      { title: 'Il Lievito e l’Impasto', steps: ['Scalda il latte fino a 35–38°C. Sbriciola il lievito nel latte, aggiungi un cucchiaino di zucchero e lascia riposare 5–10 minuti, finché compare una leggera schiuma.', 'Versa la farina a fontana. Al centro aggiungi tuorli, zucchero restante e olio; unisci il latte con il lievito e incorpora la farina dall’interno verso l’esterno.', 'Lavora l’impasto a mano per 8–10 minuti, fino a ottenere un panetto liscio, morbido ed elastico.'] },
      { title: 'Riposo in Frigorifero', steps: ['Forma una palla, avvolgila nella pellicola e riponila in frigorifero per 30 minuti. Il freddo blocca temporaneamente il lievito, rende l’impasto compatto e sviluppa gli aromi.'] },
      { title: 'Formatura e Seconda Lievitazione', steps: ['Dividi l’impasto in porzioni da 50–60 g. Forma ogni pezzo a mano fino a ottenere un panino ovale e liscio.', 'Disponi i maritozzi su teglie rivestite di carta forno, copri e lascia lievitare in un posto caldo per 1–1,5 ore, fino quasi al raddoppio.'] },
      { title: 'Cottura e Finitura', steps: ['Preriscalda il forno statico a 180°C. Spennella la superficie con uovo sbattuto o tuorlo allungato con latte.', 'Cuoci per 10 minuti nella parte centrale del forno. Raffredda su una griglia, incidi longitudinalmente e farcisci con panna montata o crema al latte.'] },
    ],
  },
  {
    id: 'rd_6_rotolo-nutella', slug: 'rd_6_rotolo-nutella', title: 'Rotolo alla Nutella', subtitle: 'Soffice, Goloso, Impossibile Resistere', categoryId, categoryLabel: 'Dolci', categoryIcon,
    summary: 'Un pan di spagna soffice e sottile, arrotolato ancora caldo, farcito con uno strato generoso di Nutella e riavvolto in un cilindro perfetto.',
    intro: 'Un pan di spagna soffice e sottile come un velo, arrotolato ancora caldo su sé stesso, poi farcito con uno strato generoso di Nutella e riavvolto in un cilindro perfetto. Spolverato di zucchero a velo, è uno di quei dolci che sembrano elaborati ma si preparano in meno di un’ora — e che spariscono dal piatto ancora più in fretta.',
    preparationIntro: 'Il passaggio più delicato è l’arrotolamento a caldo: il biscuit deve essere flessibile e prendere la forma senza spaccarsi. Dopo il raffreddamento, la farcitura e un breve riposo completano il dolce.',
    badges: [{ label: 'Dolci', tone: 'category' }, { label: '8–10 fette', tone: 'time' }, { label: 'Facile', tone: 'difficulty' }],
    info: info([['Preparazione', '25 min', ICONS.clock], ['Cottura', '10 min a 170°', ICONS.cooking], ['Riposo', '10 min', ICONS.snowflake], ['Porzioni', '8–10 fette', ICONS.users], ['Difficoltà', 'Facile', ICONS.difficulty], ['Occasione', 'Merenda e dessert', ICONS.heart]]),
    ingredients: ingredients([['Per il biscuit', [['rn1', '4', 'Uova (a temperatura ambiente, separate)'], ['rn2', '80 g', 'Zucchero semolato'], ['rn3', '50 ml', 'Olio di semi'], ['rn4', '50 ml', 'Latte intero'], ['rn5', '70 g', 'Farina 00'], ['rn6', 'q.b.', 'Estratto di vaniglia']]], ['Per la farcitura', [['rn7', '200–250 g', 'Nutella (a temperatura ambiente)']]], ['Per decorare', [['rn8', 'q.b.', 'Zucchero a velo']]]]),
    notes: ['Arrotolalo subito, ancora caldo. Se aspetti che si raffreddi, si romperà. La Nutella si stende meglio a temperatura ambiente.', 'Lo zucchero a velo va aggiunto solo prima di servire. Il rotolo avanzato si conserva in frigorifero per 2–3 giorni.'],
    sections: [
      { title: 'La Base: Tuorli e Composto', steps: ['Preriscalda il forno a 170°C statico. Separa tuorli e albumi. Lavora i tuorli con lo zucchero per 3–4 minuti, fino a ottenere un composto chiaro, gonfio e spumoso.', 'Aggiungi l’estratto di vaniglia, poi incorpora olio a filo, latte e farina setacciata in due riprese, senza lavorare eccessivamente.'] },
      { title: 'Albumi a Neve e Cottura', steps: ['Monta gli albumi a neve ferma con fruste pulite. Incorporali al composto in due o tre riprese, dal basso verso l’alto.', 'Rivesti una teglia da circa 30×40 cm, versa il composto e stendilo in uno strato uniforme. Cuoci per 10 minuti: il biscuit deve restare elastico.'] },
      { title: 'L’Arrotolamento a Caldo', steps: ['Appena sfornato, capovolgi il biscuit su un canovaccio spolverato con zucchero a velo e rimuovi delicatamente la carta forno.', 'Arrotola il biscuit insieme al canovaccio partendo dal lato corto. Stringi leggermente e lascia raffreddare completamente in questa forma per 10–15 minuti.'] },
      { title: 'Farcitura, Chiusura e Decorazione', steps: ['Srotola delicatamente il biscuit raffreddato. Distribuisci la Nutella lasciando libero un margine di 1–2 cm sul lato più lontano.', 'Arrotola di nuovo senza canovaccio, avvolgi nella pellicola e riponi in frigorifero per almeno 30 minuti. Prima di servire, spolvera con zucchero a velo e taglia a fette.'] },
    ],
  },
]

export const dolci: Category = {
  id: categoryId, label: 'Dolci', pageTitle: 'Dolci', icon: categoryIcon, image: '/img_home/dolci.jpg', status: 'active', count: dolciRecipes.length,
  description: 'Dolci di casa, lievitati e creme da preparare con calma e condividere.',
  recipes: dolciRecipes.map(toCategoryRecipe),
}
