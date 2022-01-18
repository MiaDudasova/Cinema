import { FC } from 'react'
import style from 'components/cinemas/cinemaDetail/CinemaDetail.module.scss'
import { useNavigate } from 'react-router-dom'
import { Outlet, useParams } from 'react-router'
import { CINEMAS, MOVIES } from 'constants/demoData/Data'
import { useLocation } from 'react-router'
import { Link } from 'react-router-dom'
import { X } from 'react-feather'

type Props = {}

const CinemaDetail: FC<Props> = () => {
  const navigate = useNavigate()
  const { cinemaName } = useParams()

  const cinema = CINEMAS.filter(c => c.name === cinemaName)[0]
  const movies = MOVIES.filter(movie => movie.cinemas.includes(cinema.id))

  const handleClose = (e: any) => {
    if (e.target.className === style.cinemaDetail) {
      document.body.classList.remove('oh')
      navigate(-1)
    }
  }

  const location = useLocation()

  const handleCrossClick = () => {
    navigate(-1)
  }

  return (
    <div className={style.cinemaDetail} onClick={handleClose}>
      <div className={style.content}>
        <div onClick={handleCrossClick}>
          <X size={22} />
        </div>
        <div>
          {cinema.name}
        </div>
        <div className={style.wrapper}>
          {movies.map(movie => (
            <Link
              to={`${location.pathname}/movie/${movie.id}`}
              key={movie.id}
              className={style.movie}
            >
              {movie.name}
            </Link>
          ))}
        </div>
      </div>
      <Outlet/>
    </div>
  )
}

export default CinemaDetail
