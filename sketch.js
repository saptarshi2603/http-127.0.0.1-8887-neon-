
var hr;
var min;
var sec;












function setup() {
  createCanvas(800,400);

angleMode(DEGREES)






}

function draw() {
  background(255,255,255);  
  translate(200,200) 
  rotate(-90) 
  hr=hour();
  min=minute();
  sec=second();
  noFill()
scAngle=map(sec,0,60,0,360)
push();
rotate(scAngle)
stroke("blue")
line(0,0,100,0)
strokeWeight(4)
 arc(0,0,205,205,0,scAngle)

pop();

minAngle=map(min,0,60,0,360)
push();
rotate(minAngle)
stroke("yellow")
strokeWeight(6)
line(0,0,95,0)
arc(0,0,230,230,0,minAngle);
pop();

hrAngle=map(hr,0,60,0,360)
push();
rotate(hrAngle)
stroke("black")
strokeWeight(4)
line(0,0,120,0)
arc(0,0,255,255,0,hrAngle)
pop();





 drawSprites();




 
}