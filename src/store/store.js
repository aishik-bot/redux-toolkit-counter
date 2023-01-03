import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../store/CounterSlice";

export const store = configureStore({
  reducer : {
    counter : counterReducer
  }
});