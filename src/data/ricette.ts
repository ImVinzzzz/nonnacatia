import { antipasti } from './antipasti'
import { conserve } from './conserve'
import { dolci, dolciRecipes } from './dolci'
import { occasioni, occasioniRecipes } from './occasioni'
import { pizzaFocacce } from './pizza-focacce'
import { primi, primiRecipes } from './primi'
import { secondi } from './secondi'
import type { Category, Recipe } from './types'

export const categories: Category[] = [primi, dolci, occasioni, antipasti, secondi, conserve, pizzaFocacce]
export const visibleCategories = categories.filter((category) => category.status !== 'hidden')
export const recipes: Recipe[] = [...primiRecipes, ...dolciRecipes, ...occasioniRecipes]

export const getCategory = (id?: string) => categories.find((category) => category.id === id)
export const getRecipe = (id?: string) => recipes.find((recipe) => recipe.id === id || recipe.slug === id)
