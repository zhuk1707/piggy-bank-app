import styles from "./Header.module.css";
import Button from "../Button/Button.tsx";
import { Plus } from "lucide-react";
import logo from "../../assets/logo.svg";
import { useDispatch } from "react-redux";
import { toggleModal } from "../../feature/modalSlice.ts";

function Header() {
  const dispatch = useDispatch();

  return (
    <header className={styles.header}>
      <div className={'container'}>
        <div className={styles.inner}>
          <a className={`${styles.logo}`} href="#">
            <div className={styles.logoIcon}>
              <img src={logo} alt="" />
            </div>
            <div className={styles.logoTitle}>piggy-bank</div>
          </a>
          <Button
            title="Create a Goal"
            icon={<Plus strokeWidth={2} size={18} />}
            onClick={() => dispatch(toggleModal())}
          />
        </div>
      </div>
    </header>
  );
}

export default Header;
