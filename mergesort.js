var split = function (arr){
	var arr1 = arr.slice(0,Math.floor(arr.length/2));
	var arr2 = arr.slice(Math.floor(arr.length/2));
	return [arr1,arr2];
}

var merge = function(arr1,arr2){
	var answerArr = [];
	if(arr1.length === 0 && arr2.length===0){
		return [];
	}

	if (arr1[0] <= arr2[0])
		answerArr.push(arr1.shift());
	else
		answerArr.push(arr2.shift());

	if(arr1.length === 0)
		answerArr = answerArr.concat(arr2);	
	else if(arr2.length === 0)
		answerArr = answerArr.concat(arr1);
	else
		answerArr = answerArr.concat(merge(arr1,arr2));

	return answerArr;
}


var mergeSort = function(arr){
	if(arr.length <= 1){
		return arr;
	}	
	var x = split(arr)[0];	
	var y = split(arr)[1];	
	var i = mergeSort(x);
	var j = mergeSort(y);
	var ans = merge(i,j);
	return ans;
}

var test = function(){
	for (var i = 9; i <= 12; i++) {
		var numItems = Math.pow(2, i);
		var nativeTestArray = [];

		for (var j = 0; j < numItems; j++) {
	   		var rand = Math.floor(Math.random() * numItems);
	    	nativeTestArray.push(rand);
	  	}

		var bTestArray = nativeTestArray.slice(0);
		var mTestArray = nativeTestArray.slice(0);

		console.time(numItems + ' native');
		nativeTestArray.sort(function(a, b){ return a - b; });
		console.timeEnd(numItems + ' native');

		console.time(numItems + ' bubble');
		bubbleSort(bTestArray);
		console.timeEnd(numItems + ' bubble');
		
		console.time(numItems + ' merge');
		mergeSort(mTestArray);
		console.timeEnd(numItems + ' merge');
	}
}