import axios from 'axios';

const API_KEY = process.env.REACT_APP_API_KEY;

export const getNasaDataByDate = async (fullDate) => {
  const url = `https://api.nasa.gov/EPIC/api/natural/date/${fullDate}?api_key=${API_KEY}`;
  const { data } = await axios.get(url);
  return data;
};