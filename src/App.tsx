import './App.css'
import Dashboard from './components/Dashboard/Dashboard.tsx';
import Footer from './components/Footer/Footer.tsx';
import Header from "./components/Header/Header.tsx";
import CardsContainer from "./components/CardsContainer/CardsContainer.tsx";
import Modal from "./components/Modal/Modal.tsx";
import {toggleModal} from "./feature/modalSlice.ts";
import {useDispatch, useSelector} from "react-redux";
import type {RootState} from "./store/store.ts";
import Button from "./components/Button/Button.tsx";

export default function App() {
  const isModalOpen = useSelector((state: RootState) => state.modal.isModalOpen);

  const dispatch = useDispatch()

  return (
    <>
      <Header/>

      {isModalOpen &&
        <Modal
          title={"Creating a goal"}
          onClose={() => dispatch(toggleModal())}
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
            onClick={() => {
            }}
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

