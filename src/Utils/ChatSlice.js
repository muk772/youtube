import { createSlice } from "@reduxjs/toolkit";

const chatSlice = createSlice({
  name: "chatSlice",
  initialState: {
    chats: [],
  },
  reducers: {
    addChat: (state, action) => {
      state.chats.splice(25, 1);
      state.chats.unshift(action.payload);
    },
  },
});
export const { addChat } = chatSlice.actions;
export default chatSlice.reducer;
