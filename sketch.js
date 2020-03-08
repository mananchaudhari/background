var r=0,g=100,b=200
function setup(){
  createCanvas(1000,400)

  
}

function draw() {
  r=map(mouseX,0,1000,0,255)
  g=map(mouseX,0,500,0,255)
  b=map(mouseX,500,1000,50,200)
  background(r,g,b);  
ellipse(mouseX,100,50,50)

}