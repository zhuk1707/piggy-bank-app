import type {Goal, GoalsList} from "../feature/goalsSlice.ts";

const sumProperty = (goalsList: GoalsList, property: keyof Goal): number => {
  const goals = goalsList.goals
  const goalsArr = Object.values(goals)

  return goalsArr.reduce((previousValue, currentValue) => {
    return previousValue + Number(currentValue[property])
  }, 0 )

};


export default sumProperty;


