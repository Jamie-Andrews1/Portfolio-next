import styles from "./loading.module.css";

export default function Spinner() {
  return (
    <div className={styles.rollerCon}>
      <div className={styles.ldsroller}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
