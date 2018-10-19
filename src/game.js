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

Game.prototype.isStrike = function () {
  if (this.score[0] === 10){
    return true;
  }
};

Game.prototype.isSpare = function () {
  if (this.score[0] === 2 && this.score[1] === 8){
    return true;
  }
};

Game.prototype.isGutter = function () {
  if (this.totalScore() === 0 ){
    return true;
  }
};
