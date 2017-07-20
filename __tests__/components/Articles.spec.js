import React from 'react';
import { shallow } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import mockArticles from '../../src/__mock__/articles.json';
import ArticlesPage from '../../src/js/components/articles/ArticlesPage.jsx';
import Article from '../../src/js/components/partials/in/Article.jsx';
import ArticleDetailsPage from
'../../src/js/components/articles/ArticleDetailsPage.jsx';
import localStore from '../../src/__mock__/localStorageMock';

describe('The Article parent component', () => {
  xit('should render the ArticlesPage component correctly each render', () => {
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
  it('should render the Article component correctly', () => {
    const article = mockArticles.articles[0];
    const tree = renderer.create(
      <MemoryRouter><Article article={article} /></MemoryRouter>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should render the ArticlePage component correctly', () => {
    const history = {
      location: {
        pathname: 'https://localhost:8080/cnn/top'
      }
    };
    const wrapper = shallow(<ArticlesPage history={history}/>);
    expect(wrapper).toMatchSnapshot();
  });
  it('should render ArticleDetailsPage component rightly, every render', () => {
    const user = {
      image: '../../../../images/login2.jpg',
      name: 'anonymous',
      email: 'anonymous@unknown.com'
    };
    localStore.setItem('userProfile', JSON.stringify(user));
    const tree = renderer.create(
      <MemoryRouter><ArticleDetailsPage history={history} /></MemoryRouter>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
