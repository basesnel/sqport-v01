import formatDate from "../../helpers/formatDate";

import styles from "./styles.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>sqport</h1>
      <p className={styles.text}>Info-tool | {formatDate(new Date())}</p>
    </header>
  );
};

export default Header;
