import './App.css'
import Header from "./components/Header/Header.tsx";
import CardsContainer from "./components/СardContainer/CardsContainer.tsx";

function App() {

  return (
    <>
      <Header/>

      <main className="main">
        <div className="container">

          <CardsContainer/>

        </div>


      </main>
    </>
  )
}

export default App
