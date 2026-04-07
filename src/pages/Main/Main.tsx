import Banner from "../../components/Banner/Banner";
import Dialog from "../../components/Dialog/Dialog";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";

// import styles from "./styles.module.css";

const Main = () => {
  return (
    <>
      <Header />
      <main>
        <Banner />
        <Dialog />
      </main>
      <Footer />
    </>
  );
};

export default Main;
