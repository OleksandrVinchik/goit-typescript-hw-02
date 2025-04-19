import styles from "./ImageCard.module.css";
import { UnsplashImage } from "../../services/api";

interface Props {
  image: UnsplashImage;
  onClick: (url: string) => void;
}

export default function ImageCard({ image, onClick }: Props) {
  return (
    <li className={styles.card} onClick={() => onClick(image.urls.regular)}>
      <img
        src={image.urls.small}
        alt={image.alt_description}
        className="image"
      />
    </li>
  );
}
