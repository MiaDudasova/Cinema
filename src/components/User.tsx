import { MOVIES } from 'constants/demoData/Data'
import { FC } from 'react'
import { useAppContainer } from './context'
import style from './user/User.module.scss'

type Props = {}

const User: FC<Props> = () => {
  const { films } = useAppContainer()

  return (
    <div>
      {films.map((p, index) => (
        <div key={index} className={style.item}>
          <div className={style.xd}>
            <div
              style={{ backgroundImage: `url(${MOVIES[1].img})` }}
              className={style.image}
            />
            <div className={style.text}>
              <div className={style.xdd}>{MOVIES[1].name}</div>
              <div className={style.xdd}>quantity = {p.quantity}</div>
              <div className={style.xdd}>price = {p.price}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default User
