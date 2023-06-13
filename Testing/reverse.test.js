function reverseString(string) {
  return string.split('').reverse().join('');
}

// Test cases
describe('reverseString', () => {
  it('reverses the string correctly', () => {
    // Arrange
    const input = 'Hello';

    // Act
    const result = reverseString(input);

    // Assert
    expect(result).toBe('olleH');
  });
});
