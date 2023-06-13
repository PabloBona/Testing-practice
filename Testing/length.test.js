function stringLength(string) {
  console.assert(
    string.length >= 1 && string.length <= 10,
    'String length must be between 1 and 10 characters.',
  );
  return string.length;
}

// Test cases
describe('stringLength', () => {
  it('The correct length of a string', () => {
    // Arrange
    const input = 'Hello';

    // Act
    const result = stringLength(input);

    // Assert
    expect(result).toBe(5);
  });

  it('This is an empty string', () => {
    // Arrange
    const input = '';

    // Act and Assert
    expect(() => stringLength(input)).toThrowError(
      'String length must be between 1 and 10 characters.',
    );
  });

  it('This is a long string, more than 10 characters', () => {
    // Arrange
    const input = 'This is a very long string';

    // Act and Assert
    expect(() => stringLength(input)).toThrowError(
      'String length must be between 1 and 10 characters.',
    );
  });

  it('handles strings with length equal to 1 and 10', () => {
    // Arrange
    const input1 = 'a';
    const input2 = 'abcdefghij';

    // Act
    const result1 = stringLength(input1);
    const result2 = stringLength(input2);

    // Assert
    expect(result1).toBe(1);
    expect(result2).toBe(10);
  });
});
