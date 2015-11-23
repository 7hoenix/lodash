var _ = require("lodash");

var worker = function(cities) {
  var cityNames = Object.keys(cities);
  var isHot = function(temp){
    return temp > 19;
  }
  var hot = cityNames.filter(function (cityName){
    var temps = cities[cityName];
    return _.every(temps, isHot);
  })

  var warm = cityNames.filter(function (cityName){
    var temps = cities[cityName];
    return _.some(temps, isHot) && !_.every(temps, isHot);
  })
  return { hot: hot, warm: warm };
}
module.exports = worker
