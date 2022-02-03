import { FC, useEffect, useState } from 'react'
import MoviesList from './movies/MoviesList'
import { useLocation } from 'react-router'
import routes from 'constants/routes'
import axios from 'axios'
import { Movie } from 'types/types'
import useDebounce from 'utils/hooks/useDebounce'
import style from './movies/Movies.module.scss'
import { useAppContainer } from './context'

type Props = {}

const Movies: FC<Props> = () => {
  const { ip } = useAppContainer()
  const location = useLocation()
  const [movies, setMovies] = useState<Movie[]>([])
  const [loading, setLoading] = useState<boolean>(false)
  const [search, setSearch] = useState<string>('')


  const getMovies = () => {
    axios.get(`http://${ip}:3010/movies`).then(res => setMovies(res.data))
  }

  useEffect(() => {
    if (
      document.body.classList.contains('oh') &&
      location.pathname === routes.MOVIES
    ) {
      document.body.classList.remove('oh')
    }
  }, [location.pathname])

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      getMovies()
      setLoading(false)
    }, 1000)
  }, [])

  const debouncedQuery = useDebounce(search)

  useEffect(() => {
    if (debouncedQuery.length !== 0) {
      axios
        .get(`http://${ip}:3010/movies?search=${debouncedQuery}`)
        .then(res => setMovies(res.data))
    } else {
      axios.get(`http://${ip}:3010/movies`).then(res => setMovies(res.data))
    }
  }, [debouncedQuery])

  if (loading) {
    return <div>Loading</div>
  }

  return (
    <>
      <div className={style.searchbar}>
        <input
          type='text'
          value={search}
          onChange={e => setSearch(e.target.value)}
          placeholder='Search movie'
        />
      </div>
      <div style={{ display: 'flex', justifyContent: 'center' }} className={style.wrapper}>
        <MoviesList movies={movies} />
      </div>
    </>
  )
}

export default Movies