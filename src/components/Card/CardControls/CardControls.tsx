import Button from "../../Button/Button.tsx";
import {Ellipsis, Minus, Plus, Trash2} from "lucide-react";
import {useContext} from "react";
import AppContext from "../../../main.tsx";

export default function CardControls({id}: { id: string }) {
  const context = useContext(AppContext)

  if (!context) {
    throw new Error("AppContext must be used within an AppProvider")
  }

  const {dispatch} = context

  return (
    <div className="card__controls">
      <Button
        icon={<Ellipsis size={16}/>}
        onClick={() => {
        }}
      />

      <Button
        title={'Remove'}
        icon={<Trash2 size={14}/>}
        onClick={() => {
          dispatch({type: "REMOVE_GOAL", payload: id})
        }}
      />

      <div className="popup popup_option popup_hidden">
        <button className="btn">Edit</button>
        <button className="btn">Delete</button>
      </div>

      <Button
        title={"Take"} icon={<Minus size={16}/>}
        onClick={() => {
        }}
      />

      <Button
        title={"Add"} icon={<Plus size={16}/>}
        onClick={() => {
        }}
      />

    </div>
  );
}