import type { CategoryRecipe, Recipe } from './types'

export const toCategoryRecipe = (recipe: Recipe): CategoryRecipe => ({
  id: recipe.id,
  title: recipe.title,
  subtitle: recipe.subtitle,
  description: recipe.summary,
})

export const info = (items: [string, string, string][]) => items.map(([label, value, icon]) => ({ label, value, icon }))
export const ingredients = (groups: [string, [string, string, string][]][]) => groups.map(([label, items]) => ({ label, items: items.map(([id, quantity, name]) => ({ id, quantity, name })) }))
