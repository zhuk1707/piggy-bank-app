import './App.css'
import Dashboard from './components/Dashboard/Dashboard.tsx';
import Footer from './components/Footer/Footer.tsx';
import Header from "./components/Header/Header.tsx";
import CardsContainer from "./components/CardsContainer/CardsContainer.tsx";
import {useContext} from "react";
import Modal from "./components/Modal/Modal.tsx";
import AppContext from "./main.tsx";
import Button from "./components/Button/Button.tsx";

export default function App() {
  const context = useContext(AppContext)

  if (!context) {
    throw new Error("AppContext must be used within an AppProvider")
  }

  const {state, dispatch} = context


  const addGoal = () => {
    //todo kick it
    const getRandomMultipleOf100 = (): number => {
      const min = 100;
      const max = 5000;
      return Math.floor(Math.random() * ((max - min) / 100 + 1)) * 100 + min;
    };

    const newGoal = {
      id: (getRandomMultipleOf100()*1707).toString(),
      title: (getRandomMultipleOf100() * 1000).toString(16),
      subtitle: 'lorem ipsum dolor sit!',
      goal: getRandomMultipleOf100(),
      deposit: getRandomMultipleOf100()
    }

    dispatch({
      type: "ADD_GOAL",
      payload: newGoal
    })
  }

  const handleCreating = () => {
    addGoal()
    dispatch({
      type: 'TOGGLE_MODAL'
    })
  }

  return (
    <>
      <Header/>

      {state.creatingGoalModal &&
        <Modal
          title={"Creating a goal"}
          onClose={() => {
            dispatch({
              type: 'TOGGLE_MODAL'
            })
          }}
        >

          <form action="">
            <label htmlFor=""><h1>Title</h1></label>
            <input type="text"/>
            <label htmlFor=""><h1>Subtitle</h1></label>
            <input type="text"/>
            <label htmlFor=""><h1>Goal</h1></label>
            <input type="text"/>
            <label htmlFor=""><h1>Deposit</h1></label>
            <input type="text"/>
          </form>

          <Button
            title={'Ok!'}
            onClick={handleCreating}
          />
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

