import axios from "axios";

const API_KEY = "53361153-f145cef477c4ac6c9fc0f0a0c"; 
const BASE_URL = "https://pixabay.com/api/";

export async function getImagesByQuery(query) {
  const params = {
    key: API_KEY,
    q: query,
    image_type: "photo",
    orientation: "horizontal",
    safesearch: true,
  };

  const response = await axios.get(BASE_URL, { params });

  return response.data.hits;
}
