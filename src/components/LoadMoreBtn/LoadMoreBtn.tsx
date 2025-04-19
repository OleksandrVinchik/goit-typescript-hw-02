import styles from "./LoadMoreBtn.module.css";

interface Props {
  onClick: () => void;
}

export default function LoadMoreBtn({ onClick }: Props) {
  return (
    <button className={styles.button} onClick={onClick}>
      Load more
    </button>
  );
}
