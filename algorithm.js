var sorting = require('./sorting')
module.exports = class Algorithm{
  constructor(){
    var sort = new sorting()
    console.log(sort.mergeSort(123))
  }
}