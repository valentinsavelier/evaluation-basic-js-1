var removeNegativeValue = function(values) {
  // Your future job begins here ...
}

var removeNegativeValue = function(input)
{
  if (input === undefined)
  {
    var output = [];
    return output;
  }
  else
  {
    var output = input.filter(function(number)
      {
        return number >= 0;
      })
    return output;
  }
}

module.exports = {
  title: 'Exercise 1',
  run: removeNegativeValue
}








	
module.exports = {
  title: 'Exercise 1',
  run: removeNegativeValue
}
