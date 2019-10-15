'use strict';

describe("thermostat", function() {
  var thermostat = new Thermostat;

  beforeEach(function() {
    thermostat = new Thermostat
  });

  describe("initial temperature", function() {
    it("starts at 20 degrees", function() {
      expect(thermostat.viewTemp()).toEqual(20);
    });
  });

  describe("increase temperature", function() {
    it("increases temp by 1", function() {
      thermostat.increase();
      expect(thermostat.viewTemp()).toEqual(21);
    });
  });

  describe("descrease temperature", function() {
    it("decreases by 1", function() {
      thermostat.decrease();
      expect(thermostat.viewTemp()).toEqual(19);
    });
  });

  describe("minimum temperature", function() {
    it("stops decreasing at minimum temperature", function() {
      for (var i = 0; i < 12; i++) {
        thermostat.decrease();
      };
      expect(thermostat.viewTemp()).toEqual(10)
    });
  });

  describe("maximum temperature", function() {
    it("has max temp of 25 degrees when power saving mode is on", function() {
      for (var i = 0; i < 7; i++) {
        thermostat.increase();
      };
      expect(thermostat.viewTemp()).toEqual(25);
    });

    it("has max temp of 32 degrees when power saving mod is off", function() {
      thermostat.switchMode()
      for (var i = 0; i < 13; i++) {
        thermostat.increase();
      };
      expect(thermostat.viewTemp()).toEqual(32);
    })
  });

  describe("reset", function() {
    it("resets the temperature to 20", function() {
      thermostat.increase()
      thermostat.reset()
      expect(thermostat.viewTemp()).toEqual(20);
    });
  });

  describe("switchMode", function() {
    it("switches the power saving mode to off", function() {
      thermostat.switchMode()
      expect(thermostat.getPowerSavingMode()).toEqual(false)
    })

    it("switches back to false when pressed twice", function() {
      thermostat.switchMode()
      thermostat.switchMode()
      expect(thermostat.getPowerSavingMode()).toEqual(true)
    })
  });

  describe("viewEnergyUsage", function() {
    describe("it displays usage", function() {
      it("displays low-usage", function() {
        for (var i = 0; i < 2; i++) {
          thermostat.decrease();
        }
        expect(thermostat.viewEnergyUsage()).toEqual('low-usage')
      });

      it("displays med-usage", function() {
        expect(thermostat.viewEnergyUsage()).toEqual('medium-usage')
      })

      it("displays high-usage", function() {
        for (var i = 0; i < 5; i++) {
          thermostat.increase();
        }
        expect(thermostat.viewEnergyUsage()).toEqual('high-usage')
      });
    });
  });
});
