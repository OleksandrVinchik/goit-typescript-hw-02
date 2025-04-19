import axios from "axios";

const API_KEY = "ZY36qvkSWEm_zsaNG-OdvynVXMTSze15awwX3HVfE14";
const BASE_URL = "https://api.unsplash.com/search/photos";

export interface UnsplashImage {
  id: string;
  alt_description: string;
  width: number;
  height: number;
  urls: {
    small: string;
    regular: string;
  };
}

export interface UnsplashResponse {
  results: UnsplashImage[];
  total_pages: number;
}

export const fetchImages = async (
  query: string,
  page: number
): Promise<UnsplashResponse> => {
  try {
    const response = await axios.get<UnsplashResponse>(BASE_URL, {
      params: {
        query,
        page,
        per_page: 12,
        client_id: API_KEY,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Ошибка при запросе к Unsplash API:", error);
    throw error;
  }
};
