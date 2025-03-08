import { configureStore } from "@reduxjs/toolkit";
import bookCategoriesReducer from "./bookCategoriesSlice";

const store = configureStore({
  reducer: {
    bookCategories: bookCategoriesReducer,
  },
});

export default store;
