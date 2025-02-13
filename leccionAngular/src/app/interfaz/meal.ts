export interface Meal {
    idMeal: string;
    strMeal: string;
    strCategory: string;
    strArea: string;
    strInstructions: string;
    strMealThumb: string;
    strTags?: string;
    strYoutube?: string;
    strIngredients: string[];
  }
  
  export interface MealResponse {
    meals: Meal[];
  }
  