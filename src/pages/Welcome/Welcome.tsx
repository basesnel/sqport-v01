import { Link } from "react-router-dom";
import sqportLogo from "../../assets/sqport.svg";

import styles from "./styles.module.css";

const Welcome = () => {
  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <div className={styles.thumb}>
          <img src={sqportLogo} className={styles.logo} alt="sqport logo" />
        </div>
        <Link to="/main" className={styles.button}>
          start
        </Link>
        <p>
          Welcome to <span>sgport</span> app!
        </p>
      </header>
    </div>
  );
};

export default Welcome;
