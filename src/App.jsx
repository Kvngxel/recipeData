import React from "react";
import Recipe from "./components/Recipe"
import Info from "./components/RecipeInfo"

export default function App() {
  return (<div>
    <Recipe
    recipeName={Info.name}
    recipeImage={Info.image}
    recipeIngredients={Info.ingredients}
    recipeInstructions={Info.instructions}
    timeTaken={Info.time}
    recipeNotes={Info.notes}/>
    </div>
  )
}