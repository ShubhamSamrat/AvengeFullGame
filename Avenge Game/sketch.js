var playerName = "alpha";

/*var Player1 = {
  name : "alpha",
  positionX : windowWidth/2-500,
  positionY : 700
}
var Player2 = {
  name : "beta",
  positionX : windowWidth/2+500,
  positionY : 700
  po
}*/

var database,canvas,Player1Obj,Player2Obj,edges,SetCharacter = 0,teamcode;

var Player1,Player2,topBar,tBar,healthBar1,healthL,healthR,healthBar2,BG1;

var HulkLeft0,HulkLeft1,IMLeft0,IMLeft1,ThorLeft0,ThorLeft1,SMLeft0,SMLeft1,CALeft0,CALeft1,CMLeft0,CMLeft1,WidowLeft0,WidowLeft1;
var HulkRight0,HulkRight1,IMRight0,IMRight1,ThorRight0,ThorRight1,SMRight0,SMRight1,CARight0,CARight1,CMRight0,CMRight1,WidowRight0,WidowRight1;



var L10,L20,L30,L40,L50,L60,L70,L80,L90,L100;
var R10,R20,R30,R40,R50,R60,R70,R80,R90,R100;
var C0,C1,C2,C3,C4,C5,C6,Characters;
var CL0,CL1,CL2,CL3,CL4,CL5,CL6,CR0,CR1,CR2,CR3,CR4,CR5,CR6,CharactersL,CharactersR;




