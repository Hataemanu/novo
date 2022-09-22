var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":[],"propsByKey":{}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var wall1 = createSprite(190,120,250,3);
var wall2 = createSprite(190,260,250,3);
var wall3 = createSprite(67,145,3,50);
var wall4 = createSprite(67,235,3,50);
var wall5 = createSprite(313,145,3,50);
var wall6 = createSprite(313,235,3,50);
var wall7 = createSprite(41,170,50,3);
var wall8 = createSprite(41,210,50,3);
var wall9 = createSprite(337,210,50,3);
var wall10 = createSprite(337,170,50,3);
var wall11 = createSprite(18,190,3,40);
var wall12 = createSprite(361,190,3,40);

var jogador = createSprite(40,190,10,10);
jogador.shapeColor= "orange";

var pucca = createSprite(95,130,10,10);
pucca.shapeColor= "red";

var pucca2 = createSprite(140,230,10,10);
pucca2.shapeColor= "red";

var pucca3 = createSprite(200,130,10,10);
pucca3.shapeColor= "red";

var pucca4 = createSprite(260,230,10,10);
pucca4.shapeColor= "red";

pucca.velocityY = 8;
pucca2.velocityY =  -8;
pucca3.velocityY = 8;
pucca4.velocityY = -8;

var pontuação = 0;

function draw() {
  background("white");

pucca.bounceOff(wall1);
pucca.bounceOff(wall2);
pucca2.bounceOff(wall1);
pucca2.bounceOff(wall2);
pucca3.bounceOff(wall1);
pucca3.bounceOff(wall2);
pucca4.bounceOff(wall1);
pucca4.bounceOff(wall2);
 
 

if(keyDown("left")){
  jogador.x= jogador.x+2;
}

if(keyDown("right")){
  jogador.x= jogador.x+2;
}

if(jogador.isTouching(pucca)||jogador.isTouching(pucca2)|| jogador.isTouching(pucca3)|| jogador.isTouching(pucca4)|| jogador.isTouching(wall1)|| jogador.isTouching(wall2)){
  jogador.x = 40;
  jogador.y = 190; 
  pontuação = pontuação+1;
}

text("Pontuação " + pontuação, 290,75);
stroke(5);
fill("red");



  drawSprites();
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
