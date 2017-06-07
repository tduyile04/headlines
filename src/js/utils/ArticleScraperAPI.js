import mercury from 'mercury-parser';

mercury(process.env.MERCURY_API_KEY);

class Scraper {
  static scrapeArticle(url) {
    return mercury.parse(url).then((response) => {
      return {
        title: response.title,
        image: response.lead_image_url,
        content: response.content,
        author: response.author
      };
    }).catch((err) => {
      console.log('Error: ', err);
    });
  }
}

export default Scraper;
