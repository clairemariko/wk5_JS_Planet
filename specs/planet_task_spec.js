var assert = require('chai').assert;
var Planet = require('../planet_task.js')


planet1 = new Planet ('mars');
planet2 = new Planet ('jupitar');


describe('planet1', function (){
  it('should tell me its name', function(){
    assert.equal('mars', planet1.name)
  });
})


describe('planet2', function (){
  it('should tell me its name', function(){
    assert.equal('jupitar', planet2.name)
  });
})