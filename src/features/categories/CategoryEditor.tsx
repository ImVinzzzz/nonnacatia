import { useMemo, useState, type ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { ICONS } from '../../constants/icons'
import type { CategoryStatus } from '../../data/types'

type CategoryRecipeDraft = { id: string; title: string; subtitle: string; description: string }
type CategoryDraft = {
  id: string
  exportName: string
  fileName: string
  label: string
  pageTitle: string
  icon: string
  image: string
  status: CategoryStatus
  count: number
  description: string
  recipes: CategoryRecipeDraft[]
}

const inputClass = 'w-full rounded-lg border border-border-light bg-cream px-3 py-2.5 text-sm text-ink outline-none transition placeholder:text-ink-muted/60 focus:border-bordeaux focus:ring-2 focus:ring-bordeaux/10'
const smallButtonClass = 'inline-flex items-center gap-2 rounded-lg border border-border-light bg-white px-3 py-2 text-xs font-semibold text-ink-light transition hover:border-bordeaux hover:text-bordeaux'

const iconOptions = [
  { key: 'bowl', label: 'Primi piatti', value: ICONS.bowl },
  { key: 'dessert', label: 'Dolci', value: ICONS.dessert },
  { key: 'occasion', label: 'Occasioni speciali', value: ICONS.occasion },
  { key: 'cheese', label: 'Antipasti', value: ICONS.cheese },
  { key: 'meat', label: 'Secondi', value: ICONS.meat },
  { key: 'jar', label: 'Conserve', value: ICONS.jar },
  { key: 'pizza', label: 'Pizza e focacce', value: ICONS.pizza },
  { key: 'leaf', label: 'Verdure e stagioni', value: ICONS.leaf },
  { key: 'cake', label: 'Torte', value: ICONS.cake },
]

const slugify = (value: string) => value
  .toLowerCase()
  .normalize('NFD')
  .replace(/[\u0300-\u036f]/g, '')
  .replace(/[^a-z0-9]+/g, '-')
  .replace(/^-+|-+$/g, '')

const toExportName = (value: string) => {
  const words = slugify(value).split('-').filter(Boolean)
  return words.length ? words.map((word, index) => index === 0 ? word : `${word.charAt(0).toUpperCase()}${word.slice(1)}`).join('') : 'nuovaCategoria'
}

const createInitialDraft = (): CategoryDraft => ({
  id: 'nuova-categoria',
  exportName: 'nuovaCategoria',
  fileName: 'nuova-categoria.ts',
  label: '',
  pageTitle: '',
  icon: ICONS.leaf,
  image: '',
  status: 'hidden',
  count: 0,
  description: '',
  recipes: [],
})

const quote = (value: string) => `'${value.replace(/\\/g, '\\\\').replace(/'/g, "\\'").replace(/\r?\n/g, '\\n')}'`

function Field({ label, hint, children, className = '' }: { label: string; hint?: string; children: ReactNode; className?: string }) {
  return <label className={`block ${className}`}><span className="mb-1.5 block font-display text-sm font-semibold text-ink">{label}</span>{children}{hint && <span className="mt-1 block text-xs leading-5 text-ink-muted">{hint}</span>}</label>
}

function EditorCard({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <section className={`rounded-2xl border border-border-light bg-white p-5 shadow-sm sm:p-7 ${className}`}>{children}</section>
}

function SectionHeading({ icon, eyebrow, title, children }: { icon: string; eyebrow: string; title: string; children?: ReactNode }) {
  return <div className="mb-5 flex flex-wrap items-start justify-between gap-3"><div><p className="font-script text-lg text-terracotta">{eyebrow}</p><h2 className="flex items-center gap-2 font-display text-2xl font-semibold text-ink"><i className={`${icon} text-base text-bordeaux`} aria-hidden="true" />{title}</h2></div>{children}</div>
}

export default function CategoryEditor() {
  const [draft, setDraft] = useState<CategoryDraft>(createInitialDraft)
  const [copied, setCopied] = useState(false)
  const code = useMemo(() => buildCategoryCode(draft), [draft])

  const updateDraft = <K extends keyof CategoryDraft>(field: K, value: CategoryDraft[K]) => setDraft((current) => ({ ...current, [field]: value }))

  const updateLabel = (label: string) => setDraft((current) => {
    const shouldUpdateIdentifiers = current.id === 'nuova-categoria' && current.exportName === 'nuovaCategoria'
    const base = slugify(label) || 'nuova-categoria'
    return {
      ...current,
      label,
      ...(shouldUpdateIdentifiers ? { id: base, exportName: toExportName(label), fileName: `${base}.ts` } : {}),
    }
  })

  const updateRecipe = (index: number, field: keyof CategoryRecipeDraft, value: string) => setDraft((current) => ({
    ...current,
    recipes: current.recipes.map((recipe, recipeIndex) => recipeIndex === index ? { ...recipe, [field]: value } : recipe),
  }))

  const copyCode = async () => {
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(code)
      } else {
        const helper = document.createElement('textarea')
        helper.value = code
        helper.style.position = 'fixed'
        helper.style.opacity = '0'
        document.body.appendChild(helper)
        helper.select()
        document.execCommand('copy')
        helper.remove()
      }
      setCopied(true)
      window.setTimeout(() => setCopied(false), 2200)
    } catch {
      setCopied(false)
    }
  }

  return <>
    <section className="relative overflow-hidden border-b border-border-light bg-white py-12 before:absolute before:inset-x-0 before:top-0 before:h-1 before:bg-gradient-to-r before:from-bordeaux before:via-terracotta before:to-gold">
      <div className="mx-auto w-full max-w-[1200px] px-4 sm:px-8">
        <div className="mb-3 flex flex-wrap items-center gap-2 text-xs text-ink-muted"><Link to="/" className="text-terracotta hover:text-bordeaux hover:underline">Home</Link><i className="fa-solid fa-chevron-right text-[8px]" aria-hidden="true" /><span>Strumenti</span><i className="fa-solid fa-chevron-right text-[8px]" aria-hidden="true" /><span>Editor categorie</span></div>
        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end"><div><p className="font-script text-2xl text-terracotta">Dai una casa alle nuove ricette</p><h1 className="font-display text-5xl font-bold leading-none text-ink sm:text-6xl">Editor categorie</h1><p className="mt-4 max-w-2xl text-sm leading-7 text-ink-muted">Prepara una nuova sezione del ricettario, scegli l’icona e crea le eventuali card di ricette in arrivo.</p></div><button type="button" onClick={() => setDraft(createInitialDraft())} className={smallButtonClass}><i className="fa-solid fa-rotate-left" aria-hidden="true" />Ripristina modulo</button></div>
      </div>
    </section>

    <section className="bg-cream py-10 sm:py-14">
      <div className="mx-auto grid w-full max-w-[1200px] items-start gap-8 px-4 sm:px-8 lg:grid-cols-[minmax(0,1.2fr)_minmax(360px,.8fr)]">
        <div className="space-y-8">
          <EditorCard>
            <SectionHeading icon="fa-solid fa-folder-plus" eyebrow="La nuova sezione" title="Informazioni di base" />
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Nome categoria" hint="Il nome visibile nei menu e nella pagina categoria."><input className={inputClass} value={draft.label} onChange={(event) => updateLabel(event.target.value)} placeholder="Es. Colazioni" /></Field>
              <Field label="Titolo della pagina" hint="Può essere più descrittivo del nome breve; se vuoto, userà il nome categoria."><input className={inputClass} value={draft.pageTitle} onChange={(event) => updateDraft('pageTitle', event.target.value)} placeholder="Es. Colazioni e merende" /></Field>
              <Field label="ID categoria" hint="Deve essere unico e senza spazi; sarà usato nell’URL /category/ID."><input className={inputClass} value={draft.id} onChange={(event) => updateDraft('id', event.target.value)} placeholder="colazioni" /></Field>
              <Field label="Nome export" hint="Nome della costante esportata dal file TypeScript."><input className={inputClass} value={draft.exportName} onChange={(event) => updateDraft('exportName', event.target.value)} placeholder="colazioni" /></Field>
              <Field label="Nome file" hint="Salvalo dentro src/data/."><input className={inputClass} value={draft.fileName} onChange={(event) => updateDraft('fileName', event.target.value)} placeholder="colazioni.ts" /></Field>
              <Field label="Icona categoria"><select className={inputClass} value={draft.icon} onChange={(event) => updateDraft('icon', event.target.value)}>{iconOptions.map((icon) => <option key={icon.key} value={icon.value}>{icon.label} — {icon.value}</option>)}</select></Field>
              <Field label="Immagine (facoltativa)" hint="Percorso pubblico, ad esempio /img_home/colazioni.jpg"><input className={inputClass} value={draft.image} onChange={(event) => updateDraft('image', event.target.value)} placeholder="/img_home/colazioni.jpg" /></Field>
              <Field label="Ricette già disponibili" hint="Numero mostrato nell’intestazione della categoria."><input className={inputClass} type="number" min="0" value={draft.count} onChange={(event) => updateDraft('count', Math.max(0, Number(event.target.value) || 0))} /></Field>
              <Field label="Stato categoria" hint="Scegli se mostrarla, segnalarla come futura o tenerla completamente nascosta."><select className={inputClass} value={draft.status} onChange={(event) => updateDraft('status', event.target.value as CategoryStatus)}><option value="active">Attiva — visibile e navigabile</option><option value="upcoming">In arrivo — visibile senza ricette</option><option value="hidden">Nascosta — non visibile nel sito</option></select></Field>
              <Field label="Descrizione" hint="Testo introduttivo mostrato nella pagina categoria." className="sm:col-span-2"><textarea className={`${inputClass} min-h-28 resize-y`} value={draft.description} onChange={(event) => updateDraft('description', event.target.value)} placeholder="Racconta che tipo di ricette raccoglierà questa sezione." /></Field>
            </div>
          </EditorCard>

          <EditorCard>
            <SectionHeading icon="fa-solid fa-list" eyebrow="Le prime ricette" title="Card della categoria" children={<button type="button" onClick={() => updateDraft('recipes', [...draft.recipes, { id: '', title: '', subtitle: '', description: '' }])} className={smallButtonClass}><i className="fa-solid fa-plus" aria-hidden="true" />Aggiungi card</button>} />
            <p className="mb-5 text-sm leading-6 text-ink-muted">Puoi aggiungere card complete oppure lasciarle senza ID: in quel caso appariranno come “In arrivo” finché non sarà pronta la ricetta.</p>
            <div className="space-y-5">{draft.recipes.length === 0 ? <div className="rounded-xl border border-dashed border-border bg-cream p-5 text-center text-sm italic text-ink-muted">Nessuna card aggiunta. La categoria partirà vuota.</div> : draft.recipes.map((recipe, index) => <div key={`category-recipe-${index}`} className="rounded-xl border border-border-light bg-cream p-4"><div className="mb-4 flex items-center justify-between gap-3"><h3 className="font-display text-lg font-semibold text-ink">Card {index + 1}</h3><button type="button" aria-label="Rimuovi card categoria" onClick={() => updateDraft('recipes', draft.recipes.filter((_, recipeIndex) => recipeIndex !== index))} className="flex h-9 items-center justify-center rounded-lg px-3 text-ink-muted transition hover:bg-bordeaux/10 hover:text-bordeaux"><i className="fa-solid fa-trash" aria-hidden="true" /></button></div><div className="grid gap-4 sm:grid-cols-2"><Field label="ID ricetta (facoltativo)" hint="Inseriscilo quando la ricetta ha una pagina attiva."><input className={inputClass} value={recipe.id} onChange={(event) => updateRecipe(index, 'id', event.target.value)} placeholder="rd_7_colazione" /></Field><Field label="Titolo"><input className={inputClass} value={recipe.title} onChange={(event) => updateRecipe(index, 'title', event.target.value)} placeholder="Es. Ciambella soffice" /></Field><Field label="Sottotitolo"><input className={inputClass} value={recipe.subtitle} onChange={(event) => updateRecipe(index, 'subtitle', event.target.value)} placeholder="Es. La colazione di casa" /></Field><Field label="Descrizione" className="sm:col-span-2"><textarea className={`${inputClass} min-h-24 resize-y`} value={recipe.description} onChange={(event) => updateRecipe(index, 'description', event.target.value)} placeholder="Una breve descrizione della card." /></Field></div></div>)}</div>
          </EditorCard>
        </div>

        <aside className="space-y-6 lg:sticky lg:top-24">
          <EditorCard className="overflow-hidden border-bordeaux/20 p-0">
            <div className="flex flex-wrap items-center justify-between gap-3 bg-bordeaux px-5 py-4 text-white sm:px-6"><div><p className="font-script text-lg text-gold">Pronto da incollare</p><h2 className="font-display text-2xl font-semibold">Codice della categoria</h2></div><button type="button" onClick={copyCode} className="inline-flex items-center gap-2 rounded-lg bg-white/15 px-3 py-2 text-xs font-semibold text-white transition hover:bg-white/25"><i className={`fa-solid ${copied ? 'fa-check' : 'fa-copy'}`} aria-hidden="true" />{copied ? 'Copiato!' : 'Copia codice'}</button></div>
            <div className="p-4 sm:p-5"><textarea aria-label="Codice categoria generato" readOnly value={code} className="min-h-[520px] w-full resize-y rounded-xl border border-border-light bg-ink p-4 font-mono text-xs leading-6 text-cream outline-none focus:ring-2 focus:ring-gold/40" /><p className="mt-3 text-xs leading-5 text-ink-muted"><i className="fa-solid fa-circle-info mr-1 text-terracotta" aria-hidden="true" />Il codice riflette in tempo reale le informazioni compilate.</p></div>
          </EditorCard>

          <EditorCard>
            <SectionHeading icon="fa-solid fa-circle-check" eyebrow="Dopo la copia" title="Come pubblicare la categoria" />
            <ol className="space-y-4 text-sm leading-6 text-ink-light">
              <li className="flex gap-3"><span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-bordeaux font-display font-bold text-white">1</span><span>Crea il file <code className="rounded bg-cream-mid px-1.5 py-0.5 text-xs text-bordeaux">src/data/{draft.fileName || 'nuova-categoria.ts'}</code> e incolla il codice generato.</span></li>
              <li className="flex gap-3"><span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-bordeaux font-display font-bold text-white">2</span><span>In <code className="rounded bg-cream-mid px-1.5 py-0.5 text-xs text-bordeaux">src/data/ricette.ts</code>, importa <code className="rounded bg-cream-mid px-1.5 py-0.5 text-xs text-bordeaux">{draft.exportName || 'nuovaCategoria'}</code> e aggiungilo all’array <code className="rounded bg-cream-mid px-1.5 py-0.5 text-xs text-bordeaux">categories</code>.</span></li>
              <li className="flex gap-3"><span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-bordeaux font-display font-bold text-white">3</span><span>Se hai indicato un’immagine, copiala nel percorso corretto dentro <code className="rounded bg-cream-mid px-1.5 py-0.5 text-xs text-bordeaux">public/</code>.</span></li>
              <li className="flex gap-3"><span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-bordeaux font-display font-bold text-white">4</span><span>Controlla la pagina <code className="rounded bg-cream-mid px-1.5 py-0.5 text-xs text-bordeaux">/category/{draft.id || 'nuova-categoria'}</code> quando lo stato è “Attiva” o “In arrivo”; con “Nascosta” il percorso non è pubblico. Le nuove ricette complete si possono poi creare con l’editor ricette.</span></li>
            </ol>
            {draft.status === 'hidden' && <p className="mt-5 rounded-lg border border-terracotta/30 bg-terracotta/5 p-3 text-xs leading-5 text-ink-light"><i className="fa-solid fa-eye-slash mr-1 text-terracotta" aria-hidden="true" />La categoria è nascosta e non comparirà nel sito. Imposta lo stato su “In arrivo” per mostrarla senza ricette oppure su “Attiva” per renderla navigabile.</p>}
            {draft.status === 'upcoming' && <p className="mt-5 rounded-lg border border-terracotta/30 bg-terracotta/5 p-3 text-xs leading-5 text-ink-light"><i className="fa-solid fa-hourglass-half mr-1 text-terracotta" aria-hidden="true" />La categoria sarà visibile con il badge “In arrivo”, ma resterà non navigabile finché non sarà pronta.</p>}
          </EditorCard>
        </aside>
      </div>
    </section>
  </>
}

