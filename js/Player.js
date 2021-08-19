class Player {
  constructor(){
    this.index = null;
    this.distance = 0;
    this.name = null;
    // 1. Add a variable rank with value null in the Player class.
    this.rank = null;
  }

  getCount(){
    var playerCountRef = database.ref('playerCount');
    playerCountRef.on("value",(data)=>{
      playerCount = data.val();
    })
  }

  updateCount(count){
    database.ref('/').update({
      playerCount: count,
      //7. first coma after count (above)
      finishedPlayers:0
    });
  }

  update(){
    var playerIndex = "players/player" + this.index;
    database.ref(playerIndex).set({
      name:this.name,
      distance:this.distance
    });
  }

  getPlayerInfo(){
    var playerInfoRef = database.ref('players');
    playerInfoRef.on("value",(data)=>{
      allPlayers = data.val();
    })
  }
 // 2. to get the value of finishedPlayers from the database and store it in rank
  getFinishedPlayers()
  {
    database.ref('finishedPlayers').on("value",(data)=>{
      this.rank=data.val();
    })
  }

  //3. to update the value of finishedPlayers according to the value of rank.

  updatedFinishedPlayers()
  {
    database.ref('/').update({
      finishedPlayers : this.rank
    })
  }
}
