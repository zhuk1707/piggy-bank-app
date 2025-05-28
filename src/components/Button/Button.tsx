import styles from "./Button.module.css"
import type {ReactNode} from "react";

function Button({title, icon, onClick}: {
  title?: string,
  icon?: ReactNode,
  onClick: () => void
}) {
  return (
    <button className={styles.btn} onClick={onClick}>
      {title && <span className={styles.title}>{title}</span>}
      {icon && <span className={styles.icon}>{icon}</span>}
    </button>
  );
}

export default Button