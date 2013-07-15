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

function myFriends(){
    var friends = [
        {name: 'Santa Claus',
        hair: 'red'},
        {name: 'Easter Bunny',
        hair: 'brown'},
        {name: 'Tooth Fairy',
        hair: 'blue'}
    ];
    var results = "My friends: "
    for(var i = 0; i < friends.length; i++){
        results += describeFriend(friends[i]);
    }
    console.log(results)
}
function describeFriend(friend){
    return "My friend " + friend.name + " has " + friend.hair + " hair. ";
}