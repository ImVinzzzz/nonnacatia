import { ICONS } from '../constants/icons'
import { ingredients, info, toCategoryRecipe } from './helpers'
import type { Category, Recipe } from './types'

export const primiRecipes: Recipe[] = [
  {
    id: 'rp_1_tagliatelle', slug: 'rp_1_tagliatelle', title: 'Tagliatelle al Ragù', subtitle: 'Il Piatto della Domenica', categoryId: 'rp_0_primi', categoryLabel: 'Primi Piatti', categoryIcon: ICONS.bowl,
    summary: 'Un ragù lento e profumato, cotto per ore a fuoco basso con carne mista, odori di campagna e un bicchiere di vino rosso.',
    intro: 'Non esiste domenica senza il profumo del ragù che sobbolle sul fuoco dal mattino presto. Questa è la ricetta di famiglia, quella che Nonna Luisa preparava ogni settimana con la stessa cura e lo stesso amore. Il segreto? Il tempo. Non si può avere fretta con un buon ragù.',
    preparationIntro: 'Questa ricetta richiede pazienza, ma ogni minuto è ripagato dal primo assaggio. Inizia dal ragù: più a lungo cuoce, più diventa ricco e saporito. La pasta fresca si può preparare mentre il sugo sobbolle.',
    image: '/img_ricette/rp_1_tagliatelle-ragu.webp',
    badges: [{ label: 'Primi Piatti', tone: 'category' }, { label: '3 h 30 min totali', tone: 'time' }, { label: 'Media', tone: 'difficulty' }],
    info: info([['Preparazione', '40 min', ICONS.clock], ['Cottura', '2 h 50 min', ICONS.cooking], ['Porzioni', '4 persone', ICONS.users], ['Difficoltà', 'Media', ICONS.difficulty], ['Stagione', 'Tutto l’anno', ICONS.leaf], ['Occasione', 'Domenica', ICONS.heart]]),
    ingredients: ingredients([
      ['Per il Ragù', [['i1', '300 g', 'Carne di manzo macinata'], ['i2', '150 g', 'Carne di maiale macinata'], ['i3', '1 fetta', 'Pancetta tesa (60 g)'], ['i4', '400 g', 'Pomodori pelati San Marzano'], ['i5', '1 bicchiere', 'Vino rosso corposo'], ['i6', '1 grande', 'Cipolla dorata'], ['i7', '2', 'Carote'], ['i8', '2 coste', 'Sedano'], ['i9', '2 cucchiai', 'Concentrato di pomodoro'], ['i10', 'q.b.', 'Olio EVO, sale, pepe'], ['i11', '1 foglia', 'Alloro']]],
      ['Per le Tagliatelle', [['i12', '400 g', 'Farina 00'], ['i13', '4', 'Uova grandi (a temperatura ambiente)'], ['i14', '1 pizzico', 'Sale fino']]],
      ['Per servire', [['i15', 'abbondante', 'Parmigiano Reggiano 24 mesi']]],
    ]),
    notes: ['Il brodo è tutto. Se hai tempo, fai un brodo di carne la sera prima: il ragù ne guadagna moltissimo.', 'Le tagliatelle devono essere larghe 8 mm — non meno, non più. Non avere fretta: un ragù di due ore e mezza è buono, uno di quattro ore è sublime. Il giorno dopo è ancora più buono. Fanne sempre il doppio.'],
    sections: [
      { title: 'Il Soffritto e la Carne', steps: [
        'Trita finemente la cipolla, le carote e il sedano (il classico soffritto italiano). Metti tutto in una casseruola capiente con un filo generoso d’olio extravergine e fai soffriggere a fuoco medio-basso per almeno 15 minuti, mescolando spesso, finché le verdure non sono completamente appassite e quasi trasparenti.',
        'Aggiungi la pancetta tritata e falla rosolare per qualche minuto finché non comincia a diventare croccante e rilascia il suo grasso profumato.',
        'Alza la fiamma e unisci la carne macinata mista. Rosolala bene, spezzettandola con il cucchiaio di legno, finché non è uniformemente brunita su tutti i lati. Questo passaggio è fondamentale: la rosolatura crea sapore. Non affrettare.',
      ] },
      { title: 'La Cottura Lenta del Ragù', steps: [
        'Versa il vino rosso sulla carne rosolata e alza la fiamma: lascia evaporare completamente l’alcol mescolando, circa 3–4 minuti. Sentirai il profumo cambiare quando l’alcol è scomparso.',
        'Aggiungi il concentrato di pomodoro, mescola bene e lascia tostare per un paio di minuti: diventerà di un bel colore scuro intenso. Poi unisci i pomodori pelati spezzandoli con le mani direttamente nel tegame.',
        'Aggiusta di sale e pepe, unisci la foglia di alloro e abbassa la fiamma al minimo. Copri con un coperchio lasciato leggermente aperto e lascia cuocere per almeno 2 ore e mezza, mescolando ogni 20–30 minuti. Se si asciuga troppo, aggiungi un mestolo di brodo caldo o acqua calda.',
        'Il ragù è pronto quando è diventato denso, scuro, profumato e la carne quasi si disfa. Rimuovi la foglia di alloro, assaggia e aggiusta di sale. Più lo lasci cuocere, meglio è: nonna arrivava anche a quattro ore.',
      ] },
      { title: 'Le Tagliatelle Fresche', steps: [
        'Versa la farina a fontana sul piano di lavoro infarinato. Rompi le uova al centro, aggiungi il pizzico di sale. Sbatti leggermente le uova con una forchetta, poi inizia ad incorporare la farina dall’interno verso l’esterno.',
        'Quando l’impasto è abbastanza compatto per essere lavorato a mano, inizia a impastare energicamente per almeno 10 minuti: spingi, piega, ruota. L’impasto deve diventare liscio, omogeneo, elastico e non appiccicoso. Forma una palla, avvolgila nella pellicola e lasciala riposare 30 minuti a temperatura ambiente.',
        'Dividi l’impasto in 4 parti. Con il mattarello o la macchina per la pasta, stendi ogni parte fino a ottenere una sfoglia sottile, circa 2 mm. Spolvera abbondantemente di farina, arrotola la sfoglia su sé stessa e taglia delle strisce di circa 8 mm. Srotola e distendi le tagliatelle su un canovaccio infarinato.',
      ] },
      { title: 'Cottura e Impiattamento', steps: [
        'Porta ad ebollizione una grande pentola di acqua abbondante. Sala generosamente: l’acqua deve essere sapida come il mare. Tuffa le tagliatelle e cuocile per 2–3 minuti; la pasta fresca cuoce in fretta. Assaggia: devono essere al dente, con ancora un leggero accenno di resistenza al morso.',
        'Scola le tagliatelle tenendo da parte un mestolo di acqua di cottura. Versale direttamente nel tegame del ragù, a fuoco vivo, e mescola energicamente aggiungendo un goccio di acqua di cottura se necessario per mantecare: il sugo deve avvolgere ogni singola tagliatella.',
        'Servi subito nei piatti fondi, con una generosa grattata di Parmigiano Reggiano. A tavola, niente fretta: questo piatto merita di essere mangiato lentamente, in compagnia, con un buon bicchiere di Sangiovese. Buon appetito!',
      ] },
    ],
  },
]

