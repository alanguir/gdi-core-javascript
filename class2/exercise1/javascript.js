function calculate(){
    var age = 26;
    var oldAge = 96;
    var perDay = 2;

    var days = (oldAge - age) * 356;
    var total = perDay * days;
    if(total > 40000){
      console.log("You have " + total + " tasks left until the ripe old age of " + oldAge + ". Wow! That's a lot!");
    }else{
      console.log("You have " + total + " tasks left until the ripe old age of " + oldAge + ". You better get started!");
    }
}

function favoriteThings(){
    var favoriteThings = ['Rabbits', 'Orange', 'Yogurt', 'Brussel Sprouts', 'Otters'];
    var result = 'My favorite things are: ';
    for (var i = 0; i<favoriteThings.length; i++){
        if (i < favoriteThings.length - 1){
            result += favoriteThings[i] + ', ';
        }else{
            result += "and " + favoriteThings[i] + '.';
        }
    }
    console.log(result);
}