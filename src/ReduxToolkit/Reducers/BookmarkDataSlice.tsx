import { BookmarkData } from "@/Data/Layout/RightHeader";
import { SidebarSliceType, bookmarkedDataType } from "@/Types/Layout";
import { createSlice } from "@reduxjs/toolkit";

let state: SidebarSliceType = {
  linkItemsArray: [],
  bookmarkedData: [...BookmarkData],
};
const bookmarkdataSlice = createSlice({
  name: "bookmarkdataSlice",
  initialState: state,
  reducers: {
    getLinkItemsArray: (state, action) => {
      state.linkItemsArray = action.payload;
    },
    handleBookmarkChange: (state, action) => {
      if (!action.payload.bookmarked) {
        state.bookmarkedData.push({ ...action.payload });
      } else {
        const tempt: bookmarkedDataType[] = [];
        state.bookmarkedData.forEach((ele) => {
          if (ele.id !== action.payload.id) {
            tempt.push(ele);
          }
        });
        state.bookmarkedData = tempt;
      }
      const temp = [...state.linkItemsArray];
      temp.splice(action.payload.id - 1, 1, { ...action.payload, bookmarked: !action.payload.bookmarked });
      state.linkItemsArray = temp;
    },
  },
});

export default bookmarkdataSlice.reducer;
export const { handleBookmarkChange, getLinkItemsArray } = bookmarkdataSlice.actions;
