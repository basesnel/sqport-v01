import sqportLogo from "../../assets/sqport.svg";
import formatDate from "../../helpers/formatDate";

import styles from "./styles.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <a href="#" className={styles.logoLink}>
        <img src={sqportLogo} className={styles.logo} alt="sqport logo" />
      </a>
      <div className={styles.titleWrap}>
        <h1 className={styles.title}>sqport</h1>
        <p className={styles.text}>Info-tool | {formatDate(new Date())}</p>
      </div>
    </header>
  );
};

export default Header;
