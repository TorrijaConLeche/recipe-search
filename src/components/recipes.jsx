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
            <li className={recipe.id} key={recipe.id}>
              <h2>{recipe.meal}</h2>
              <h3>{recipe.country}</h3>
              <div className="recipegrid">
                <div id='test'>
                <img className='thumb' src={recipe.recipeimg} alt={recipe.strMeal} />
                </div>
                <div id="test2" >
                <a href={recipe.youtube}>
                  <img id='ytlogo' src='https://cdn-icons-png.flaticon.com/512/1384/1384012.png' alt="Youtube logo"/>
                </a>
                <h3>Watch on youtube</h3>
                <p>{recipe.instructions}</p>
                </div>

               
                
                
                
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

