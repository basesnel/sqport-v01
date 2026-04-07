import type { ReactNode } from "react";
import styles from "./styles.module.css";

type Props = {
  children: ReactNode;
  highlight?: boolean;
};

const Section = (props: Props) => {
  const { children, highlight } = props;

  return (
    <section
      className={
        !highlight ? styles.section : `${styles.section} ${styles.highlighted}`
      }
    >
      {children}
    </section>
  );
};

export default Section;
