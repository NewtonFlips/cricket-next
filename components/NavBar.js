import Link from "next/link";
import classes from "./NavBar.module.css";

function NavBar() {
  return (
    <nav className={classes.header__nav}>
      <Link href="/">
        <a className={classes.header__navItem}>Home</a>
      </Link>
      <Link href="/about">
        <a className={classes.header__navItem}>About</a>
      </Link>
      <Link href="/countries">
        <a className={classes.header__navItem}>Countries</a>
      </Link>
    </nav>
  );
}

export default NavBar;
