type GetPercentage = (goal: number, deposit?: number) => number;

const getPercentage: GetPercentage = (goal, deposit = 0) => {
  return (deposit * 100) / goal;
};

export default getPercentage;
