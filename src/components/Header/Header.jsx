import sqportLogo from "../../assets/sqport.svg";
import Container from "../Container/Container";

import styles from "./styles.module.css";

const Header = () => {
  return (
    <header className={styles.section}>
      <Container>
        <div className={styles.header}>
          <a href="#" className={styles.logoLink}>
            <img src={sqportLogo} className={styles.logo} alt="sqport logo" />
          </a>
          <div className={styles.titleWrap}>
            <h1 className={styles.title}>sqport</h1>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
