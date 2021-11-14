class Game {
  constructor(){}
  
  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })
   
  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  start(){
    if(gameState === 0){
      player = new Player();
      player.getCount();
      form = new Form()
      form.display();
    }
  }
  play(){
    
    //image(bg1,0,0,displayWidth,displayHeight)
    image(kidsimg,300,100,240,225)
    image(adultsimg,630,100,260,220)
    image(eldersimg,1000,100,260,227)
   
   
    slogan=createSprite(700,600,50,50);
    slogan.addImage(sloganImg);
    slogan.scale=0.3;
   
     b1 = createButton('START');
     b1.position(360,350);
     b1.size(100,50);
     b1.mousePressed(()=>{
          
    removeElements();
    gameState=2;
     })
     b2 = createButton('START');
     b2.position(710,350);
     b2.size(100,50);
     b2.mousePressed(()=>{
          
      removeElements();
      gameState=2;
       })
     b3 = createButton('START');
     b3.position(1080,350);
     b3.size(100,50);
     b3.mousePressed(()=>{
          
      removeElements();
      gameState=2;
       })
    
  }
    kidsyoga(){
    var title = createElement('h2')
    title.html("1. SUKHASANA (EASY SITTING POSE)");
    title.position(displayWidth-1500, 100);
    var title1 = createElement('h1')
    title1.html("KIDS YOGA");
    title1.position(displayWidth-900, 10);
    image(kyoga1,displayWidth-1500,150,650,300);
    var button1=createButton("START");
    button1.position(displayWidth-1000,125);
    button1.mousePressed(()=>{
       
   removeElements();
    gameState=3;
    })
    }
  
}