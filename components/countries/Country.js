import Image from "next/image";
import Link from "next/link";
import classes from "./Country.module.css";

function Country({ CountryName, worldCups, image }) {
  return (
    <Link href={`countries/${CountryName}`}>
      <div className={classes.container}>
        <Image src={image} alt="Country Flag" width={400} height={250} />

        <div className={classes.container__content}>
          <h2>{CountryName}</h2>
          <p>
            World Cup(s) won: <span>{worldCups}</span>
          </p>
        </div>
      </div>
    </Link>
  );
}

export default Country;
