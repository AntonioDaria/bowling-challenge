'use strict';

function Game(){

  this.score = [];
}

Game.prototype.roll = function (pins) {
  return this.score.push(pins)

};

Game.prototype.totalScore = function () {
  var sum = 0;
  this.score.forEach(function(n) {
    sum += n
  })
  return sum
};
