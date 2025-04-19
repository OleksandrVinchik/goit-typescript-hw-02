import { useState, useEffect } from "react";
import { fetchImages, UnsplashImage } from "./services/api";
import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Loader from "./components/Loader/Loader";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import ImageModal from "./components/ImageModal/ImageModal";
import toast, { Toaster } from "react-hot-toast";

export default function App() {
  const [query, setQuery] = useState<string>("");
  const [images, setImages] = useState<UnsplashImage[]>([]);
  const [page, setPage] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [modalImage, setModalImage] = useState<string | null>(null);
  const [totalPages, setTotalPages] = useState<number>(0);

  useEffect(() => {
    if (!query) return;

    const loadImages = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await fetchImages(query, page);

        if (data.results.length === 0) {
          toast.error("Нічого не знайдено!");
        }

        setImages((prevImages) => [...prevImages, ...data.results]);
        setTotalPages(data.total_pages);
      } catch (err: any) {
        setError("Помилка завантаження!");
        console.error("Ошибка при загрузке изображений:", err.message);
      } finally {
        setLoading(false);
      }
    };

    loadImages();
  }, [query, page]);

  const handleSearch = (newQuery: string) => {
    if (newQuery === query) return;
    setQuery(newQuery);
    setImages([]);
    setPage(1);
  };

  return (
    <div>
      <Toaster position="top-right" />
      <SearchBar onSubmit={handleSearch} />
      {error && <ErrorMessage message={error} />}
      <ImageGallery images={images} onImageClick={setModalImage} />
      {loading && <Loader />}
      {images.length > 0 && page < totalPages && (
        <LoadMoreBtn onClick={() => setPage(page + 1)} />
      )}
      {modalImage && (
        <ImageModal image={modalImage} onClose={() => setModalImage(null)} />
      )}
    </div>
  );
}
