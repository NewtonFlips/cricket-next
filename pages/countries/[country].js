import Header from "./../../components/about-components/Header";
import Footer from "../../components/Footer";
import Layout from "../../components/UI/Layout";
import { useRouter } from "next/router";

function Country(props) {
  const router = useRouter();
  return (
    <>
      <Header title={router.query.country} />
      <Layout>
        <p>{router.query.country}'s players page.</p>
      </Layout>
      <Footer />
    </>
  );
}

export default Country;
