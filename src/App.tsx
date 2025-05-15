import './App.css'

function App() {

  return (
    <>

      <header className="header">
        <div className="container">
          <div className="header__inner">
            <div className="logo logo_header">piggy-bank</div>
            <button className="btn btn_header">Create a Goal <span>+</span></button>
          </div>
        </div>
      </header>

      <main className="main">
        <div className="container">

          <div className="cards">
            <div className="card">
              <div className="card__header">
                <div className="card__desc">
                  <div className="card__title">Dream Trip</div>
                  <div className="card__subtitle">Travel opens up new horizons</div>
                </div>
                <div className="card__controls">
                  <button className="btn btn_card btn_options">...</button>
                  <div className="popup popup_option popup_hidden">
                    <button className="btn">Edit</button>
                    <button className="btn">Delete</button>
                  </div>
                  <button className="btn btn_card btn_take">Take <span>-</span></button>
                  <button className="btn btn_card btn_add">Add <span>+</span></button>
                </div>
              </div>

              <div className="card__progress">
                <div className="card__progress-bar card__progress-bar_stroke">
                  <div className="card__progress-bar card__progress-bar_body"></div>
                </div>
                <div className="card__finance">
                  <div className="card__deposit">$100</div>
                  <div className="card__goal">$2500</div>
                </div>
              </div>
            </div>
          </div>
          <div className="cards">
            <div className="card">
              <div className="card__header">
                <div className="card__desc">
                  <div className="card__title">Dream Trip</div>
                  <div className="card__subtitle">Travel opens up new horizons</div>
                </div>
                <div className="card__controls">
                  <button className="btn btn_card btn_options">...</button>
                  <div className="popup popup_option popup_hidden">
                    <button className="btn">Edit</button>
                    <button className="btn">Delete</button>
                  </div>
                  <button className="btn btn_card btn_take">Take <span>-</span></button>
                  <button className="btn btn_card btn_add">Add <span>+</span></button>
                </div>
              </div>

              <div className="card__progress">
                <div className="card__progress-bar card__progress-bar_stroke">
                  <div className="card__progress-bar card__progress-bar_body"></div>
                </div>
                <div className="card__finance">
                  <div className="card__deposit">$100</div>
                  <div className="card__goal">$2500</div>
                </div>
              </div>
            </div>
          </div>
        </div>


      </main>
    </>
  )
}

export default App
