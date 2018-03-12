var expect = require('chai').expect
var program = require('../src/exercise4')
var i18nText = program.run

describe(`${program.title}`, function() {
  it('Function i18nText with an input function and a value should return a function', function() {
    var niceToSay = function(text, name) {
      return name + ', you are ' + text + ' today'
    }
    var funnyToday = i18nText(niceToSay, 'funny')
    expect(funnyToday).to.be.a('function')
  })
  it('Function i18nText with an input function and a value should return a function which can be evaluated', function() {
    var textToSay = function(text, name) {
      return text + ' ' + name
    }
    var inputLocaleFr = 'Bonjour'
    var inputLocaleEn = 'Hello'
    var inputName = 'Mickael'
    var outputFr = 'Bonjour Mickael'
    expect(i18nText(textToSay, inputLocaleFr)(inputName)).to.be.eql(outputFr)
    var outputEn = 'Hello Mickael'
    expect(i18nText(textToSay, inputLocaleEn)(inputName)).to.be.eql(outputEn)
  })
})
