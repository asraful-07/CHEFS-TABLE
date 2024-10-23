import { useState } from 'react'
import './App.css'
import Header from './component/Header/Header'
import Recipes from './component/Recipes.jsx/Recipes'
import Sidebar from './Sidebar/Sidebar'

function App() {
 

  const [recipeQueue, setRecipeQueue] = useState([])
  const [preparedRecipe, setPreparedRecipe] = useState([])
  

  const handelRemove = id => {
    // find which recipe to remove
    const deleteRecipe = recipeQueue.find( recipe => recipe.recipe_id === id)

    // remove from want to cook remove
    const updated = recipeQueue.filter(recipe => recipe.recipe_id !== id)
    setRecipeQueue(updated)
    setPreparedRecipe([...preparedRecipe, deleteRecipe])
  }

  const handelRecipe = recipe => {
    // console.log('uami testi ummmm', recipe)
    const isExist = recipeQueue.find( p => p.recipe_id === recipe.recipe_id)
    if(!isExist){
      const newRecipeQueue = [...recipeQueue, recipe]
      setRecipeQueue(newRecipeQueue);
    }
    else{
      alert('Recipe already exists in the queue')
    }
    
  }



  return (
    <>
    <Header></Header>
    <div className='text-center w-3/4 mx-auto'>
     <h2 className='text-4xl font-bold'> Our Recipe</h2>
     <p className='my-2 opacity-60'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet aut temporibus, illo culpa, cupiditate, consequatur explicabo nostrum blanditiis repellat necessitatibus atque debitis quisquam adipisci. Eaque tenetur dolores nam harum a. Ipsum mollitia quisquam magni cum beatae! Adipisci culpa expedita quaerat.</p>
    </div>
    <main className='container mx-auto p-6 flex flex-col md:flex-row gap-6'>
    <Recipes handelRecipe={handelRecipe}></Recipes>
    <Sidebar recipeQueue={recipeQueue} handelRemove={handelRemove} preparedRecipe={preparedRecipe}></Sidebar>
      </main>  
    </>
  )
}

export default App
