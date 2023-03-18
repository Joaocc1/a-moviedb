import { useEffect, useContext } from "react";
import { useTheme } from "styled-components";
import { AppContext } from "../contexts/AppContext";
import Dark from "../icons/Dark";
import Light from "../icons/Light";
import { Button } from "./styles";

const ThemeButton = () => {
  const { darkMode, dispatch } = useContext(AppContext);
  const theme = useTheme();

  console.log("theme: ", theme);
  console.log("darkMode: ", darkMode);

  const handleChangeTheme = () => {
    dispatch({ type: "THEME_TOGGLE" });
  };

  useEffect(() => {
    console.log("useeffect 1 is called");
    const localTheme = localStorage.getItem("theme");
    console.log("localTheme: ", localTheme);
    if (localTheme === "Dark") {
      dispatch({type: "THEME_ON"});
    } else {
      dispatch({type: "THEME_OFF"});
    }
  }, [dispatch]);

  useEffect(() => {
    console.log("useeffect 2 is called");
    localStorage.setItem("theme", darkMode ? "Dark" : "Light");
    console.log("theme stored in local storage: ", localStorage.getItem("theme"))
  }, [darkMode]);

  return (
    <Button onClick={handleChangeTheme}>
      {darkMode ? (
        <Light fillColor={theme.palette.text.primary} />
      ) : (
        <Dark fillColor={theme.palette.text.primary} />
      )}
    </Button>
  );
};

export default ThemeButton;