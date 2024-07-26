import { Link } from "react-router-dom";
import sqportLogo from "../../assets/sqport.svg";

import styles from "./styles.module.css";

const Welcome = () => {
  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <img src={sqportLogo} className={styles.logo} alt="sqport logo" />
        <Link to="/main" className={styles.button}>
          start
        </Link>
      </header>
    </div>
  );
};

export default Welcome;
