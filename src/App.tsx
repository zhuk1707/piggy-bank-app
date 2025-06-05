import './App.css'
import Dashboard from './components/Dashboard/Dashboard.tsx';
import Footer from './components/Footer/Footer.tsx';
import Header from "./components/Header/Header.tsx";
import CardsContainer from "./components/СardContainer/CardsContainer.tsx";
import {useContext} from "react";
import Modal from "./components/Modal/Modal.tsx";
import AppContext from "./main.tsx";
import Button from "./components/Button/Button.tsx";

export default function App() {
  const context = useContext(AppContext)

  if (!context) {
    throw new Error("AppContext must be used within an AppProvider")
  }

  const {storage, updateStorage} = context

  const openModal = () => {
    updateStorage({...storage, creatingGoalModal: true})
  }

  const closeModal = () => {
    updateStorage({...storage, creatingGoalModal: false})
  }

  const addGoal = () => {
    const getRandomMultipleOf100 = (): number => {
      const min = 100;
      const max = 5000;
      return Math.floor(Math.random() * ((max - min) / 100 + 1)) * 100 + min;
    };

    const newGoal = {
      title: "New Goal",
      goal: getRandomMultipleOf100(),
      deposit: getRandomMultipleOf100()
    }

    updateStorage({
      ...storage,
      goalsList: {
        goals: [...storage.goalsList.goals, newGoal],
        goalsCount: storage.goalsList.goalsCount + 1
      }
    })
  }

  return (
    <>
      <Header/>

      <div className="container">

        <button
          style={{width: "100%"}}
          onClick={addGoal}
        >Create Goal
        </button>
      </div>

      {storage.creatingGoalModal &&
        <Modal
          title={"Creating a goal"}
          onClose={closeModal}
        >
          <Button
            title={'Ok'}
            onClick={() => {
              addGoal()
              closeModal()
            }}/>
        </Modal>}

      <main className="main">
        <div className="container">
          <CardsContainer/>
          <Dashboard/>
        </div>
      </main>

      <Footer/>
    </>
  );
}

