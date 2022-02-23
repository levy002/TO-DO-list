import createMockDocument from '../mocks/documentMock.js';

describe('createMockDocument', () => {
  it('create a ul in the document', () => {
    createMockDocument();
    expect(document.children.length).toEqual(1);
  });
});
