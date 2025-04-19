import styles from "./ErrorMessage.module.css";

interface Props {
  message: string;
}

export default function ErrorMessage({ message }: Props) {
  return (
    <div className={styles["error-container"]}>
      <p className={styles.error}>{message}</p>
    </div>
  );
}
