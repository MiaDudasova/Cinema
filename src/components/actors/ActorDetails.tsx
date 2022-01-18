import { ACTORS, MOVIES } from "constants/demoData/Data"
import { FC } from "react"
import { useParams } from "react-router"
import style from './actordetails/ActorDetails.module.scss'
import routes from 'constants/routes'
import { Link } from 'react-router-dom'

type Props = {}

const ActorDetails: FC<Props> = () => {
  const params = useParams()
  const actor = ACTORS.find(actor => actor.id === Number(params.actorId))
  const movie = MOVIES.filter(movie => movie.actors.includes(Number(actor?.id)))
  return (
    <div>
      {!!actor && (
        <>
          <div>
            {actor.name}
          </div>
          <div style={{ backgroundImage: `url(${actor.img})` }} className={style.image} />
          {actor.age}
          {actor.desc}
        </>
      )}
      {movie.map(actors => {
        return (
          <span key={actors.id}>
            <Link to={`${routes.MOVIES}/movie/${actors?.id}`} >{actors?.name}</Link>
          </span>
        )
      })}
    </div>
  )
}

export default ActorDetails