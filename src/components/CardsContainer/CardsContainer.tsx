import Card from "../Card/Card.tsx";
import SectionTitle from "../SectionTitle/SectionTitle.tsx";
import type {RootState} from "../../store/store.ts";
import {useSelector} from "react-redux";

export default function CardsContainer() {
  const goalsList = useSelector((state:RootState) => state.goalsList.goals)
  const goalsArray = Object.values(goalsList)

  return (<>
    <SectionTitle>Goals</SectionTitle>
    <div className="cards">
      {goalsArray.map((card) => (
        <Card key={card.id} {...card} />
      ))}
    </div>
  </>)
}