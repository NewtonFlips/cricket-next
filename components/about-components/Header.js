import NavBar from "../NavBar";
import classes from "./Header.module.css";

function Header({ title }) {
  return (
    <header className={classes.header}>
      <NavBar />
      <h1>{title}</h1>
    </header>
  );
}

export default Header;
