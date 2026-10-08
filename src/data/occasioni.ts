import { ICONS } from '../constants/icons'
import { ingredients, info, toCategoryRecipe } from './helpers'
import type { Category, Recipe } from './types'

export const occasioniRecipes: Recipe[] = [
  {
    id: 'ro_1_pizza-pasqua', slug: 'ro_1_pizza-pasqua', title: 'Pizza di Pasqua', subtitle: 'Il Profumo della Settimana Santa', categoryId: 'ro_0_occasioni', categoryLabel: 'Occasioni Speciali', categoryIcon: ICONS.occasion,
    summary: 'Un pane dolce lievitato, soffice dentro e dorato fuori, profumato di agrumi, cannella, maraschino e rum.',
    intro: 'La pizza di Pasqua abruzzese non è una pizza e non è una torta: è qualcosa di unico — un pane dolce lievitato, soffice dentro e dorato fuori, profumato di agrumi, cannella, maraschino e rum. Si prepara il Giovedì o il Venerdì Santo, si mangia a colazione la mattina di Pasqua. In ogni casa abruzzese il profumo che esce dal forno è lo stesso da generazioni.',
    preparationIntro: 'È una preparazione ricca e paziente: il latte con il lievito, gli aromi, l’impasto energico e una lunga lievitazione devono procedere senza fretta. Il forno statico e il raffreddamento completo sono essenziali.',
    badges: [{ label: 'Occasioni Speciali', tone: 'category' }, { label: '~3 panetti', tone: 'time' }, { label: 'Difficile', tone: 'difficulty' }],
    info: info([['Preparazione', '40 min', ICONS.clock], ['Lievitazione', '3–4 h', 'fa-solid fa-hourglass-half'], ['Cottura', '40 min a 170°', ICONS.cooking], ['Resa', '~3 panetti da 1,2 kg', ICONS.bread], ['Difficoltà', 'Difficile', ICONS.difficulty], ['Occasione', 'Pasqua', ICONS.egg]]),
    ingredients: ingredients([
      ['Liquidi e grassi', [['pp1', '5', 'Uova fresche (a temperatura ambiente)'], ['pp2', '170 ml', 'Latte intero tiepido'], ['pp3', '170 ml', 'Olio di semi oppure margarina sciolta']]],
      ['Zucchero e lievito', [['pp4', '250 g', 'Zucchero semolato'], ['pp5', '½ cubetto', 'Lievito di birra fresco (12–13 g)']]],
      ['Aromi e liquori', [['pp6', 'q.b.', 'Cannella in polvere'], ['pp7', '1', 'Limone — buccia grattugiata'], ['pp8', '2', 'Arance — buccia grattugiata e succo'], ['pp9', 'q.b.', 'Maraschino'], ['pp10', 'q.b.', 'Rum']]],
      ['Farina', [['pp11', '~1,5 kg', 'Farina 00']]],
    ]),
    notes: ['Il latte deve essere tiepido, non caldo: 35–38°C. La farina va aggiunta gradualmente; una pizza con troppa farina viene secca.', 'I liquori danno profondità e aiutano a conservare la morbidezza. Non aprire il forno durante i primi 30 minuti.'],
    sections: [
      { title: 'Attivare il Lievito', steps: ['Scalda il latte fino a 35–38°C. Sbriciola il lievito nel latte, aggiungi un cucchiaino di zucchero e lascia riposare 10 minuti in un posto caldo, finché si forma una schiuma.'] },
      { title: 'Il Composto Liquido', steps: ['In una ciotola molto capiente sbatti le uova con il restante zucchero fino a ottenere un composto chiaro e leggermente spumoso.', 'Aggiungi olio o margarina sciolta e raffreddata, succo e bucce degli agrumi, cannella, maraschino e rum. Unisci il latte con il lievito e mescola bene.'] },
      { title: 'L’Impasto', steps: ['Incorpora la farina poco alla volta, prima con un cucchiaio e poi a mano, fino ad ottenere un impasto morbido, elastico e leggermente appiccicoso.', 'Lavora energicamente per almeno 10 minuti: spingi con il palmo, piega e ruota. L’impasto è pronto quando è liscio e torna indietro se lo schiacci.'] },
      { title: 'La Lievitazione', steps: ['Dividi l’impasto in due panetti da circa 1,2 kg e sistemali negli stampi ben imburrati e infarinati. Riempili per circa metà.', 'Copri gli stampi e lascia lievitare in un posto caldo per 3–4 ore, fino a quando l’impasto raddoppia e raggiunge quasi il bordo.'] },
      { title: 'Cottura e Raffreddamento', steps: ['Preriscalda il forno statico a 170°C. Cuoci per 40 minuti senza aprire il forno nei primi 30. Se la superficie scurisce troppo, coprila con alluminio.', 'Lascia raffreddare 10 minuti nello stampo, poi estrai e raffredda su una griglia. Non tagliare finché è completamente fredda.'] },
    ],
  },
]

export const occasioni: Category = {
  id: 'ro_0_occasioni', label: 'Occasioni Speciali', pageTitle: 'Occasioni Speciali', icon: ICONS.occasion, image: '/img_home/occasioni.jpg', status: 'active', count: occasioniRecipes.length,
  description: 'Le ricette delle feste, dei pranzi in famiglia e dei giorni da ricordare.',
  recipes: [
    ...occasioniRecipes.map(toCategoryRecipe),
    { title: 'Lasagne al Forno della Nonna', subtitle: 'Alta, Stratificata, Indimenticabile', description: 'Sfoglia fresca tirata a mano, ragù abbondante, besciamella vellutata e tanto parmigiano.' },
    { title: "Spaghetti all'Amatriciana", subtitle: 'La Ricetta Tradizionale', description: 'Guanciale croccante, pomodoro San Marzano, peperoncino e pecorino romano.' },
    { title: 'Minestrone di Verdure', subtitle: 'Quattro Stagioni nel Piatto', description: 'Verdure di stagione, legumi, patate e un filo d’olio extravergine a crudo.' },
  ],
}
