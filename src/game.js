'use strict';

function Game(){

  this.score = [];
}

Game.prototype.roll = function (pins) {
  return this.score.push(pins)

};
