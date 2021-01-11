import http from '../services/httpService';
import config from '../config.json';
const apiEndPoint = `${config.apiUrl}`;
export function getMovies() {
  return http.get("https://sometimes-maybe-flaky-api.gdshive.io/");
}

