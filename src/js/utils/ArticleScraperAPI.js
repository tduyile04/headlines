import mercuryParser from 'mercury-parser';

// mercury(process.env.MERCURY_API_KEY);
const mercury = mercuryParser('eCrAtyPmItZCZY1Zi4vqRcbjzeRkQsTrDvzqlCok');

class Scraper {
  static scrapeArticle(url) {
    return mercury.parse(url).then((response) => {
      console.log(response);
      return {
        title: response.title,
        image: response.lead_image_url,
        content: response.content,
        author: response.author,
        url: response.url
      };
    }).catch((err) => {
      console.log('Error: ', err);
    });
  }
}

export default Scraper;
