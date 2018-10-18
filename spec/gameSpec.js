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

});
