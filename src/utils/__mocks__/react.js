const mockModule = () => ({
  ...require.requireActual('react'),
  lazy: jest.fn(),
});

jest.mock('react', () => mockModule());
module.exports = require.requireMock('react');
