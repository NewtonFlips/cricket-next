import Header from "../components/about-components/Header";
import Layout from "../components/UI/Layout";
import Footer from "./../components/Footer";
import classes from "./../styles/About.module.css";

function About() {
  return (
    <div>
      <Header title="About Us!" />
      <Layout>
        <p className={classes.aboutContent}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer elit
          ante, faucibus eget tortor quis, placerat ultrices ligula. Aenean id
          elit bibendum, imperdiet magna eu, volutpat libero. Curabitur sagittis
          justo neque, nec pretium augue vulputate eget. Nulla consequat dolor
          justo, vel malesuada mauris egestas ut. Integer pulvinar lectus purus.
          Aenean lobortis malesuada sem, id imperdiet leo finibus at. Donec in
          egestas dolor. Duis neque lacus, tincidunt eu scelerisque at, maximus
          nec est. Morbi ultricies mollis mauris, sit amet interdum urna
          efficitur et. Sed scelerisque varius libero ac ultricies. In hac
          habitasse platea dictumst. Ut id ultrices tellus, a consequat elit.
          Proin quis metus eu sem elementum egestas.
        </p>
        <p className={classes.aboutContent}>
          Donec varius pharetra tristique. Aenean et elit auctor tellus
          malesuada sollicitudin id a elit. In dolor magna, dignissim vitae
          lectus ut, vehicula dignissim eros. Cras feugiat pharetra odio, at
          dapibus urna feugiat sit amet. Suspendisse potenti. Morbi faucibus
          fringilla turpis vitae sodales. Phasellus nec auctor erat. Suspendisse
          et libero vulputate purus accumsan lacinia et in nulla. Vestibulum ac
          odio in lorem consequat sollicitudin. Vivamus efficitur justo vitae
          nunc interdum, tempor tincidunt diam tincidunt. Mauris sed convallis
          lorem. Cras tellus dui, placerat sit amet arcu vitae, consequat
          bibendum dolor. Aenean mattis pellentesque quam a suscipit. In hac
          habitasse platea dictumst. Sed hendrerit sem non eros aliquam
          tincidunt. Nulla facilisi.
        </p>
        <p className={classes.aboutContent}>
          Morbi enim diam, ultricies at risus ac, egestas venenatis nisl.
          Praesent lacinia, urna sit amet faucibus euismod, ex metus tincidunt
          dolor, congue placerat lectus quam non justo. In ultrices, nibh id
          consectetur rutrum, diam enim viverra diam, nec ullamcorper lectus
          lacus vulputate arcu. In viverra nulla varius suscipit semper. Morbi
          vel lorem leo. Aliquam faucibus ut dui eleifend imperdiet. Vivamus in
          rutrum mi, non suscipit purus. Aenean eget quam in ante imperdiet
          laoreet. Vestibulum vitae libero vitae neque elementum suscipit.
          Mauris et tellus ultricies, tempus massa quis, gravida odio. Donec
          varius leo nec orci tristique tincidunt.
        </p>
      </Layout>
      <Footer />
    </div>
  );
}

export default About;
