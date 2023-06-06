import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  telephoneNumber: "",
  call: "",
};

export const telephoneSlice = createSlice({
  telephoneNumber: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
});
