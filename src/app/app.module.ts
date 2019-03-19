import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { ShoppingListComponent } from './shopping-list/shopping-list.component'
import { ShoppingListEditComponent } from './shopping-list/shopping-list-edit/shopping-list-edit.component'
import { IngredientComponent } from './recipe/ingredient/ingredient.component'
import { HeaderComponent } from './header/header.component'
import { RecipeBookComponent } from './recipe/recipe-book/recipe-book.component'
import { RecipeListComponent } from './recipe/recipe-list/recipe-list.component'
import { RecipeItemComponent } from './recipe/recipe-list/recipe-item/recipe-item.component'
import { RecipeDetailComponent } from './recipe/recipe-detail/recipe-detail.component'
import { RecipeComponent } from './recipe/recipe.component'

@NgModule({
  declarations: [
    AppComponent,
    ShoppingListComponent,
    ShoppingListEditComponent,
    IngredientComponent,
    HeaderComponent,
    RecipeBookComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailComponent,
    RecipeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
