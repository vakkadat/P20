var backgroundImg;
var cat;
var mouse;

function preload() {
    backgroundImg = loadImage("images/garden.png");
    catImg1 = loadImage("images/cat1.png");
    mouseImg1 = loadImage("images/mouse1.png");
    catImg2 = loadAnimation("images/cat2.png", "images/cat3.png");
    mouseImg2 = loadAnimation("images/mouse2.png", "images/mouse3.png");
    catImg3 = loadImage("images/cat4.png");
    mouseImg3 = loadImage("images/mouse4.png");

}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    cat = createSprite(870, 600);
    cat.addAnimation("catSitting", catImg1);
    cat.scale = 0.2;

    mouse = createSprite(100, 600);
    mouse.addAnimation("mouseSitting", mouseImg1);
    mouse.scale = 0.2;


}

function draw() {

    background(backgroundImg);
    //Write condition here to evalute if tom and jerry collide

    if(cat.x - mouse.x < (cat.width - mouse.width)/2){
        cat.velocityX = 0;
        cat.addAnimation("catLastImg", catImg3);
        cat.changeAnimation("catLastImg");
        cat.x = 300;
        cat.scale = 0.2;

        mouse.addAnimation("mouseLastImg", mouseImg3);
        mouse.changeAnimation("mouseLastImg");


    }

    
    
    drawSprites();
}


function keyPressed(){

//For moving and changing animation write code here
if(keyCode === LEFT_ARROW){
  mouse.addAnimation("mouseTeasing", mouseImg2);
  mouse.changeAnimation("mouseTeasing");
  mouse.frameDelay = 25;
}
if(keyCode === RIGHT_ARROW){
  cat.velocityX = -5;
  cat.addAnimation("catTeased", catImg2);
  cat.changeAnimation("catTeased");     
}
}




