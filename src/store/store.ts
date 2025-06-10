import {configureStore} from "@reduxjs/toolkit";
import goalsReducer from "../feature/goalsSlice.ts";
import modalReducer from "../feature/modalSlice.ts";

export const store = configureStore({
  reducer: {
    goalsList: goalsReducer,
    modal: modalReducer,
  }
})

export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;