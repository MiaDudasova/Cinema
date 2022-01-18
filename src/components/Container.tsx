import { FC, useState } from 'react'
import { Provider } from 'components/context'
import { Order, User as UserType } from 'types/types'
import { USER } from '../constants/demoData/Data'
import useLocalStorage from 'utils/hooks/useLocalStorage'

export type AppState = {
  user: UserType
  basket: Order[]
  films: Order[]
  onAddToBasket: (o: Order) => void
  onRemoveFromBasket: (id: number) => void
  onConfirmOrder: () => void
  onHandleUserFilms: () => void
}

type Props = {
  children: (props: AppState) => JSX.Element
}

const Container: FC<Props> = ({ children }) => {
  const [basket, setBasket] = useState<Order[]>([])
  const handleAddToBasket = (order: Order) => {
    setBasket(prevBasket => [...prevBasket, order])
  }

  const hrm = (id: number) => {
    const newBasket = basket.filter(o => o.filmId !== id)

    setBasket(newBasket)
  }

  const [user, setUser] = useState<UserType>(USER)

  const handleConfirmOrder = () => {
    setUser(prevUser => {
      return {
        ...prevUser,
        orders: [...prevUser.orders, ...basket],
      }
    })
    setBasket([])
  }

  const [films, setFilms] = useLocalStorage<Order[]>('film', [])

  const handleUserFilms = () => {
    document.body.classList.remove('oh')
    setFilms(prevFilms => {
      return [...basket, ...prevFilms]
    })
    setBasket([])
  }

  const appState: AppState = {
    user,
    basket,
    films,
    onAddToBasket: handleAddToBasket,
    onRemoveFromBasket: hrm,
    onConfirmOrder: handleConfirmOrder,
    onHandleUserFilms: handleUserFilms,
  }

  return <Provider value={appState}>{children(appState)}</Provider>
}

export default Container
