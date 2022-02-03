import { FC, useState } from 'react'
import { useParams } from 'react-router'
import style from 'components/order/Order.module.scss'
import { CINEMAS, MOVIES } from 'constants/demoData/Data'
import { useAppContainer } from './context'
import { Link } from 'react-router-dom'
import routes from 'constants/routes'

type Props = {}

const Order: FC<Props> = () => {
  const { onAddToBasket } = useAppContainer()
  const params = useParams()
  const movie = MOVIES.find(movie => movie.id === Number(params.movieId))
  const cinemaOptions = movie?.cinemas.map(cinema =>
    CINEMAS.find(c => c.id === cinema)
  )

  const getCinemaId = () => {
    if (!!cinemaOptions && Array.isArray(cinemaOptions)) {
      return cinemaOptions[0]?.id as number
    }

    return 0
  }

  const [selectedCinema, setSelectedCinema] = useState<number>(getCinemaId())
  const [ticketAmount, setTicketsAmount] = useState<number>(1)
  const [shouldSuggestRedirect, setShouldSuggestRedirect] =
    useState<boolean>(false)

  const handleAddToBasket = () => {
    onAddToBasket({
      filmId: movie?.id as number,
      price: movie?.price as number,
      quantity: ticketAmount,
      cinema: selectedCinema,
    })
    setShouldSuggestRedirect(true)
  }

  return (
    <div className={style.orderWrapper}>
      <div className={style.form}>
        <div className={style.title}>Reserve your ticket now</div>
        <div className={style.selector}>
          <div className={style.block}>
            <span className={style.subTitle}>Select cinema</span>
            <select onChange={e => setSelectedCinema(Number(e.target.value))}>
              {cinemaOptions?.map(o => (
                <option value={o?.id} key={o?.id}>
                  {o?.city} - {o?.name}
                </option>
              ))}
            </select>
          </div>
          {!!movie && (
            <>
              <span
                className={style.subTitle}
                style={{ marginTop: 20, display: 'inline-block' }}
              >
                Movie
              </span>
              <div className={style.movieOption}>
                <div
                  className={style.image}
                  style={{ backgroundImage: `url(${movie.img})` }}
                />
                <div className={style.filmTitle}>{movie.name}</div>
                <input
                  type='number'
                  step={1}
                  max={10}
                  min={1}
                  value={ticketAmount}
                  onChange={e =>
                    setTicketsAmount(Math.round(Number(e.target.value)))
                  }
                />
                <div className={style.price}>
                  {movie.price * ticketAmount} €
                </div>
              </div>
            </>
          )}
          {shouldSuggestRedirect ? (
            <div className={style.suggestions}>
              <Link to={routes.MOVIES}>Continue browsing</Link>
              <Link to={routes.BASKET}>Go to basket</Link>
            </div>
          ) : (
            <div onClick={handleAddToBasket} className={style.button}>
              Add tickets to basket
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Order
