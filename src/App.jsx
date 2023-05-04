import './App.css';
import { useRef, useEffect, useState } from 'react'
import { useRecipes } from './hooks/useRecipes'
import { Recipes } from './components/recipes'

function useSearch() {
  const [search, updateSearch] = useState('')
  const [error, setError] = useState(null)
  const isFirstInput = useRef(true)

  useEffect(() => {
    if (isFirstInput.current) {
      isFirstInput.current = search === ''
      return
    }

    if (search === '') {
      setError('Please input at least 1 character')
      return
    }

    if (search.match(/^\d+$/)) {
      setError('Please input letters')
      return
    }

    setError(null)
  }, [search])

  return { search, updateSearch, error }
}


function App() {
  const { search, updateSearch, error } = useSearch()
  const { recipes, getRecipes } = useRecipes({ search })

  const handleSubmit = (event) => {
    event.preventDefault()
    getRecipes()
  }

  const handleChange = (event) => {
    updateSearch(event.target.value)
  }


  return (
    <>
      <header>
        <h1 id='title'>Epic Recipe Search Engine</h1>
        <form onSubmit={handleSubmit}>
          <input onChange={handleChange} value={search} name='query' placeholder='Irish Roast Beef..' />
          <button type="submit" id='boton'>Search</button>
        </form>
        {error && <p>{error}</p>}
      </header>

      <main>
        <Recipes recipes={recipes} />
      </main >


    </>
  );
}

export default App;