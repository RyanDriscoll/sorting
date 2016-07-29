var bubbleSort = function (arr){
	for(var i = 0; i < arr.length; i++){
		var a = 0;
		for(var j = 0; j < arr.length; j++){
			if(arr[a] > arr[a+1]){
				var x = arr[a+1];
				arr[a+1] = arr[a];
				arr[a] = x;
			}
			a++;
		}		
	}
	return arr;
}