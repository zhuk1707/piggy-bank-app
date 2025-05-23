import Button from "../Button/Button.tsx";
import {Ellipsis, Minus, Plus} from "lucide-react";

export default function CardControls() {
  return (
    <div className="card__controls">
      <Button icon={<Ellipsis absoluteStrokeWidth size={20}/>}/>

      <div className="popup popup_option popup_hidden">
        <button className="btn">Edit</button>
        <button className="btn">Delete</button>
      </div>

      <Button title={"Take"} icon={<Minus absoluteStrokeWidth size={12}/>}/>
      <Button title={"Add"} icon={<Plus absoluteStrokeWidth size={12}/>}/>
    </div>
  );
}