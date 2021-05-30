import Header from "../../components/about-components/Header";
import Country from "../../components/countries/Country";
import Footer from "./../../components/Footer";
import Layout from "./../../components/UI/Layout";

function Countries() {
  const countries = [
    {
      id: "AUS",
      country: "Australia",
      titles: 5,
      link: "/australia-flag.jpg",
    },
    {
      id: "SA",
      country: "South Africa",
      titles: 0,
      link: "/southAfrica-flag.jpg",
    },
    {
      id: "ENG",
      country: "England",
      titles: 1,
      link: "/england-jpg.png",
    },
    {
      id: "IND",
      country: "India",
      titles: 2,
      link: "/india-flag.jpg",
    },
    {
      id: "PAK",
      country: "Pakistan",
      titles: 1,
      link: "/pakistan-flag.jpg",
    },
    {
      id: "NZ",
      country: "New Zealand",
      titles: 0,
      link: "/newZealand-flag.jpg",
    },
    {
      id: "WI",
      country: "West Indies",
      titles: 2,
      link: "/westIndies-flag.jpg",
    },
  ];
  return (
    <>
      <Header title="All Countries" />
      <Layout>
        {countries.map((country) => (
          <Country
            key={country.id}
            CountryName={country.country}
            worldCups={country.titles}
            image={country.link}
          />
        ))}
      </Layout>
      <Footer />
    </>
  );
}

export default Countries;
