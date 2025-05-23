import ProgressBar from "../ProgressBar/ProgressBar.tsx";
import type {FC} from "react";

export interface CardProgressProps {
  deposit: number;
  goal: number;
}

const CardProgress: FC<CardProgressProps> = ({ deposit, goal }) => {
  return (
    <div className="card__progress">
      <ProgressBar deposit={deposit} goal={goal} />
      <div className="card__finance">
        <div className="card__deposit">${deposit}</div>
        <div className="card__goal">${goal}</div>
      </div>
    </div>
  );
};

export default CardProgress;
