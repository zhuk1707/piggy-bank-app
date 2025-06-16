import Button from "../../Button/Button.tsx";
import {Ellipsis, Minus, Plus, Trash2} from "lucide-react";
import {useDispatch} from "react-redux";
import {addToDeposit, removeGoal, takeFromDeposit} from "../../../feature/goalsSlice.ts";

export default function CardControls({id}: { id: string }) {
  const dispatch = useDispatch();

  const handleRemoveGoal = (id: string) => {
    dispatch(removeGoal(id));
  };

  const handleTakeFromDeposit = (id: string) => {
    dispatch(takeFromDeposit({id: id, amount: 100}));
  };

  const handleAddToDeposit = (id: string) => {
    dispatch(addToDeposit({id: id, amount: 100}));
  };


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
        onClick={() => handleRemoveGoal(id)}
      />

      <div className="popup popup_option popup_hidden">
        <button className="btn">Edit</button>
        <button className="btn">Delete</button>
      </div>

      <Button
        title={"Take"} icon={<Minus size={16}/>}
        onClick={() => handleTakeFromDeposit(id)}
      />

      <Button
        title={"Add"} icon={<Plus size={16}/>}
        onClick={() => handleAddToDeposit(id)}

      />

    </div>
  );
}