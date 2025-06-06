import ProgressBar from "../ProgressBar/ProgressBar.tsx";
import type {FC} from "react";
import formatNumber from "../../utils/formatNumber.ts";
import getPercentage from "../../utils/getPercentage.ts";

export type CardProgressProps = {
  goal: number;
  deposit?: number;
}

const CardProgress: FC<CardProgressProps> = ({deposit = 0, goal}) => {
  return (
    <div className="card__progress">
      <ProgressBar deposit={deposit} goal={goal}/>
      <div className="card__finance">
        <div className="card__deposit">${deposit}</div>
        <div className="card__progressPercent">{formatNumber(getPercentage(goal, deposit))}%</div>
        <div className="card__goal">${goal}</div>
      </div>
    </div>
  );
};

export default CardProgress;
