class Form{
constructor(){

}

display(){
var title = createElement('h1')
title.html("OH GOD NO PLE---,its just a car game nothing else OK")
title.position(130,0);
var input = createImput("savTIRe NAme")
var button  = createButton('START')
imput.position(130,160);
button.position(200,160);
button.mousePressed(function(){
imput.hide();
button.hide();
var name = imput.value();
playerCount += 1 ;
player.update(name);
player.updateCount(playerCount)
var greeting = createElement('h2');
greeting.html("STOP H--,on nothing ok,nothing"+name)
greeting.position(60,160)
})


}




}