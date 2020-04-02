const BAR_SPEED = 10;
let ballSpeedX = 1;
let ballSpeedY = 1;
const SPEED_BALL= 10;
let Bar = function (x,y,width,height) {
    this.x = x;
    this.y = y;
    this.height = height;
    this.width = width;
    this.ctx = document.getElementById("myCanvas").getContext("2d");
    this.drawBar = function () {
        this.ctx.fillRect(this.x, this.y, this.width, this.height);
    };
    this.clearBar = function () {
        this.ctx.clearRect(this.x,this.y,50,10);
    };
    this.moveLeft = function () {
        this.clearBar();
        this.x-= BAR_SPEED;
        this.drawBar();
    };
    this.moveRight = function () {
        this.clearBar();
        this.x+= BAR_SPEED;
        this.drawBar();
    };
    this.moveBar=function(event) {
        switch (event.which) {
            case 37:
                this.moveLeft();
                break;
            case 39:
                this.moveRight();
                break;
        }
    }
};
let Ball = function(x,y,r){
    this.r=r;
    this.x=x;
    this.y=y;
    this.ctx = document.getElementById("myCanvas").getContext("2d");
    this.drawBall = function () {
        this.ctx.beginPath();
        this.ctx.arc(this.x,this.y,this.r,0,2*Math.PI);
        this.ctx.closePath();
        this.ctx.fill();
    };
    this.clearBall = function () {
        this.ctx.clearRect(this.x-this.r,this.y-this.r,this.r*2,this.r*2);
    };
    this.moveBall = function () {
        this.clearBall();
        this.collisionBrick(ar);
        this.checkedCollision();
        this.drawBall();
    };
    this.checkedCollision = function () {
        if(this.x===this.r||(this.x+this.r)===500){
            ballSpeedX=(-ballSpeedX);
        }
        if ((this.y === bar.y + bar.height + this.r && this.x >= bar.x - this.r && this.x <= bar.x + bar.width + this.r) || (this.y === bar.y - this.r) && this.x >= bar.x - this.r && this.x <= bar.x + bar.width + this.r) {
            ballSpeedY = (-ballSpeedY);
        }
        if ((this.x === bar.x + bar.width + this.r && this.y >= bar.y - this.r && this.y <= bar.y + bar.height + this.r) || (this.x === bar.x - this.r && this.y >= bar.y - this.r && this.y <= bar.y + bar.height + this.r)) {
            ballSpeedX = (-ballSpeedX);
        }
        if(this.y===500-this.r){
            ballSpeedY=0;
            ballSpeedX=0;
            clearInterval(a);
        }
        this.x+=ballSpeedX;
        this.y+=ballSpeedY;
    };
    this.collisionBrick = function (ar) {
        for(let i=0;i<ar.length;i++){
            for(let j=0;j<ar[i].length;j++){
                if ((this.y === ar[i][j].y + ar[i][j].height + this.r && this.x >= ar[i][j].x - this.r && this.x <= ar[i][j].x + ar[i][j].width + this.r) || (this.y === ar[i][j].y - this.r) && this.x >= ar[i][j].x - this.r && this.x <= ar[i][j].x + ar[i][j].width + this.r) {
                    ballSpeedY = (-ballSpeedY);
                    ar[i][j].clearBrick();
                    ar[i][j].x = 1000;
                    ar[i][j].y = 1000;
                }
                if ((this.x === ar[i][j].x + ar[i][j].width + this.r && this.y >= ar[i][j].y - this.r && this.y <= ar[i][j].y + ar[i][j].height + this.r) || (this.x === ar[i][j].x - this.r && this.y >= ar[i][j].y - this.r && this.y <= ar[i][j].y + ar[i][j].height + this.r)) {
                    ballSpeedX = (-ballSpeedX);
                    ar[i][j].clearBrick();
                    ar[i][j].x = 1000;
                    ar[i][j].y = 1000;
                }
            }
        }
    }
};
let Brick = function(x,y,width,height){
    this.x = x;
    this.y = y;
    this.width=width;
    this.height=height;
    this.ctx = document.getElementById("myCanvas").getContext("2d");
    this.drawBrick = function () {
        this.ctx.fillRect(this.x, this.y, this.width, this.height);
    };
    this.clearBrick = function () {
        this.ctx.clearRect(this.x,this.y,20,10);
    };
};
let bar=new Bar(240,450,50,10);
let ball=new Ball(260,445,5);
ball.drawBall();
bar.drawBar();
let ar=[];
for(let i=0;i<5;i++){
    let arr =[];
    ar.push(arr);
    for(let j=0;j<12;j++){
        let t= new Brick(j*40+20,i*30+20,20,10);
        t.drawBrick();
        arr.push(t);
    }
}
let a = setInterval(start,SPEED_BALL);
function start() {
    ball.moveBall();
}
start();