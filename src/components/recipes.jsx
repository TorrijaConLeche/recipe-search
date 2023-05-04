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
              <h2 className="mealname">{recipe.meal}</h2>

              <div className='mealinfo'>
                <h3 className='mealcountry'>{recipe.country}</h3>
                <h3 className='mealcountry'>{recipe.category}</h3>
                <a id='ytlogo' href={recipe.youtube}>
                  <img src='/youtube.png' alt="Youtube logo"/>
                </a>
              </div>
              

              <div className="recipegrid">

                <div id='test'>
                 <img className='thumb' src={recipe.recipeimg} alt={recipe.strMeal} />
                </div>

                <div id="test2" >
                 
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
    <div className="norecipesfound">
      <p >Recipes not found</p>
    </div>
    
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

