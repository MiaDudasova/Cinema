import { FC } from 'react'
import ActorDetails from './actors/ActorDetails'

type Props = {}

const Actors: FC<Props> = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <ActorDetails />
    </div>
  )
}

export default Actors
