import Section from "../Section/Section";

import styles from "./styles.module.css";

const Panel = ({ title, children, isActive, onShow }) => {
  return (
    <form
      className={isActive ? styles.panel : `${styles.panel} ${styles.dark}`}
    >
      <h3
        className={isActive ? styles.title : `${styles.title} ${styles.light}`}
      >
        {title}
      </h3>
      {isActive ? (
        <>{children}</>
      ) : (
        <button className={styles.button} onClick={onShow}>
          show
        </button>
      )}
    </form>
  );
};

export default Panel;
