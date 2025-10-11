// baseApi.js
const API_KEY = "a5cd991ac31663b6218651adacb93b30";
const BASE_URL = "https://api.themoviedb.org/3/movie";

export const getApiUrl = (endpoint) => {
  // kalau endpoint gak diawali "/", tambahkan otomatis
  const cleanEndpoint = endpoint.startsWith("/") ? endpoint : `/${endpoint}`;
  return `${BASE_URL}${cleanEndpoint}?api_key=${API_KEY}&language=en-US`;
};
