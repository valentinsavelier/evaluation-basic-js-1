var expect = require('chai').expect
var applyMap = require('../src/exercise3').run

describe(`${program.title}`, function() {
  it('Function applyMap without inputs should return an empty array', function() {
    var output = []
    expect(applyMap()).to.be.equal(output)
  })
  it('Function applyMap with inputValues but without inputMaps should return an empty array', function() {
    var inputValues = [5, 7, 18]
    var output = []
    expect(applyMap(inputValues)).to.be.equal(output)
  })
  it('Function applyMap with inputValues and 1 inputMap should return an array with 1 sub array with values mapped', function() {
    var inputValues = [12, 26, 42]
    function map(value) {
      return value - 2
    }
    var inputMaps = [map]
    var output = [[10, 24, 40]]
    expect(applyMap(inputValues, inputMaps)).to.be.eql(output)
  })
  it('Function applyMap with inputValues and 2 inputMaps should return an array with 2 sub array with values mapped', function() {
    var inputValues = [5, 7, 18]
    function map1(value) {
      return value + 10
    }
    function map2(value) {
      return value * 3
    }
    var inputMaps = [map1, map2]
    var output = [[15, 17, 28], [15, 21, 54]]
    expect(applyMap(inputValues, inputMaps)).to.be.eql(output)
  })
})
