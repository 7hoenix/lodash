var _ = require("lodash");

var worker = function(words) {
  var sortedWords = _.chain(words)
  .sort()
  .map(function(word) {
    return word.toUpperCase() + "CHAINED";
  });
  return sortedWords;
}
module.exports = worker
