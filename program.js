var _ = require("lodash");

var worker = function(cities){
  return _.forEach(cities, function(city) {
    if (city.population > 1.0){
      city.size = "big";
    } else if (1.0 > city.population && city.population > 0.5) {
      city.size = "med";
    } else {
      city.size = "small";
    };
  });
};
module.exports = worker;
