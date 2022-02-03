import { FC, useState, useEffect } from 'react'
import style from 'components/movies/moviesList/movie/movieDetail/MovieDetail.module.scss'
import routes from 'constants/routes'
import { Link, useNavigate } from 'react-router-dom'
import { X } from 'react-feather'
import { useParams } from 'react-router'
import { ACTORS } from 'constants/demoData/Data'
import { Rating } from 'react-simple-star-rating'
import axios from "axios"
import { Actor, Movie } from 'types/types'

type Props = {}

const MovieDetail: FC<Props> = () => {
  const navigate = useNavigate()
  const params = useParams()

  const [movie, setMovie] = useState<Movie>()
  const [actor, setActor] = useState<Actor[]>([])

  const handleClose = (e: any) => {
    if (e.target.className === style.movieDetail) {
      document.body.classList.remove('oh')
      navigate(-1)
    }
  }

  const getMovies = () => {
      axios
        .get(`http://localhost:3010/movies/movie?movieid=${params.movieId}`)
        .then(res => setMovie(res.data[0]))
  }

  useEffect(() => {
    getMovies()
    getActor(Number(params.movieId))
  }, [])

  const handleCrossClick = () => {
    navigate(-1)
  }

  const getActor = (id: Number) => {
    axios
      .get(`http://localhost:3010/actors?movieid=${id}`)
      .then(res => setActor(res.data))
  }

  return (
    <div className={style.movieDetail} onClick={handleClose}>
      <div className={style.content}>
        <div className={style.cross}>
          <div
            onClick={handleCrossClick}
          >
            <X size={22} />
          </div>
        </div>
        {!!movie && (
          <div className={style.wrapper}>
            <div className={style.header}>{movie.name}</div>
            <div className={style.contentWrapper}>
              <div className={style.generalDesc}>
                <span className={style.smTitle}>Director</span>
                <span className={style.smValue}>{movie.director}</span>
                <span className={style.smTitle}>Rating</span>
                <span className={style.smValue}>
                  <Rating
                    ratingValue={(movie.rating / 5) * 100}
                    readonly
                    size={16}
                  />
                </span>
                <span className={style.smTitle}>Cast</span>
                {actor.map(actors => {
                  return (
                    <span key={actors?.id} className={style.smValue}>
                      <Link to={`${routes.ACTORS}/actor/${actors?.id}`}>
                        {actors?.name}
                      </Link>
                    </span>
                  )
                })}
                <span className={style.smTitle}>Short description</span>
                <span className={style.smValue}>{movie.desc}</span>
              </div>
              <div
                style={{ backgroundImage: `url(${movie.img})` }}
                className={style.image}
              />
            </div>
            <Link to={`${routes.ORDER}/${movie.id}`} className={style.button}>
              Buy tickets
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}

export default MovieDetail
