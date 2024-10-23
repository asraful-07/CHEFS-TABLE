const Recipe = ({recipe, handelRecipe}) => {
    const {recipe_name, image, short_description, ingredients, preparing_time, calories} = recipe;
    return (
        <div className="p-4"> 
            <div className="card shadow-lg rounded-lg overflow-hidden">
                <figure>
                    <img
                        src={image}
                        alt={recipe_name}
                        className="w-full h-48 object-cover"
                    />
                </figure>
                <div className="card-body p-4">
                    <h2 className="card-title text-xl font-semibold mb-2">{recipe_name}</h2>
                    <p className="text-gray-600 mb-4">{short_description}</p>
                    <div className="divider"></div>
                    <h2 className="text-lg font-medium text-gray-800 mb-2">Ingredients:{ingredients.length}</h2>
                    <ul className="list-disc list-inside space-y-1"> 
                        {ingredients.map((ingredient, index) => (
                            <li key={index} className="text-gray-700">{ingredient}</li> 
                        ))}
                    </ul> 
                    <div className="flex items-center justify-between gap-2 mt-4">
                        <span className="text-gray-500"> <img className="w-6 mr-2 inline" src="https://img.icons8.com/?size=160&id=JNyY8t39Erji&format=png" alt="" />{preparing_time}</span>
                        <span className="text-gray-500"><img className="w-6 mr-2 inline" src="https://img.icons8.com/?size=60&id=60985&format=png" alt="" /> {calories} calories</span>
                    </div>
                    <div className="card-actions mt-4">
                        <button onClick={ () => handelRecipe(recipe)} className="btn bg-purple-800 text-white hover:bg-purple-700 transition-all duration-300 ease-in-out"> 
                            Want to Cook
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Recipe;
