import formatTimeAgo from "../../helpers/formatTimeAgo";
import formatDate from "../../helpers/formatDate";
// import Section from "../Section/Section";
import Container from "../Container/Container";

import styles from "./styles.module.css";

const Footer = () => {
  return (
    <footer className={styles.section}>
      <Container>
        <h2 className={styles.tytle2}>sqport-assistant</h2>
        <p className={styles.extra}>Info-tool | {formatDate(new Date())}</p>
        <p className={styles.extra}>
          {`created ${formatTimeAgo(
            "Sun Jul 21 2024 12:13:58 GMT+0300 (Eastern European Summer Time)"
          )}`}
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
