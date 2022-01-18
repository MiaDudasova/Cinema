import { FC } from 'react'
import style from 'components/movies/moviesList/movie/movieDetail/MovieDetail.module.scss'
import routes from 'constants/routes'
import { Link, useNavigate } from 'react-router-dom'
import { X } from 'react-feather'
import { useParams } from 'react-router'
import { ACTORS, MOVIES } from 'constants/demoData/Data'
import { Rating } from 'react-simple-star-rating'

type Props = {}

const MovieDetail: FC<Props> = () => {
  const navigate = useNavigate()
  const params = useParams()

  const handleClose = (e: any) => {
    if (e.target.className === style.movieDetail) {
      document.body.classList.remove('oh')
      navigate(-1)
    }
  }

  const handleCrossClick = () => {
    navigate(-1)
  }

  const movie = MOVIES.find(movie => movie.id === Number(params.movieId))

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
                {movie.actors.map(actor => {
                  const movieActor = ACTORS.find(
                    defActor => defActor.id === actor
                  )

                  return (
                    <span key={movieActor?.id} className={style.smValue}>
                      <Link to={`${routes.ACTORS}/actor/${movieActor?.id}`}>
                        {movieActor?.name}
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
