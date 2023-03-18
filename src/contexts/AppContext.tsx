import { createContext, ReactNode, useReducer, useEffect } from "react";
import { AppContextModel } from "../models/context";
import { reducer } from "../reducers/appReducer";

export const AppContext = createContext({} as AppContextModel);

const AppProvider = ({ children }: { children: ReactNode }) => {

  const getInitialMode = (): boolean => {
    try {
      const mode = JSON.parse(localStorage.getItem('darkMode') || '');
      return mode;
    } catch (error) {
      console.log(error);
      return false;
    }
  };

  const [appState, dispatch] = useReducer(reducer, {
    darkMode: getInitialMode(),
  });

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(appState.darkMode));
  }, [appState.darkMode]);

  const value = {
    ...appState,
    dispatch,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppProvider;
