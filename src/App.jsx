import React from "react";
import Recipe from "./components/Recipe"
import Info from "./components/RecipeInfo"
import Navbar from "./components/Navbar";

export default function App() {
  return (<div>
    <Navbar/>
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