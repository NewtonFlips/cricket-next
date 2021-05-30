import Link from "next/link";
import classes from "./HeroText.module.css";

function HeroText() {
  return (
    <div className={classes.header__textBox}>
      <h1 className={classes.headingPrimary}>Cricket Players</h1>
      <p className={classes.headingPrimary__headLine}>
        World's larget resource for seraching and comparing different cricket
        players
      </p>
      <Link href="/players">
        <a className={classes.headingPrimary__actionBtn}>
          See all players &rarr;
        </a>
      </Link>
    </div>
  );
}

export default HeroText;
