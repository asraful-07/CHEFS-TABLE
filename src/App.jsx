import { useState } from 'react'
import './App.css'
import Header from './component/Header/Header'
import Recipes from './component/Recipes.jsx/Recipes'
import Sidebar from './Sidebar/Sidebar'

function App() {
 

  const [recipeQueue, setRecipeQueue] = useState([])

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
    <main className='container mx-auto p-6 flex flex-col md:flex-row gap-6'>
    <Recipes handelRecipe={handelRecipe}></Recipes>
    <Sidebar recipeQueue={recipeQueue}></Sidebar>
      </main>  
    </>
  )
}

export default App
