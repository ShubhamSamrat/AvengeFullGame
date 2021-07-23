var currentCharacter,captainButton,ButtonPanel,nextButton,selectedCharacter = 0,playersCharacter,pannelMode = "on",teamcode = null,codePanel;

/*
    0 = Camptain America
    1 = captain Marvel
    2 = Spiderman
    3 = Thor
    4 = Hulk
    5 = Widow
    6 = Iron Man



*/



function charachterMenu(){///These are draw functions//////
    
    ///console.log(nextButton.mouseIsPressed);
    

image(currentCharacter,windowWidth/3-100,200);

/*if(nextButton.mouseIsOver){
    nextButton.addImage(nextImg2);

}else{
    nextButton.addImage(nextImg1);
}*/




if(selectedCharacter === 0){
    currentCharacter = captainLobby;
    selectedButton.x = captainButton.x;
    selectedButton.y = captainButton.y;


} else if(selectedCharacter === 1){
    currentCharacter = marvelLobby;
    selectedButton.x = marvelButton.x;
    selectedButton.y = marvelButton.y;

} else if(selectedCharacter === 2){
    currentCharacter = spidermanLobby;
    selectedButton.x = spidermanButton.x;
    selectedButton.y = spidermanButton.y;

} else if(selectedCharacter === 3){
    currentCharacter = thorLobby;
    selectedButton.x = thorButton.x;
    selectedButton.y = thorButton.y;

} else if(selectedCharacter === 4){
    currentCharacter = hulkLobby;
    selectedButton.x = hulkButton.x;
    selectedButton.y = hulkButton.y;

} else if(selectedCharacter === 5){
    currentCharacter = widowLobby;
    selectedButton.x = widowButton.x;
    selectedButton.y = widowButton.y;
    //selectedButton.x = widowLobby.y;

} else if(selectedCharacter === 6){
    currentCharacter = ironmanLobby;
    selectedButton.x = ironmanButton.x;
    selectedButton.y = ironmanButton.y;
} 



if(mousePressedOver(joinButton) && teamcode != null){
    var input = TeamCodeInput.value()
    if(Number(TeamCodeInput.value()) != teamcode && input.length == 7 ){
        checkPlayerCount();
        
    }
}


















ButtonPanel.display();
captainButton.display();
marvelButton.display();
ironmanButton.display();
spidermanButton.display();
thorButton.display();
hulkButton.display();
widowButton.display();
selectedButton.display();
//nextButton.display();
if(pannelMode === "off"){
    codePanel.display();
    joinButton.display();
    textSize(75);
    fill("white");
    text(teamcode,codePanel.x-140,codePanel.y+30);
    
    textSize(15);
    fill("White");
    text("Enter Freind's Teamcode ....",TeamCodeInput.x,TeamCodeInput.y-15);
    CheckGameState();
    
}



}





function createButtons(){
    ButtonPanel = createSprite(220,450,500,850);

captainButton = createSprite(140,200,100,100);
marvelButton = createSprite(290,200,100,100);
ironmanButton = createSprite(140,650,100);
spidermanButton = createSprite(140,350,100,100);
thorButton = createSprite(290,350,100,100);
hulkButton = createSprite(140,500,100,100);
widowButton = createSprite(290,500,100,100);

selectedButton = createSprite(140,200,100,100);
selectedButton.addImage(selected);
selectedButton.scale = 0.5;

nextButton = createSprite(800,750,200,70);
nextButton.scalec = 0.2;


startButton = createSprite(windowWidth-190,100,200,70);
startButton.addAnimation("start",startButtonImg,startButtonImg2)


//nextButton.mouseOver(log);





ButtonPanel.addImage(lobbyPanel);
captainButton.addImage(CA);
marvelButton.addImage(Mar);
ironmanButton.addImage(IM); 
spidermanButton.addImage(SM);
thorButton.addImage(Th);
hulkButton.addImage(Hu);
widowButton.addImage(Wi);

captainButton.scale = 0.5;
marvelButton.scale = 0.5;
ironmanButton.scale = 0.5;
spidermanButton.scale = 0.5;
thorButton.scale = 0.5;
hulkButton.scale = 0.5;
widowButton.scale = 0.5;




}

