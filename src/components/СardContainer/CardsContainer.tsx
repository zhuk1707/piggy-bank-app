import Card from "../Card/Card.tsx";
import SectionTitle from "../SectionTitle/SectionTitle.tsx";
import {useContext} from "react";
import AppContext from "../../main.tsx";


export default function CardsContainer() {
  const {goalsList} = useContext(AppContext)

  return (<>
    <SectionTitle>Goals</SectionTitle>
    <div className="cards">
      {goalsList.goals.map(card => (
        <Card key={card.title} {...card} />
      ))}
    </div>
  </>)
}