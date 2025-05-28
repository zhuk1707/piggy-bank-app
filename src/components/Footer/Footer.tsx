import Button from "../Button/Button.tsx";
import {Plus} from "lucide-react";

function Header () {
  return (
    <header className="header">
      <div className="container">
        <div className="header__inner">
          <div className="logo logo_header">piggy-bank</div>
          <Button title={"Create a Goal"} icon={<Plus strokeWidth={2}  size={18}/>}/>
        </div>
      </div>
    </header>
  )
}

export default Header