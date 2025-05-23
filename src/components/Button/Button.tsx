import style from "./Button.module.css"
import type {ReactNode} from "react";

function Button({title, icon}: {
  title: string,
  icon?: ReactNode
}) {
  return (
    <button className={style.btn}>
      <span className={style.icon}>{icon && icon}</span>
      <span className={style.title}>{title}</span>
    </button>
  );
}

export default Button