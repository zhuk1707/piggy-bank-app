import type {FC} from "react";
import type {CardProgressProps} from "../CardProgress/CardProgress.tsx";

const ProgressBar: FC<CardProgressProps> = ({deposit, goal}) => {
  return (
    <div className="card__progress-bar card__progress-bar_stroke">
      <div
        style={{width: `${(deposit * 100) / goal}%`}}
        className="card__progress-bar card__progress-bar_body"
      ></div>
    </div>
  );
}

export default ProgressBar