function buildCategoryCode(draft: CategoryDraft) {
  const id = draft.id.trim() || 'nuova-categoria'
  const exportName = draft.exportName.trim() || 'nuovaCategoria'
  const recipes = draft.recipes.filter((recipe) => recipe.id.trim() || recipe.title.trim() || recipe.subtitle.trim() || recipe.description.trim()).map((recipe) => `    {${recipe.id.trim() ? ` id: ${quote(recipe.id.trim())},` : ''} title: ${quote(recipe.title)}, subtitle: ${quote(recipe.subtitle)}, description: ${quote(recipe.description)} },`).join('\n')
  const optionalPageTitle = draft.pageTitle.trim() ? `\n  pageTitle: ${quote(draft.pageTitle.trim())},` : ''
  const optionalImage = draft.image.trim() ? `\n  image: ${quote(draft.image.trim())},` : ''

  return `import { ICONS } from '../constants/icons'\nimport type { Category } from './types'\n\nexport const ${exportName}: Category = {\n  id: ${quote(id)},\n  label: ${quote(draft.label)},${optionalPageTitle}\n  icon: ${iconOptions.find((icon) => icon.value === draft.icon)?.key ? `ICONS.${iconOptions.find((icon) => icon.value === draft.icon)?.key}` : quote(draft.icon)},${optionalImage}\n  status: '${draft.status}',\n  count: ${draft.count},\n  description: ${quote(draft.description)},\n  recipes: [${recipes ? `\n${recipes}\n  ` : ''}],\n}\n`
}
