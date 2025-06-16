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
import {addGoal} from "./feature/goalsSlice.ts";
import {v4 as uuidv4} from "uuid";
import {type ChangeEvent, useState} from "react";
import {type Goal} from "./feature/goalsSlice.ts";

export default function App() {
  const isModalOpen = useSelector((state: RootState) => state.modal.isModalOpen);
  const dispatch = useDispatch()

  const initFormData: Goal = {
    id: "",
    title: "",
    subtitle: "",
    goal: 0,
    deposit: 0,
  }

  const [formData, setFormData] = useState(initFormData);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const key = e.target.name as keyof typeof formData;
    setFormData({...formData, [key]: e.target.value});
  };

  const handleSubmit = () => {
    const uuid = uuidv4()

    dispatch(addGoal({
      id: uuid,
      title: formData.title,
      subtitle: formData.subtitle,
      deposit: formData.deposit,
      goal: formData.goal
    }))

    dispatch(toggleModal())
  }

  return (
    <>
      <Header/>

      {isModalOpen &&
        <Modal
          title={"Creating a goal"}
          onClose={() => dispatch(toggleModal())}
        >
          <form action="" className='createGoalForm'>
            <div className={'row'} key="title">
              <label htmlFor="title">Title</label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
              />
            </div>
            <div className={'row'} key="subtitle">
              <label htmlFor="subtitle">Subtitle</label>
              <input
                type="text"
                name="subtitle"
                value={formData.subtitle}
                onChange={handleChange}
              />
            </div>
            <div className={'row'} key="deposit">
              <label htmlFor="deposit">Deposit</label>
              <input
                type="number"
                name="deposit"
                value={formData.deposit}
                onChange={handleChange}
              />
            </div>
            <div className={'row'} key="goal">
              <label htmlFor="goal">Goal</label>
              <input
                type="number"
                name="goal"
                value={formData.goal}
                onChange={handleChange}
              />
            </div>
          </form>


          <Button
            title={'Confirm'}
            onClick={handleSubmit}
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

