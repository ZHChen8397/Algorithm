var sorting = require('../sorting.js')
var chai = require('chai')
var assert = chai.assert
var mocha = require('mocha')
let sort = new sorting()
describe('mergeSort',() => {

  it('should be sorted by merge sort',() => {
    
    let data = [7,3,5,1,10]
    assert.deepEqual(sort.mergeSort(data),[1,3,5,7,10])
  })

  it('should can be sorted when have negative number',() => {
    let data = [7,3,5,1,-2]
    assert.deepEqual(sort.mergeSort(data),[-2,1,3,5,7])
  })

  it('should can be sorted when have the same numbers',() => {
    let data = [1,3,5,1,7]
    assert.deepEqual(sort.mergeSort(data),[1,1,3,5,7])
  })
})

describe('insertion sort', () => {
  it('should be sorted by insertion sort',() => {
    let data = [7,3,5,1,2]
    assert.deepEqual(sort.insertionSort(data),[1,2,3,5,7])
  })

  it('should can be sorted when have negative number',() => {
    let data = [7,3,5,-1,2]
    assert.deepEqual(sort.insertionSort(data),[-1,2,3,5,7])
  })

  it('hould can be sorted when have the same number',() => {
    let data = [1,3,5,1,7]
    assert.deepEqual(sort.insertionSort(data),[1,1,3,5,7])
  })
})

describe('quick sort ', () => {
  it('should be sorted by quick sort',() => {
    let data = [7,3,5,1,2]
    let left = 0
    let right = data.length - 1
    sort.quickSort(data, left, right)
    assert.deepEqual(data,[1,2,3,5,7])
  })

  it('should can be sorted when have negative number',() => {
    let data = [7,3,5,-1,2]
    let left = 0
    let right = data.length - 1
    sort.quickSort(data, left, right)
    assert.deepEqual(data,[-1,2,3,5,7])
  })

  it('should can be sorted when have the same number',() => {
    let data = [7,1,5,1,2]
    let left = 0
    let right = data.length - 1
    sort.quickSort(data, left, right)
    assert.deepEqual(data,[1,1,2,5,7])
  })
})

describe('counting sort',function(){
  it('should be sorted by counting sort',function(){
    let data = [7,3,1,6,6,3,2]
    let result = sort.countingSort(data)
    assert.deepEqual(result,[1,2,3,3,6,6,7])
  })
})