function preload(){

  BG1 = loadImage("Backgrounds/1.jpg")
  HulkLeft1 = loadAnimation("HulkPunch/Left/4.png","HulkPunch/Left/5.png","HulkPunch/Left/4.png");
  HulkLeft0 = loadAnimation("HulkPunch/Left/1.png");

  ThorLeft1 = loadAnimation("ThorAttack/Left/1.png","ThorAttack/Left/3.png","ThorAttack/Left/4.png",);
  ThorLeft0 = loadAnimation("ThorAttack/Left/1.png");

  IMLeft1 = loadAnimation("IMattack/Left/2.png");
  IMLeft0 = loadAnimation("IMattack/Left/1.png");
  
  SMLeft0 = loadAnimation("SpiderManAttack/Left/1.png");
  SMLeft1 = loadAnimation("SpiderManAttack/Left/2.png");
  
  CALeft0 = loadAnimation("CapAmerica/Left/1.png");
  CALeft1 = loadAnimation("CapAmerica/Left/2.png");
  
  CMLeft0 = loadAnimation("CapMarvel/Left/1.png");
  CMLeft1 = loadAnimation("CapMarvel/Left/2.png");
  
  WidowLeft0 = loadAnimation("Widow/1.png");
  WidowLeft1 = loadAnimation("Widow/Left/2.png");

  HulkRight1 = loadAnimation("HulkPunch/Right/4.png","HulkPunch/Right/5.png","HulkPunch/Right/4.png");
  HulkRight0 = loadAnimation("HulkPunch/1.png");

  ThorRight1 = loadAnimation("ThorAttack/Right/1.png","ThorAttack/Right/3.png","ThorAttack/Right/4.png",);
  ThorRight0 = loadAnimation("ThorAttack/Right/1.png");

  IMRight1 = loadAnimation("IMattack/Right/2.png");
  IMRight0 = loadAnimation("IMattack/Right/1.png");
  
  SMRight0 = loadAnimation("SpiderManAttack/Right/1.png");
  SMRight1 = loadAnimation("SpiderManAttack/Right/2.png");
  
  CARight0 = loadAnimation("CapAmerica/Right/1.png");
  CARight1 = loadAnimation("CapAmerica/Right/2.png");
  
  CMRight0 = loadAnimation("CapMarvel/Right/1.png");
  CMRight1 = loadAnimation("CapMarvel/Right/2.png");
  
  WidowRight0 = loadAnimation("Widow/Right/1.png");
  WidowRight1 = loadAnimation("Widow/Right/2.png");

  tBar = loadImage("HealthBars/TopBar.jpg");
  
  L10 = loadImage("HealthBars/LHealth/10.jpg");
  L20 = loadImage("HealthBars/LHealth/20.jpg");
  L30 = loadImage("HealthBars/LHealth/30.jpg");
  L40 = loadImage("HealthBars/LHealth/40.jpg");
  L50 = loadImage("HealthBars/LHealth/50.jpg");
  L60 = loadImage("HealthBars/LHealth/60.jpg");
  L70 = loadImage("HealthBars/LHealth/70.jpg");
  L80 = loadImage("HealthBars/LHealth/80.jpg");
  L90 = loadImage("HealthBars/LHealth/90.jpg");
  L100 = loadImage("HealthBars/LHealth/100.jpg");




  
  R10 = loadImage("HealthBars/RHealth/10.jpg");
  R20 = loadImage("HealthBars/RHealth/20.jpg");
  R30 = loadImage("HealthBars/RHealth/30.jpg");
  R40 = loadImage("HealthBars/RHealth/40.jpg");
  R50 = loadImage("HealthBars/RHealth/50.jpg");
  R60 = loadImage("HealthBars/RHealth/60.jpg");
  R70 = loadImage("HealthBars/RHealth/70.jpg");
  R80 = loadImage("HealthBars/RHealth/80.jpg");
  R90 = loadImage("HealthBars/RHealth/90.jpg");
  R100 = loadImage("HealthBars/RHealth/100.jpg");

  //console.log("preload");
  

}
function setup(){

  //console.log("setup0");

  //console.log();
  var windowQuery = window.location.search.slice(1).split("&");
  var code = windowQuery[0];
  var name = windowQuery[1];

  console.log(code.split("code=")[1]);
  console.log(name.split("playerName=")[1]);

  playerName = name.split("playerName=")[1];
  teamcode = code.split("code=")[1];
  

  /*var url = new URL(window.location.search);
  console.log(url.searchParams.get("h"));*/



  healthL = [L10,L20,L30,L40,L50,L60,L70,L80,L90,L100];
  healthR = [R10,R20,R30,R40,R50,R60,R70,R80,R90,R100];

  

  

/*C0 = [CALeft0,CALeft1];
C1 = [CMLeft0,CMLeft1];
C2 = [SMLeft0,SMLeft1];
C3 = [ThorLeft0,ThorLeft1];
C4 = [HulkLeft0,HulkLeft1];
C5 = [WidowLeft0,WidowLeft1];
C6 = [IMLeft0,IMLeft1];*/

CL0 = [CALeft0,CALeft1];
CL1 = [CMLeft0,CMLeft1];
CL2 = [SMLeft0,SMLeft1];
CL3 = [ThorLeft0,ThorLeft1];
CL4 = [HulkLeft0,HulkLeft1];
CL5 = [WidowLeft0,WidowLeft1];
CL6 = [IMRight0,IMRight1];

CR0 = [CARight0,CARight1];
CR1 = [CMRight0,CMRight1];
CR2 = [SMRight0,SMRight1];
CR3 = [ThorRight0,ThorRight1];
CR4 = [HulkRight0,HulkRight1];
CR5 = [WidowRight0,WidowRight1];
CR6 = [IMRight0,IMRight1];



Characters = [CL0,CL1,CL2,CL3,CL4,CL5,CL6];

CharactersL = [CL0,CL1,CL2,CL3,CL4,CL5,CL6];
CharactersR = [CR0,CR1,CR2,CR3,CR4,CR5,CR6];





database = firebase.database();
canvas = createCanvas(windowWidth,windowHeight);

//console.log("setup1");
//canvas.height = 100
//canvas.mousePressed(start);

Player1Obj = createSprite(300,700,300,300);
Player1Obj.scale = 1.5;

Player2Obj = createSprite(800,700,300,300);
Player2Obj.scale = 1.5;



console.log("setup2");



//Player1Obj.addAnimation("Normal",C3[0]);
//Player1Obj.addAnimation("Punch",C3[1]);
//console.log("setup3");

topBar = createSprite(windowWidth/2,50,windowWidth,100);
topBar.addImage(tBar);
topBar.scale = 0.8;

healthBar1 = createSprite(200,65);
healthBar1.addImage(L100);
healthBar1.scale = 0.4;

healthBar2 = createSprite(windowWidth-200,65);
healthBar2.addImage(R90);
healthBar2.scale = 0.4;


Ground = createSprite(windowWidth/2,860,windowWidth,20);
Ground.visible = false;
//Ground2 = createSprite(windowWidth/2,860,windowWidth,20);














            
console.log("setup");




}

