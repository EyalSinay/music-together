import axios from 'axios';
const URL =
  process.env.NODE_ENV === 'production'
    ? 'https://word-tune.herokuapp.com/server/'
    : 'http://127.0.0.1:5000/server/';

export const getContinent = async (continent, language) => {
  try {
    const result = await axios.get(URL + continent + '?lang=' + language);
    return result.data;
  } catch (e) {
    console.warn(e);
  }
};

export const getCountry = async (continent, country, language) => {
  try {
    const result = await axios.get(
      URL + continent + '/' + country + '?lang=' + language
    );
    return result.data;
  } catch (e) {
    console.warn(e);
  }
};
