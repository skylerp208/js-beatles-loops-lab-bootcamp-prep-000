// add solution here
var musicians = ['John','Paul','George','Ringo']
var instruments = ['Guitar','Bass','My heart strings','drums']
function theBeatlesPlay (musicians, instruments) {
  var newArray = []
  for (let i = 0; i < 4; i++){
    newArray.push(musicians[i] + ' plays ' + instruments[i])
  }
  return (newArray)
}

var facts = ["i'd like to be", "under the sea", "in an octopus's garden", "in the shade"]

function johnLennonFacts (facts) {
  var garden = []
  while (garden.length < 2) {
    garden.push(facts[garden.length] + "!!!");
  } 
  return garden
}
