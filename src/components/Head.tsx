import { FC, useMemo } from 'react'
import { routesNames } from 'constants/routes'
import { Helmet } from 'react-helmet'
import { useLocation } from 'react-router-dom'

type Props = {}

const Head: FC<Props> = () => {
  const location = useLocation()

  const getTitle = () => {
    const routeKeys = Object.keys(routesNames)
    if (routeKeys.includes(location.pathname)) {
      const key = routeKeys.find(key => key === location.pathname)
      if (key) {
        return routesNames[key]
      }
    }

    return 'Tickets App'
  }

  const title = useMemo(
    () => getTitle(),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [location.pathname]
  )

  return (
    <Helmet>
      <title>{title}</title>
    </Helmet>
  )
}

export default Head
