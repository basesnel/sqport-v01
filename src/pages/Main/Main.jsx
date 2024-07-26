import Header from "../../components/Header/Header";
import Banner from "../../components/Banner/Banner";

import styles from "./styles.module.css";

const Main = () => {
  return (
    <>
      <Header />
      <div className="container">
        <main className={styles.main}>
          <Banner />
        </main>
      </div>
    </>
  );
};

export default Main;
