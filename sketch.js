var ball,db,ballPos,pos;

function setup(){
    db = firebase.database();
    console.log(db);
    createCanvas(500,500);
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";
    ballPos = db.ref('ball/position');
    ballPos.on('value',readPosition)
}

function draw(){
    background("white");
    if(ballPos!==undefined){

    if(keyDown(LEFT_ARROW)){
        writePosition(-4,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        writePosition(4,0);
    }
    else if(keyDown(UP_ARROW)){
        writePosition(0,-4);
    }
    else if(keyDown(DOWN_ARROW)){
        writePosition(0,+4);
    }
    drawSprites();
}
}



function readPosition(data){
    pos = data.val();
    ball.x=pos.x;
    ball.y=pos.y;
}

function writePosition(x,y){
    db.ref('ball/position').set({
        'x':pos.x+x,
        'y':pos.y+y
    })
}
