import formatTimeAgo from "../../helpers/formatTimeAgo";
import Section from "../Section/Section";
import Container from "../Container/Container";

import styles from "./styles.module.css";

const Banner = () => {
  return (
    <Section>
      <Container>
        <div className={styles.banner}>
          <h2 className={styles.title}>sqport-assistant</h2>
          <p className={styles.extra}>
            {`created ${formatTimeAgo(
              "Sun Jul 21 2024 12:13:58 GMT+0300 (Eastern European Summer Time)"
            )}`}
          </p>
          <hr />
          <p>Congratulations! How can I help you?</p>
        </div>
      </Container>
    </Section>
  );
};

export default Banner;
