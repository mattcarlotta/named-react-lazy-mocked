import * as React from 'react';
import Home from '../index.js';

describe('Home', () => {
  const wrapper = shallow(<Home />);

  it('renders without errors', () => {
    const homeComponent = wrapper.find('.app');
    expect(homeComponent).toHaveLength(1);
  });

  it('should partially mock React module', async () => {
    expect(jest.isMockFunction(React.lazy)).toBe(true);
  });
});
