import { useState } from "react";
import Section from "../Section/Section";
import Container from "../Container/Container";
import Panel from "../Panel/Panel";

import styles from "./styles.module.css";

const Dialog = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <Section>
      <Container>
        <h2 className={styles.tytle2}>Dialog</h2>

        <Panel
          title="select an category"
          isActive={activeIndex === 0}
          onShow={() => setActiveIndex(0)}
        >
          <div className={styles.field}>
            <label htmlFor="category">Please choose an category</label>
            <select name="category" id="category" className={styles.select}>
              <option value=""></option>
              <option value="administration">Administration</option>
              <option value="cyber">Cyber defense</option>
              <option value="network">Network administration</option>
            </select>
          </div>
        </Panel>
        <Panel
          title="ask a question"
          isActive={activeIndex === 1}
          onShow={() => setActiveIndex(1)}
        >
          <div className={styles.field}>
            <label htmlFor="question">Please ask a question</label>
            <textarea
              name="question"
              id="question"
              className={styles.textarea}
            ></textarea>
          </div>
        </Panel>
      </Container>
    </Section>
  );
};

export default Dialog;
