const expect = require('chai').expect
const program = require('../src/check')

describe(`${program.title}`, function() {
  it('Function run without parameter should return appropriate string', function() {
    expect(program.run()).to.be.eql('Everything seems fine to start evaluation')
  })
})
