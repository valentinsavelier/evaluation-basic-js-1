var expect = require('chai').expect
var program = require('../src/exercise1')
var removeNegativeValue = program.run

describe(`${program.title}`, function() {
  it('Function removeNegativeValue without an input should return an empty array', function() {
    var output = []
    expect(removeNegativeValue()).to.be.eql(output)
  })
  it('Function removeNegativeValue with an empty array as input should return an empty array', function() {
    var input = []
    var output = []
    expect(removeNegativeValue(input)).to.be.eql(output)
  })
  it('Function removeNegativeValue with an array as input should return array filtered by negative value', function() {
    var input = [34, -5, 9, 18, 0, -7, 32]
    var output = [34, 9, 18, 0, 32]
    expect(removeNegativeValue(input)).to.be.eql(output)
  })
})
