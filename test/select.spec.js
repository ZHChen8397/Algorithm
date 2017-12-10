var chai = require('chai')
var assert = chai.assert
var mocha = require('mocha')
var select = require('../select.js')
let s = new select()
describe('quick select',function(){
  it('should select kth smallest from data',function(){
    let data=[1,7,4,9,5]
    let result = s.quickSelect(data,1)
    assert.equal(result,1)
  })
  it('should select kth smallest when have negative numbers', function(){
    let data=[1,7,9,-4,5,-3,10]
    let result = s.quickSelect(data,2)
    assert.equal(result,-3)
  })
})

describe('median of two sorted array',function(){
  it('should find median when give two sorted odd array with length n' , function(){
    let data1 =[1,12,15,26,38]
    let data2 =[2,13,17,30,45]
    let result = s.medianOf2SortedArray(data1,data2)
    assert.equal(result,16)
  })

  it('should find median when give two sorted even array with length n' , function(){
    let data1 =[1,12,15,17]
    let data2 =[2,13,16,18]
    let result = s.medianOf2SortedArray(data1,data2)
    assert.equal(result,14)
  })
})