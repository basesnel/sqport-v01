import Section from "../Section/Section";
import Container from "../Container/Container";

import { useRef, useEffect } from "react";

import styles from "./styles.module.css";

const Banner = () => {
  const out = useRef(null);

  const str =
    "Congratulations! I am sqport-service. My task - to help and guide you with self-service.";

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
    setTimeout(typeText, 1000);
  }, []);

  return (
    <Section>
      <Container>
        <h2 className={styles.tytle2}>Congrats</h2>
        <p className={styles.text} ref={out}></p>
      </Container>
    </Section>
  );
};

export default Banner;
