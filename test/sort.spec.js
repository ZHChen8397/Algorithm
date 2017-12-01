var sorting = require('../sorting.js')
var chai = require('chai')
var assert = chai.assert
var mocha = require('mocha')
describe('mergeSort',() => {

  it('should be sorted by merge sort',() => {
    let sort = new sorting()
    let data = [7,3,5,1,-2]
    assert.deepEqual(sort.mergeSort(data),[-2,1,3,5,7])
  })
})

describe('insertion sort', () => {
  it.only('should be sorted by insertion sort',() => {
    let sort = new sorting()
    let data = [7,3,5,-1,2]
    assert.deepEqual(sort.insertionSort(data),[-1,2,3,5,7])
  })
})

describe('quick sort', () => {
  it.only('should be sorted by quick sort',() => {
    let sort = new sorting()
    let data = [7,3,5,-1,2]
    assert.deepEqual(sort.quickSort(data),[-1,2,3,5,7])
  })
})