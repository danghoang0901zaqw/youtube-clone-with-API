import axios from "axios";

const BASE_URL = "https://youtube138.p.rapidapi.com";
const options = {
  params: { q: "desp", hl: "en", gl: "US" },
  headers: {
    "X-RapidAPI-Key": 'c5beb29caamsh24b3fe8d9dfb893p1bbc74jsn3eb448bc9850',
    "X-RapidAPI-Host": "youtube138.p.rapidapi.com",
  },
};
export const fetchDataFromApi = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);
  return data;
};
