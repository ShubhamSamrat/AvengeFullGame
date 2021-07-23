var gameState = 0,canvas,Player1,Player2;

var hulkLobby,thorLobby,ironmanLobby,marvelLobby,spidermanLobby,widowLobby,lobbyPanel,joinButton,startButtonImg2,startButtonImg;

var database,poster,titleTrack,lobby,WarmUpImg,IM,SM,Th,Mar,Hu,Wi,CA,selected,selectedButton,nextImg1,nextImg2,startImg,codePanelImg,joinButtonImg;

var characterJson,status = ">>> Waiting for Both Players to Ready <<<";






function preload(){
  poster = loadImage("resources/backgrounds/AvengePoster.png");
  lobby = loadImage("resources/lobby/lobby.jpg");
  titleTrack = loadSound("resources/sounds/TitleTrack.mp3");


  //Lobby ChARACTERS
  hulkLobby = loadImage("resources/lobby/characters/hulk.png");
  ironmanLobby = loadImage("resources/lobby/characters/ironman.png");
  marvelLobby = loadImage("resources/lobby/characters/marvel.png");
  spidermanLobby = loadImage("resources/lobby/characters/spiderman.png");
  thorLobby = loadImage("resources/lobby/characters/thor.png");
  widowLobby = loadImage("resources/lobby/characters/widow.png");
  captainLobby = loadImage("resources/lobby/characters/captain.png");

  lobbyPanel = loadImage("resources/lobby/buttons/Panel.png")

///Characters Buttons

  Hu = loadImage("resources/lobby/buttons/hulk.png");
  IM = loadImage("resources/lobby/buttons/iron.png");
  Mar = loadImage("resources/lobby/buttons/marvel.png");
  SM = loadImage("resources/lobby/buttons/spider.png");
  Th = loadImage("resources/lobby/buttons/thor.png");
  Wi = loadImage("resources/lobby/buttons/widow.png");
  CA = loadImage("resources/lobby/buttons/captain.png");
  selected = loadImage("resources/lobby/buttons/selected.png");

  nextImg1 = loadImage("resources/lobby/buttons/nextButton.png");
  nextImg2 = loadImage("resources/lobby/buttons/nextButton2.png");

  startImg = loadImage("resources/lobby/buttons/startButton.png");

  codePanelImg = loadImage("resources/lobby/buttons/CodePanel.png");
  joinButtonImg = loadImage("resources/lobby/buttons/joinButton.png"); 
  startButtonImg = loadImage("resources/lobby/buttons/startButton.png");
  startButtonImg2 = loadImage("resources/lobby/buttons/startButton2.png");

  WarmUpImg = loadImage("resources/lobby/WarmUp.jpg");




  currentCharacter = captainLobby;
}
function setup(){

database = firebase.database();
canvas = createCanvas(windowWidth,windowHeight);
canvas.mousePressed(start);


characterJson = {
  0 : captainLobby,
  1 : marvelLobby,
  2 : spidermanLobby,
  3 : thorLobby,
  4 : hulkLobby,
  5 : widowLobby,
  6 : ironmanLobby
}





createButtons();


            





}

function draw(){
  

  
    if(poster){
        background(poster);
    }

   if(gameState === 0){
     fill("white");
     textSize(30)
     text("Click On Screen To Play",140,windowHeight-50);
   } else if(gameState === 1){
     drawLogin();
   } else if(gameState === 2){
    background(lobby);
    charachterMenu();
    

    
  }else if(gameState === 3){
    background(WarmUpImg);
    //Wrmup Screen
    getPlayers();
    if(Player1 && Player2){

        image(characterJson[Player1Img],windowWidth/4-600,200);
        image(characterJson[Player2Img],windowWidth/3 + 370,200);

        startButton.display();

        changeStatus();

        fill("grey");
        textSize(30);
        text(status,50,40);

        textSize(50);
        fill("white");
        text(">>  "+Player1.name,30,160);

        fill("white");
        text(Player2.name + "  <<",950,870);

        if(mousePressedOver(startButton)){
          
          updateReadyStaus();
      }

    }
    
    //image()
  }
   
  







//titleTrack.play();


}

function start(){
  if(gameState === 0){
    gameState = 1;
    titleTrack.play();
    titleTrack.setVolume(0.5);
    titleTrack.loop();
    
    login();
  }
}







 /* function login(){
    nameInput = createInput("Name");
    NameSubmit = createButton("Next");
    nameInput.position(550,400);
    nameInput.style('width', '200px');
    nameInput.style('height', '20px');
    nameInput.style('background', 'lavender');

}



*/

function CheckGameState(){
  var gameStateRef = database.ref("rooms/" + teamcode + "/gameState");
      gameStateRef.on("value", (data) => {
         
      if(data.val() === "WarmUp"){
              gameState = 3;
              TeamCodeInput.hide();
              
          }
      })
}


function getPlayers(){
  var P1Ref = database.ref("rooms/" + teamcode + "/players/player1");
  var P2Ref = database.ref("rooms/" + teamcode + "/players/player2");

      P1Ref.on("value", (data) => { 
        Player1 = data.val();
        Player1Img = Player1.character;
    
        
        
      });
      P2Ref.on("value", (data) => { 
        Player2 = data.val();
        Player2Img = Player2.character;
      
      
      }
      )

}

function updateReadyStaus(){
  //console.log("firbaseFun")
  if(playerName === Player1.name ){
    var P1Ref = database.ref("rooms/" + teamcode + "/players/player1");
    
    console.log("itsWorking1");
    database.ref(P1Ref).update({
      ready : "yes"
    });
    startButton.remove();
    

  }
  
  if(playerName === Player2.name ){
    
    var P2Ref = database.ref("rooms/" + teamcode + "/players/player2");
    
    console.log("itsWorking2");
    database.ref(P2Ref).update({
      ready : "yes"
    });
    startButton.remove();

  }
}

function changeStatus(){
  if(Player1.ready === "yes" && Player2.ready === "no"){
    status = ">>> " + Player1.name + " Is Ready For Fight Now Waiting For " + Player2.name + " <<<"
  }else if(Player1.ready === "no" && Player2.ready === "yes"){
    status = ">>> " + Player2.name + " Is Ready For Fight Now Waiting For " + Player1.name + " <<<"
  }else if(Player1.ready === "yes" && Player2.ready === "yes"){
    status = ">>> Get Ready For Fight <<<";
    redirect();

  }
}

function redirect(){
  window.location.href = "../Avenge%20Game/index.html?code=" + teamcode + "&playerName=" + playerName;
}

