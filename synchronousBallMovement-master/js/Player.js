class Player {
    constructor(){}
  
    getCount(){ // to get the playerCount, it counts the number of players and update the database
      var playerCountRef = database.ref('playerCount');
      playerCountRef.on("value",function(data){
        playerCount = data.val();
      })
    }
  
    updateCount(count){ //updates the playercount in database
      database.ref('/').update({
        playerCount: count
      });
    }
  
    update(name){
      var playerIndex = "player" + playerCount;
      database.ref(playerIndex).set({
        name:name
      });
    }
  }
  //© 2021 GitHub, Inc.