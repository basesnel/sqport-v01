import sqportLogo from "../../assets/sqport.svg";

import styles from "./styles.module.css";

const Welcome = () => {
  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <img src={sqportLogo} className={styles.logo} alt="sqport logo" />
        <a href="#" className={styles.button}>
          start
        </a>
      </header>
    </div>
  );
};

export default Welcome;
