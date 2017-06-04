import axios from 'axios';

const BASE_URL = 'http://newsapi.org/v1/';
const API_KEY = '213327409d384371851777e7c7f78dfe';

class API {
  static getSources() {
    const url = `${BASE_URL}sources?language=en`;
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

export default API;