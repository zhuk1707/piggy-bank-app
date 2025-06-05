import './App.css'
import Dashboard from './components/Dashboard/Dashboard.tsx';
import Footer from './components/Footer/Footer.tsx';
import Header from "./components/Header/Header.tsx";
import CardsContainer from "./components/СardContainer/CardsContainer.tsx";
import {useState} from "react";
import Modal from "./components/Modal/Modal.tsx";

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <Header/>

      <div className="container">

        <button
          style={{width: "100%"}}
          onClick={() => setIsModalOpen(true)}
        >Open</button>
      </div>

      {isModalOpen &&
        <Modal
          title={"Creating a goal"}
          onClose={() => setIsModalOpen(false)}
        >
          <p>some</p>
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

