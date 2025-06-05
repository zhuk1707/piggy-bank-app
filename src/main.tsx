import {createContext, StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import App from './App.tsx'

type Goal = {
  title: string,
  subtitle?:  string,
  deposit?: number,
  goal: number
}

type GoalsList = {
  goals: Goal[],
  goalsCount: number
}

type StorageState = {
  goalsList : GoalsList
}

const Storage: StorageState = {
  goalsList: {
    goals: [
      {title: "Trip", subtitle: "Travel opens up new horizons :)", deposit: 100, goal: 2500},
      {title: "PC", deposit: 0, goal: 3000},
      {title: "Vans", subtitle: "New shoes", deposit: 5, goal: 70},
      {title: "Car", deposit: 8000, goal: 16000},
    ],
    goalsCount: 4
  }
}



const AppContext = createContext(Storage)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppContext.Provider value = {Storage}>
      <App/>
    </AppContext.Provider>
  </StrictMode>,
)

export default AppContext