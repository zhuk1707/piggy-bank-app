import style from "./Tag.module.css"
import capitalizeWord from "../../utils/capitalizeWord.ts";

type TagProps = {
  title: string;
  color: string;
};

export default function Tag({title, color}: TagProps) {
  const tagColorName = capitalizeWord(color)
  return (
    <div className={`${style.tagColor} ${style[tagColorName]}`}>
      <div className={style.tag}>
        {title}
      </div>
    </div>
  )

}
