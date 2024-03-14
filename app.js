const app= new PIXI.Application();
const ufoList=[];

document.body.appendChild(app.view);

const rocket = PIXI.Sprite.from('assets/rocket.png');
rocket.x = 350;
rocket.y = 520;
rocket.scale.x = 0.05;
rocket.scale.y = 0.05;
app.stage.addChild(rocket);

gameInterval(function () {
    const ufo = PIXI.Sprite.from('assets/ufo'+ random(1,2) + '.png');
ufo.x = random (0,700); // 700 max. breite vom display
ufo.y = -25;
ufo.scale.x = 0.05;
ufo.scale.y = 0.05;
app.stage.addChild(ufo);
ufoList.push(ufo);
flyDown(ufo, 1); // Geschwindigkeit vom Ufo, fliegt nach unten

waitForCollision(ufo,rocket).then(function(){
    app.stage.removeChild(rocket);
    stopGame();
})
}, 1000 // function wird alle 1000 Milisekunden ausgeführt
)

function leftKeyPressed(){
rocket.x=rocket.x-5;
}// wird immer ausfeührt wenn die linke Pfeil Taste gedrückt wird

function rightKeyPressed(){
    rocket.x=rocket.x+5;
}// wird immer ausfeührt wenn die rechte Pfeil Taste gedrückt wird

function spaceKeyPressed(){
    const bullet = PIXI.Sprite.from('assets/bullet.png'); 
    bullet.x = rocket.x +13;
    bullet.y = 500;
    bullet.scale.x = 0.03;
    bullet.scale.y = 0.02;
    flyUp(bullet);
    app.stage.addChild(bullet);


waitForCollosion(bullet,ufoList).then(function([bullet, ufo]){
    app.stage.removeChild(bullet);
    app.stage.removeChild(ufo);
    stopGame;
})
};
