class Form {
    constructor(){
        this.input = createInput("name");
        this.button = createButton("play");
        this.greeting = createElement("h3")
    }
    hide(){
        this.greeting.hide();
        this.button.hide();
        this.input.hide();
    }
    display(){
        var title=createElement();
        title.html("carRacingGame");
        title.position(130,0);

        this.input.position(130,160);
        this.button.position(230,260);
        this.button.mousePressed(function(){
        this.input.hide();
        this.button.hide();
        player.name = this.input.value();
        playerCount=playerCount+1;
        player.index=playerCount;
        player.update();
        player.updateCount(playerCount);

        this.greeting.html("hello "+player.name);
        this.greeting.position(130,160);
        })
    }
}