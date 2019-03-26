import { Recipe } from './recipe.model'
import { EventEmitter, Injectable } from '@angular/core'
import { Ingredient } from '../shared/ingredient.model'
import { ShoppingListService } from '../shopping-list/shopping-list.service'

@Injectable()

export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>()

    private recipe: Recipe[] = [
        new Recipe(
            'chicken parm',
            'chicken with parm',
            'https://www.spendwithpennies.com/wp-content/uploads/2018/11/SpendWithPennies-Chicken-Parmesan-24.jpg',
            [
                new Ingredient('Meat', 1),
                new Ingredient('french fries', 20)
            ]
        ),
        new Recipe(
            'chicken parm2',
            'chicken with parm',
            'https://www.spendwithpennies.com/wp-content/uploads/2018/11/SpendWithPennies-Chicken-Parmesan-24.jpg',
            [
                new Ingredient('Mea2t', 12),
                new Ingredient('french fries2', 202)
            ]
        ),
    ]

    constructor(private slService: ShoppingListService) {}

    getRecipes() {
        return this.recipe.slice()
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.slService.addIngredients(ingredients)
    }
}
