var sorting = require('./sorting')
var select = require('./select')
module.exports = class Algorithm{
  constructor(){
    this.sort = new sorting()
    this.resultData
  }

  mergeSort(data){
    return this.resultData = this.sort.mergeSort(data)
  }

  quickSort(data,left,right){
    this.sort.quickSort(data,left,right)
  }

  insertionSort(data){
    return this.resultData = this.sort.insertionSort(data)
  }

  quickSelect(data,k){
    return select.quickSelect(data,k)
  }
  
}