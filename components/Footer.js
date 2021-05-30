import Link from "next/link";
import classes from "./Footer.module.css";

function Footer() {
  return (
    <footer className={classes.footer}>
      <p>
        Created by{" "}
        <Link href="https://github.com/NewtonFlips">
          <a className={classes.profile}>Newton Flips</a>
        </Link>
      </p>
      <p>Copyrigh &copy; 2021. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
