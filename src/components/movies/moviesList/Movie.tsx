import { FC } from 'react'
import { Movie as MovieType } from 'types/types'
import style from 'components/movies/moviesList/movie/Movie.module.scss'
import { Link } from 'react-router-dom'

type Props = {
  movie: MovieType
}

const Movie: FC<Props> = ({ movie }) => {
  return (
    <Link
      to={`/movies/movie/${movie.id}`}
      className={style.movie}
      onClick={() => document.body.classList.add('oh')}
    >
      <div
        className={style.bgImg}
        style={{ backgroundImage: `url(${movie.img})` }}
      />
      <div className={style.overlay}>
        <span className={style.title}>{movie.name}</span>
      </div>
    </Link>
  )
}

export default Movie
