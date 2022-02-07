import { MOVIES } from 'constants/demoData/Data'
import { FC } from 'react'
import { X } from 'react-feather'
import { useAppContainer } from './context'
import style from 'components/basket/Basket.module.scss'

type Props = {}

const Basket: FC<Props> = () => {
  const { basket, onRemoveFromBasket, onHandleUserFilms } = useAppContainer()
  const movies = basket.map(o => MOVIES.find(m => m.id.toString() === o.filmId))
  const price = basket.map(o => o.price * o.quantity)

  const getTotalPrice = () => {
    let allPrice = 0

    price.forEach(function (value) {
      allPrice += value
    })

    return allPrice
  }

  const totalPrice = getTotalPrice()

  return (
    <div>
      <>
        {movies.map((p, index) => (
          <div key={index} className={style.item}>
            <div className={style.xd}>
              <div
                style={{ backgroundImage: `url(${p?.img})` }}
                className={style.image}
              />
              <div className={style.text}>
                <div className={style.xdd}>{p?.name}</div>
                <div className={style.xdd}>quantity = {basket.find(f => f.filmId === p?.id)?.quantity}</div>
                <div className={style.xdd}>price = {p?.price}</div>
                <div
                  className={style.xButton}
                  onClick={() => onRemoveFromBasket("as")}
                >
                  <X size={22} />
                </div>
              </div>
            </div>
          </div>
        ))}
      </>
      <div
        style={{ justifyContent: 'center', display: 'flex' }}
        onClick={() => onHandleUserFilms()}
      >
        Order for {totalPrice}$
      </div>
    </div>
  )
}

export default Basket
