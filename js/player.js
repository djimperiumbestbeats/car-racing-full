class Player{
    constructor(){
        this.index=null
        this.distance=0
        this.name=null
        this.rank=null
    }
    getCount(){
var playercountRef=database.ref('playercount')
playercountRef.on("value", function(data){
playercount=data.val()
})
    }

    updateCount(count){
        database.ref('/').update({
            playercount:count
        })

    }

    update(){
        var playerIndex="players/player "+this.index
        database.ref(playerIndex).set({
            name:this.name,
            distance:this.distance
        })
    }
static getplayerinfo(){
    var playerinfoRef=database.ref('players')
    playerinfoRef.on("value",(data)=> {
        allPlayers=data.val()
    })
}

getcarsatend(){
database.ref('carsatend').on("value",(data)=>{
    this.rank=data.val()
})

}

static updatecarsatend(rank){
    database.ref('/').update({
     carsatend:rank   
    })
}
}