function draw(){

  if(BG1){
    background(BG1);
  }else{
  background("white");
  1}
  getPlayers()

  edges = createEdgeSprites();
  
  drawSprites();
  getStatus();

  
  //console.log("draw");

  //dPlayer1Obj.collide(Player2Obj);
  //Player2Obj.collide(Player1Obj);
  Player1Obj.collide(Ground);
  Player2Obj.collide(Ground);

  Player2Obj.debug = false;
  Player1Obj.debug = false;

  Player1Obj.collide(edges);
  Player2Obj.collide(edges);


  //Player2Obj.addAnimation("Normal",C3[1]);
  //console.log(Player1Obj.y);

  

  //Add Gravity
  
  

  if(Player1 && Player2 ){
    
    Player2Obj.x = Player2.positionX;
    Player1Obj.x = Player1.positionX;


    setCharacters();

    
    playerControls();
    updateHealthBars();

    
  }
  
   /*if(HulkAnimation){
     
   } */

  

 
} 

function keyPressed(){
  console.log(keyCode);
  if(keyCode==49){
    playerName = "alpha";
  }
  if(keyCode==50){
    playerName = "beta";
  }

  //if(keyCode==13){
    //playerName = "beta";
    

    
  //}

  
  
  /*if(keyCode == 32 && Player1Obj.y>680 ){
    THE PLAYERNMSE =  PLAYER.CHARACTER.NAME
    Player1Obj.velocityY = -24;
    Player2Obj.velocityY = -24;


  }*/
}

function keyReleased(){

  Player1Obj.changeAnimation("Normal");
  Player2Obj.changeAnimation("Normal");
  if(keyCode==13){
    //playerName = "beta";
    //
    healthKeyX = 0;
    
    if(Player1Obj.isTouching(Player2Obj) && playerName === Player1.name){
        
      //healthKeyX = 1;
      updateHealth(2);
      Player1Obj.x = Player1Obj.x-70;
      playerXUpdate(1,Player1Obj.x-70);
      
      

    }
    if(Player2Obj.isTouching(Player1Obj) && playerName === Player2.name){
        
      //healthKeyX = 1;
      updateHealth(1);
      Player2Obj.x = Player2Obj.x+70;
      playerXUpdate(2,Player2Obj.x+70);
      //Player1Obj.changeAnimation("Normal");
      

    }
    
  }
}

function playerControls(){
  if(playerName === Player1.name){
    Player1Obj.collide(Player2Obj);
    //Player2Obj.x = Player2.positionX;
    
    playerYUpdate(1,Player1Obj.y);
    
    Player2Obj.y = Player2.positionY;
    Player1Obj.velocityY = Player1Obj.velocityY + 5.5; 
    if(keyIsDown(68)) {
      Player1Obj.x = Player1Obj.x + 15;
      playerXUpdate(1,Player1Obj.x + 15);

      console.log("00000000");
  
      
    }
    if(keyIsDown(65) && Player1Obj.x > 150 ) {
      Player1Obj.x = Player1Obj.x - 15;
      playerXUpdate(1,Player1Obj.x - 15);
      
    }

    if(keyIsDown(32) && Player1Obj.y>698 ){
      Player1Obj.velocityY = -30;
      //playerUpdate(1);
      //Player2Obj.velocityY = -24;
      
  
  
    }
    var healthKeyX = 0;
    if(keyIsDown(13)){
      
      Player1Obj.changeAnimation("Punch");

      

      
  
  
    }

    /*if(keyIsDown(13)){
      Player1Obj.changeAnimation("Punch");
    }else {
      Player1Obj.changeAnimation("Normal");
    }*/

    

  } else if(playerName === Player2.name){
    Player2Obj.collide(Player1Obj);
    //Player1Obj.x = Player1.positionX;
    Player1Obj.y = Player1.positionY;
    Player1Obj.x = Player1.positionX;
    playerYUpdate(2,Player2Obj.y);

    Player2Obj.velocityY = Player2Obj.velocityY + 5.5; 
    
    if (keyIsDown(68) && Player2Obj.x < windowWidth-150) {
      Player2Obj.x = Player2Obj.x + 15;
      playerXUpdate(2,Player2Obj.x + 15);
      

      
    }
    if (keyIsDown(65) && Player2Obj.x > 150) {
      Player2Obj.x = Player2Obj.x - 15;
      playerXUpdate(2,Player2Obj.x - 15);
      
    }

    if(keyIsDown(32) && Player2Obj.y>700 ){
      Player2Obj.velocityY = -30;
      //Player2Obj.velocityY = -24;
      

  
  
    }

    if(keyIsDown(13)){
      
      Player2Obj.changeAnimation("Punch");
      
      /*if(Player2Obj.isTouching(Player1Obj)){

        updateHealth(1);
        
        

      }*/
      
  
  
    }

  }
}



