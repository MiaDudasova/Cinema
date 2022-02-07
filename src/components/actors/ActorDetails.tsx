import { FC, useEffect, useState } from "react"
import { useParams } from "react-router"
import style from './actordetails/ActorDetails.module.scss'
import { IMDBActor } from "types/types"
import axios from "axios"
import { useLocation } from "react-router"

type Props = {}

const ActorDetails: FC<Props> = () => {
  const params = useParams()
  const location = useLocation()
  const [actor, setActor] = useState<IMDBActor>()

  const getActor = () => {
    axios.get(`https://imdb-api.com/en/API/Name/k_xive77dt/${params.actorId}`).then(res => setActor(res.data))
    console.log(actor);
  }

  if (location.pathname.search('/actors/actor') !== -1) {
    document.body.classList.add('hide')
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
            <div style={{ backgroundImage: `url(${actor.image})` }} className={style.image} />
            </div>
            <div className={style.wrap}>
              <div className={style.agewrapper}>
                <span className={style.header}>Age</span>
                <span className={style.value}>{actor.birthDate}</span>
              </div>
              <div className={style.descwrapper}>
                <span className={style.header}>Short description</span>
                <span className={style.value}>{actor.summary}</span>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default ActorDetails