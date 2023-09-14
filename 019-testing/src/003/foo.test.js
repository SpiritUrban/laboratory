const { foo, bar, def } = require('./foo.js');

jest.mock('./foo', () => {
  const originalModule = jest.requireActual('./foo');

  //Mock the default export and named export 'foo'
  return {
    ...originalModule,
    def: jest.fn(() => 'mocked baz'),
    foo: 'mocked foo',
  };
});

test('should do a partial mock', () => {
  const defaultExportResult = def();
  expect(defaultExportResult).toBe('mocked baz');
  expect(def).toHaveBeenCalled();

  expect(foo).toBe('mocked foo');
  expect(bar()).toBe('bar');
});