export const primi: Category = {
  id: 'rp_0_primi', label: 'Primi', pageTitle: 'Primi Piatti', icon: ICONS.bowl, image: '/img_home/primi.jpg', status: 'active', count: 1,
  description: 'Piatti della domenica, ragù lenti e profumi che riempiono la cucina.',
  recipes: [
    ...primiRecipes.map(toCategoryRecipe),
    { title: 'Pasta e Fagioli', subtitle: 'Il Piatto Povero più Rico del Mondo', description: 'Cremosa, densa, con pasta spezzata e fagioli borlotti cotti con rosmarino e aglio.' },
    { title: 'Risotto allo Zafferano', subtitle: 'Alla Milanese, come si deve', description: 'Oro nel piatto, mantecato con burro e parmigiano, morbido e lucente.' },
    { title: 'Lasagne al Forno della Nonna', subtitle: 'Alta, Stratificata, Indimenticabile', description: 'Sfoglia fresca, ragù abbondante, besciamella vellutata e tanto parmigiano.' },
    { title: "Spaghetti all'Amatriciana", subtitle: 'La Ricetta Tradizionale', description: 'Guanciale croccante, pomodoro San Marzano, peperoncino e pecorino romano.' },
    { title: 'Minestrone di Verdure', subtitle: 'Quattro Stagioni nel Piatto', description: 'Verdure di stagione, legumi, patate e un filo d’olio extravergine a crudo.' },
  ],
}
