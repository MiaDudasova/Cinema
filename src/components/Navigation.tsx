import { FC } from 'react'
import routes from 'constants/routes'
import { Link, useLocation } from 'react-router-dom'
import style from 'components/navigation/Navigation.module.scss'

type Props = {}

const Navigation: FC<Props> = () => {
  const location = useLocation()

  return (
    <div className={style.navigation}>
      <Link
        className={
          location.pathname.includes(routes.MOVIES) ? style.active : ''
        }
        to={routes.MOVIES}
      >
        Movies
      </Link>
      <Link
        className={
          location.pathname.includes(routes.CINEMAS) ? style.active : ''
        }
        to={routes.CINEMAS}
      >
        Cinemas
      </Link>
      <Link
        className={
          location.pathname.includes(routes.BASKET) ? style.active : ''
        }
        to={routes.BASKET}
      >
        Basket
      </Link>
    </div>
  )
}

export default Navigation
