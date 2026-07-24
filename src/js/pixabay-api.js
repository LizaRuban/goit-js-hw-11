const API_KEY = '56827809-548e8e575633a6bef97a51a72';
const BASE_URL = 'https://pixabay.com/api/';
import axios from 'axios';

export default function fetchData(query) {
  return axios
    .get('https://pixabay.com/api/', {
      params: {
        key: API_KEY,
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
      },
    })
    .then(response => response.data);
}
