'use strict';

function Thermostat() {
  this.MINIMUM_TEMPERATURE = 10;
  this.PSM_ON_MAXIMUM_TEMPERATURE = 25;
  this.PSM_OFF_MAXIMUM_TEMPERATURE = 32;
  this.DEFAULT_TEMPERATURE = 20
  this.powerSavingMode = true;
  this._temperature = this.DEFAULT_TEMPERATURE;
};

Thermostat.prototype.viewTemp = function() {
    return this._temperature;
};

Thermostat.prototype.increase = function() {
  if (this.isMaximumTemperature()) {
    return;
  }
  return this._temperature += 1;
};

Thermostat.prototype.decrease = function() {
  if (this.isMinimumTemperature()) {
    return;
  }
  return this._temperature -= 1;
};

Thermostat.prototype.isMinimumTemperature = function() {
  return this._temperature === this.MINIMUM_TEMPERATURE;
};

Thermostat.prototype.isMaximumTemperature = function() {
  if (this.powerSavingMode == true) {
    return this._temperature === this.PSM_ON_MAXIMUM_TEMPERATURE
  } else {
    return this._temperature === this.PSM_OFF_MAXIMUM_TEMPERATURE
  };
};

Thermostat.prototype.switchMode = function() {
  return this.powerSavingMode = !this.powerSavingMode
}

Thermostat.prototype.reset = function() {
  this._temperature = 20
}

Thermostat.prototype.viewEnergyUsage = function() {
  if (this._temperature <= 18) {
    return 'low-usage'
  } else if (this._temperature >= 25) {
    return 'high-usage'
  } else {
    return 'medium-usage'
  }
};

Thermostat.prototype.getPowerSavingMode = function() {
  if (this.powerSavingMode) {
    return "ON"
  } else {
    return "OFF"
  }
}
