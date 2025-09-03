import styles from "./ViewportWarning.module.css";

export default function ViewportWarning() {
  return (
    <div className={styles["viewport-warning"]}>
      <div className={styles["viewport-warning__content"]}>
        <i className="bi bi-exclamation-octagon"></i>
        <span>This website is not optimized for screens under 320px wide</span>
      </div>
    </div>
  );
}
