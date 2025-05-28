import Card, {type CardProps} from "../Card/Card.tsx";
import SectionTitle from "../SectionTitle/SectionTitle.tsx";

const cardsData: CardProps[] = [
  {title: "Trip", subtitle: "Travel opens up new horizons :)", deposit: 100, goal: 2500},
  {title: "PC", deposit: 0, goal: 3000},
  {title: "Vans", subtitle: "New shoes", deposit: 5, goal: 70},
  {title: "Car", deposit: 8000, goal: 16000},
];

export default function CardsContainer() {
  return (<>
    <SectionTitle>Goals</SectionTitle>
    <div className="cards">
      {cardsData.map((card) => (
        <Card key={card.title} {...card} />
      ))}
    </div>
  </>)
}