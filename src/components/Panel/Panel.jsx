import Section from "../Section/Section";

import styles from "./styles.module.css";

const Panel = ({ title, children, isActive, onShow }) => {
  return (
    <form className={styles.panel}>
      <h3>{title}</h3>
      {isActive ? <>{children}</> : <button onClick={onShow}>Show</button>}
    </form>
  );
};

export default Panel;
