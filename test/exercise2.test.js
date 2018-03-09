var expect = require('chai').expect
var program = require('../src/exercise2')
var mapCustomer = program.run

describe(`${program.title}`, function() {
  it('Function mapCustomer without an input should throw an error', function() {
    expect(mapCustomer()).to.throw('A customer must be defined')
  })
  it('Function mapCustomer with an empty object as input should return a particular object', function() {
    var input = {}
    var output = {
      firstname: 'John',
      lastname: 'Doe',
      products: [],
      moneySpent: 0
    }
    expect(mapCustomer(input)).to.be.eql(output)
  })
  it('Function mapCustomer with an object as input should return an object with a new property moneySpent', function() {
    var input = {
      firstname: 'Jack',
      lastname: 'Smith',
      products: [{ label: 'shoes', price: '89' }, { label: 'book', price: '14' }, { label: 'smartphone', price: '499' }]
    }
    var output = {
      firstname: 'Jack',
      lastname: 'Smith',
      products: [{ label: 'shoes', price: '89' }, { label: 'book', price: '14' }, { label: 'smartphone', price: '499' }],
      moneySpent: 602
    }
    expect(mapCustomer(input)).to.be.eql(output)
  })
  it('Function mapCustomer should not have side effects on the input', function() {
    var inputBefore = {
      firstname: 'Jack',
      lastname: 'Smith',
      products: [{ label: 'shoes', price: '89' }, { label: 'book', price: '14' }, { label: 'smartphone', price: '499' }]
    }
    var inputAfter = {
      firstname: 'Jack',
      lastname: 'Smith',
      products: [{ label: 'shoes', price: '89' }, { label: 'book', price: '14' }, { label: 'smartphone', price: '499' }]
    }
    mapCustomer(inputBefore)
    expect(inputBefore).to.be.eql(inputAfter)
  })
})
