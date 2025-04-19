import ImageCard from "../ImageCard/ImageCard";
import styles from "./ImageGallery.module.css";
import { UnsplashImage } from "../../services/api";

interface Props {
  images: UnsplashImage[];
  onImageClick: (url: string) => void;
}

export default function ImageGallery({ images, onImageClick }: Props) {
  return (
    <ul className={styles.gallery}>
      {images
        .filter((image) => image.width > image.height)
        .map((image) => (
          <ImageCard key={image.id} image={image} onClick={onImageClick} />
        ))}
    </ul>
  );
}
