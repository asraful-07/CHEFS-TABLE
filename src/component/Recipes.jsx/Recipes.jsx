import { useEffect } from "react";
import { useState } from "react";
import Recipe from "../../Recipe/Recipe";

const Recipes = ({handelRecipe}) => {
    const [recipes, setRecipes] = useState([])

    useEffect( () => {
        fetch('recipes.json')
        .then(res => res.json())
        .then(data => setRecipes(data))
    },[])

    return (
        <div className="md:flex md:w-2/3">
           {/* <h1>Recipes: {recipes.length}</h1>  */}
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-4">
          {
            recipes.map( (recipe, idx) => <Recipe key={idx} recipe={recipe} handelRecipe={handelRecipe}></Recipe>)
           }
          </div>
        </div>
    );
};

export default Recipes;