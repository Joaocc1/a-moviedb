import { createContext, ReactNode, useReducer } from "react";
import { AppContextModel, AppState } from "../models/context";
import { reducer } from "../reducers/appReducer";

export const AppContext = createContext({} as AppContextModel);

const AppProvider = ({ children }: { children: ReactNode }) => {
  const initialState: AppState = {
    darkMode: true,
  };

  const [appState, dispatch] = useReducer(reducer, initialState);

  const value = {
    ...appState,
    dispatch,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppProvider;
