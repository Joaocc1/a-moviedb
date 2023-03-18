import { useContext } from "react";
import { Outlet } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import NavBar from "./components/NavBar";
import { AppContext } from "./contexts/AppContext";
import { darkTheme, lightTheme } from "./theme";
import { Container } from "./styles";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";


const App = () => {
  
  const { darkMode } = useContext(AppContext);

  return (

    
      <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
        <Container>
          <NavBar/>
          <Outlet />
        </Container>
      </ThemeProvider>
    

    
  )

};

export default App;