var chai = require('chai')
var assert = chai.assert
var mocha = require('mocha')
var select = require('../select.js')

describe.only('quick select',function(){
  it('should select kth smallest from data',function(){
    let data=[1,7,4,9,5]
    let result = select.quickSelect(data,3)
    assert.equal(result,5)
  })
  it('should select kth smallest when have negative numbers', function(){
    let data=[1,7,9,-4,5,-3,10]
    let result = select.quickSelect(data,2)
    assert.equal(result,-3)
  })
})