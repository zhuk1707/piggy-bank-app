import type {FC} from "react";

export interface CardDescriptionProps {
  title: string,
  subtitle?: string,
}

const CardDescription: FC<CardDescriptionProps> = ({title, subtitle}) => {
  return (
    <div className="card__desc">
      <div className="card__title">{title}</div>
      <div className="card__subtitle">{subtitle}</div>
    </div>
  );
}

export default CardDescription