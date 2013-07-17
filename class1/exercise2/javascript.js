//function calculate(){
	var age = 26;
	var oldAge = 96;
	var perDay = 2;
	
	var days = (oldAge - age) * 365;
	var total = perDay * days;
	
	if(total > 40000){
		console.log("You have " + total + " tasks left until the ripe old age of " + oldAge + ". Wow! That's a lot!");
	}else{
		console.log("You have " + total + " tasks left until the ripe old age of " + oldAge + ". You better get started!");
	}
//}