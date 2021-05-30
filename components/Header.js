import HeroText from "./HeroText";
import NavBar from "./NavBar";
import classes from "./Header.module.css";

function Header() {
  return (
    <header className={classes.header}>
      <NavBar />
      <HeroText />
    </header>
  );
}

export default Header;
