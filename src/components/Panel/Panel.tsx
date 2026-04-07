import type { ReactNode } from "react";
import styles from "./styles.module.css";

type Props = {
  title: string;
  children: ReactNode;
  isActive: boolean;
  onShow: () => void;
};

const Panel = ({ title, children, isActive, onShow }: Props) => {
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
