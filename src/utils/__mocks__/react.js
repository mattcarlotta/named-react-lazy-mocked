jest.mock('react', () => ({
  ...require.requireActual('react'),
  lazy: jest.fn(),
}));
module.exports = require.requireMock('react');
