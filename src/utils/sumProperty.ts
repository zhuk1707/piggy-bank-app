import type {Goal, GoalsList} from "../main.tsx";


const sumProperty = (goalsList: GoalsList, property: keyof Goal): number => {
  const goals = goalsList.goals
  const goalsId = goalsList.goalsId

  return goalsId.reduce((total, id) => {
    const goalObj = goals[id]
    const value = goalObj[property];
    return typeof value === "number" ? total + value : total;
  }, 0);
};


export default sumProperty;


