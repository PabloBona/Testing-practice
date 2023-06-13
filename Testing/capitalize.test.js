function capitalize(string) {
  if (typeof string === 'string') {
    return string.charAt(0).toUpperCase() + string.slice(1);
  } else {
    throw new Error('Input must be a string');
  }
}

// test cases
describe('capitalize', () => {
  it('capitalizes the first character of a string', () => {
    // Arrange
    const input1 = 'hello';
    const input2 = 'world';
    const input3 = 'foo bar';

    // Act
    const result1 = capitalize(input1);
    const result2 = capitalize(input2);
    const result3 = capitalize(input3);

    // Assert
    expect(result1).toBe('Hello');
    expect(result2).toBe('World');
    expect(result3).toBe('Foo bar');
  });
});
