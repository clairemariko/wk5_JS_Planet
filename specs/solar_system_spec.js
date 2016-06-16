var assert = require('chai').assert;
var Planet = require('../planet_task.js')
var solarSystem = require('../solar_system.js')


//remeber you always need to new it up after a constructor

describe('solarSystem', function(){

  var solarSystem1= new solarSystem ('andromeda')

  it('should have an empty array', function(){
    assert.deepEqual([], solarSystem1.planets);
  });


  it('should add a planet', function(){

      var solarSystem2 = new solarSystem ('milkyway');
      var earth = new Planet ('earth');

      solarSystem2.addPlanet(earth);

      assert.deepEqual([earth], solarSystem2.planets)
  });

  
});


