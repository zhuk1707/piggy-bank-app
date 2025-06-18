import CardDescription, {type CardDescriptionProps} from "./CardDescription/CardDescription.tsx";
import CardControls from "./CardControls/CardControls.tsx";
import CardProgress, {type CardProgressProps} from "./CardProgress/CardProgress.tsx";
import type {FC} from "react";
import TagsContainer from "../Tag/TagsContainer.tsx";


export interface CardProps extends CardDescriptionProps, CardProgressProps {
  id: string
}

const Card: FC<CardProps> = ({id, title, subtitle, deposit, goal}) => {
  return (
    <div className="card">
      <div className="card__header">
        <CardDescription title={title} subtitle={subtitle}/>
        <CardControls id={id}/>
      </div>
      <TagsContainer/>
      <CardProgress deposit={deposit} goal={goal}/>
    </div>
  );
};

export default Card;
