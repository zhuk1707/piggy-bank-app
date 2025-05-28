import style from './Footer.module.css'
import {Github} from "lucide-react";
import Button from "../Button/Button.tsx";


function Footer() {
  return (
    <footer className={style.footer}>
      <div className="container">
        <div className={style.footer__inner}>
          <div className="logo logo_footer">piggy-bank</div>
          <p>Made for fun by <a href="">Zhuk1707</a></p>

          <Button title={"Github"} icon={<Github size={16}/>}/>
        </div>
      </div>
    </footer>
  )
}

export default Footer