import formatTimeAgo from "../../helpers/formatTimeAgo";

import styles from "./styles.module.css";

const Banner = () => {
  return (
    <div className={styles.banner}>
      <h3 className={styles.title}>sqport-assistant</h3>
      <p className={styles.extra}>
        {`created ${formatTimeAgo(
          "Sun Jul 21 2024 12:13:58 GMT+0300 (Eastern European Summer Time)"
        )}`}
      </p>
      <hr />
      <p>Congratulations! How can I help you?</p>
    </div>
  );
};

export default Banner;
