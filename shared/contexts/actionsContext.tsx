import React, { createContext, ReactNode, useContext } from 'react'

interface Action {
  id: string
  category: string
  description: string
  priority: number
}

type Actions = Action[]

interface ActionsContextValue {
  actions: Actions
}

const startingActionContext = {
  actions: [],
}

interface Props {
  children: ReactNode
  actions: Actions
}
export const ActionsContext = createContext<ActionsContextValue>(
  startingActionContext
)

export const ActionsProvider: React.FC<Props> = ({ children, actions }) => {
  return (
    <ActionsContext.Provider value={{ actions }}>
      {children}
    </ActionsContext.Provider>
  )
}
export const useActions: () => ActionsContextValue = () =>
  useContext(ActionsContext)
