const mockFunctions = () => {
  const original = require.requireActual('react');
  return {
    ...original, // Pass down all the exported objects
    lazy: jest.fn(),
  };
};

jest.mock('react', () => mockFunctions());
const React = require.requireMock('react');

module.exports = React;
