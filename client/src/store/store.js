import { configureStore } from "@reduxjs/toolkit";

import astronautsReducer from "./astronauts-slice";

const store = configureStore({
  reducer: {
    astronauts: astronautsReducer,
  },
});

export default store;