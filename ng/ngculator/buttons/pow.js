'use strict';

import angular from 'angular';

const app = angular.module('ngculator');

class PowerButton {
  constructor (calcButtons) {
    this.name = 'power';
    this.label = 'x^y';
  }

  calc (previousValue, newValue) {
    return Math.pow(+previousValue, +newValue);
  }
}

app.service('powerButton', PowerButton);

// Instanciates addButton
app.run((powerButton, calcButtons) => {
  calcButtons.add(powerButton)
});
