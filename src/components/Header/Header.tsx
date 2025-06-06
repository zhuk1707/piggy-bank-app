import Button from "../Button/Button.tsx";
import {Plus} from "lucide-react";
import {useContext} from "react";
import AppContext from "../../main.tsx";

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
          <div className="logo logo_header">piggy-bank</div>

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