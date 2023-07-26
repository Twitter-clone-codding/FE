import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from "./slice/userSlice";
import formReducer from "./slice/formSlice";
import inputReducer from "./slice/inputSlice";
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
  user: userReducer,
});

const formPersistConfig = {
  key: "form",
  storage,
};

const persistedFormReducer = persistReducer(formPersistConfig, formReducer);

export const store = configureStore({
  reducer: {
    user: rootReducer,
    form: persistedFormReducer,
    input: inputReducer,
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
