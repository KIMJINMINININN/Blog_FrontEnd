import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ListType } from "../types/list";

//* 초기 상태
const initialState: ListType = {
  id: 0,
  title: "",
  text: "",
  writer: "",
  tag: "",
  classification: "",
  comment: "",
  likes: 0,
  count: 0
};

const list = createSlice({
  name: "list",
  initialState,
  reducers: {
    setCount(state:any, action: PayloadAction<ListType>) {
      state.count = action.payload;
    },
  },
});

export const listActions = { ...list.actions };

export default list;
