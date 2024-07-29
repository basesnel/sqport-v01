import styles from "./styles.module.css";

const Section = (props) => {
  const { children } = props;

  return <section className={styles.section}>{children}</section>;
};

export default Section;
