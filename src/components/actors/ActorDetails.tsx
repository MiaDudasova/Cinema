import { ACTORS, MOVIES } from "constants/demoData/Data"
import { FC, useEffect, useState } from "react"
import { useParams } from "react-router"
import style from './actordetails/ActorDetails.module.scss'
import routes from 'constants/routes'
import { Link } from 'react-router-dom'
import { Actor } from "types/types"
import axios from "axios"
import { useLocation } from "react-router"
import { useAppContainer } from "components/context"

type Props = {}

const ActorDetails: FC<Props> = () => {
  const params = useParams()
  const { ip } = useAppContainer()
  const location = useLocation()
  const [actor, setActor] = useState<Actor>()
  const getActor = () => {
    axios.get(`http://${ip}:3010/actor?actorid=${params.actorId}`).then(res => setActor(res.data[0]))
  }

  console.log(location)

  if (location.pathname.search('/actors/actor') != -1) {
    document.body.classList.add('hide')
    console.log("funguje")
  }

  useEffect(() => {
    getActor()
  }, [])

  return (
    <div>
      {!!actor && (
        <>
          <div className={style.content}>
            <div className={style.wrap}>
              <div className={style.name}>
              {actor.name}
            </div>
            <div style={{ backgroundImage: `url(${actor.img})` }} className={style.image} />
            </div>
            <div className={style.wrap}>
              <div className={style.agewrapper}>
                <span className={style.header}>Age</span>
                <span className={style.value}>{actor.age}</span>
              </div>
              <div className={style.descwrapper}>
                <span className={style.header}>Short description</span>
                <span className={style.value}>{actor.desc}</span>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default ActorDetails