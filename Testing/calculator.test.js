const calculator = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
  multiply: (a, b) => a * b,
  divide: (a, b) => {
    if (b === 0) {
      throw new Error('Cannot divide by zero');
    }
    return a / b;
  },
};

describe('Calculator', () => {
  describe('add', () => {
    it('should return the sum of two numbers', () => {
      // Arrange
      const a = 3;
      const b = 4;

      // Act
      const result = calculator.add(a, b);

      // Assert
      expect(result).toBe(7);
    });

    it('should return zero when adding two zeros', () => {
      // Arrange
      const a = 0;
      const b = 0;

      // Act
      const result = calculator.add(a, b);

      // Assert
      expect(result).toBe(0);
    });

    it('should handle negative numbers correctly', () => {
      // Arrange
      const a = -5;
      const b = 2;

      // Act
      const result = calculator.add(a, b);

      // Assert
      expect(result).toBe(-3);
    });
  });

  describe('subtract', () => {
    it('should return the difference between two numbers', () => {
      // Arrange
      const a = 10;
      const b = 4;

      // Act
      const result = calculator.subtract(a, b);

      // Assert
      expect(result).toBe(6);
    });

    it('should return zero when subtracting a number from itself', () => {
      // Arrange
      const a = 7;
      const b = 7;

      // Act
      const result = calculator.subtract(a, b);

      // Assert
      expect(result).toBe(0);
    });

    it('should handle negative numbers correctly', () => {
      // Arrange
      const a = 2;
      const b = 5;

      // Act
      const result = calculator.subtract(a, b);

      // Assert
      expect(result).toBe(-3);
    });
  });

  describe('divide', () => {
    it('should return the quotient of two numbers', () => {
      // Arrange
      const a = 10;
      const b = 2;

      // Act
      const result = calculator.divide(a, b);

      // Assert
      expect(result).toBe(5);
    });

    it('should throw an error when dividing by zero', () => {
      // Arrange
      const a = 8;
      const b = 0;

      // Act and Assert
      expect(() => calculator.divide(a, b)).toThrowError(
        'Cannot divide by zero',
      );
    });

    it('should handle decimal numbers correctly', () => {
      // Arrange
      const a = 5;
      const b = 2;

      // Act
      const result = calculator.divide(a, b);

      // Assert
      expect(result).toBeCloseTo(2.5);
    });
  });

  describe('multiply', () => {
    it('should return the product of two numbers', () => {
      // Arrange
      const a = 3;
      const b = 4;

      // Act
      const result = calculator.multiply(a, b);

      // Assert
      expect(result).toBe(12);
    });

    it('should return zero when multiplying by zero', () => {
      // Arrange
      const a = 7;
      const b = 0;

      // Act
      const result = calculator.multiply(a, b);

      // Assert
      expect(result).toBe(0);
    });

    it('should handle negative numbers correctly', () => {
      // Arrange
      const a = -5;
      const b = 2;

      // Act
      const result = calculator.multiply(a, b);

      // Assert
      expect(result).toBe(-10);
    });
  });
});
