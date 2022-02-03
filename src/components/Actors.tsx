import { FC } from 'react'
import { AlignJustify } from 'react-feather'
import ActorDetails from './actors/ActorDetails'
import style from './actors/Actors.module.scss'

type Props = {}

const Actors: FC<Props> = () => {
  return (
    <div className={style.wrap}>
      <ActorDetails />
    </div>
  )
}

export default Actors
