import React, { useContext, FC } from 'react'
import type { AppState } from 'components/Container'

// @ts-ignore
const AppContext = React.createContext<AppState>({})

type Props = {
  value: AppState
  children: React.ReactNode
}

export const Provider: FC<Props> = ({ value, children }) => (
  <AppContext.Provider value={value}>{children}</AppContext.Provider>
)

export const useAppContainer = () => {
  return useContext(AppContext)
}
