import React from "react";

function Recipe (props){
    return <div className="container mx-auto bg-gray-200 shadow border px-10 py-8 m-10 flex">
        <div className="scale-100">
          <img className="w-30 p-4" src={props.recipeImage} />
        </div>
        <div className="w-50 p-5 ml-3rem">
          <p className="text-4xl text-black font-semibold font-montserrat mb-5">
            {props.recipeName}
          </p>
          <p className="text-black font-montserrat text-xl ml-3">
            Ingredients:
          </p>
          <p className="text-gray-500 font-montserrat text-20 ml-8 mt-3 mb-3">
            {props.recipeIngredients}
          </p>
          <p className="text-black font-montserrat text-50 ml-3 mt-4">
            Time taken: {props.timeTaken}
          </p>      
          <p className="text-black font-montserrat text-50 ml-3 mt-2">
            Notes: {props.recipeNotes}
          </p>
          <p className="text-black font-montserrat font-bold text-50 ml-3 mt-2">
            {props.recipeInstructions}            
          </p>
        </div>
      
      </div>
}

export default Recipe;