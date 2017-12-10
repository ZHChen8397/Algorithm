# Project name: 
### algorithm_practice
 
# Introduce 

This is an algorithm practice project.


~~It's now only has three sorting algorithm : merge sort, quick sort and insertion sort.~~

Dec 8. update:
new algorithm: quickSelect

Dec 9. update:
new algorithm: medianOf2SortedArray

Dec 10. update:
new algorithm: counting sort


##### The algorithm only support for numbers. 

# Install

 	npm install algorithm_practice

# How to use it

##### init

	var algorithm = require('algorithm_practice')
	let alg = new algorithm()

##### mergeSort

	let result = alg.mergeSort(data,left,right)

##### quickSort

	alg.quickSort(data) // data will be sorted because of called by reference

##### insertionSort

	let result = alg.insertionSort(data)

##### quickSelect

	let result = alg.quickSelect(data,k) // k means select the kth smallest from data
	
##### medianOf2SortedArray

	let result = alg.medianOf2SortedArray(data1,data2) //note that the length of two data must be the same

##### countingSort

	let result = alg.countingSort(data) // data must be positive numbers
