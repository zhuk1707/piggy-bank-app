import React, {createContext, type ReactNode, StrictMode, useReducer} from 'react'
import {createRoot} from 'react-dom/client'
import App from './App.tsx'

export type Goal = {
  id: string,
  title: string,
  subtitle?: string,
  deposit?: number,
  goal: number
}

type GoalsList = {
  goals: Goal[],
  goalsCount: number
}

type StorageState = {
  goalsList: GoalsList,
  creatingGoalModal: boolean
}

type Action =
  | { type: "ADD_GOAL"; payload: Goal }
  | { type: "REMOVE_GOAL"; payload: string }
  | { type: "TOGGLE_MODAL" };

const reducer = (state: StorageState, action: Action): StorageState => {
  switch (action.type) {
    case "ADD_GOAL":
      return {
        ...state,
        goalsList: {
          goals: [...state.goalsList.goals, action.payload],
          goalsCount: state.goalsList.goalsCount + 1,
        },
      };
    case "REMOVE_GOAL":
      return {
        ...state,
        goalsList: {
          goals: state.goalsList.goals.filter(goal => goal.id !== action.payload),
          goalsCount: state.goalsList.goalsCount - 1,
        },
      };
    case "TOGGLE_MODAL":
      return {...state, creatingGoalModal: !state.creatingGoalModal};
    default:
      return state;
  }
};

const defaultStorage: StorageState = {
  goalsList: {
    goals: [
      {id: '1', title: "Trip", subtitle: "Travel opens up new horizons :)", deposit: 100, goal: 2500},
    ],
    goalsCount: 1
  },
  creatingGoalModal: false
}

const AppContext = createContext<{
  state: StorageState;
  dispatch: React.Dispatch<Action>
} | undefined>(undefined)


const AppProvider = ({children}: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, defaultStorage)

  return (
    <AppContext.Provider value={{state, dispatch}}>
      {children}
    </AppContext.Provider>
  )
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppProvider>
      <App/>
    </AppProvider>
  </StrictMode>,
)

export default AppContext