import { useMemo, useState, type ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { categories } from '../../data/ricette'

type InfoDraft = { label: string; value: string; icon: string }
type IngredientDraft = { quantity: string; name: string }
type IngredientGroupDraft = { label: string; items: IngredientDraft[] }
type SectionDraft = { title: string; steps: string[] }
type RecipeDraft = {
  id: string
  slug: string
  title: string
  subtitle: string
  categoryId: string
  summary: string
  intro: string
  preparationIntro: string
  image: string
  timeBadge: string
  difficultyBadge: string
  info: InfoDraft[]
  ingredientGroups: IngredientGroupDraft[]
  notes: string[]
  sections: SectionDraft[]
}

const inputClass = 'w-full rounded-lg border border-border-light bg-cream px-3 py-2.5 text-sm text-ink outline-none transition placeholder:text-ink-muted/60 focus:border-bordeaux focus:ring-2 focus:ring-bordeaux/10'
const smallButtonClass = 'inline-flex items-center gap-2 rounded-lg border border-border-light bg-white px-3 py-2 text-xs font-semibold text-ink-light transition hover:border-bordeaux hover:text-bordeaux'
const difficultyOptions = ['Facilissima', 'Facile', 'Media', 'Difficile']

const slugify = (value: string) => value
  .toLowerCase()
  .normalize('NFD')
  .replace(/[\u0300-\u036f]/g, '')
  .replace(/[^a-z0-9]+/g, '-')
  .replace(/^-+|-+$/g, '')

const createInitialDraft = (): RecipeDraft => ({
  id: 'rd_nuova-ricetta',
  slug: 'rd_nuova-ricetta',
  title: '',
  subtitle: '',
  categoryId: 'rd_0_dolci',
  summary: '',
  intro: '',
  preparationIntro: '',
  image: '',
  timeBadge: '',
  difficultyBadge: 'Facile',
  info: [
    { label: 'Preparazione', value: '', icon: 'fa-regular fa-clock' },
    { label: 'Cottura', value: '', icon: 'fa-solid fa-fire-burner' },
    { label: 'Porzioni', value: '', icon: 'fa-solid fa-users' },
    { label: 'Difficoltà', value: 'Facile', icon: 'fa-solid fa-gauge-simple-high' },
  ],
  ingredientGroups: [{ label: 'Ingredienti', items: [{ quantity: '', name: '' }] }],
  notes: [''],
  sections: [{ title: 'Preparazione', steps: [''] }],
})

const quote = (value: string) => `'${value.replace(/\\/g, '\\\\').replace(/'/g, "\\'").replace(/\r?\n/g, '\\n')}'`

function Field({ label, hint, children, className = '' }: { label: string; hint?: string; children: ReactNode; className?: string }) {
  return <label className={`block ${className}`}><span className="mb-1.5 block font-display text-sm font-semibold text-ink">{label}</span>{children}{hint && <span className="mt-1 block text-xs leading-5 text-ink-muted">{hint}</span>}</label>
}

function SectionHeading({ icon, eyebrow, title, children }: { icon: string; eyebrow: string; title: string; children?: ReactNode }) {
  return <div className="mb-5 flex flex-wrap items-start justify-between gap-3"><div><p className="font-script text-lg text-terracotta">{eyebrow}</p><h2 className="flex items-center gap-2 font-display text-2xl font-semibold text-ink"><i className={`${icon} text-base text-bordeaux`} aria-hidden="true" />{title}</h2></div>{children}</div>
}

function EditorCard({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <section className={`rounded-2xl border border-border-light bg-white p-5 shadow-sm sm:p-7 ${className}`}>{children}</section>
}

export default function RecipeEditor() {
  const [draft, setDraft] = useState<RecipeDraft>(createInitialDraft)
  const [copied, setCopied] = useState(false)
  const selectedCategory = categories.find((category) => category.id === draft.categoryId) ?? categories[0]

  const code = useMemo(() => buildRecipeCode(draft, selectedCategory), [draft, selectedCategory])

  const updateDraft = <K extends keyof RecipeDraft>(field: K, value: RecipeDraft[K]) => setDraft((current) => ({ ...current, [field]: value }))

  const updateTitle = (title: string) => setDraft((current) => {
    const shouldUpdateIdentifiers = current.id === 'rd_nuova-ricetta' && current.slug === 'rd_nuova-ricetta'
    const base = slugify(title) || 'nuova-ricetta'
    return { ...current, title, ...(shouldUpdateIdentifiers ? { id: `rd_${base}`, slug: `rd_${base}` } : {}) }
  })

  const updateInfo = (index: number, field: keyof InfoDraft, value: string) => setDraft((current) => ({
    ...current,
    info: current.info.map((item, itemIndex) => itemIndex === index ? { ...item, [field]: value } : item),
  }))

  const updateGroup = (groupIndex: number, field: 'label', value: string) => setDraft((current) => ({
    ...current,
    ingredientGroups: current.ingredientGroups.map((group, index) => index === groupIndex ? { ...group, [field]: value } : group),
  }))

  const updateIngredient = (groupIndex: number, itemIndex: number, field: keyof IngredientDraft, value: string) => setDraft((current) => ({
    ...current,
    ingredientGroups: current.ingredientGroups.map((group, index) => index !== groupIndex ? group : {
      ...group,
      items: group.items.map((item, currentItemIndex) => currentItemIndex === itemIndex ? { ...item, [field]: value } : item),
    }),
  }))

  const updateNote = (index: number, value: string) => setDraft((current) => ({ ...current, notes: current.notes.map((note, noteIndex) => noteIndex === index ? value : note) }))

  const updateSection = (sectionIndex: number, field: 'title', value: string) => setDraft((current) => ({
    ...current,
    sections: current.sections.map((section, index) => index === sectionIndex ? { ...section, [field]: value } : section),
  }))

  const updateStep = (sectionIndex: number, stepIndex: number, value: string) => setDraft((current) => ({
    ...current,
    sections: current.sections.map((section, index) => index !== sectionIndex ? section : {
      ...section,
      steps: section.steps.map((step, currentStepIndex) => currentStepIndex === stepIndex ? value : step),
    }),
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

  const resetDraft = () => setDraft(createInitialDraft())

  return <>
    <section className="relative overflow-hidden border-b border-border-light bg-white py-12 before:absolute before:inset-x-0 before:top-0 before:h-1 before:bg-gradient-to-r before:from-bordeaux before:via-terracotta before:to-gold">
      <div className="mx-auto w-full max-w-[1200px] px-4 sm:px-8">
        <div className="mb-3 flex flex-wrap items-center gap-2 text-xs text-ink-muted"><Link to="/" className="text-terracotta hover:text-bordeaux hover:underline">Home</Link><i className="fa-solid fa-chevron-right text-[8px]" aria-hidden="true" /><span>Strumenti</span><i className="fa-solid fa-chevron-right text-[8px]" aria-hidden="true" /><span>Editor ricette</span></div>
        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end"><div><p className="font-script text-2xl text-terracotta">Dalla cucina al ricettario</p><h1 className="font-display text-5xl font-bold leading-none text-ink sm:text-6xl">Editor ricette</h1><p className="mt-4 max-w-2xl text-sm leading-7 text-ink-muted">Compila i campi, copia il codice generato e aggiungi la ricetta al sito in pochi passaggi.</p></div><button type="button" onClick={resetDraft} className={smallButtonClass}><i className="fa-solid fa-rotate-left" aria-hidden="true" />Ripristina modulo</button></div>
      </div>
    </section>

    <section className="bg-cream py-10 sm:py-14">
      <div className="mx-auto grid w-full max-w-[1200px] items-start gap-8 px-4 sm:px-8 lg:grid-cols-[minmax(0,1.2fr)_minmax(360px,.8fr)]">
        <div className="space-y-8">
          <EditorCard>
            <SectionHeading icon="fa-solid fa-pen-to-square" eyebrow="Il cuore della ricetta" title="Informazioni di base" />
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Titolo della ricetta" hint="Il nome che apparirà nelle card e nella pagina della ricetta."><input className={inputClass} value={draft.title} onChange={(event) => updateTitle(event.target.value)} placeholder="Es. Ciambella della domenica" /></Field>
              <Field label="Sottotitolo" hint="Una frase breve, evocativa, mostrata sotto al titolo."><input className={inputClass} value={draft.subtitle} onChange={(event) => updateDraft('subtitle', event.target.value)} placeholder="Es. Morbida e profumata" /></Field>
              <Field label="Categoria"><select className={inputClass} value={draft.categoryId} onChange={(event) => updateDraft('categoryId', event.target.value)}>{categories.map((category) => <option key={category.id} value={category.id}>{category.label}{category.status === 'upcoming' ? ' (In arrivo)' : category.status === 'hidden' ? ' (nascosta)' : ''}</option>)}</select></Field>
              <Field label="Immagine (facoltativa)" hint="Percorso pubblico, ad esempio /img_ricette/nuova-ricetta.jpg"><input className={inputClass} value={draft.image} onChange={(event) => updateDraft('image', event.target.value)} placeholder="/img_ricette/nuova-ricetta.jpg" /></Field>
              <Field label="ID univoco" hint="Deve essere unico; il link finale sarà /recipe/ID."><input className={inputClass} value={draft.id} onChange={(event) => updateDraft('id', event.target.value)} placeholder="rd_7_nome-ricetta" /></Field>
              <Field label="Slug URL" hint="Di norma uguale all’ID, senza spazi o caratteri speciali."><input className={inputClass} value={draft.slug} onChange={(event) => updateDraft('slug', event.target.value)} placeholder="rd_7_nome-ricetta" /></Field>
              <Field label="Descrizione breve" hint="Testo usato nelle card delle categorie." className="sm:col-span-2"><textarea className={`${inputClass} min-h-24 resize-y`} value={draft.summary} onChange={(event) => updateDraft('summary', event.target.value)} placeholder="Racconta in poche righe il carattere della ricetta." /></Field>
              <Field label="Introduzione completa" hint="Testo mostrato nell’header della pagina ricetta." className="sm:col-span-2"><textarea className={`${inputClass} min-h-28 resize-y`} value={draft.intro} onChange={(event) => updateDraft('intro', event.target.value)} placeholder="Racconta la storia, la tradizione e il segreto della ricetta." /></Field>
              <Field label="Introduzione al procedimento" hint="Testo mostrato prima delle sezioni operative." className="sm:col-span-2"><textarea className={`${inputClass} min-h-24 resize-y`} value={draft.preparationIntro} onChange={(event) => updateDraft('preparationIntro', event.target.value)} placeholder="Spiega come affrontare la preparazione e quali passaggi richiedono più attenzione." /></Field>
            </div>
            <div className="mt-5 grid gap-5 sm:grid-cols-2">
              <Field label="Badge tempo / resa" hint="Es. 6–8 persone, 45 minuti, 1 teglia"><input className={inputClass} value={draft.timeBadge} onChange={(event) => updateDraft('timeBadge', event.target.value)} placeholder="Es. 8–10 fette" /></Field>
              <Field label="Badge difficoltà" hint="Scegli una delle classi già usate nelle ricette del sito."><select className={inputClass} value={draft.difficultyBadge} onChange={(event) => updateDraft('difficultyBadge', event.target.value)}>{difficultyOptions.map((difficulty) => <option key={difficulty} value={difficulty}>{difficulty}</option>)}</select></Field>
            </div>
          </EditorCard>

          <EditorCard>
            <SectionHeading icon="fa-solid fa-clock" eyebrow="A colpo d’occhio" title="Informazioni rapide" children={<button type="button" onClick={() => updateDraft('info', [...draft.info, { label: '', value: '', icon: 'fa-solid fa-circle-info' }])} className={smallButtonClass}><i className="fa-solid fa-plus" aria-hidden="true" />Aggiungi riga</button>} />
            <div className="space-y-3">{draft.info.map((item, index) => <div key={`info-${index}`} className="grid gap-3 rounded-xl border border-border-light bg-cream p-3 sm:grid-cols-[1fr_1fr_1.2fr_auto] sm:items-end"><Field label="Etichetta"><input className={inputClass} value={item.label} onChange={(event) => updateInfo(index, 'label', event.target.value)} placeholder="Preparazione" /></Field><Field label="Valore"><input className={inputClass} value={item.value} onChange={(event) => updateInfo(index, 'value', event.target.value)} placeholder="30 min" /></Field><Field label="Icona Font Awesome" hint="Es. fa-regular fa-clock"><input className={inputClass} value={item.icon} onChange={(event) => updateInfo(index, 'icon', event.target.value)} placeholder="fa-solid fa-circle-info" /></Field><button type="button" aria-label="Rimuovi informazione" onClick={() => updateDraft('info', draft.info.filter((_, itemIndex) => itemIndex !== index))} className="mb-0.5 flex h-10 items-center justify-center rounded-lg px-3 text-ink-muted transition hover:bg-bordeaux/10 hover:text-bordeaux"><i className="fa-solid fa-trash" aria-hidden="true" /></button></div>)}</div>
          </EditorCard>

          <EditorCard>
            <SectionHeading icon="fa-solid fa-list" eyebrow="Tutto il necessario" title="Ingredienti" children={<button type="button" onClick={() => updateDraft('ingredientGroups', [...draft.ingredientGroups, { label: '', items: [{ quantity: '', name: '' }] }])} className={smallButtonClass}><i className="fa-solid fa-layer-group" aria-hidden="true" />Aggiungi gruppo</button>} />
            <div className="space-y-5">{draft.ingredientGroups.map((group, groupIndex) => <div key={`group-${groupIndex}`} className="rounded-xl border border-border-light bg-cream p-4"><div className="mb-4 flex items-end gap-3"><Field label="Nome del gruppo" className="flex-1"><input className={inputClass} value={group.label} onChange={(event) => updateGroup(groupIndex, 'label', event.target.value)} placeholder="Es. Per l’impasto" /></Field><button type="button" aria-label="Rimuovi gruppo ingredienti" onClick={() => updateDraft('ingredientGroups', draft.ingredientGroups.filter((_, index) => index !== groupIndex))} className="mb-0.5 flex h-10 items-center justify-center rounded-lg px-3 text-ink-muted transition hover:bg-bordeaux/10 hover:text-bordeaux"><i className="fa-solid fa-trash" aria-hidden="true" /></button></div><div className="space-y-3">{group.items.map((item, itemIndex) => <div key={`ingredient-${groupIndex}-${itemIndex}`} className="grid gap-3 sm:grid-cols-[.65fr_1fr_auto] sm:items-end"><Field label="Quantità"><input className={inputClass} value={item.quantity} onChange={(event) => updateIngredient(groupIndex, itemIndex, 'quantity', event.target.value)} placeholder="250 g" /></Field><Field label="Ingrediente"><input className={inputClass} value={item.name} onChange={(event) => updateIngredient(groupIndex, itemIndex, 'name', event.target.value)} placeholder="Farina 00" /></Field><button type="button" aria-label="Rimuovi ingrediente" onClick={() => updateDraft('ingredientGroups', draft.ingredientGroups.map((currentGroup, index) => index !== groupIndex ? currentGroup : { ...currentGroup, items: currentGroup.items.filter((_, currentItemIndex) => currentItemIndex !== itemIndex) }))} className="mb-0.5 flex h-10 items-center justify-center rounded-lg px-3 text-ink-muted transition hover:bg-bordeaux/10 hover:text-bordeaux"><i className="fa-solid fa-trash" aria-hidden="true" /></button></div>)}</div><button type="button" onClick={() => updateDraft('ingredientGroups', draft.ingredientGroups.map((currentGroup, index) => index !== groupIndex ? currentGroup : { ...currentGroup, items: [...currentGroup.items, { quantity: '', name: '' }] }))} className="mt-4 inline-flex items-center gap-2 text-xs font-semibold text-bordeaux hover:text-bordeaux-dark"><i className="fa-solid fa-plus" aria-hidden="true" />Aggiungi ingrediente</button></div>)}</div>
          </EditorCard>

          <EditorCard>
            <SectionHeading icon="fa-solid fa-star" eyebrow="Il tocco di famiglia" title="Note e segreti" children={<button type="button" onClick={() => updateDraft('notes', [...draft.notes, ''])} className={smallButtonClass}><i className="fa-solid fa-plus" aria-hidden="true" />Aggiungi nota</button>} />
            <div className="space-y-3">{draft.notes.map((note, index) => <div key={`note-${index}`} className="flex items-start gap-3"><textarea className={`${inputClass} min-h-24 resize-y`} value={note} onChange={(event) => updateNote(index, event.target.value)} placeholder="Un consiglio tramandato, un dettaglio importante o un possibile errore da evitare." /><button type="button" aria-label="Rimuovi nota" onClick={() => updateDraft('notes', draft.notes.filter((_, noteIndex) => noteIndex !== index))} className="mt-2 flex h-10 shrink-0 items-center justify-center rounded-lg px-3 text-ink-muted transition hover:bg-bordeaux/10 hover:text-bordeaux"><i className="fa-solid fa-trash" aria-hidden="true" /></button></div>)}</div>
          </EditorCard>

          <EditorCard>
            <SectionHeading icon="fa-solid fa-list-ol" eyebrow="Passo dopo passo" title="Procedimento" children={<button type="button" onClick={() => updateDraft('sections', [...draft.sections, { title: '', steps: [''] }])} className={smallButtonClass}><i className="fa-solid fa-plus" aria-hidden="true" />Aggiungi sezione</button>} />
            <div className="space-y-5">{draft.sections.map((section, sectionIndex) => <div key={`section-${sectionIndex}`} className="rounded-xl border border-border-light bg-cream p-4"><div className="mb-4 flex items-end gap-3"><Field label={`Titolo della sezione ${sectionIndex + 1}`} className="flex-1"><input className={inputClass} value={section.title} onChange={(event) => updateSection(sectionIndex, 'title', event.target.value)} placeholder="Es. Preparare l’impasto" /></Field><button type="button" aria-label="Rimuovi sezione" onClick={() => updateDraft('sections', draft.sections.filter((_, index) => index !== sectionIndex))} className="mb-0.5 flex h-10 items-center justify-center rounded-lg px-3 text-ink-muted transition hover:bg-bordeaux/10 hover:text-bordeaux"><i className="fa-solid fa-trash" aria-hidden="true" /></button></div><div className="space-y-3">{section.steps.map((step, stepIndex) => <div key={`step-${sectionIndex}-${stepIndex}`} className="flex items-start gap-3"><span className="mt-3 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-bordeaux font-display text-sm font-bold text-white">{stepIndex + 1}</span><textarea className={`${inputClass} min-h-24 resize-y`} value={step} onChange={(event) => updateStep(sectionIndex, stepIndex, event.target.value)} placeholder="Descrivi con chiarezza questa operazione." /><button type="button" aria-label="Rimuovi passaggio" onClick={() => updateDraft('sections', draft.sections.map((currentSection, index) => index !== sectionIndex ? currentSection : { ...currentSection, steps: currentSection.steps.filter((_, currentStepIndex) => currentStepIndex !== stepIndex) }))} className="mt-2 flex h-10 shrink-0 items-center justify-center rounded-lg px-3 text-ink-muted transition hover:bg-bordeaux/10 hover:text-bordeaux"><i className="fa-solid fa-trash" aria-hidden="true" /></button></div>)}</div><button type="button" onClick={() => updateDraft('sections', draft.sections.map((currentSection, index) => index !== sectionIndex ? currentSection : { ...currentSection, steps: [...currentSection.steps, ''] }))} className="mt-4 inline-flex items-center gap-2 text-xs font-semibold text-bordeaux hover:text-bordeaux-dark"><i className="fa-solid fa-plus" aria-hidden="true" />Aggiungi passaggio</button></div>)}</div>
          </EditorCard>
        </div>

        <aside className="space-y-6 lg:sticky lg:top-24">
          <EditorCard className="overflow-hidden border-bordeaux/20 p-0">
            <div className="flex flex-wrap items-center justify-between gap-3 bg-bordeaux px-5 py-4 text-white sm:px-6"><div><p className="font-script text-lg text-gold">Pronto da incollare</p><h2 className="font-display text-2xl font-semibold">Codice della ricetta</h2></div><button type="button" onClick={copyCode} className="inline-flex items-center gap-2 rounded-lg bg-white/15 px-3 py-2 text-xs font-semibold text-white transition hover:bg-white/25"><i className={`fa-solid ${copied ? 'fa-check' : 'fa-copy'}`} aria-hidden="true" />{copied ? 'Copiato!' : 'Copia codice'}</button></div>
            <div className="p-4 sm:p-5"><textarea aria-label="Codice ricetta generato" readOnly value={code} className="min-h-[560px] w-full resize-y rounded-xl border border-border-light bg-ink p-4 font-mono text-xs leading-6 text-cream outline-none focus:ring-2 focus:ring-gold/40" /><p className="mt-3 text-xs leading-5 text-ink-muted"><i className="fa-solid fa-circle-info mr-1 text-terracotta" aria-hidden="true" />Il codice si aggiorna automaticamente mentre compili il modulo.</p></div>
          </EditorCard>

          <EditorCard>
            <SectionHeading icon="fa-solid fa-circle-check" eyebrow="Dopo la copia" title="Come abilitare la ricetta" />
            <ol className="space-y-4 text-sm leading-6 text-ink-light">
              <li className="flex gap-3"><span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-bordeaux font-display font-bold text-white">1</span><span>Apri il file categoria corretto in <code className="rounded bg-cream-mid px-1.5 py-0.5 text-xs text-bordeaux">src/data/</code> — ad esempio <code className="rounded bg-cream-mid px-1.5 py-0.5 text-xs text-bordeaux">dolci.ts</code> — e incolla l’oggetto generato nell’array delle ricette.</span></li>
              <li className="flex gap-3"><span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-bordeaux font-display font-bold text-white">2</span><span>Il file <code className="rounded bg-cream-mid px-1.5 py-0.5 text-xs text-bordeaux">src/data/ricette.ts</code> raccoglie automaticamente le ricette per il router. Per le card “in arrivo”, aggiungi il riepilogo nella categoria scelta e aggiorna <code className="rounded bg-cream-mid px-1.5 py-0.5 text-xs text-bordeaux">count</code> se necessario.</span></li>
              <li className="flex gap-3"><span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-bordeaux font-display font-bold text-white">3</span><span>Se hai indicato un’immagine, copiala in <code className="rounded bg-cream-mid px-1.5 py-0.5 text-xs text-bordeaux">public/img_ricette</code> mantenendo lo stesso percorso scritto nel campo immagine.</span></li>
              <li className="flex gap-3"><span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-bordeaux font-display font-bold text-white">4</span><span>Salva i file e apri <code className="rounded bg-cream-mid px-1.5 py-0.5 text-xs text-bordeaux">/recipe/{draft.id || 'ID'}</code> per controllare la nuova pagina.</span></li>
            </ol>
            {selectedCategory.status === 'hidden' && <p className="mt-5 rounded-lg border border-terracotta/30 bg-terracotta/5 p-3 text-xs leading-5 text-ink-light"><i className="fa-solid fa-eye-slash mr-1 text-terracotta" aria-hidden="true" />La categoria è nascosta: dopo aver aggiunto la ricetta, imposta lo stato su “Attiva” nell’editor categorie per mostrarla nel sito.</p>}
            {selectedCategory.status === 'upcoming' && <p className="mt-5 rounded-lg border border-terracotta/30 bg-terracotta/5 p-3 text-xs leading-5 text-ink-light"><i className="fa-solid fa-hourglass-half mr-1 text-terracotta" aria-hidden="true" />La categoria è visibile come “In arrivo”: dopo aver aggiunto la ricetta, imposta lo stato su “Attiva” nell’editor categorie per renderla navigabile.</p>}
          </EditorCard>
        </aside>
      </div>
    </section>
  </>
}

function buildRecipeCode(draft: RecipeDraft, category: typeof categories[number]) {
  const id = draft.id.trim() || `rd_${slugify(draft.title) || 'nuova-ricetta'}`
  const slug = draft.slug.trim() || id
  const info = draft.info.filter((item) => item.label.trim() || item.value.trim()).map((item) => `      { label: ${quote(item.label)}, value: ${quote(item.value)}, icon: ${quote(item.icon)} },`).join('\n')
  const ingredientGroups = draft.ingredientGroups.filter((group) => group.label.trim() || group.items.some((item) => item.quantity.trim() || item.name.trim())).map((group, groupIndex) => {
    const items = group.items.filter((item) => item.quantity.trim() || item.name.trim()).map((item, itemIndex) => `        { id: ${quote(`${slugify(id)}-i${groupIndex + 1}-${itemIndex + 1}`)}, quantity: ${quote(item.quantity)}, name: ${quote(item.name)} },`).join('\n')
    return `      { label: ${quote(group.label)}, items: [\n${items}\n      ] },`
  }).join('\n')
  const notes = draft.notes.filter((note) => note.trim()).map((note) => `      ${quote(note)},`).join('\n')
  const sections = draft.sections.filter((section) => section.title.trim() || section.steps.some((step) => step.trim())).map((section) => {
    const steps = section.steps.filter((step) => step.trim()).map((step) => `        ${quote(step)},`).join('\n')
    return `      { title: ${quote(section.title)}, steps: [\n${steps}\n      ] },`
  }).join('\n')

  return `  {\n    id: ${quote(id)},\n    slug: ${quote(slug)},\n    title: ${quote(draft.title)},\n    subtitle: ${quote(draft.subtitle)},\n    categoryId: ${quote(category.id)},\n    categoryLabel: ${quote(category.label)},\n    categoryIcon: ${quote(category.icon)},${draft.image.trim() ? `\n    image: ${quote(draft.image.trim())},` : ''}\n    summary: ${quote(draft.summary)},\n    intro: ${quote(draft.intro)},\n    preparationIntro: ${quote(draft.preparationIntro)},\n    badges: [\n      { label: ${quote(category.label)}, tone: 'category' },\n      { label: ${quote(draft.timeBadge)}, tone: 'time' },\n      { label: ${quote(draft.difficultyBadge)}, tone: 'difficulty' },\n    ],\n    info: [\n${info}\n    ],\n    ingredients: [\n${ingredientGroups}\n    ],\n    notes: [\n${notes}\n    ],\n    sections: [\n${sections}\n    ],\n  },`
}
