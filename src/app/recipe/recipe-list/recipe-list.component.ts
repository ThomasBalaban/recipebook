import { Component, OnInit } from '@angular/core'
import { Recipe } from '../recipe.model'

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})

export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('chicken parm', 'chicken with parm', 'https://www.spendwithpennies.com/wp-content/uploads/2018/11/SpendWithPennies-Chicken-Parmesan-24.jpg'),
    new Recipe('chicken parm2', 'chicken with parm', 'https://www.spendwithpennies.com/wp-content/uploads/2018/11/SpendWithPennies-Chicken-Parmesan-24.jpg')
  ]

  constructor() { }

  ngOnInit() {
  }

}
