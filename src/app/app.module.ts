import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'

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
import { DropdownDirective } from './shared/dropdown.directive'
import { ShoppingListService } from './shopping-list/shopping-list.service'

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
    RecipeComponent,
    DropdownDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    ShoppingListService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
