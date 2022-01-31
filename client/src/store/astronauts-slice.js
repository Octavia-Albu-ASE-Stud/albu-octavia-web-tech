import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  astronauts: [
    {
        "SpacecraftID": 1,
        "Name": "JIMMOTHY",
        "Role" : "COMMANDER"
    }
  ],
};

const astronautsSlice = createSlice({
  name: "astronauts",
  initialState,
  reducers: {
    addAstronauts(state, action) {
      const newAstronaut = {
        ...action.payload,
        comments: [],
      };
      state.astronauts.push(newAstronaut);
    },
    
  }
});

export const astronautsActions = astronautsSlice.actions;

export default astronautsSlice.reducer;