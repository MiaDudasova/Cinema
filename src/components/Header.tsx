import { FC, useState } from 'react'
import style from 'components/header/Header.module.scss'
import { Link } from 'react-router-dom'
import routes from 'constants/routes'
import logo from 'styles/images/logo.png'
import { useAppContainer } from './context'

type Props = {}

const Header: FC<Props> = () => {
  const { user, films } = useAppContainer()

  const [isUserInfoShown, setIsUserInfoShown] = useState<boolean>(false)

  return (
    <div className={style.header}>
      <Link
        className={style.logo}
        style={{ backgroundImage: `url(${logo})` }}
        to={routes.MOVIES}
      />
      <div className={style.user}>
        <div onClick={() => setIsUserInfoShown(!isUserInfoShown)}>
          {user.name}
        </div>
        {isUserInfoShown && (
          <div className={style.history}>
            <Link to={`${routes.USER}/orders/${user.userId}`}>Kosik</Link>
            {films.length}
          </div>
        )}
      </div>
    </div>
  )
}

export default Header
