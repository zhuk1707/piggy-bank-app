import Button from "../Button/Button.tsx";
import {Plus} from "lucide-react";
import {useContext} from "react";
import AppContext from "../../main.tsx";
import logo from '../../assets/logo.svg'

function Header() {
  const context = useContext(AppContext)

  if (!context) {
    throw new Error("AppContext must be used within an AppProvider")
  }

  const {dispatch} = context


  return (
    <header className="header">
      <div className="container">
        <div className="header__inner">
          <a className="logo logo_header" href='#'>
            <div className="logoIcon">
              <img src={logo} alt=""/>
            </div>
            <div className="logoTitle">
              piggy-bank
            </div>
          </a>
          <Button
            title={"Create a Goal"}
            icon={<Plus strokeWidth={2} size={18}/>}
            onClick={() => {
              dispatch({
                type: 'TOGGLE_MODAL'
              })
            }}
          />
        </div>
      </div>
    </header>
  )
}

export default Header