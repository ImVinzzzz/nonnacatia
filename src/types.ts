export type Ingredient = { id: string; quantity: string; name: string }
export type IngredientGroup = { label: string; items: Ingredient[] }
export type RecipeSection = { title: string; steps: string[] }

export type Recipe = {
  id: string
  slug: string
  title: string
  subtitle: string
  categoryId: string
  categoryLabel: string
  categoryIcon: string
  description: string
  image?: string
  badges: { label: string; tone: 'category' | 'time' | 'difficulty' }[]
  info: { label: string; value: string; icon: string }[]
  ingredients: IngredientGroup[]
  notes: string[]
  sections: RecipeSection[]
}

export type CategoryRecipe = { id?: string; title: string; subtitle: string; description: string }
export type Category = {
  id: string
  label: string
  icon: string
  image?: string
  active: boolean
  count: number
  description: string
  recipes: CategoryRecipe[]
}
