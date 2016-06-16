// Create a SolarSystem constructor that takes in a name and has an initial empty array of planets.

var solarSystem = function(name){
  this.name = name;
  this.planets = [];

  this.addPlanet=function(planet){
    this.planets.push(planet);
  }
};

module.exports = solarSystem;
