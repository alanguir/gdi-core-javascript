function calculate(){
    var age = 26;
    var oldAge = 96;
    var perDay = 2;

    var days = (oldAge - age) * 356;
    var total = perDay * days;
    
    //var resultDiv = document.getElementById('lifetime-supply');
    var resultDiv = $('#lifetime-supply');
    
    if(total > 40000){
      resultDiv.html("You have " + total + " tasks left until the ripe old age of " + oldAge + ". Wow! That's a lot!");
    }else{
      resultDiv.html("You have " + total + " tasks left until the ripe old age of " + oldAge + ". You better get started!");
    }
}

function favoriteThings(){
    var favoriteThings = ['Rabbits', 'Orange', 'Yogurt', 'Brussel Sprouts', 'Otters'];
    var result = 'My favorite things are: ';
    
    var resultDiv = $('#favorite-things');
    
    var resultParagraph = $('<p></p>');
    var result = 'My favorite things are: ';
    
    for (var i = 0; i<favoriteThings.length; i++){
        if (i < favoriteThings.length - 1){
            result += favoriteThings[i] + ', ';
        }else{
            result += "and " + favoriteThings[i] + '.';
        }
    }
    
    //var resultText = document.createTextNode(result);
    
    resultParagraph.append(result);
    resultDiv.append(resultParagraph);
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
    var resultDiv = $('<div>');
    
    var introParagraph = $('<p>');
    var introText = 'My friends are:';
    
    introParagraph.append(introText);
    resultDiv.append(introParagraph)
    
    for(var i = 0; i < friends.length; i++){
        var resultParagraph = $('<p>');
        var resultText = describeFriend(friends[i]);
        
        resultParagraph.append(resultText);
        resultDiv.append(resultParagraph);
    }
    
    //document.body.appendChild(resultDiv);
    $("body").append(resultDiv);
}

function describeFriend(friend){
    return "My friend " + friend.name + " has " + friend.hair + " hair. ";
}
var listItems = $('li');
      /*
      for (var i =0; i < listItems.length; i++) {
        var listItem = listItems[i];
        console.log(listItem);
      }
      */
    listItems.each(function(index, listItem){
        console.log(listItem);
    });








