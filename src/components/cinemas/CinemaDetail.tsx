import { FC, useEffect, useState } from 'react'
import style from 'components/cinemas/cinemaDetail/CinemaDetail.module.scss'
import { useNavigate } from 'react-router-dom'
import { Outlet, useParams } from 'react-router'
import { CINEMAS, MOVIES } from 'constants/demoData/Data'
import { useLocation } from 'react-router'
import { Link } from 'react-router-dom'
import { X } from 'react-feather'
import { Cinema } from 'types/types'
import axios from 'axios'
import { useAppContainer } from 'components/context'

type Props = {}

const CinemaDetail: FC<Props> = () => {
  const navigate = useNavigate()
  const [ cinema, setCinema ] = useState<Cinema>()
  const params = useParams()
  const { ip } = useAppContainer()

  useEffect(() => {
    getCinema()
  }, [])

  const getCinema = () => {
    axios.get(`http://${ip}:3010/cinema?cinemaid=${params.cinemaId}`).then(res => setCinema(res.data[0]))
    console.log(cinema)
  }
  console.log(cinema)

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

  const movies = MOVIES.filter(movie => movie.cinemas.includes(Number(cinema?.id)))

  return (
    <div className={style.cinemaDetail} onClick={handleClose}>
      <div className={style.content}>
        <div onClick={handleCrossClick}>
          <X size={22} />
        </div>
        <div>
          {cinema?.name}
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
