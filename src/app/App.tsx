import { useEffect, useState } from 'react'
import { Link, Navigate, Route, Routes, useLocation, useParams } from 'react-router-dom'
import { ICONS } from '../constants/icons'
import { getCategory, getRecipe, visibleCategories } from '../data/ricette'
import CategoryEditor from '../features/categories/CategoryEditor'
import RecipeEditor from '../features/recipes/RecipeEditor'
import type { Category, CategoryRecipe, Recipe } from '../data/types'

const Container = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => (
  <div className={`mx-auto w-full max-w-[1200px] px-4 sm:px-8 ${className}`}>{children}</div>
)

function Navbar() {
  const location = useLocation()
  const [menuOpen, setMenuOpen] = useState(false)
  const [recipesOpen, setRecipesOpen] = useState(false)
  const scrolled = useScrolled()

  useEffect(() => { setMenuOpen(false); setRecipesOpen(false) }, [location.pathname])

  return (
    <header className={`fixed inset-x-0 top-0 z-50 h-[72px] border-b border-border-light bg-cream/95 backdrop-blur-md transition-shadow ${scrolled ? 'shadow-recipe' : ''}`}>
      <Container className="flex h-full items-center justify-between">
        <Link to="/" className="flex shrink-0 items-center gap-3 font-display text-lg text-ink transition-colors hover:text-bordeaux" aria-label="Torna alla home">
          <i className={`${ICONS.brand} text-2xl text-bordeaux`} aria-hidden="true" />
          <span className="leading-tight">Le Ricette di <em className="text-bordeaux">Nonna Catia</em></span>
        </Link>

        <button className={`flex h-10 w-10 flex-col justify-center gap-1.5 rounded-lg border border-border-light p-2 md:hidden ${menuOpen ? 'bg-cream-dark' : ''}`} onClick={() => setMenuOpen(!menuOpen)} aria-label="Apri menu" aria-expanded={menuOpen}>
          <span className={`h-0.5 w-full rounded bg-ink transition-transform ${menuOpen ? 'translate-y-2 rotate-45' : ''}`} />
          <span className={`h-0.5 w-full rounded bg-ink transition-opacity ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`h-0.5 w-full rounded bg-ink transition-transform ${menuOpen ? '-translate-y-2 -rotate-45' : ''}`} />
        </button>

        <nav className={`${menuOpen ? 'visible opacity-100' : 'invisible -translate-y-3 opacity-0 md:visible md:translate-y-0 md:opacity-100'} absolute left-0 right-0 top-[72px] flex flex-col gap-1 border-b border-border bg-cream p-3 shadow-recipe transition-all md:static md:flex md:flex-row md:items-center md:border-0 md:bg-transparent md:p-0 md:shadow-none`} aria-label="Navigazione principale">
          <Link to="/" className="rounded-lg px-4 py-2 font-display text-lg text-ink-light transition-colors hover:bg-bordeaux/5 hover:text-bordeaux"><i className={`${ICONS.home} mr-2 text-sm`} aria-hidden="true" />Home</Link>
          <div className="relative">
            <button className="flex w-full items-center justify-between rounded-lg px-4 py-2 font-display text-lg text-ink-light transition-colors hover:bg-bordeaux/5 hover:text-bordeaux md:w-auto" onClick={() => setRecipesOpen(!recipesOpen)} aria-expanded={recipesOpen}>
              <span><i className={`${ICONS.recipes} mr-2 text-sm`} aria-hidden="true" />Ricette</span><i className={`${ICONS.chevronDown} ml-3 text-xs transition-transform ${recipesOpen ? 'rotate-180' : ''}`} aria-hidden="true" />
            </button>
            <div className={`${recipesOpen ? 'grid' : 'hidden'} mt-1 grid-cols-2 gap-1 rounded-xl border border-border-light bg-cream p-2 shadow-soft md:absolute md:right-0 md:top-full md:mt-2 md:w-[310px]`}>
              {visibleCategories.map((category) => category.status === 'active' ? (
                <Link key={category.id} to={`/category/${category.id}`} className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm text-ink-light hover:bg-cream-dark hover:text-bordeaux"><i className={`${category.icon} w-4 text-center text-terracotta`} aria-hidden="true" />{category.label}</Link>
              ) : (
                <span key={category.id} className="flex cursor-default items-center gap-2 rounded-lg px-3 py-2 text-sm text-ink-muted opacity-50"><i className={`${category.icon} w-4 text-center`} aria-hidden="true" />{category.label}<small className="ml-auto rounded-full border border-border bg-cream-mid px-1.5 py-0.5 text-[10px] uppercase">In arrivo</small></span>
              ))}
            </div>
          </div>
        </nav>
      </Container>
    </header>
  )
}

function Footer() {
  return (
    <footer className="border-t-4 border-bordeaux bg-ink pt-16 text-cream/70">
      <Container>
        <div className="grid gap-10 border-b border-white/10 pb-12 md:grid-cols-2 lg:grid-cols-[2fr_1.5fr_1.5fr]">
          <div>
            <div className="mb-4 flex items-center gap-3"><i className={`${ICONS.brand} text-3xl text-gold`} aria-hidden="true" /><h3 className="font-display text-xl font-semibold leading-tight text-cream">Le Ricette di<br /><em className="text-gold">Nonna Catia</em></h3></div>
            <p className="max-w-sm text-sm leading-7">Una collezione di sapori autentici, tramandati con pazienza e amore di generazione in generazione.</p>
            <p className="mt-5 text-sm text-cream/40"><i className={`${ICONS.heart} mr-2 text-bordeaux`} aria-hidden="true" />Fatto con amore in cucina</p>
          </div>
          <div>
            <h4 className="mb-5 font-display text-sm font-semibold uppercase tracking-[0.15em] text-cream">Categorie</h4>
            <ul className="space-y-2.5">{visibleCategories.map((category) => <li key={category.id}>{category.status === 'active' ? <Link to={`/category/${category.id}`} className="flex items-center gap-2 text-sm text-cream/55 hover:text-gold"><i className={`${category.icon} w-4 text-terracotta-light`} aria-hidden="true" />{category.label}</Link> : <span className="flex items-center gap-2 text-sm text-cream/35"><i className={`${category.icon} w-4`} aria-hidden="true" />{category.label}<small className="ml-auto rounded-full border border-cream/20 px-1.5 py-0.5 text-[10px] uppercase">In arrivo</small></span>}</li>)}</ul>
          </div>
          <div>
            <h4 className="mb-5 font-display text-sm font-semibold uppercase tracking-[0.15em] text-cream">Il Ricettario</h4>
            <p className="text-sm leading-7">Anni di tradizione raccolti in queste pagine: dalle domeniche in famiglia ai segreti più gelosamente custoditi, ogni ricetta racconta una storia.</p>
            <Link to="/editor-ricette" className="mt-6 inline-flex items-center gap-2 rounded-lg border border-gold/40 px-3 py-2 text-sm text-gold transition hover:border-gold hover:bg-gold/10"><i className="fa-solid fa-pen-to-square" aria-hidden="true" />Apri l’editor ricette</Link>
            <Link to="/editor-categorie" className="mt-3 inline-flex items-center gap-2 rounded-lg border border-gold/40 px-3 py-2 text-sm text-gold transition hover:border-gold hover:bg-gold/10"><i className="fa-solid fa-folder-plus" aria-hidden="true" />Crea una categoria</Link>
            <div className="mt-6 flex gap-5 text-xl text-cream/20"><i className={ICONS.seedling} /><i className={ICONS.fire} /><i className={ICONS.star} /><i className={ICONS.leaf} /></div>
          </div>
        </div>
        <div className="py-6 text-center text-xs text-cream/30"><i className={`${ICONS.heart} mx-1 text-bordeaux`} />Le Ricette di Nonna Catia — Con tutto l’amore della cucina di casa<i className={`${ICONS.heart} mx-1 text-bordeaux`} /></div>
      </Container>
    </footer>
  )
}

function SiteLayout() {
  return <><Navbar /><main className="pt-[72px]"><Routes><Route path="/" element={<HomePage />} /><Route path="/category/:categoryId" element={<CategoryPage />} /><Route path="/recipe/:recipeId" element={<RecipePage />} /><Route path="/editor-ricette" element={<RecipeEditor />} /><Route path="/editor-categorie" element={<CategoryEditor />} /><Route path="/rd_0_dolci.html" element={<Navigate to="/category/rd_0_dolci" replace />} /><Route path="/ro_0_occasioni.html" element={<Navigate to="/category/ro_0_occasioni" replace />} /><Route path="/rp_0_primi.html" element={<Navigate to="/category/rp_0_primi" replace />} /><Route path="/rd_1_tiramisu.html" element={<Navigate to="/recipe/rd_1_tiramisu" replace />} /><Route path="/rd_2_ferratelle-irma.html" element={<Navigate to="/recipe/rd_2_ferratelle-irma" replace />} /><Route path="/rd_3_torta-margherita.html" element={<Navigate to="/recipe/rd_3_torta-margherita" replace />} /><Route path="/rd_4_crema-latte.html" element={<Navigate to="/recipe/rd_4_crema-latte" replace />} /><Route path="/rd_5_maritozzi.html" element={<Navigate to="/recipe/rd_5_maritozzi" replace />} /><Route path="/rd_6_rotolo-nutella.html" element={<Navigate to="/recipe/rd_6_rotolo-nutella" replace />} /><Route path="/ro_1_pizza-pasqua.html" element={<Navigate to="/recipe/ro_1_pizza-pasqua" replace />} /><Route path="/rp_1_tagliatelle.html" element={<Navigate to="/recipe/rp_1_tagliatelle" replace />} /><Route path="*" element={<NotFound />} /></Routes></main><Footer /><BackToTop /></>
}

function HomePage() {
  return <>
    <section className="relative overflow-hidden bg-cream px-4 py-20 text-center sm:py-24"><div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_110%,rgba(193,122,58,0.14),transparent_65%)]" /><p className="relative mb-3 font-script text-2xl text-terracotta">Benvenuto nel ricettario di famiglia</p><h1 className="relative font-display text-6xl font-bold leading-none text-ink sm:text-8xl">Le Ricette di<em className="block text-bordeaux">Nonna Catia</em></h1><p className="relative mx-auto mt-6 max-w-xl font-display text-lg italic leading-8 text-ink-muted sm:text-xl">Sapori autentici tramandati con amore, raccolti dopo anni di domeniche in cucina, di profumi che inondavano tutta la casa.</p><div className="relative mx-auto mt-8 flex max-w-lg items-center justify-center gap-4 text-xs uppercase tracking-[0.15em] text-gold"><span className="h-px w-16 bg-gold/50" /><i className={ICONS.seedling} /><span>Tradizione &amp; Amore</span><i className={ICONS.heart} /><span className="h-px w-16 bg-gold/50" /></div></section>
    <section className="bg-cream px-0 py-16 sm:py-20"><Container><div className="mb-10 text-center"><span className="font-script text-xl text-terracotta">Cosa cuciniamo oggi?</span><h2 className="mt-1 font-display text-4xl font-semibold text-ink sm:text-5xl">Sfoglia le ricette</h2></div><div className="ornament-divider mb-10"><i className={ICONS.recipes} /></div><div className="grid grid-cols-2 gap-3 sm:gap-6 lg:grid-cols-4">{visibleCategories.map((category, index) => <CategoryCard key={category.id} category={category} index={index} />)}</div></Container></section>
    <section className="bg-cream px-4 pb-20 text-center"><div className="mx-auto max-w-2xl border-l-[3px] border-gold pl-6 text-left"><blockquote className="font-display text-xl italic leading-8 text-ink-muted">“La cucina è il cuore della casa. Ogni ricetta è una storia, ogni profumo un ricordo. Cucina con amore e il sapore si sente.”</blockquote><cite className="mt-3 block font-script text-lg not-italic text-terracotta">— Nonna Catia</cite></div></section>
  </>
}

function CategoryCard({ category, index }: { category: Category; index: number }) {
  return category.status === 'active' ? <Link to={`/category/${category.id}`} className="group relative flex min-h-[190px] flex-col items-center justify-center overflow-hidden rounded-2xl border border-border-light bg-white p-4 text-center shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-soft sm:min-h-[220px]" style={{ animationDelay: `${index * 80}ms` }}><div className="absolute inset-0 bg-cover bg-center opacity-0 transition duration-300 group-hover:opacity-100" style={{ backgroundImage: `linear-gradient(rgba(45,31,14,.45),rgba(45,31,14,.72)), url(${category.image})` }} /><i className={`${category.icon} relative z-10 mb-4 text-4xl text-bordeaux transition group-hover:scale-110 group-hover:text-white sm:text-5xl`} aria-hidden="true" /><h3 className="relative z-10 font-display text-lg font-semibold text-ink group-hover:text-white sm:text-xl">{category.label}</h3><span className="relative z-10 mt-3 text-xs text-bordeaux opacity-0 transition group-hover:translate-x-0 group-hover:opacity-100 group-hover:text-white">Sfoglia le ricette <i className={`${ICONS.arrowRight} ml-1`} aria-hidden="true" /></span></Link> : <article className="relative flex min-h-[190px] flex-col items-center justify-center rounded-2xl border border-border-light bg-cream p-4 text-center opacity-70 sm:min-h-[220px]"><span className="absolute right-2 top-3 rounded-full border border-border bg-cream-mid px-2 py-1 text-[10px] uppercase tracking-wide text-ink-muted">In arrivo</span><i className={`${category.icon} mb-4 text-4xl text-ink-muted/50 grayscale sm:text-5xl`} aria-hidden="true" /><h3 className="font-display text-lg font-semibold text-ink-muted sm:text-xl">{category.label}</h3><span className="mt-3 text-xs text-ink-muted"><i className={`${ICONS.lock} mr-1`} aria-hidden="true" />In arrivo</span></article>
}

function PageHeader({ category }: { category: Category }) {
  return <section className="relative border-b border-border-light bg-white py-10 before:absolute before:inset-x-0 before:top-0 before:h-1 before:bg-gradient-to-r before:from-bordeaux before:via-terracotta before:to-gold"><Container><div className="flex items-center gap-5"><div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-border bg-cream text-2xl text-bordeaux sm:h-20 sm:w-20 sm:text-3xl"><i className={category.icon} aria-hidden="true" /></div><div><div className="mb-1 flex flex-wrap items-center gap-2 text-xs text-ink-muted"><Link to="/" className="text-terracotta hover:text-bordeaux hover:underline">Home</Link><i className={`${ICONS.chevronRight} text-[8px]`} /><span>Ricette</span><i className={`${ICONS.chevronRight} text-[8px]`} /><span>{category.pageTitle ?? category.label}</span></div><h1 className="font-display text-4xl font-bold leading-none text-ink sm:text-5xl">{category.pageTitle ?? category.label}</h1><p className="mt-2 font-body text-sm italic text-ink-muted">{category.count ? `${category.count} ricett${category.count === 1 ? 'a' : 'e'} disponibili` : 'Nuove ricette in arrivo'}</p></div></div></Container></section>
}

function CategoryPage() {
  const { categoryId } = useParams()
  const category = getCategory(categoryId)
  if (!category || category.status === 'hidden') return <NotFound />
  return <><PageHeader category={category} /><section className="bg-cream py-12 sm:py-16"><Container>{category.recipes.length ? <div className="grid gap-6 md:grid-cols-2">{category.recipes.map((recipe, index) => <RecipeCard key={`${recipe.title}-${index}`} recipe={recipe} category={category} index={index} />)}</div> : <div className="py-20 text-center text-ink-muted"><i className="fa-solid fa-utensils mb-6 block text-6xl text-border" /><h2 className="font-display text-3xl font-semibold text-ink-light">Stiamo preparando questa sezione</h2><p className="mx-auto mt-3 max-w-md italic">La cucina di Nonna Catia è grande: presto troverai qui nuove ricette.</p></div>}</Container></section></>
}

function RecipeCard({ recipe, category, index }: { recipe: CategoryRecipe; category: Category; index: number }) {
  const content = <><div className="mb-1 flex flex-wrap gap-2"><span className="rounded-full bg-bordeaux px-3 py-1 text-xs text-white"><i className={`${category.icon} mr-1`} aria-hidden="true" />{category.label}</span><span className="rounded-full border border-border bg-cream-mid px-3 py-1 text-xs text-ink-light">Ricetta di famiglia</span></div><h2 className="font-display text-2xl font-semibold leading-tight text-ink group-hover:text-bordeaux">{recipe.title}</h2><p className="font-script text-lg text-terracotta">{recipe.subtitle}</p><p className="mt-2 flex-1 text-sm leading-7 text-ink-muted">{recipe.description}</p><span className="mt-3 inline-flex items-center gap-2 font-display font-semibold text-bordeaux">{recipe.id ? 'Leggi la ricetta' : 'In arrivo'} <i className={`fa-solid ${recipe.id ? 'fa-arrow-right' : 'fa-lock'} text-xs`} /></span></>
  return recipe.id ? <Link to={`/recipe/${recipe.id}`} className="group flex flex-col gap-2 rounded-xl border border-l-4 border-border-light border-l-bordeaux bg-white p-6 shadow-sm transition hover:translate-x-1 hover:shadow-recipe" style={{ animationDelay: `${index * 80}ms` }}>{content}</Link> : <article className="flex flex-col gap-2 rounded-xl border border-l-4 border-border-light border-l-border bg-white p-6 opacity-60">{content}</article>
}

function RecipePage() {
  const { recipeId } = useParams()
  const recipe = getRecipe(recipeId)
  if (!recipe) return <NotFound />
  return <><RecipeHeader recipe={recipe} /><section className="bg-cream"><Container className="grid items-start gap-10 py-10 lg:grid-cols-[minmax(280px,1fr)_2fr] lg:gap-12 lg:py-12"><aside className="order-2 space-y-6 lg:order-1 lg:sticky lg:top-24"><InfoCard recipe={recipe} /><IngredientCard recipe={recipe} /><NotesCard recipe={recipe} /></aside><article className="order-1 lg:order-2"><p className="mb-10 border-b border-border-light pb-8 text-base italic leading-8 text-ink-light">{recipe.preparationIntro}</p>{recipe.sections.map((section, sectionIndex) => <section key={section.title} className="mb-10 last:mb-0"><h2 className="mb-5 flex items-center gap-3 border-b-2 border-cream-mid pb-3 font-display text-2xl font-semibold text-ink"><span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-bordeaux text-base text-white">{sectionIndex + 1}</span>{section.title}</h2><div className="space-y-3">{section.steps.map((step, index) => <div key={step} className="flex items-start gap-4 rounded-lg p-3 transition hover:bg-white/70"><span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border-2 border-border bg-cream-mid font-display text-sm font-bold text-ink-light">{index + 1}</span><p className="text-[15px] leading-8 text-ink">{step}</p></div>)}</div></section>)}</article></Container></section></>
}

function RecipeHeader({ recipe }: { recipe: Recipe }) {
  return <section className="relative border-b border-border-light bg-white py-8 before:absolute before:inset-x-0 before:top-0 before:h-1 before:bg-gradient-to-r before:from-bordeaux before:via-terracotta before:to-gold"><Container><div className="mb-6 flex flex-wrap items-center gap-2 text-xs text-ink-muted"><Link to="/" className="text-terracotta hover:text-bordeaux hover:underline"><i className={`${ICONS.home} mr-1`} />Home</Link><i className={`${ICONS.chevronRight} text-[8px]`} /><Link to={`/category/${recipe.categoryId}`} className="text-terracotta hover:text-bordeaux hover:underline">{recipe.categoryLabel}</Link><i className={`${ICONS.chevronRight} text-[8px]`} /><span>{recipe.title}</span></div><div className="grid items-center gap-8 lg:grid-cols-[1fr_380px]"><div><div className="mb-5 flex flex-wrap gap-2">{recipe.badges.map((badge) => <span key={badge.label} className={`rounded-full px-3 py-1 text-xs ${badge.tone === 'category' ? 'bg-bordeaux text-white' : badge.tone === 'difficulty' ? 'border border-terracotta bg-terracotta/5 text-terracotta' : 'border border-border bg-cream-mid text-ink-light'}`}><i className={`${badge.tone === 'category' ? recipe.categoryIcon : badge.tone === 'time' ? ICONS.clock : ICONS.difficulty} mr-1`} aria-hidden="true" />{badge.label}</span>)}</div><h1 className="font-display text-5xl font-bold leading-none text-ink sm:text-6xl">{recipe.title}</h1><em className="mt-3 block font-script text-2xl text-terracotta">{recipe.subtitle}</em><p className="mt-5 max-w-[660px] border-l-[3px] border-gold pl-5 text-base italic leading-8 text-ink-muted">{recipe.intro}</p></div><div className="aspect-[4/3] overflow-hidden rounded-2xl bg-cream-dark shadow-soft">{recipe.image ? <img src={recipe.image} alt={recipe.title} className="h-full w-full object-cover transition duration-500 hover:scale-105" /> : <div className="flex h-full flex-col items-center justify-center gap-3 border-2 border-dashed border-border text-ink-muted"><i className={`${recipe.categoryIcon} text-5xl opacity-30`} /><span className="text-xs italic opacity-60">Immagine in arrivo</span></div>}</div></div></Container></section>
}

function InfoCard({ recipe }: { recipe: Recipe }) { return <div className="overflow-hidden rounded-2xl border border-border-light bg-white"><CardTitle icon={ICONS.clock}>Informazioni</CardTitle><div className="p-5">{recipe.info.map((item) => <div key={item.label} className="flex items-center gap-3 border-b border-border-light py-2.5 last:border-0"><i className={`${item.icon} w-4 text-center text-terracotta`} aria-hidden="true" /><span className="flex-1 text-sm text-ink-muted">{item.label}</span><strong className="font-display text-sm text-ink">{item.value}</strong></div>)}</div></div> }

function IngredientCard({ recipe }: { recipe: Recipe }) {
  const [checked, setChecked] = useState<Record<string, boolean>>({})
  useEffect(() => { const initial: Record<string, boolean> = {}; recipe.ingredients.flatMap((group) => group.items).forEach((item) => { initial[item.id] = sessionStorage.getItem(`checked_${item.id}`) === '1' }); setChecked(initial) }, [recipe.id])
  const toggle = (id: string) => setChecked((current) => { const next = { ...current, [id]: !current[id] }; sessionStorage.setItem(`checked_${id}`, next[id] ? '1' : '0'); return next })
  const reset = () => { recipe.ingredients.flatMap((group) => group.items).forEach((item) => sessionStorage.removeItem(`checked_${item.id}`)); setChecked({}) }
  return <div className="overflow-hidden rounded-2xl border border-border-light bg-white"><CardTitle icon={ICONS.list}>Ingredienti <button onClick={reset} className="ml-auto rounded border border-white/30 bg-white/10 px-2 py-1 font-body text-[10px] text-white hover:bg-white/20"><i className={`${ICONS.reset} mr-1`} />Reset</button></CardTitle><div className="p-5"><p className="mb-3 text-xs italic text-ink-muted"><i className={`${ICONS.handPointer} mr-1`} />Clicca per spuntare gli ingredienti</p>{recipe.ingredients.map((group) => <div key={group.label} className="mb-3 last:mb-0"><h3 className="mb-1 px-2 font-display text-xs font-semibold uppercase tracking-widest text-ink-muted">{group.label}</h3>{group.items.map((item) => <button key={item.id} onClick={() => toggle(item.id)} className={`flex w-full items-start gap-3 rounded-lg border border-transparent px-2 py-2 text-left text-sm leading-6 transition hover:bg-cream ${checked[item.id] ? 'border-border-light bg-cream-dark opacity-55' : ''}`}><span className={`mt-1 flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded border-2 ${checked[item.id] ? 'border-bordeaux bg-bordeaux text-white' : 'border-border'}`}>{checked[item.id] && <i className={`${ICONS.check} text-[10px]`} />}</span><span className={`w-16 shrink-0 font-medium text-bordeaux ${checked[item.id] ? 'line-through' : ''}`}>{item.quantity}</span><span className={checked[item.id] ? 'line-through' : ''}>{item.name}</span></button>)}</div>)}</div></div>
}

function NotesCard({ recipe }: { recipe: Recipe }) { return <div className="overflow-hidden rounded-2xl border border-border-light bg-white"><CardTitle icon={ICONS.star}>I Segreti di Nonna Catia</CardTitle><div className="space-y-3 p-5 text-sm italic leading-7 text-ink-muted">{recipe.notes.map((note) => <p key={note}>{note}</p>)}</div></div> }
function CardTitle({ icon, children }: { icon: string; children: React.ReactNode }) { return <div className="flex items-center gap-2 bg-bordeaux px-5 py-3 font-display text-lg font-semibold text-white"><i className={`${icon} opacity-75`} aria-hidden="true" />{children}</div> }
function BackToTop() { const visible = useScrolled(380); return <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className={`fixed bottom-5 right-5 z-40 flex h-11 w-11 items-center justify-center rounded-full bg-bordeaux text-white shadow-recipe transition hover:-translate-y-1 hover:bg-bordeaux-dark ${visible ? 'visible opacity-100' : 'invisible translate-y-3 opacity-0'}`} aria-label="Torna in cima"><i className={ICONS.up} /></button> }
function useScrolled(threshold = 50) { const [scrolled, setScrolled] = useState(false); useEffect(() => { const handler = () => setScrolled(window.scrollY > threshold); handler(); window.addEventListener('scroll', handler, { passive: true }); return () => window.removeEventListener('scroll', handler) }, [threshold]); return scrolled }
function NotFound() { return <section className="bg-cream px-4 py-32 text-center"><i className={`${ICONS.book} mb-5 text-6xl text-border`} /><h1 className="font-display text-4xl font-semibold text-ink">Ricetta non trovata</h1><p className="mx-auto mt-3 max-w-md italic text-ink-muted">Questa pagina non fa ancora parte del ricettario.</p><Link to="/" className="mt-7 inline-flex rounded-lg bg-bordeaux px-5 py-3 text-white hover:bg-bordeaux-dark">Torna alla home</Link></section> }

export default function App() { return <SiteLayout /> }
