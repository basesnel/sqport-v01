import { useState, useRef, useEffect } from "react";
import Section from "../Section/Section";
import Container from "../Container/Container";
import Panel from "../Panel/Panel";

import styles from "./styles.module.css";

const Dialog = () => {
  const out = useRef(null);

  const str = "Please, choose the way how can I help you!";

  let position = 0;

  const typeText = () => {
    if (position === str.length) return;

    const v = getRandomInt(0, 100);

    if (v > 97 && position !== 0) {
      out.current.textContent += str[getRandomInt(0, str.length - 2)];
      setTimeout(removeLastChar, 1000);
    } else {
      out.current.textContent += str[position];
      position++;
      setTimeout(typeText, getRandomInt());
    }
  };

  const getRandomInt = (min = 50, max = 750) => {
    const rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
  };

  const removeLastChar = () => {
    out.current.textContent = str.substring(0, position);
    setTimeout(typeText, getRandomInt());
  };

  useEffect(() => {
    setTimeout(typeText, 15000);
  }, []);

  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <Section highlight={true}>
      <Container>
        <h2 className={styles.tytle2}>Dialog</h2>
        <p className={styles.text} ref={out}></p>

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
