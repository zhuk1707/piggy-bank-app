import Button from "../Button/Button.tsx";
import {Plus} from "lucide-react";
import logo from '../../assets/logo.svg'
import {useDispatch} from "react-redux";
import {toggleModal} from "../../feature/modalSlice.ts";

function Header() {
  const dispatch = useDispatch()

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
            onClick={() => dispatch(toggleModal())}
          />
        </div>
      </div>
    </header>
  )
}

export default Header