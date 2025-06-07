import style from './Footer.module.css'
import {Github} from "lucide-react";
import Button from "../Button/Button.tsx";
import logo from "../../assets/logo.svg";


function Footer() {
  return (
    <footer className={style.footer}>
      <div className="container">
        <div className={style.footer__inner}>
          <a className="logo logo_header" href='#'>
            <div className="logoIcon">
              <img src={logo} alt=""/>
            </div>
            <div className="logoTitle">
              piggy-bank
            </div>
          </a>

          <p className={style.copyright}>Made for fun by Zhuk1707</p>

          <div className={style.footerButton}>
            <Button
              title={"Github"}
              icon={<Github size={16}/>}
              onClick={() => {
              }}
            />
          </div>

        </div>
      </div>
    </footer>
  )
}

export default Footer