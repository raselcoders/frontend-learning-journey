// function maxfind(num1,num2){
// 	if(num1>num2){
// 		return num1;
// 	}
// 	else{
// 		return num2;
// 	}
// }

// const max_value=maxfind(89,100);
// console.log("Max of two is: "+ max_value);

// const value= Math.max(12,443,66,22,77,11,234,66,876,123);
// console.log(value);

// const value1=Math.min(12,443,66,22,77,11,234,66,876,123);
// console.log(value1);




// ___________________________________________________________________________________

// function maxfind(...numbers){
// 	return Math.max(...numbers);
// }

// const maxfinder = maxfind(12,44,66,234,77,907,456);
// console.log(maxfinder);



function maxfind(...numbers){
	let max=numbers[0];
	for(let i=0;i<numbers.length;i++){
		if(numbers[i]>max){
			max=numbers[i];
		}
	}
	return max;
}
console.log(maxfind(3,44,66,12,55,77,34));