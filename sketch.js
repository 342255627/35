//Create variables here
var database, food, foodStock,dogImg, happyDogImg,happyDog, Buttonf, Buttona;

var foodS = 20;
var lastFed = 0;
var foodObj = null;
function preload()
{
  
  happyDog = loadImage("images/dogImg.png");
  dogImg = loadImage("images/dogImg1.png");
}

function setup() {

  
  createCanvas(800, 500);

   var greeting = createElement('h3');
   var greeting1 = createElement('h3');
  
  
  feedButton = createButton("Feed dog");
  feedButton.position(700, 95);
  feedButton.mousePressed(feedDog);

  
  input = createInput (" Dog's Name"); 
  input.position (500, 95); 

  var name = input.value();

  

  var button = createButton("submit");
  button.position(850, 500);
  addButton = createButton("Buy Milk!");
  addButton.position(800, 90);
  addButton.mousePressed(addFood);

  button.mousePressed(function(){
    input.hide();
    addButton.hide();
    feedButton.hide();
    
    comment = createSprite(490,210);
    comment.scale = 0.7;
    comment.addImage("opinion", opinionImg);
    greeting.html("Thank you  ");
    greeting.position(800, 150);
    greeting1.html("opinion");
    greeting1.position(805, 195);
 })


  
  foodObj = new Food();

  
  dog = createSprite(650, 280);
  dog.scale = 0.5;
  dog.addImage("dog1", dogImg);
  dog.addImage("dog2", happyDog);

  
}


function draw() {  

  
  background("green");

  
  fill("white");
  textSize(20);
  

   
  drawSprites();

  
  strokeWeight(3);
  stroke("blue")
  fill("white");
  textSize(30);
  text("Milk bottles left = " + food, 30, 475);

  
  
  foodObj.display();

}



function addFood(){
  food++;
  foodObj.updateFoodStock(food);
}



function feedDog(){
  if(food > 0){
    dog.changeAnimation("dog", happyDog);
    food--;
    foodObj.updateFoodStock(food);
    lastFed = hour();
    foodObj.updateLastFed(lastFed);
  }
}
