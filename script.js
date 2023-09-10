function firstNonRepeatedChar(str) {
 // Write your code here
	let i=0;
	for(; i<str.length;){
		if(str.charAt(i)==str.charAtcode(i+1)){
			i++;
		}
		else{
			console.log(str.charAt(i));
		}
	}
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
