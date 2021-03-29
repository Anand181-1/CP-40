class Game{
    constructor(){

    }
    getState() {
        var gameStateRef = database.ref('gameState');
        gameStateRef.on("value", function (data) {
            gameState = data.val();
        })

    }

    update(state) {
        database.ref('/').update({
            gameState: state
        });
    }
    async start() {
            if (gameState === 0) {
                player = new Player();
                var playerCountRef = await database.ref('playerCount').once("value");
                if (playerCountRef.exists()) {
                    playerCount = playerCountRef.val();
                    player.getCount();
                }
                form = new Form()
                form.display();
            }
    player1 = createSprite(200,500);
    player1.addImage("player1",playerimg);
    
    player2 = createSprite(800,500);
    player2.addImage("player2", playerimg);
    players = [player1,player2];

        }
    
    play(){
        
                form.hide();

                Player.getPlayerInfo();
                 image(backimg, 0, 0, 1000, 800);
                 var x=100;
                 var y=200;
                 var index =0;
                 drawSprites();
                 for(var plr in allPlayers){
                    
                    
                     index = index+1;
                     x = 500 - allPlayers[plr].distance;
                     y = 550;
                     
                     players[index -1].x = x;
                     players[index -1].y = y;
                       
                     if(index === player.index){
                        fill("black");
                        strokeWeight(5); 
                        textSize(15)
                        text(allPlayers[plr].name,x,y);
                        noFill();
                        noStroke();
                     }
                    
                    textSize(25);
                    text("Player 1: " + allPlayers.player1.score, 50, 30);
                    text("Player 2: " + allPlayers.player2.score, 50, 60);
                }
                
                
                 

                if (keyIsDown(RIGHT_ARROW) && player.index !== null) {
                    player.distance -= 10
                    player.update();
                }
                if (keyIsDown(LEFT_ARROW) && player.index !== null) {
                    player.distance += 10
                    player.update();
                }
            
                 if (frameCount % 20 === 0) {
                     fruits = createSprite(random(100, 1000), 0, 100, 100);
                     fruits.velocityY = 6;
                     var rand = Math.round(random(1, 5));
                     switch(rand){
                         case 1: fruits.addImage("fruit1",fruit1img);
                         break;
                         case 2: fruits.addImage("fruit1", fruit2img);
                         break;
                         case 3: fruits.addImage("fruit1", fruit3img);
                         break;
                         case 4: fruits.addImage("fruit1", fruit4img);
                         break;
                         case 5: fruits.addImage("fruit1", fruit5img);
                         break;
                     }
                     fruitGroup.add(fruits);
                     
                 }
                 
                  if (player.index !== null) {
                     for(var i=0; i < fruitGroup.length;i++){
                         if(fruitGroup.get(i).isTouching(players)){
                            fruitGroup.get(i).destroy()
                            player.score++
                            player.update()
                         }
                     }
                     
                  }
    }

    end(){
        console.log("Game Ended")
    }
}