module.exports = class sorting{
  constructor(){
  }

  mergeSort(data){
    if(data.length > 1){
      let middle = parseInt(data.length/2)
      let leftData = new Array()
      let rightData = new Array()
      for(let i = 0 ; i < middle ; i++ ){
        leftData[i] = data[i]
      }
      for(let j = middle ; j < data.length ; j++){
        rightData[j-middle] = data[j]
      }
      leftData = this.mergeSort(leftData)
      rightData = this.mergeSort(rightData)
      return merge(leftData,rightData)
    }
    return data
  }


  quickSort(data, left ,right){
    if(left < right){
      let i = left
      let j = right + 1
      while(true){
        while(i + 1 < data.length && data[++i] < data[left]) ; // find from left to right
        while(j - 1 > -1 && data[--j] > data[left]) ; // find from right to left
        if(i >= j) break
        swap(data,i,j)
      }
      swap(data,left,j) // move pivot to center
      this.quickSort(data, left, j - 1)
      this.quickSort(data, j + 1, right)
    }
  }

  insertionSort(data){
    let j
    for(let i = 0 ; i < data.length ; i++){
      let temp = data[i]
      for(j = i ; j > 0 && temp <= data[j-1] ; j--){
        data[j] = data[j-1]
      }
      data[j] = temp
    }
    return data
  }

  countingSort(data){
    let min = findMin(data)
    let max = findMax(data)
    let length = data.length
    let countArray = new Array()
    let resultArray = new Array()
    for(var i = 0; i < length; i++){
      if(isNaN(countArray[data[i]])) countArray[data[i]] = 1
      else countArray[data[i]] += 1
    }
    let index = 0
    for(var i = 0; i < countArray.length; i++){
      while(!isNaN(countArray[i])&& countArray[i]!= 0){
        resultArray[index++] = i
        countArray[i] --
      }
    }
    return resultArray
  }
}


var merge = function(leftData,rightData){
  let sortedData = new Array()
  let leftIndex = 0
  let rightIndex = 0
  for(let i = 0 ; i < leftData.length + rightData.length ; i++){
    if(leftIndex === leftData.length) sortedData.push(rightData[rightIndex++])
    else if(rightIndex === rightData.length) sortedData.push(leftData[leftIndex++])
    else if(leftData[leftIndex] <= rightData[rightIndex]){
      sortedData.push(leftData[leftIndex++])
    }
    else if(leftData[leftIndex] > rightData[rightIndex]){
      sortedData.push(rightData[rightIndex++])
    }
  }
  return sortedData
}

var swap = function(data, left, right){
  let temp = data[left]
  data[left] = data[right]
  data[right] = temp
}

var findMin = function(data){
  return data.reduce(function(a,b){
    return Math.min(a,b)
  })
}

var findMax = function(data){
  return data.reduce(function(a,b){
    return Math.max(a,b)
  })
}