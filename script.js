function firstNonRepeatedChar(str) {
 // Write your code here
	let i=0;
	while(i<str.length){
		if(str.charAt(i)==str.charAt(i+1)){
			i++;
		}
		else if{
			console.log(str.charAt(i));
		}
		else if(str.charAt(i)!=str.charAt(i+1)){
			console.log('null');
		}
	}
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
