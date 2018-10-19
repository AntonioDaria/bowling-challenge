'use strict';

describe("Game", function(){
  var game;

  beforeEach(function(){
     game = new Game();
   });

   it('can roll a score', function() {
     //act
     game.roll(5);
     //assert
     expect(game.score).toEqual([5])
   });

   it('adds a second roll', function() {
     game.roll(5)
     game.roll(4)
     expect(game.score).toEqual([5,4])
   })

   it('calculates the score after 2 rolls', function() {
     game.roll(5)
     game.roll(4)
     expect(game.totalScore()).toEqual(9)
   })

   it('calculates a strike', function() {
     game.roll(10)
     expect(game.isStrike()).toBe(true);
   })

   it('calculates a spare', function() {
     game.roll(2)
     game.roll(8)
     expect(game.isSpare()).toBe(true)
   })

   it('calculates a gutter game', function() {
     var step;
     for (step = 0; step < 20; step++) {
       game.roll(0)
     }
     expect(game.isGutter()).toBe(true)
   })



});
