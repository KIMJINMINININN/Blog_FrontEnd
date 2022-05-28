import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ListType } from "../types/list";

interface ListReduxState {
  Lists: ListType[];
}

//* 초기 상태
const initialState: ListReduxState = {
  Lists: [],
};

const List = createSlice({
  name: "List",
  initialState,
  reducers: {
    setList(state, action: PayloadAction<ListType[]>) {
      state.Lists = action.payload;
    },
  },
});

export const ListActions = { ...List.actions };

export default List;
