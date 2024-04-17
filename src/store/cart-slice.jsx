import {  createSlice } from "@reduxjs/toolkit";

const initialCard = { cards: [] , totalQuantity: 0 , changed: false };
const cartSlice = createSlice({
  name: "card",
  initialState: initialCard,
  reducers: {
    replaceCard(state,action){
      state.cards = action.payload.cards || [],
      state.totalQuantity = action.payload.totalQuantity
    },
    addToCard(state , action) {
      const newItem = action.payload;
      const isItemExist = state.cards.find(item => item.id === newItem.id); 
      state.totalQuantity++;
      state.changed = true;
      if (!isItemExist) {
        state.cards.push({
            title: newItem.title,
            id : newItem.id ,
            price : newItem.price,
            quantity: 1 , 
            totalPrice : newItem.price
        });
      }
      else{
        isItemExist.quantity++
        isItemExist.totalPrice += isItemExist.price
      }
    },
    removeCard(state , action){
        
        const existingItem = state.cards.find(item => item.id === action.payload);
        console.log(existingItem)
        state.totalQuantity--;
        state.changed = true;
        if(existingItem.quantity === 1){
            state.cards = state.cards.filter(item=>item.id !== action.payload)
        }
        else {
            existingItem.quantity--;
            existingItem.totalPrice -= existingItem.price
        }
    }
    
  },
});
export const cartActions = cartSlice.actions;
export default cartSlice.reducer