import { createSlice } from "@reduxjs/toolkit";

const initialCard = { isVisible : true , notification: null };
const uiSlice = createSlice({
  name: "card",
  initialState: initialCard,
  reducers: {
    toggle(state){
        state.isVisible = !state.isVisible;
    } ,
    showNotification(state , action){
      state.notification = {
        status : action.payload.status,
        title : action.payload.title,
        message : action.payload.message
      }
    }
  },
});
export const uiActions = uiSlice.actions;
export default uiSlice.reducer