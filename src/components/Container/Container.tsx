import type { ReactNode } from "react";
import styles from "./styles.module.css";

type Props = {
  children: ReactNode;
};

const Container = (props: Props) => {
  const { children } = props;

  return (
    <div role="presentation" className={styles.container}>
      {children}
    </div>
  );
};

export default Container;
