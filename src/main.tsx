import {createContext, type ReactNode, StrictMode, useState} from 'react'
import {createRoot} from 'react-dom/client'
import App from './App.tsx'

type Goal = {
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

const defaultStorage: StorageState = {
  goalsList: {
    goals: [
      {title: "Trip", subtitle: "Travel opens up new horizons :)", deposit: 100, goal: 2500},
      // {title: "PC", deposit: 0, goal: 3000},
      // {title: "Vans", subtitle: "New shoes", deposit: 5, goal: 70},
      // {title: "Car", deposit: 8000, goal: 16000},
    ],
    goalsCount: 4
  },
  creatingGoalModal: false
}

// Создаем контекст с пустым значением по умолчанию
const AppContext = createContext<{
  storage: StorageState;
  updateStorage: (newStorage: StorageState) => void
} | undefined>(undefined)


const AppProvider = ({children}: { children: ReactNode }) => {
  const [storage, setStorage] = useState(defaultStorage)

  const updateStorage = (newStorage: StorageState) => {
    setStorage(newStorage)
  }

  return (
    <AppContext.Provider value={{storage, updateStorage}}>
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