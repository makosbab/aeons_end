class PlayingCard{
    
    private name:String
    private id:String
    constructor(name:String, id:String){
        this.id=id;
        this.name=name;
    }

    play(){

    }

    discard(){

    }

    destroy(){

    }


}


class Player {
    private name:String;
    private life:number;

    constructor(){

    }
}

class Nemesis extends Player {
    
}

class Mage extends Player{

}



class SupplyCard extends PlayingCard {
    private cost:number;

    constructor(name:String, id:String, cost:number){
        super(name, id);
        this.cost=cost;
    }

}

class Gem extends SupplyCard {
    private value:number;
    constructor(name:String, id:String, cost:number, value:number){
        super(name, id, cost);
        this.value=value;
    }
}

class Spell extends SupplyCard {
    
}

class Relic extends SupplyCard {
    
}

class Deck{
    private cards:Card
    constructor(){

    }
}

let jade = new Gem('Jade','AE076',2,2);
let supplyDeck1: Array<SupplyCard> = new Array(6);
console.log(supplyDeck1)