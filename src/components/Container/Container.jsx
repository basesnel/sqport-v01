import styles from "./styles.module.css";

const Container = (props) => {
  const { children } = props;

  return (
    <div role="presentation" className={styles.container}>
      {children}
    </div>
  );
};

export default Container;
