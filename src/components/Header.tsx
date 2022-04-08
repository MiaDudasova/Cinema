import { FC, useState } from 'react'
import style from 'components/header/Header.module.scss'
import { Link } from 'react-router-dom'
import routes from 'constants/routes'
import logo from 'styles/images/logo.png'
import { useAppContainer } from './context'
import { availableThemes } from 'constants/themes'
import { Theme } from 'types/types'

type Props = {}

const Header: FC<Props> = () => {
  const { user, films, onChangeTheme } = useAppContainer()
  const step = 100 / availableThemes.length

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
            <div className={style.thees}>
            <input min={1} max={5} step={1} onChange={(e: any) => onChangeTheme(availableThemes[e.target.value])} type='range'/>
            <div className={style.slider} style={{right: step}}></div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Header
