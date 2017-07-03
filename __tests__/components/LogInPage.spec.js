import React from 'react';
import { shallow } from 'enzyme';
import LogInPage from '../../src/js/components/login/LogInPage.jsx';

describe('<LogInPage />', () => {
  it('should render 1 <LogInPage />', () => {
    const component = shallow(<LogInPage />);
    expect(component).toMatchSnapshot();
  });
});
