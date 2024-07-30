import Section from "../Section/Section";
import Container from "../Container/Container";

import styles from "./styles.module.css";

const Banner = () => {
  return (
    <Section>
      <Container>
        <h2 className={styles.tytle2}>Congrats</h2>
        <p>Congratulations! How can I help you?</p>
      </Container>
    </Section>
  );
};

export default Banner;
