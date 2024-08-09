import Section from "../Section/Section";
import Container from "../Container/Container";

import styles from "./styles.module.css";
// import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";

const Banner = () => {
  // const [congrat, setCongrat] = useState("");
  const out = useRef(null);

  const str = "Congratulations! How can I help you?";

  let position = 0;

  const getRandomInt = (min = 50, max = 750) => {
    const rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
  };

  const removeLastChar = () => {
    out.current.textContent = str.substring(0, position);
  };

  const typeText = () => {
    if (position === str.length) return;

    const v = getRandomInt(0, 100);

    if (v > 90 && position !== 0) {
      out.current.textContent += str[getRandomInt(0, str.length - 2)];
      setTimeout(removeLastChar, 1000);
    } else {
      out.current.textContent += str[position];
      position++;
      setTimeout(typeText, getRandomInt());
    }
  };

  useEffect(() => {
    typeText();
  });

  return (
    <Section>
      <Container>
        <h2 className={styles.tytle2}>Congrats</h2>
        <p className={styles.out} ref={out}></p>
      </Container>
    </Section>
  );
};

export default Banner;
