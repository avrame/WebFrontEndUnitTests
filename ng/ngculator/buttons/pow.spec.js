'use strict';

describe('powerButton', () => {
  let powerButton;

  const A_NUMBER = 2;
  const ANOTHER_NUMBER = 3;
  const POWER_RESULT = Math.pow(A_NUMBER, ANOTHER_NUMBER);

  beforeEach(angular.mock.module('ngculator'));
  beforeEach(inject((_powerButton_) => {
    powerButton = _powerButton_;
  }));

  describe('calc()', () => {
    it('should raise the first number by the second number', () => {
      expect(powerButton.calc(A_NUMBER, ANOTHER_NUMBER)).toBe(POWER_RESULT);
    });
  });
});
