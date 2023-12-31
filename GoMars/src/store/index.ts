import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from "./slice/userSlice";
import formReducer from "./slice/formSlice";
import inputReducer from "./slice/inputSlice";
import myTweetReducer from "./slice/myTweetSlice";
import modalReducer from "./slice/modalSlice";
import notificationReducer from "./slice/noticeSlice";
import profileReducer from "./slice/profileSlice";

import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
  persistReducer,
  persistStore,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

// ...
const rootReducer = combineReducers({
  form: formReducer,
  myTweet: myTweetReducer,
});

const formPersistConfig = {
  key: "form",
  storage,
};

const persistedFormReducer = persistReducer(formPersistConfig, userReducer);

export const store = configureStore({
  reducer: {
    notice: notificationReducer,
    form: rootReducer,
    input: inputReducer,
    user: persistedFormReducer,
    root: rootReducer,
    modal: modalReducer,
    profile: profileReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
