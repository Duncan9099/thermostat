$(document).ready(function() {
  var thermostat = new Thermostat

  var checkEnergyUsage = function() {
    if (thermostat.viewEnergyUsage() === 'medium-usage') {
      return $("#energy-usage-colour").removeClass("bg-success").removeClass("bg-danger").addClass("bg-warning")
    } else if (thermostat.viewEnergyUsage() === 'low-usage') {
      return $("#energy-usage-colour").removeClass("bg-warning").addClass("bg-success")
    } else {
      return $("#energy-usage-colour").removeClass("bg-warning").addClass("bg-danger")
    }
  }

  $('#temperature-current').text(thermostat.viewTemp())
  $("#power-saving-status").text(thermostat.getPowerSavingMode())
  $("#energy-usage").text(thermostat.viewEnergyUsage())

  $("#temperature-up").click(function(event) {
    thermostat.increase()
    $('#temperature-current').text(thermostat.viewTemp())
    $("#energy-usage").text(thermostat.viewEnergyUsage())
    checkEnergyUsage()
  })

  $("#temperature-down").click(function(event) {
    thermostat.decrease()
    $('#temperature-current').text(thermostat.viewTemp())
    $("#energy-usage").text(thermostat.viewEnergyUsage())
    checkEnergyUsage()
  })

  $("#temperature-reset").click(function(event) {
    thermostat.reset()
    $('#temperature-current').text(thermostat.viewTemp())
    $("#energy-usage").text(thermostat.viewEnergyUsage())
    checkEnergyUsage()
  })

  $("#powersaving-on").click(function(event) {
    if (thermostat.powerSavingMode) {
      $("#power-saving-status").text(thermostat.getPowerSavingMode())
    } else {
      thermostat.switchMode()
      $("#power-saving-status").text(thermostat.getPowerSavingMode())
    }
  })

  $("#powersaving-off").click(function(event) {
    if (thermostat.powerSavingMode === false) {
      $("#power-saving-status").text(thermostat.getPowerSavingMode())
    } else {
      thermostat.switchMode()
      $("#power-saving-status").text(thermostat.getPowerSavingMode())
    }
  })




})
