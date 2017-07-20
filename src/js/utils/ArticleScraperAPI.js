import mercuryParser from 'mercury-parser';

const mercury = mercuryParser(process.env.MERCURY_API_KEY);

class Scraper {
  static scrapeArticle(url) {
    return mercury.parse(url).then((response) => {
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
