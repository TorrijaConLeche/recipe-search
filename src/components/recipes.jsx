// WARNING: CHECK NAMES IN THE MAP TO SHOW DATA
/*    NEW NAMES:
        id: recipe.idMeal,
        meal: recipe.strMeal,
        recipeimg: recipe.strMealThumb,
        category: recipe.strCategory,
        country: recipe.strArea
    */

export function ListOfRecipes({ recipes }) {
  return (

    <ul>
      {
        recipes.map(recipe => (
          <div className='recipebox'>
            <li key={recipe.id}>
              <h2>{recipe.meal}</h2>
              <h3>{recipe.country}</h3>
              <div className="recipegrid">
                <img className='thumb' src={recipe.recipeimg} alt={recipe.strMeal} />
                <p>{recipe.instructions}</p>
                <p>{recipe.youtube}</p>
              </div>
            </li>
          </div>
        ))
      }
    </ul>


  )
}

export function NoRecipesResults() {

  return (
    <p>Recipes not found</p>
  )
}

export function Recipes({ recipes }) {
  const hasRecipes = recipes?.values != null // Dara true siempre que haya recetas

  return (
    hasRecipes
      ? <ListOfRecipes recipes={recipes} />
      : <NoRecipesResults />
  )
}

