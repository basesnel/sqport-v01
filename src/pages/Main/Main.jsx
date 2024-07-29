import Header from "../../components/Header/Header";
import Banner from "../../components/Banner/Banner";
import Dialog from "../../components/Dialog/Dialog";

import styles from "./styles.module.css";

const Main = () => {
  return (
    <>
      <Header />
      <div className="container">
        <main className={styles.main}>
          <Banner />
          <Dialog />
        </main>
      </div>
    </>
  );
};

export default Main;
