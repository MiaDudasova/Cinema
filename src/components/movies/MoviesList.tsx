import { FC, useEffect, useState } from 'react'
import { Movie as MovieType } from 'types/types'
import Movie from 'components/movies/moviesList/Movie'
import style from 'components/movies/moviesList/MoviesList.module.scss'
import { Outlet } from 'react-router'
import axios from 'axios'

type Props = {
  movies: MovieType[]
}

const MoviesList: FC<Props> = ({ movies }) => {
  const [text, setText] = useState("")

  useEffect(()=>{
    axios.get("http://localhost:3010/movies").then(res => setText(res.data))
  },[])

  console.log(text)

  return (
    <div className={style.list}>
      {movies.map(movie => (
        <Movie key={movie.id} movie={movie} />
      ))}
      <Outlet />
    </div>
  )
}

export default MoviesList
