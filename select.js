module.exports.quickSelect = function(data,k){
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

var swap = function(data, left, current){
  let temp = data[left]
  data[left] = data[current]
  data[current] = temp
}