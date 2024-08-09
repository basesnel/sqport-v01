import styles from "./styles.module.css";

const Section = (props) => {
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
