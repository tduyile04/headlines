import React from 'react';
import { shallow, mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import mockArticles from '../../src/__mock__/articles.json';
import ArticlesPage from '../../src/js/components/articles/ArticlesPage.jsx';
import Article from '../../src/js/components/partials/in/Article.jsx';
import ArticleDetailsPage from
'../../src/js/components/articles/ArticleDetailsPage.jsx';

describe('<Article />', () => {
  it('should render 1 <ArticlesPage />', () => {
    const history = {
      location: {
        pathname: 'https://localhost:8080/cnn/top'
      }
    };
    const articles = mockArticles.articles;
    const tree = renderer.create(
      <MemoryRouter>
        <ArticlesPage articles={articles} history={history} />
      </MemoryRouter>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should render 1 <Article />', () => {
    const article = mockArticles.articles[0];
    const tree = renderer.create(
      <MemoryRouter><Article article={article} /></MemoryRouter>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should render 1 <ArticlePage />', () => {
    const history = {
      location: {
        pathname: 'https://localhost:8080/cnn/top'
      }
    };
    const wrapper = shallow(<ArticlesPage history={history}/>);
    expect(wrapper).toMatchSnapshot();
  });
  it('should render 1 <ArticleDetailsPage />', () => {
    const tree = renderer.create(
      <MemoryRouter><ArticleDetailsPage /></MemoryRouter>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
