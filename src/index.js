$(document).ready(function() {
  var thermostat = new Thermostat

  function getTemperature() {
    $.get('/temperature/get', function(data) {
      // replace html element with data
    });
  };

  var checkEnergyUsage = function() {
    if (thermostat.viewEnergyUsage() === 'medium-usage') {
      return $("#energy-usage-colour").removeClass("bg-success").removeClass("bg-danger").addClass("bg-warning")
    } else if (thermostat.viewEnergyUsage() === 'low-usage') {
      return $("#energy-usage-colour").removeClass("bg-warning").addClass("bg-success")
    } else {
      return $("energy-usage-colour").removeClass("bg-warning").addClass("bg-danger")
    }
  }

  var date = new Date()
  var time = date.toLocaleTimeString()
  $("#time").text(time)

  var day = date.getDate() + '/' + date.getMonth() + '/' + date.getFullYear()
  $("#date").text(day)
  console.log(date)

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


  $('#current-city').change(function() {
    var city = $('#current-city').val();
    displayWeather(city)
    })


  function displayWeather(city) {
    var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city;
    var token = '&appid=a3d9eb01d4de82b9b8d0849ef604dbed';
    var units = '&units=metric';
    $.get(url + token + units, function(data) {
      $('#temperature').text(data.main.temp)
      $('#humidity').text(data.main.humidity)
      $('#pressure').text(data.main.pressure)
      $('#weather').text(data.weather[0].main)
    })
  }

});
