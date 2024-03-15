import { Component } from '@angular/core';
import { Color, NgxChartsModule } from '@swimlane/ngx-charts';


@Component({
  selector: 'app-meal-selector',
  //templateUrl: './meal-selector.component.html',
   template: `
    <div>
      <label for="meal">Select a meal:</label>
      <input list="meals" id="meal" [(ngModel)]="selectedMealName">
      <datalist id="meals">
        <option *ngFor="let meal of mealOptions" [value]="meal.name">{{ meal.name }}</option>
      </datalist>
      <label for="quantity">Quantity:</label>
      <input type="number" id="quantity" [(ngModel)]="quantity" (input)="calculateNutrition()">
      <button (click)="addMeal()">Add Meal</button>

      <div *ngFor="let meal of selectedMeals; let i = index">
        <p>{{ meal.name }} - Quantity: {{ meal.quantity }}</p>
        <button (click)="removeMeal(i)">Remove</button>
      </div>

      <div *ngIf="selectedMeals.length > 0">
        <h3>Total Nutritional Information:</h3>
        <p>Total Calories: {{ totalCalories }}</p>
        <p>Total Protein: {{ totalProtein }}</p>
      </div>

    </div>
  `,
  styleUrls: [ './meal-selector.component.scss'],
})
export class MealSelectorComponent {
  selectedMealName: string = '';
  quantity: number = 1;
  mealOptions: { name: string, calories: number, protein: number }[] = [
    { name: 'Chicken Breast', calories: 165, protein: 31 },
    { name: 'Salmon Fillet', calories: 208, protein: 23 },
    { name: 'Brown Rice (cooked, 1 cup)', calories: 218, protein: 5 },
    { name: 'Broccoli (1 cup)', calories: 55, protein: 4 },
    { name: 'Sweet Potato (1 cup)', calories: 180, protein: 4 },
    { name: 'Olive Oil (1 tbsp)', calories: 119, protein: 0 },
    { name: 'Almonds (1 oz)', calories: 164, protein: 6 },
    { name: 'Greek Yogurt (1 cup)', calories: 100, protein: 17 },
  ];
  selectedMeals: { name: string, quantity: number }[] = [];
  totalCalories: number = 0;
  totalProtein: number = 0;

  addMeal() {
    const selectedMealData = this.mealOptions.find(meal => meal.name === this.selectedMealName);
    if (selectedMealData) {
      this.selectedMeals.push({ name: selectedMealData.name, quantity: this.quantity });
      this.calculateNutrition();
    }
  }

  removeMeal(index: number) {
    this.selectedMeals.splice(index, 1);
    this.calculateNutrition();
  }

  calculateNutrition() {
    this.totalCalories = 0;
    this.totalProtein = 0;
    for (const meal of this.selectedMeals) {
      const mealData = this.mealOptions.find(option => option.name === meal.name);
      if (mealData) {
        this.totalCalories += mealData.calories * meal.quantity;
        this.totalProtein += mealData.protein * meal.quantity;
      }
    }
  }
}
