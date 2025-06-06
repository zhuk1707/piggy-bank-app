import type {FC} from "react";
import type {CardProgressProps} from "../CardProgress/CardProgress.tsx";
import getPercentage from "../../utils/getPercentage.ts";

const ProgressBar: FC<CardProgressProps> = ({deposit = 0, goal}) => {
  return (
    <div className="card__progress-bar card__progress-bar_stroke">

      <div
        style={{
          width: `calc(${deposit > goal ? 100 : getPercentage(goal, deposit)}% - 4px)`
        }}
        className="card__progress-bar card__progress-bar_body"
      ></div>
    </div>
  );
}

export default ProgressBar