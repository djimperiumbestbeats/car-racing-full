class Game{
constructor(){

}
getState()
{
var gameStateRef=database.ref('gameState')
gameStateRef.on("value",function(data){
    gameState=data.val()
})

}
update(state){
    database.ref('/').update({
        gameState:state
    })
}

 async start(){
if(gameState===0){
player=new Player()
var playercountRef=await database.ref('playercount').once("value")
if(playercountRef.exists()){
   playercount=playercountRef.val() 

player.getCount()
}
form=new Form()
form.display()
}
car1=createSprite(100,200)
car1.addImage("car1",c1)
car2=createSprite(300,200)
car2.addImage("car2",c2)

car3=createSprite(500,200)
car3.addImage("car3",c3)
car4=createSprite(700,200)
car4.addImage("car4",c4)
cars=[car1,car2,car3,car4]
}

play(){
form.hideForm()
//textSize(30)
//text("game start",120,100)
Player.getplayerinfo()
player.getcarsatend()
if(allPlayers!==undefined){
    background(groundImg)
    image(trackImg,0,-displayHeight*4,displayWidth,displayHeight*5)

    var index=0
    var x=150
    var y
    //var display_positions=130
     for(var plr in allPlayers){
         index=index+1
         x=x+200
         y=displayHeight-allPlayers[plr].distance

         cars[index-1].x=x
         cars[index-1].y=y

         if(index===player.index){
             stroke(10)
             fill("red")
             ellipse(x,y,60,60)
             
             cars[index-1].shapeColor="red"
            camera.position.x=displayWidth/2
            camera.position.y=cars[index-1].y
            
         }
         textSize(20)
         text(allPlayers[plr].name,cars[index-1].x-20,cars[index-1].y+75)
         
        /*if(plr==="player"+player.index){
        fill("red")
        
        }
        
        else{
            fill("black")
        }*/
      //  display_positions+=20
       // textSize(15)
        //text(allPlayers[plr].name+": "+allPlayers[plr].distance,120,display_positions)
    }
    drawSprites()
}

if(keyWentDown(UP_ARROW)&&player.index!==null){
    player.distance+=30
    player.update()
}



if(player.distance>3550){
    gameState=2
    player.rank=player.rank+1
    Player.updatecarsatend(player.rank)
   
}
}
end(){
    console.log("GameEnded")
    console.log(player.rank)
    var message=createElement('h2')
    message.html("congratulations " +player.name+ " your rank is " + player.rank)
    message.position(displayWidth/2-80,displayHeight/4)
}
}