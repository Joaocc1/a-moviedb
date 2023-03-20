import { Nav, NavLink, NavContainer } from "./styles";
import "./styles";
import ThemeButton from "./ThemeButton";


const Navigation = () => {

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
      <NavContainer>
        <Nav>
          {navList.map((item) => (
            <NavLink key={item.name} to={item.path}>
              <h4>
                {item.name}
              </h4>
            </NavLink>
          ))}
        </Nav>
        <ThemeButton />
      </NavContainer>
    
    </>
  );
}

export default Navigation;