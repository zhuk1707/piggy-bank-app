import {createSlice} from '@reduxjs/toolkit';

export type Goal = {
  id: string;
  title: string;
  subtitle?: string;
  deposit?: number;
  goal: number;
};

export type GoalsList = {
  goals: Record<string, Goal>;
  goalsId: string[];
};

const initialStorage: GoalsList = {
  goals: {
    '1': {
      id: '1',
      title: "Trip",
      subtitle: "Travel opens up new horizons :)",
      deposit: 1050,
      goal: 10000
    },
  },
  goalsId: ['1'],
};

const goalsSlice = createSlice({
  name: 'goalsList',
  initialState: initialStorage,
  reducers: {
    addGoal: (state, action) => {
      state.goals[action.payload.id] = action.payload;
      state.goalsId.push(action.payload.id);
    },
    removeGoal: (state, action) => {
      delete state.goals[action.payload];
      state.goalsId = state.goalsId.filter((id) => id !== action.payload);
    },
    addToDeposit: (state, action) => {
      if (state.goals[action.payload.id]) {
        state.goals[action.payload.id].deposit =
          (state.goals[action.payload.id].deposit || 0) + action.payload.amount;
      }
    },
    takeFromDeposit: (state, action) => {
      if (state.goals[action.payload.id]) {
        state.goals[action.payload.id].deposit =
          Math.max((state.goals[action.payload.id].deposit || 0) - action.payload.amount, 0);
      }
    },
  },
});

export const {addGoal, removeGoal, addToDeposit, takeFromDeposit} = goalsSlice.actions;
export default goalsSlice.reducer;
