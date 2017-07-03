import axios from 'axios';

const BASE_URL = 'https://newsapi.org/v1/';
const API_KEY = process.env.API_KEY;

class HeadlineAPI {
  static getSources() {
    const url = `${BASE_URL}sources?language=en&apiKey=${API_KEY}`;
    return axios.get(url)
      .then(res => res.data.sources).catch(error => error);
  }

  static getHeadlines(source, sortBy) {
    const url = `${BASE_URL}articles?source=${source}`;
    const completeUrl = `${url}&sortBy=${sortBy}&apiKey=${API_KEY}`;
    return axios.get(completeUrl)
      .then(res => res.data.articles).catch(error => error);
  }
}

export default HeadlineAPI;
