export interface Image {
  id: string;
  alt_description: string;
  likes: number;
  description: string;
  created_at: string;
  tags: { title: string }[];
  urls: {
    small: string;
    regular: string;
  };
  user: {
    name: string;
    social: {
      portfolio_url: string;
    };
    location: string;
  };
}

export interface ResponseData {
  results: Image[],
  total_pages: number
}