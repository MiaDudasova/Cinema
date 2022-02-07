import { FC, useState, useEffect } from 'react'
import style from 'components/movies/moviesList/movie/movieDetail/MovieDetail.module.scss'
import routes from 'constants/routes'
import { Link, useNavigate } from 'react-router-dom'
import { X } from 'react-feather'
import { useParams } from 'react-router'
import { Rating } from 'react-simple-star-rating'
import axios from "axios"
import { IActor, IMDBFilm } from 'types/types'

type Props = {}

const MovieDetail: FC<Props> = () => {
  const navigate = useNavigate()
  const params = useParams()
  const [film, setFilm] = useState<IMDBFilm>()
  const [actor, setActor] = useState<IActor[]>([])

  const handleClose = (e: any) => {
    if (e.target.className === style.movieDetail) {
      document.body.classList.remove('oh')
      navigate(-1)
    }
  }

  const handleCrossClick = () => {
    navigate(-1)
  }
  
  const getFilmFromId = () => {
    axios
    .get(`https://imdb-api.com/en/API/Title/k_8f0n0zo5/${params.movieId}`)
    .then(res => setFilm(res.data))
    axios
    .get(`https://imdb-api.com/en/API/Title/k_8f0n0zo5/${params.movieId}`)
    .then(res => setActor(res.data.actorList))
  }
  
  useEffect(() => {
    getFilmFromId()
  }, [])

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
        {!!film && (
          <div className={style.wrapper}>
            <div className={style.header}>{film?.title}</div>
            <div className={style.contentWrapper}>
              <div className={style.generalDesc}>
                <span className={style.smTitle}>Director</span>
                <span className={style.smValue}>{film?.directors}</span>
                <span className={style.smTitle}>Rating</span>
                <span className={style.smValue}>
                  <Rating
                    ratingValue={(Number(film?.imDbRating) / 5) * 100}
                    readonly
                    size={16}
                  />
                </span>
                <span className={style.smTitle}>Cast</span>
                {actor.slice(0,3).map(actors => {
                  console.log(actors);
                  return (
                    <span key={actors.id} className={style.smValue}>
                      <Link to={`${routes.ACTORS}/actor/${actors?.id}`}>
                        {actors?.name}
                      </Link>
                    </span>
                  )
                })}
                <span className={style.smTitle}>Short description</span>
                <span className={style.smValue}>{film.plot}</span>
              </div>
              <div
                style={{ backgroundImage: `url(${film.image})` }}
                className={style.image}
              />
            </div>
            <Link to={`${routes.ORDER}/${film.id}`} className={style.button}>
              Buy tickets
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}

export default MovieDetail
