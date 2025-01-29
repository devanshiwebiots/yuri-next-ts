import { LayoutStateProps } from "@/Types/Layout";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: LayoutStateProps = {
  isSearchBarOpen: false,
  bookMarkClass: false,
  pinedMenu: [],
  sideBarToggle: "",
  sidebarSearchTerm: "",
  bookmarkToggle: "",
  removeSidebar: "",
  searchClass: false
};

const LayoutSlice = createSlice({
  name: "layout",
  initialState,
  reducers: {
    setIsSearchBarOpen: (state, action: PayloadAction<boolean>) => {
      state.isSearchBarOpen = action.payload;
    },
    setBookMarkClass: (state, action: PayloadAction<boolean>) => {
      state.bookMarkClass = action.payload;
    },
    setPinedMenu: (state, action: PayloadAction<string[]>) => {
      state.pinedMenu = action.payload;
    },
    setSideBarToggle: (state, action: PayloadAction<string>) => {
      state.sideBarToggle = action.payload;
    },
    setSidebarSearchTerm: (state, action: PayloadAction<string>) => {
      state.sidebarSearchTerm = action.payload;
    },
    bookmarkToggle: (state, action) => {
      state.bookmarkToggle = action.payload;
    },
    setRemoveSidebar: (state, action) => {
      state.removeSidebar = action.payload;
    },
    setSearchClass: (state, action) => {
      state.searchClass = action.payload
    }
  },
});
export const { setIsSearchBarOpen, setBookMarkClass, setPinedMenu, setSideBarToggle, setSidebarSearchTerm, bookmarkToggle, setRemoveSidebar, setSearchClass } = LayoutSlice.actions;
export default LayoutSlice.reducer;