function keyPressed(){
    //console.log(keyCode);
  if(gameState ===2){
        if(selectedCharacter>=0 && pannelMode === "on"){
            if(keyCode === 39 && selectedCharacter<6 && selectedCharacter>=0){
                selectedCharacter = selectedCharacter+1;
                console.log("up");
            }
            
            if(keyCode === 37 && selectedCharacter>0){
                selectedCharacter = selectedCharacter-1;
                console.log("down");
            }
        }
        if(keyCode === 13 && teamcode === null){
            playersCharacter = selectedCharacter;
            removeCharacterPannel();
            console.log(generateRoomCode());
            
            teamcode = generateRoomCode();

            

            codePanel = createSprite(260,80,500,100);
            codePanel.addImage(codePanelImg);
           // codePanel.scale(0.8);

            
            //joinButton.scale(0.5);
            joinButton = createSprite(windowWidth-170,800,500,100);
            joinButton.addImage(joinButtonImg);

            pannelMode = "off";

            createRoom();

                
            

            

            
                

            JoinInterface();

            }   
            if(keyCode === 32 && teamcode != null){
                

            } 




  }
  }

 /*function log(){
     console.log("yes");
 } */

 function removeCharacterPannel(){
    ButtonPanel.remove();
    captainButton.remove();
    marvelButton.remove();
    ironmanButton.remove();
    spidermanButton.remove();
    thorButton.remove();
    hulkButton.remove();
    widowButton.remove();
    selectedButton.remove();
    //nextButton.display();
 }

function generateRoomCode(){
    
    return Math.round(Math.random()*9000000 + 1000000);
}


function JoinInterface(){
    TeamCodeInput = createInput();
    TeamCodeInput.position(joinButton.x-100,joinButton.y-110);
    TeamCodeInput.style('width', '200px');
    TeamCodeInput.style('height', '40px');
    TeamCodeInput.style('background', 'white');
    TeamCodeInput.style('color', 'Black');
    TeamCodeInput.style('box-sizing','border-box')
    TeamCodeInput.style('border','4px solid blue')
    TeamCodeInput.style('border-radius','5px')
    TeamCodeInput.placeholder = "Enter Team Code";
    TeamCodeInput.autofocus = true;
}

function createRoom(){
    console.log("firbaseFun")
    var roomPath = "rooms/" + teamcode + "/players/player1";
    database.ref(roomPath).set({
    name : playerName,
    character: playersCharacter,
    positionX : 300,
    positionY : 625,
    health : 100,
    energy : 100,
    ready : "no"
                
     });

    var playerCountPath = "rooms/" + teamcode;
    database.ref(playerCountPath).update({
    playerCount : 1,
    gameState : "Waiting"
                
    });
}

function checkPlayerCount(){
    console.log("firbaseFun")
    var playerCountRef = database.ref("rooms/" + Number(TeamCodeInput.value()) + "/playerCount");
    playerCountRef.on("value", (data) => {
    if(data.val() === 1){
        console.log("hurray");
        TeamCodeInput.hide();
        joinButton.remove();
        
        joinRoom();

    }else {
        console.log("invalid Roomcode")
        console.log()
    }
    })



    
}

function joinRoom(){


    var JoinRoomPath = "rooms/" + Number(TeamCodeInput.value()) + "/players/player2";
    database.ref(JoinRoomPath).update({
    name : playerName,
    character: playersCharacter,
    positionX : 1400,
    positionY : 625,
    health : 100,
    energy : 100,
    ready : "no"
    
                
     });

    var playerCountPath = "rooms/" + Number(TeamCodeInput.value());
    database.ref(playerCountPath).update({
    playerCount : 2,
    gameState : "WarmUp"
    
    
                
    });

    teamcode = Number(TeamCodeInput.value());

    gameState = 3;
    

}


