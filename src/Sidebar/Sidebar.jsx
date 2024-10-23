// import Read from "../Read/Read";

const Sidebar = ({recipeQueue, handelRemove, preparedRecipe}) => {
    return (
        <div className="md:w-1/3 border-2 rounded">
            <div className="flex justify-center items-center my-4">
            <h1 className="text-3xl font-bold">Want To Cook:{recipeQueue.length}</h1>
            </div>
            <div className="divider"></div>
   <div className="overflow-x-auto">
      <table className="table">
      {/* head */}
       <thead>
        <tr>
          <th></th>
          <th>Name</th>
          <th>Time</th>
          <th>Calories</th>
          <th></th>
      </tr>
    </thead>
    <tbody>
    {
         recipeQueue.map((recipe, idx) => (
        <tr className="hover" key={idx}>
        <th>{idx + 1}</th>
        <td>{recipe.recipe_name}</td>
        <td>{recipe.preparing_time}</td>
        <td>{recipe.calories}</td>
        <td>
        <button onClick={ () => handelRemove(recipe.recipe_id)} className="btn bg-green-800 text-white hover:bg-green-700 transition-all duration-300 ease-in-out"> 
                           Cook
                        </button>
        </td>
      </tr>
         ))
    }
    </tbody>
  </table>
   </div>

   {/* current recipe */}
   <div className="flex justify-center items-center my-4">
            <h1 className="text-3xl font-bold">Currently Cook:{preparedRecipe.length}</h1>
            </div>
            <div className="divider"></div>
   <div className="overflow-x-auto">
      <table className="table">
      {/* head */}
       <thead>
        <tr>
          <th></th>
          <th>Name</th>
          <th>Time</th>
          <th>Calories</th>
      </tr>
    </thead>
    <tbody>
    {
         preparedRecipe.map((recipe, idx) => (
        <tr className="hover" key={idx}>
        <th>{idx + 1}</th>
        <td>{recipe.recipe_name}</td>
        <td>{recipe.preparing_time}</td>
        <td>{recipe.calories}</td>
      </tr>
         ))
    }
    </tbody>
  </table>
   </div>
     </div>
    );
};

export default Sidebar;