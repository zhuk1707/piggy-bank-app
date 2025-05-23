import CardDescription, { type CardDescriptionProps } from "../CardDescription/CardDescription.tsx";
import CardControls from "../CardControls/CardControls.tsx";
import CardProgress, { type CardProgressProps } from "../CardProgress/CardProgress.tsx";
import type { FC } from "react";

interface CardProps extends CardDescriptionProps, CardProgressProps {}

const Card: FC<CardProps> = ({ title, subtitle, deposit, goal }) => {
  return (
    <div className="card">
      <div className="card__header">
        <CardDescription title={title} subtitle={subtitle} />
        <CardControls />
      </div>
      <CardProgress deposit={deposit} goal={goal} />
    </div>
  );
};

export default Card;
