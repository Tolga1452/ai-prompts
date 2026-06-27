/**
 * Tool: recipe_display_v0
 * 
 * Description: Display an interactive recipe with adjustable servings. Use when the user asks for a recipe, cooking instructions, or food preparation guide. The widget allows users to scale all ingredient amounts proportionally by adjusting the servings control.
 */

interface RecipeIngredient {
  id: string; // 4 character unique identifier number for this ingredient (e.g., '0001', '0002'). Used to reference in steps.
  name: string; // Display name of the ingredient. For whole/countable items, fold the counting noun in here (e.g., 'garlic cloves', 'large eggs', 'medium lemon, zested').
  amount: number; // The quantity for base_servings
  unit?: "g" | "kg" | "ml" | "l" | "tsp" | "tbsp" | "cup" | "fl_oz" | "oz" | "lb" | "pinch" | null; // Unit of measurement. Omit for whole/countable items (e.g., 3 garlic cloves, 2 lemons) and put the counting noun in `name` instead. For salt/pepper/seasonings, give a concrete starting amount in tsp rather than a placeholder count. Weight: g, kg, oz, lb. Volume: ml, l, tsp, tbsp, cup, fl_oz.
}

interface RecipeStep {
  id: string; // Unique identifier for this step
  title: string; // Short summary of the step (e.g., 'Boil pasta', 'Make the sauce', 'Rest the dough'). Used as the timer label and step header in cooking mode.
  content: string; // The full instruction text. Use {ingredient_id} to insert editable ingredient amounts inline (e.g., 'Whisk together {0001} and {0002}')
  timer_seconds?: number | null; // Timer duration in seconds. Include whenever the step involves waiting, cooking, baking, resting, marinating, chilling, boiling, simmering, or any time-based action. Omit only for active hands-on steps with no waiting.
}

interface RecipeDisplayV0Input {
  title: string; // The name of the recipe (e.g., 'Spaghetti alla Carbonara')
  ingredients: RecipeIngredient[]; // List of ingredients with amounts
  steps: RecipeStep[]; // Cooking instructions. Reference ingredients using {ingredient_id} syntax.
  base_servings?: number | null; // The number of servings this recipe makes at base amounts (default: 4)
  description?: string | null; // A brief description or tagline for the recipe
  notes?: string | null; // Optional tips, variations, or additional notes about the recipe
}
