
import withResults from './response.json'
import withoutResults from './no-results.json'
import { useState } from 'react'

export function useRecipes({ search }) {
    const [responseRecipes, setResponseRecipes] = useState([])

    const recipes = responseRecipes.meals // Define recipes which is an object with the data

    const mappedRecipes = recipes?.map(recipe => ({
        id: recipe.idMeal,
        meal: recipe.strMeal,
        recipeimg: recipe.strMealThumb,
        category: recipe.strCategory,
        country: recipe.strArea,
        instructions: recipe.strInstructions,
        youtube: strYoutube
    }))

    const getRecipes = () => {
        if (search) {
            // setResponseRecipes(withResults)
            fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
                .then(res => res.json())
                .then(json => {
                    setResponseRecipes(json)
                })
        } else {
            setResponseRecipes(withoutResults)
        }
    }
    return { recipes: mappedRecipes, getRecipes }
}


