import { useLocation } from "react-router-dom";
import { Nav, NavLink } from "./styles";
import "./styles";
import ThemeButton from "./ThemeButton";


const Navigation = () => {

  const location = useLocation();

  const navList = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Trending",
      path: "/trending",
    },
    {
      name: "Playing Now",
      path: "/playing-now",
    },
  ]

  return (
    
    <>
    
      <Nav>
        {navList.map((item) => (
          <NavLink key={item.name} to={item.path}>
            <h4 /* active={location.pathname === item.path} */>
              {item.name}
            </h4>
          </NavLink>
        ))}
        <ThemeButton />
      </Nav>
    
    </>
  );
}

export default Navigation;