import React from 'react';
import { shallow } from 'enzyme';
import LogInPage from '../../src/js/components/login/LogInPage.jsx';

describe('The LogInPage component', () => {
  it('should render correctly every time', () => {
    const component = shallow(<LogInPage />);
    expect(component).toMatchSnapshot();
  });
});
