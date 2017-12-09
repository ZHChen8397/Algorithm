module.exports = class select{
  constructor(){}
  quickSelect(data,k){
    k = k - 1
    let left = 0
    let right = data.length - 1
    while(true){
  
      if(left == right) return data[left]
      let pivot = data[right]
      
      let current = left
      for(var i = left; i < right; ++i){
        if(data[i] < pivot){
          swap(data,i,current)
          current ++
        }
      }
      swap(data,current,right)
      if(k == current) return data[k]
      else if(current > k) right = current - 1
      else if(current < k) left = current + 1  
    }
  }

  medianOf2SortedArray(data1,data2){    
    let length = data1.length
    let mid
    let n1 = new Array()
    let n2 = new Array()
    let m1
    let m2
    if(length <= 0) return -1
    if(length == 1)return ((data1[0] + data2[0]) /2)
    if(length == 2)return (Math.max(data1[0],data2[0]) + Math.min(data1[1],data2[1]))/2
    
    if(length % 2 == 0){
      mid = length/2
      m1 = (data1[length/2] + data1[(length/2)+1])/2
      m2 = (data2[length/2] + data2[(length/2)+1])/2
    }
    else {
      mid = Math.ceil(length/2)
      m1 = data1[Math.ceil(length/2)]
      m2 = data2[Math.ceil(length/2)]
    }
    if(m1 > m2){
      if(length % 2 == 0){
        for(var i = 0; i< mid; i++){
          n1[i] = data1[i]
          n2[i] = data[mid + i]
        }
        return this.medianOf2SortedArray(n1,n2)
      }
      else{
        for(var i = 0;i<mid ; i++){
          n1[i] = data1[i]
          n2[i] = data2[mid - 1 + i]
        }
        return this.medianOf2SortedArray(n1,n2)
      }
    }
    else{
      if(length % 2 == 0){
        for(var i = 0; i< mid; i++){
          n1[i] = data1[mid + i]
          n2[i] = data2[i]
        }
        return this.medianOf2SortedArray(n1,n2)
      }
      else{
        for(var i = 0;i<mid ; i++){
          n1[i] = data1[mid - 1 + i]
          n2[i] = data2[i]
        }
        return this.medianOf2SortedArray(n1,n2)
      }
    }
  }
}


var swap = function(data, left, current){
  let temp = data[left]
  data[left] = data[current]
  data[current] = temp
}