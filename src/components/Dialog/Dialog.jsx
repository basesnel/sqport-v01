import Section from "../Section/Section";
import Container from "../Container/Container";

import styles from "./styles.module.css";

const Dialog = () => {
  return (
    <Section>
      <Container>
        <h2 className={styles.tytle2}>Dialog</h2>
        <form className={styles.form}>
          <h3 className={styles.tytle3}>select an category</h3>
          <div className={styles.field}>
            <label htmlFor="category">Please choose an category</label>
            <select name="category" id="category" className={styles.select}>
              <option value=""></option>
              <option value="administration">Administration</option>
              <option value="cyber">Cyber defense</option>
              <option value="network">Network administration</option>
            </select>
          </div>
        </form>
        <form className={styles.form}>
          <h3 className={styles.tytle3}>ask a question</h3>
          <div className={styles.field}>
            <label htmlFor="question">Please ask a question</label>
            <textarea
              name="question"
              id="question"
              className={styles.textarea}
            ></textarea>
          </div>
        </form>
      </Container>
    </Section>
  );
};

export default Dialog;
