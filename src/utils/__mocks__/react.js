const mockModule = () => {
  const originalModule = require.requireActual('react');
  return {
    ...originalModule,
    lazy: jest.fn(),
  };
};

jest.mock('react', () => mockModule());
module.exports = require.requireMock('react');
