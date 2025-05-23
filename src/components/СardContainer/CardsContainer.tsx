import Card from "../Card/Card.tsx";

export default function CardsContainer() {
  const cardsData = [
    {title: "Dream Trip", subtitle: "Travel opens up new horizons", deposit: 100, goal: 2500},
    {title: "Dream Trip", subtitle: "Travel opens up new horizons", deposit: 1250, goal: 2500},
  ];

  return (
    <div className="cards">
      {cardsData.map((card, index) => (
        <Card key={index} {...card} />
      ))}
    </div>
  );
}