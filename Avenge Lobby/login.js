var nameInput,character,NameSubmit,playerName;


function login(){

   ////Input Section 
    nameInput = createInput();
    nameInput.position(100,windowHeight-250);
    nameInput.style('width', '300px');
    nameInput.style('height', '40px');
    nameInput.style('background', 'white');
    nameInput.style('color', 'Black');
    nameInput.style('box-sizing','border-box')
    nameInput.style('border','4px solid blue')
    nameInput.style('border-radius','5px')
    nameInput.placeholder = "Enter Name";
    nameInput.autofocus = true;

  ////SubmitButton
    NameSubmit = createButton("Next"); 
    NameSubmit.position(420,windowHeight-250);
    NameSubmit.style('width', '100px');
    NameSubmit.style('height', '40px');
    NameSubmit.style('background', 'lightGreen');
    NameSubmit.style('color', 'black');
    NameSubmit.style('font-size','25px');
    NameSubmit.style('border-radius','8px')
    NameSubmit.style('border','3px solid blue')
    NameSubmit.mouseOver(dropShadow);
    NameSubmit.mouseOut(stopShadow);
    NameSubmit.mousePressed(SubmitName);


    

console.log(nameInput);
}

function drawLogin(){///These are draw functions//////
    textSize(20);
    fill("White");
    text("Enter Your Name.....",110,windowHeight-265);
}

function dropShadow(){
    NameSubmit.style('box-shadow', '0 12px 16px 0 red,0 17px 50px 0 rgba(0,0,0,0.19)');
}

function stopShadow(){
    NameSubmit.style('box-shadow', '');
}


function SubmitName(){
    nameInput.hide();
    NameSubmit.hide();
    playerName = nameInput.value();
    gameState = 2;

    
    //playerCount += 1;
    //player.index = playerCount;
    ///player.update();
    //player.updateCount(playerCount);
    //this.greeting.html("Hello " + player.name)
    //this.greeting.position(400,250);
    //this.greeting.style('color', 'white');
   // this.greeting.style('font-size', '100px');
}