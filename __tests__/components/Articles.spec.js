import React from 'react';
import { shallow } from 'enzyme';
import ArticlesPage from '../../src/js/components/articles/ArticlesPage.jsx';
import Article from '../../src/js/components/partials/in/Article.jsx';
import ArticleDetailsPage from
'../../src/js/components/articles/ArticleDetailsPage.jsx';

describe('<Article />', () => {
  it('should render 1 <Article />', () => {
    const wrapper = shallow(<Article />);
    expect(wrapper).toMatchSnapshot();
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
    const wrapper = shallow(<ArticleDetailsPage />);
    expect(wrapper).toMatchSnapshot();
  });
});
