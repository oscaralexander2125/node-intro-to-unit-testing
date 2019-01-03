const expect = require('chai').expect;

const fizzBuzz= require('../fizzBuzzer');

describe ('fizzBuzzer', function() {
  it ('should return fizz-buzz', function() {
    const values= [
      15,
      30,
      45,
    ];
    values.forEach(function(value) {
      const answer= fizzBuzz(value);
      expect(answer).to.equal('fizz-buzz');
    });
  });
  it ('should return buzz', function() {
    const values= [
      5,
      10,
      20,
    ];
    values.forEach(function(value) {
      const answer= fizzBuzz(value);
      expect(answer).to.equal('buzz');
    });
  });
  it ('should return fizz', function() {
    const values = [
      3,
      6,
      9,
    ];
    values.forEach(function(value) {
      const answer=fizzBuzz(value);
      expect(answer).to.equal('fizz');
    });
  });
  it ('need to be numeric value', function() {
    const values = ['sdf', 'fds'];
    values.forEach(function(value) {
      expect(function() {
        module.exports(value);
      }).to.throw(Error);
    });
  });
});
