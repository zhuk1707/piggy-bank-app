import style from "./Button.module.css"
import type {ReactNode} from "react";

function Button({title, icon}: {
  title?: string,
  icon?: ReactNode
}) {
  return (
    <button className={style.btn}>
      {title && <span className={style.title}>{title}</span>}
      {icon && <span className={style.icon}>{icon}</span>}
    </button>
  );
}

export default Button