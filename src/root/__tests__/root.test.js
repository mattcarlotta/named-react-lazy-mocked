import React from 'react';
import App from '../index.js';

const React2 = require('react');

describe('App', () => {
  const wrapper = mount(<App />);

  it('renders without errors', () => {
    const homeComponent = wrapper.find('.app');
    expect(homeComponent).toHaveLength(1);
  });

  it('should partially mock React module', async () => {
    expect(jest.isMockFunction(React)).toBe(false);
    expect(jest.isMockFunction(React.lazy)).toBe(true);
    expect(jest.isMockFunction(React2.lazy)).toBe(true);
    expect(jest.isMockFunction(require('react').lazy)).toBe(true); // eslint-disable-line global-require
  });
});