function getPlayers(){
  var P1Ref = database.ref("rooms/" + teamcode + "/players/player1");
  var P2Ref = database.ref("rooms/" + teamcode + "/players/player2");

      P1Ref.on("value", (data) => { 
        Player1 = data.val();
       // Player1Img = Player1.character;
       
    
        
        
      },(error)=>{console.log(error)});
      P2Ref.on("value", (data) => { 
        Player2 = data.val();
        //Player2Img = Player2.character;
      
      
      }
      )

}

function playerXUpdate(player,x){
  var pRef = database.ref("rooms/" + teamcode + "/players/player" + player);
    
    //console.log("itsWorking1");
    if(player === 1){
      database.ref(pRef).update({
        positionX : x
      });
    } else if(player === 2){
        database.ref(pRef).update({
         positionX : x
         

      });
  }
}

function playerYUpdate(player,y){
  var pRef = database.ref("rooms/" + teamcode + "/players/player" + player);
    
    //console.log("itsWorking1");
    if(player === 1){
      database.ref(pRef).update({
        positionY : y
      });
    } else if(player === 2){
        database.ref(pRef).update({
          positionY : y

      });
  }
}



function updateHealthBars(){
  console.log("working");
  if((Player1.health)>4){
    var rawHealth1 = (Math.round(Player1.health/10))*10;
    var LH = (rawHealth1/10)-1;
    healthBar1.addImage(healthL[LH]);
    console.log(LH);
  }

  if((Player2.health)>4){
    var rawHealth2 = (Math.round(Player2.health/10))*10;
    var RH = (rawHealth2/10)-1;
    healthBar2.addImage(healthR[RH]);
    console.log(RH);
  }
}

function updateHealth(player){
  var pRef = database.ref("rooms/" + teamcode + "/players/player" + player);
    
    //console.log("itsWorking1");
    if(player === 1 && Player1.health>5){
      var h = Player1.health-2;
      database.ref(pRef).update({
        health : h
      });
    } else if(player === 2 && Player2.health>5){
      var h = Player2.health-2;
        database.ref(pRef).update({
          health : h

      });
  }

}
  
function setCharacters(){

  if(SetCharacter === 0){
    var player2Character = CharactersR[Player2.character];

    Player2Obj.addAnimation("Normal",player2Character[0]);
    Player2Obj.addAnimation("Punch",player2Character[1]);
    

    
    
    var player1Character = CharactersL[Player1.character];

    Player1Obj.addAnimation("Normal",player1Character[0]);
    Player1Obj.addAnimation("Punch",player1Character[1]);
    //Player1Obj.scale = 1.8;



  SetCharacter = 1;
  }

}

function getStatus(){
var S1Ref = database.ref("rooms/" + teamcode + "/players/player1");

     /* S1Ref.on("value", (data) => { 
        var status = data.val();
       // Player1Img = Player1.character;
       console.log(status);
       });
       
*/
S1Ref.on('child_changed', (snapshot) => {
    const changedPost = snapshot.val();
    //console.log(changedPost);
});
    }







