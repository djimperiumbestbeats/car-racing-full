class Form{
    constructor(){
 
this.input=createInput("")               
this.button=createButton('play')
 this.greeting=createElement('h3')
 this.reset=createButton('reset')
    }

    hideForm()
    {
this.greeting.hide()
this.button.hide()
this.input.hide()
    }

    display(){
var title=createElement('h2')
title.html('car racing game')
title.position(displayWidth/2-50,0)



this.input.position(displayWidth/2-40,displayHeight/2-80)
this.button.position(displayWidth/2+30,displayHeight/2)
this.reset.position(displayWidth-100,20)

this.button.mousePressed(()=>{
 
       this.input.hide()
        this.button.hide()
player.name=this.input.value()
playercount=playercount+1
player.index=playercount
player.update()
player.updateCount(playercount)

this.greeting.html("hello "+player.name)
this.greeting.position(displayWidth/2-70,displayHeight/4)

        

    })
    this.reset.mousePressed(()=>{
        player.updateCount(0)
        game.update(0)
        database.ref('/').update({
        players:null,
        carsatend:0
        })
    })

    }



}