# Project name: 
### algorithm_practice
 
# Introduce 

This is an algorithm practice project.


It's now only has three sorting algorithm : merge sort, quick sort and insertion sort.


The algorithm only support for numbers. 

# Install

 	npm install algorithm_practice

# How to use it

##### init

	var alg = require('algorithm_practice')
	let sort = new alg()

##### mergeSort

	let result = sort.mergeSort(data,left,right)

##### quickSort

	sort.quickSort(data) // data will be sorted because of called by reference

##### insertionSort

	let result = sort.insertionSort(data)


	
