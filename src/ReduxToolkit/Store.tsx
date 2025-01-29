import { configureStore } from "@reduxjs/toolkit";
import AddProductSlice from "./Reducers/AddProductSlice";
import BookmarkDataSlice from "./Reducers/BookmarkDataSlice";
import BookmarkTabSlice from "./Reducers/BookmarkTabSlice";
import CartSlice from "./Reducers/CartSlice";
import ChatSlice from "./Reducers/ChatSlice";
import ContactReducer from "./Reducers/ContactReducer";
import FilterSlice from "./Reducers/FilterSlice";
import FormWizardTwoSlice from "./Reducers/FormWizardTwoSlice";
import JobSearchReducer from "./Reducers/JobSearchReducer";
import layoutReducer from "./Reducers/Layout/LayoutReducer";
import ThemeCustomizerReducer from "./Reducers/Layout/ThemeCustomizerReducer";
import LetterBoxSlice from "./Reducers/LetterBoxSlice";
import NumberingWizardSlice from "./Reducers/NumberingWizardSlice";
import ProductSlice from "./Reducers/ProductSlice";
import ProjectSlice from "./Reducers/ProjectSlice";
import StudentWizardSlice from "./Reducers/StudentWizardSlice";
import TaskSlice from "./Reducers/TaskSlice";
import TodoReducer from "./Reducers/TodoReducer";
import TwoFactorSlice from "./Reducers/TwoFactorSlice";
import VerticalWizardSlice from "./Reducers/VerticalWizardSlice";

export const store = configureStore({
  reducer: {
    layout: layoutReducer,
    twoFactor: TwoFactorSlice,
    formWizardTwo: FormWizardTwoSlice,
    numberingWizard: NumberingWizardSlice,
    studentWizard: StudentWizardSlice,
    verticalWizard: VerticalWizardSlice,
    bookmarkTab: BookmarkTabSlice,
    contact: ContactReducer,
    project: ProjectSlice,
    letterBox: LetterBoxSlice,
    product: ProductSlice,
    addProduct: AddProductSlice,
    filterData: FilterSlice,
    todos: TodoReducer,
    cartData: CartSlice,
    task: TaskSlice,
    chat: ChatSlice,
    themeCustomizer: ThemeCustomizerReducer,
    bookmarkDataSlice: BookmarkDataSlice,
    jobSearch: JobSearchReducer

  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
