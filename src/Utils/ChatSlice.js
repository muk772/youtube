import { createSlice } from "@reduxjs/toolkit";

const chatSlice = createSlice({
  name: "chatSlice",
  initialState: {
    chats: [],
  },
  reducers: {
    addChat: (state, action) => {
      if (state.chats.length > 20) {
        state.chats.pop();
      }
      state.chats.unshift(action.payload);
    },
  },
});
export const { addChat } = chatSlice.actions;
export default chatSlice.reducer;
