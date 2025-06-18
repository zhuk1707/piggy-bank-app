import Tag from "./Tag.tsx";
import style from "./TagsContainer.module.css"


export default function TagsContainer() {
  return (
    <div className={style.container}>

      <Tag title={'...'} color={'pink'}/>


    </div>
  )
}
