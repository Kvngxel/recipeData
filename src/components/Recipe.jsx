import React from "react";

function Recipe (props){
    return <div className="container mx-auto bg-gray-200 rounded-xl shadow border p-8 m-10">
    <p className="text-4xl text-green-700 font-Georgia mb-5">
      {props.recipeName}
    </p>
    <img className="scale-100" src={props.recipeImage} />
    <p className="text-gray-500 text-lg">
      {props.recipeIngredients}
    </p>
    <p className="text-gray-500 text-lg">
      {props.recipeInstructions}
    </p>
    <p className="text-gray-500 text-lg">
      {props.recipeNotes}
    </p>
  </div>
}

export default Recipe;