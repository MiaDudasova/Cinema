import { FC } from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import routes from 'constants/routes'
import Movies from 'components/Movies'
import Cinemas from 'components/Cinemas'
import Basket from 'components/Basket'
import { useLocation } from 'react-router'
import MovieDetail from './movies/moviesList/movie/MovieDetail'
import Order from 'components/Order'
import Actors from './Actors'
import User from 'components/User'
import CinemaDetail from 'components/cinemas/CinemaDetail'

type Props = {}

const AuthorizedRoutes: FC<Props> = () => {
  const location = useLocation()
  const state = location.state as { backgroundLocation?: Location }

  return (
    <Routes location={state?.backgroundLocation || location}>
      <Route path='/' element={<Navigate replace to={routes.MOVIES} />} />
      <Route path={routes.MOVIES} element={<Movies />} />
      <Route path={routes.CINEMAS} element={<Cinemas />} />
      <Route path={routes.BASKET} element={<Basket />} />
      <Route path={`${routes.USER}/orders`}>
        <Route path=':userId' element={<User />} />
      </Route>
      <Route path={`${routes.CINEMAS}/cinema`} element={<Cinemas />}>
        <Route path=':cinemaId' element={<CinemaDetail />} />
        <Route path={`:cinemaId/movie`} element={<CinemaDetail />}>
          <Route path=':movieId' element={<MovieDetail />} />
        </Route>
      </Route>
      <Route path={routes.ORDER} element={<Order />}>
        <Route path=':movieId' element={<Order />} />
      </Route>
      <Route path={`${routes.MOVIES}/movie`} element={<Movies />}>
        <Route path=':movieId' element={<MovieDetail />} />
      </Route>
      <Route path={`${routes.ACTORS}/actor`} element={<Actors />}>
        <Route path=':actorId' element={<Actors />} />
      </Route>
    </Routes>
  )
}

export default AuthorizedRoutes
